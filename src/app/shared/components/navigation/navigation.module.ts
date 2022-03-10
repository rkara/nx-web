import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [NavigationComponent],
    exports: [NavigationComponent]
})
export class NavigationModule { }