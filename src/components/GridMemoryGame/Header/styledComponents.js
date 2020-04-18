import tw from 'tailwind.macro';
import styled from '@emotion/styled';

//const selectedTheme={selectedTheme}
const HeaderTag= styled.div`${tw`flex flex-col justify-between m-4 text-xl font-bold`}${props=>({backgroundColor:props.selectedTheme.backgroundColor,width:props.width,color:props.selectedTheme.color})}`;
const ToplevelTag = styled.div`${tw`text-center m-4`}`;
const LevelAndButton = styled.div`${tw`flex justify-between items-center m-4`}`;
const LevelTag = styled.div`${tw``}`;
const ThemeButton = styled.button`${tw`py-1 px-1 text-black border border-gray-500`}${props=>({color:props.selectedTheme.color})}`;

export {HeaderTag,ToplevelTag,LevelAndButton,LevelTag,ThemeButton};