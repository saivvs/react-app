import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductTag = styled.div`${tw`flex flex-col m-4 `}`;
const ProductSubTag = styled.div`${tw`flex flex-col items-center   w-48`}`;
const ProductDiscrption = styled.div`${tw`h-40 text-center`}`;
const ProductImage = styled.img`${tw`h-48`}`;
const ProductTitleTag = styled.div`${tw`text-center h-12`}`;
const ProductPriceTag = styled.div`${tw`h-12`}`;
const ProductEMITag = styled.div`${tw``}`;
const AddCartButton = styled.button`${tw`bg-black hover:bg-black text-white font-normal py-2 px-4 border border-black rounded my-2`}`;

export {ProductTag,ProductSubTag,ProductImage,ProductDiscrption,ProductTitleTag,ProductPriceTag,ProductEMITag,AddCartButton}