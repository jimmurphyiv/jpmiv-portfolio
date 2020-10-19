import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div className='hamburger-menu'>
            <div className='menu-secondary-background-color'>
                <div className='menu-layer'>
                    <div className='menu-link-background'>
                        <div className='container'>
                            <div className='wrapper'>
                                <div className='menu-links'>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to='/About'>ABOUT</Link>
                                            </li>
                                            <li>
                                                <Link to='/Connect'>CONNECT</Link>
                                            </li>
                                            <li>
                                                <Link to='/Links'>LINKS</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Nav;