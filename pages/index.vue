<template>
    <div>
        <!-- banner area part -->
        <section class="home_banner bkg_video_play">
            <video autoplay loop muted preload="metadata" class="lozad-video">
                <source :data-src="pageData.acf.banner.banner_video_file" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
            </video>
            <div class="container">
                <div class="home_banner-cap">
                    <h1 v-html="bannerContent"></h1>  
                </div>
            </div>

        </section>

        <!-- SOCIAL MEDIA -->
        <section class="socialmedia_sec">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <span class="socialmedia-img" data-aos="fade-up"><img :data-src="pageData.acf.social_media_section.social_media_left_image" alt="" class="lazy-load"></span>
                    </div>
                    <div class="col-md-5 align-self-center">
                        <span class="subtitle" data-aos="fade-up" data-aos-duration="1000">{{ pageData.acf.social_media_section.social_media_small_title }}</span>
                        <h2 data-aos="fade-up" data-aos-duration="1500" v-html="pageData.acf.social_media_section.social_media_main_title"></h2>
                        <div data-aos="fade-up" data-aos-duration="2000" v-html="pageData.acf.social_media_section.social_media_content"></div>
                        <a :href="pageData.acf.social_media_section.social_media_case_link" data-aos="fade-up" data-aos-duration="2500" class="show-btn">{{ pageData.acf.social_media_section.social_media_case_link_text }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- SOME MORE -->
        <section class="somemore_sec" v-if="optionData.justadd_facts_block.fact_list.length" v-match-heights="{ el: [ '.somemore_slide .item' ] }">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" data-aos="fade-up" data-aos-duration="1000">
                        <span class="subtitle">{{ optionData.justadd_facts_block.sub_title }}</span>
                        <h2 v-html="optionData.justadd_facts_block.title"></h2>
                    </div>
                </div>
                <div class="somemore_slide">
                    <div class="item" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" v-for="(factItem, factIndex) in optionData.justadd_facts_block.fact_list" :key="factIndex">
                        <a href="javascript:void(0);" class="somemore-blk">
                            <h3>{{ factItem.fact_big_number_title }}</h3>
                            <h6>{{ factItem.fact_sub_title }}</h6>
                            <div v-html="factItem.fact_content"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Clients -->
        <section class="client_sec" v-if="pageData.acf.client_section.client_logos.length">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4>{{ pageData.acf.client_section.client_section_title }}</h4>
                        <ul data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <li v-for="(clientItem, clientIndex) in pageData.acf.client_section.client_logos" :key="clientIndex">
                                <img :data-src="clientItem.client_logo_image" alt="" class="lazy-load">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- HIGHLIGHTS OF WORK -->
        <section class="heighlights_sec" v-if="pageData.acf.highlighted_cases_section.high_case_list.length">
            <div class="container">
                <div class="heighlights-blk">
                    <h2 data-aos="fade-right" data-aos-duration="1500" v-html="pageData.acf.highlighted_cases_section.high_main_text"></h2>
                    <nuxt-link :to="pageData.acf.highlighted_cases_section.high_case_link" class="cases-btn"  data-aos="fade-right" data-aos-duration="2000">{{ pageData.acf.highlighted_cases_section.high_case_link_text }}</nuxt-link>
                </div>
            </div>
        </section>

        <!-- POST SLIDER -->
        <section class="postslide_sec postvideo_slides" v-if="pageData.acf.highlighted_cases_section.high_case_list.length">
            <div class="container">
                <div class="post_slide">
                    <div class="item" v-for="(highCaseListItem, highCaseListIndex) in pageData.acf.highlighted_cases_section.high_case_list" :key="highCaseListIndex">
                        
                        <img :src="highCaseListItem.acf.case_thumbnail_videos.case_portrait_image" alt="" class="jsugar-visible jsugar_post_thumb" v-if="highCaseListItem.acf.case_thumbnail_videos.case_portrait_image">

                        <img :src="highCaseListItem.post_data._embedded['wp:featuredmedia']['0'].media_details.sizes['case_portrait_image'].source_url" alt="" class="jsugar-visible jsugar_post_thumb" v-else>
                        
                        <video class="postvideo jsugar-hidden lozad-video" loop muted preload="metadata" v-if="highCaseListItem.acf.case_thumbnail_videos.case_portrait_video">
                            <source :data-src="highCaseListItem.acf.case_thumbnail_videos.case_portrait_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40" >
                        </video>
                        
                        <div class="postslide-cap">
                            <h5><nuxt-link :to="'/cases/'+highCaseListItem.post_name">{{ highCaseListItem.post_title }}</nuxt-link></h5>
                            <div class="postslide-tags" v-if="highCaseListItem.post_data.case_tag_data.length">
                                <a :href="'/cases/tag/'+taglist.slug" v-for="(taglist, tagindex) in highCaseListItem.post_data.case_tag_data.slice(0,3)" :key="tagindex">#{{ taglist.name }}</a>
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

        <!-- INSTAGRAM TV -->
        <section class="instagram_tv">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 align-self-center" data-aos="fade-left" data-aos-duration="2500">
                        <span class="subtitle">{{ pageData.acf.instagram_tv_section.igtv_small_title }}</span>
                        <h2 v-html="pageData.acf.instagram_tv_section.igtv_main_text"></h2>
                    </div>
                    <div class="col-md-5">
                        <div class="device_blk">
                            <div class="device_blk-inn">
                                <video id="devicevideo" loop preload="metadata" class="lozad-video">
                                    <source :data-src="pageData.acf.instagram_tv_section.igtv_mobile_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
                                </video>
                            </div>
                            <button class="mob_play_video">Play/Pause</button>
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

        <!-- SHOWREEL -->
        <section class="showreel_sec">
            <div class="container">
                <span class="subtitle">{{ pageData.acf.showreel_section.showreel_small_title }}</span>
                <h2 v-html="pageData.acf.showreel_section.showreel_main_text"></h2>

                <div class="videocontainer" data-aos="zoom-in">
                    <video id="desktopvideo" loop preload="metadata" class="lozad-video">
                        <source :data-src="pageData.acf.showreel_section.showreel_video" type="video/mp4" codecs="avc1.42E01E, mp4a.40">
                    </video>
                    <div class="videocontainer-cap">
                        <span>{{ pageData.acf.showreel_section.showreel_video_text }}</span>
                        <button class="desk_play_video">Play/Pause</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    mounted() {
        console.log(this.pageData);
        console.log(this.optionData);
        this.bannerContent = this.pageData.acf.banner.banner_text_line_1 + this.pageData.acf.banner.banner_text_line_2 + this.pageData.acf.banner.banner_text_line_3;
        this.$gradientcss( 'section.home_banner' );
        this.$gradientcss( '.device_blk-inn' );
        this.$lazyloader();
    },
    data() {
        return {
            pageData: {},
            optionData: {},
            bannerContent: null,
        }
    },
    async asyncData ( context ) {
        let [getData,getOptionData] = await Promise.all([
            context.app.$axios.get( '/wp/v2/pages/9' )
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
    methods: {

    },
    updated () {
        this.$lazyloader();
        this.$bgVideoPlay();
        this.$somemore_slide();
        this.$departments_slide();
        this.$post_slide();
        this.$play_video_hover();
        this.$mob_video_play();
        this.$desk_video_play();
    }

}
</script>
