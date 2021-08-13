//These are in lieue of the import statements
let {Component,getFormComponentDefaultMemberJson} = apogeeapp;

/** This is a simple custom component example. */
export default class ChartJSComponent extends Component {};

ChartJSComponent.CLASS_CONFIG = {
    displayName: "Chart.js Cell",
    defaultMemberJson: getFormComponentDefaultMemberJson("apogeeapp.ChartJSCell-data"),
    defaultComponentJson: {
        type: "apogeeapp.ChartJSCell"
    }
}
