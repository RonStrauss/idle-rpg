import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule,MatDividerModule,MatTooltipModule],
  exports: [MatToolbarModule,MatDividerModule,MatTooltipModule],
})
export class MaterialModule {}
