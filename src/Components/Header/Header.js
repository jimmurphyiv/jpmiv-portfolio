import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className='container'>
                <div className='wrapper'>
                    <div className='inner-header'>
                        <div className='logo'>
                            <Link to='/'>Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;


        
