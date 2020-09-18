import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RecursiveService {

    public months: Array<string>;

    constructor() {
        this.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Novimienbre', 'Diciembre'];
    }

    public formatMonth(month: string): string {
        let singleMonth = this.months[parseInt(month, 10) - 1];
        return singleMonth;
    }

    public formatDate(date: string): string {
        let splitDate = date.split('-');
        let chainMonth = splitDate[1];

        let day = splitDate[2];
        let month = this.formatMonth(chainMonth);
        let year = splitDate[0];

        let formattedDate = `${day} ${month} ${year}`;

        return formattedDate;
    }

    public getCurrentDate(): string {
        let day, month, year, date = new Date(), plainDay, plainMonth, structureDate;

        plainMonth = `0${date.getMonth().toString()}`;
        plainDay = `0${date.getDate().toString()}`;

        year = date.getFullYear();

        day = plainDay.slice(-2);
        month = plainMonth.slice(-2);

        structureDate = `${year}-${month}-${day}`;

        return structureDate;
    }

}
