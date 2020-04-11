import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const Footer = styled.div`${tw `flex flex-col h-16`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground})}`;
const FooterHeading = styled.div`${tw `text-2xl font-black`}`;
const FooterDescrption= styled.div`${tw `text-lg ml-10`}`;

export {Footer,FooterDescrption,FooterHeading};