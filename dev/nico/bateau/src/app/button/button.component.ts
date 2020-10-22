import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { images } from '../constants/Images';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() name: string;
  @Input() link: string;
  @Input() img: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(){
    console.log(this.img);
    this.router.navigate([this.link]);
  }
}
