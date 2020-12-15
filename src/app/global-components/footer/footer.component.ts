import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.http.post('https://mailthis.to/theNJK', {
      _subject: 'NEW Message from ' + this.contactForm.get('name').value,
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      message: this.contactForm.get('message').value
    }).subscribe((val) => {}, () => { location.href = 'https://mailthis.to/confirm'; });
    this.contactForm.reset();
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key).setErrors(null) ;
    });
  }

}
