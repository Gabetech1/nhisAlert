import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatSliderModule,MatTableModule,MatTabsModule,MatDialogModule],
  exports: [MatSliderModule,MatTableModule,MatTabsModule,MatDialogModule]
})
export class MaterialsModule { }
