<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Finance/>
        <More/>
        <Footer/>	
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Slider from './islider.vue';
import Finance from './finance.vue';
import More from './more.vue';

export default {
	components:{
		Heador,
		Slider,
		Footer,
		Navbar,
		Finance,
		More,
	}
}
</script>

<style lang="scss" module>
</style>


