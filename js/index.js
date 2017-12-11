// typed.js - actual quotes/code below line 2
!function(a,b,c){"use strict";var d=function(a,b){var d=this;this.el=a,this.options={},Object.keys(e).forEach(function(a){d.options[a]=e[a]}),Object.keys(b).forEach(function(a){d.options[a]=b[a]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,c&&this.options.stringsElement instanceof c?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};d.prototype={constructor:d,init:function(){var a=this;a.timeout=setTimeout(function(){for(var b=0;b<a.strings.length;++b)a.sequence[b]=b;a.shuffle&&(a.sequence=a.shuffleArray(a.sequence)),a.typewrite(a.strings[a.sequence[a.arrayPos]],a.strPos)},a.startDelay)},build:function(){var a=this;if(!0===this.showCursor&&(this.cursor=b.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";Array.prototype.slice.apply(this.stringsElement.children).forEach(function(b){a.strings.push(b.innerHTML)})}this.init()},typewrite:function(a,b){if(!0!==this.stop){var c=Math.round(70*Math.random())+this.typeSpeed,d=this;d.timeout=setTimeout(function(){var c=0,e=a.substr(b);if("^"===e.charAt(0)){var f=1;/^\^\d+/.test(e)&&(e=/\d+/.exec(e)[0],f+=e.length,c=parseInt(e)),a=a.substring(0,b)+a.substring(b+f)}if("html"===d.contentType){var g=a.substr(b).charAt(0);if("<"===g||"&"===g){var h="",i="";for(i="<"===g?">":";";a.substr(b+1).charAt(0)!==i&&(h+=a.substr(b).charAt(0),!(++b+1>a.length)););b++,h+=i}}d.timeout=setTimeout(function(){if(b===a.length){if(d.options.onStringTyped(d.arrayPos),d.arrayPos===d.strings.length-1&&(d.options.callback(),d.curLoop++,!1===d.loop||d.curLoop===d.loopCount))return;d.timeout=setTimeout(function(){d.backspace(a,b)},d.backDelay)}else{0===b&&d.options.preStringTyped(d.arrayPos);var c=a.substr(0,b+1);d.attr?d.el.setAttribute(d.attr,c):d.isInput?d.el.value=c:"html"===d.contentType?d.el.innerHTML=c:d.el.textContent=c,b++,d.typewrite(a,b)}},c)},c)}},backspace:function(a,b){if(!0!==this.stop){var c=Math.round(70*Math.random())+this.backSpeed,d=this;d.timeout=setTimeout(function(){if("html"===d.contentType&&">"===a.substr(b).charAt(0)){for(var c="";"<"!==a.substr(b-1).charAt(0)&&(c-=a.substr(b).charAt(0),!(--b<0)););b--,c+="<"}var e=a.substr(0,b);d.attr?d.el.setAttribute(d.attr,e):d.isInput?d.el.value=e:"html"===d.contentType?d.el.innerHTML=e:d.el.textContent=e,b>d.stopNum?(b--,d.backspace(a,b)):b<=d.stopNum&&(d.arrayPos++,d.arrayPos===d.strings.length?(d.arrayPos=0,d.shuffle&&(d.sequence=d.shuffleArray(d.sequence)),d.init()):d.typewrite(d.strings[d.sequence[d.arrayPos]],b))},c)}},shuffleArray:function(a){var b,c,d=a.length;if(d)for(;--d;)c=Math.floor(Math.random()*(d+1)),b=a[c],a[c]=a[d],a[d]=b;return a},reset:function(){var a=this;clearInterval(a.timeout);this.el.getAttribute("id");this.el.textContent="",void 0!==this.cursor&&void 0!==this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},d.new=function(a,c){Array.prototype.slice.apply(b.querySelectorAll(a)).forEach(function(a){var b=a._typed,e="object"==typeof c&&c;b&&b.reset(),a._typed=b=new d(a,e),"string"==typeof c&&b[c]()})},c&&(c.fn.typed=function(a){return this.each(function(){var b=c(this),e=b.data("typed"),f="object"==typeof a&&a;e&&e.reset(),b.data("typed",e=new d(this,f)),"string"==typeof a&&e[a]()})}),a.Typed=d;var e={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);

// actual code
  document.addEventListener('DOMContentLoaded', function() {
    Typed.new("#quote", {
      strings: ["There is no limit to what we can do but our imagination", "If you can't take criticism, don't publicize your opinions", "The only true victor is one who realizes that there is no game", "Innovation can only exist if one is willing to accept new ideas", "Never has the finite universe seemed so infinite"],
      backDelay: 4500,
      loop: true,
      contentType: 'html' // or 'text'
    });

  });