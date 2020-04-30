import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const CartItemTag = styled.div`${tw`flex text-sm my-2 items-center relative`}`;
const Image = styled.img`${tw`w-12 object-contain`}`;
const Title = styled.div`${tw`text-white`}`;
const CartItemSubTag = styled.div`${tw`ml-2 flex-1`}`;
const RemoveItem = styled.div`${tw`font-bold absolute top-0 right-0`}`;
const ProductStyle = styled.div`${tw`text-gray-500 text-xs `}`;
const ProductQuantity = styled.div`${tw`text-gray-500 text-xs`}`;
const ProductPrice = styled.div`${tw`text-yellow-600 ml-auto`}`;

export {CartItemTag,Image,Title,RemoveItem,CartItemSubTag,ProductStyle,ProductQuantity,ProductPrice};