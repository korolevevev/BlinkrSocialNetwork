import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container-fluid d-flex flex-shrink-0 text-bg-dark p-3" style={{width: '15%', minWidth: '200px', minHeight: '100vh'}}>
            <ul className='container-fluid nav nav-pills px-4 py-4 mb-auto d-flex flex-column'>
                <li className='nav-item'><NavLink to='/' className='nav-link text-white'>Profile</NavLink></li>
                <li className='nav-item'><NavLink to='/messages' className='nav-link text-white'>Messages</NavLink></li>
                <li className='nav-item'><a className='nav-link text-white'>News</a></li>
                <li className='nav-item'><a className='nav-link text-white'>Music</a></li>
                <li className='nav-item'><a className='nav-link text-white'>Settings</a></li>
            </ul>
        </div>
    )
}