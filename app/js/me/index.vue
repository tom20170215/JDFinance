<template lang="html">
    <div>
        <Account/>	
        <Ada/>
        <List/>
        <Footer cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Footer from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Account from './account.vue';
import Ada from './ada.vue';
import List from './list.vue';
export default {
	components:{
		Account,
		Ada,
		List,
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
