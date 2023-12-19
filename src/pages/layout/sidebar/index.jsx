import { Link } from 'react-router-dom';
import './style.scss';

const SideBar = () => {
    return<aside className="aside">
        <Link className='logo' to='/home'>&#9752;</Link>
    </aside>
}

export default SideBar