import React from 'react';
import './Nav.css';
import { IoMdBookmark, IoMdCall, IoMdChatboxes, IoMdClipboard, IoMdClose, IoMdHammer, IoMdHome, IoMdImage, IoMdMenu, IoMdPerson } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Nav(props) {
    const [sidebar, setSidebar] = React.useState(false);

    const openSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className={sidebar ? "header" : "mob-header"}>
            <div className='menu-icon' onClick={openSidebar}>

                {sidebar ? <IoMdClose className='menu' /> : <IoMdMenu className='menu' />}

            </div>
            <nav>
                <ul className={sidebar ? 'ul-item' : 'ul-item icons'}>
                    <li><IoMdImage className='icon' />
                        <Link to='/'>Alumni</Link></li>
                    <li>
                        <IoMdBookmark className='icon' />
                        <Link to='/'>History</Link>
                    </li>


                    <li>
                        <IoMdPerson className='icon' />
                        <Link to='/'>Testimonials</Link>
                    </li>


                    <li>
                        <IoMdHome className='icon' />
                        <Link to='/'>Partners</Link>
                    </li>


                    <li>
                        <IoMdChatboxes className='icon' />
                        <Link to='/'>About</Link>
                    </li>


                    <li>
                        <IoMdHammer className='icon' />
                        <Link to='/'>Tutorials</Link>
                    </li>



                    <li>
                        <IoMdCall className='icon' />
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;