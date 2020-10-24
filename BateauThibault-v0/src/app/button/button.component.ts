import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
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
  @Input() data: any[];

  constructor(private router: Router) { }

  ngOnInit() {  }

  onNavigate(){
    /*let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.data
      }
    };*/

    this.router.navigate([this.link], { state:{ data: this.data } });
  }
}
