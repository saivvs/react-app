import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const PaginationButtonContainer = styled.div`${tw`flex `}`;
const PaginationButtonTag = styled.button`${tw`border`}`;
const PaginationButtonNumber = styled.p`${tw`border p-1`}`;

export {PaginationButtonTag,PaginationButtonContainer,PaginationButtonNumber};