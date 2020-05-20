import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const SubTotalTag = styled.div`${tw`m-2 flex  justify-between`}`;
const Amount = styled.div`${tw`text-yellow-600 m-2 flex justify-center items-center`}`;
const SubTotalSubTag = styled.div`${tw`m-2  w-auto`}`;

export {SubTotalTag,Amount,SubTotalSubTag};