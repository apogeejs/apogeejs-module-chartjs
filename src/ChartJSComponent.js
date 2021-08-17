//These are in lieue of the import statements
let {Component,getFormComponentDefaultMemberJson} = apogeeapp;

const ChartJSComponentConfig = {
    componentClass: Component,
    displayName: "Chart.js Cell",
    defaultMemberJson: getFormComponentDefaultMemberJson("apogeeapp.ChartJSCell-data"),
    defaultComponentJson: {
        type: "apogeeapp.ChartJSCell"
    }
}
export default ChartJSComponentConfig;