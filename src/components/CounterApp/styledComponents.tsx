import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CounterAppTag = styled.div`${tw`m-20 flex flex-col justify-center items-center`}`;
const CounterAppSubTag1 = styled.div`${tw`text-3xl mb-2 font-bold`}`;
const CounterAppSubTag2 = styled.div`${tw`flex`}`;
const Button = styled.button`${tw`bg-blue-700 text-white font-bold py-2 px-4 rounded`}`;
const Count = styled.div `${tw`border border-orange-500 w-32 flex justify-center items-center mr-2 ml-2 rounded`}`;
const IncrementButton = styled.div`${tw``}`;
const DecrementButton = styled.div`${tw``}`;

export {CounterAppTag,CounterAppSubTag1,CounterAppSubTag2,Button,Count,IncrementButton,DecrementButton};