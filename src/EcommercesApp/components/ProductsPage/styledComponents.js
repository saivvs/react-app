import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const ProductsPageTag = styled.div `${tw`relative`}`;
const HeaderAndProductListTag = styled.div `${tw`flex  flex-col w-3/4 `}`;
const ProductsPageSubTag = styled.div`${tw`flex`}`;
const SignOutButton = styled.button`${tw` m-4 bg-white hover:bg-gray-100 text-gray-800  p-1 border border-gray-400 rounded shadow  `}`;
const SignOutButtonAndCartTag = styled.div`${tw`flex justify-between`}`;
const CartSymbolTag = styled.div`${tw`text-4xl m-2 p-1 text-center flex items-center justify-center text-white bg-gray-800`}`;

export {CartSymbolTag,ProductsPageTag,HeaderAndProductListTag,ProductsPageSubTag,SignOutButton,SignOutButtonAndCartTag};