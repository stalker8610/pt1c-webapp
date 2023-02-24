import { fetchFiles, selectFilesForComponent } from "../../redux/filesSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FileLink from './FileLink/FileLink';
import classes from './Content.module.css';
import Loading from "../Loading/Loading";
import copyIcon from './icon-copy.png';


const Content = (props) => {

    let { componentType } = useParams();
    /* componentType = componentType || 'server'; */
    const dispatch = useDispatch();
    const status = useSelector(state => state.files.status);
    const files = useSelector(selectFilesForComponent(componentType));

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchFiles());
        }
    }, [status, dispatch])

    const getAbsoluteLink = (path) => {
        return ` http://file.alexrovich.ru:8008/DEV/TelephonyPanel/${path.replace(/\\/g, '/')}`;
    }

    const formatFileSize = (size) => {
        if (size >= 1024 ** 2) {
            return (size / 1024 ** 2).toFixed(2) + 'Mb';
        } else if (size >= 1024) {
            return (size / 1024).toFixed(2) + 'Kb';
        }
    }

    const formatFileDate = (date) => {
        const dateObject = new Date(date);
        return `${('0' + dateObject.getDate()).slice(-2)}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${dateObject.getFullYear()}`;
    }

    const copyToClipboard = (e, link) => {
        navigator.clipboard.writeText(link)
            .then(() => {
                /* alert('copied'); */
            })
            .catch(err => {
                alert(`Something went wrong: ${err}`);
                console.log('Something went wrong', err);
            });
    }

    const renderFiles = () => {
        return <div>
            <h2>Release files:</h2>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th className={classes.leftAligned}>Filename</th>
                        <th >Size</th>
                        <th >Created</th>
                        <th></th>
                    </tr>
                    {files.map((el, index) => <tr>
                        <td className={classes.centered}>{index + 1}</td>
                        <td><FileLink key={el.fileName} href={getAbsoluteLink(el.path)} fileName={el.fileName} /></td>
                        <td className={classes.centered}>{formatFileSize(el.size)}</td>
                        <td className={classes.centered}>{formatFileDate(el.date)}</td>
                        <td className={classes.centered}>
                            <button>
                            <img title='Copy link' src={copyIcon} onClick={(e) => copyToClipboard(e, getAbsoluteLink(el.path))} />
                            </button>
                            </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }

    return <div className={classes.content}>
        {status === 'loading' && <Loading />}
        {status === 'succeded' && renderFiles()}
    </div>
}

export default Content;