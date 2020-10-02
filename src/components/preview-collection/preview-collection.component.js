import React from 'react';

import CollectionItem from '../collection-items/collection-item.component';
import './preview-collection.component.scss';

const PreviewCollection = ({title, items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
                <div className="preview">
                {items.filter((item,index)=> index < 4).map(({id, ...otherItemProps}) =>(
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                ))}
                </div>
        </div>
    )
}

export default PreviewCollection;