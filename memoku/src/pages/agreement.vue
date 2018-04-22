<template>
  <div class="agreement">
		<h3>预约项目说明</h3>
		<ul>
			<li>预约成功后订单不可更改，如需取消订单可能产生定金损失，退款规则如下：
				<p>距拍摄时间24小时以上取消订单，退100%定金；距拍摄时间不足24小时取消订单，不可退定金。（取消订单须订单中留言，退款由系统自动判定通过原支付途径退还）</p>
			</li>
			<li>如未按预定日期到店，订单则视为放弃，定金不予退还。</li>
			<li>我们会提供精修后的.jpg格式底片，不提供原始拍摄文件。</li>
			<li>除登记照外，暂时仅支持单人预约，如需多人拍摄请分别预约。</li>
		</ul>
		<label for="">
			<input v-model='isCheck' type="checkbox" >我同意此协议
		</label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    	isCheck:false,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@function rem( $px) {
  @return $px*(1/100)*1rem;
}
.agreement{
	margin:0 36px;
  h3{
  	font-size:32px;
  	text-align:center;
  }
	ul{
		li{
			font-size:20px;
			line-height:24px;
		}
	}
}

</style>
