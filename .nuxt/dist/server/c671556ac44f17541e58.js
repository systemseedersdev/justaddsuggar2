exports.ids=[4],exports.modules={73:function(t,e,c){var content=c(81);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var d=c(3).default;t.exports.__inject__=function(t){d("04afcdc4",content,!0,t)}},80:function(t,e,c){"use strict";c.r(e);var d=c(73),o=c.n(d);for(var l in d)"default"!==l&&function(t){c.d(e,t,function(){return d[t]})}(l);e.default=o.a},81:function(t,e,c){(t.exports=c(2)(!1)).push([t.i,"section.gray-space-between-cases[data-v-c1b6438c]{height:400px;background-color:#e5e6eb}",""])},82:function(t,e,c){"use strict";c.r(e);var d={props:["slideCapData","slidepostIndex","slideCapFlexIndex"],mounted(){this.$slidecap_slide()},updated(){this.$slidecap_slide()}},o=c(1),l={props:["phoneSlideData","phoneSlideIndex","phoneSlideFlexIndex"],computed:{gradient(){let t="linear-gradient(135deg";return this.colors1.forEach(function(e){t+=","+e.hex}),t+=")"}},mounted(){this.$phone_slide(),this.$gradientcss(".device_blk-inn")},updated(){this.$phone_slide(),this.$gradientcss(".device_blk-inn")}},n={components:{sliderCapSection:Object(o.a)(d,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container"},[t._ssrNode("<div"+t._ssrAttr("id","slidecap_sec"+t.slidepostIndex+t.slideCapFlexIndex)+' data-aos="zoom-in-up" class="slidecap-slider">'+t._ssrList(t.slideCapData.image_slider,function(e,c){return'<div class="item"><span class="slidecap-image"'+t._ssrStyle(null,{backgroundImage:"url("+e.image+")"},null)+"><img"+t._ssrAttr("src",e.image)+' alt style="opacity: 0;"></span> <div class="slidecap-cap"><h4>'+t._ssrEscape(t._s(e.slider_content_heading))+"</h4> <div>"+t._s(e.slider_content)+"</div></div></div>"})+'</div> <div class="slidecap-bottom"><span class="pagingInfo"></span> <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress"><span class="slider__label sr-only"></span></div></div>')])},[],!1,null,null,"736f483e").exports,phoneSliderSection:Object(o.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container"},[t._ssrNode("<div"+t._ssrAttr("id","phone_slider"+t.phoneSlideIndex+t.phoneSlideFlexIndex)+' class="phone-slider">'+t._ssrList(t.phoneSlideData.slider,function(e,c){return'<div class="item"><div class="row"><div class="col-md-6 order-md-1 order-2"><div class="device_blk"><div class="device_blk-inn"><video id="video-1" loop="loop" preload="metadata"><source'+t._ssrAttr("src",e.mobile_video)+' type="video/mp4" codecs="avc1.42E01E, mp4a.40"></video></div> <button data-video-id="video-1" class="video-thumbnail mob_play_video">Play/Pause</button></div></div> <div data-aos="fade-right" class="col-md-6 align-self-center order-1"><h3>'+t._s(e.slider_text)+"</h3></div></div></div>"})+'</div> <div class="phonecontainer-bottom"><span class="pagingInfo"></span> <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress"><span class="slider__label sr-only"></span></div></div>')])},[],!1,null,null,"1de76942").exports},mounted(){console.log(this.postDataList),this.elements=document.querySelectorAll(".project-cases"),window.addEventListener("scroll",()=>{this.bottom=this.bottomVisible()}),this.$lazyloader(),this.$mob_video_play(),this.$desk_video_play(),this.$fullbg_video_play(),1==this.postDataList.length&&(null!=this.postDataList[this.postDataList.length-1].previous_post?this.getCurrentPost(this.postDataList[this.postDataList.length-1].previous_post.slug):null!=this.postDataList[this.postDataList.length-1].next_post&&this.getCurrentPost(this.postDataList[this.postDataList.length-1].next_post.slug)),this.$gradientcss(".playvideo_banner"),this.$gradientcss("span.fullwidth-img",!0)},data:()=>({elements:[],postDataList:[],bottom:!1,finish:!1}),async asyncData(t){let[e]=await Promise.all([t.app.$axios.get("/wp/v2/case?slug="+`${t.params.slug}`+"&_embed").catch(t=>{console.log(t)})]);if(0===e.data.length&&t.error({statusCode:404,message:"Page not found"}),null!=e.data)return{postDataList:e.data}},methods:{getCurrentPost:async function(t=""){let e="";if(""!=t){e=t;let[d]=await Promise.all([this.$axios.get("/wp/v2/case?slug="+e+"&_embed").catch(t=>{console.log(t)})]);var data=d.data;if(null==data)return void(this.finish=!0);var c=this;data.map(function(t){c.postDataList.push(t)})}},bottomVisible(){const t=window.scrollY,e=document.querySelectorAll(".heighlights_sec");return t>e[e.length-1].offsetTop},isElementInViewport(t){var e=t.offsetTop+t.offsetHeight;return window.scrollY>=t.offsetTop&&window.scrollY<=e}},updated(){this.$lazyloader(),this.$mob_video_play(),this.$desk_video_play(),this.$fullbg_video_play(),this.elements=document.querySelectorAll(".project-cases"),this.$gradientcss(".playvideo_banner"),this.$gradientcss("span.fullwidth-img",!0)},watch:{bottom(t){!0!==this.finish&&t&&(console.log(t),null!=this.postDataList[this.postDataList.length-1].previous_post?this.getCurrentPost(this.postDataList[this.postDataList.length-1].previous_post.slug):null!=this.postDataList[this.postDataList.length-1].next_post&&this.getCurrentPost(this.postDataList[this.postDataList.length-1].next_post.slug))}}};var r=Object(o.a)(n,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",t._l(t.postDataList,function(e,d){return t._ssrNode("<div"+t._ssrAttr("id","app-case"+d)+t._ssrAttr("data-slug",e.slug)+t._ssrAttr("data-title",e.title.rendered)+t._ssrClass(null,"project-cases  app-case"+d)+" data-v-c1b6438c>","</div>",[t._ssrNode('<section class="playvideo_banner" data-v-c1b6438c><video id="playvideo" loop="loop" muted="muted" preload="metadata" class="lozad-video" data-v-c1b6438c><source'+t._ssrAttr("data-src",e.acf.banner.banner_video)+' type="video/mp4" codecs="avc1.42E01E, mp4a.40" data-v-c1b6438c></video> <div class="playvideo-cap" data-v-c1b6438c><span data-v-c1b6438c>Play Video</span> <button class="fullbg_play_video" data-v-c1b6438c>Play/Pause</button></div></section> '+(e.acf.big_heading_text?'<section class="heighlights_sec white_bg" data-v-c1b6438c><div class="container" data-v-c1b6438c><div class="heighlights-blk max-full" data-v-c1b6438c><h2 data-aos="fade-right" data-aos-duration="1500" data-v-c1b6438c>'+t._s(e.acf.big_heading_text)+"</h2></div></div></section>":"\x3c!----\x3e")+' <section class="about_project" data-v-c1b6438c><div class="container" data-v-c1b6438c><div class="row" data-v-c1b6438c><div data-aos="fade-left" class="col-md-8" data-v-c1b6438c><h5 data-v-c1b6438c>'+t._s(e.acf.about_project_heading_text)+"</h5> <div data-v-c1b6438c>"+t._s(e.content.rendered)+"</div></div> "+(e.acf.case_services_section.services_list.length?'<div data-aos="fade-right" class="col-md-4" data-v-c1b6438c><h5 data-v-c1b6438c>'+t._s(e.acf.case_services_section.heading_text)+"</h5> "+t._ssrList(e.acf.case_services_section.services_list,function(e,c){return"<ul data-v-c1b6438c><li data-v-c1b6438c>"+(e.service_link?"<a"+t._ssrAttr("href",e.service_link)+" data-v-c1b6438c>"+t._ssrEscape(t._s(e.service_text))+"</a>":"<span data-v-c1b6438c>"+t._ssrEscape(t._s(e.service_text))+"</span>")+"</li></ul>"})+"</div>":"\x3c!----\x3e")+"</div></div></section> "),t._l(e.acf.flexible_content,function(e,o){return t._ssrNode("<div data-v-c1b6438c>","</div>",["image_slider_section"==e.acf_fc_layout&&e.image_slider.length?t._ssrNode('<section class="slidecap_sec" data-v-c1b6438c>',"</section>",[c("sliderCapSection",{attrs:{slideCapData:e,slidepostIndex:d,slideCapFlexIndex:o}})],1):t._e(),t._ssrNode(" "+("full_width_image_with_text"==e.acf_fc_layout?'<section class="fullwidth-image" data-v-c1b6438c><span'+t._ssrAttr("data-background-image",e.image)+' class="fullwidth-img lazy-load" data-v-c1b6438c><img'+t._ssrAttr("data-src",e.image)+' alt class="lazy-load" style="opacity: 0;" data-v-c1b6438c></span> <div class="container" data-v-c1b6438c><div data-aos="fade-left" class="fullwidth-cap" data-v-c1b6438c><h4 data-v-c1b6438c>'+t._s(e.text)+"</h4></div></div></section>":"\x3c!----\x3e")+" "),"mobile_slider_section"==e.acf_fc_layout&&e.slider.length?t._ssrNode('<section class="phonecontainer" data-v-c1b6438c>',"</section>",[c("phoneSliderSection",{attrs:{phoneSlideData:e,phoneSlideIndex:d,phoneSlideFlexIndex:o}})],1):t._e(),t._ssrNode(" "+("desktop_video_section"==e.acf_fc_layout?'<section class="showreel_sec white_bg" data-v-c1b6438c><div class="container" data-v-c1b6438c><span class="subtitle" data-v-c1b6438c>'+t._s(e.small_title)+"</span> <h2 data-v-c1b6438c>"+t._s(e.main_text)+'</h2> <div data-aos="zoom-in" class="videocontainer" data-v-c1b6438c><video id="desktopvideo" loop="loop" preload="metadata" data-v-c1b6438c><source'+t._ssrAttr("src",e.video)+' type="video/mp4" codecs="avc1.42E01E, mp4a.40" data-v-c1b6438c></video> <div class="videocontainer-cap" data-v-c1b6438c><span data-v-c1b6438c>'+t._s(e.video_text)+'</span> <button class="desk_play_video" data-v-c1b6438c>Play/Pause</button></div></div></div></section>':"\x3c!----\x3e")+" "+("credit_block"==e.acf_fc_layout&&e.credit_list.length?'<section class="credits_sec" data-v-c1b6438c><div class="container" data-v-c1b6438c><h3 data-v-c1b6438c>'+t._ssrEscape(t._s(e.heading_text))+'</h3> <div data-aos="zoom-in-up" class="row" data-v-c1b6438c><div class="col-md-12" data-v-c1b6438c><ul data-v-c1b6438c>'+t._ssrList(e.credit_list,function(e,c){return"<li data-v-c1b6438c><span data-v-c1b6438c>"+t._ssrEscape(t._s(e.credit_title))+"</span><strong data-v-c1b6438c>"+t._ssrEscape(t._s(e.credit_names))+"</strong></li>"})+"</ul></div></div></div></section>":"\x3c!----\x3e"))],2)}),t._ssrNode(" "+(t.postDataList[t.postDataList.length-1].previous_post?'<section class="nextproject" data-v-c1b6438c><div class="container" data-v-c1b6438c><div class="nextproject-blk" data-v-c1b6438c><h3 data-v-c1b6438c><span data-v-c1b6438c>NEXT PROJECT</span>'+t._ssrEscape(t._s(t.postDataList[t.postDataList.length-1].previous_post.title))+"</h3></div></div></section>":'<section class="nextproject" data-v-c1b6438c><div class="container" data-v-c1b6438c><div class="nextproject-blk" data-v-c1b6438c><h3 data-v-c1b6438c><span data-v-c1b6438c>NEXT PROJECT</span>'+t._ssrEscape(t._s(t.postDataList[t.postDataList.length-1].next_post.title))+"</h3></div></div></section>"))],2)}),0)},[],!1,function(t){var e=c(80);e.__inject__&&e.__inject__(t)},"c1b6438c","e343d09a");e.default=r.exports}};
//# sourceMappingURL=c671556ac44f17541e58.js.map