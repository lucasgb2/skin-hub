
const ROOT_API = 'http://192.168.0.100:3005';

function formatError(error: string){
    return JSON.stringify({ message: 'Falha na operação', exception: error});
}

function formatHeader(method: string, data: JSON | null){
    if (data) {        
        return {method: method, headers: {'Content-Type': 'application/json'}, body: data};
    }else{        
        return {method: method, headers: {'Content-Type': 'application/json'}};        
    }
    
} 
    
export const GET_Echo = async () => {
    let res = await fetch(ROOT_API.concat('/'), formatHeader('GET', null));
        let j = await res.json(); 
        return j;                
}

export const POST_Contributor = async (value:any) => {
    try {                
        let res = await fetch(ROOT_API.concat('/api/contributor'), formatHeader('POST', JSON.stringify(value)));
        let j = await res.json();                         
        return j;       
    } catch (error) {        
        return formatError(error.toString());
    }
}

export const GET_Contributor = async () => {
    try {                 
        let res = await fetch(ROOT_API.concat('/api/contributor'), formatHeader('GET', null));
        let j = await res.json();         
        return j;     
    } catch (error) {        
        return formatError(error.toString());
    }
}

export const POST_Collection = async (value:any) => {
    try {                
        let res = await fetch(ROOT_API.concat('/api/collection'), formatHeader('POST', JSON.stringify(value)));
        let j = await res.json();                         
        return j;       
    } catch (error) {        
        return formatError(error.toString());
    }
}

export const GET_Collection = async () => {
    try {                 
        let res = await fetch(ROOT_API.concat('/api/collection'), formatHeader('GET', null));
        let j = await res.json();         
        return j;     
    } catch (error) {        
        return formatError(error.toString());
    }
}