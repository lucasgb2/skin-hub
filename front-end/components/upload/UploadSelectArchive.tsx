import styled from 'styled-components';
import { GET_Contributor, GET_Echo } from '../../service/service';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';


/*
export async function getServerSidePropsf() {    
    const contributors = await GET_Contributor();
    return {
      props: { contributors }, // will be passed to the page component as props
    }
  }
*/
const AreaInteration = styled.div`
    //background-color: green ;
    grid-area: 'interation' ;
    margin: auto ;
    display: flex;    
    flex-direction: column;       
    align-items : start ;
    width: 80% ;    
    height: 100%;
`
const AreaInteration_ContainerTitle = styled.div`
    //background-color: green ;
    display: flex;    
    flex-direction: row;      
    width: 100%;    
    height: 100px;
    

    div {
        width: 100%;
    }
`

const AreaInteration_ContainerTitle_Title = styled.p`
    color: #0077b6 ;
    font-size: 30px;
    text-align: left;
    margin-top: 10px;
    margin-left: 10px;    
    margin-bottom: 0px;
    flex-basis: 800px ;
    
`

const AreaInteration_ContainerTitle_SubTitle = styled.p`
    color: gray ;
    font-size: 15px;
    text-align: left;
    margin-top: 5px;
    margin-left: 10px;    
`


const AreaInteration_SelectArchiveImage = styled.div`
    width: 100%;
    background-color: ${props => props.selected ? '#dddddd' : '#fcfcfc'};
    border: 1px solid;
    border-color: #dddddd;
    padding: 10px;
    margin-top: 5px ;
    height: 100px ;
    display: grid;
    grid-template-columns: 1fr auto ;
    grid-template-rows: 50px 50px;
    grid-template-areas:
        'title title'
        'field button' ;

    .title {
        grid-area: 'title';
        color: #0077b6 ;
        font-size: 20px;        
        margin-top: 10px;
        margin-left: 10px;    
        margin-bottom: 0px;        
        
    }

    .field {        
        grid-area: 'field';
        margin-left: 10px;    
        
    }

    .buttonchosse {        
        grid-area: 'button';
        margin-left: 20px;  
        height: 45px;          
    }


`

const UploadImageSelect =  ({onStepConclued}) => {    
    const router = useRouter();   

    return (
        <AreaInteration >
            <AreaInteration_ContainerTitle>
                <div >
                    <AreaInteration_ContainerTitle_Title>Select Archive Image</AreaInteration_ContainerTitle_Title>
                    <AreaInteration_ContainerTitle_SubTitle>The Contributor is the instituion which will be contributing the images.</AreaInteration_ContainerTitle_SubTitle>                
                </div>                
            </AreaInteration_ContainerTitle>    

            <AreaInteration_SelectArchiveImage>                
                    <p className='title'>ZIP file</p>
                    <span></span>
                    <input className='field' type='text'></input>        
                    <button className='buttonchosse'>Choose File</button>                    
            </AreaInteration_SelectArchiveImage>

            <AreaInteration_SelectArchiveImage>                
                    <p className='title'>Metadado</p>
                    <span></span>
                    <input className='field' type='text'></input>        
                    <button className='buttonchosse'>Choose File</button>                    
            </AreaInteration_SelectArchiveImage>
        </AreaInteration>
    )
};

export default UploadImageSelect;