import * as cron from 'cron';
// import IContactAnalyticBusiness from '../application/businesses/interfaces/IContactAnalyticBusiness';
import HeroBusiness from '../business/HeroBusiness';
import {StatusType, AssessmentEmailType, HomeWorkEmailType, FocusGroupType, RevisionType, NaplanType} from '../dataAccess/Enum';

export default class CronJob {
    static heroBusiness: any = new HeroBusiness();

    // constructor() {
    //     CronJob.heroBusiness = new HeroBusiness();
    // }

    static insertDataJobEveryday() {
        console.log('Create cron job for insert data every day.');
        let updateJob = new cron.CronJob({
            cronTime: '00 00 * * *', // run at 0:00 am
            onTick: () => {
                console.log('start insert data every day ====>');
                this.heroBusiness.initDataReport();
            },
            start: false,
            timeZone: 'Australia/Sydney' // Australia/Sydney Asia/Vientiane
        });
        updateJob.start();
    }
    static jobEverydaySendDataStartDateTime() {
        console.log('Create cron job for send data start time every day.');
        let updateJob = new cron.CronJob({
            cronTime: ' 00 17 * * *', // run at 00:17 am
            onTick: () => {
                console.log('start send data start time ====>');
                this.heroBusiness.sendDataStartDateTime();
            },
            start: false,
            timeZone: 'Australia/Sydney' // Australia/Sydney Asia/Vientiane
        });
        updateJob.start();
    }

    static jobEverydaySendDataEndDateTime() {
        console.log('Create cron job for send data end time every day.');
        let updateJob = new cron.CronJob({
            cronTime: ' 00 09 * * *', // run at 00:09 am
            onTick: () => {
                console.log('start send data end time ====>');
                this.heroBusiness.sendDataEndDateTime();
            },
            start: false,
            timeZone: 'Australia/Sydney' // Australia/Sydney Asia/Vientiane
        });
        updateJob.start();
    }

    static jobEverydaySendDataNotCompleted() {
        console.log('Create cron job for Not Completed every day.');
        let updateJob = new cron.CronJob({
            cronTime: ' 00 17 * * *', // run at 00:17 am
            onTick: () => {
                console.log('start send data Not Completed ====>');
                this.heroBusiness.sendDataNotCompleted();
            },
            start: false,
            timeZone: 'Australia/Sydney' // Australia/Sydney Asia/Vientiane
        });
        updateJob.start();
    }
}