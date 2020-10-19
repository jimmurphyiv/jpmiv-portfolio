import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Header/jim.logo.svg'

const Header = () => {
    return(
      
          
            // <div className='container'>
            //     <div className='wrapper'>
            //         <div className='inner-header'>
                        <div className='logo'>
                            <Link to='/'><img src={Logo} alt='jim-logo'/></Link>
                        </div>
            //         </div>
            //     </div>
            // </div>
       
    );
};

export default Header;


        
