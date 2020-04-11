import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const EmojiGameAppTag=styled.div`${tw``}`;
const EmojisCards = styled.div`${tw `flex flex-wrap justify-center items-center`}${props=>({backgroundColor:props.selectedTheme.backgroundColor})}`;

export {EmojiGameAppTag,EmojisCards};