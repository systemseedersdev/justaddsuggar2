<template>
    <section class="contact_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1 data-aos="fade-up" v-html="optionData.contact_form_title"></h1>
                    <div class="row" v-if="wperrors">
                        <ul class="errors">
                            <li v-for="wperror in wperrors" :key="wperror">
                                {{wperror}}
                            </li>
                        </ul>
                    </div>
                    <div class="contact_form" >
                        <form action="" method="post" @submit.prevent="submitContactForm" novalidate="true">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inp" class="inp">
                                        <input type="text" placeholder="Full Name" name="full_name" v-model="form.full_name" :class="{'error': errors.full_name }" @blur="validateForm">
                                        <span class="label">Full Name</span>
                                        <span class="border"></span>
                                    </label>
                                    <span v-show="errors.full_name" class="text-danger">{{ errors.full_name }}</span>
                                </div>
                                <div class="col-md-6">
                                    <label for="inp" class="inp">
                                        <input type="text" placeholder="Company Name" name="company_name" v-model="form.company_name" @blur="validateForm">
                                        <span class="label">Company Name</span>
                                        <span class="border"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inp" class="inp">
                                        <input type="text" placeholder="Phone Number" name="phone_number" v-model="form.phone_number" @blur="validateForm">
                                        <span class="label">Phone Number</span>
                                        <span class="border"></span>
                                    </label>
                                </div>
                                <div class="col-md-6">
                                    <label for="inp" class="inp">
                                        <input type="email" placeholder="Email" name="email" v-model="form.email" :class="{'error': errors.email }" @blur="validateForm">
                                        <span class="label">Email</span>
                                        <span class="border"></span>
                                    </label>
                                    <span v-show="errors.email" class="text-danger">{{ errors.email }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 textarea-blk">
                                    <label for="inp" class="inp">
                                        <textarea name="message" placeholder="Write something sweet…" v-model="form.message" :class="{'error': errors.message }" @blur="validateForm"></textarea>
                                        <span class="label">Write something sweet…</span>
                                        <span class="border"></span>
                                    </label>
                                    <span v-show="errors.message" class="text-danger">{{ errors.message }}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" v-html="optionData.contact_form_agreement_text"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <span :class="{ 'submit-btn': true, 'disabled': Object.keys(errors).length > 0 }">
                                        <input value="Send message" type="submit" :disabled="Object.keys(errors).length > 0">
                                        <div class="loader" v-if="loader"></div>
                                    </span>
                                </div>
                            </div>

                            <transition name="fade" :duration="{ enter: 800, leave: 1000 }">
                                <div class="row" v-if="success">
                                    <div class="col-md-12">
                                        <div class="alert alert-success" role="alert">{{ message }}</div>
                                    </div>
                                </div>
                            </transition>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <h2 data-aos="fade-up" v-html="optionData.contact_page_address_title"></h2>
                    <div class="address_info">
                        <p><span>{{ optionData.contact_details.contact_title }}</span></p>
                        <p>
                            <a :href="'tel:'+optionData.contact_details.contact_phone_number">{{ optionData.contact_details.phone_number_text }}</a><br/>
                            <a :href="'mailto:'+optionData.contact_details.contact_email_address">{{ optionData.contact_details.contact_email_address }}</a>
                        </p>
                        <p v-html="optionData.contact_details.contact_address"></p>
                        <p>
                            <a href="https://www.google.com/maps/place/Justaddsugar+GmbH/@53.5705708,9.9858016,17z/data=!4m12!1m6!3m5!1s0x47b185cbbe6488af:0x3fbfc8b0dc9c59e5!2sJustaddsugar+GmbH!8m2!3d53.5705676!4d9.9879903!3m4!1s0x47b185cbbe6488af:0x3fbfc8b0dc9c59e5!8m2!3d53.5705676!4d9.9879903" target="_blank">Google Maps</a>
                        </p>
                    </div>
                    <div class="social-icons">
                        <a :href="optionData.social_links.instagram_link" target="_blank" aria-label="Instagram" rel="noopener"><img src="images/instagram.svg" alt="Instagram"></a>
                        <a :href="optionData.social_links.facebook_link" target="_blank" aria-label="Facebook" rel="noopener"><img src="images/facebook.svg" alt="Facebook"></a>
                        <a :href="optionData.social_links.youtube_link" target="_blank" aria-label="YouTube" rel="noopener"><img src="images/youtube.svg" alt="YouTube"></a>
                        <a :href="optionData.social_links.vimeo_link" target="_blank" aria-label="Vimeo" rel="noopener"><img src="images/vimeo.svg" alt="Vimeo"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

const validateEmptyText = fieldText => {
    if ( !fieldText.length ) {
        return { valid: false, error: 'This field is required.' };
    }
    return { valid: true, error: null };
};

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
    data() {
        return {
            pageData: {},
            optionData: {},
            form: {
                full_name: '',
                company_name: '',
                phone_number: '',
                email: '',
                message: '',
            },
            errors: {},
            wperrors: [],
            valid: true,
            success: false,
            loader: false,
            message: null
        }
    },
    async asyncData ( context ) {
        let [getOptionData] = await Promise.all([
            context.app.$axios.get( '/acf/v3/options/options' )
            .catch((error) => {
                console.log( error );
            })
        ])
        return {
            optionData: getOptionData.data.acf
        }
    },
    methods: {
        submitContactForm: function(e) {
            console.log( 'Contact Form Submitted' );
            this.errors = {};
            this.wperrors = [];

            const validName = validateEmptyText( this.form.full_name );
            if( !validName.valid ) {
                this.errors.full_name = validName.error;
            }
            if ( this.valid ) {
                this.valid = validName.valid;
            }

            const validEmail = validateEmail( this.form.email );
            if( !validEmail.valid ) {
                this.errors.email = validEmail.error;
            }
            if ( this.valid ) {
                this.valid = validEmail.valid;
            }

            const validMessage = validateEmptyText( this.form.message );
            if( !validMessage.valid ) {
                this.errors.message = validMessage.error;
            }
            if ( this.valid ) {
                this.valid = validMessage.valid;
            }

            console.log(this.valid);
            if ( this.valid ) {
                console.log( 'form is valid', this.form );
                this.loader = true;
                this.$axios.post( 'send-contact-form/v1/contact', this.form )
                .then( ( response ) => {
                    console.log( response );
                    this.wperrors = [];
                    this.loader = false;

                    this.form.full_name = '';
                    this.form.company_name = '';
                    this.form.phone_number = '';
                    this.form.email = '';
                    this.form.message = '';

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
                
            //e.preventDefault();
        },
        validateForm() {
            const validName = validateEmptyText( this.form.full_name );
            if( validName.valid ) {
                this.$delete( this.errors, 'full_name' );
            }

            const validEmail = validateEmail( this.form.email );
            if( validEmail.valid ) {
                this.$delete( this.errors, 'email' );
            }

            const validMessage = validateEmptyText( this.form.message );
            if( validMessage.valid ) {
                this.$delete( this.errors, 'message' );
            }

            if( validName.valid && validEmail.valid && validMessage.valid ) {
                this.valid = true;
            }
        }
    }
}
</script>

<style scoped>
    .submit-btn.disabled {
        filter: alpha(opacity=75);
        -webkit-box-shadow: none;
        box-shadow: none;
        opacity: .75;
    }
    .submit-btn.disabled input[type="submit"] {
        cursor: not-allowed;
    }
    .loader {
        position: absolute;
        right:25%;
        top:32%;
        border-width: 4px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.5) rgb(255, 255, 255) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.5);
        border-image: initial;
        border-radius: 50%;
        display: inline-block;
        width: 1.33em;
        height: 1.33em;
        z-index: 2;
        margin-left: 6px;
        vertical-align: text-top;
        animation: 1.50s linear 0s infinite normal none running spin;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .alert-success {
        margin-top: 20px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0
    }
</style> 