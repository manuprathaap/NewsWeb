import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }

  entertainmentNewsDisplay:any=[];
  ngOnInit(): void {
    this._service.entertainmentnews().subscribe((result)=>{
      this,this.entertainmentNewsDisplay = result.articles;

    })
  }

}
