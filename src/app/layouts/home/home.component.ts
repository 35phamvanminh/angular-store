import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  form = new FormGroup({
    customControl: new FormControl('123'),
  });

  // customValue = 'Hello'


  clickMe() {
    // this.customValue = "World"
    this.form.controls.customControl.setValue('456')
  }
}
