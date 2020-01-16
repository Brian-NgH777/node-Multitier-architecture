import * as dotenv from 'dotenv';
import DataAccess from '../dataAccess/DataAccess';
import MailHelper from '../helpers/MailHelper';
import GcmHelper from '../helpers/GcmHelper';
import EmailTemplateWhenStartAssessment from '../resources/templates/email/EmailTemplateWhenStartAssessment';
import EmailTemplateWhenEndAssessment from '../resources/templates/email/EmailTemplateWhenEndAssessment';
import EmailTemplateWhenAfter7DaysEndAssessment from '../resources/templates/email/EmailTemplateWhenAfter7DaysEndAssessment';
import EmailTemplateWhenStartHomeWork from '../resources/templates/email/EmailTemplateWhenStartHomeWork';
import EmailTemplateWhenEndHomeWork from '../resources/templates/email/EmailTemplateWhenEndHomeWork';
import EmailTemplateWhenAfter4DaysHomeWork  from '../resources/templates/email/EmailTemplateWhenAfter4DaysHomeWork';
import EmailTemplateGameHomeWorkCompletes  from '../resources/templates/email/EmailTemplateGameHomeWorkCompletes';
import EmailTemplateGameAssessmentCompletes  from '../resources/templates/email/EmailTemplateGameAssessmentCompletes';
import EmailTemplateWhenStartFocusCentre  from '../resources/templates/email/EmailTemplateWhenStartFocusCentre';
import EmailTemplateWhenGameCompletesFocusCentre  from '../resources/templates/email/EmailTemplateWhenGameCompletesFocusCentre';
import EmailTemplateWhenStartRevision  from '../resources/templates/email/EmailTemplateWhenStartRevision';
import EmailTemplateWhenRevisionAfter7Days  from '../resources/templates/email/EmailTemplateWhenRevisionAfter7Days';
import EmailTemplateWhenGameCompletesRevision  from '../resources/templates/email/EmailTemplateWhenGameCompletesRevision';
import EmailTemplateWhenStartNaplan  from '../resources/templates/email/EmailTemplateWhenStartNaplan';
import EmailTemplateWhenNaplanAfter7Days  from '../resources/templates/email/EmailTemplateWhenNaplanAfter7Days';
import EmailTemplateWhenGameCompletesNaplan  from '../resources/templates/email/EmailTemplateWhenGameCompletesNaplan';
import EmailTemplateWhenEndNaplan  from '../resources/templates/email/EmailTemplateWhenEndNaplan';

import {StatusType, AssessmentEmailType, HomeWorkEmailType, MessageGroupType, FocusGroupType, RevisionType, NaplanType} from '../dataAccess/Enum';
dotenv.config();

export default class HeroBusiness {

    async get():Promise<any> {
        let aa = 1;
        // var heroRepository = new DataAccess();
        let query = `exec GetConceptsListHomeworkByEnrolmentId @ParentId = 10401, @EnrolmentId = 9734, @Term = ${aa}`;
        let result = await DataAccess.execute(query);
        return result;
    }

    async initDataReport():Promise<any> {
        console.log('11111111111111');
        await this.insertDataReportStartAssignment();
        await this.insertDataReportEndAssignment();
        await this.insertDataReportNotCompletedAssignmentAfter7Days();
        await this.insertDataReportStartHomeWork();
        await this.insertDataReportEndHomeWork();
        await this.insertDataReportNotCompletedHomeWorkAfter4Days();
        await this.insertDataReportFocusGroup();
        await this.insertDataReportStartRevision();
        await this.insertDataReportNotCompletedRevisionAfter7Days();
        await this.insertDataReportStartNaplan();
        await this.insertDataReportEndNaplan();
        await this.insertDataReportNotCompletedNaplanAfter7Days();
        return true;
    }

    async sendDataStartDateTime():Promise<any> {
        console.log('22222222222222222');
        await this.getDataSend(StatusType.Assessment, AssessmentEmailType.StartAssessment);
        await this.getDataSend(StatusType.Homework, HomeWorkEmailType.StartHomeWork);
        await this.getDataSend(StatusType.FocusCenter, FocusGroupType.FocusGroupCreate);
        await this.getDataSend(StatusType.Revision, RevisionType.StartRevision);
        await this.getDataSend(StatusType.Naplan, NaplanType.StartNaplan);
        return true;
    }

    async sendDataEndDateTime():Promise<any> {
        console.log('3333333333333333');
        await this.getDataSend(StatusType.Assessment, AssessmentEmailType.EndAssessment);
        await this.getDataSend(StatusType.Homework, HomeWorkEmailType.EndHomeWork);
        await this.getDataSend(StatusType.Naplan, NaplanType.EndNaplan);
        return true;
    }

    async sendDataNotCompleted():Promise<any> {
        console.log('4444444444444444');
        await this.getDataSend(StatusType.Assessment, AssessmentEmailType.After7Days);
        await this.getDataSend(StatusType.Homework, HomeWorkEmailType.After4Days);
        await this.getDataSend(StatusType.Revision, RevisionType.After7Days);
        await this.getDataSend(StatusType.Naplan, NaplanType.After7Days);
        return true;
    }

    // async test():Promise<any> {
    //     await this.insertDataReportStartNaplan();
    //     return true;
    // }

