import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductTag = styled.div`${tw`flex flex-col m-4 `}`;
const ProductSubTag = styled.div`${tw`flex flex-col items-center   w-48`}`;
const ProductDiscrption = styled.div`${tw`h-40 text-center`}`;
const Freeshipping = styled.span`${tw`text-white text-sm bg-black p-1 mt-4  ml-20 absolute`}`;
const ProductImage = styled.img`${tw`h-48`}`;
const ProductTitleTag = styled.div`${tw`text-center h-12`}`;
const ProductTitleTagBorder = styled.hr`${tw`w-4 ml-20 flex justify-center items-center flex-grow border-t-2 rounded border-yellow-600 mt-2 mb-4 `}`;
const ProductPriceTag = styled.div`${tw`h-10`}`;
const ProductEMITag = styled.div`${tw``}`;
const AddCartButton = styled.button`${tw`bg-black hover:bg-black text-white font-normal py-2 px-4 border border-black rounded my-2`}`;

export {ProductTag,ProductSubTag,Freeshipping,ProductImage,ProductDiscrption,ProductTitleTag,ProductPriceTag,ProductEMITag,AddCartButton,ProductTitleTagBorder}