<template>
	<Panel title="神劵满" :class="$style.panel">
		<section :class="$style.content">
			<img src="//img12.360buyimg.com/jrpmobile/jfs/t17458/106/2515774543/37592/beef5db/5af952b3N0a4eb5ea.jpg?width=750&height=280" alt="">
		</section>
	</Panel>
</template>

<script>
import Panel from '../core/panel.vue';
export default {
	components:{
		Panel,
	},
  
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
	@include panel;
	>h4{
		display:none;
	}
	.content{
		img{
			width:100%;
			height:230px;
			display:block;
		}
	}
}
</style>