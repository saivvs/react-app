import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const Footer = styled.div`${tw `flex flex-col h-24`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground})}`;
const FooterHeading = styled.div`${tw `text-2xl font-black`}${props=>({color:props.selectedTheme.color})}`;
const FooterDescrption= styled.div`${tw `text-xl ml-10`}${props=>({color:props.selectedTheme.color})}`;

export {Footer,FooterDescrption,FooterHeading};