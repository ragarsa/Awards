import React from 'react';
import './header.scss'


const Header = () => {
    return (

        <header className="header">
            <div className="containerLogo">
                <img src="https://3.bp.blogspot.com/-BTecCeu1euw/XbclFsx-QbI/AAAAAAAANBE/uiEzWwUSbSkhMmGFiK-ITRqVy3yA6BtRwCLcBGAsYHQ/s1600/logoPO2019-180.jpg" />
                <nav>
                    <a href="/home" className="emoticon facebook"> Home </a>
                    <a href="#" className="emoticon twitter"> Museum </a>
                    <a href="#" className="emoticon instagram"> Explore </a>

                </nav>
            </div>
            
        </header>


    )


}

export default Header;