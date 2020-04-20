import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const AddTodoTag = styled.div`${tw`flex flex-col justify-center items-center`}`;
const TodoEnter = styled.input`${tw`border bg-gray-200 h-12 w-2/4 text-xl font-bold`}`;
const TodoHeading = styled.div`${tw`text-6xl text-red-300`}`;

export {AddTodoTag,TodoEnter,TodoHeading};