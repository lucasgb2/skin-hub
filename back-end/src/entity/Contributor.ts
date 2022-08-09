import { BaseEntity, Entity, Column, ObjectIdColumn, ObjectID} from "typeorm";
import { Expose, plainToClassFromExist } from "class-transformer";

@Entity()
export class Contributor extends BaseEntity {
    @ObjectIdColumn()
    idContributor: ObjectID;

    @Expose()
    @Column()        
    institutionName: string;
    
    @Expose()
    @Column()    
    personNameContact: string;

    public toObject(value : any){
        plainToClassFromExist(this, value, { excludeExtraneousValues: true });                
        return this;
    }

    public validate() {
        const r = {}
        if (!this.institutionName) {
            r['idContributor'] = 'Está vazio';
        }
        if (!this.personNameContact){
            r['personNameContact'] = 'Está vazio';
        }
        return Object.keys(r).length > 0 ? r : true;
    };
}