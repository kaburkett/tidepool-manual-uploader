import { Injectable } from '@angular/core';
import createTidepoolClient from "tidepool-platform-client";

@Injectable({
  providedIn: 'root'
})
export class TidepoolService {
  constructor() { }
  public tidepool = createTidepoolClient({
      host: 'https://api.tidepool.org',
      uploadApi: 'https://uploads.tidepool.org',
      dataHost: 'https://data.tidepool.org',
      log: {
        warn: function() {},
        info: function() {},
        debug: function() {}
      },
      localStore: window.localStorage,
      metricsSource: 'myApp',
      metricsVersion: '0.1.0'
  }, null)

  private authenticate(user: string, pass: string){
    if(!this.tidepool.isLoggedIn){
      //this.tidepool.oauthLogin()
    }
  }
}
