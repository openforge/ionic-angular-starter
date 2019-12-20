# Ionic Angular Starter

## Features

- [Ionic](https://ionicframework.com/)
- [Capacitor](https://capacitor.ionicframework.com/)
- [Angular](https://angular.io/)
- [AngularFire](https://firebaseopensource.com/projects/angular/angularfire2/)
- [NGXS](https://www.ngxs.io/)

## Structure

This section will cover the folder structure of the starter

- app
  - feature
    - components // Components that are only used in the related feature
    - pages // All the views for the feature flow
    - feature.module.ts
  - shared
    - components // Components that are used in more than one feature
    - services
    - shared.module.ts
  - state
    - app.actions.ts // Ngxs actions for the app
    - app.state.ts // Ngxs state for the app
