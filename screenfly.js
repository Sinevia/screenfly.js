/*
 * Copyright (C) 2016 Sinevia Ltd - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary
 * Written by Milan Lesichkov - http://lesichkovm.co.uk
 *
 * =========================================================================
 * Usage Instructions:
 * $(document).ready(function(){
 *  screenfly({
 *    "#logo" : {"font-size":{0:22,100:24,200:36,300:48,500:72,700:82}
 *  });
 * });
 * =========================================================================
 * @version 1.0
 */
 
//============================= START OF CLASS ==============================//
// CLASS: screenfly                                                          //
//===========================================================================//
function screenfly(options) {
    // START: Settings
    var s = {
        version: "0.1"   // Version
    };
    var options = options;
    // END: Settings

    /**
     * Process selectors
     * @param int screen_width
     * @returns void
     */
    function _process(screen_width) {
        // START: IDs
        for (var selector in options) {
            if (options.hasOwnProperty(selector)) {
                // START: Properties
                for (var property in options[selector]) {
                    // START: Sizes
                    var sizes = []; // Specified sizes
                    for (var size in options[selector][property]) {
                        if (options[selector][property].hasOwnProperty(size)) {
                            if (isNaN(parseInt(size))) {
                                continue;
                            }
                            sizes[sizes.length] = size;
                        }
                    }

                    sizes.sort(function (a, b) {
                        return a - b;
                    }); // !!! Important
                    console.log(sizes);

                    // Apply values to properties
                    for (var i = 0; i < sizes.length; i++) {
                        if (screen_width > sizes[i]) {
                            if (undefined != sizes[i + 1] && screen_width > sizes[i + 1]) {
                                continue;
                            }
                            var value = options[selector][property][sizes[i]];
                            $(selector).css(property, value);
                        }
                    }
                    // END: Sizes
                }
                // END: Properties
            }
        }
        // END: IDs
    }
    //=====================================================================//
    //  METHOD: _classes                                                   //
    //========================== END OF METHOD ============================//

    // ------------- START: INITIALIZE -----------------//

    //========================= START OF METHOD ===========================//
    //  METHOD: _initialize                                                //
    //=====================================================================//
    function _initialize() {
        var screen = $("body");
        var screen_w = screen.width();
        console.log('Screen size:' + screen_w + "px");
        _process(screen_w);
        $(window).resize(function () {
            var screen = $("body");
            var screen_w = screen.width();
            console.log('Screen size:' + screen_w + "px");
            _process(screen_w);
        });
    }
    //=====================================================================//
    //  METHOD: _initialize                                                //
    //========================== END OF METHOD ============================//

    _initialize();
}
//===========================================================================//
// CLASS: screenfly                                                          //
//============================== END OF CLASS ===============================//
