import { AppDataSource } from './../DataSource';
import { Util } from '../util/Util';
import { Collection } from './../entity/Collection';



export class CollectionController {
    
    
    public static async ValidateAndSave(json : string): {} {
        try {
            const collection = new Collection();        
            const result = collection.toObject(json).validate();            
            
            if (result == true){                
                await collection.save();    
                console.log("Collection Saved: "+ collection);
                return collection;                                        
            }else{                
                return result;
            }         
        } catch (error) {
            return Util.FormatException(error, this);
        }    
    }

    public static async getAll() {
        
        const collection = AppDataSource.manager.find(Collection);
        return collection;
    }
}