import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Feature1State } from '../feature1/state/feature1.state';
import { ExampleAction, OtherExampleAction } from './app.actions';

export class ExampleStateModel {
    exampleProperty: string;
}

@State<ExampleStateModel>({
  name: 'app',
  defaults: {
    exampleProperty: ''
  },
  children: [Feature1State]
})
@Injectable() // Make NGXS compatible with Ivy
export class AppState {
  constructor() {
  }

  @Selector()
  static getExampleProperty(state: ExampleStateModel) {
    return state.exampleProperty;
  }

  @Action(ExampleAction)
  exampleAction({ patchState }: StateContext<ExampleStateModel>) {
    patchState({
        exampleProperty: ''
    });
  }

  @Action(OtherExampleAction)
  otherExampleAction({ patchState }: StateContext<ExampleStateModel>, { payload }: OtherExampleAction) {
    patchState({
        exampleProperty: payload
    });
  }

}
