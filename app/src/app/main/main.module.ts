import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ArticleComponent } from './article/article.component';
import { AsideComponent } from './aside/aside.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';



@NgModule({
  declarations: [
    MainComponent,
    ArticleComponent,
    AsideComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
