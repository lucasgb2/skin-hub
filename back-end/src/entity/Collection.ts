import {Entity, Column, ObjectIdColumn, ObjectID, BaseEntity} from 'typeorm'
import { Expose, plainToClassFromExist } from 'class-transformer';

@Entity()
export class Collection extends BaseEntity{

    @ObjectIdColumn()
    idCollection: ObjectID;

    @Expose()
    @Column()
    name: string;

    @Expose()
    @Column()
    description: string;

    @Expose()
    @Column()
    publicDescription: string;
    

    public toObject(value: string){
        console.log('convertendo')
        plainToClassFromExist(this, value, { excludeExtraneousValues: true });                
        return this;        
    }

    public validate(){
        const r = {}
        if (!this.name){
            r['name'] = 'Está vazio';
        }
        if (!this.description.trim()){
            r['description'] = 'Está vazio';
        }
        if (!this.publicDescription.trim()){
            r['publicDescription'] = 'Está vazio';
        }
        return Object.keys(r).length > 0 ? r : true;
    }

}