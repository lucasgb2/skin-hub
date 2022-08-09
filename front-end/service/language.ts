

class Language() {
    
    const lgCONTRIBUTOR = () => {
        switch(self.language){
            case 'ptbr': return 'Novo Contribuidor';
            case 'en': return 'New Contributor';            
        }
    }

    constructor(value: any){
        self.language = value;
    }

}