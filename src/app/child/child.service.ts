import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()

export class ChildService {
    invoerWijziging = new Subject<string[]>();
    invoerRij: string[] = ['Test'];

    onChildInvoerCreated(name:string) {
        this.invoerRij.push(name);
        this.invoerWijziging.next(this.invoerRij);
    }
        onChildInvoerDeleted(name: string) {
            this.invoerRij = this.invoerRij.filter(invoer => {
                return invoer !== name;
            });
            this.invoerWijziging.next(this.invoerRij);
            console.log(this.invoerRij);
        }
    }