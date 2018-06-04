<template>
	<Panel title="理财精选" :class="$style.panel">
		<section :class="$style.content">
			<div :class="$style.item">
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
				<div>
					<h4>月度理财</h4>
					<p>预期年化收益率4.50%</p>
				</div>
				<em>去赚钱 ></em>
			</div>
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
		.content{
			@include flex;
			.item{
			@include flex(row);
			>img{
				width:80px;
				height:88px;
			}
			}
		} 
	}
</style>