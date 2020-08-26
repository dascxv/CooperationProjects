<template>
	<div>
		<div class="top">
			<img src="/切图/logo.png" class="log"/>
			<p class="xg">效果图</p>
			<div class="icon">
				<div class="my">
					<i class="iconfont icon-user"></i>
					<p>我的</p>
				</div>
				
				<div class="her">
					<i class="iconfont icon-protection-fill"></i>
					<p>我的</p>
				</div>
			</div>
		</div>
		
		<div class="body">
			<ul class="u1">
				<li>户型</li>
				<li>区域</li>
				<li>风格</li>
				<li>
					<i class="iconfont icon-search search" ></i>
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>
					<img src="public/切图/10quoted.jpg"/>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	@import '/iconfont/iconfont.css';
	
	.top{
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.log{
		width: 130px;
	}
	.xg{
		font-size: 20px;
	}
	p{
		margin: 0;
	}
	.icon{
		display: flex;
		align-items: center;
	}
	.icon div{
		text-align: center;
		margin: 0;
	}
	.icon div p{
		font-size: 12px;
		color: gainsboro;
		margin-top: 5px;
	}
	.icon div i{
		font-size: 20px;
	}
	.my{
		margin-right: 5px;
	}
	.u1{
		display: flex;
		list-style: none;
		justify-content: space-around;
		padding: 5px 0;
		font-size: 20px;
	}
	.search{
		color: #07C160;
	}
</style>
