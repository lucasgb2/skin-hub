import { CollectionController } from './../controllers/Collection';
import { Router } from "express";
import { ContributorController } from "../controllers/ContributorController";
import { ContributorCollectionController } from "../controllers/ContributorCollectionController";

export const routes = Router();

routes.use((req, res, next) => {
    console.log(req.path);
    next()
})

routes.get('/', (req, res, next) =>{
    res.json({message:'hello'})
})

routes.post('/api/contributor', async (req, res, next) => {    
    console.log(req.body)
    res.json(await ContributorController.ValidateAndSave(req.body));
});

routes.get('/api/contributor', async (req, res, next) => {    
    res.json(await ContributorController.getAll());
});

routes.post('/api/contributor/collection', async (req, res, next) => {    
    res.json(await ContributorCollectionController.ValidateAndSave(req.body));
});

routes.post('/api/collection', async (req, res, next) => {    
    res.json(await CollectionController.ValidateAndSave(req.body));
});

routes.get('/api/collection', async (req, res, next) => {    
    res.json(await CollectionController.getAll());
});