import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

    // Properties
    @Input() controlName: string;

    public toggleButtonClean: boolean;
    public toggleButtonDefault: boolean;
    public nameInput: string;

    alternateButtonClean(event: any) {
        if(event.target.value != "") {
            this.toggleButtonClean = true;
            this.toggleButtonDefault = false;
        } else {
            this.toggleButtonClean = false;
            this.toggleButtonDefault = true;
        }
    }

    cleanInput(){
        let buttonClearRef: any = this.document.querySelector(".input-container--icons-clean");
        buttonClearRef.classList.add("translate-element");
        
        if(this.nameInput.length != 0) {
            this.nameInput = "";
            
            setTimeout(()=> {
                this.toggleButtonClean = false;
                this.toggleButtonDefault = true;
            }, 500)
        }
    }

    constructor(
        @Inject(DOCUMENT) private document: any
    ){}

    ngOnInit() {
        this.toggleButtonClean = false;
        this.toggleButtonDefault = true;
    }

}