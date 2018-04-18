<template>
	<Panel title="新手特权" :class="$style.panel">
		<section :class="$style.content">
			<div :class="$style.item">
				<h4>下载APP<span class="red">送888元礼包</span></h4>
				<p>新手专享</p>
				<img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
			</div>
			<div :class="$style.item">
				<ul>
					<li>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
						<h4>领128元新手礼包</h4>
						<p>立即开通</p>
					</li>
					<li>
						<img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
						<h4>打白<span class="red">享免息</span></h4>
						<p>立即开通享豪礼</p>
					</li>
				</ul>
			</div>
		</section>
	</Panel>	
</template>

<script>
import Panel from "../core/panel.vue"
export default {

  data () {
    return {

    }
  },
  components:{
  	Panel,
  }
}
</script>

<style lang="scss" module>
	@import '../../css/element.scss';
	.panel{
		@include panel;
		>h4{
			border-bottom:1px solid #ddd;
		}
		.content{
			@include list(row);
			.item{
				width:50%;
				box-sizing:border-box;
				&:first-child{
					padding:32px 20px;
					text-align:center;
				}
				h4{
					font-size:26px;
				}
			}
		}
	}
</style>