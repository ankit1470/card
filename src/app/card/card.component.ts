import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardForm: any;
  index: any;
  showText: boolean = true;
  showField: boolean = false;
  dataArr: any = [];
  n: any;
  a: any;
  p: any;
  arr: any = [];

  constructor(private api: ApiService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.api.getData().subscribe((res: any) => {
      this.dataArr = res;
    })
    this.cardForm = this.fb.group({
      name: [""],
      age: [""],
      profile: [""],
    })

  }

  onEdit() {
    this.showField = true;
    this.showText = false
    this.cardForm.patchValue({
      name: this.dataArr[this.index].name,
      age: this.dataArr[this.index].age,
      profile: this.dataArr[this.index].profile
    })

  }
  onUpdate() {
    this.showField = false;
    this.showText = true
    this.dataArr[this.index] = this.cardForm.value
  }
  select(i: any, data: any) {
    this.index = i;
    this.n = this.dataArr[i].name
    this.a = this.dataArr[i].age
    this.p = this.dataArr[i].profile

     data.isSelected = !data.isSelected;
   
      if (this.arr.length < 1) {
        console.log(this.arr.length)
        this.arr.push(data)
        
      }
     else {
      if (this.arr?.length > 0) {
        this.arr.shift();
        
        this.arr.push(data)
        console.log(this.arr);

      }
    }

    // if(this.arr[i].name==data.name){
    
    // }
    // else{
   
    // }
    console.log(this.arr)
  }

}
