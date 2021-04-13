import ChartJSComponentMember from "./ChartJSComponentMember.js";

/** This is a version of the ChartJS Component Module to be used on the apogee server, as opposed
 * to the apogee app. Note however that this is more of a graphical output component, so the 
 * utility on the server is questionable.*/
const ChartJSComponentModule = {
    initApogeeModule: function() {
        //------------------------------
        // register the custom member
        //------------------------------
        ChartJSComponentMember.defineMember();
    },

    removeApogeeModule: function() {
        //------------------------------
        // unregister the custom member
        //------------------------------
        ChartJSComponentMember.undefineMember();
    }
}

export default ChartJSComponentModule;