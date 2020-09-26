import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'action-professional',
    templateUrl: './action-professional.component.html',
    styleUrls: ['./action-professional.component.scss']
})

export class ActionProfessionalComponent implements OnInit {

    /**
    * Properties
    */
    @Input() contentType: string;
    @ViewChild('wrapper', { static: true }) wrapper: ElementRef;

    public contentComponent: any;
    public content: Array<any>;

    constructor(private _renderer: Renderer2) { }

    public ngOnInit() {
        this.content = [
            {
                contentType: '1',
                contentTitle: '¿Eres un profesional?',
                contentSubtitle: 'Forma parte de una gran comunidad de profesionales ofreciendo su chamba',
                contentDescription: 'Contacta de manera instantánea con personas que buscan ayuda en trabajos domésticos, técnicos o profesionales y obtén mejores ingresos.',
                contentAction: 'Registrate gratis',
                contentRoute: '/register'
            },
            {
                contentType: '2',
                contentTitle: 'Cámbiate a PRO',
                contentSubtitle: 'Recibe más cotizaciones, mucho más rápido',
                contentDescription: 'Contacta de manera instantánea con personas que buscan ayuda en trabajos domésticos, técnicos o profesionales y obtén mejores ingresos.',
                contentAction: 'Ir a PRO',
                contentRoute: '/'
            },
        ]

        this.assignContent();

    }

    public assignContent(): void {
        if (this.contentType == "1") {
            this.contentComponent = this.content[0];
        } else {
            this.contentComponent = this.content[1];
            this._renderer.addClass(this.wrapper.nativeElement, 'left');
        }
    }
}