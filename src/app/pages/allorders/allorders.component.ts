import { Component, OnInit } from '@angular/core';
import { allOrderService } from '../../core/services/order/allorders.service';


@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class allordersComponent implements OnInit {
  userId = '';
  userOrders: any[] = [];

  constructor(private allOrderService:allOrderService) {}

 ngOnInit(): void {
  const token = localStorage.getItem('mytoken');

  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userId = payload.id;

    this.allOrderService.getUserOrders(userId).subscribe({
      next: (res) => {
        this.userOrders = res;
        console.log(res);
      },
      error: (err) => {
        console.error('Error loading orders:', err);
      }
    });
  } else {
    console.error('No token found in localStorage!');
  }
}
  }

