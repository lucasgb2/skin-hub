import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({ 
    type: "mongodb", 
    host: "localhost", 
    port: 27017, 
    database: "skinlesiontest", 
    synchronize: true, 
    logging: true, 
    entities: ['./src/entity/*.ts'],    
    dropSchema: false,
    useUnifiedTopology: true,
    migrationsRun: true,    
    migrations: [ "./src/migration/**/*.ts"], 
    subscribers: [ "./src/subscriber/**/*.ts"], 
   // cli: { 
   //    entitiesDir: "entity", 
   //    migrationsDir: "migration", 
   //    subscribersDir: "subscriber" 
    //}
});