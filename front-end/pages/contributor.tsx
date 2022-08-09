import { useState } from "react";
import styled from "styled-components";
import { POST_Contributor } from "../service/service";
import {FormContainer, FormContainer_Panel, FormContainer_Panel_Field, FormContainer_Panel_Label, FormContainer_Title, FormContainer_Panel_Actions} from "../components/form/Form";

const Contributor = (props) => {
  const [contributorName, setcontributorName] = useState("");
  const [personNameContact, setpersonContactName] = useState("");  
  const [email, setEmail] = useState("");  

  const onSubmitForm = async (e) =>{    
    e.preventDefault();
    const contributor = {
      institutionName: contributorName,
      personNameContact: personNameContact,
      email: email
    };
    const r = await POST_Contributor(contributor);
  }  

  return (
    <FormContainer>     
      <FormContainer_Title>
        <div className="title">Novo Contribuidor</div>
        <div className="subtitle">Este é a entrada de alguns dados da instituição que irá contribuir com coleções de imagens.</div>
      </FormContainer_Title>     
      
      <form onSubmit={onSubmitForm}>
      <FormContainer_Panel>
        <FormContainer_Panel_Label>Nome Instituição</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={contributorName} onChange={ (e) => setcontributorName(e.target.value)}/>
            <div style={{ margin: "0px" }}>Esta informação é privado, não será apresentado publicamente.</div>
        </FormContainer_Panel_Field>             
      </FormContainer_Panel>

      <FormContainer_Panel>
        <FormContainer_Panel_Label>Nome Pessoa de Contato</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={personNameContact} onChange={ (e) => setpersonContactName(e.target.value)}/>            
            <div style={{ margin: "0px" }}>Este informação é privado, não será apresentado publicamente.</div>
        </FormContainer_Panel_Field>             
      </FormContainer_Panel>      

      <FormContainer_Panel>
        <FormContainer_Panel_Label>E-mail</FormContainer_Panel_Label>        
        <FormContainer_Panel_Field>
            <input type="text" required value={email} onChange={ (e) => setEmail(e.target.value)}/>            
            <div style={{ margin: "0px" }}>Este informação é privado, não será apresentado publicamente.</div>
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
