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

var MeRadio = {
    options: {
        width: 50,
        height: 50,
        toolbar: false,
        menubar: false,
        resizable: false,
        top: 50,
        left: 50,
        url: "#",
    },
    configure: function(options){
        this.options = options;
    },

    getSize: function(p, s){
        var t = p / 100;
        return s * t;
    },

    show938LivePlayer: function(){

        var width = this.getSize(this.options.width, window.outerWidth);
        var height = this.getSize(this.options.height, window.outerHeight);
        var top = this.getSize(this.options.top, window.outerHeight);
        var left = this.getSize(this.options.left, window.outerWidth);

        var options = [
            'width=' + width,
            'height=' + height,
            'toolbar=' + this.options.toolbar ? 'yes' : 'no',
            'menubar=' + this.options.menubar ? 'yes' : 'no',
            'top=' + top,
            'left=' + left,
            'resizable=' + this.options.resizable,
        ];

        window.open(this.options.url, '_new', options.join(',').toString());

    }
};

$(document).ready(function(){
    $('.meradio-show938-liveplayer').click(function(e){
        e.preventDefault();
        MeRadio.show938LivePlayer();
    });
});

}
/*
     FILE ARCHIVED ON 23:54:49 Nov 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:44:35 Aug 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 224.33
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.129
  cdx.remote: 0.085
  esindex: 0.011
  LoadShardBlock: 63.986 (3)
  PetaboxLoader3.datanode: 88.113 (5)
  load_resource: 199.842 (2)
  PetaboxLoader3.resolve: 123.685 (2)
*/