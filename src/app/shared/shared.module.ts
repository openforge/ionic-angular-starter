import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExampleComponent } from './components/example/example.component';

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
        ReactiveFormsModule,
        ExampleComponent
    ],
    declarations: [ExampleComponent],
    providers: []
})
export class SharedModule { }
