import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {
  healthNewsDisplay: any=[];

  constructor(private __services:NewsapiservicesService) { }

  ngOnInit(): void {

    this.__services.healthnews().subscribe((result)=>{
      this,this.healthNewsDisplay = result.articles;

    })
  }

}
