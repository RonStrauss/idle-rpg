import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule,MatDividerModule],
  exports: [MatToolbarModule,MatDividerModule],
})
export class MaterialModule {}
