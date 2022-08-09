import { useState } from "react";
import styled from "styled-components";
import { POST_Collection } from "../service/service";
import {FormContainer, FormContainer_Panel, FormContainer_Panel_Field, FormContainer_Panel_Label, FormContainer_Title, FormContainer_Panel_Actions} from "../components/form/Form";

const Contributor = (props) => {
  const [collectionName, setCollectionName] = useState("");
  const [description, setDescription] = useState("");  
  const [publicDescription, setPublicDescription] = useState("");  

  const onSubmitForm = async (e) =>{    
    e.preventDefault();
    const collection = {
        name: collectionName,
        description: description,
        publicDescription: publicDescription
    };
    setCollectionName('');
    setDescription('');
    setPublicDescription('');
    const r = await POST_Collection(collection);
  }  

  return (
    <FormContainer>     
      <FormContainer_Title>
        <div className="title">Nova Coleção</div>
        <div className="subtitle">Esta é informação sobre a coleção. Coleção é um grupo de imagens que compartilham da mesma similaridade, tipo ou patologia. </div>
      </FormContainer_Title>     
      
      <form onSubmit={onSubmitForm}>
      <FormContainer_Panel>
        <FormContainer_Panel_Label>Nome da Coleção</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={collectionName} onChange={ (e) => setCollectionName(e.target.value)}/>
            <div style={{ margin: "0px" }}>Esta informação é privado, não será apresentado publicamente.</div>
        </FormContainer_Panel_Field>             
      </FormContainer_Panel>

      <FormContainer_Panel>
        <FormContainer_Panel_Label>Descrição</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={description} onChange={ (e) => setDescription(e.target.value)}/>            
            <div style={{ margin: "0px" }}>Esta informação é privado, não será apresentado publicamente.</div>
        </FormContainer_Panel_Field>             
      </FormContainer_Panel>      

      <FormContainer_Panel>
        <FormContainer_Panel_Label>Descrição Pública</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={publicDescription} onChange={ (e) => setPublicDescription(e.target.value)}/>            
            <div style={{ margin: "0px" }}>Este informação é pública, será utilizada para contextualizar a coleção.</div>
        </FormContainer_Panel_Field>             
      </FormContainer_Panel>            
      
      <FormContainer_Panel_Actions>
            <button type="submit">Save</button>                
      </FormContainer_Panel_Actions>    
      </form>               
    </FormContainer>
  );
};

export default Contributor;
