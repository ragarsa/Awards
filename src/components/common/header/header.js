import React from 'react';
import styles from './header.scss'


const Header = () => {
    return (

        <header className={styles.header}>
            <div className="contenedor-header">
                <img src="https://3.bp.blogspot.com/-BTecCeu1euw/XbclFsx-QbI/AAAAAAAANBE/uiEzWwUSbSkhMmGFiK-ITRqVy3yA6BtRwCLcBGAsYHQ/s1600/logoPO2019-180.jpg" />
                <nav>
                    <a href="#" className="emoticon facebook"> Awards </a>
                    <a href="#" className="emoticon twitter"> Museum </a>
                    <a href="#" className="emoticon instagram"> Explore </a>

                </nav>
            </div>
            
        </header>


    )


}

export default Header;