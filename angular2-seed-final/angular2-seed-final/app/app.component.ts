import { Component } from '@angular/core';
import {MessageService} from './message.service'
@Component({
  selector: 'my-app',
  template: `
  
  <router-outlet></router-outlet>
  `
  
})
export class AppComponent { 
  message:string ;
  constructor(messageService:MessageService)
  {
     this.message = messageService.getMsg();
  }
}
