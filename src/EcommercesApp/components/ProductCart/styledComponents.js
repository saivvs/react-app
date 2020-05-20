import tw from 'tailwind.macro';
import styled from '@emotion/styled';
const ProductCartTag = styled.div`${tw``}`;

const InitalCart = styled.div`${tw`text-4xl m-2 p-2 text-center  flex items-center justify-center text-white bg-gray-800 w-20`}`;
const ProductCartSubTag = styled.div`${tw`text-white bg-gray-800 z-50 fixed top-0 right-0 w-1/3 h-screen flex-col`};
                       display:${props=>props.shouldDisplayCart?'flex':'none'}`;
const CartHeader = styled.div`${tw`flex`}`;   
const CartCloseButton = styled.button`${tw`text-l -ml-6 p-2 text-center text-white bg-gray-800 `}`;
const CartLogo = styled.div`${tw`text-4xl p-1 m-2  ml-24 flex justify-center items-center  `}`;
const CartItemsCount = styled.span`${tw`text-sm -ml-4 text-yellow-600`}`;
const CartText = styled.div`${tw`text-lg text-center flex  ml-2 justify-center items-center`}`;
const CartListTag = styled.div`${tw`p-2`}`;
const Footer = styled.div`${tw`absolute bottom-0  p-4 bg-gray-800 shadow-inner  w-full `}`;
export {ProductCartTag,ProductCartSubTag,CartLogo,InitalCart,Footer,CartListTag,CartHeader,CartCloseButton,CartText,CartItemsCount};