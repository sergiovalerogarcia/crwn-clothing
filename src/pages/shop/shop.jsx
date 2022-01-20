import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { shopData } from "./shop.data";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: shopData,
    };
  }
  render() {
    const { collections } = this.state;
    return <div className='shop-page'>
    {
      collections.map(collection => 
        <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>
      )
    }
  </div>
  }
}

export default ShopPage;