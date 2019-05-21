<template>
	<div>
        <section class="video_banner">
            <video autoplay loop preload="metadata" class="lozad-video">
                <source :data-src="pageData.acf.latest_case_banner.latest_case[0].acf.banner.banner_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
            </video>
            <div class="container">
                <div class="videobanner-cap">
                    <h1><span v-html="pageData.acf.latest_case_banner.banner_case_text">Our Latest Case</span>{{ pageData.acf.latest_case_banner.latest_case[0].post_title }}</h1>
                    <nuxt-link :to="'/cases/'+pageData.acf.latest_case_banner.latest_case[0].post_name" class="btn">Show Case</nuxt-link>
                </div>
            </div>
        </section>


        <section class="heighlights_sec white_bg">
            <div class="container">
                <div class="heighlights-blk">
                    <h2 data-aos="fade-right" data-aos-duration="1500" v-html="pageData.acf.main_highlighted_text"></h2>
                </div>
            </div>
        </section>

        <section class="projects_sec">
            <div class="container">
                <div id="filters" class="button-group filters-button-group">
                    <div class="row">
                        <div class="col-md-4">
                            <h3>All projects</h3>
                        </div>
                        <div class="col-md-8"  v-if="caseCategoryList.length">
                        	<button class="button" :class="['All'===filterOption? 'is-checked' : '']" @click="filter('All')">All</button>
                        	<button v-for="(caseCatItm, caseCatkey) in caseCategoryList" class="button" :class="[( 'filterByText'===filterOption && caseCatItm.id === filterCatId ) ? 'is-checked' : '']"  :key="caseCatkey" @click="filter('filterByText',caseCatItm.id)">{{caseCatItm.name}}</button>
                        </div>
                    </div>

                </div>
                <no-ssr>
                <isotope ref="cpt" :options='options' v-images-loaded:on.progress="layout" :list="postDataList" :itemSelector="elementClass" class="isotope" v-match-heights="{ el: [ '.element-item' ] }" @filter="filterOption=arguments[0]">
                	<nuxt-link v-for="(postCaseItem, postCaseIndex) in postDataList" :key="postCaseIndex" :to="'/cases/'+postCaseItem.slug">
	                	<div class="grid_video bkg_video_play" v-if="postCaseItem.acf.case_thumbnail_videos.case_thumbnail_video">
	                		<video class="lozad-video" autoplay loop muted preload="metadata" v-if="postCaseItem.acf.case_thumbnail_videos.case_thumbnail_video">
                            	<source :data-src="postCaseItem.acf.case_thumbnail_videos.case_thumbnail_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40" >
                        	</video>
	                	</div>
                		<div class="grid_img lazy-load" :data-background-image="postCaseItem._embedded['wp:featuredmedia']['0'].media_details.sizes['full'].source_url" v-else>
                			<img class="lazy-load" :data-src="postCaseItem._embedded['wp:featuredmedia']['0'].media_details.sizes['full'].source_url"  alt="" style="opacity: 0;">
                		</div>
                		<div class="grid_cap">
                            <h4>{{ postCaseItem.title.rendered }} <span v-if="postCaseItem.client_category_data.length">Client: {{ postCaseItem.client_category_data[0].name }}</span></h4>
                            <span class="btn">Show Case</span>
                        </div>
                	</nuxt-link>
                </isotope>
                </no-ssr>

                <button id="load-more" @click="getPosts" v-if="postDataList.length && !loader && !finish && showall"> show more</button>
                <div class="loader_wrapper" v-if="loader">
                    <div class="loader" v-if="loader"></div>    
                </div>
                <transition name="fade" :duration="{ enter: 800, leave: 1000 }">
                    <div v-if="finish" class="loadmore_complete">
                        <h4>No More Post to load.</h4>
                    </div>
                </transition>
            </div>
        </section>


        <section class="reallyproud_sec" v-if="pageData.acf.other_cases.other_cases_list.length">
            <div class="container">
                <h2 v-html="pageData.acf.other_cases.other_cases_main_text"></h2>
                <div class="reallyproud-slide">
                    <div class="item" v-for="(postSliderItem, postSliderIndex) in pageData.acf.other_cases.other_cases_list" :key="postSliderIndex">
                        <div class="row">
                            <nuxt-link class="col-md-7 reallyproud-img" :to="'/cases/'+postSliderItem.post_name">
                                <img :src="postSliderItem.post_data._embedded['wp:featuredmedia']['0'].media_details.sizes['full'].source_url" alt="">
                            </nuxt-link>
                            <div class="col-md-5 align-self-center reallyproud-con">
                                <h4><nuxt-link :to="'/cases/'+postSliderItem.post_name">{{ postSliderItem.post_title }}</nuxt-link></h4>
                                <div class="tags" v-if="postSliderItem.post_data.case_tag_data.length">
                                    <a :href="'/cases/tag/'+taglist.slug"  v-for="(taglist, tagindex) in postSliderItem.post_data.case_tag_data" :key="tagindex">#{{ taglist.name }}</a>
                                </div>
                                <div v-html="postSliderItem.post_data.excerpt.rendered"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="pagingInfo"></span>
                <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                    <span class="slider__label sr-only"></span>
                </div>
            </div>
        </section>
	</div>
