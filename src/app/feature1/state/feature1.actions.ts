export class ExampleFeatureAction {
    static readonly type = '[Feature1] Example Action';
}

export class OtherFeatureExampleAction {
    static readonly type = '[Feature1] Other Example Action';
    constructor(public payload: any) {}
}
