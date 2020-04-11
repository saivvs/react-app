import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const WinOrLoseTag = styled.div`${tw `flex flex-col justify-center items-center h-screen`}${props=>({backgroundColor:props.selectedTheme.backgroundColor})}`;
const Score = styled.div`${tw`text-2xl font-bold`}${props=>({color:props.selectedTheme.scoreColor})}`;
const GameState = styled.div`${tw`text-2xl mt-2 mb-2`}${props=>({color:props.gameStateTextColor})}`;
const PlayAgainButton = styled.button`${tw `text-2xl p-2 text text-white rounded`}background-color:#667EEA`;

export {WinOrLoseTag,PlayAgainButton,Score,GameState};