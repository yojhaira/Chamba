import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SharedService {

    public months: Array<string>;
    public date: any;
    public currentDate: string;

    constructor() {
        this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Noviembre', 'Diciembre'];
        this.date = new Date();
        this.currentDate = '';

        this.getCurrentDate();
    }

    public getCurrentDate(): string {
        let day, month, year;

        day = this.date.getDate();
        month = this.months[this.date.getMonth()];
        year = this.date.getFullYear();

        this.currentDate = day + ' ' + month + ' ' + year;

        return this.currentDate;
    }

}