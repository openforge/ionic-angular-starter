import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: []
})
export class SharedModule { }
