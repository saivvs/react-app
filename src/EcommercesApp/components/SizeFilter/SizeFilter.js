import React,{Component} from 'react';
import {observer} from 'mobx-react';


import {SizeFilterTag,SizeSelectionButtons,SizeSelectButton,SizeTextTag} from './styledComponents.js';

@observer
class SizeFilter extends Component{
    
    onSelectedSize=(event)=>{
        const{onSelectSize}=this.props;
        onSelectSize(event.target.value);
    }
    render(){
        const{sizeFilter} =this.props;
        console.log('sizeFilter==',sizeFilter.indexOf('S'));
        return(
                <SizeFilterTag>
                    <SizeTextTag>
                    Sizes: 
                    </SizeTextTag>
                    <SizeSelectionButtons>
                        <SizeSelectButton isClicked={sizeFilter.indexOf('XS')} onClick={this.onSelectedSize} value='XS'>
                            XS
                        </SizeSelectButton >
                        <SizeSelectButton isClicked={sizeFilter.indexOf('S')} onClick={this.onSelectedSize} value='S'>
                            S
                        </SizeSelectButton>
                        <SizeSelectButton  isClicked={sizeFilter.indexOf('M')} onClick={this.onSelectedSize} value='M'>
                            M
                        </SizeSelectButton>
                        <SizeSelectButton  isClicked={sizeFilter.indexOf('L')} onClick={this.onSelectedSize} value='L'>
                            L
                        </SizeSelectButton>
                        <SizeSelectButton   isClicked={sizeFilter.indexOf('XL')} onClick={this.onSelectedSize} value='XL'>
                            XL
                        </SizeSelectButton>
                        <SizeSelectButton  isClicked={sizeFilter.indexOf('XXL')} onClick={this.onSelectedSize} value='XXL'>
                            XXL
                        </SizeSelectButton>
                    </SizeSelectionButtons>
                </SizeFilterTag>
            );
    }
}

export {SizeFilter};