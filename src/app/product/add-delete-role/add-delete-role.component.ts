import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from '../product.service';
import { Roles } from '../product';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-add-delete-role',
  templateUrl: './add-delete-role.component.html',
  styleUrl: './add-delete-role.component.scss'
})
export class AddDeleteRoleComponent implements OnInit, OnChanges{
  // @Input() getRoleList: any = null;
  @Input() displayAddDeleteRoleModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  modalType = "";
  addRoleOrDeleteRole: boolean = true;
  roles: Roles[] = [];
  pdtRole: Subscription = new Subscription();
  subscriptions: Subscription[] = [];
  constructor(private confirmationService: ConfirmationService, private productService: ProductService,
    private messageService: MessageService){}
 
    //add or update
  ngOnChanges(): void {
    if(this.addRoleOrDeleteRole){
      this.modalType = 'Delete';
    } else {
      this.modalType = 'Add';
      this.getRoleList();
    }
  }
 
  ngOnInit(): void {
    this.getRoleList();
  }

  getRoleList(){
    this.pdtRole = this.productService.getRoles().subscribe(
      response => {
        this.roles = response;
      }
    );
    this.subscriptions.push(this.pdtRole)
  }

  closeModal1(){
    this.clickClose.emit(true);
  }
 
  UpdateUser(){
   
  }
  // addEditProduct(){
  //   this.productService.addEditProduct(this.productForm.value, this.selectedProduct).subscribe(
  //     response => {
  //       this.clickAddEdit.emit(response);
  //       this.closeModal();
  //       this.messageService.add({severity: 'success', summary: 'Success', detail:'Product added' });
     
  //     },
  //     error => {
  //       this.messageService.add({severity: 'error', summary: 'Error', detail:error });
  //       console.log('Error occured')
  //     }
  //   )
 
  // }
}