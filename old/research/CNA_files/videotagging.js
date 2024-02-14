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

/**
 * ---------------
 * DISCLAIMER:
 * ---------------
 *
 * The script was initially provided/created by third party vendor.
 * There was no documentation or supplemental notes accompanied by this file.
 * The reason this exists here is because it has been taken out from CMStudio and transferred/copied
 * as a standalone static resource file to better keep track of the changes and versions.
 *
 * This is in no way provided/created by "someone" that may appear in the annotated code history nor
 * is that "someone" is the sole author of this file.
 *
 * Questions regarding naming conventions and as to why it was implemented the way you see it remains
 * "unknown" and only the "real" author of this file can answer: The vendor.
 *
 * @param player
 */
window.initVideoTracking = function (player) {

  var that = this;

  // start of GfK v3
/*  var gfkS2sConf = {
    media: "ChannelNewsAsiaWeb",
    //url:     "//[RegionId]-config.sensic.net/s2s-web.js", // for production
    url: "//web.archive.org/web/20201107235452/https://sg-config-preproduction.sensic.net/s2s-web.js", // for preproduction
    //visUrl:   "[visibilityScript]",
    type: "WEB",
    logLevel: "none"
  };

  (function (w, d, c, s, id, v) {
    if (d.getElementById(id)) {
      return;
    }

    w.gfkS2sConf = c;
    w[id] = {};
    w[id].agents = [];
    var api = ["playStreamLive", "playLive", "playStreamOnDemand", "playVOD", "stop", "skip", "screen", "volume", "impression"];
    w.s = (function () {
      function f(sA, e, cb) {
        return function () {
          sA.p = cb();
          sA.queue.push({f: e, a: arguments});
        };
      }

      function s(c, pId, cb) {
        var sA = {queue: [], config: c, cb: cb, pId: pId};
        for (var i = 0; i < api.length; i++) {
          e = api[i];
          sA[e] = f(sA, e, cb);
        }
        return sA;
      }

      return s;
    }());
    w[id].getAgent = function (cb, pId) {
      var a = {
        a: new w.s(c, pId || "", cb || function () {
          return 0;
        })
      };

      function g(a, e) {
        return function () {
          return a.a[e].apply(a.a, arguments);
        }
      }

      for (var i = 0; i < api.length; i++) {
        e = api[i];
        a[e] = g(a, e);
      }
      w[id].agents.push(a);
      return a;
    };

    var lJS = function (eId, url) {
      var tag = d.createElement(s);
      var el = d.getElementsByTagName(s)[0];
      tag.id = eId;
      tag.async = true;
      tag.type = 'text/javascript';
      tag.src = url;
      el.parentNode.insertBefore(tag, el);
    };

    if (c.hasOwnProperty(v)) {
      lJS(id + v, c[v]);
    }
    lJS(id, c.url);
  })(window, document, gfkS2sConf, 'script', 'gfkS2s', 'visUrl');

  // playerId is the id of the <video> element

  function getPlayHeadTime() {
    var rawPlayHead = (typeof currentTime !== "undefined" && currentTime !== null) ? currentTime : 0;
    var playheadTime = Math.round(rawPlayHead * 1000);
    return playheadTime;
  }

  //window.cnaAgentV3 = gfkS2s.getAgent(getPlayHeadTime, player.getElementId());

  // end of Gfk v3

  window.gfkSsaConf = {
    media: "",
    url: "//web.archive.org/web/20201107235452/https://sg-config.sensic.net/sg1-ssa-w.js"
  };

  (function (w, d, c, s, id) {
    if (d.getElementById(id)) {
      return;
    }
    w["gfk"] = w["gfk"] || {};
    w["gfk"]["ssa"] = w["gfk"]["ssa"] || {};
    w["gfk"]["ssa"].agents = w["gfk"]["ssa"].agents || [];
    w["gfk"]["ssa"].getAgent = function () {
      var agent = {
        queue: [],
        a: arguments
      };
      agent.notifyLoaded = function () {
        agent.queue.push({
          f: "notifyLoaded",
          t: new Date().getTime(),
          a: arguments
        });
      };
      agent.notifyPlay = function () {
        agent.queue.push({
          f: "notifyPlay",
          t: new Date().getTime(),
          a: arguments
        });
      };
      agent.notifyIdle = function () {
        agent.queue.push({
          f: "notifyIdle",
          t: new Date().getTime(),
          a: arguments
        });
      };
      agent.notifySkipped = function () {
        agent.queue.push({
          f: "notifySkipped",
          t: new Date().getTime(),
          a: arguments
        });
      };
      w["gfk"]["ssa"].agents.push(agent);
      return agent;
    };
    var tag = d.createElement(s);
    var el = d.getElementsByTagName(s)[0];
    tag.id = id;
    tag.async = true;
    tag.type = "text/javascript";
    tag.src = c.url;
    el.parentNode.insertBefore(tag, el);
  })(window, document, gfkSsaConf, "script", "gfkSsa");        */

  //window.cnaAgent = gfk.ssa.getAgent("ChannelNewsAsiaWeb");

  this.options.ComScoreOoyalaPlugin = {
    c2: "6154803",
    labelmapping: "c3='CHANNELNEWSASIA.COM', c6='*null', ns_st_st='Channel NewsAsia', ns_st_pu='Mediacorp', ns_st_pr='*null', ns_st_ep='*null', ns_st_sn='*null', ns_st_en='*null', ns_st_ge='*null', ns_st_ti='*null', ns_st_ia='0', ns_st_ce='0', ns_st_ddt='2016-09-10', ns_st_tdt='2016-08-10'"
  };

  function getContentByMetaTagName(c) {
    for (var b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
      if (c == b[a].name || c == b[a].getAttribute("property")) {
        return b[a].content;
      }
    }
    return false;
  }

  var rootUrlSgement = "news",
    currentTime = 0,
    title = typeof mcDataLayer != "undefined" ? mcDataLayer.contentname : getContentByMetaTagName("og:title"),
    playerName = rootUrlSgement + "__OoyalaPlayer";

  this.options.videoTitle = rootUrlSgement + "_" + this.options.title;
  this.options.duration = parseInt(this.options.duration);
  if (isNaN(this.options.duration) || this.options.duration == 0) {
    this.options.duration = "null";
  } else {
    this.options.duration = Math.floor(this.options.duration > 1000 ? this.options.duration / 1000 : this.options.duration);
  }

  var setupVideoInfo = function (args) {
    var omniVideoType = "Videos";
    var vidDoctype = that.options.cmdoctype;
    var referenceid = "NA";
    var masrefid = "NA";
    var mediacategory = "News Clips";
    var mediaseriestitle = "NA";
    if (args.options.contentId == "LiveStream") {
      omniVideoType = "Live";
      mediacategory = "Live";
    } else {
      if (vidDoctype == "MCTVVideo" || args.options.contentId == "LongForm") {
        omniVideoType = "Shows";
        mediacategory = "Episode";
        if (args.options.cp16 && args.options.cp16 !== "null") {
          referenceid = args.options.cp16;
        }
        if (args.options.cp18 && args.options.cp18 !== "null") {
          masrefid = args.options.cp18;
        }
        if (args.options.ctitle !== "null") {
          mediaseriestitle = args.options.ctitle;
        }
      }
    }
    window.videoInfo = {
      url: args.options.url,
      cp1: args.options.cp1,
      omniVideoType: omniVideoType,
      contentId: args.options.contentId,
      vId: args.options.assetId,
      vTitle: args.options.title,
      duration: args.options.duration,
      epTitle: "null",
      pubDate: args.options.pubDate,
      upDate: args.options.pubDate,
      webExclusive: args.options.webExclusive,
      cTitle: args.options.ctitle,
      cmcontentid: args.options.cmcontentid
    };

    if (window.EventCoordinator) {
      EventCoordinator.serve("com.cna.event.video.info", window.videoInfo);
    } else {
      console.info("WARNING: EventCoordinator missing");
    }

    window.MediaInfo = {
      mediatype: "Video",
      mediaid: args.options.cmcontentid,
      mediatitle: args.options.title,
      mediaseriestitle: mediaseriestitle,
      mediacategory: mediacategory,
      mediapublishdate: args.options.pubDate,
      mediaurl: args.options.url,
      referenceid: referenceid,
      masrefid: masrefid
    };
  };

  if (window.EventCoordinator) {
    EventCoordinator.serve('com.cna.event.media.info', window.MediaInfo);
  } else {
    console.info('WARNING: EventCoordinator missing');
  }

  var gfkCp16 = "null";
  if (this.options.cp16 !== undefined) {
    gfkCp16 = this.options.cp16;
  }

  var gfkCp18 = "null";
  if (this.options.cp18 !== undefined) {
    gfkCp18 = this.options.cp18;
  }
  this.options.cnaGfK = {
    contentId: this.options.contentId,
    cp: {
      cp1: this.options.cp1,
      cp2: this.options.assetId,
      cp3: this.options.title,
      cp4: this.options.duration,
      cp5: "null",
      cp6: this.options.episodeTitle || "null",
      cp7: "null",
      cp8: this.options.duration,
      cp9: this.options.pubDate ? this.options.pubDate + "+0800" : null,
      cp10: this.options.webExclusive,
      cp11: "0",
      cp12: location.href,
      cp13: "en",
      cp14: this.options.categoryTitle,
      cp15: "Channel NewsAsia",
      cp16: gfkCp16,
      cp17: "null",
      cp18: gfkCp18
    }
  };

  /**
   * Refactored for readability
   */
  player.mb.subscribe("*", "play", function(eventName){

    var stopped = true;
    var isInitMediaTracking = false;
    var cnaGfK = that.options.cnaGfK;
    var videoTitle = that.options.videoTitle;
    var duration = that.options.duration;

    setupVideoInfo(that);

    if(typeof window.s === "undefined"){
      window.s = {};
    }

    if(eventName === OO.EVENTS.PLAYHEAD_TIME_CHANGED){
      currentTime = arguments[1];
    }

    if(eventName === OO.EVENTS.PLAYBACK_READY){
      setupVideoInfo(that);
      //cnaAgent.notifyLoaded(cnaGfK.contentId, cnaGfK.cp);
      return;
    }

    if(eventName === OO.EVENTS.VC_PLAY){
      setupVideoInfo(that);
      if (!isInitMediaTracking) {
        isInitMediaTracking = true;
        window.oldContentId = s.prop7;
        s.prop7 = videoInfo.cmcontentid;
        if(typeof window.omniInitMediaTracking !== "undefined"){
          omniInitMediaTracking(videoTitle, duration, playerName);
        }
      }

      return;
    }

    if (eventName === OO.EVENTS.PLAYING){
      setupVideoInfo(that);
      //cnaAgent.notifyPlay();
      //cnaAgentV3.playStreamOnDemand(cnaGfK.contentId, cnaGfK.cp.cp3, {screen: '0' , volume: '100'}, cnaGfK.cp);
      if (stopped) {
        if(typeof window.omniMediaTrackingResume !== "undefined") {
          omniMediaTrackingResume(videoTitle, parseInt(currentTime));
        }
        stopped = false;
      }
      return;
    }

    if(eventName === OO.EVENTS.WILL_PLAY_SINGLE_AD){
      setupVideoInfo(that);
      //cnaAgent.notifyIdle();
      //cnaAgentV3.stop();
      if (!isInitMediaTracking) {
        isInitMediaTracking = true;
        window.oldContentId = s.prop7;
        s.prop7 = videoInfo.cmcontentid;
        if(typeof window.omniInitMediaTracking !== "undefined"){
          omniInitMediaTracking(videoTitle, duration, playerName);
        }
      }

      if(typeof window.omniMediaTrackingStop !== "undefined"){
        omniMediaTrackingStop(videoTitle, parseInt(currentTime));
      }
      stopped = true;

      return;
    }

    if(eventName === OO.EVENTS.PAUSED){
      setupVideoInfo(that);
      //cnaAgent.notifyIdle();
      //cnaAgentV3.stop();
      if(typeof window.omniMediaTrackingStop !== "undefined"){
        omniMediaTrackingStop(videoTitle, parseInt(currentTime));
      }
      s.prop7 = window.oldContentId;
      stopped = true;
      return;
    }

    if(eventName === OO.EVENTS.PLAYED){
      setupVideoInfo(that);
      //cnaAgent.notifyIdle();
      //cnaAgentV3.stop();
      if(typeof window.omniMediaTrackingDone !== "undefined"){
        omniMediaTrackingDone(videoTitle, parseInt(currentTime));
      }
      s.prop7 = window.oldContentId;
      stopped = true;
      return;
    }

    if(eventName === OO.EVENTS.SEEK || eventName === OO.EVENTS.VC_SEEK){
      var previousTime = currentTime;
      //cnaAgentV3.stop(Math.round(previousTime * 1000));
      currentTime = arguments[1];
      console.log("### seek: " + previousTime + " --> " + currentTime);
      stopped = true;
      return;
    }

  });
};


}
/*
     FILE ARCHIVED ON 23:54:52 Nov 07, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:44:33 Aug 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 145.632
  exclusion.robots: 0.143
  exclusion.robots.policy: 0.132
  cdx.remote: 0.116
  esindex: 0.012
  LoadShardBlock: 94.034 (3)
  PetaboxLoader3.datanode: 110.96 (5)
  load_resource: 159.475 (2)
  PetaboxLoader3.resolve: 91.55 (2)
*/