import { ContributorCollection } from './../entity/ContributorCollection';
import { Util } from '../util/Util';

export class ContributorCollectionController {
    
    
    public static async ValidateAndSave(json : string): {} {
        try {
            const contributorCollection = new ContributorCollection();        
            contributorCollection.toObject(json);
            console.log(contributorCollection)
            const result = contributorCollection.validate();            
            
            if (result == true){                
                await contributorCollection.save();                    
                return contributorCollection;                                        
            }else{                
                return result;
            }         
        } catch (error) {
            return Util.FormatException(error, this);
        }    
    }
}