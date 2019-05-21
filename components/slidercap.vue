<template>
	<div class="container">
        <div :id="'slidecap_sec'+slidepostIndex+slideCapFlexIndex" class="slidecap-slider" data-aos="zoom-in-up">
            <div class="item"  v-for="(postImgSliderItem, postImgSliderIndex) in slideCapData.image_slider" :key="postImgSliderIndex">
                <span class="slidecap-image" :style="{ backgroundImage: 'url(' + postImgSliderItem.image + ')' }"><img :src="postImgSliderItem.image" alt="" style="opacity: 0;"></span>
                <div class="slidecap-cap">
                    <h4>{{ postImgSliderItem.slider_content_heading }}</h4>
                    <div v-html="postImgSliderItem.slider_content"></div>
                </div>
            </div>
        </div>
        <div class="slidecap-bottom">
            <span class="pagingInfo"></span>
            <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                <span class="slider__label sr-only"></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	props: [ 'slideCapData', 'slidepostIndex', 'slideCapFlexIndex' ],
    mounted () {
    	this.$slidecap_slide();
    },
    updated() {
    	this.$slidecap_slide();
    }

}
</script>