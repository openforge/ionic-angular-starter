# Ionic Angular Starter

## Features

- [Ionic](https://ionicframework.com/)
- [Capacitor](https://capacitor.ionicframework.com/)
- [Angular](https://angular.io/)
- [AngularFire](https://firebaseopensource.com/projects/angular/angularfire2/)
- [NGXS](https://www.ngxs.io/)
- [Husky](https://github.com/typicode/husky)
- [Commitizen](https://github.com/commitizen/cz-cli)

## Structure

This section will cover the folder structure of the starter

- app
  - feature
    - components // Components that are only used in the related feature
    - pages // All the views for the feature flow
    - state // State and Actions for the related feature
    - feature.module.ts
  - shared
    - components // Components that are used in more than one feature
    - services
    - shared.module.ts
  - state
    - app.actions.ts // Ngxs actions for the app
    - app.state.ts // Ngxs state for the app

## State hierarchy

The `AppSate` is the parent ngxs state of the app. Each feature will have their own state, this new state must be added into the `AppState` children array and declared on the `AppModule`. NGXS follows a unidirectional data flow as a pattern so only the `AppState` is able to manage the feature states.

Due to this hierarchy we need avoid the use of `setState` cause we can overwrite the state and erase sub-states.
