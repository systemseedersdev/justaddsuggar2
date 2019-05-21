<template>
	<section class="partners_sec">
        <div class="container">
            <div class="partners-slide" data-aos="zoom-out-up">
                <div class="item" v-for="(partnerItem, partnerIndex) in partnerData" :key="partnerIndex">
                    <a :href="partnerItem.partner_link" target="_blank" rel="noopener"><img :src="partnerItem.partner_logo_image" alt=""></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
	props: [ 'partnerData' ],
    mounted () {
    	this.$partners_slide();
    },
    updated() {
    	this.$partners_slide();
    }
}
</script>