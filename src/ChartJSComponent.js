//These are in lieue of the import statements
let {Component,getFormComponentDefaultMemberJson} = apogeeapp;

/** This is a simple custom component example. */
export default class ChartJSComponent extends Component {};

ChartJSComponent.displayName = "Chart.js Cell";
ChartJSComponent.uniqueName = "apogeeapp.ChartJSCell";
ChartJSComponent.DEFAULT_MEMBER_JSON = getFormComponentDefaultMemberJson("apogeeapp.ChartJSCell-data");
