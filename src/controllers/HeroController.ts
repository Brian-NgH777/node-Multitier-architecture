import * as express from 'express';
import HeroBusiness from './../app/business/HeroBusiness';

export default class HeroController {
    static heroBusiness: any;

    constructor() {
        HeroController.heroBusiness = new HeroBusiness();
    }

    // async get(req: express.Request, res: express.Response) {
    //         try {
    //             // var hero = req.body;
    //             // var heroBusiness = new HeroBusiness();
    //             var result =  await HeroController.heroBusiness.test2();
    //             // var result = await HeroController.heroBusiness.getDataSend(4, 1);
    //             res.send({"success": result});
    //         }
    //         catch (e)  {
    //             console.log(e);
    //             res.send({"error": "error in your request"});

    //         }
    // }

    // async test(req: express.Request, res: express.Response) {
    //     try {
    //         await HeroController.heroBusiness.test();
    //         res.send({"success": '.0k'});
    //     }
    //     catch (e)  {
    //         console.log(e);
    //         res.send({"error": "error in your request"});

    //     }
    // }

    // async test2(req: express.Request, res: express.Response) {
    //     try {
    //         await HeroController.heroBusiness.sendDataStartDateTime();
    //         res.send({"success": '.0k'});
    //     }
    //     catch (e)  {
    //         console.log(e);
    //         res.send({"error": "error in your request"});

    //     }
    // }

    async sendDataGameCompletesByEnrolmentId(req: express.Request, res: express.Response) {
        try {
            let result = await HeroController.heroBusiness.sendDataGameCompletesByEnrolmentId(Number(req.query.enrolmentId), Number(req.query.type), Number(req.query.studentPercent), Number(req.query.focusGroupQATemplateId));
            res.send({"success": result});
        }
        catch (e)  {
            console.log(e);
            res.send({"error": e});

        }
    }

    // async sendEmailAndNotificationOnStartAssessment(req: express.Request, res: express.Response) {
    //     try {
    //         // var hero = req.body;
    //         // var heroBusiness = new HeroBusiness();
    //         var result = await HeroController.heroBusiness.sendEmailAndNotificationOnStartAssessment();
    //         res.send({"success": result});
    //     }
    //     catch (e)  {
    //         console.log(e);
    //         res.send({"error": "error in your request"});

    //     }
    // }

    // async sendEmailAndNotificationOnFinishedAssessment(req: express.Request, res: express.Response) {
    //     try {
    //         // var hero = req.body;
    //         // var heroBusiness = new HeroBusiness();
    //         var result = await HeroController.heroBusiness.sendEmailAndNotificationOnFinishedAssessment();
    //         res.send({"success": result});
    //     }
    //     catch (e)  {
    //         console.log(e);
    //         res.send({"error": "error in your request"});

    //     }
    // }
}