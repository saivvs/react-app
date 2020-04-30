import React,{ Component } from 'react';
import {observable} from 'mobx';
import { observer } from "mobx-react";

class ProductModel extends Component{
    
    @observable productId
    @observable avilableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    
    
    constructor(props){
        super(props);
        this.initilise(props);
    }
    
    initilise=(data)=>{
       
        const {avilableSizes,currencyFormat,currencyId,description,id,installments,isFreeShipping,price,style,title,image} = data;
        this.productId = id;
        this.avilableSizes = avilableSizes;
        this.currencyFormat = currencyFormat;
        this.currencyId = currencyId;
        this.description = description;
        this.installmentsCount = installments;
        this.isFreeShipping = isFreeShipping;
        this.price = price;
        this.printStyle = style;
        this.title = title;
        this.imageURL = image;
    }
}

export default ProductModel;