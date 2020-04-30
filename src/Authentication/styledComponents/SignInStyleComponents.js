import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const SignInPage = styled.div`${tw`flex flex-col justify-center items-center h-screen bg-gray-400`}`;
const SignInBox = styled.div`${tw`flex flex-col font-bold justify-between  p-6 h-64 bg-white border border-current`}`;
const UserNameTag = styled.input`${tw`h-10 p-2 border border-current my-2`}`;
const PasswordTag = styled.input`${tw`h-10 p-2 border border-current my-2`}`;
const SignInButton = styled.button`${tw`bg-black hover:bg-black text-white font-normal py-2 px-4 border border-black rounded my-2`}`;
const ErrorMessageTag = styled.div`${tw`text-red-600 font-normal -mt-0 text-xs`}`;


export {SignInPage,SignInBox,UserNameTag,PasswordTag,SignInButton,ErrorMessageTag};