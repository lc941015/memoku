<template>
  <div class="apptList">
		<div class="list-item" style="background-image:url(/static/imgs/list-id.png)" @click="goAppt"></div>
		<div class="list-item" style="background-image:url(/static/imgs/list-pp.png)" @click=""></div>
		<div class="list-item" style="background-image:url(/static/imgs/list-mearry.png)" @click=""></div>
		<div class="list-item" style="background-image:url(/static/imgs/list-table.png)" @click=""></div>
		<div class="list-item" style="background-image:url(/static/imgs/list-graduation.png)" @click=""></div>
  </div>
</template>

<script>
import { pageGo } from '@/utils/index'
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  methods:{
  	goAppt(){
  		pageGo('/agreement')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function rem( $px) {
  @return $px*(1/100)*1rem;
}
.apptList{
  .list-item{
  	width:100%;
  	height:rem(300);
  	background-size:100% 100%;
  }
}

</style>
