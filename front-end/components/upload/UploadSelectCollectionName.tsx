import styled from 'styled-components';
import { GET_Contributor, GET_Echo } from '../../service/service';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { dispatch_SELECTED_COLLECTIONNAME } from '../../service/GlobalState';

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
    //border: 1px solid;
    //border-color: #dddddd;
    padding: 10px;
    margin-top: 5px ;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);

    :hover {
        background-color: #dddddd;
        cursor: pointer;
    }

    .name {
        font-weight: normal ;
        color: #6a4c93;
    }

    .description {
        font-size: 13px ;
    }
`

const UploadSelectCollectionName =  ({ onStepConclued, collections }) => {
    const [collectionSelected, setCollectionSelected] = useState('');    

    const router = useRouter();
    const dispatch = useDispatch();    

    const onClickGroupList = (collectionName) => {        
        setCollectionSelected(collectionName);  
        dispatch({type: dispatch_SELECTED_COLLECTIONNAME, collectionName})      
        onStepConclued();        
    }     
    
    const onGotoNewCollection = (e) => {
        e.preventDefault();       
        router.push('/collection');
    }

    return (
        <AreaInteration >
            <AreaInteration_ContainerTitle>
                <div >
                    <AreaInteration_ContainerTitle_Title>Define Group Image</AreaInteration_ContainerTitle_Title>
                    <AreaInteration_ContainerTitle_SubTitle>The Contributor is the instituion which will be contributing the images.</AreaInteration_ContainerTitle_SubTitle>                
                </div>
                <div >
                    <AreaInteration_ContainerTitle_NewContributor>
                        <button type='submit' onClick={onGotoNewCollection}>New Group</button>
                    </AreaInteration_ContainerTitle_NewContributor>                    
                </div>
            </AreaInteration_ContainerTitle>
            
            
            {collections?.map( (item, index) => (                
                    <AreaInteration_ContributorList key={item.idCollection}  onClick={() => onClickGroupList(item)}
                    selected={collectionSelected.name == item.name}>
                        <div className='name'>{item.name}</div>
                        <div className='description'>{item.description}</div>
                    </AreaInteration_ContributorList>                    
            ))}
            
        </AreaInteration>
    )
};

export default UploadSelectCollectionName;