import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('cardItem') data: any
  @Output('addItem') addData = new EventEmitter<{title: string, desc: string, status: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  status(item: any){
    if (item.status == "active") {
      item.status = "danger"
    } else {
      item.status = "active"
    }
  }

  addDatas(item: {title: string, desc: string, status: string}){
    this.addData.emit({
      title: item.title,
      desc: item.desc,
      status: item.status
    })
  }

}
