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

        //-------------------------------
        //register the button component view
        //-------------------------------
        apogeeview.registerComponentView(ChartJSComponentViewConfig);
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

        //-------------------------------
        //register the parse csv component view
        //-------------------------------
        apogeeview.unregisterComponentView(ChartJSComponentViewConfig);
    }
}

export {ChartJSComponentModule as default};