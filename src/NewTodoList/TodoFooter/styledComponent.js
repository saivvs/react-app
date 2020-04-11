import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const FooterTag = styled.div`${tw`flex justify-between h-12 w-2/4 items-center`}`;
const TodosCount = styled.div`${tw``}`;
const FilterButtons = styled.div`${tw``}`;
const AllButton = styled.button `${tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow`}`;
const ActiveButton = styled.button `${tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow`}`;
const CompletedButton = styled.button `${tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow`}`;
const ClearCompletedButton = styled.button `${tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow`}`;
const ClearCompletedButtonTag = styled.div`${tw``}`;

export  {FooterTag,TodosCount,FilterButtons,AllButton,ActiveButton,CompletedButton,ClearCompletedButtonTag,ClearCompletedButton};