import * as express from 'express';
import HeroBusiness from './../app/business/HeroBusiness';

export default class HeroController {
    static heroBusiness: any;

    constructor() {
        HeroController.heroBusiness = new HeroBusiness();
    }

    async get(req: express.Request, res: express.Response) {
            try {
                // var hero = req.body;
                // var heroBusiness = new HeroBusiness();
                var result =  await HeroController.heroBusiness.get();
                res.send({"success": result});
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
}