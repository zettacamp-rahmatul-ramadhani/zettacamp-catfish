import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any

  constructor() { }

  ngOnInit(): void {
  }

  change(item: any) {
    if (item.status === "Active") {
      item.status = "Danger"
    } else {
      item.status = "Active"
    }
  }
}
