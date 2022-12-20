import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //Material
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    //Material
    MatButtonModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
