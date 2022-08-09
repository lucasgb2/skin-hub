import styled from 'styled-components';
import { useEffect } from 'react';

const CollectionsContainer = styled.div`
   // background-color:  red;
    width: 100% ;
    height: 100% ;
    display: flex;
    flex-direction: row;    
`

const CollectionList = styled.div`
    //background-color: green;
    width: 25%;
    border-right: 1px solid ;
    border-color: #d6d6d6;
`
const CollectionList_Item = styled.div`
    //background-color: #f7f7f7;
    border-radius: 5px;      
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    padding: 10px;
    margin: 10px ;
    height: 60px;
    color: gray ;
    
    span {
        font-size: 15px;
        font-weight: bold;
    }

    p {
        margin: 0;
        font-size: 15px;
    }
`

const CollectionDetail = styled.div`
   // background-color: blue;
   display: flex ;
   flex-direction: column;
   flex-flow: row wrap ;
   padding: 10px;
   width: 75% ;
`
const CollectionDetail_Title = styled.div`
    //background-color: #f7f7f7;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);
    border-radius: 5px;  
    //border: 1px solid;
    //border-color: #dbdbdb;    
    width: 100%;
    height: 100px;
    padding-left: 10px ;

    .CollectionDetail_Title_NameCollection {
        font-size: 30px ;
        color: #0077b6;
        font-weight: bold;
        margin: 0 ;
    }

    .CollectionDetail_Title_Label{
        color: grays ;
        font-weight: bold ;
        font-size: 17px;
        margin: 0 ;
    }
    
`
const CollectionDetail_Detail = styled.div`
   //background-color: red ;
   padding-top: 10px;
   display: flex ;       
   flex-direction: row;
   flex-flow:  wrap ;      
   justify-content: space-evenly;
`

const CollectionDetail_CardImage = styled.div`
    //background-color: green ;   
    margin: 2px ;
    height: 150px;
    
    img {
        width: 140px ;
        height: 110px ;
    }

    p {
        font-weight: bold ;
        margin-top: 5px ;
    }
`

const Collections = (props) => {

    let item = [];
    let i : number;
    for(i = 1; i <= 30; i++){
        item.push(i);
    }
    
    return (
        <CollectionsContainer>
        
            <CollectionList>
                <CollectionList_Item>
                    <span>Pacote de pacientes de abrill</span>
                    <p>20 images</p>
                </CollectionList_Item>

                <CollectionList_Item>
                    <span>Pacote de pacientes de abrill</span>
                    <p>20 images</p>
                </CollectionList_Item>

                <CollectionList_Item>
                    <span>Pacote de pacientes de abrill</span>
                    <p>20 images</p>
                </CollectionList_Item>
            </CollectionList>
            
            <CollectionDetail>
            
                <CollectionDetail_Title>
                    <p class='CollectionDetail_Title_NameCollection'>Pacote de pacientes de abril</p>
                    <p class='CollectionDetail_Title_Label'>Images: </p> <span>200</span>
                </CollectionDetail_Title>
                
                <CollectionDetail_Detail>
                    {
                        item.map((id, index) => (                        
                            <CollectionDetail_CardImage key={index}>                            
                                <img src="https://via.placeholder.com/300/09f/fff.png" alt="" />
                                <p>Imagem {index}</p>
                            </CollectionDetail_CardImage>
                        ))
                    }
                </CollectionDetail_Detail>           
                
                
            </CollectionDetail>
        
        </CollectionsContainer>
    );
}

export default Collections;