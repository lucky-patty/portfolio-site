<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>PW.</title>
</svelte:head>

<!-- Layout for normal PC / Ipad -->
<div class="hidden lg:flex w-screen h-screen flex flex-row">
	<div class="w-1/4 h-full bg-[#2A2A2A]">
	</div>
	<div class="w-3/4 h-full bg-[#212121] py-5 px-5">
		{@render children()}
	</div>
</div>

<!-- Layout for mobile -->
<div class="flex lg:hidden xl:hidden 2xl:hidden 3xl:hidden w-screen h-screen flex-col">
	<div class="w-full h-4/5 bg-[#212121] py-5 px-5">
		{@render children()}
	</div>
	<!-- Menu -->
	 <div class="w-full h-1/5 bg-[#2A2A2A]">

	 </div>
</div>