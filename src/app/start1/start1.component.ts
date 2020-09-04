import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start1',
  templateUrl: './start1.component.html',
  styleUrls: ['./start1.component.css']
})
export class Start1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  processLogout(){
    sessionStorage.removeItem('sid');

    this.router.navigate(['login']);
  }

}
