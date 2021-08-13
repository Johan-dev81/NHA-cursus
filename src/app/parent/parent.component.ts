import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child/child.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
invoerWaarde: string[];

  constructor(private childService: ChildService ) {
    this.invoerWaarde = childService.invoerRij;

   }

  ngOnInit() {
this.invoerWaarde = this.childService.invoerRij;
this.childService.invoerWijziging.subscribe(invoerRij =>{
  this.invoerWaarde = invoerRij;
   });
  }

onChildInvoerDeleted(name: string) {
  this.childService.onChildInvoerDeleted(name);
}
}