import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const ViewEditToggleBlock = styled.div`${tw`bg-gray-300`}`;
const Heading = styled.p`${tw`text-xl font-bold`}`;
const InputTagWithCancelButton = styled.p`${tw`flex justify-center items-center`}`;
const InputTag = styled.input`${tw``}`;
const CancelButton = styled.button`${tw`bg-blue-500 text-white p-1 m-1`}`;
const StringWithEditButton = styled.div`${tw`flex justify-center items-center`}`;
const StringTag = styled.p`${tw``}`;
const EditButton = styled.button`${tw`bg-blue-500 text-white p-1 m-1`}`;

export {ViewEditToggleBlock,Heading,InputTagWithCancelButton,InputTag,CancelButton,StringWithEditButton,StringTag,EditButton};