    // async test2222():Promise<any> {
    //     let aa = await DataAccess.execute('select TOP 5 * from ClassHomework');
    //     console.log('aaaaaaaaaaaaaaa', aa);
    //     return true;
    // }

    // async test22224444():Promise<any> {
    //     let vv = await DataAccess.execute('select TOP 5 * from ClassNaplan');
    //     console.log('vvvvvvvvvvvvvv', vv);
    //     return true;
    // }

    // start init data send Naplan
    async insertDataReportStartNaplan():Promise<any> {
        let query = `exec ne_getDataWhenStartNaplan @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Start Naplan length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime = element.endDateTime ? new Date(element.endDateTime): null;
                            // let startNaplan = startDateTime ? `'${startDateTime.getFullYear()}-${startDateTime.getMonth() + 1}-${startDateTime.getDate()} ${startDateTime.getHours()}:${startDateTime.getMinutes()}:${startDateTime.getSeconds()}'`: null;
                            // let endNaplan = endDateTime ? `'${endDateTime.getFullYear()}-${endDateTime.getMonth() + 1}-${endDateTime.getDate()} ${endDateTime.getHours()}:${endDateTime.getMinutes()}:${endDateTime.getSeconds()}'`: null;
                            let startNaplan = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endNaplan = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Naplan}
                                        ,${NaplanType.StartNaplan}
                                        ,0
                                        ,${startNaplan}
                                        ,${endNaplan}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.NaplanStart}
                                    )`;

                                await DataAccess.execute(queryInsert);
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportEndNaplan():Promise<any> {
        let query = `exec ne_getDataWhenEndNaplan @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('End Naplan length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime =  element && element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element && element.endDateTime ? new Date(element.endDateTime): null;
                            let startNaplan = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endNaplan = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let resultNaplan = await DataAccess.execute(`exec GetListStudentSummaryNaplanByParentID @EnrolmentId=${element.enrolmentId}, @ClassNaplanId=${element.classNaplanId}`);
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                        ,Status
                                        ,BestMark
                                        ,ClassAverage
                                        ,TopMark
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Naplan}
                                        ,${NaplanType.EndNaplan}
                                        ,0
                                        ,${startNaplan}
                                        ,${endNaplan}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.NaplanEnd}
                                        ,'${resultNaplan[0] && resultNaplan[0].StatusName || 'Not started'}'
                                        ,'${resultNaplan[0] && resultNaplan[0].BestMark || 0}'
                                        ,'${resultNaplan[0] && resultNaplan[0].ClassAverage || 0}'
                                        ,'${resultNaplan[0] && resultNaplan[0].TopMark || 0}'
                                    )`;
                                await DataAccess.execute(queryInsert);
                               
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportNotCompletedNaplanAfter7Days():Promise<any> {
        let query = `exec ne_getDataNotCompletedNaplanAfter7Days @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Not Completed Naplan After 7 Days length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime =  element && element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element && element.endDateTime ? new Date(element.endDateTime): null;
                            let startNaplan = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endNaplan = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Naplan}
                                        ,${NaplanType.After7Days}
                                        ,0
                                        ,${startNaplan}
                                        ,${endNaplan}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.NaplanAfter7Days}
                                    )`;
                                await DataAccess.execute(queryInsert);
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }
    // end data send Naplan
    // start init data send Revision
    async insertDataReportStartRevision():Promise<any> {
        let query = `exec ne_getDataWhenStartRevision @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Start Revision length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime = element.endDateTime ? new Date(element.endDateTime): null;
                            let startAssessment = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endAssessment = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Revision}
                                        ,${RevisionType.StartRevision}
                                        ,0
                                        ,${startAssessment}
                                        ,${endAssessment}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.RevisionStart}
                                    )`;
                             
                                await DataAccess.execute(queryInsert);
                               
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportNotCompletedRevisionAfter7Days():Promise<any> {
        let query = `exec ne_getDataNotCompletedRevisionAfter7Days @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Not Completed Revision After 7 Days length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime =  element && element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element && element.endDateTime ? new Date(element.endDateTime): null;
                            let startAssessment = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endAssessment = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Revision}
                                        ,${RevisionType.After7Days}
                                        ,0
                                        ,${startAssessment}
                                        ,${endAssessment}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.RevisionAfter7Days}
                                    )`;
                                await DataAccess.execute(queryInsert);
                                
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }
    // end init data send Revision

    // start init data send FocusGroup
     async insertDataReportFocusGroup():Promise<any> {
        let query = `exec ne_getDataFocusGroup @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Start FocusGroup length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let mainConcept = `{"topicName": "${element.topicName}", "description": "${element.description}"}`;
                            let query =`select qa.Description AS Description ,t.Name as TopicName 
                                        from FocusGroupQATemplate fgQaT
                                            inner join QATemplate qa on qa.Id=fgQaT.QATemplateID
                                            inner join Topic t on t.ID = qa.TopicID
                                        where fgQaT.FocusGroupID=${element.focusGroupId}`;
                            let resultFocusGroup = await DataAccess.execute(query);
                            let stringConcepts=``;
                            if(resultFocusGroup.length) {
                                for(let i=0;i<resultFocusGroup.length;i++){
                                    if (i === (resultFocusGroup.length-1))
                                        stringConcepts +=`{"topicName": "${resultFocusGroup[i].TopicName}", "description": "${resultFocusGroup[i].Description}"}`;
                                    else
                                        stringConcepts +=`{"topicName": "${resultFocusGroup[i].TopicName}", "description": "${resultFocusGroup[i].Description}"};`;
                                }
                            }
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,MessageGroup
                                        ,FocusGroupType
                                        ,MainConcepts
                                        ,Concepts
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.FocusCenter}
                                        ,${FocusGroupType.FocusGroupCreate}
                                        ,0
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${MessageGroupType.FocusGroup}
                                        ,${element.focusGroupType}
                                        ,'${mainConcept}'
                                        ,'${stringConcepts}'
                                    )`;
                                await DataAccess.execute(queryInsert);
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }
    // end init data send FocusGroup
    // start init data send Assignment
    async insertDataReportStartAssignment():Promise<any> {
        let query = `exec ne_getDataWhenStartAssessment @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Start Assignment length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime = element.endDateTime ? new Date(element.endDateTime): null;
                            let startAssessment = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endAssessment = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Assessment}
                                        ,${AssessmentEmailType.StartAssessment}
                                        ,0
                                        ,${startAssessment}
                                        ,${endAssessment}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.AssessmentStart}
                                    )`;
                             
                                await DataAccess.execute(queryInsert);
                                
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportEndAssignment():Promise<any> {
        let query = `exec ne_getDataWhenEndAssessment @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('End Assessment length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime =  element && element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element && element.endDateTime ? new Date(element.endDateTime): null;
                            let startAssessment = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endAssessment = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let resultAssignment = await DataAccess.execute(`exec GetAssignmentResultOverviewByClassAssignmentID @ParentId=${element.parentId},@EnrolmentId=${element.enrolmentId},@ClassAssignmentID=${element.classAssignmentId}`);
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                        ,Status
                                        ,BestMark
                                        ,ClassAverage
                                        ,TopMark
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Assessment}
                                        ,${AssessmentEmailType.EndAssessment}
                                        ,0
                                        ,${startAssessment}
                                        ,${endAssessment}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.AssessmentEnd}
                                        ,'${resultAssignment[0] && resultAssignment[0].StatusName || 'Not started'}'
                                        ,'${resultAssignment[0] && resultAssignment[0].BestMark || 0}'
                                        ,'${resultAssignment[0] && resultAssignment[0].ClassAverage || 0}'
                                        ,'${resultAssignment[0] && resultAssignment[0].TopMark || 0}'
                                    )`;
                                await DataAccess.execute(queryInsert);
                                
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportNotCompletedAssignmentAfter7Days():Promise<any> {
        let query = `exec ne_getDataNotCompletedAssessmentAfter7Days @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Not Completed Assessment After 7 Days length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime =  element && element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element && element.endDateTime ? new Date(element.endDateTime): null;
                            let startAssessment = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endAssessment = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Assessment}
                                        ,${AssessmentEmailType.After7Days}
                                        ,0
                                        ,${startAssessment}
                                        ,${endAssessment}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.AssignmentAfter7Days}
                                    )`;
                                await DataAccess.execute(queryInsert);
                                
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }
    // end data send Assignment
    // start init data send HomeWork
    async insertDataReportStartHomeWork():Promise<any> {
        let query = `exec ne_getDataWhenStartHomeWork @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Start HomeWork length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate = new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element.endDateTime ? new Date(element.endDateTime): null;
                            let startHomeWork = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endHomeWork = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let resultConcepts = await DataAccess.execute(`exec GetConceptsListHomeworkByEnrolmentId @ParentId=${element.parentId}, @EnrolmentId=${element.enrolmentId},@Term=0`);
                            let stringConcepts=``;
                            if(resultConcepts.length) {
                                for(let i=0;i<resultConcepts.length;i++){
                                    if (i === (resultConcepts.length-1))
                                        stringConcepts +=`{"topicName": "${resultConcepts[i].TopicName}", "description": "${resultConcepts[i].Description}"}`;
                                    else
                                        stringConcepts +=`{"topicName": "${resultConcepts[i].TopicName}", "description": "${resultConcepts[i].Description}"};`;
                                }
                            }

                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                        ,Concepts
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId} 
                                        ,${StatusType.Homework}
                                        ,${HomeWorkEmailType.StartHomeWork}
                                        ,0
                                        ,${startHomeWork}
                                        ,${endHomeWork}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.HomeWorkStart}
                                        ,'${stringConcepts}'
                                    )`;

                                await DataAccess.execute(queryInsert);
                              
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportEndHomeWork():Promise<any> {
        let query = `exec ne_getDataWhenEndHomeWork @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('End HomeWork length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            // let dateTime = this.weekDate();
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate= new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element.endDateTime ? new Date(element.endDateTime): null;
                            let startHomeWork = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endHomeWork = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let resultData= await DataAccess.execute(`exec getDataClassHomeWorkByEnrolmentAndClass @enrolmentId=${element.enrolmentId}, @classId=${element.classId}, @ClassHomeWorkID=${element.classHomeworkId}`); //, @fromDate='${dateTime.fromDate}', @toDate='${dateTime.toDate}'
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,TimeSpentStudent
                                        ,QuestionsCompleted
                                        ,Accuracy
                                        ,TimeSpentAvgClass
                                        ,QuestionsCompletedAvgClass
                                        ,AccuracyAvgClass
                                        ,TimeSpentTopStudent
                                        ,QuestionsCompletedTopStudent
                                        ,AccuracyTopStudent
                                        ,MessageGroup
                                        ,Status
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Homework}
                                        ,${HomeWorkEmailType.EndHomeWork}
                                        ,0
                                        ,${startHomeWork}
                                        ,${endHomeWork}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${resultData[0] && resultData[0].sumTimeSpent || 0}
                                        ,${resultData[0] && resultData[0] && resultData[0].sumNumberCorrect + resultData[0].sumNumberInCorrect || 0}
                                        ,${resultData[0] && resultData[0].sumPercentCorrectQuestion || 0}
                                        ,${resultData[0] && resultData[0].sumTimeSpentClass || 0}
                                        ,${resultData[0] && resultData[0].sumNumberCorrectClass + resultData[0].sumNumberInCorrectClass || 0}
                                        ,${resultData[0] && resultData[0].sumPercentCorrectQuestionClass || 0}
                                        ,${resultData[0] && resultData[0].sumTimeSpentTop || 0}
                                        ,${resultData[0] && resultData[0].sumNumberCorrectTop + resultData[0].sumNumberInCorrectTop || 0}
                                        ,${resultData[0] && resultData[0].sumPercentCorrectQuestionTop || 0}
                                        ,${MessageGroupType.HomeWorkEnd}
                                        ,'${resultData[0] && resultData[0].statusHomeWork || 'Not started'}'
                                    )`;
                                await DataAccess.execute(queryInsert);
                               
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }

    async insertDataReportNotCompletedHomeWorkAfter4Days ():Promise<any> {
        let query = `exec ne_getDataNotCompletedHomeWorkAfter4Days @SchoolID=${process.env.SCHOOLID}`;
        let result = await DataAccess.execute(query);
        console.log('Not Completed HomeWork After 4 Days length', result.length);
        if(result.length > 0) {
            var arrayEnrolment: any[] =[];
            var limit: number = 10;
            for (var i = 1; i <= result.length; i++) {
                var item: any = result[i - 1];
                arrayEnrolment.push(item);
                if (i % limit === 0 || i === result.length) {
                    for (var j = 0; j <= arrayEnrolment.length; j++) {
                        let element = arrayEnrolment[j];
                        if (element && element.parentId && element.studentId  && element.enrolmentId && element.classId && element.emailParent) {
                            let newDate= new Date();
                            let startDateTime = element.startDateTime ? new Date(element.startDateTime) : null;
                            let endDateTime =  element.endDateTime ? new Date(element.endDateTime): null;
                            let startHomeWork = startDateTime ? `'${startDateTime.getUTCFullYear()}-${startDateTime.getUTCMonth() + 1}-${startDateTime.getUTCDate()} ${startDateTime.getUTCHours()}:${startDateTime.getUTCMinutes()}:${startDateTime.getUTCSeconds()}'`: null;
                            let endHomeWork = endDateTime ? `'${endDateTime.getUTCFullYear()}-${endDateTime.getUTCMonth() + 1}-${endDateTime.getUTCDate()} ${endDateTime.getUTCHours()}:${endDateTime.getUTCMinutes()}:${endDateTime.getUTCSeconds()}'`: null;
                            let resultConcepts = await DataAccess.execute(`exec GetConceptsListHomeworkByEnrolmentId @ParentId=${element.parentId}, @EnrolmentId=${element.enrolmentId},@Term=0`);
                            let stringConcepts=``;
                            if(resultConcepts.length) {
                                for(let i=0;i<resultConcepts.length;i++){
                                    if (i === (resultConcepts.length-1))
                                        stringConcepts +=`{"topicName": "${resultConcepts[i].TopicName}", "description": "${resultConcepts[i].Description}"}`;
                                    else
                                        stringConcepts +=`{"topicName": "${resultConcepts[i].TopicName}", "description": "${resultConcepts[i].Description}"};`;
                                }
                            }
                            let queryInsert = `
                                    INSERT INTO DataReportYear
                                    (
                                        ParentId
                                        ,StudentId
                                        ,EnrolmentId
                                        ,ClassId
                                        ,Type
                                        ,EmailType
                                        ,IsSend
                                        ,StartDatetime
                                        ,EndDatetime
                                        ,FirstNameStudent
                                        ,LastNameStudent
                                        ,FullNameStudent
                                        ,FirstNameParent
                                        ,LastNameParent
                                        ,FullNameParent
                                        ,EmailParent
                                        ,PhoneParent
                                        ,CreatedOn
                                        ,Year
                                        ,DaysLeft
                                        ,MessageGroup
                                        ,Concepts
                                    )
                                    VALUES
                                    (
                                        ${element.parentId}
                                        ,${element.studentId}
                                        ,${element.enrolmentId}
                                        ,${element.classId}
                                        ,${StatusType.Homework}
                                        ,${HomeWorkEmailType.After4Days}
                                        ,0
                                        ,${startHomeWork}
                                        ,${endHomeWork}
                                        ,'${element.firstNameStudent}'
                                        ,'${element.lastNameStudent}'
                                        ,'${element.fullNameStudent}'
                                        ,'${element.firstNameParent}'
                                        ,'${element.lastNameParent}'
                                        ,'${element.fullNameParent}'
                                        ,'${element.emailParent}'
                                        ,'${element.phoneParent}'
                                        ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                                        ,${newDate.getFullYear()}
                                        ,${element.daysLeft}
                                        ,${MessageGroupType.HomeWorkAfter4Days}
                                        ,'${stringConcepts}'
                                    )`;
                                await DataAccess.execute(queryInsert);
                                
                        } else 
                            continue;
                    }
                    arrayEnrolment = [];
                }
            }
        }

        return true;
    }
    // end  data send HomeWork
    delay() {
        let timeDeplays = [5000,6000,7000,8000,9000,10000];
        let ms:number = timeDeplays[Math.floor(Math.random()*timeDeplays.length)];
        return new Promise<void>(function(resolve) {
          setTimeout(resolve, ms);
        });
    }

    async sendDataGameCompletesByEnrolmentId (enrolmentId: number, type: number, studentPercent?: number, focusGroupQATemplateId?: number) :Promise<any> {
        // http://localhost:5000/api/homework/send-data-completes?enrolmentId=19753&studentPercent=10&type=1
        if(!enrolmentId || !type)
            throw new Error('enrolmentId and type required!');
        if(type !== StatusType.Homework && type !== StatusType.Assessment 
            && type !== StatusType.FocusCenter && type !== StatusType.Naplan
            && type !== StatusType.Improvement && type !== StatusType.Revision
            && type !== StatusType.Practice
        )
            throw new Error('type false!');
        let statusType;
        let emailType;
        let messageGroupType;
        let concept= '';
        let target;
        let focusGroupType= null;
        if(type === StatusType.Homework) {
            statusType = StatusType.Homework;
            emailType = HomeWorkEmailType.GameCompletes;
            messageGroupType = MessageGroupType.HomeWorkGameCompletes;
        }

        if(type === StatusType.Assessment) {
            statusType = StatusType.Assessment;
            emailType = AssessmentEmailType.GameCompletes;
            messageGroupType = MessageGroupType.AssessmentGameCompletes
        }

        if(type === StatusType.Revision) {
            statusType = StatusType.Revision;
            emailType = RevisionType.GameCompletes;
            messageGroupType = MessageGroupType.RevisionGameCompletes
        }

        if(type === StatusType.Naplan) {
            statusType = StatusType.Naplan;
            emailType = NaplanType.GameCompletes;
            messageGroupType = MessageGroupType.NaplanGameCompletes
        }
    
        if(type === StatusType.FocusCenter) {
            if(!focusGroupQATemplateId)
                throw new Error('focusGroupQATemplateId required!');
            statusType = StatusType.FocusCenter;
            emailType = FocusGroupType.GameCompletes;
            messageGroupType = MessageGroupType.FocusGroupGameCompletes
           
            let query =`select qa.Description AS description ,t.Name as topicName , fgQaT.Percentage as target, fg.Type as type
                        from FocusGroupQATemplate fgQaT
                            inner join QATemplate qa on qa.Id=fgQaT.QATemplateID
                            inner join Topic t on t.ID = qa.TopicID
                            inner join FocusGroup fg on fg.id = fgQaT.FocusGroupID
                        where fgQaT.ID=${focusGroupQATemplateId} and fg.Type is not null`;
            let resultFocusGroup = await DataAccess.execute(query);
            if (resultFocusGroup.length > 0) {
                concept = `{"topicName": "${resultFocusGroup[0].topicName}", "description": "${resultFocusGroup[0].description}"}`;
                focusGroupType = resultFocusGroup[0].type;
                target=Number(resultFocusGroup[0].target) || 65;
            }
            else
                throw new Error('focusGroupQATemplate required!');
            
        }


        let querySelect=`
            select x3.ID as enrolmentId
                ,x3.ClassID AS classId
                ,p.FirstName AS firstNameStudent
                ,p.LastName AS lastNameStudent
                ,p.FirstName +' '+p.LastName as fullNameStudent
                ,p1.FirstName AS firstNameParent
                ,p1.LastName AS lastNameParent
                ,p1.FirstName +' '+p1.LastName as fullNameParent
                ,p1.Email AS emailParent
                ,p1.Phone AS phoneParent
                ,p1.ID AS parentId
                ,p.ID AS studentId
                ,p1.UserId as userId
                ,Case when isnull(p1.ReceiveEmailAll,1) =1 and isnull(p1.ReceiveMarketing,1) =1 then 1 else 0 end as isSendEmail
            from Enrolment x3 
                inner join Class x2 on x2.ID = x3.ClassID
                inner join Student x4 on x4.Id= x3.StudentID
                inner join Person p on p.Id=x4.ID
                inner join Person p1 on p1.Id=x4.ParentId
            where x3.Active=1 and x4.Active=1
                and x3.ID = ${enrolmentId}`;

                // and isnull(p1.ReceiveEmailAll,1) = 1
                // and isnull(p1.ReceiveMarketing,1) = 1	

        let resultSelect = await DataAccess.execute(querySelect);
   
        if(resultSelect.length > 0) {
            let element = resultSelect[0];
            let newDate = new Date();
            let queryInsert = `
            INSERT INTO DataReportYear
            (
                ParentId
                ,StudentId
                ,EnrolmentId
                ,ClassId
                ,Type
                ,EmailType
                ,IsSend
                ,FirstNameStudent
                ,LastNameStudent
                ,FullNameStudent
                ,FirstNameParent
                ,LastNameParent
                ,FullNameParent
                ,EmailParent
                ,PhoneParent
                ,CreatedOn
                ,Year
                ,MessageGroup
                ,StudentPercentage
                ,MainConcepts
                ,FocusGroupType
                ,Target
            )
            OUTPUT INSERTED.ID
            VALUES
            (
                ${element.parentId}
                ,${element.studentId}
                ,${element.enrolmentId}
                ,${element.classId}
                ,${statusType}
                ,${emailType}
                ,1
                ,'${element.firstNameStudent}'
                ,'${element.lastNameStudent}'
                ,'${element.fullNameStudent}'
                ,'${element.firstNameParent}'
                ,'${element.lastNameParent}'
                ,'${element.fullNameParent}'
                ,'${element.emailParent}'
                ,'${element.phoneParent}'
                ,'${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}'
                ,${newDate.getFullYear()}
                ,${messageGroupType}
                ,${studentPercent || 0}
                ,'${concept || null}'
                ,${focusGroupType || null}
                ,${target || 0}
            )`;

            let resultInsert = await DataAccess.execute(queryInsert);
            if(!resultInsert.length)
                throw new Error('Insert false');
            else
                // element.emailParent
                await this.sendEmailAndNotification({Id: resultInsert[0].ID, ParentId: element.parentId, StudentId: element.studentId, 
                    EmailParent: element.emailParent, MessageGroup: messageGroupType, 
                    Type: statusType, EmailType: emailType, FirstNameParent: element.firstNameParent,
                    FirstNameStudent: element.firstNameStudent, StudentPercent: studentPercent || 0,
                    MainConcepts: concept, FocusGroupType: String(focusGroupType), Target: target || 0,
                    isSendEmail: element.isSendEmail || 0, userId: element.userId
                });
        }
        
        return true;
    }

    async sendEmail(data: any):Promise<any> {
        if(!data || !data.ParentId)
            return false;
        // let querySelect=`select UserId as userId
        //         from Person p1 where id=${data.ParentId} and isnull(p1.ReceiveEmailAll,1) = 1 and isnull(p1.ReceiveMarketing,1)=1`;
        // let result = await DataAccess.execute(querySelect);
        if(Number(data.isSendEmail) === 1) {
            try {
                let emailTemplate = 'hello';
                let title = 'hello';
                //  Assessment
                if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.StartAssessment) {
                    emailTemplate = new EmailTemplateWhenStartAssessment(data).renderHtml();
                    title = `An assessment task has been created for ${data.FirstNameStudent}`;
                }

                if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.After7Days) {
                    emailTemplate = new EmailTemplateWhenAfter7DaysEndAssessment(data).renderHtml();
                    title = `There's only a few days left for ${data.FirstNameStudent} to complete their assessment task!`;
                }
                
                if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.EndAssessment) {
                    emailTemplate = new EmailTemplateWhenEndAssessment(data).renderHtml();
                    title = `All results are in for ${data.FirstNameStudent}'s assessment task! See how ${data.FirstNameStudent} compare with their year!`;
                }

                if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.GameCompletes) {
                    // console.log('FirstNameParentFirstNameParent', data)
                    emailTemplate = new EmailTemplateGameAssessmentCompletes(data).renderHtml();
                    title = `${data.FirstNameStudent} has completed their assessment task!`;
                }
                //  Homework
                if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.StartHomeWork) {
                    emailTemplate = new EmailTemplateWhenStartHomeWork(data).renderHtml();
                    title = `${data.FirstNameStudent}'s weekly homework exercise is available!`;
                }

                if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.EndHomeWork) {
                    emailTemplate = new EmailTemplateWhenEndHomeWork(data).renderHtml();
                    title = `${data.FirstNameStudent}'s weekly results`;
                }

                if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.After4Days) {
                    emailTemplate = new EmailTemplateWhenAfter4DaysHomeWork(data).renderHtml();
                    title = `${data.FirstNameStudent} has yet to complete this week's homework exercise.`;
                }

                if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.GameCompletes) {
                    // console.log('FirstNameParentFirstNameParent', data)
                    emailTemplate = new EmailTemplateGameHomeWorkCompletes(data).renderHtml();
                    title = `${data.FirstNameStudent}'s has completed this week's homework exercise. Send ${data.FirstNameStudent} an e-sticker!`;
                }
                //  FocusCenter
                if(data.Type === StatusType.FocusCenter && data.EmailType === FocusGroupType.FocusGroupCreate) {
                    emailTemplate = new EmailTemplateWhenStartFocusCentre(data).renderHtml();
                    title = `We've found growth opportunities for ${data.FirstNameStudent}!`;
                }

                if(data.Type === StatusType.FocusCenter && data.EmailType === FocusGroupType.GameCompletes) {
                    emailTemplate = new EmailTemplateWhenGameCompletesFocusCentre(data).renderHtml();
                    title = `${data.FirstNameStudent} has completed a growth exercise set by our teahers!!`;
                }
                //  Revision
                if(data.Type === StatusType.Revision && data.EmailType === RevisionType.StartRevision) {
                    emailTemplate = new EmailTemplateWhenStartRevision(data).renderHtml();
                    title = `A revision exercise has been created for ${data.FirstNameStudent}!`;
                }

                if(data.Type === StatusType.Revision && data.EmailType === RevisionType.After7Days) {
                    emailTemplate = new EmailTemplateWhenRevisionAfter7Days(data).renderHtml();
                    title = `There's only a few days left for ${data.FirstNameStudent} to complete the revision exercise!`;
                }

                if(data.Type === StatusType.Revision && data.EmailType === RevisionType.GameCompletes) {
                    emailTemplate = new EmailTemplateWhenGameCompletesRevision(data).renderHtml();
                    title = `${data.FirstNameStudent} has completed their revision exercise!`;
                }
                //  NAPLAN
                if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.StartNaplan) {
                    emailTemplate = new EmailTemplateWhenStartNaplan(data).renderHtml();
                    title = `A NAPLAN practice exam has been created for ${data.FirstNameStudent}!`;
                }

