import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class NotificationsService {
    public listNotifications: Array<any>;
    constructor() { }

    public getListNotifications() {
        // las notificaciones nuevas tendran una estado de "new" y estaran presentes en la lista de nuevas en notification-alert-component, y que aun no se han visto en el componente, mantendran un detalle en el diseño(detalle en morado a un costado de la foto del remitente) y seguira asi hasta que el usuario cierre el dropdown en esta lista se mantendran solo las notificaciones que hayan ingresado en el ultimo dia(hoy). Por otro lado, en la lista de anteriores, se mantendran las notificaciones con un periodo de antiguedad de no mas de 3 dias(esto por revisar), en cuanto al detalle(fronja morada), pasara lo mismo que con notificaciones nuevas, mantendra el detalle hasta que sea visto en el componente. Orden: seran mostradas las mas recientes en el ultimo dia, hora, segundo...
        return this.listNotifications = [
            {
                notificationID: '001',
                notificationType: 'quote',
                notificationState: 'new',
                notificationSender: {
                    name: 'Gustavo Saucedo',
                    photo: '../../assets/images/users/default/gustavo-saucedo.jpg',
                    type: 'usuario regular',
                    mail: 'gustavo@mail.com'
                },
                notificationSubject: {
                    title: 'Mejoramiento de Jardín',
                },
                notificationDateOfIssue: '2020-08-22',
            },
            {
                notificationID: '002',
                notificationType: 'quote',
                notificationState: 'new',
                notificationSender: {
                    name: 'Michelle Phillips',
                    photo: '../../assets/images/users/default/michelle-phillips.jpg',
                    type: 'usuario regular',
                    mail: 'michelle@mail.com'
                },
                notificationSubject: {
                    title: 'Sembrado de cesped',
                },
                notificationDateOfIssue: '2020-08-22',
            },
            {
                notificationID: '003',
                notificationType: 'quote',
                notificationState: 'new',
                notificationSender: {
                    name: 'Connie Hopkins',
                    photo: '../../assets/images/users/default/connie-hopkins.jpg',
                    type: 'usuario regular',
                    mail: 'connie@mail.com'
                },
                notificationSubject: {
                    title: 'Sembrado de rosales',
                },
                notificationDateOfIssue: '2020-08-22',
            },
            {
                notificationID: '004',
                notificationType: 'quote',
                notificationState: 'viewed',
                notificationSender: {
                    name: 'Meghan Willis',
                    photo: '../../assets/images/users/default/meghan-willis.jpg',
                    type: 'usuario regular',
                    mail: 'meghan@mail.com'
                },
                notificationSubject: {
                    title: 'Corte y poda de árboles',
                },
                notificationDateOfIssue: '2020-08-16',
            },
            {
                notificationID: '005',
                notificationType: 'quote',
                notificationState: 'viewed',
                notificationSender: {
                    name: 'Mary Owens',
                    photo: '../../assets/images/users/default/mary-owens.jpg',
                    type: 'usuario regular',
                    mail: 'mary@mail.com'
                },
                notificationSubject: {
                    title: 'Corte de arbustos',
                },
                notificationDateOfIssue: '2020-08-15',
            },
        ]
    }
}
