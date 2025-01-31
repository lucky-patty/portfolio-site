<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>PW.</title>
</svelte:head>

<!-- Layout for normal PC / Ipad -->
<div class="flex hidden h-screen w-screen flex-row lg:flex">
	<div class="flex h-full w-1/4 flex-col items-center justify-center gap-5 bg-[#2A2A2A] px-5 py-5">
		<div class="flex h-1/5 md:w-full xl:w-4/5 3xl:w-3/5 flex-col justify-center py-5">
			<p class=" text-[#F4EFEF] text-3xl xl:text-5xl 3xl:text-6xl">Pattarathon W.</p>
			<p class="text-2xl text-[#ADA5A5] xl:text-3xl 3xl:text-4xl">Software Engineer</p>
		</div>
		<div class="h-2/5 md:w-full  xl:w-4/5 3xl:w-3/5 flex flex-col">
			<p class="w-full h-1/5 2xl:text-4xl font-bold text-[#ADA5A5]">Explore</p>
			<div class="w-full h-1/5 flex flex-row items-center gap-5">
				<div class="w-1/5 h-4/5 bg-pink-500"></div>
				<p class="w-4/5 h-4/5 flex items-center  2xl:text-4xl text-[#F4EFEF] font-bold">Home</p>
			</div>
			<div class="w-full h-1/5 flex flex-row items-center gap-5 ">
				<div class="w-1/5 h-4/5 bg-pink-500"></div>
				<p class="w-4/5 h-4/5 flex items-center  2xl:text-4xl text-[#F4EFEF] font-bold">Experience</p>
			</div>
			<div class="w-full h-1/5 flex flex-row items-center gap-5 ">
				<div class="w-1/5 h-4/5 bg-pink-500"></div>
				<p class="w-4/5 h-4/5 flex items-center  2xl:text-4xl text-[#F4EFEF] font-bold">Projects</p>
			</div>
			<div class="w-full h-1/5 flex flex-row items-center gap-5">
				<div class="w-1/5 h-4/5 bg-pink-500"></div>
				<p class="w-4/5 h-4/5 flex items-center  2xl:text-4xl text-[#F4EFEF] font-bold">About</p>
			</div>
			
		</div>
		<div class="h-2/5 md:w-full xl:w-4/5 3xl:w-3/5 bg-green-500"></div>
	</div>
	<div class="h-full w-3/4 bg-[#212121] px-5 py-5">
		{@render children()}
	</div>
</div>

<!-- Layout for mobile -->
<div class="flex h-screen w-screen flex-col lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
	<div class="h-4/5 w-full bg-[#212121] px-5 py-5">
		{@render children()}
	</div>
	<!-- Menu -->
	<div class="h-1/5 w-full bg-[#2A2A2A]"></div>
</div>
