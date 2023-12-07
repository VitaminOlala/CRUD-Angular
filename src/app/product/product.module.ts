import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ProductComponent } from './product.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { FilterProjectComponent } from './filter-project/filter-project.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ProductComponent,
    FilterProjectComponent
  ],
  //local
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    AddEditProductModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  exports: [
    ProductComponent
  ],
  //global
  //allow any files which is accessing the product module
  providers: [MessageService, ConfirmationService]
})
export class ProductModule { }
