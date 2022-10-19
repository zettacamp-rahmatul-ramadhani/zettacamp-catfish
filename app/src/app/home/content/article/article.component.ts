import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {

  data = [{
    title: "Title 1",
    desc: "Desc 1",
    status: "active",
  },{
    title: "Title 2",
    desc: "Desc 2",
    status: "active",
  }]

  constructor() { }

  ngOnInit(): void {
  }
  addData(data: {title: string, desc: string, status: string}) {
    this.data.push({
      title: data.title,
      desc: data.desc,
      status: data.status
    })
  }
}
