import { Component, OnInit } from '@angular/core';
import { ChildService } from './child.service'; 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  ChildInvoerModel = '';
constructor(private childService: ChildService){}

  onChildInvoer() {
    console.log('Data verstuurd: ' + this.ChildInvoerModel);
    this.childService.onChildInvoerCreated(this.ChildInvoerModel);
    this.ChildInvoerModel = '';
  }

  ngOnInit() {
  }

}
