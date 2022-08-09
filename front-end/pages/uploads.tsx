import UploadStepByStep from '../components/upload/UploadStepByStep';
import UploadSelectContributor from '../components/upload/UploadSelectContributor';
import UploadSelectCollectionName from '../components/upload/UploadSelectCollectionName';
import UploadImageSelect from '../components/upload/UploadSelectArchive';
import styled from 'styled-components';
import { useState } from 'react';
import { GET_Collection, GET_Contributor } from '../service/service';


const UploadContainer = styled.div`
    display: grid ;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 110px 1fr ;
    grid-template-columns: 
        'step'
        'interation';
`

const Upload = ({contributors, collections}) =>{
    const [stepActive, setStepActive] = useState(1);
    const [stepConclued, setStepConclued] = useState(false);
    
    const onStepConclued = () =>{
        if (stepActive == 1){
            setStepActive(2);
        }else if (stepActive == 2){
            setStepActive(3);
        }
        setStepConclued(true);
    }

    return (
        <UploadContainer>                     
            <UploadStepByStep stepActive={stepActive} stepConclued={stepConclued}/>            
            {stepActive == 1 && <UploadSelectContributor onStepConclued={onStepConclued} contributors={contributors}/>}
            {stepActive == 2 && <UploadSelectCollectionName onStepConclued={onStepConclued} collections={collections}/>}
            {stepActive == 3 && <UploadImageSelect onStepConclued={onStepConclued}/>}
        </UploadContainer>        
    );
}

export const getServerSideProps = async () => {
    const contributors = await GET_Contributor();
    const collections = await GET_Collection();
    return {
        props: { contributors , collections}
    }
}


export default Upload;