import tw from 'tailwind.macro';
import styled from '@emotion/styled';
const ProductCartTag = styled.div`${tw``}`;
const InitalCart = styled.div`${tw`text-4xl m-2 p-1 text-center flex items-center justify-center text-white bg-gray-800`}`;
const ProductCartSubTag = styled.div`${tw`  text-white bg-gray-800 z-50 fixed top-0 right-0 w-1/3 h-screen flex-col`};
                       display:${props=>props.shouldDisplayCart?'flex':'none'}`;
              
const CartLogo = styled.div`${tw`flex justify-center items-center text-3xl`}`;
const CartListTag = styled.div`${tw``}`;
const Footer = styled.div`${tw`absolute bottom-0  p-4 bg-gray-800 shadow-inner  w-full `}`;
export {ProductCartTag,ProductCartSubTag,CartLogo,InitalCart,Footer,CartListTag};