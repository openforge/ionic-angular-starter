import { State, Selector, Action, StateContext } from '@ngxs/store';
import { ExampleAction, OtherExampleAction } from './app.actions';

export class ExampleStateModel {
    exampleProperty: string;
}

@State<ExampleStateModel>({
  name: 'example',
  defaults: {
    exampleProperty: ''
  }
})

export class AppState {
  constructor() {
  }

  @Selector()
  static getExampleProperty(state: ExampleStateModel) {
    return state.exampleProperty;
  }

  @Action(ExampleAction)
  exampleAction({ setState }: StateContext<ExampleStateModel>) {
    setState({
        exampleProperty: ''
    });
  }

  @Action(OtherExampleAction)
  otherExampleAction({ setState }: StateContext<ExampleStateModel>, { payload }: OtherExampleAction) {
    setState({
        exampleProperty: payload
    });
  }

}
