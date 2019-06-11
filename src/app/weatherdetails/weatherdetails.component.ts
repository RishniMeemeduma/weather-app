import { Component, OnInit,Input } from '@angular/core';
import { ApixuService } from '../apixu.service';

import { Router } from '@angular/router';
import { WhetherComponent } from '../whether/whether.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {


  constructor( private apixuService:ApixuService,private route:Router,private form:FormBuilder) { }

  ngOnInit() {
    
  }
 
  
}
