webpackJsonp([1],{"2VBg":function(t,e){},"6JML":function(t,e){},"9rdq":function(t,e){},A7eq:function(t,e){},ArWt:function(t,e){},BjtM:function(t,e){},Ff2h:function(t,e){},K2wg:function(t,e){},MO9K:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("bFTI")},null,null).exports,r=i("/ocq"),c=i("Dd8w"),o=i.n(c),l=i("NYxO"),d={name:"Home",computed:o()({},Object(l.b)(["city"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("i",{staticClass:"iconfont iconjiantouxia"})])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("i",{staticClass:"iconfont iconfanhui"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("i",{staticClass:"iconfont iconsousuo"}),this._v(" 输入城市游玩景点\n  ")])}]};var h=i("VU/8")(d,u,!1,function(t){i("xwgv")},"data-v-564212b8",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.src,alt:"12"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var m=i("VU/8")({data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0},swiperList:[{id:1,src:"//gw.alicdn.com/imgextra/i3/1611785/O1CN01OuRImZ1P3ZZ6zdY9d_!!1611785-0-lubanu.jpg_790x10000Q75.jpg_.webp"},{id:2,src:"//gw.alicdn.com/imgextra/i3/1453939/O1CN01tRlyYm1ey6gxpZVa2_!!1453939-0-lubanu.jpg_790x10000Q75.jpg_.webp"}]}}},p,!1,function(t){i("iUhV")},"data-v-f921cb94",null).exports,f={name:"icon",data:function(){return{icons:[{id:1,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点景点景点"},{id:2,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:3,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:4,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:5,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:6,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:7,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:8,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点"},{id:9,src:"https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",text:"热门景点99"}],swiperOption:{}}},computed:{pages:function(){var t=[];return this.icons.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons",attrs:{options:t.swiperOption}},[i("swiper",t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-imgcontent",attrs:{src:e.src}})]),t._v(" "),i("p",{staticClass:"icon-txt"},[t._v(t._s(e.text))])])}),0)}),1)],1)},staticRenderFns:[]};var _=i("VU/8")(f,v,!1,function(t){i("QPXx")},"data-v-1276291a",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"recommend-item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.src}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var w=i("VU/8")({name:"recommend",data:function(){return{recommendList:[{id:1,src:"//img1.qunarzz.com/sight/p0/1411/b6/662fc49d1d26a5a7775cf6b7f8b4ecec.water.jpg_256x160_642bd739.jpg",title:"杭州野生动物世界杭州野生动物世界杭州野生动物世界",desc:"多功能综合性生态公园"},{id:2,src:"//img1.qunarzz.com/sight/p0/2003/d8/d89f98d38fa881b0a3.water.jpg_256x160_0d22b850.jpg",title:"宁波植物园",desc:"园内丰富的植物等你来参观"},{id:3,src:"//img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg",title:"游《非诚勿扰》拍摄地，感受湿地水乡浪漫",desc:"西溪国家湿地公园·周家村"},{id:4,src:"//img1.qunarzz.com/sight/p0/1609/33/33d5213b34b64fdfa3.img.jpg_256x160_dea59ee0.jpg",title:"亲近大自然，放飞心情",desc:"千岛湖"}]}}},g,!1,function(t){i("X8j9")},"data-v-106dbf42",null).exports,C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"recommend-item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.src}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var b=i("VU/8")({name:"weekend",data:function(){return{weekendList:[{id:1,src:"//imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg",title:"杭州野生动物世界杭州野生动物世界杭州野生动物世界",desc:"多功能综合性生态公园"},{id:2,src:"//img1.qunarzz.com/sight/p0/2003/d8/d89f98d38fa881b0a3.water.jpg_256x160_0d22b850.jpg",title:"宁波植物园",desc:"园内丰富的植物等你来参观"},{id:3,src:"//img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_256x160_5d730aee.jpg",title:"游《非诚勿扰》拍摄地，感受湿地水乡浪漫",desc:"西溪国家湿地公园·周家村"}]}}},C,!1,function(t){i("ArWt")},"data-v-5edb4e7a",null).exports,y=i("mtWM"),x=i.n(y),k={name:"Home",data:function(){return{}},computed:o()({},Object(l.b)(["city"])),components:{HomeHeader:h,HomeSwiper:m,HomeIcons:_,HomeRecommend:w,HomeWeekend:b},mounted:function(){},methods:{}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-header"),this._v(" "),e("home-swiper"),this._v(" "),e("home-icons"),this._v(" "),e("home-recommend"),this._v(" "),e("home-weekend")],1)},staticRenderFns:[]};var $=i("VU/8")(k,z,!1,function(t){i("MO9K")},null,null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont iconfanhui"})])],1)},staticRenderFns:[]};var S=i("VU/8")({name:"CityHeader"},j,!1,function(t){i("6JML")},"data-v-000a5385",null).exports,F=i("GQaK"),I={name:"CitySearch",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null,isLetter:!1}},watch:{keyword:function(){var t=this;if(this.timer&&clearTimeout(this.timer),!this.keyword)return this.list=[],void(this.isLetter=!1);this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){i.spell.includes(t.keyword)||i.name.includes(t.keyword)?e.push(i):t.isLetter=!0});t.list=e},100)}},mounted:function(){this.scroll=new F.a(this.$refs.search)},methods:{handleCityClick:function(t){this.$store.dispatch("changeCite",t),this.$router.push("/")}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名称或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.isLetter,expression:"isLetter"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var L=i("VU/8")(I,E,!1,function(t){i("NuxB")},"data-v-7bba7b35",null).exports,N={name:"CityList",props:{hotCities:Array,cities:Object,zimu:String},mounted:function(){this.scroll=new F.a(this.$refs.wrapper),console.log(this.zimu)},watch:{zimu:function(){this.zimu&&this.scroll.scrollToElement(this.$refs[this.zimu][0]),console.log(this.zimu)}},methods:{handleCityClick:function(t){this.$store.dispatch("changeCite",t),this.$router.push("/")}},computed:o()({},Object(l.b)(["city"]))},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var V=i("VU/8")(N,O,!1,function(t){i("Ff2h")},"data-v-8e7ee3d2",null).exports,T={name:"city-alphabet",props:{cities:Object},computed:{letter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{handleLetterClick:function(t){this.$emit("zimuSel",t.target.innerHTML)},handelTouchStart:function(){this.touchStatus=!0},handelTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/24);s>=0&&s<e.letter.length&&e.$emit("zimuSel",e.letter[s])},10))},handelTouchEnd:function(){this.touchStatus=!1}},data:function(){return{touchStatus:!1,stratY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letter,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handelTouchStart(e)},touchmove:t.handelTouchMove,touchend:t.handelTouchEnd}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var q={name:"city",components:{CityHeader:S,CitySearch:L,CityList:V,CityAlphabet:i("VU/8")(T,R,!1,function(t){i("Y4MG")},"data-v-4e466db6",null).exports},mounted:function(){this.getCityInfo()},methods:{getCityInfo:function(){x.a.get("/api/index.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if(t=t.data,console.log(t),t.ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},selectZimu:function(t){this.zimu=t}},data:function(){return{hotCities:[],cities:{},zimu:""}}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,zimu:t.zimu}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{zimuSel:t.selectZimu}})],1)},staticRenderFns:[]};var A=i("VU/8")(q,U,!1,function(t){i("d/BY")},"data-v-79494d72",null).exports,H={name:"Gallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{hiddenBanner:function(){this.$emit("hidden")}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.hiddenBanner}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"swiper-img",attrs:{src:t,alt:"12"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var M=i("VU/8")(H,B,!1,function(t){i("pYIj")},"data-v-4a943fc2",null).exports,G={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var Y=i("VU/8")({name:"Fade"},G,!1,function(t){i("2VBg")},"data-v-4b6faa45",null).exports,D={name:"Banner",props:{sightName:String,bannerImg:String,galleryImgs:Array},components:{CommonGallary:M,FadeAnimation:Y},data:function(){return{imgs:["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=31118306,972739979&fm=26&gp=0.jpg","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=31118306,972739979&fm=26&gp=0.jpg"],showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleBannerHidden:function(){this.showGallary=!1}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:this.bannerImg,alt:"picture"}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[t._v(t._s(this.galleryImgs.length))])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.galleryImgs},on:{hidden:t.handleBannerHidden}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(D,P,!1,function(t){i("A7eq")},"data-v-08743494",null).exports,K={name:"detail-header",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},created:function(){},destroyed:function(){},activated:function(){window.addEventListener("scroll",this.handleScroll),console.log(123)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll),console.log(123)},methods:{handleScroll:function(){console.log(11);var t=document.documentElement.scrollTop;if(t>60){var e=t/140;e=e>1?1:e,this.showAbs=!1,this.opacityStyle={opacity:e}}else this.showAbs=!0}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont iconfanhui header-abs-back"})]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont iconfanhui icon-fixed-back"})])],1)],1)},staticRenderFns:[]};var W=i("VU/8")(K,Q,!1,function(t){i("9rdq")},"data-v-943038d4",null).exports,Z={name:"DetailList",props:{list:{type:Array}}},J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var tt={name:"Detail",components:{DetailBanner:X,DetailHeader:W,DetailList:i("VU/8")(Z,J,!1,function(t){i("XO+C")},"data-v-172873ee",null).exports},data:function(){return{list:[],sightName:"",galleryImgs:[],bannerImg:""}},mounted:function(){this.getDetailInfo()},activated:function(){},methods:{getDetailInfo:function(){x.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDetailInfoSucc)},handleGetDetailInfoSucc:function(t){if(console.log(t),(t=t.data).ret&&t.data){var e=t.data;this.list=e.categoryList,this.bannerImg=e.bannerImg,this.sightName=e.sightName,this.galleryImgs=e.galleryImgs}}}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{staticClass:"banner",attrs:{galleryImgs:this.galleryImgs,sightName:this.sightName,bannerImg:this.bannerImg}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var it=i("VU/8")(tt,et,!1,function(t){i("K2wg")},"data-v-389a7b8a",null).exports;s.a.use(r.a);var st=new r.a({routes:[{path:"/",name:"Home",component:$},{path:"/city",name:"City",component:A},{path:"/detail/:id",name:"Detail",component:it}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),nt=i("v5o6"),at=i.n(nt),rt=(i("m0iu"),i("cjdf"),i("BjtM"),i("F3EI")),ct=i.n(rt),ot="上海";try{localStorage.city&&(ot=localStorage.city)}catch(t){}var lt={city:ot},dt={changeCite:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ut=new l.a.Store({state:lt,actions:{changeCite:function(t,e){t.commit("changeCite",e)}},mutations:dt});i("v2ns");s.a.config.productionTip=!1,at.a.attach(document.body),s.a.use(ct.a),new s.a({el:"#app",router:st,store:ut,components:{App:a},template:"<App/>"})},NuxB:function(t,e){},QPXx:function(t,e){},X8j9:function(t,e){},"XO+C":function(t,e){},Y4MG:function(t,e){},bFTI:function(t,e){},cjdf:function(t,e){},"d/BY":function(t,e){},iUhV:function(t,e){},m0iu:function(t,e){},pYIj:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},xwgv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c2d560866f1146ed709e.js.map