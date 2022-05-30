import React from 'react';
import './Header.css';

const Header = props => {
    const { title } = props;

    return (
        <div className="title">
           {title}
        </div>
    )
}

export default Header;