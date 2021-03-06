import React from 'react';
import './menu-item.component.scss';

export const MenuItem = ({title, imageUrl}) =>(
    <div style={{backgroundImage: `url(${imageUrl})`}} className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop now</span>
        </div>
    </div> 
);

export default MenuItem;