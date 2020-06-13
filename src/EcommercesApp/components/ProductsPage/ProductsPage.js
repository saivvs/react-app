import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';



import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure';
import {PaginationButton} from '../../../common/components/PaginationButton';
import {ProductsPageTag,SignOutButton,ProductsPageSubTag,HeaderAndProductListTag,SignOutButtonAndCartTag} from './styledComponents.js';
import {SizeFilter} from '../SizeFilter';
import {Header} from '../Header';
import {ProductsList} from '../ProductList';
import {ProductCart} from '../ProductCart';

@inject('productStore','cartStore')
@observer
class ProductsPage extends Component{
    doNetworkCalls=()=>{
        this.getProductStore().getProductList();   
    }
    renderProductList=observer(()=>{
        
        const {sortedAndFilterProducts,onSelectSize,onChangeSortBy,totalNoOfProductsDispalyed,sizeFilter,setOffSetValue,currentPage,totalPages}=this.props.productStore;
        const {onClickAddToCart} = this.props.cartStore;
        return(
            
            <ProductsPageTag>
            <SignOutButtonAndCartTag>
            <SignOutButton onClick={this.onClickSignOut}>
                Sign Out
            </SignOutButton>
            <ProductCart />
            </SignOutButtonAndCartTag>
            <ProductsPageSubTag>
            <SizeFilter  onSelectSize={onSelectSize} sizeFilter={sizeFilter}/>
            <HeaderAndProductListTag>
            <Header onChangeSortBy={onChangeSortBy} totalNoOfProductsDispalyed={totalNoOfProductsDispalyed}/>
            <ProductsList productList={sortedAndFilterProducts} onClickAddToCart={onClickAddToCart}/>
            </HeaderAndProductListTag>
            </ProductsPageSubTag>
            <PaginationButton currentPage={currentPage} totalPages={totalPages} handleIncrementButton={setOffSetValue} handleDecerementButton={setOffSetValue}/>
            </ProductsPageTag>
            
            );
    })
    
    getProductStore=()=>{
        return this.props.productStore;
    }
    componentDidMount(){
        this.doNetworkCalls();   
    }
    onClickSignOut=()=>{
        const {history} = this.props;
        history.replace('/signin');
        this.props.authStore.userSignOut() ;  
    }
    
    render(){
        const {getProductListAPIStatus,getProductListAPIError} = this.props.productStore;
        return(
                       <LoadingWrapperWithFailure
                    apiStatus={getProductListAPIStatus}
                    apiError = {getProductListAPIError}
                    onRetryClick = {this.doNetworkCalls}
                    renderSuccessUI = {this.renderProductList}
                    />      

                    
                    );
    }
}

export  {ProductsPage};