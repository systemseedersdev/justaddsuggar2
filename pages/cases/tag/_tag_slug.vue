<template>
	<div>
        <section class="about_banner">
            <span class="lazy-load" data-background-image="/images/default-tag-banner.jpg">
                <img data-src="/images/default-tag-banner.jpg" alt="Tag Banner" class="lazy-load" style="opacity: 0;">
            </span>
        </section>

		<section class="projects_sec">
            <div class="container">
                <div id="filters" class="button-group filters-button-group">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Project Tag: "{{ tagData.name }}"</h3>
                        </div>
                    </div>

                </div>

                <div v-if="postDataList.length">
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
                                <nuxt-link :to="'/cases/'+postCaseItem.slug" class="btn">Show Case</nuxt-link>
	                        </div>
	                	</nuxt-link>
	                </isotope>
	                </no-ssr>
                </div>
                <div v-else>
                    <h3>There are no projects added to this tag.</h3>
                </div>

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
		this.$gradientcss( 'section.about_banner', true );
        this.$gradientcss( '.element-item .grid_img', true );
        this.$gradientcss( '.element-item .grid_video' );
		this.$lazyloader();
		console.log(this.postDataList);
	},
	data() {
        return {
        	tagData: {},
        	postDataList: [],
        	pageCounter: 2,
        	total: 0,
        	limit: 6,
            loader: false,
            finish: false,
            showall: true,
        	elementClass: 'element-item',
        	options: {
        		layout: 'fitRows',
        	}
        }
    },
    async asyncData ( context ) {
  		var tagsData = null;

		let [getData] = await Promise.all([
			context.app.$axios.get( '/wp/v2/case_tags?slug='+`${context.params.tag_slug}` )
			.catch((errors) => {
	            console.log( errors );
	            context.error(errors)
	        })
		]);

		if ( getData.data.length === 0 ) {
			context.error({ statusCode: 404, message: 'Page not found' });
		}

		var tagsData = getData.data[0];
		if( tagsData != null ) {
			let [postData] = await Promise.all([
				context.app.$axios.get( '/wp/v2/case?_embed&case_tags='+tagsData.id+'&per_page=6&page=1' )
				.catch((errors) => {
                	console.log( errors );
                	context.error(errors)
            	})
			])
			return {
				tagData: getData.data[0],
				postDataList: postData.data
			}
		}
    },
    methods: {
    	getPosts: async function( context ) {
            this.loader = true;
            await this.$axios.get( '/wp/v2/case?_embed&case_tags='+this.tagData.id+'&per_page=6&page='+this.pageCounter )
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
        }
    },
    updated () {
        this.$gradientcss( 'section.about_banner', true );
        this.$gradientcss( '.element-item .grid_img', true );
        this.$gradientcss( '.element-item .grid_video' );
       	this.$lazyloader();
       	
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