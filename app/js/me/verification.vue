<template>
	<Panel title="实名认证" :class="$style.panel">
		<div :class="$style.content">实名认证</div>
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
			height:112px;
			background:url("//img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70") no-repeat 40px center;
			line-height:112px;
			font-size:32px;
			font-family:PingFangSC-Medium;
			padding-left:140px;
		}
	}
</style>