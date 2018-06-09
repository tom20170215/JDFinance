<template>
	<Panel title="帮助中心" :class="$style.panel">
		<div :class="$style.content">帮助中心</div>
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
		margin-bottom:120px;
		.content{
			height:112px;
			line-height:112px;
			background:url("//img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70") no-repeat 40px center;
			font-size:32px;
			font-family:PingFangSC-Medium;
			padding-left:140px;						
		}
	}
</style>