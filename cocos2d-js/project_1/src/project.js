require=function e(t,r,o){function n(c,l){if(!r[c]){if(!t[c]){var u="function"==typeof require&&require;if(!l&&u)return u(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var a=r[c]={exports:{}};t[c][0].call(a.exports,function(e){var r=t[c][1][e];return n(r?r:e)},a,a.exports,e,t,r,o)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)n(o[c]);return n}({HelloWorld:[function(e,t,r){"use strict";cc._RFpush(t,"9b3adKWNxBKLJdhIbF7BpqW","HelloWorld"),cc.Class({"extends":cc.Component,properties:{label:{"default":null,type:cc.Label},text:"Hello, World!",idx:0},onLoad:function(){this.schedule(this.timerCallback,1)},update:function(e){},timerCallback:function(e){this.idx++,this.label.string=this.idx,this.label.node.rotation+=10*e}}),cc._RFpop()},{}],NewScript:[function(e,t,r){"use strict";cc._RFpush(t,"6cb536c+rFOv4kO145UEF2b","NewScript"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){},update:function(e){this.node.rotation+=100*e}}),cc._RFpop()},{}]},{},["HelloWorld","NewScript"]);