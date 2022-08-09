import express from 'express';
import {routes} from './routes/routes';
import cors from 'cors';
import {DataSource} from "typeorm";
import { AppDataSource } from './DataSource';
import { Contributor } from './entity/Contributor';

AppDataSource.initialize().then(async () => {
    console.log('conectado ao mongo');
    //const user = new User();
    //user.firstName = 'Lucas';
    //user.lastName = 'batista';
    //await AppDataSource.manager.save(user);
    //const v = await AppDataSource.manager.find(User);
    //console.log(v);
    //const contributor = new Contributor();
    //contributor.institutionName = 'Centro de beleza e pele';
    //contributor.personNameContact = 'Mara';
    //contributor.save().then(() => {
    //    console.log('contributor salvado')
    //});
}).catch(err => {
    console.log('falha ao conectar no mongo '+err)
})


const cors = require('cors');
//const bodyParser = require('body-parser');
//const config = require('config');

const app = express();
app.use(cors({
    origin:'*'
}));
app.use(express.json());
app.use(routes);
app.listen(3005);
//app.listen(process.env.APPPORT, process.env.APP_HOST);