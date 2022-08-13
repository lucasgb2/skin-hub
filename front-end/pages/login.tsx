import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import  styled  from 'styled-components';
import { dispatch_LOGIN_OK } from '../service/GlobalState';


const Container = styled.div`
    //background-color :  green;
    border-radius: 50px;
    box-shadow: 0 1px 8px 0 rgba(0,0,0,0.2);
    margin: auto;
    margin-top: 3% ;
    width: 80%;
    height:50% ;
    display: flex;
    flex-direction: row ;
    align-items: center;
`
const ImageDesign = styled.div`       
    border-radius: 50px 0px 0px 50px ;    
    background-color: purple;
    width: 768px ;
    height: 512px ;

    img {
        border-radius: inherit ;
        mix-blend-mode: screen;        
    }    
`
const FieldArea = styled.div`    
    padding: 10px ;
    display: flex;
    flex-direction: column;
    align-items: center;    
    color: gray ;

    h1 {
        margin-top: 0px;
    }

    input {
        border-radius: 50px ;
    }

    button {
        margin-top: 2px ;
        border-radius: 50px ;    
        width: 100% ;
        background-color: purple;
    }

    span {
        margin-left: 10px;
        margin-bottom: 1px ;
        font-size: 13px;

    }
`
const Line = styled.h2`
    width: 100%;
    text-align: center ;
    border-bottom: 1px solid gray;        
    line-height: 0.1em;   

    span {
        background-color: white ;
        padding:0 10px; 
        font-size: 12px;
    }    
`

const BoxLoginInvalid = styled.div`
    color: red ;
    float: right ;

`

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isVisibleLoginInvalid, setIsVisibleLoginInvalid] = useState(false);
    
    const dispatch = useDispatch();
    const router = useRouter();

    const onLogIn = (e) =>{
        e.preventDefault();

        if((user == 'open') && (password == 'open')){            
            dispatch({type: dispatch_LOGIN_OK})
            router.push('/')
        }else{
            setIsVisibleLoginInvalid(true)
            setTimeout(() =>{
                setIsVisibleLoginInvalid(false)
            }, 2500);
        }
    }

    return (
        <Container>
            <ImageDesign>
                <img src="/medical.jpg" alt="" />             
            </ImageDesign>  
            
            <FieldArea>
                
                <h1>Log In</h1>
                <form onSubmit={onLogIn}>
                    <span>Login</span>
                    <input type='text' onChange={(e) => setUser(e.target.value)}></input>
                    <span>Password</span>                    
                    <input type='password' id='edtpassword' onChange={(e) => setPassword(e.target.value)}></input>
                    {isVisibleLoginInvalid && (<span style={{ color: 'red'}}>Login or password is not valid !</span>)}
                    <button type='submit'>Log in</button>
                </form>
                <Line><span>or log in with</span></Line>
            </FieldArea>                      
        </Container>
    )

}

export default Login;