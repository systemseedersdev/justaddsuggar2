<template>
	<div>
		<!-- Mobile Nav  -->
        <div id="mobile-menu">

            <!-- trigger -->
            <a href="javascript:void(0)" :class="[{open: isMenuOpen},'menu-trigger']" @click="menuToggleClass()" aria-label="Mobile Menu Trigger Button"> <span>
                    <!-- trigger button --></span> </a>
            <div :class="[{open: isMenuOpen},'mob-navbar']">
                <nuxt-link to="/" class="mob_logo" aria-label="Justaddsugar" exact><img :src="optionData.site_logos.site_logo_black" alt="Justaddsugar"></nuxt-link>
                <div class="mob-slide">
                    <div class="item">
                        <ul>
                            <li><nuxt-link to="/" @click.native="menuToggleClass()" exact>Home</nuxt-link></li>
                            <li><nuxt-link to="/cases" @click.native="menuToggleClass()" exact>Our Work</nuxt-link></li>
                            <li><nuxt-link to="/about-us" @click.native="menuToggleClass()" exact>About Us</nuxt-link></li>
                            <li><nuxt-link to="/blog" @click.native="menuToggleClass()" exact>Blog</nuxt-link></li>
                            <li><nuxt-link to="/contact" @click.native="menuToggleClass()" exact>Contact</nuxt-link></li>
                        </ul>
                        <div class="social-icons">
                            <a :href="optionData.social_links.instagram_link" target="_blank" aria-label="Instagram" rel="noopener"><img src="/images/instagram.svg" alt="Instagram"></a>
                            <a :href="optionData.social_links.facebook_link" target="_blank" aria-label="Facebook" rel="noopener"><img src="/images/facebook.svg" alt="Facebook"></a>
                            <a :href="optionData.social_links.youtube_link" target="_blank" aria-label="YouTube" rel="noopener"><img src="/images/youtube.svg" alt="YouTube"></a>
                            <a :href="optionData.social_links.vimeo_link" target="_blank" aria-label="Vimeo" rel="noopener"><img src="/images/vimeo.svg" alt="Vimeo"></a>
                        </div>
                    </div>
                    <div class="item">
                        <div class="Office_hamburg">
                            <h6>{{ optionData.contact_details.contact_title }}</h6>
                            <p v-html="optionData.contact_details.contact_address"></p>
                            <p>
                            	<a :href="'tel:'+optionData.contact_details.contact_phone_number">{{ optionData.contact_details.phone_number_text }}</a>
                            	<a :href="'mailto:'+optionData.contact_details.contact_email_address">{{ optionData.contact_details.contact_email_address }}</a>
                            </p>
                            <nuxt-link to="/contact" class="drop-btn" @click.native="menuToggleClass()">Drop us a line</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="site-menu" id="site-menu">
            <div class="site-menu-background js-close-menu"></div>
            <!-- Hamburger menu -->
            <button class="site-menu-sidebar js-open-menu" @click="rightMenuToggle()" aria-label="Sidebar Button">
                <span class="line line-1"></span>
                <span class="line line-2"></span>
                <span class="line line-3"></span>
            </button>

            <div class="site-menu-inner">
                <div class="site-menu-container">
                    <!-- Header Menu-->
                    <div class="site-menu-header">
                        <span class="site-menu-suptitle">
                            <span class="text"><img :src="optionData.site_logos.site_logo_black" alt="Justaddsugar"></span>
                        </span>
                        <button type="button" class="site-menu-close js-close-menu" @click="rightMenuToggle()">
                            <span class="u-visually-hidden">Close menu</span>
                            <span class="line line-1"></span>
                            <span class="line line-2"></span>
                        </button>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <!-- Navigation -->
                            <ul>
                                <li class="site-navigation-item">
                                	<nuxt-link to="/" class="site-navigation-link " @click.native="rightMenuToggle()" exact>
                                        <span class="link-text">Home</span>
                                    </nuxt-link>
                                </li>
                                <li class="site-navigation-item">
                                    <nuxt-link to="/cases" class="site-navigation-link " @click.native="rightMenuToggle()" exact>
                                        <span class="link-text">Our Work</span>
                                    </nuxt-link>
                                </li>
                                <li class="site-navigation-item">
                                    <nuxt-link to="/about-us" class="site-navigation-link " @click.native="rightMenuToggle()" exact>
                                        <span class="link-text">About Us</span>
                                    </nuxt-link>
                                </li>
                                <li class="site-navigation-item">
                                    <nuxt-link to="/blog" class="site-navigation-link " @click.native="rightMenuToggle()" exact>
                                        <span class="link-text">Blog</span>
                                    </nuxt-link>
                                </li>
                                <li class="site-navigation-item">
                                    <nuxt-link to="/contact" class="site-navigation-link " @click.native="rightMenuToggle()" exact>
                                        <span class="link-text">Contact</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="Office_hamburg">
                                <h6>{{ optionData.contact_details.contact_title }}</h6>
                                <p v-html="optionData.contact_details.contact_address"></p>
                                <p>
                                    <a :href="'tel:'+optionData.contact_details.contact_phone_number">{{ optionData.contact_details.phone_number_text }}</a>
                            		<a :href="'mailto:'+optionData.contact_details.contact_email_address">{{ optionData.contact_details.contact_email_address }}</a>
                                </p>
                                <nuxt-link to="/contact" class="drop-btn" @click.native="menuToggleClass()">Drop us a line</nuxt-link>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="social-icons">
                                <a :href="optionData.social_links.instagram_link" target="_blank" aria-label="Instagram" rel="noopener"><img src="/images/instagram.svg" alt="Instagram"></a>
                                <a :href="optionData.social_links.facebook_link" target="_blank" aria-label="Facebook" rel="noopener"><img src="/images/facebook.svg" alt="Facebook"></a>
                                <a :href="optionData.social_links.youtube_link" target="_blank" aria-label="YouTube" rel="noopener"><img src="/images/youtube.svg" alt="YouTube"></a>
                                <a :href="optionData.social_links.vimeo_link" target="_blank" aria-label="Vimeo" rel="noopener"><img src="/images/vimeo.svg" alt="Vimeo"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <!-- Header -->
        <header id="header" :class="[{fixed: isHeaderFixed}]">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" v-if="$nuxt.$route.name == 'contact'">
                    	<nuxt-link to="/" class="logo" aria-label="Justaddsugar" exact><img :src="optionData.site_logos.site_logo_black" alt="Justaddsugar"></nuxt-link>
                    </div>
                    <div class="col-md-12" v-if="$nuxt.$route.name != 'contact'">
                        <nuxt-link to="/" class="logo" aria-label="Justaddsugar" exact><img :src="optionData.site_logos.site_logo_white" alt="Justaddsugar"></nuxt-link>
                    </div>
                </div>
            </div>
        </header>

        <div class="right_menu">
            <ul>
                <li><nuxt-link to="/" exact>Home</nuxt-link></li>
                <li><nuxt-link to="/cases">Our Work</nuxt-link></li>
                <li><nuxt-link to="/about-us" exact>About Us</nuxt-link></li>
                <li><nuxt-link to="/career" exact>Career</nuxt-link></li>
                <li><nuxt-link to="/contact" exact>Contact</nuxt-link></li>
                <li><nuxt-link to="/blog" exact>Blog</nuxt-link></li>
            </ul>
        </div>
	</div>
