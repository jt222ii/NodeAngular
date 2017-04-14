import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { RouterModule } from '@angular/router';
import { InputFieldsComponent } from './input-fields/input-fields.component';


//routes
const ROUTES = [
  {
    path:'',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    InputFieldsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
