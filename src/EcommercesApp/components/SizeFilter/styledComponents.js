import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const SizeFilterTag = styled.div`${tw`w-1/4 `}`;
const SizeTextTag = styled.div`${tw`font-bold m-4 `}`;

const SizeSelectionButtons = styled.div`${tw` m-4`}`;
const SizeSelectButton = styled.button`${tw`rounded-full h-10 w-10 m-1 focus:outline-none text-black`}
background-color:${props=>props.isClicked!==-1?'black':'#edf2f7'}; color:${props=>props.isClicked!==-1?'white':'black'}  ` ;
export {SizeFilterTag,SizeSelectionButtons,SizeSelectButton,SizeTextTag};

//props.isClicked?`black`:`#edf2f7`;ss