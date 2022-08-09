import { Contributor } from './Contributor';
import {Entity, Column, ObjectIdColumn, ObjectID, BaseEntity} from 'typeorm'
import { Expose, plainToClassFromExist } from 'class-transformer';

export class ContributorItemCollection {

    @Expose()
    @Column()
    nameItem: String;
    
    @Expose()
    @Column()
    image: string;
}


@Entity()
export class ContributorCollection extends BaseEntity{

    @Column()
    idCollectionContributor: ObjectID;

    @Expose()
    @Column((type) => Contributor)
    contributor: Contributor;

    @Expose()
    @Column()
    description: string;

    @Expose()
    @Column((type) => ContributorItemCollection)
    item: ContributorItemCollection[]

    public toObject(value: string){
        console.log('convertendo')
        plainToClassFromExist(this, value, { excludeExtraneousValues: true });                
        return this;        
    }

    public validate(){
        const r = {}
        if (!this.contributor){
            r['idContributor'] = 'Está vazio';
        }
        if (!this.description.trim()){
            r['personNameContact'] = 'Está vazio';
        }
        return Object.keys(r).length > 0 ? r : true;
    }

}