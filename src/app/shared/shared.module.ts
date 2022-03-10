import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationModule } from './components/navigation/navigation.module';
import { MaterialModule } from './material.module';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NavigationModule,
    ]
})
export class SharedModule { }