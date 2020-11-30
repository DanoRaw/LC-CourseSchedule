export class Course {
    title: string;
    code: string;
    days: string[];
    startTime: string;
    endTime: string;
    credits: number;

    constructor(title: string, code: string, days: string[], startTime: string, endTime: string, credits: number) {
        this.title= title;
        this.code=code;
        this.days= days;
        this.startTime= startTime;
        this.endTime= endTime;
        this.credits= credits;
    };
}
