import { AppDataSource } from './../DataSource';
import { Util } from '../util/Util';
import { Contributor } from './../entity/Contributor';



export class ContributorController {
    
    
    public static async ValidateAndSave(json : string): {} {
        try {
            const contributor = new Contributor();        
            const result = contributor.toObject(json).validate();            
            
            if (result == true){                
                await contributor.save();    
                console.log("Contributor Saved: "+ contributor);
                return contributor;                                        
            }else{                
                return result;
            }         
        } catch (error) {
            return Util.FormatException(error, this);
        }    
    }

    public static async getAll() {
        
        const contributor = AppDataSource.manager.find(Contributor);
        return contributor;
    }
}