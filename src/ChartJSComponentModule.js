import ChartJSComponentMember from "./ChartJSComponentMember.js";
import ChartJSComponentConfig from "./ChartJSComponent.js";
import ChartJSComponentViewConfig from "./ChartJSComponentView.js";

const ChartJSComponentModule = {
    initApogeeModule: function() {
        //------------------------------
        // register the custom member
        //------------------------------
        ChartJSComponentMember.defineMember();

        //-------------------------------
        //register the button component
        //-------------------------------
        apogeeapp.componentInfo.registerComponent(ChartJSComponentConfig);
    },

    removeApogeeModule: function() {
        //------------------------------
        // unregister the custom member
        //------------------------------
        ChartJSComponentMember.undefineMember();

        //-------------------------------
        //register the parse csv component
        //-------------------------------
        apogeeapp.componentInfo.unregisterComponent(ChartJSComponentConfig);
    },

    getDataExport: function() {
        return ChartJSComponentMember.getModelDataExport();
    }
}

export {ChartJSComponentModule as default};