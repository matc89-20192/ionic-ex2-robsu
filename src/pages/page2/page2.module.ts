import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Page1 } from '../page1/page1';
import { Page2 } from './page2';

@NgModule({
  declarations: [
  	Page1,
    Page2
  ],
  imports: [
    IonicPageModule.forChild(Page1),
    IonicPageModule.forChild(Page2),
  ],

  exports: [Page2],
  entryComponents: [
    Page1
  ]
})
export class Page2Module { }