</template>

<script>
let isotope;
let imagesLoaded;
if (process.client) {
  isotope = require('vueisotope');
  imagesLoaded = require('vue-images-loaded');
}

export default {
	components: {
        isotope
    },
    directives: {
        imagesLoaded
    },
	mounted() {
		console.log( this.pageData );
		console.log( this.caseCategoryList );
		console.log( this.postDataList );
		this.$gradientcss( 'section.video_banner' );
        this.$gradientcss( '.element-item .grid_img', true );
        this.$gradientcss( '.element-item .grid_video' );
		this.$lazyloader();
        
	},
    data() {
        return {
        	pageData: {},
        	caseCategoryList: {},
        	postDataList: [],
        	pageCounter: 2,
        	total: 0,
        	limit: 6,
            loader: false,
            finish: false,
            showall: true,
        	filterOption: 'All',
        	elementClass: 'element-item',
        	filterText: '',
        	filterCatId: '',
        	options: {
        		layout: 'fitRows',
        		getFilterData: {
        			"All": function(){
			    		return true;
			    	},
			    	"Social Media": function( el ) {
			    		return el.case_category.includes(9);
			    	},
			    	filterByText: function( el ) {
			    		return el.case_category.includes( el.filterText );
			    	}
        		}
        	}
        }
    },
    async asyncData ( context ) {
        let [getData,caseCategoryData,postData] = await Promise.all([
            context.app.$axios.get( '/wp/v2/pages/238' )
            .catch((error) => {
                console.log( error );
            }),
            context.app.$axios.get( '/wp/v2/case_category' )
            .catch((error) => {
                console.log( error );
            }),
            context.app.$axios.get( '/wp/v2/case?_embed&per_page=6&page=1' )
            .catch((error) => {
                console.log( error );
            })
        ])
        return {
            pageData: getData.data,
            caseCategoryList: caseCategoryData.data,
            postDataList: postData.data,
        }
    },
    methods: {
    	getPosts: async function( event ) {
    		this.loader = true;
            await this.$axios.get( '/wp/v2/case?_embed&&per_page=6&page='+this.pageCounter )
            .then( getData => {
                console.log( getData );
                this.pageCounter += 1;
                var self = this;
                var data = getData.data;
                data.map( function( item ) {
                    self.postDataList.push( item );

                    if ( item.total ) {
                      self.total = item.total;
                    }
                })
                this.loader = false;
            })
            .catch((errors) => {
                console.log( errors );

                if (errors.response) {
                    console.log(errors.response);
                    if( errors.response.status == 400 && errors.response.data.code == 'rest_post_invalid_page_number' ) {
                        this.finish = true;
                    }
                }
                
                this.loader = false;
            })
    	},
    	layout () {
            this.$refs.cpt.layout('masonry');
        },
        filter: function( key, id = 0 ) {
        	if( key == 'All' ) {
        		this.$refs.cpt.filter(key);
                this.showall = true;
        	} else {
	        	this.postDataList.map( function( item ) {
	            	item.filterText = id;
	            });
	        	this.$refs.cpt.filter(key);
	        	this.filterOption = key;
	        	this.filterCatId = id;
                this.showall = false;
	        }
        }
    },
    updated () {
        this.$gradientcss( 'section.video_banner' );
        this.$gradientcss( '.element-item .grid_img', true );
        this.$gradientcss( '.element-item .grid_video' );
       	this.$lazyloader();
       	this.$reallyproud_slide();
       	
       	var el = document; 
		var event = document.createEvent('HTMLEvents');
		event.initEvent('matchheight', true, false);
		el.dispatchEvent(event);


    }
}
</script>

<style scoped>
    .loadmore_complete h4 { text-align: center; font-size: 16px; }
    .loader_wrapper { position: relative; margin: 0 auto; height: 40px; width: 40px; }
    .loader {
        position: absolute;
        left:0;
        top:0;
        border-width: 5px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.5) rgb(255, 255, 255) rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5);
        border-image: initial;
        border-radius: 50%;
        display: inline-block;
        width: 40px;
        height: 40px;
        z-index: 2;
        animation: 1.50s linear 0s infinite normal none running spin;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style>