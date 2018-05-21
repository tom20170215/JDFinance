<template>
	<Panel title="理财精选" :class="$style.panel">
		<section :class="$style.content">
			<dl :class="item" v-for="item in items" :key="item.title">
				<dt>{{title}}<span class="red">{{sub}}</span></dt>
				<dd>{{rate}}</dd>
				<dd>{{text}}</dd>
			</dl>
		</section>
	</Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {

  components:{
  	Panel,
  },

  data () {
    return {
    	items:[{
    		 title:"定期理财",
    		 sub:"理财首选",
    		 rate:"5.60%",
    		 text:"历史年回报率",
    	}], 
    }
  }
}
</script>

<style lang="scss" module>
	@import "../../css/element.scss" 
</style>