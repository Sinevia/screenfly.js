/*
$(document).ready(function(){
  var enliven = {
    tags: {
      h1 : {"font-size":{0:22,100:24,200:36,300:48,500:72,700:82}}
    },
    ids:{
      logo:{"color":{0:"red"}}
    }     
  };
  //screenfly(enliven);
});
*/

//============================= START OF CLASS ==============================//
// CLASS: screenfly                                                          //
//===========================================================================//
function screenfly(options){
  // START: Settings
  var s = {
    version : "0.1"   // Version
  };
  // END: Settings
    
  // Extend
  var attrname;
  for (attrname in options) {
    if (options.hasOwnProperty(attrname)) {
      s[attrname] = options[attrname];
    }
  }
  
  //========================= START OF METHOD ===========================//
  //  METHOD: _classes                                                   //
  //=====================================================================//
  function _classes(screen_width){
    // START: IDs
    for (var klass in s.classes) {
      if (s.classes.hasOwnProperty(klass)){
	    // START: Properties
	    for (var property in s.classes[klass]) {
		   if (s.classes[klass].hasOwnProperty(property)){
		      // START: Sizes
			  var sizes = []; // Specified sizes
		      for (var size in s.classes[klass][property]) {
		        if (s.classes[klass][property].hasOwnProperty(size)){
		          if(isNaN(parseInt(size)))continue;
		          sizes[sizes.length] = size;
		        }
		      }
			  
			  sizes.sort(); // !!! Important

			  // Apply values to properties
		      for(var i=0;i<sizes.length;i++){
			    if(screen_width>sizes[i]){
			      if(undefined != sizes[i+1] && screen_width>sizes[i+1]){continue;}
			      var value = s.classes[klass][property][sizes[i]];
			      $("."+klass).css(property,value);
			    }
		      }
			  // END: Sizes
		   }
		}
		// END: Properties
	  }
    }
	// END: IDs
  }
  //=====================================================================//
  //  METHOD: _classes                                                   //
  //========================== END OF METHOD ============================//
  
  //========================= START OF METHOD ===========================//
  //  METHOD: _ids                                                       //
  //=====================================================================//
  function _ids(screen_width){
    // START: IDs
    for (var id in s.ids) {
      if (s.ids.hasOwnProperty(id)){
	    // START: Properties
	    for (var property in s.ids[id]) {
		   if (s.ids[id].hasOwnProperty(property)){
		      // START: Sizes
			  var sizes = []; // Specified sizes
		      for (var size in s.ids[id][property]) {
		        if (s.ids[id][property].hasOwnProperty(size)){
		          if(isNaN(parseInt(size)))continue;
		          sizes[sizes.length] = size;
		        }
		      }
			  
			  sizes.sort(); // !!! Important
			  
			  // Apply values to properties
		      for(var i=0;i<sizes.length;i++){
			    if(screen_width>sizes[i]){
			      if(undefined != sizes[i+1] && screen_width>sizes[i+1]){continue;}
			      var value = s.ids[id][property][sizes[i]];
			      $("#"+id).css(property,value);
			    }
		      }
			  // END: Sizes
		   }
		}
		// END: Properties
	  }
    }
	// END: IDs
  }
  //=====================================================================//
  //  METHOD: _ids                                                       //
  //========================== END OF METHOD ============================//
  
  //========================= START OF METHOD ===========================//
  //  METHOD: _tags                                                      //
  //=====================================================================//
  function _tags(screen_width){
    // START: Tags
    for (var tag in s.tags) {
      if (s.tags.hasOwnProperty(tag)){
	    // START: Properties
	    for (var property in s.tags[tag]) {
		   if (s.tags[tag].hasOwnProperty(property)){
		      // START: Sizes
			  var sizes = []; // Sizes for the tag
		      for (var size in s.tags[tag][property]) {
		        if (s.tags[tag][property].hasOwnProperty(size)){
		          if(isNaN(parseInt(size)))continue;
		          sizes[sizes.length] = size;
		        }
		      }
			  sizes.sort(); // !!! Important
			  
			  // Apply values to properties
		      for(var i=0;i<sizes.length;i++){
			    if(screen_width>sizes[i]){
			      if(undefined != sizes[i+1] && screen_width>sizes[i+1]){continue;}
			      var value = s.tags[tag][property][sizes[i]];
			      $(tag).css(property,value);
			    }
		      }
			  // END: Sizes
		   }
		}
		// END: Properties
	  }
    }
	// END: Tags
  }
  //=====================================================================//
  //  METHOD: _tags                                                      //
  //========================== END OF METHOD ============================//
  
  // ------------- START: INITIALIZE -----------------//
  
  //========================= START OF METHOD ===========================//
  //  METHOD: _initialize                                                //
  //=====================================================================//
  function _initialize(){
    var screen = $("body");
	var screen_w = screen.width();
	// Process tags
	_tags(screen_w);
	// Process classes
	_classes(screen_w);
	// Process IDs
	_ids(screen_w);
  }
  //=====================================================================//
  //  METHOD: _initialize                                                //
  //========================== END OF METHOD ============================//
  
  _initialize();
}
//===========================================================================//
// CLASS: screenfly                                                          //
//============================== END OF CLASS ===============================//
