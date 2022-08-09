import { useState } from "react";
import styled from "styled-components";
import { POST_Contributor } from "../service/service";

export const FormContainer = styled.div`
  //background-color: #e6e6e6 ;
  width: 70%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
`;

export const FormContainer_Title = styled.div`
  //background-color: purple ;
  display: flex;
  flex-direction: column;
  color: gray;  
  padding: 10px;
  border-bottom: 1px solid;
  border-color: #e6e6e6;

  .title {
    font-size: 30px ;
    color: #0077b6;    
  }

  .subtitle {
    font-size: 15px ;
  }
`;

export const FormContainer_Panel = styled.div`
  //background-color: yellow ;
  border-bottom: 1px solid;
  border-color: #e6e6e6;
  height: 100px;  
  display: grid;
  grid-template-columns: 1fr 2fr;      
  grid-template-rows: 100px ;
  
`;

export const FormContainer_Panel_Label = styled.div`
  //background-color: green ;
  display: flex;
  color: gray;
  padding: 10px;  
  align-items: center;
`;

export const FormContainer_Panel_Field = styled.div`
  //background-color: red ;
  display: flex;
  flex-direction: column;
  color: gray;
  padding: 10px;    
`;


export const FormContainer_Panel_Actions = styled.div`
  //background-color: red ;
  display: flex;
  flex-direction: row-reverse;
  color: gray;
  padding: 10px;    
`;

