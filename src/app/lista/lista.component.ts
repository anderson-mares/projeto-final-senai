import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  clientObj: Cliente = new Cliente();
  clientList: Cliente[] = [];
  showForm = false;
  isEditMode = false;

  // Variáveis de paginação
  currentPage = 1;
  itemsPerPage = 4;
  paginatedClients: Cliente[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angularCrud');
    if (localData != null) {
      this.clientList = JSON.parse(localData);
    }
    this.updatePaginatedClients();
  }

  onAdd() {
    this.showForm = true;
    this.isEditMode = false;
    this.resetForm();
  }

  onEdit(item: Cliente) {
    this.showForm = true;
    this.isEditMode = true;
    this.clientObj = { ...item };
  }

  onDelete(item: Cliente) {
    const isDelet = confirm('Você tem certeza que quer deletar?');
    if (isDelet) {
      const currentRecord = this.clientList.findIndex((m) => m.id === item.id);
      this.clientList.splice(currentRecord, 1);
      localStorage.setItem('angularCrud', JSON.stringify(this.clientList));
      this.updatePaginatedClients();
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      const currentRecord = this.clientList.find(
        (m) => m.id === this.clientObj.id
      );
      if (currentRecord != undefined) {
        currentRecord.name = this.clientObj.name;
        currentRecord.address = this.clientObj.address;
        currentRecord.mobileNo = this.clientObj.mobileNo;
        currentRecord.email = this.clientObj.email;
        currentRecord.city = this.clientObj.city;
        currentRecord.state = this.clientObj.state;
        currentRecord.pincode = this.clientObj.pincode;
      }
    } else {
      const isLocalPresent = localStorage.getItem('angularCrud');
      if (isLocalPresent != null) {
        const oldArray = JSON.parse(isLocalPresent);
        this.clientObj.id = oldArray.length + 1;
        oldArray.push(this.clientObj);
        this.clientList = oldArray;
        localStorage.setItem('angularCrud', JSON.stringify(oldArray));
      } else {
        const newArr = [];
        this.clientObj.id = 1;
        newArr.push(this.clientObj);
        this.clientList = newArr;
        localStorage.setItem('angularCrud', JSON.stringify(newArr));
      }
    }
    this.showForm = false;
    this.resetForm();
    this.updatePaginatedClients();
  }

  onCancel() {
    this.showForm = false;
    this.resetForm();
  }

  resetForm() {
    this.clientObj = new Cliente();
  }

  // Métodos de paginação
  updatePaginatedClients() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedClients = this.clientList.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedClients();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedClients();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedClients();
  }

  get totalPages() {
    return Math.ceil(this.clientList.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }
}

// Classe para representar o modelo de dados Cliente.
export class Cliente {
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor() {
    this.id = 0;
    this.address = '';
    this.city = '';
    this.email = '';
    this.mobileNo = '';
    this.name = '';
    this.state = '';
    this.pincode = '';
  }
}
