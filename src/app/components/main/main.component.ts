import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/DB/DB';
import { Items } from 'src/app/Interfaces/items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // items$ = liveQuery(() => db.items.toArray());

  // async addNewItem() {
  //   await db.items.add({
  //     equippable:false,
  //     name:'Worn Out Sign',
  //     percentageDrop:10,
  //     type:'Trash',
  //     value:0,
  //   });
  // }

  // getItemName(index: number, item: Items) {
  //   return `${item.name}`;
  // }

  constructor() { }

  ngOnInit(): void {
  }

  

}
