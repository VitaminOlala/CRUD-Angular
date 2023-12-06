import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product, Roles } from './product';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{

  products: Product[] = [];
  displayAddEditModal = false;
  selectedProduct: any = null;
  //overall subscriptions
  subscriptions: Subscription[] = [];
  //individual subscriptions
  pdtSubscription: Subscription = new Subscription();
  pdtRole: Subscription = new Subscription();

  roles: Roles[] = [];

  constructor(private productService: ProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService){}
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.pdtSubscription = this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    );
    this.subscriptions.push(this.pdtSubscription)
  }

  getRoleList(){
    this.pdtRole = this.productService.getRoles().subscribe(
      response => {
        this.roles = response;
      }
    );
    this.subscriptions.push(this.pdtRole)
  }

  showAddModal(){
    this.displayAddEditModal = true;
    this.selectedProduct = null;
  }
  
  hideAddModal(isClosed: boolean){
    this.displayAddEditModal = !isClosed;
  }

  saveorUpdateProductList(newData: any){
    if(this.selectedProduct && newData.id === this.selectedProduct.id){
      const productIndex = this.products.findIndex(data => data.id === newData.id)
      this.products[productIndex] = newData;
    } else{
      this.products.unshift(newData);
    }
    
  }

  showEditModal(product: Product){
    this.displayAddEditModal = true;
    this.selectedProduct = product;
  }

  deleteProduct (product: Product){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete proceed?',
      accept: () => {
        this.productService.deleteProduct(product.id).subscribe(
          response => {
            //Use when call originally API which store in DB
            // this.getProductList();
            //Use dummy ,so
            this.products = this.products.filter(data => data.id !== product.id);
            this.messageService.add({severity: 'success', summary: 'Success', detail:'Deleted Successfully' });
          },
          error => {
            this.messageService.add({severity: 'error', summary: 'Error', detail:error });
          }
          
        )
      }
  });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
