/*global jest*/
/*global expect*/

import { API_SUCCESS,API_FAILED,API_FETCHING,API_INTIAL} from '@ib/api-constants';
import ProductsData from '../../fixtures/getProductData.json';
import  ProductService  from '../../services/ProductServices/ProductApi.js';
import {ProductStore}  from '.';

describe ('ProductStore tests',()=>{
     let productService;
    let productStore;
    
    beforeEach(()=>{
        productService = new ProductService();
        productStore = new ProductStore(productService);
    });
    
    it("should test initialsing product store",()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INTIAL);
        expect(productStore.getProductAPIError).toBe(null);
    });
    
      
    it("should test data fetching state",() =>{
            const mockLoadingPromise = new Promise(function(resolve, reject) {});
            const mockProudctsAPI = jest.fn();
            mockProudctsAPI.mockReturnValue(mockLoadingPromise);
            productService.getProductsAPI = mockProudctsAPI;
            
            productStore.getProductList();
            expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });
    
    it("should test data success state", async () =>{
        const mockSuccessPromise = new Promise (function(resolve,reject) {
            resolve(ProductsData);
        });
        const mockProudctsAPI = jest.fn();
        mockProudctsAPI.mockReturnValue(mockSuccessPromise);
        productService.getProductsAPI = mockProudctsAPI;
        
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
    });
    
    it('should test data failure state', async () =>{
        const mockFailurePromise = new Promise (function(resolve,reject) {
            reject(new Error('error'));
        });
        
        const mockProductsAPI = jest.fn();
        mockProductsAPI.mockReturnValue(mockFailurePromise);
        productService.getProductsAPI = mockProductsAPI;
        
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
    });
    
    it('should test sizeFilter', ()=>{
        
    });
})