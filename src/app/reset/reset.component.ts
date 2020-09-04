import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
  mobile:['',Validators.required],
  password:['', Validators.required],
  reEnter:['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  async resetProcessHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/rese0t';

    const result:any = await this.http.post(url, data).toPromise();
    if (result.opr) {
    sessionStorage.removeItem('sid');
    this.router.navigate(['login']);
  }
  else{
    this.uiInvalidCredential = true;
    }
  }
}
