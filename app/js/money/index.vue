<template lang="html">
    <div>
        <Heador/>
        <Slider/>	
        <Ada/>
        <Money/>
        <Adb/>
        <Finance/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Slider from './mslider.vue';
import Ada from './ada.vue';
import Money from './money.vue';
import Adb from './adb.vue';
import Finance from './finance.vue';
export default {
	components:{
		Heador,
		Slider,
		Ada,
		Money,
		Adb,
		Finance,
		Footer,
		Navbar,

	}
}
</script>

<style lang="scss" module>
</style>
