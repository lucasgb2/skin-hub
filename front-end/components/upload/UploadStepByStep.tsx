import styled from 'styled-components';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const AreaStep = styled.div`
    grid-area: 'step' ;
    display: flex;
    flex-direction: row;        
    justify-content: center;
    
`
const BoxStep = styled.div`    
    background-color: #fcfcfc;
    border: 1px solid;
    border-color: #dddddd;
    width: 400px;    
    height: 90px;   
    margin: 1px ;
    margin-top: 10px ;    
    display: flex;
    flex-direction: row;
    align-items: center;   

    .sequence{        
        //background-color: green ;
        height: 100%;
        width: 20%;              
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sequence_circle {
        background-color: ${(props) => props.stepConluded ? '#6a4c93' : 'white'} ;        
        height: 40px ;
        width: 40px ;
        border-radius: 50% ;        
        border: 2px solid;
        border-color: ${(props) => props.stepActive ? '#6a4c93' :props.stepConluded ? 'white' : '#dddddd'} ;        
        font-size: 18px ;
        font-weight: bold;
        
        p {
            text-align: center;                
            margin-top: 5px ;            
            color: ${(props) => props.stepActive ? '#6a4c93' : props.stepConluded ? 'white' : '#dddddd'}
        }
    }

    .title{
        margin-left: 10px ;
    }

    .title_title{
        font-size: 18px ;
        font-weight: ${(props) => props.stepActive ? 'bold' : 'normal'} ;
        color: ${(props) => props.stepActive ? '#6a4c93' : 'black'}
        
    }

    .iconarrow{
        //font-size: 20px ;        
        //text-align: right;        
        //margin-left: 28% ;
        //color: #6a4c93 ;  
    }
`
const UploadStepByStep = ({stepActive, stepConclued}) => {    
    let steps = [{sequence: 1, title:'Contributor Select', description:'How is the contributor'},
                   {sequence: 2, title:'Define Image Group', description:'How is the contributor'},
                   {sequence: 3, title:'Upload Images', description:'How is the contributor'}]


    return (        
        <AreaStep>                    
            {steps.map((item, index) => (
                <BoxStep key={index} stepActive={stepActive == item.sequence} stepConluded={stepConclued = (stepActive > item.sequence)}>     
                    <div className='sequence'>
                        <div className='sequence_circle'>
                            <p>{item.sequence}</p>
                        </div>             
                    </div>  
                    <div className='title'>
                        <div className='title_title'>{item.title}</div>
                        <div>{item.description}</div>                            
                        
                    </div>
                </BoxStep>
            ))}
        </AreaStep>        
    )
}

export default UploadStepByStep;