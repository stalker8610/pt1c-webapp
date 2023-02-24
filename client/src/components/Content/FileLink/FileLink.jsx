import classes from './FileLink.module.css';

const FileLink = (props) => {

    return <div className={classes.fileLink}>
        <a href={props.href} target="_blank" title='Download file'>{props.fileName}</a>
    </div>

}

export default FileLink;