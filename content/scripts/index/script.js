/*! uzai - v0.1.11 - 2015-07 */function lineItemHover(){$(".main-mod-bd").on("mouseenter",".line-mod-item",function(){var a=$(this);a.addClass("line-mod-item-on")}).on("mouseleave",".line-mod-item",function(){var a=$(this);a.removeClass("line-mod-item-on")}),$(".sale-line-list").on("mouseenter",".line-mod-item",function(){var a=$(this);a.addClass("line-mod-item-on")}).on("mouseleave",".line-mod-item",function(){var a=$(this);a.removeClass("line-mod-item-on")})}function destinationTab(){var a=$(".recommend-destination");a.find(".recommend-destination-bd .item").eq(0).show(),a.find(".main-mod-hd li").on("mouseenter",function(){var b=$(this),c=b.index();b.addClass("on").siblings().removeClass("on"),a.find(".bd .item").hide().eq(c).show()})}function indexSlide(){$(".J_mobile_code_slide").slides({currentClass:"on",fadeSpeed:2500,effect:"slide",crossfade:!0,hoverPause:!0,pause:1e3,play:0,generatePagination:!1}),$(".J_main_side_slide").slides({preload:!0,preloadImage:"http://r.uzaicdn.com/content/1/images/preload.gif",currentClass:"on",fadeSpeed:600,effect:"fade",crossfade:!0,hoverPause:!0,pause:1e3,generatePagination:!0}),bjIndex(),$(".slides_container").each(function(){var a=$(this),b=a.next(".pagination");null==b.get(0)&&(b=a.next(".pagination-wrap").find(".pagination")),null!=b.get(0)&&b.find("li").on("mouseenter",function(){var a=$(this);a.find("a").click()})}),$(".full-column-slide").each(function(){var a=$(this),b=a.find(".pager"),c=a.find(".box"),d=c.find("img").length;if(1==d)return void b.hide();var e=0,f=function(){var a=e+1;a==d&&(a=0),b.find("em").eq(a).click()};f(),b.find("em").on("click",function(){var a=$(this),b=a.index();a.siblings("em").removeClass("on").end().addClass("on");var d=c.find("a");d.hide(),d.eq(b).show(),e=b;var f=d.eq(b).find("img"),g=f.attr("data-original");f.hide().attr("src",g).fadeIn("slow")})})}function indexUserInfo(){var a=_uzw.user.userid,b=_uzw.user.userName,c=$("#j_indexLoginBox"),d="";a?(c.find(".login-fd").eq(0).hide(),c.find(".login-fd").eq(1).show(),d='<a href="http://u.uzai.com/manage/Index">'+b+"</a>",$("#j_indexUserName").text("").append(d),$.ajax({type:"GET",cache:!1,async:!1,url:_uzw.domain.u+"/GetUserPushMessage",dataType:"jsonp",jsonp:"callback",jsonpCallback:"UserPushMessage",success:function(a){c.find(".member-order").find(".num").html(a[0].ordernum),c.find(".member-comment").find(".num").html(a[0].backnu),c.find(".member-icon").find("img").attr("src",a[0].userHeadUrl)}})):(c.find(".login-fd").eq(1).hide(),c.find(".login-fd").eq(0).show())}function indexNewOrderSlide(){var a=$("#j_slideIndexBar"),b=a.find("ul"),c=$("#hid_Trees").val();if(c){var d=function(){if(b.find("li").length>0){var c=function(){var a=b.find("li").eq(0).outerHeight();b.animate({marginTop:-a+"px"},500,function(){var a=b.find("li:first");b.css({"margin-top":"0"}),b.append(a)})},d=setInterval(c,4e3);a.hover(function(){d&&(clearInterval(d),d=null)},function(){d=setInterval(c,4e3)})}};$.ajax({type:"GET",url:"/ashx/ashx_GetIndexOrder.ashx?city="+_ug.cityID+"&treeIDs="+c,cache:!1,dataType:"json",success:function(a){if(a){var c=a.list,e=[];if(c&&c.length>0){for(var f=0;f<c.length;f++){var g=c[f].order;if(g)for(var h=0;h<g.length;h++){var i=g[h];e.push("<li><p class='p1'>"+i.Time+"分钟前 "+i.UserName+" 预订了</p><p class='p2'><a target='_blank' href='"+i.URL+"' target='_blank'>"+i.ProductName+"</a></p></li>")}}b.html(e.join("")),d()}}},error:function(){}})}}function indexConTab(){var a=$(".main-mod");a.find(".main-mod-hd").find("li").on("mouseenter",function(){var a=$(this),b=a.index(),c=a.parents(".main-mod");a.addClass("on").siblings("li").removeClass("on");var d=a.parents(".main-mod-hd").next(".main-mod-bd").children(".item");d.hide(),d.eq(b).show(),b>0&&imgLazyload(c,b,0)}),a.find(".main-mod-bd").on("click",".hot-destination-items a",function(){var a=$(this),b=a.attr("data-key"),c=a.index(),d=a.parents(".main-mod"),e=0;e=a.parents(".item").index(),a.addClass("on").siblings("a").removeClass("on");var f=a.parents(".hot-destination").next(".hot-destination-box").find(".line-mod-list").children(".item");f.hide();var g=f.eq(c);if(g.show(),0!==c&&!(g.find("li").length>0)){var h=f.eq(0),i=h.find(".line-info").find("a"),j=i.attr("href"),k=j.split("#")[1];return k=k?"#"+k:"",$.ajax({url:"http://wapi.uzai.com/api/UzaiProduct/?id="+b+"&city="+_ug.cityID,type:"GET",dataType:"jsonp",cache:!0,beforeSend:function(){},success:function(a){if(a.length>0){var b=[];b.push("<ul>");for(var f=0;f<a.length;f++){var h=a[f],i=h.ID,j=h.ProductName,l=h.ProductURL+k,m=(h.NameExtension,h.MinPrice),n=h.TalkLevel,o=h.TalkBack,p=h.GoDate,q=h.PicTreeID;b.push("<li class='line-mod-item mod-box ml10 mt10'>"),b.push("<a target='_blank' href='"+l+"'>"),b.push("<div class='line-item'><img alt='' src='http://r.uzaicdn.com/content/m/images/common/gray.gif' data-original='http://r.uzaicdn.com/pic/"+q+"/m/w228/h170/t1'>"),b.push("<div class='line-item-hd-wrap'><div class='line-item-hd clearfix'>"),b.push("<p title='"+j+"' class='hd-txt f666'>"+j+"</p>"),b.push("<span class='line-item-price icon-index png'><span class='price-mod orange pl5 pr5'><i class='price b'>￥<em class='f14'>"+m+"</em></i>起</span></span>"),b.push("</div></div></div>"),b.push("</a>"),b.push("<div class='line-item-hover line-item-hover'>"),b.push("<a target='_blank' href='"+l+"'><div class='mask'>&nbsp;</div></a>"),b.push("<div class='line-info'>"),b.push("<a target='_blank' href='"+l+"'>"),b.push("<dl>"),b.push("<dt class='line-info-hd f666 pt10 pl5 pr5'><p title='"+j+"'>"+j+"</p></dt>"),b.push("<dd class='mt5 pl5 pr5 clearfix'>"),b.push("<div class='line-hd-cont f666 fl'><p class='f999 clearfix'><span class='fl'>满意："+n+"</span><span class='fr pr5'>评论："+o+"</span></p></div>"),b.push("<div class='price-box fr'><p><ins class='price-mod orange lh1'><i class='price b'>￥<em class='f14'>"+m+"</em></i>起</ins></p></div>"),b.push("</dd>"),b.push("</dl>"),b.push("</a>"),b.push("<div class='line-info-fd f666 mt5 pl5 pr5 clearfix'>"),b.push("<div class='line-days fl'><p title='最近班期："+p+"' class='hd-txt'>最近班期:<label>"+p+"</label></p></div>"),b.push("<p onclick='popSchdule("+i+',this,"'+l+"\")' class='all-days pointer fr'><i class='icon-calendar ml10 mr5 vm'>&nbsp;</i>更多班期</p>"),b.push("</div>"),b.push("</div>"),b.push("</div>"),b.push("</div>"),b.push("</li>")}b.push("</ul>"),g.html(b.join(""))}imgLazyload(d,e,c)},complete:function(){}}),!1}})}function weidanData(){var a=$("#sidebar-timer");null!=a.get(0)&&$.ajax({type:"GET",url:"/ashx/ashx_EndOrder.ashx?startcity="+_ug.cityID+"&type=New",success:function(b){var c=$("#sidebar-timer-box"),d=a.prev(".travel-sale");"empty"!=b?($("#sidebar-timer .slides_container").html(b),$("#sidebar-timer").show(),a.find(".item").length>0?(weiDanTimeHandle(),d.find(".line-mod-item").eq(4).hide(),c.slides({fadeSpeed:2500,effect:"slide",crossfade:!0,hoverPause:!0,play:7e3,pause:2500,currentClass:"on",generatePagination:!0})):(a.hide(),d.width("auto"))):(a.hide(),d.width("auto"))},error:function(){}})}function weiDanTimeHandle(){setInterval(function(){var a=(new Date).getTime();$("#sidebar-timer .item").each(function(b,c){var d=$(this);a+=1e3;var e=new Date(d.attr("endtime")).getTime(),f=e-a,g=f/1e3,h=Math.floor(g/60),i=Math.floor(h/60),j=Math.floor(i/24),k=j;1==k.toString().length&&(k="0"+k);var l=i%24;1==l.toString().length&&(l="0"+l);var m=h%60;1==m.toString().length&&(m="0"+m);var n=Math.floor(g%60);1==n.toString().length&&(n="0"+n),a>=e||(d.find(".item-time").find(".tian").find("b").text(k),d.find(".item-time").find(".shi").find("b").text(l),d.find(".item-time").find(".fen").find("b").text(m),d.find(".item-time").find(".miao").find("b").text(n))})},1e3)}function fixScreen(){var a=screen.width;1152>=a&&($(".banner-side-mod").hide(),$(".main-side-slide").hide(),$(".J_main_banner_slide").width(770),$(".J_main_banner_slide").find(".slides_control").css({width:"auto"}),$(".line-mod-item").width(244),$(".travel-sale").css({width:"auto"}),$(".sale-line-list").find(".line-mod-item").width(240),$(".main-banner-slide .slides_container a img").width(770),$(".main-mod-bd .line-list").css({width:"auto"}))}function indexLazyload(a){a.lazyload({effect:"fadeIn"})}function imgLazyload(a,b,c){for(var d="",e=a.find(".main-mod-bd").children(".item").eq(b).find(".line-mod-list").children(".item").eq(c).find("img"),f=e.length,g=0;f>=g;g++)d=e.eq(g).attr("data-original"),e.eq(g).attr("src",d)}function loadInfiAd(){return}function indexLazyLoadFooterSlide(){$.fn.imagesLoaded=function(a){var b=this.find("img"),c=b.length;return b.bind("load",function(){--c<=0&&a.call(b,this)}).each(function(){if(this.complete||void 0===this.complete){var a=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",this.src=a}}),this};var a=$("#j_carouselBar");if(null!=a.get(0)){var b=function(){a.imagesLoaded(function(){var b=a.find("img");b.each(function(a,b){var c=$(this),d=c.width();c.parents("li").width(d+10)}),stepcarousel.setup({galleryid:"j_carouselBar",beltclass:"expert-comment-items",panelclass:"item",autostep:{enable:!1,moveby:1,pause:3e3},panelbehavior:{speed:300,wraparound:!1,persist:!1},defaultbuttons:{enable:!0,moveby:1},statusvars:["statusA","statusB","statusC"],contenttype:["inline"]})}),a.attr("data-loaded","1")},c=function(){var c=$(window).scrollTop(),d=a.offset().top,e=screen.height;c>=d-e&&(a.attr("data-loaded")||($("#j_carouselBar").find("img").each(function(a,b){var c=$(this),d=c.data("original");c.attr("src",d)}),b(),a.attr("data-loaded","1")))};c(),$(window).scroll(function(){c()})}}function index3rdAd(){$(".expert-comment-wrap").after("<div class='w index3rdAd'><a target='_blank' href='http://www.uzai.com/subject/hb#shanghaigongshangju'><img src='http://r.uzaicdn.com/content/common/green.jpg' /></a></div>")}function bjIndex(){var a=screen.width,b=$("#j_bjBmSlides"),c=$(".j_bjMainTab"),d=$(".bj-expert-comment");null!=b.get(0)&&b.slides({preload:!0,preloadImage:"http://r.uzaicdn.com/content/1/images/preload.gif",currentClass:"on",fadeSpeed:300,effect:"fade",crossfade:!0,hoverPause:!1,pause:1e3,play:6e3,start:Math.floor(6*Math.random()+1),generatePagination:!1,generateNextPrev:!0,slidesLoaded:function(){var a=screen.width,c=b.find(".slide-item").find("img");1152>=a&&c.css({position:"absolute",left:-95}),b.find(".pagination").find("li").on("mouseenter",function(){var a=$(this);a.find("a").click()})}}),indexLazyload($(".bj-sale-list img[data-original]")),indexLazyload(c.find(".item:first").find("img[data-original]")),d.find("img[data-original]").lazyload({effect:"fadeIn",load:function(){var a=$(this),b=a.width(),c=a.parent().width();a.attr("data-original")===a.attr("src")&&a.css({left:-(b-c)/2,width:b})}}),c.children(".hd").find(".hd-item").on("click",function(){var a=$(this),b=a.siblings(".hd-item"),c=a.index()-1;b.removeClass("on"),a.addClass("on");var d=a.parents(".hd").siblings(".bd"),e=d.children(".tab-bd-box").children(".item");e.hide(),e.eq(c).show();var f=e.eq(c).find("img[data-original]"),g=f.eq(0);g.attr("data-original")!==g.attr("src")&&f.each(function(){var a=$(this);a.attr("src",a.attr("data-original"))})}),1152>=a&&(c.find(".main-side-link").hide(),c.find(".bd").css({"padding-left":55}))}$(function(){weidanData(),indexSlide(),fixScreen(),indexNewOrderSlide(),lineItemHover(),loadInfiAd(),indexConTab(),destinationTab(),indexLazyload($(".full-column img[data-original],.line-item img[data-original]")),indexLazyLoadFooterSlide()}),$(window).load(function(){_ug.hotview.set()});