import React from 'react';
import { Link } from 'react-router-dom';
import './pageLink.css';

const PageLink = ({ to, onChangeAnim, children, className, ...rest }) => {
    return (
        <Link
            {...rest}
            className={`pageLink ${className}`}
            onClick={onChangeAnim}
            to={to}
        >
            {children}
        </Link>
    );
}

export default PageLink;