import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{

  cardItems = [{
    title: "Title 1",
    desc: "Desc 1"
  },{
    title: "Title 2",
    desc: "Desc 2"
  }]

  text = "Active"
  style = "background-color: rgba(0, 255, 0, 1)"
  constructor() { }

  ngOnInit(): void {
  }
  change() {
    if (this.text === "Active") {
      this.text = "Danger"
      this.style = "background-color: rgba(255, 0, 0, 1)"
    } else {
      this.text = "Active"
      this.style = "background-color: rgba(0, 255, 0, 1)"
    }
  }
}
