<template>
    <div>
        <!-- FOLLOW US ON INSTAGRAM -->
        <section class="follow_instagram gray_bg">
            <div class="container">
                <h2 data-aos="fade-up">Follow us on <span>Instagram</span></h2>
                <div class="instagram-slide" v-if="instagrams.length">
                    <div class="item" data-aos="zoom-in-up" v-for="(instaItem, instaIndex) in instagrams" :key="instaIndex">
                        <img :data-src="instaItem.images.standard_resolution.url" alt="" class="lazy-load">
                    </div>
                </div>
            </div>
        </section>


        <!-- PARTNERS LOGOS -->
        <partnerSection :partnerData="optionData.footer_partner_section" />

        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-5" data-aos="fade-right" >
                        <span class="foo-title" v-html="optionData.footer_newsletter_title"></span>
                        <div class="dropline_form">
                            <form action="" method="post" @submit.prevent="submitFooterContactForm" novalidate="true">
                                <input placeholder="Drop us a line" type="text" aria-label="Newsletter Email" class="input_text" name="email" v-model="footerform.email" :class="{'error': errors.email }" @change="validateForm">
                                <button type="submit" :disabled="Object.keys(errors).length > 0">submit</button>
                                <span v-show="errors.email" class="text-danger">{{ errors.email }}</span>
                            </form>
                            <transition name="fade" :duration="{ enter: 800, leave: 1000 }">
                                <div class="row" v-if="success">
                                    <div class="col-md-12">
                                        <div class="alert alert-success" role="alert">{{ message }}</div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="col-md-4" data-aos="fade-up" >
                        <div class="foo-address">
                            <span class="foo-title1">{{ optionData.contact_details.contact_title }}</span>
                            <p><a :href="optionData.contact_details.address_google_map_link" target="_blank" aria-label="Google Map" rel="noopener" v-html="optionData.contact_details.contact_address"></a></p>

                            <a :href="'tel:'+optionData.contact_details.contact_phone_number" class="foo-link">{{ optionData.contact_details.phone_number_text }}</a>
                            <a :href="'mailto:'+optionData.contact_details.contact_email_address" class="foo-link">{{ optionData.contact_details.contact_email_address }}</a>
                        </div>
                    </div>
                    <div class="col-md-3" data-aos="fade-left" >
                        <div class="social-icons">
                            <a :href="optionData.social_links.instagram_link" target="_blank" aria-label="Instagram" rel="noopener"><img src="/images/Instagram-white.svg" alt="Instagram"></a>
                            <a :href="optionData.social_links.facebook_link" target="_blank" aria-label="Facebook" rel="noopener"><img src="/images/Facebook-white.svg" alt="Facebook"></a>
                            <a :href="optionData.social_links.youtube_link" target="_blank" aria-label="YouTube" rel="noopener"><img src="/images/Youtube-white.svg" alt="YouTube"></a>
                            <a :href="optionData.social_links.vimeo_link" target="_blank" aria-label="Vimeo" rel="noopener"><img src="/images/Vimeo-white.svg" alt="Vimeo"></a>
                        </div>
                        <div class="dropline_form dropline_form--mob">
                            <form action="" method="post" @submit.prevent="submitFooterContactForm" novalidate="true">
                                <input placeholder="Drop us a line" type="text" aria-label="Newsletter Email" class="input_text" name="email" v-model="footerform.email" :class="{'error': errors.email }" @change="validateForm">
                                <button type="submit" name="newsletter_submit" :disabled="Object.keys(errors).length > 0">submit</button>
                                <span v-show="errors.email" class="text-danger">{{ errors.email }}</span>
                            </form>
                            <transition name="fade" :duration="{ enter: 800, leave: 1000 }">
                                <div class="row" v-if="success">
                                    <div class="col-md-12">
                                        <div class="alert alert-success" role="alert">{{ message }}</div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <div class="row foo-bottom" data-aos="fade-up" data-aos-duration="1000" >
                    <div class="col-md-6">
                        <p v-html="new Date().getFullYear() + ' ' + optionData.copyright_text"></p>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li><a href="#">Imprint</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>

import partnerSection from '~/components/partnerslider.vue'

const validateEmail = email => {
    if ( !email.length ) {
        return { valid: false, error: 'This field is required.' };
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( !re.test( email ) ) {
        return { valid: false, error: 'Please, enter a valid email.' };
    }
    return { valid: true, error: null };
};

export default {
	props: [ 'optionData' ],
    components: {
        partnerSection
    },
	data() {
		return {
			access_token: '7676702935.88ad996.3584617320e54942bc1126776b75841e',
            url: 'https://api.instagram.com/v1/users/self/media/recent/',
            instagrams: [],
            error: false,
            footerform: {
                email: '',
            },
            errors: {},
            wperrors: [],
            valid: true,
            success: false,
            loader: false,
            message: null
		}
	},
    created() {
        this.getGrams();
    },
    mounted () {
        this.$lazyloader();
    },
    updated() {
        this.$lazyloader();
    },
    methods: {
        async getGrams() {
            await this.$axios.get(this.url + '?access_token=' + this.access_token + '&count=6')
            .then(({data}) => {
                this.instagrams = data.data
            })
            .catch(function (error) {
                console.log(error)
                this.error = true
            });
        },
        submitFooterContactForm: function(e) {
            console.log( 'Footer Contact Form Submitted' )
            this.errors = {};
            this.wperrors = [];

            const validEmail = validateEmail( this.footerform.email );
            if( !validEmail.valid ) {
                this.errors.email = validEmail.error;
            }
            if ( this.valid ) {
                this.valid = validEmail.valid;
            }

            if ( this.valid ) {
                console.log( 'form is valid', this.footerform );
                this.loader = true;
                this.$axios.post( 'send-contact-footerform/v1/contactfooter', this.footerform )
                .then( ( response ) => {
                    console.log( response );
                    this.wperrors = [];
                    this.loader = false;

                    this.footerform.email = '';

                    this.success = !this.success;
                    this.message = response.data.message;

                    setTimeout(() => this.success = !this.success, 5000);
                })
                .catch( ( error ) => {
                    this.wperrors = error.response.data.message;
                    this.loader = false;
                    console.log( 'errors exist', this.wperrors )
                });
            } else {
                console.log( 'errors exist', this.errors )
            }
        },
        validateForm() {
            const validEmail = validateEmail( this.footerform.email );
            if( validEmail.valid ) {
                this.$delete( this.errors, 'email' );
            }
        }
    }
}

</script>

<style scoped>
    .dropline_form form button:disabled {
        cursor: not-allowed;
    }
    .dropline_form .alert-success {
        margin-top: 10px;
    }
</style>