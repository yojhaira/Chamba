import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MailboxMessageService {

    public messageList: Array<any> = [];

    public messagesSubject = new Subject<any>();
    public messagesSubject$ = this.messagesSubject.asObservable();

    constructor() { }

    public getMessageList(): Array<any> {
        return this.messageList = [
            {
                messageID: '001',
                state: 'new',
                importance: true,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Gustavo Saucedo',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario regular',
                    mail: 'gustavo@gmail.com'
                },
                messageDescription: {
                    title: 'Mejoramiento de Jardín interior',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '002',
                state: 'new',
                importance: true,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Arnold Prieto',
                    photo: '../../../assets/images/user1.jpg',
                    type: 'usuario pro',
                    mail: 'arnold@gmail.com'
                },
                messageDescription: {
                    title: 'Instalación de floreros',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '003',
                state: 'read',
                importance: true,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Miguel Rodriguez',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario regular',
                    mail: 'miguel@gmail.com'
                },
                messageDescription: {
                    title: 'Corte de cesped',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '004',
                state: 'answered',
                importance: true,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Tatiana Paredes',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario regular',
                    mail: 'tatiana@gmail.com'
                },
                messageDescription: {
                    title: 'Mejoramiento de Jardín interior',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '005',
                state: 'new',
                importance: false,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Gustavo Saucedo',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario pro',
                    mail: 'gustavo@gmail.com'
                },
                messageDescription: {
                    title: 'Mejoramiento de Jardín interior',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '006',
                state: 'solicitadas',
                importance: true,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Gustavo Saucedo',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario regular',
                    mail: 'gustavo@gmail.com'
                },
                messageDescription: {
                    title: 'Mejoramiento de Jardín interior',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            },
            {
                messageID: '007',
                state: 'new',
                importance: false,
                dateOfIssue: '26 de enero 2020',
                sender: {
                    name: 'Gustavo Saucedo',
                    photo: '../../../assets/images/user.jpg',
                    type: 'usuario pro',
                    mail: 'gustavo@gmail.com'
                },
                messageDescription: {
                    title: 'Mejoramiento de Jardín interior',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rerLorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis veniam eveniet quasinulla reiciendis perferendis praesentium rer',
                },
                answers: [
                    {
                        answerID: 1,
                        description: '',
                        author: {
                            authotName: '',
                            authotEmail: '',
                        },
                        date: ''
                    }
                ]
            }
        ]
    }

}