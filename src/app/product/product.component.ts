import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  products: Product[] = [];
  displayAddEditModal = false;
  selectedProduct: any = null;

  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    )
  }

  showAddModal(){
    this.displayAddEditModal = true;
    this.selectedProduct = null;
  }
  
  hideAddModal(isClosed: boolean){
    this.displayAddEditModal = !isClosed;
  }

  saveorUpdateProductList(newData: any){
    if(newData.id === this.selectedProduct.id){
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
}
