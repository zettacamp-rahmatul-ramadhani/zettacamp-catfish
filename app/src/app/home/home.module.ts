import { UtilsModule } from './../utils/utils.module';
import { ContentModule } from './content/content.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    // UtilsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
