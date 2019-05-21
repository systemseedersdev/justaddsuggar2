<template>
	<div>
		<div v-for="(postItem, postIndex) in postDataList" :key="postIndex" :class="'project-cases  app-case'+postIndex" :id="'app-case'+postIndex" :data-slug="postItem.slug" :data-title="postItem.title.rendered">
			<!-- banner area part -->
	        <section class="playvideo_banner">
	            <video id="playvideo" loop muted preload="metadata" class="lozad-video">
	                <source :data-src="postItem.acf.banner.banner_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
	            </video>
	            <div class="playvideo-cap">
	                <span>Play Video</span>
	                <button class="fullbg_play_video">Play/Pause</button>
	            </div>
	        </section>

	        <!-- HIGHLIGHTS OF WORK -->
	        <section class="heighlights_sec white_bg" v-if="postItem.acf.big_heading_text">
	            <div class="container">
	                <div class="heighlights-blk max-full">
	                    <h2 data-aos="fade-right" data-aos-duration="1500" v-html="postItem.acf.big_heading_text"></h2>
	                </div>
	            </div>
	        </section>

	        <!-- About Project -->
	        <section class="about_project">
	            <div class="container">
	                <div class="row">
	                    <div class="col-md-8" data-aos="fade-left">
	                        <h5 v-html="postItem.acf.about_project_heading_text"></h5>
	                        <div v-html="postItem.content.rendered"></div>
	                    </div>
	                    <div class="col-md-4" data-aos="fade-right" v-if="postItem.acf.case_services_section.services_list.length">
	                        <h5 v-html="postItem.acf.case_services_section.heading_text"></h5>
	                        <ul v-for="(postServiceItem, postServiceIndex) in postItem.acf.case_services_section.services_list" :key="postServiceIndex">
	                            <li>
	                            	<a :href="postServiceItem.service_link" v-if="postServiceItem.service_link">{{ postServiceItem.service_text }}</a>
	                            	<span v-else>{{ postServiceItem.service_text }}</span>
	                            </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>
	        </section>

	        <div v-for="(postFlexItem, postFlexIndex) in postItem.acf.flexible_content" :key="postFlexIndex">
		        <section  class="slidecap_sec" v-if="postFlexItem.acf_fc_layout == 'image_slider_section' && postFlexItem.image_slider.length">
		            <sliderCapSection :slideCapData="postFlexItem" :slidepostIndex="postIndex" :slideCapFlexIndex="postFlexIndex" />
		        </section>

		        <section class="fullwidth-image" v-if="postFlexItem.acf_fc_layout == 'full_width_image_with_text'">
		            <span class="fullwidth-img lazy-load" :data-background-image="postFlexItem.image"><img :data-src="postFlexItem.image" alt="" class="lazy-load" style="opacity: 0;"></span>
		            <div class="container">
		                <div class="fullwidth-cap" data-aos="fade-left">
		                    <h4 v-html="postFlexItem.text"></h4>
		                </div>
		            </div>
		        </section>

		        <section class="phonecontainer" v-if="postFlexItem.acf_fc_layout == 'mobile_slider_section' && postFlexItem.slider.length">
		            <phoneSliderSection :phoneSlideData="postFlexItem" :phoneSlideIndex="postIndex" :phoneSlideFlexIndex="postFlexIndex" />
		        </section>

		        <section class="showreel_sec white_bg" v-if="postFlexItem.acf_fc_layout == 'desktop_video_section'">
		            <div class="container">
		                <span class="subtitle" v-html="postFlexItem.small_title">THE MAKING OF</span>
		                <h2 v-html="postFlexItem.main_text"></h2>

		                <div class="videocontainer" data-aos="zoom-in">
		                    <video id="desktopvideo" loop preload="metadata">
		                        <source :src="postFlexItem.video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
		                    </video>
		                    <div class="videocontainer-cap">
		                        <span v-html="postFlexItem.video_text">Play the Making of</span>
		                        <button class="desk_play_video">Play/Pause</button>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section class="credits_sec" v-if="postFlexItem.acf_fc_layout == 'credit_block' && postFlexItem.credit_list.length">
            		<div class="container">
               			<h3>{{ postFlexItem.heading_text }}</h3>
                		<div class="row" data-aos="zoom-in-up">
                			<div class="col-md-12">
	                			<ul>
	                				<li v-for="(postClientItem, postClientIndex) in postFlexItem.credit_list" :key="postClientIndex">
	                					<span>{{ postClientItem.credit_title }}</span><strong>{{ postClientItem.credit_names }}</strong>
									</li>
	                			</ul>
	                		</div>
                		</div>
               		</div>
              </section>

	        </div>

	        <!-- <section class="gray-space-between-cases"></section> -->
	        <section class="nextproject" v-if="postDataList[ postDataList.length - 1 ].previous_post">
	        	<div class="container">
	                <div class="nextproject-blk">
	                    <h3><span>NEXT PROJECT</span>{{ postDataList[ postDataList.length - 1 ].previous_post.title }}</h3>
	                </div>
	            </div>
	        </section>
	        <section class="nextproject" v-else>
	        	<div class="container">
	                <div class="nextproject-blk">
	                    <h3><span>NEXT PROJECT</span>{{ postDataList[ postDataList.length - 1 ].next_post.title }}</h3>
	                </div>
	            </div>
	        </section>
		</div>
	</div>
