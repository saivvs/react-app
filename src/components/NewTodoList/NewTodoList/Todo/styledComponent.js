import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const TodosTag = styled.div`${tw`flex justify-center items-center`}`;
const TodoTag = styled.div`${tw`w-2/4 border  bg-gray-200 flex justify-center items-center`}`;
const TodoCheckBox = styled.input `${tw`h-12 w-8`}`;
const TodoInput = styled.input `${tw`h-12 w-full bg-gray-200`}
                    text-decoration:${props=>props.checked?'line-through':'none'};`;
const RemoveButton = styled.button `${tw`h-12 `}`;

export {TodosTag,TodoTag,TodoCheckBox,TodoInput,RemoveButton};