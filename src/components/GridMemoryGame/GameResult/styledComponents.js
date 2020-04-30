
import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const GameResultTag = styled.div`${tw`flex flex-col justify-center items-center m-4 font-bold`}`;
const LevelTag = styled.div`${tw`text-2xl m-2`}`;
const ApprecationTag = styled.div`${tw`text-2xl text-green-500 m-2`}`;
const PlayAgainButton = styled.button`${tw` m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}`;


export {GameResultTag,LevelTag,ApprecationTag,PlayAgainButton};