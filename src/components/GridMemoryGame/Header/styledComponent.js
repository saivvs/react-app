import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const HeaderTag= styled.div`${tw``}`;
const ToplevelTag = styled.div`${tw`text-center`}`;
const LevelAndButton = styled.div`${tw`flex `}`;
const LevelTag = styled.div`${tw``}`;
const ThemeButton = styled.button`${tw`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}`;

export {HeaderTag,ToplevelTag,LevelAndButton,LevelTag,ThemeButton};