<script lang="ts">
	import '../app.css';
	import externalIcon from '$lib/icons/external-link.svg';
	import { page } from '$app/state';
	import LayoutIcon from '$lib/components/LayoutIcon.svelte';
	import MobileLayoutMenu from '$lib/components/MobileLayoutMenu.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>PW. Portfolio</title>
</svelte:head>

<!-- Layout for normal PC / Ipad -->
<div class="flex hidden h-screen w-screen flex-row lg:flex">
	<div class="flex h-full w-1/4 flex-col items-center justify-center gap-5 bg-[#2A2A2A] px-5 py-5">
		<div class="flex h-1/5 flex-col justify-center py-5 md:w-full xl:w-4/5 3xl:w-3/5">
			<p class=" text-3xl text-[#F4EFEF] xl:text-5xl 3xl:text-6xl">Pattarathon W.</p>
			<p class="text-2xl text-[#ADA5A5] xl:text-3xl 3xl:text-4xl">Software Engineer</p>
		</div>
		<div class="flex h-2/5 flex-col md:w-full xl:w-4/5 3xl:w-3/5">
			<p class="h-1/5 w-full font-bold text-[#ADA5A5] md:text-3xl 2xl:text-4xl">Explore</p>
			<div class="flex w-full md:h-1/5">
				<a class="flex h-full w-full flex-row items-center gap-5" href="/">
					{#if page.url.pathname === '/'}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'home'} color={'#F4EFEF'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#F4EFEF] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Home
						</p>
					{:else}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'home'} color={'#6A6A6A'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Home
						</p>
					{/if}
				</a>
			</div>
			<div class="flex w-full md:h-1/5">
				<a class="flex h-full w-full flex-row items-center gap-5" href="/experience">
					{#if page.url.pathname === '/experience'}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'exp'} color={'#F4EFEF'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#F4EFEF] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Experience
						</p>
					{:else}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'exp'} color={'#6A6A6A'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Experience
						</p>
					{/if}
				</a>
			</div>
			<div class="flex w-full md:h-1/5">
				<a class="flex h-full w-full flex-row items-center gap-5" href="/project">
					{#if page.url.pathname === '/project'}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'project'} color={'#F4EFEF'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#F4EFEF] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Project
						</p>
					{:else}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'project'} color={'#6A6A6A'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							Project
						</p>
					{/if}
				</a>
			</div>
			<div class="flex w-full md:h-1/5">
				<a class="flex h-full w-full flex-row items-center gap-5" href="/about">
					{#if page.url.pathname === '/about'}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'about'} color={'#F4EFEF'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#F4EFEF] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							About
						</p>
					{:else}
						<div class="flex h-2/4 w-1/5 justify-center">
							<LayoutIcon icon={'about'} color={'#6A6A6A'} />
						</div>
						<p
							class="flex h-4/5 w-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl xl:text-2xl 3xl:text-4xl"
						>
							About
						</p>
					{/if}
				</a>
			</div>
		</div>
		<div class="flex h-2/5 flex-col md:w-full xl:w-4/5 3xl:w-3/5">
			<p class="flex h-1/5 w-full items-center font-bold text-[#ADA5A5] md:text-3xl 2xl:text-4xl">
				Contact
			</p>
			<div class="flex h-1/4 w-full">
				<a
					class="flex h-full w-full flex-row items-center gap-5"
					target="_blank"
					href="mailto:luck.wtj@gmail.com"
				>
					<div class="flex h-2/5 w-1/5 justify-center">
						<LayoutIcon icon={'contact'} color={'#6A6A6A'} />
					</div>
					<p
						class="flex h-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl 2xl:text-2xl 3xl:text-4xl"
					>
						Contact
					</p>
					<div class="flex h-4/5 w-1/5 items-center justify-center">
						<img class="h-2/4 w-2/4" src={externalIcon} alt="external-icon" />
					</div>
				</a>
			</div>
			<div class="flex h-1/4 w-full flex-row items-center gap-5">
				<a
					class="flex h-full w-full flex-row items-center gap-5"
					target="_blank"
					href="https://www.linkedin.com/in/pattarathon-watanakij-10856a121/"
				>
					<div class="flex h-2/5 w-1/5 justify-center">
						<LayoutIcon icon={'linkedin'} color={'#6A6A6A'} />
					</div>
					<p
						class="flex h-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl 2xl:text-2xl 3xl:text-4xl"
					>
						LinkedIn
					</p>
					<div class="flex h-4/5 w-1/5 items-center justify-center">
						<img class="h-2/4 w-2/4" src={externalIcon} alt="external-icon" />
					</div>
				</a>
			</div>
			<div class="flex h-1/4 w-full flex-row items-center gap-5">
				<a
					class="flex h-full w-full flex-row items-center gap-5"
					target="_blank"
					href="https://github.com/lucky-patty"
				>
					<div class="flex h-2/5 w-1/5 justify-center">
						<LayoutIcon icon={'github'} color={'#6A6A6A'} />
					</div>
					<p
						class=" flex h-4/5 items-center font-bold text-[#6A6A6A] md:text-3xl 2xl:text-2xl 3xl:text-4xl"
					>
						GitHub
					</p>
					<div class="flex h-4/5 w-1/5 items-center justify-center">
						<img class="h-2/4 w-2/4" src={externalIcon} alt="external-icon" />
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="h-full w-3/4 bg-[#212121] px-5 py-5">
		{@render children()}
	</div>
</div>

<!-- Layout for mobile -->
<div class="flex h-screen w-screen flex-col bg-[#212121] lg:hidden xl:hidden 2xl:hidden 3xl:hidden">
	<div class="flex h-[90%] w-full flex-col bg-[#212121] px-2 lg:px-5 lg:py-5">
		{@render children()}
	</div>
	<!-- Menu -->
	<div class="fixed bottom-0 left-0 z-40 h-[10%] w-full bg-[#212121]">
		<div
			class="flex h-full w-full flex-row items-center justify-between gap-1 rounded-t-3xl bg-[#2A2A2A] py-2"
		>
			{#if page.url.pathname === '/'}
				<a class="h-full w-full " href="/">
					<MobileLayoutMenu icon={'home'} color={'#F4EFEF'} />
				</a>
			{:else}
				<a class="h-full w-full " href="/">
					<MobileLayoutMenu icon={'home'} color={'#6A6A6A'} />
				</a>
			{/if}

			{#if page.url.pathname === '/experience'}
			<a class="h-full w-full " href="/experience">
				<MobileLayoutMenu icon={'exp'} color={'#F4EFEF'} />
			</a>
			{:else}
			<a class="h-full w-full " href="/experience">
				<MobileLayoutMenu icon={'exp'} color={'#6A6A6A'} />
			</a>
			{/if}

			{#if page.url.pathname === '/project'}
			<a class="h-full w-full " href="/project">
				<MobileLayoutMenu icon={'project'} color={'#F4EFEF'} />
			</a>
			{:else}
			<a class="h-full w-full " href="/project">
				<MobileLayoutMenu icon={'project'} color={'#6A6A6A'} />
			</a>
			{/if}

			{#if page.url.pathname === '/about'}
			<a class="h-full w-full " href="/about">
				<MobileLayoutMenu icon={'about'} color={'#F4EFEF'} />
			</a>
			{:else}
			<a class="h-full w-full " href="/about">
				<MobileLayoutMenu icon={'about'} color={'#6A6A6A'} />
			</a>
			{/if}

			{#if page.url.pathname === '/contact'}
			<a class="h-full w-full " href="/contact">
				<MobileLayoutMenu icon={'contact'} color={'#F4EFEF'} />
			</a>
			{:else}
			<a class="h-full w-full " href="/contact">
				<MobileLayoutMenu icon={'contact'} color={'#6A6A6A'} />
			</a>
			{/if}
		</div>
	</div>
</div>

<style>
</style>
