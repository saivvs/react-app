import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const GameFieldTag = styled.div`${tw`flex flex-wrap `};width:${props=>props.width}px`;

export default  GameFieldTag;