import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Feature1Page } from './pages/feature1/feature1.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: Feature1Page }])
  ],
  declarations: [Feature1Page]
})
export class Feature1PageModule { }
