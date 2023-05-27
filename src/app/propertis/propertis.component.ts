import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/property.service';
import { Property } from './properties.model';

@Component({
  selector: 'app-propertis',
  templateUrl: './propertis.component.html',
  styleUrls: ['./propertis.component.css']
})
export class PropertisComponent implements OnInit {
  allProperty: any
  formValue!: FormGroup
  propertyModelObj: Property = new Property
  showAdd!: boolean
  showEdit!: boolean
  constructor(private fb: FormBuilder, private api: PropertyService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      ptitle: [''],
      pprice: [''],
      plocation: [''],
      pdetails: ['']
    })
    this.getAllProperty()
  }
  clickAddProp() {
    this.formValue.reset()
    this.showAdd = true
    this.showEdit = false
  }
  //get all data
  getAllProperty() {
    this.api.getAllProp().subscribe((res) => {
      this.allProperty = res;
      console.warn(this.allProperty);
    })
  }

  //add property
  addProp() {
    this.propertyModelObj.ptitle = this.formValue.value.ptitle
    this.propertyModelObj.pprice = this.formValue.value.pprice
    this.propertyModelObj.plocation = this.formValue.value.plocation
    this.propertyModelObj.pdetails = this.formValue.value.pdetails
    // console.log(this.propertyModelObj)
    this.api.addlisting(this.propertyModelObj).subscribe((res) => {
      console.log(res);
      alert("Record Added SuccessFull")
      let ref = document.getElementById('clear')
      ref?.click()
      this.formValue.reset();
      this.getAllProperty()

    }, err => {
      alert("Somgthing went wrong")
    })
  }

  daletProp(data: any) {
    this.api.deletePrp(data.id).subscribe((res) => {
      alert('Property Deleted Successfull')
      this.getAllProperty()
    })
  }

}
