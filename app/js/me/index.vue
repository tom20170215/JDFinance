<template lang="html">
    <div>
        <Account/>	
        <Ada/>
        <List/>
        <Verification/>
        <Help/>
        <Navbar/>
    </div>
</template>

<script>
import Navbar from '../public/navbar.vue';
import Account from './account.vue';
import Ada from './ada.vue';
import List from './list.vue';
import Verification from './verification.vue';
import Help from './help.vue';
export default {
	components:{
		Account,
		Ada,
		List,
		Verification,
		Help,
		Navbar,

	}
}
</script>

<style lang="scss" module>
</style>


