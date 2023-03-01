import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: '',
      title: ['', Validators.required],
      phone: ['', Validators.required],
      email: '',
      address: '',
    });

  }

}
