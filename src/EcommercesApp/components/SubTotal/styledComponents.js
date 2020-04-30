import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const SubTotalTag = styled.div`${tw`m-2 flex  justify-between`}`;
const Amount = styled.div`${tw`text-yellow-400 m-2`}`;
const SubTotalSubTag = styled.div`${tw`m-2 border border-white w-auto`}`;

export {SubTotalTag,Amount,SubTotalSubTag};