import * as express from 'express';
import HeroController from './../../controllers/HeroController';

var router = express.Router();
export default class HeroRoutes {
    private _heroController: HeroController;
    
    constructor () {
        this._heroController = new HeroController();   
    }
    get routes () {
        var controller = this._heroController;
        router.get("/", controller.get);
        
        return router;
    }
    
    
}