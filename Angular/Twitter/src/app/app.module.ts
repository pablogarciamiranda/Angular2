import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { UserComponent } from './user/user.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { SortPipe } from './sort.pipe';
import { UsersService } from './users.service';
import { NewsService } from './news.service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    UserComponent,
    SortComponent,
    FilterComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ UsersService, NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
