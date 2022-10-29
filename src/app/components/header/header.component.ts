import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  changeActiveLink(mid:HTMLDivElement,value:string){
    mid.classList.remove('first','second','third')
    mid.classList.add(value)
  }

}
