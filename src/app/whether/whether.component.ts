import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApixuService } from '../apixu.service';
import { WeatherdetailsComponent } from '../weatherdetails/weatherdetails.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {
  form: FormGroup;
  weatherdata: any;

  constructor( private formBuilder:FormBuilder,private apixuService:ApixuService,private router:Router) { }
 
  ngOnInit() {
    this.form = this.formBuilder.group({
      location:['']
    })
  }

  sendToAPIXU(formvalues) {
    console.log(formvalues);
    this.apixuService
      .getlocation(formvalues.location)
      .subscribe(data => {
        this.weatherdata = data;
        console.log(this.weatherdata);
      });
    //this.router.navigateByUrl('/details');
  }
  
}
