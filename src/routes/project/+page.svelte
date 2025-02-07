<script lang="ts">
	import externalIcon from '$lib/icons/external-link.svg';
	import bonkPreview from '$lib/images/project-bonk.png';
	import bbPreview from '$lib/images/project-bb.png';
	import ddPreview from '$lib/images/project-dd.png';
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
		<p class="w-full text-6xl font-bold text-[#F4EFEF]">Projects</p>
		<p class="h-2/4 w-full text-3xl font-thin text-[#ADA5A5]">
			Over the past few years, I have built and deployed multiple projects across various platforms.
			These projects range from automation tools to interactive user experiences, leveraging
			seamless integrations and scalable architectures to enhance engagement and functionality.
		</p>
	</div>
	<div class="flex h-3/4 w-full flex-col gap-5">
		<div class="flex h-[10%] w-[90%] flex-row items-center justify-between">
			{#if firstExp}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					1
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					1
				</div>
			{/if}
			<div class="h-[10%] w-[40%] bg-[#ADA5A5]"></div>
			{#if secondExp}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					2
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					2
				</div>
			{/if}
			<div class="h-[10%] w-[40%] bg-[#ADA5A5]"></div>
			{#if thirdExp}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#F4EFEF]"
				>
					3
				</div>
			{:else}
				<div
					class="flex h-full w-[5%] items-center justify-center rounded-[50%] bg-[#292929] font-bold text-[#6A6A6A]"
				>
					3
				</div>
			{/if}
		</div>
		<div class="h-[65vh] w-full gap-20 overflow-y-scroll" bind:this={box} on:scroll={parseScroll}>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%] flex-row items-center rounded-3xl bg-[#292929] px-5 py-5">
					<div class="flex h-full w-3/5 flex-col items-start justify-start">
						<div class=" h-1/5 w-full">
							<a
								class="flex h-full w-full flex-row items-center gap-5"
								target="_blank"
								href="https://t.me/BonkArcadeBot"
							>
								<p class="flex h-full items-center text-5xl font-bold text-[#F4EFEF]">BONKDAO</p>
								<img class="h-1/3" src={externalIcon} alt={'link'} />
							</a>
						</div>
						<div class="flex h-[70%] w-full flex-col py-5">
							<p class="flex h-full w-full items-start justify-center text-2xl text-[#D3D3D3]">
								I developed a Telegram Mini App that allows users to play arcade games and win
								prizes in a win-to-earn model. The app also features a staking system, enabling
								users to stake native tokens for higher rewards, with support for Binance Smart
								Chain and Avalanche. To enhance user privacy and security, the app automatically
								generates a wallet for each user, ensuring seamless and decentralized transactions.
							</p>
						</div>
						<div
							class="flex h-[10%] w-full flex-row items-center justify-between rounded-xl bg-[#212121] px-5"
						>
							<span class="full w-1/5 font-bold text-[#6A6A6A]">Status</span>
							<span class="full w-1/5 text-end font-bold text-[#F4EFEF]">Online</span>
						</div>
					</div>
					<div class=" flex h-full w-2/5 flex-col">
						<a
							class="flex h-full items-center justify-center"
							target="_blank"
							href="https://t.me/BonkArcadeBot"
						>
							<img class="h-[90%]" src={bonkPreview} alt={'bonk'} />
						</a>
					</div>
				</div>
			</div>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%] flex-row items-center rounded-3xl bg-[#292929] px-5 py-5">
					<div class="flex h-full w-3/5 flex-col items-start justify-start">
						<div class=" h-1/5 w-full">
							<a
								class="flex h-full w-full flex-row items-center gap-5"
								target="_blank"
								href="https://drunkdude.co"
							>
								<p class="flex h-full items-center text-5xl font-bold text-[#F4EFEF]">Drunkdude</p>
								<img class="h-1/3" src={externalIcon} alt={'link'} />
							</a>
						</div>
						<div class="flex h-[70%] w-full flex-col py-5">
							<p class="flex h-full w-full items-start justify-center text-2xl text-[#D3D3D3]">
								I developed an eCommerce platform specializing in selling a wide range of beverages.
								Built with Elixir to leverage high concurrency and scalability, the platform ensures
								seamless performance even under heavy traffic. Additionally, it integrates with
								crypto wallets, allowing users to connect their wallets for secure and decentralized
								transactions.
							</p>
						</div>
						<div
							class="flex h-[10%] w-full flex-row items-center justify-between rounded-xl bg-[#212121] px-5"
						>
							<span class="full w-1/5 font-bold text-[#6A6A6A]">Status</span>
							<span class="full w-1/5 text-end font-bold text-[#F4EFEF]">Online</span>
						</div>
					</div>
					<div class=" flex h-full w-2/5 flex-col">
						<a
							class="flex h-full items-center justify-center"
							target="_blank"
							href="https://drunkdude.co"
						>
							<img class="h-3/4" src={ddPreview} alt={'dd'} />
						</a>
					</div>
				</div>
			</div>
			<div class="flex h-[65vh] w-[90%] flex-col items-center justify-center">
				<div class="flex h-4/5 w-[90%] flex-row items-center rounded-3xl bg-[#292929] px-5 py-5">
					<div class="flex h-full w-3/5 flex-col items-start justify-start">
						<div class=" h-1/5 w-full">
							<a
								class="flex h-full w-full flex-row items-center gap-5"
								target="_blank"
								href="https://baitbuy.com"
							>
								<p class="flex h-full items-center text-5xl font-bold text-[#F4EFEF]">Baitbuy</p>
								<img class="h-1/3" src={externalIcon} alt={'link'} />
							</a>
						</div>
						<div class="flex h-[70%] w-full flex-col py-5">
							<p class="flex h-full w-full items-start justify-center text-2xl text-[#D3D3D3]">
								I developed a platform where users can write product reviews and earn rewards in the
								form of tokens. The platform aggregates user-generated data to train an AI-powered
								agent specialized in analyzing targeted products, helping users make informed
								decisions while leveraging price optimization for better deals.
							</p>
						</div>
						<div
							class="flex h-[10%] w-full flex-row items-center justify-between rounded-xl bg-[#212121] px-5"
						>
							<span class="full w-1/5 font-bold text-[#6A6A6A]">Status</span>
							<span class="full w-1/5 text-end font-bold text-[#F4EFEF]">Online</span>
						</div>
					</div>
					<div class=" flex h-full w-2/5 flex-col">
						<a
							class="flex h-full items-center justify-center"
							target="_blank"
							href="https://baitbuy.com"
						>
							<img class="h-3/4" src={bbPreview} alt={'bb'} />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