</template>

<script>

import sliderCapSection from '~/components/slidercap.vue'
import phoneSliderSection from '~/components/phoneslider.vue'

export default {
	components: {
        sliderCapSection,
        phoneSliderSection
    },
	mounted() {
		//this.getCurrentPost();
		console.log(this.postDataList);
		this.elements = document.querySelectorAll('.project-cases');
		window.addEventListener('scroll', () => {
	      	this.bottom = this.bottomVisible();
	    });
	    this.$lazyloader();
		this.$mob_video_play();
        this.$desk_video_play();
        this.$fullbg_video_play();
        if( this.postDataList.length == 1 ) {
	        if( this.postDataList[ this.postDataList.length - 1 ].previous_post != null  ) {
	  			this.getCurrentPost( this.postDataList[ this.postDataList.length - 1 ].previous_post.slug );
	  		} else if( this.postDataList[ this.postDataList.length - 1 ].next_post != null ) {
	  			this.getCurrentPost( this.postDataList[ this.postDataList.length - 1 ].next_post.slug );
	  		}
	  	}
	  	this.$gradientcss( '.playvideo_banner' );
	  	this.$gradientcss( 'span.fullwidth-img', true );	  	
	},
    data() {
        return {
        	elements: [],
        	postDataList: [],
        	bottom: false,
        	finish: false,
        }
    },
    async asyncData( context ) {
        let [postData] = await Promise.all([
            context.app.$axios.get( '/wp/v2/case?slug='+`${context.params.slug}`+'&_embed' )
            .catch((error) => {
                console.log( error );
            })
        ])
        if ( postData.data.length === 0 ) {
			context.error({ statusCode: 404, message: 'Page not found' });
		}
		if( postData.data != null ) {
	        return {
	            postDataList: postData.data,
	        }
	    }
    },
    methods: {
	    getCurrentPost: async function( newslug = '' ) {
	    	let post_slug = '';
	    	if( newslug != '' ) {
	    		post_slug = newslug;
	    	
		    	let [postData] = await Promise.all([
					this.$axios.get( '/wp/v2/case?slug='+post_slug+'&_embed' )
					.catch((error) => {
			        	console.log( error );
			      	})
				]);
				var data = postData.data;
				if ( data == null ) {
					this.finish = true;
	            	return	    			
		    	}
				var self = this;
				data.map( function( item ) {
	                self.postDataList.push( item );
	            })
	        }
	    },
	    bottomVisible() {
	      	const scrollY = window.scrollY;
	      	const greySpaceItem = document.querySelectorAll( '.heighlights_sec' );
	      	const footerHeight = greySpaceItem[ greySpaceItem.length - 1 ].offsetTop;

	      	return scrollY > footerHeight;
	      	
	    },
	    isElementInViewport(el) {
	    	var eleBottom = el.offsetTop + el.offsetHeight
	      	return (
	        	window.scrollY >= el.offsetTop &&
	        	window.scrollY <= eleBottom
	      	);
	    }
	},
	updated() {
		this.$lazyloader();
		this.$mob_video_play();
        this.$desk_video_play();
        this.$fullbg_video_play();
        this.elements = document.querySelectorAll('.project-cases');
        this.$gradientcss( '.playvideo_banner' );
	  	this.$gradientcss( 'span.fullwidth-img', true );
	},
	watch: {
	    bottom( bottom ) {
	    	if ( this.finish === true ) {
            	return
          	}
          	if ( bottom ) {
          		console.log( bottom );
          		if( this.postDataList[ this.postDataList.length - 1 ].previous_post != null  ) {
          			this.getCurrentPost( this.postDataList[ this.postDataList.length - 1 ].previous_post.slug );
          		} else if( this.postDataList[ this.postDataList.length - 1 ].next_post != null ) {
          			this.getCurrentPost( this.postDataList[ this.postDataList.length - 1 ].next_post.slug );
          		}
	        }
	    }
	}
}
</script>

<style scoped>
	section.gray-space-between-cases {
    	height: 400px;
    	background-color: #e5e6eb;
	}
</style>