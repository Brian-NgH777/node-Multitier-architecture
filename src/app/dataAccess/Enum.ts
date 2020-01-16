/* eslint-disable */

export enum StatusType {
    Homework = 1,
    Improvement = 2,
    Naplan = 3,
    Assessment = 4,
    Revision = 5,
    FocusCenter = 6,
    Practice = 7
};


export enum AssessmentEmailType {
    StartAssessment = 1,
    EndAssessment = 2,
    After7Days = 3,
    GameCompletes  = 4,
};


export enum HomeWorkEmailType {
    StartHomeWork = 1,
    EndHomeWork = 2,
    After4Days = 3,
    GameCompletes = 4
};

export enum MessageGroupType {
    // Assessment
    AssessmentStart = 15,
    AssessmentEnd = 21,
    AssignmentAfter7Days = 17,
    AssessmentGameCompletes = 6,
    // HomeWork
    HomeWorkStart = 10,
    HomeWorkEnd = 22,
    HomeWorkAfter4Days = 13,
    HomeWorkGameCompletes = 1,
    // FocusGroup
    FocusGroup = 12,
    FocusGroupGameCompletes = 4,
    // Revision
    RevisionStart = 14,
    RevisionAfter7Days = 18,
    RevisionGameCompletes = 5,
    // NAPLAN
    NaplanStart = 19,
    NaplanAfter7Days = 20,
    NaplanEnd= 23,
    NaplanGameCompletes= 2
};

export enum FocusGroupType {
    FocusGroupCreate = 1,
    GameCompletes  = 2
};

export enum RevisionType {
    StartRevision = 1,
    After7Days = 2,
    GameCompletes  = 3
};

export enum NaplanType {
    StartNaplan = 1,
    EndNaplan = 2,
    After7Days = 3,
    GameCompletes  = 4
};

export enum FocusType {
    Struggliing = 0,
    Excelling = 1,
};