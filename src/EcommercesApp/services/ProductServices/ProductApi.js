import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants.js';

import {endpoint} from '../endpoints';

class ProductService {
    
    api
    
    constructor(){
        this.api = create ({
            baseURL : 'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/'
        });
    }
    
    getProductsAPI(limit,offset){
        const productPromise = networkCallWithApisauce(
            this.api,
            endpoint(limit,offset),
            {},
            apiMethods.get
            );
            
            return productPromise;
    }
}

export default ProductService;