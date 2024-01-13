import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDeleteRoleComponent } from './add-delete-role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AddDeleteRoleComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ToastModule,
    FormsModule,
    DropdownModule
  ],
  exports: [AddDeleteRoleComponent]
})
export class AddDeleteRoleModule { }
