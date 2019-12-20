export class ExampleAction {
    static readonly type = '[App] Example Action';
}

export class OtherExampleAction {
    static readonly type = '[App] Other Example Action';
    constructor(public payload: any) {}
}
