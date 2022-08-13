import styled from "styled-components";
import Link from "next/link";

const ContainerHeader = styled.div`
  background-color: green ;
  grid-area: header;
  background-color: white;           
  border-bottom: 1px solid;
  border-color: #c4c4c4;
  display: grid ;
  grid-template-columns: 25% 1fr ;
  grid-template-rows: 1fr  ;
`;

const HeaderLogo = styled.div`    
    padding: 5px;
    color:  #0077b6;    
    font-size: 25px;    
    margin: auto ;
    position: center ;    
`

const Menu = styled.div`
 // background-color: red ;
  font-size: 15px ;
  display: flex;
  flex-direction: row;
  align-items: center;        
  height: 60px;
  float: right;
  width: 50% ;
`
const MenuItem = styled.div`       
    padding: 10px;
    margin: 10px ;
    border-radius: 5px ;    
     
    a,i {             
        font-size: 15px;
        color : #495057;       
        text-decoration: none;
    }

    :hover {
          background-color: #E9ECEF;    
          color: #0077b6;     
    }

    :hover a{
        color: #0077b6;
    }

    :hover i{
        color: #0077b6;
    }
  
`;

const Header = () => {
    return(
    <ContainerHeader>      
        <HeaderLogo>
            Skin-HUB
        </HeaderLogo>
        
        <Menu>            
            <MenuItem>
                <Link href="/contributor">Contributor</Link>
            </MenuItem>
            
            <MenuItem>
                <Link href="/collections">Collections</Link>
            </MenuItem>
            
            <MenuItem>
                <Link href="/uploads">Uploads</Link>                
            </MenuItem>
            
            <MenuItem>
                <Link href="/about">About</Link>                
            </MenuItem>
            
            <MenuItem>
                <Link href="/pipeline">Pipeline</Link>
            </MenuItem>    

            <MenuItem>
                <Link href="/login">Login</Link>
            </MenuItem>  
        </Menu>          
    </ContainerHeader>
    )
}


export default Header;
