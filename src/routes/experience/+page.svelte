<script lang="ts">
	import { onMount } from 'svelte';
	let box: any;
	let yScroll = 0;
	let yHeight = 0;
	let yTop = 0;
	let firstExp = false;
	let secondExp = false;
	let thirdExp = false;

	function parseScroll() {
		yTop = box.scrollTop;
		yScroll = box.scrollHeight;
		yHeight = box.clientHeight;
		const thirdPage = yScroll - yHeight; // This is 3
		const secondPage = thirdPage / 2; // we assume that 100 is enough space to scroll;
		const firstPage = thirdPage / 3;
		if (yTop <= firstPage) {
			firstExp = true;
			secondExp = false;
			thirdExp = false;
		} else if (yTop <= thirdPage - 200 && yTop > firstPage) {
			// We assume that 200 is enough space for the scroll object
			firstExp = false;
			secondExp = true;
			thirdExp = false;
		} else if (yTop <= thirdPage - 100 && yTop > secondPage + 100) {
			// We assume that 100 is enough space to cover
			firstExp = false;
			secondExp = false;
			thirdExp = true;
		}
	}

	onMount(() => parseScroll());
</script>

<div class="flex h-full w-full flex-col gap-5 px-5 py-5">
	<div class="flex h-1/4 w-[90%] flex-col gap-10 py-5">
		<p class="w-full text-6xl 3xl:text-8xl font-bold text-[#F4EFEF]">Experience</p>
		<p class="h-2/4 w-full text-3xl 3xl:text-5xl font-thin text-[#ADA5A5]">
			I have built various software solutions, from websites to mobile apps, using diverse
			technologies like React, SvelteKit, Golang, and Kubernetes. My experience spans frontend,
			backend, and cloud infrastructure, leveraging CI/CD pipelines for scalable deployments.
		</p>
	</div>
	<div class="flex h-3/4 w-full flex-col gap-5">
		<div class="hidden h-[10%] w-full xl:w-[90%] xl:flex flex-row items-center justify-between">
			{#if firstExp}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					1
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl  items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					1
				</div>
			{/if}
			<div class="h-[10%] w-[40%] bg-[#ADA5A5]"></div>
			{#if secondExp}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl  items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					2
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl  items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					2
				</div>
			{/if}
			<div class="h-[10%] w-[40%] bg-[#ADA5A5]"></div>
			{#if thirdExp}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl  items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					3
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] md:w-[20%] md:text-xl 3xl:w-[4%] 3xl:text-3xl  items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					3
				</div>
			{/if}
		</div>
		<div class="h-[65vh] w-full gap-20 overflow-y-scroll" bind:this={box} on:scroll={parseScroll}>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%] md:w-full flex-col justify-center rounded-3xl bg-[#292929] px-5 py-10">
					<div class="flex h-1/5 w-full flex-row justify-between">
						<div class="h-full w-2/5 text-4xl md:text-4xl 3xl:text-6xl font-bold text-[#ADA5A5]">2023 - Present</div>
						<div class="h-full w-3/5 text-end md:text-4xl text-4xl 3xl:text-6xl font-bold text-[#F4EFEF]">
							Project Owner · BonkDAO
						</div>
					</div>
					<div class="flex h-3/5 w-full flex-col">
						<p class="h-full w-full text-3xl md:text-3xl 3xl:text-5xl text-[#D3D3D3]">
							I independently designed, developed, and launched a blockchain platform from the
							ground up, deploying on multiple networks, including Binance Smart Chain and TON. I
							handled everything—from smart contract development and full-stack implementation to
							marketing and community building. Through strategic growth initiatives, I scaled the
							project from zero users to 570 active participants and fostered a thriving community
							of over 2,500 members
						</p>
					</div>
					<div class="flex h-[10%] w-full flex-row justify-between gap-5">
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Solidity
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Ether.js
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl  items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							FunC
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl  items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							React
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							GoLang
						</div>
					</div>
				</div>
			</div>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%]  md:w-full flex-col justify-center rounded-3xl bg-[#292929] px-5 py-10">
					<div class="flex h-1/5 w-full flex-row justify-between">
						<div class="h-full w-2/5 text-4xl 3xl:text-6xl font-bold text-[#ADA5A5]">2018 - 2023</div>
						<div class="h-full w-3/5 text-end text-4xl 3xl:text-6xl font-bold text-[#F4EFEF]">
							Full-stack Dev · Twinmoon Studio
						</div>
					</div>
					<div class="flex h-3/5 w-full flex-col">
						<p class="h-full w-full text-3xl  3xl:text-5xl text-[#D3D3D3]">
							I design, develop, and automate websites and mobile applications while ensuring
							seamless functionality through rigorous testing. My role involves crafting scalable
							solutions, optimizing performance, and implementing automated workflows to enhance
							development efficiency and product reliability
						</p>
					</div>
					<div class="flex h-[10%] w-full flex-row justify-between gap-5">
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Node.JS
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							PostgreSQL
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Next.JS
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Elixir
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Flutter
						</div>
					</div>
				</div>
			</div>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%] md:w-full flex-col justify-center rounded-3xl bg-[#292929] px-5 py-10">
					<div class="flex h-1/5 w-full flex-row justify-between">
						<div class="h-full w-2/5 text-4xl 3xl:text-6xl font-bold text-[#ADA5A5]">2017 - 2018</div>
						<div class="h-full w-3/5 text-end text-4xl 3xl:text-6xl font-bold text-[#F4EFEF]">
							Embedded Engineer · AVIA Satcom
						</div>
					</div>
					<div class="flex h-3/5 w-full flex-col">
						<p class="h-full w-full text-3xl  3xl:text-5xl text-[#D3D3D3]">
							I developed software for embedded systems that controlled unmanned aircraft systems
							(UAS). My work involved designing, optimizing, and implementing low-level firmware and
							real-time applications to ensure precise control, stability, and efficiency of
							autonomous flight operations. I specialized in integrating sensor data processing,
							communication protocols, and fail-safe mechanisms to enhance system reliability and
							performance in critical environments
						</p>
					</div>
					<div class="flex h-[10%] w-full flex-row justify-between gap-5">
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							C++
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							Java
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							React.JS
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							MySQL
						</div>
						<div
							class="flex h-full w-1/5 3xl:text-3xl items-center justify-center rounded-2xl bg-[#212121] text-2xl text-[#ADA5A5]"
						>
							PHP
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
