import { observable,action,computed } from 'mobx';
import { API_INTIAL,API_FETCHING,API_SUCCESS,API_FAILED } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import ProductModel from '../Models/ProductModel.js';
class ProductStore {
    
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductAPIError
    @observable sizeFilter
    @observable sortBy
    productAPISerivice
    
    
    constructor(productService){
        this.productAPISerivice = productService;
        this.initilise();
    }
    
    @action.bound
    initilise(){
        this.productList = [];
        this.getProductListAPIStatus = API_INTIAL;
        this.getProductAPIError = null;
        this.sizeFilter = [];
        this.sortBy = 'SELECT';
    }
    
    @action.bound
    getProductList(){
        const ProductPromise = this.productAPISerivice.getProductsAPI();
        return bindPromiseWithOnSuccess(ProductPromise)
        .to(this.setGetProductListAPIStatus,this.setProductListAPIResponse)
        .catch(this.setGetProductListAPIError);
    }
    
    @action.bound
    setProductListAPIResponse(productsData){
        this.productList = (productsData.filter((eachproduct)=>new ProductModel(eachproduct)));
    }
    
    @action.bound
    setGetProductListAPIError(error){
        this.getProductAPIError = error;
    }
    
    @action.bound
    setGetProductListAPIStatus(status){
        this.getProductListAPIStatus = status;
    }
    
    @action.bound
    onChangeSortBy(userSelection){
        this.sortBy = userSelection;
        this.sortedAndFilterProducts;
    }
    
    @action.bound
    onSelectSize(sizeSelectedByUser){
        let isPresent = this.sizeFilter.includes(sizeSelectedByUser);
        if(!isPresent){
            this.sizeFilter.push(sizeSelectedByUser);
        }
        else{
            this.sizeFilter.remove(sizeSelectedByUser);
        }
        this.sortedAndFilterProducts;
        
    }
    
    @computed
    get totalNoOfProductsDispalyed(){
        return this.products.length;
    }
    @computed
    get products(){
        let sizeList=[];
        //alert('start');
        if(this.sizeFilter.length===0){
            sizeList = [...this.productList];
        }
        else{
            sizeList=this.productList.filter(product=>
            (product.availableSizes.filter(size=>(this.sizeFilter.includes(size)))).length>0
            );
        }
        
        if(this.sortBy === 'SELECT'){
            sizeList = sizeList;
        }
        else if(this.sortBy === 'ASCENDING'){
             sizeList = this.productList.sort(function(product1,product2) {return product1.price - product2.price});
        }
        else{
            sizeList = this.productList.sort(function(product1,product2) {return product2.price - product1.price});
        }
        
        return sizeList;
    }
    @computed
    get sortedAndFilterProducts(){
        //alert('sortedAndFilterProducts');
        //console.log(this.products,'products');
        return this.products;
    }
}

export {ProductStore};