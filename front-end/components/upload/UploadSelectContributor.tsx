import styled from 'styled-components';
import { GET_Contributor, GET_Echo } from '../../service/service';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';


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

const AreaInteration_ContainerTitle_NewContributor = styled.div`       
       height: 100%;       
       margin-left:0px ;     

       button {
            margin-top: 30px ;
            float: right;        
       }

`

const AreaInteration_ContributorList = styled.div`
    width: 100%;
    background-color: ${props => props.selected ? '#dddddd' : '#fcfcfc'};
    border: 1px solid;
    border-color: #dddddd;
    padding: 10px;
    margin-top: 5px ;

    :hover {
        background-color: #dddddd;
        cursor: pointer;
    }

    p {
        font-weight: bold ;
    }
`;

const UploadSelectContributor = ({onStepConclued, contributors}) => {
    const [contributorSelected, setContributorSelected] = useState('');
    
    const onClickContributorList = (index) => {        
        setContributorSelected(index);        
        onStepConclued();        
    }     
    
    const router = useRouter();
    const onGotoNewContributor = (e) => {
        e.preventDefault();       
        router.push('/contributor');
    }

    return (
        <AreaInteration >            
            <AreaInteration_ContainerTitle>
                <div >
                    <AreaInteration_ContainerTitle_Title>Select a Contributor</AreaInteration_ContainerTitle_Title>
                    <AreaInteration_ContainerTitle_SubTitle>The Contributor is the instituion which will be contributing the images.</AreaInteration_ContainerTitle_SubTitle>                
                </div>
                <div >
                    <AreaInteration_ContainerTitle_NewContributor>
                        <button type='submit' onClick={onGotoNewContributor}>New Contributor</button>
                    </AreaInteration_ContainerTitle_NewContributor>                    
                </div>
            </AreaInteration_ContainerTitle>
            
            
            {contributors?.map( (item, index) => (                
                    <AreaInteration_ContributorList key={item.idContributor}  onClick={() => onClickContributorList(item.idContributor)}
                    selected={contributorSelected == item.idContributor}>
                        <p>{item.institutionName}</p>
                    </AreaInteration_ContributorList>                    
            ))}
            
        </AreaInteration>
    )
};


export default UploadSelectContributor;