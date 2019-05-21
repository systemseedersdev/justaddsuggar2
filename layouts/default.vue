<template>
    <div id="wrapper">
        <headerSection :optionData="optionData"/>

        <nuxt />

        <footerSection :optionData="optionData"/>
    </div>
</template>

<script>
import headerSection from '~/components/header.vue'
import footerSection from '~/components/footer.vue'

export default {
    components: {
        headerSection,
        footerSection
    },
    mounted() {
        this.getOptionData();
        this.loadFontCss();
    },
    data() {
        return {
            optionData: {
                contact_details : {
                    address_google_map_link: "",
                    contact_address: "",
                    contact_email_address: "",
                    contact_phone_number: "",
                    contact_title: "",
                    phone_number_text: ""
                },
                copyright_text: "",
                footer_newsletter_title: "",
                social_links: {
                    instagram_link: "",
                    facebook_link: "",
                    youtube_link: "",
                    vimeo_link: ""
                },
                site_logos: {
                    site_logo_white: "/images/logo.png",
                    site_logo_black: "/images/logo1.png"
                },
                footer_partner_section: [{
                    partner_link: "",
                    partner_logo_image: ""
                }],
            },
        }
    },
    methods: {
        async getOptionData() {
            await this.$axios.get( '/acf/v3/options/options' )
            .then(response => {
                console.log(response.data.acf);
                this.optionData = JSON.parse(JSON.stringify(response.data.acf));
            })
            .catch((error) => {
                console.log( error );
            })
        },
        loadFontCss() {
            let file = document.createElement('link');
            file.rel = 'stylesheet';
            file.href = 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
            document.head.appendChild(file)
        }
    }
}
</script>