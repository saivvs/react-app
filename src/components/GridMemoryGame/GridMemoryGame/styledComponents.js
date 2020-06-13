import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const GridMemoryGameTag = styled.div`${tw`flex flex-col items-center h-screen justify-center w-auto`}${props=>({backgroundColor:props.selectedTheme.BackgroundColor,color:props.selectedTheme.color})}`;

export default  GridMemoryGameTag;

