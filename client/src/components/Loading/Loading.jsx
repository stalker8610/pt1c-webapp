import classes from './Loading.module.css'
import imgLoading from './loading.gif'

const Loading = (props) => {

    return <img className={classes.loader}
        width={props.width ? props.width : '32px'}
        height={props.height ? props.height : '32px'} src={imgLoading} alt='loading' />

}

export default Loading;