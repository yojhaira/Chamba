import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    public usersList: Array<any>;

    constructor() { }

    public listUsers(): Array<any> {
        return this.usersList = [
            {
                userID: '001',
                personalInformation: {
                    userName: 'Samuel',
                    userLastname: 'Lee',
                    dateOfBirth: 19 - 08 - 94,
                    userPicture: 'image.jpg',
                    userSex: 'masculino',
                    userCity: 'Trujillo',
                    contactList: {
                        socialMediaList: {
                            facebook: 'https://www.facebook.com/pablito',
                            instagram: 'https://www.instagram.com/pablito',
                            messenger: 'https://www.messenger.facebook/pablito',
                            twitter: '',
                            whatsapp: ''
                        },
                        contacList: {
                            userPhone: '987653627',
                            userEmail: 'samuel@mail.com',
                        }
                    }
                },
                userCategory: {
                    userCategoryID: 1,
                    userCategoryName: 'Jardinería'
                },
                userType: {
                    userTypeID: 1,

                },
                workDone: 13,
                averageRating: 4.5,
                quotesMade: 430,
            }
        ]
    }
}