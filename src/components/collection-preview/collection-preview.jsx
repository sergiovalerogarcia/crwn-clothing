import React from "react";
import CollectionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectionPreview = ({title, items}) => {
  return <div className='collection-preview'>
    <h1> { title.toUpperCase() } </h1>
    <div className="preview">
      {
        items.filter((item, idx) => 
          idx < 4
        ).map(item => 
          <CollectionItem {...item} key={item.id}/>
        )
      }
    </div>
  </div>
}

export default CollectionPreview;