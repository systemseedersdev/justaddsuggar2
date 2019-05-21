<template>
	<div class="container">
        <div :id="'phone_slider'+phoneSlideIndex+phoneSlideFlexIndex" class="phone-slider">
            <div class="item" v-for="(postVidSliderItem, postVidSliderIndex) in phoneSlideData.slider" :key="postVidSliderIndex">
                <div class="row">
                    <div class="col-md-6 order-md-1 order-2">
                        <div class="device_blk">
                            <div class="device_blk-inn">
                                <video id="video-1" loop preload="metadata">
                                    <source :src="postVidSliderItem.mobile_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
                                </video>
                            </div>
                            <button class="video-thumbnail mob_play_video" data-video-id="video-1">Play/Pause</button>
                        </div>
                    </div>
                    <div class="col-md-6 align-self-center order-1" data-aos="fade-right">
                        <h3 v-html="postVidSliderItem.slider_text"></h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="phonecontainer-bottom">
            <span class="pagingInfo"></span>
            <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                <span class="slider__label sr-only"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	props: [ 'phoneSlideData', 'phoneSlideIndex', 'phoneSlideFlexIndex' ],
    computed: {
        gradient() {
            let colors = 'linear-gradient(135deg'
            this.colors1.forEach(function(e){  
                colors += ',' + e.hex
            });
            colors += ')'
            return colors
        }
    },
    mounted () {
    	this.$phone_slide();
        this.$gradientcss( '.device_blk-inn' );
    },
    updated() {
    	this.$phone_slide();
        this.$gradientcss( '.device_blk-inn' );
    }
}
</script>