//These are in lieue of the import statements
let {FormInputBaseComponent} = apogeeapp;

/** This is a simple custom component example. */
export default class ChartJSComponent extends FormInputBaseComponent {
    constructor(member,modelManager,instanceToCopy,keepUpdatedFixed) {
        super(member,modelManager,instanceToCopy,keepUpdatedFixed);
    }
}

FormInputBaseComponent.initializeClass(ChartJSComponent,"Chart.js Cell","apogeeapp.ChartJSCell","apogeeapp.ChartJSCell-data");