                if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.After7Days) {
                    emailTemplate = new EmailTemplateWhenNaplanAfter7Days(data).renderHtml();
                    title = `There's only a few days left for ${data.FirstNameStudent} to complete their NAPLAN practiec exam!`;
                }

                if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.EndNaplan) {
                    emailTemplate = new EmailTemplateWhenEndNaplan(data).renderHtml();
                    title = `Results are in for ${data.FirstNameStudent}'s year for the NAPLAN practice exam! See how ${data.FirstNameStudent} compare with their year!`;
                }

                if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.GameCompletes) {
                    emailTemplate = new EmailTemplateWhenGameCompletesNaplan(data).renderHtml();
                    title = `${data.FirstNameStudent} has completed their NAPLAN practice exam!`;
                }

                MailHelper.sendMail(data.EmailParent, title , undefined, emailTemplate);
            }
            catch(error) {
                console.log(error);
                return false;
            }
        }
        return true;
        
    }

    async sendEmailAndNotification(data: any):Promise<any> {
        await this.delay();
        await this.sendNotification(data);
        await this.sendEmail(data);
        return true;
    }
    

    async sendNotification(data: any):Promise<any> {
        let typeMessage = 0;
        if (data.StudentPercent && data.StudentPercent >= 65)
            typeMessage  = Math.floor(Math.random() * Math.floor(2) + 1);

        try {
            let notification = 'hello';
            let messageBody = 'hello';
            //  Assessment
            if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.StartAssessment) {
                notification = `An assessment task has been created for ${data.FirstNameStudent}!`;
                messageBody = `An assessment task has been created for ${data.FirstNameStudent}!`;
            }

            if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.After7Days) {
                notification = `There's only a few days left for ${data.FirstNameStudent} to complete their assessment task!`;
                messageBody = `There's only a few days left for ${data.FirstNameStudent} to complete their assessment task!`;
            }
            
            if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.EndAssessment) {
                notification = `All results are in for ${data.FirstNameStudent}'s assessment task! See how ${data.FirstNameStudent} compare with their year!`;
                messageBody = `All results are in for ${data.FirstNameStudent}'s assessment task! See how ${data.FirstNameStudent} compare with their year!`;
            }

            if(data.Type === StatusType.Assessment && data.EmailType === AssessmentEmailType.GameCompletes) {
                notification = `${data.FirstNameStudent} has completed their assessment task! View their results now!`;
                messageBody = `${data.FirstNameStudent} has completed their assessment task! View their results now!`;
            }
            //  Homework
            if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.StartHomeWork) {
                notification = `${data.FirstNameStudent}'s weekly homework exercise is now available! Tap to view what ${data.FirstNameStudent} will be learning this week.`;
                messageBody = `${data.FirstNameStudent}'s weekly homework exercise is now available! Tap to view what ${data.FirstNameStudent} will be learning this week.`;
            }

            if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.EndHomeWork) {
                notification = `${data.FirstNameStudent} weekly results is available! Tap to view ${data.FirstNameStudent}'s results for this week`;
                messageBody = `${data.FirstNameStudent} weekly results is available! Tap to view ${data.FirstNameStudent}'s results for this week`;
            }

            if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.After4Days) {
                notification = `The homework exercise will be available for ${data.DaysLeft} days.`;
                messageBody = `${data.FirstNameStudent}'s has yet to complete this week's homework exercise.`;
            }

            if(data.Type === StatusType.Homework && data.EmailType === HomeWorkEmailType.GameCompletes) {
                notification = `${data.FirstNameStudent}'s has completed this week's homework exercise.`;
                messageBody = `${data.FirstNameStudent}'s has completed this week's homework exercise. Tap to view ${data.FirstNameStudent}'s results!`;
            }
            //  FocusCenter
            if(data.Type === StatusType.FocusCenter && data.EmailType === FocusGroupType.FocusGroupCreate) {
                notification = `Our teacher's have found some growth opportunities for ${data.FirstNameStudent}!`;
                messageBody = `Our teacher's have found some growth opportunities for ${data.FirstNameStudent}!`;
            }

            if(data.Type === StatusType.FocusCenter && data.EmailType === FocusGroupType.GameCompletes) {
                notification = `${data.FirstNameStudent} has completed a growth exercise set by our teahers!! View what ${data.FirstNameStudent} has accomplished.`;
                messageBody = `${data.FirstNameStudent} has completed a growth exercise set by our teahers!! View what ${data.FirstNameStudent} has accomplished.`;
            }
            //  Revision
            if(data.Type === StatusType.Revision && data.EmailType === RevisionType.StartRevision) {
                notification = `A revision exercise has been created for ${data.FirstNameStudent} to reinforce their learnings!`;
                messageBody = `A revision exercise has been created for ${data.FirstNameStudent}!`;
            }

            if(data.Type === StatusType.Revision && data.EmailType === RevisionType.After7Days) {
                notification = `There's only a few days left for ${data.FirstNameStudent} to complete the revision exercise!`;
                messageBody = `There's only a few days left for ${data.FirstNameStudent} to complete the revision exercise!`;
            }

            if(data.Type === StatusType.Revision && data.EmailType === RevisionType.GameCompletes) {
                notification = `${data.FirstNameStudent} has completed their revision exercise! View ${data.FirstNameStudent}'s results now!`;
                messageBody = `${data.FirstNameStudent} has completed their revision exercise! View ${data.FirstNameStudent}'s results now!`;
            }
            //  NAPLAN
            if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.StartNaplan) {
                notification = `A NAPLAN practice exam has been created for ${data.FirstNameStudent}!`;
                messageBody = `A NAPLAN practice exam has been created for ${data.FirstNameStudent}!`;
            }

            if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.After7Days) {
                notification = `There's only a few days left for ${data.FirstNameStudent} to complete their NAPLAN practice exam!`;
                messageBody = `There's only a few days left for ${data.FirstNameStudent} to complete their NAPLAN practice exam!`;
            }

            if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.EndNaplan) {
                notification = `Results are in for ${data.FirstNameStudent}'s year for the NAPLAN practice exam! See how ${data.FirstNameStudent} compare with their year!`;
                messageBody = `Results are in for ${data.FirstNameStudent}'s year for the NAPLAN practice exam! See how ${data.FirstNameStudent} compare with their year!`;
            }

            if(data.Type === StatusType.Naplan && data.EmailType === NaplanType.GameCompletes) {
                notification = `${data.FirstNameStudent} has completed their NAPLAN practice exam! View their results now!`;
                messageBody = `${data.FirstNameStudent} has completed their NAPLAN practice exam! View their results now!`;
            }

            var oId = await DataAccess.execute(`exec sp_SaveMessageParent @ToParentID=${data.ParentId},@FromStudentID=${data.StudentId},@Message="${notification}",@MessageGroup=${data.MessageGroup},@Type=${typeMessage},@SourceDescription="${data.Id}"`);
            var dataDevice = await DataAccess.execute(`exec sp_GetDeviceIDByPersonID @PersonID=${data.ParentId}`);
            if(dataDevice.length > 0) {
                for (var j = 0; j < dataDevice.length; j++) {
                    var element = dataDevice[j];
                    GcmHelper.sendMail(oId[0].Oid, element.DeviceID, messageBody);
                }
            }
        }
        catch(error) {
            console.log(error);
            return false;
        } 
        return true;
    }

    async updateIsSendForDataReportYear(data: any):Promise<any> {
        try {
            let queryUpdate = `UPDATE DataReportYear
                                SET IsSend= 1
                                WHERE Id = ${data.Id}`;
            await DataAccess.execute(queryUpdate);
        }   
        catch(error) {
            console.log(error);
        } 
    }

    async getDataSend(type: number, emailType: number):Promise<any> {
        console.log('send');
        if(!process.env.FIREBASE_TOKEN || !type || !emailType)
            return false;
        let limitSend = 500;
        let query =`select DataReportYear.*,  
                    p1.UserId as userId, 
                    Case when isnull(p1.ReceiveEmailAll,1) =1 and isnull(p1.ReceiveMarketing,1) =1 then 1 else 0 end as isSendEmail,
                    DATEDIFF(DAY,getdate(),DataReportYear.EndDateTime) + 1 AS dayLeft
                    from DataReportYear
                        inner join Class on Class.ID = DataReportYear.ClassId
                        inner join Person p1 on p1.Id=DataReportYear.ParentId
                    where DataReportYear.Type=${type} 
                        and DataReportYear.EmailType=${emailType}
                        and DataReportYear.IsSend=0 
                    ORDER BY DataReportYear.Id ASC
                    OFFSET 0 ROWS
                    FETCH NEXT 10 ROWS ONLY`;
        var data = await DataAccess.execute(query);
        if(data.length > 0) {
            var arrayParent: any[] =[];
            var limit: number = 10;
            for (let i = 1; i <= data.length; i++) {
                const item: any = data[i - 1];
                arrayParent.push(item);
                if (i % limit === 0 || i === data.length) {
                    for (var x = 0; x < arrayParent.length; x++) {
                        await this.sendEmailAndNotification(arrayParent[x]);
                        await this.updateIsSendForDataReportYear(arrayParent[x]);
                    }
                    arrayParent = [];
                }
            }
        }

        return true;
    }

    yearDate() {
        let date = new Date();
        let data = {
            'fromDate': `${date.getFullYear()}-1-1 00:00:00`,
            'toDate': `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} 00:00:00`
        };

        return data;
    }

    weekDate() {
        let startDate = new Date();
        let endDate = new Date();

        var diff = startDate.getDate() - startDate.getDay() + (startDate.getDay() === 0 ? -6 : 1);
        startDate = new Date(startDate.setDate(diff));
        if (endDate.getDay() !== 0)
            endDate.setDate(endDate.getDate() - endDate.getDay() + 7);

        let data = {
            'fromDate': `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()} 00:00:00`,
            'toDate': `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()} 00:00:00`
        };

        return data;
    }
    
}