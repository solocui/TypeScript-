import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FriendComponent } from './friend.component';

import { AppComponent } from './app.component';
import { GithubService } from './github.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, FriendComponent],
  bootstrap: [AppComponent],
  providers: [GithubService]
})
export class AppModule { }
