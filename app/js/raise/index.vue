<template lang="html">
    <div>
        <Heador/>
        <Slider/>	
        <Footer cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Slider from './rslider.vue';
export default {
	components:{
		Heador,
		Slider,
		Footer,
		Navbar,

	}
}
</script>

<style lang="scss" module>
</style>

<style lang="scss">
	.mfooter{
		margin-top:0 !important;
		ul{
			li:first-child{
				display:none;
			}
		}
	}
</style>
