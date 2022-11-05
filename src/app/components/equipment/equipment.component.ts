import { Component, OnInit } from '@angular/core';
import iconsUrls from 'src/app/icons-urls';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
})
export class EquipmentComponent implements OnInit {
  equipmentGrid = new Array(40).fill('');
  inventoryGrid = new Array(120).fill('')

  constructor() {}

  ngOnInit(): void {
    this.equipmentGrid = this.equipmentGrid.map((_, i) => {
      switch (+i) {
        case 2:
          return 'Helmet';
        case 7:
          return 'Armor';
        case 6:
        case 8:
          return 'Shoulder';
        case 12:
          return 'Legs';
        case 10:
        case 14:
          return 'Gloves';
        case 15:
          return 'R. Hand';
        case 19:
          return 'L. Hand';
        case 21:
        case 23:
          return 'Feet';
        case 31:
          return 'Neck';
        case 32:
          return 'Ear';
        case 33:
          return 'Rings';

        default:
          return _;
      }
    })

    this.inventoryGrid = this.inventoryGrid.map((_,i)=>{
      if (!i){
        return {src:iconsUrls.coins,qty:1000000000}
      }
      if (i === 1){
        return {src:iconsUrls.sword}
      }
      return _
    })
    ;
  }
}
