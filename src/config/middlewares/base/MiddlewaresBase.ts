import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import MethodOverride from './../MethodOverride';
import BaseRoutes from './../../routes/base/BaseRoutes';

export default class MiddlewaresBase {
    
    static get configuration () {
         var app = express();
         app.use(cors({
            'allowedHeaders': ['X-Api-Version', 'Content-Type', 'Origin', 'Accept'],
            'origin': '*',
            'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
            'preflightContinue': true,
            'optionsSuccessStatus': 204,
            'maxAge': 3600
          }));
         app.use(bodyParser.json());
         app.use(MethodOverride.configuration());
         app.use(new BaseRoutes().routes);
         
         return app;
    }    
}