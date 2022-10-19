import { UtilsModule } from './../../utils/utils.module';
import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    ContentComponent,
    ArticleComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
