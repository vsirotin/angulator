import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  console.log("JavaScriptor runs!")

  let f1 = function(name, weather="nice"){
    console.log("Hi " + name +"! It is " + weather + " weather today!");
  } 
  f1("Nick", "good");

  

  let f2 = function(name, weather="nice", ...adds){
    console.log("Hi " + name +"! It is " + weather + " weather today!");

    for (let i = 0; i < adds.length; i++) {
      console.log("Add N" + i + ": "  + adds[i]);
    }

  } 

  f2("John", "starnge", "ranning", "snowing");
