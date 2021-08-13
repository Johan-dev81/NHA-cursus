import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-camping-registratie',
    templateUrl: './registratie.component.html'
})
export class CampingRegistratieInvoerComponent {
    @Output() campingRegistratieCreate = new EventEmitter<string>();
    InvoerCampingRegistratie = '';

    onCreateCampingRegistratie() {
        console.log('Created a campingregistratie: ' + this.InvoerCampingRegistratie);
        this.campingRegistratieCreate.emit(this.InvoerCampingRegistratie);
        this.InvoerCampingRegistratie = '';
    }
}
