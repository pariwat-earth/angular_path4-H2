import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  posts: any;
  TH!: number;
  US!: number;
  THUserInput!: number;
  USDUserInput!: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get('http://api.exchangeratesapi.io/v1/latest?access_key=ebdecacc200584b43858139a5ca3d598&symbols=THB,USD&format=1')
      .subscribe(result => {
        console.log(result);
        this.posts = result;
        this.TH = this.posts.rates.THB;
        this.US = this.posts.rates.USD;
      })
  }

  convert() {

    if(this.THUserInput == undefined || this.USDUserInput == NaN && this.USDUserInput == undefined || this.THUserInput == NaN){
      alert("กรอกจำนวนเงิน");
    }else{
      if(this.THUserInput == undefined || this.USDUserInput == NaN){
        this.THUserInput = this.USDUserInput
        this.THUserInput = this.USDUserInput * this.TH
      }else{
        this.USDUserInput = this.THUserInput / this.TH
        this.THUserInput = this.THUserInput
      }
    }
  }

}
