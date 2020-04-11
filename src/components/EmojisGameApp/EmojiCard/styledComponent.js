import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const EmojiCardTag = styled.div`${tw ` w-64 h-64 border-solid border-black border m-6 flex flex-col items-center justify-center`}${props=>({backgroundColor:props.selectedTheme.emojiBackgroundColor})}`;
const Image = styled.div`${tw `w-4/5`}`;
const EmojiName = styled.div`${tw `text-base text-center`}${props=>({color:props.selectedTheme.color})}`;

export {EmojiCardTag,Image,EmojiName};