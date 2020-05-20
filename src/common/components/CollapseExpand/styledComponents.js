import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CollapseExpandBlock = styled.div`${tw`bg-gray-400`}`;
const Heading = styled.p`${tw`text-xl font-bold`}`;
const ShoppingList = styled.div`${tw` flex justify-center`}`;
const CollapseButtonWithList = styled.div`${tw``}`;
const CollapseButton = styled.button`${tw`bg-blue-500 text-white p-1 m-1`}`;
const List = styled.ul`${tw``}`;
const Items = styled.li`${tw``}`;
const ExpandButton = styled.button`${tw`bg-blue-500 text-white p-1 m-1`}`;

export {CollapseExpandBlock,Heading,ShoppingList,CollapseButtonWithList,CollapseButton,List,Items,ExpandButton};