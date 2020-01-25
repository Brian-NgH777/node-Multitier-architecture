// import * as dotenv from 'dotenv';
// import DataAccess from '../dataAccess/DataAccess';
// import MailHelper from '../helpers/MailHelper';
// import GcmHelper from '../helpers/GcmHelper';
import IBaseBusiness from './interfaces/base/IBaseBusiness';
// import {StatusType, AssessmentEmailType, HomeWorkEmailType, MessageGroupType, FocusGroupType, RevisionType, NaplanType} from '../dataAccess/Enum';
// dotenv.config();

export default class HeroBusiness implements IBaseBusiness<any> {

    async get(id: string):Promise<any> {
        let aa = 1;
        return aa;
    }

    async getByName(name: string): Promise<any> {
        return name;
    }

    async create():Promise<any> {
        let aa = 1;
        return aa;
    }

    async update(id: string, data: any):Promise<boolean> {
        return true;
    }

    async delete():Promise<boolean> {
        return true;
    }
}