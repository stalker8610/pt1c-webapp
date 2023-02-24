import classes from './Navbar.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const getLinkClassName = ({ isActive }) => {
        if (isActive){
            return classes.link + ' ' + classes.active;
        } else {
            return classes.link;
        }
    }

    const getSubmenuClassName = () => {
        if (location.pathname.indexOf('extension')!==-1){
            return classes.link + ' ' + classes.active;
        } else {
            return classes.link;
        }
    }

    return <div className={classes.navbar}>
        <NavLink className={getLinkClassName} to="/component/server">Server</NavLink>
        <NavLink className={getLinkClassName} to="/component/client">Client</NavLink>
        <div className={classes.dropdown}>
            <a className={getSubmenuClassName()} href="#" onClick={(e)=>{e.preventDefault();}}> Extension 1C</a>
            <div className={classes.dropdownContent}>
                <NavLink className={getLinkClassName} to="/component/extensionUT">UT</NavLink>
                <NavLink className={getLinkClassName} to="/component/extensionUNF">UNF</NavLink>
            </div>
        </div>
        <NavLink className={getLinkClassName} to="/component/manual">Manual</NavLink>
    </div >
}

export default Navbar;