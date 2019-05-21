<template>
	<div>
		<section class="about_banner">
            <span class="lazy-load" data-background-image="/images/default-tag-banner.jpg">
                <img data-src="/images/default-tag-banner.jpg" alt="Tag Banner" class="lazy-load" style="opacity: 0;">
            </span>
        </section>
        <section class="projects_sec">
            <div class="container">
            	<div id="filters" class="button-group filters-button-group">
	            	<div class="row">
	            		<div class="col-md-12">
							<h3>Blog</h3>            			
	            		</div>
	            	</div>
	            </div>	
            </div>
        </section>
	</div>
</template>

<script type="text/javascript">

export default {
	mounted() {
		this.$gradientcss( 'section.about_banner', true );
		this.$lazyloader();
	}
}

</script>