import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const CellTag = styled.div`${tw`m-1 bg-gray-700`}
                ${props=>({width:props.cellWidth,height:props.cellWidth})};
                pointer-events:${props=>props.disable};
                background-color:${props=>props.selectedTheme.cellbgColor}`;
                
const DisplayCellTag = styled.div`${tw` m-1 `}
                        ${props=>({width:props.cellWidth,height:props.cellWidth})};
                        background-color:${props=>props.hide?props.selectedTheme.cellbackgroundColor:props.selectedTheme.cellbgColor};
                        pointer-events:${props=>props.disable}`;
                        
const ShowCellTag = styled.div`${tw`m-1 `}
                    ${props=>({width:props.cellWidth,height:props.cellWidth})};
                    background-color:${props=>props.selectedTheme.cellbackgroundColor};
                    pointer-events:${props=>props.disable}`;
                    
const DisplayErrorCellTag = styled.div`${tw`m-1 bg-red-700`}
                            ${props=>({width:props.cellWidth,height:props.cellWidth})};
                            pointer-events:${props=>props.disable};`;

export  {DisplayErrorCellTag,CellTag,DisplayCellTag,ShowCellTag};






