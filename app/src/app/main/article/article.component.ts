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
  constructor() { }

  ngOnInit(): void {
  }
}
