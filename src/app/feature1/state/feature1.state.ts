import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ExampleFeatureAction, OtherFeatureExampleAction } from './feature1.actions';

export class ExampleStateModel {
    exampleProperty: string;
}

@State<ExampleStateModel>({
  name: 'feature1',
  defaults: {
    exampleProperty: ''
  }
})
@Injectable() // Make NGXS compatible with Ivy
export class Feature1State {
  constructor() {
  }

  @Selector()
  static getExampleProperty(state: ExampleStateModel) {
    return state.exampleProperty;
  }

  @Action(ExampleFeatureAction)
  ExampleFeatureAction({ patchState }: StateContext<ExampleStateModel>) {
    patchState({
        exampleProperty: ''
    });
  }

  @Action(OtherFeatureExampleAction)
  OtherFeatureExampleAction({ patchState }: StateContext<ExampleStateModel>, { payload }: OtherFeatureExampleAction) {
    patchState({
        exampleProperty: payload
    });
  }

}
