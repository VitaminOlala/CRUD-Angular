import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { MessageService } from 'primeng/api';
import { Roles } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, OnChanges{

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedProduct: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType = "";
  selectedRole = "";
  pdtRole: Subscription = new Subscription();
  subscriptions: Subscription[] = [];
  roles: Roles[] = [];

  productForm = this.fb.group({
    // title: ["", Validators.required],
    // price: [0, Validators.required],
    // description: [""],
    // category: ["", Validators.required],
    // image: ["", Validators.required]

    username: ["", Validators.required],
    password: [0, Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required],
    address: ["", Validators.required],
    // roles: ["", Validators.required]

  });
  constructor(private fb: FormBuilder, private productService: ProductService,
    private messageService: MessageService){}

    //add or update
  ngOnChanges(): void {
    if(this.selectedProduct){
      this.modalType = 'Edit';
      this.productForm.patchValue(this.selectedProduct);
    } else {
      this.productForm.reset();
      this.modalType = 'Add';
    }
  }

  ngOnInit(): void {
    this.getRoleList();
  }

  getRoleList(){
    this.pdtRole = this.productService.getRoles().subscribe(
      response => {
        this.roles = response;
        console.log(this.roles);
      }
    );
    this.subscriptions.push(this.pdtRole)
  }

  closeModal(){
    this.productForm.reset();
    this.clickClose.emit(true);
  }
  addEditProduct(){
    this.productService.addEditProduct(this.productForm.value, this.selectedProduct).subscribe(
      response => {
        this.clickAddEdit.emit(response);
        this.closeModal();
        this.messageService.add({severity: 'success', summary: 'Success', detail:'Product added' });
      
      },
      error => {
        this.messageService.add({severity: 'error', summary: 'Error', detail:error });
        console.log('Error occured')
      }
    )

  }
}
