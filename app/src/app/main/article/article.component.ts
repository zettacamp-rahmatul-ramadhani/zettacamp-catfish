import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  cardItems = [{
    title: "Title 1",
    desc: "Desc 1",
    status: "Active"
  },{
    title: "Title 2",
    desc: "Desc 2",
    status: "Active"
  },{
    title: "Title 3",
    desc: "Desc 3",
    status: "Danger"
  }]

  style = "background-color: rgba(0, 255, 0, 1)"
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
