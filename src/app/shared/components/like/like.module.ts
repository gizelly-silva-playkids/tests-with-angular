import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GenerateUniqueIdService } from 'app/shared/services/generate-unique-id.service';
import { LikeComponent } from './like.component';


@NgModule({
  declarations: [
    LikeComponent
  ],
  exports: [
    LikeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [
    GenerateUniqueIdService
  ]
})
export class LikeModule { }
