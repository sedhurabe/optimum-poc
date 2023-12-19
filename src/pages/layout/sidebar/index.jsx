import { Link } from 'react-router-dom';
import './style.scss';

const SideBar = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    
    return<aside className="aside">
        <Link className='logo' to='/home'>&#9752;</Link>
        <div className='nav-links' onClick={() => handleLogout()}>&#558;</div>
    </aside>
}

export default SideBar