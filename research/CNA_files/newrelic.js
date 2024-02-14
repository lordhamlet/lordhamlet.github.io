var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*********************************************************
 * This is custom New Relic script. Provisioned
 * for developers to add custom attributes and
 * modify behaviours.
 *********************************************************/

// Track custom attributes for pageview
if(window.newrelic){
  newrelic.setCustomAttribute('browser.cna.protocol', window.location.protocol);
  newrelic.setCustomAttribute('browser.cna.hostname', window.location.hostname);
  newrelic.setCustomAttribute('browser.cna.origin', window.location.origin);
  newrelic.setCustomAttribute('browser.cna.path', window.location.pathname);
  newrelic.setCustomAttribute('browser.cna.query', window.location.search);
  newrelic.setCustomAttribute('browser.cna.hash', window.location.hash);
}else{
  console.info('New Relic not injected');
}


}
/*
     FILE ARCHIVED ON 23:54:49 Nov 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:44:32 Aug 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 213.099
  exclusion.robots: 0.102
  exclusion.robots.policy: 0.09
  cdx.remote: 0.071
  esindex: 0.011
  LoadShardBlock: 70.244 (3)
  PetaboxLoader3.datanode: 59.537 (4)
  load_resource: 403.217
  PetaboxLoader3.resolve: 394.311
*/