import React from 'react';
import './Header.css';
import HeaderStyles from './HeaderStyles.module.css';

const Header = props => {
    const { title } = props;

    return (
        <div className={HeaderStyles.title}>
           {title}
        </div>
    )
}

export default Header;