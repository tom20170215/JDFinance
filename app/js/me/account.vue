<template>
	<Panel title="个人账户" :class="$style.panel">
		<section :class="$style.content">
			<router-link :to="{name:'home'}">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
			</router-link>
			<span>会员福利 ></span>
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
		margin:0 !important;
		>h4{
			display:none;
		}
		.content{
			@include flex(row);
			justify-content:space-around;
			align-items:center;
			height:130px;
			img{
				display:block;
				margin-right:250px;
			}
			span{
				display:block;
				font-size:28px;
				color:#999;
			}
		}
	}
</style>