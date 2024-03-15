import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    CardModule,
    ButtonModule,
    RouterModule,
    TableModule
  ],
  exports: [
    ReactiveFormsModule,
    DialogModule,
    CardModule,
    ButtonModule,
    CommonModule,
    HeaderComponent,
    TableModule
  ]
})
export class SharedModule { }