</template>

<script>

export default {
	props: [ 'optionData' ],
	mounted() {
		const elBody = document.body;
		this.$toggleClass( 'is-open', elBody );
    	this.headerHeightPX = document.getElementsByTagName( 'header' )[0].offsetHeight;
		this.headerHeight();
		window.addEventListener( 'scroll', this.headerHeight );
		window.addEventListener( 'resize', this.headerHeight );

	},
	data() {
		return {
      		headerHeightPX: 0,
			isMenuOpen: false,
			isHeaderFixed: false,
		}
	},
	methods: {
		menuToggleClass(event) {
            const elBody = document.body;
            const elHtml = document.getElementsByTagName( 'html' )[0];
            if( this.isMenuOpen ) {
                this.isMenuOpen = false;
                this.$toggleClass('scroll-hidden', elBody);
                this.$toggleClass('scroll-hidden', elHtml);
            } else {
                this.isMenuOpen = true;
                this.$toggleClass('scroll-hidden', elBody);
                this.$toggleClass('scroll-hidden', elHtml);
            }
        },
        rightMenuToggle(event) {
        	const elBody = document.body;
        	this.$toggleClass( 'is-menu-open', elBody );
        },
        headerHeight: function (evt, el) {
        	this.headerHeightPX = document.getElementsByTagName( 'header' )[0].offsetHeight;
        	if( window.scrollY > this.headerHeightPX ) {
        		this.isHeaderFixed = true;
      		} else {
        		this.isHeaderFixed = false;
      		}
        }
	},
	updated() {
		this.$mob_slide();
	}
}

</script>