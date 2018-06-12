<template>
	<Panel title="我的" :class="$style.panel">
		<ul :class="$style.content">
			<li :class="$style.item" v-for="item in items" :key="item.content">
				<div :style="{background:'url(' + item.img + ') no-repeat left center'}">{{item.content}}</div>
				<span>{{item.msg}}</span>
			</li>
		</ul>
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
    	items:[{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70",
    		content:"我的资产",
    		msg:"查看全部资产 >",
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70",
    		content:"我的优惠券",
    		msg:"查看全部 >",
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
    		content:"我的金币",
    		msg:"赚金币兑好物 >",    		
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
    		content:"我的金条",
    		msg:"查看额度 >",    		
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70",
    		content:"我的借钱",
    		msg:"查看全部产品 >",    		
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70",
    		content:"我的白条",
    		msg:"去提额 >",    		
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t9649/171/293125950/1453/4cf0cc2/59cb6162N9c71da0f.png?width=70&height=70",
    		content:"我的众筹",
    		msg:"查订单/物流 >",    		
    	},{
    		img:"//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70",
    		content:"我的保障",
    		msg:"全方位保障 >",    		
    	}]
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
			@include flex;
			.item{
				@include flex(row);
				justify-content:space-around;
				align-items:center;
				height:112px;
				>div{
					width:170px;
					height:112px;
					line-height:112px;
					font-size:32px;
					color:#333;
					font-family:PingFangSC-Medium;
					text-align:left;
					padding-left:100px;
				}
				>span{
					font-size:28px;
					color:#999;
					width:200px;
					height:112px;
					line-height:112px;
					text-align:right;
				}
			}
		}
	}
</style>