import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class App {
  constructor(http) {
    this.http = http;
    this.message = "styled message";
  }

  activate(params) {
    var queryDict = {};
    if(location.search){
      location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
      console.log("logging query");
      console.log(queryDict);
      this.authUrl = queryDict['authUrl'];
      this.redirect = queryDict['redirect'];
      this.email = queryDict['userId'];
      this.code = queryDict['code'];
    } else {
      
    }
  }

  do() {
    if(!this.email || !this.password || !this.confirm){
      return;
    }
    if(this.password !== this.confirm){
      return;
    }
    
    this.http.fetch(`${this.authUrl}/changepassword?userId=${this.email}&changeCode=${this.code}&newPassword=${this.confirm}`).
      then(
      response => response.json().then(data => {
        window.location.replace(this.redirect)
      }),
      response => response => alert('unauthorized'));
  }
}
