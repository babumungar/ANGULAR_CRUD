import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {
  data$: Observable<any[]> | undefined;
  
  constructor(private dataService:DataServiceService){

  }
  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    console.log(this.data$)
  }
  //////////////////////////////////////////
 /*  data: any[] = [];
  loading = true;
  private subscription: Subscription | undefined;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.subscription = this.dataService.getData().subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data', error);
        this.loading = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  } */
}
