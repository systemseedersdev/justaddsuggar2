<template>
    <div>
        <!-- {{ pageData }} -->
    	<!-- banner area part -->
        <section class="about_banner">
            <span class="lazy-load" :data-background-image="pageData.acf.banner_image"><img :data-src="pageData.acf.banner_image" alt="About Banner" class="lazy-load" style="opacity: 0;"></span>
        </section>

        <section class="about_textblk">
            <div class="container">
                <h2 data-aos="fade-up" v-html="pageData.acf.about_big_text"></h2>
            </div>
        </section>

        <section class="aboutcon_sec" v-if="pageData.acf.about_slider_with_text.length">
            <div class="container">
                <div class="aboutcont_slide">
                    <div class="item" v-for="(sliderTextItem, sliderTextIndex) in pageData.acf.about_slider_with_text" :key="sliderTextIndex">
                        <div class="row">
                            <div class="col-md-6">
                                <img :src="sliderTextItem.left_image" alt="">
                            </div>
                            <div class="col-md-6 align-self-center">
                                <div class="aboutcont_slide--cap">
                                    <h3 v-html="sliderTextItem.title"></h3>
                                    <div v-html="sliderTextItem.content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ONE SLIDE -->
        <section class="oneslide_sec">
            <div class="container">
                <h2 data-aos="fade-right" v-html="pageData.acf.big_slider_top_text"></h2>
                <div class="oneslide-slide" v-if="pageData.acf.big_image_slider.length">
                    <div class="item" v-for="(sliderImgItem, sliderImgIndex) in pageData.acf.big_image_slider" :key="sliderImgIndex">
                        <img :src="sliderImgItem.slider_image" alt="" >
                    </div>
                </div>
                <span class="pagingInfo" v-if="pageData.acf.big_image_slider.length"></span>
                <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-if="pageData.acf.big_image_slider.length">
                    <span class="slider__label sr-only"></span>
                </div>
            </div>
        </section>

        <!-- OUR DEPARTMENTS -->
        <section class="our_departments" v-match-heights="{ el: [ '.department-blk' ] }">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" data-aos="fade-up">
                        <span class="subtitle">{{ optionData.department_section.department_section_title }}</span>
                        <h2 v-html="optionData.department_section.department_section_sub_title"></h2>
                    </div>
                </div>
                <div class="departments_slide" v-if="optionData.department_section.department_section_list.length">
                    <div class="item" v-for="(deptItem, deptIndex) in optionData.department_section.department_section_list" :key="deptIndex">
                        <div class="department-blk" data-aos="fade-up" data-aos-duration="1000">
                            <img :data-src="deptItem.department_list_image" alt="" class="lazy-load">
                            <h4>{{ deptItem.department_list_title }}</h4>
                            <div class="department_cap">
                                <span>{{ deptItem.department_list_title }}</span>
                                <ul v-if="deptItem.department_list_links.length">
                                    <li v-for="(deptListItem, deptListIndex) in deptItem.department_list_links" :key="deptListIndex">
                                        <a :href="deptListItem.department_link">{{ deptListItem.department_name }}</a>
                                    </li>
                                </ul>
                                <a :href="deptItem.show_case_link" class="btn">Show Cases</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         <!-- TESTIMONIALS -->
        <section class="testimonial_sec" v-if="pageData.acf.testimonial_slider.length">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="testimonial-slide" data-aos="zoom-in">
                            <div class="item" v-for="(testimonialItem, testimonialIndex) in pageData.acf.testimonial_slider" :key="testimonialIndex">
                                <h6 v-html="testimonialItem.testimonial_text"></h6>
                                <p v-html="testimonialItem.testimonial_author"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- BIKING BORDERS -->
        <section class="biking_borders">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 order-md-1 order-2" data-aos="fade-left">
                        <img :data-src="pageData.acf.biking_border_section.biking_left_image" alt="" class="lazy-load">
                        <a :href="pageData.acf.biking_border_section.biking_case_link" class="btn d-md-none">{{ pageData.acf.biking_border_section.biking_case_link_text }}</a>
                    </div>
                    <div class="col-md-5 align-self-center order-1" data-aos="fade-right">
                        <span class="subtitle">{{ pageData.acf.biking_border_section.biking_small_title }}</span>
                        <h2 v-html="pageData.acf.biking_border_section.biking_main_text"></h2>
                        <div v-html="pageData.acf.biking_border_section.biking_content"></div>
                        <a :href="pageData.acf.biking_border_section.biking_case_link" class="btn d-none d-md-block">{{ pageData.acf.biking_border_section.biking_case_link_text }}</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
	data() {
        return {
            pageData: {},
            optionData: {},
        }
    },
    mounted() {
        this.$gradientcss( 'section.about_banner', true );
        this.$gradientcss( '.oneslide-slide .item' );
    	this.$lazyloader();
		this.$departments_slide();
        this.$aboutcont_slide();
        this.$testimonial_slide();
        this.$oneslide_slide();
    },
    async asyncData ( context ) {
        let [getData,getOptionData] = await Promise.all([
            context.app.$axios.get( '/wp/v2/pages/11' )
            .catch((error) => {
                console.log( error );
            }),
            context.app.$axios.get( '/acf/v3/options/options' )
            .catch((error) => {
                console.log( error );
            })
        ])
        return {
            pageData: getData.data,
            optionData: getOptionData.data.acf
        }
    },
	updated () {
        this.$gradientcss( 'section.about_banner', true );
        this.$gradientcss( '.oneslide-slide .item' );
		this.$lazyloader();
		this.$departments_slide();
        this.$aboutcont_slide();
        this.$testimonial_slide();
        this.$oneslide_slide();
	}
}
</script>