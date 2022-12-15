<script>
	import { onMount } from "svelte";
	import config from "./config";

	let canvas = null;
	let ctx = null;
	const imgWidth = 800;
	const imgHeight = 750;

	const posX = -250 + (config?.position?.[0] ?? 0);
	const poxY = -100 + (config?.position?.[1] ?? 0);

	let currentFloor = "gf";
	let isHasPod = false;
	let theme = "cold";
	let interior = "standart";

	onMount(() => {
		canvas = document.getElementById("viewport");
		ctx = canvas.getContext("2d");

		canvas.width = 320;
		canvas.height = 550;

		updateCanvas("gf");
	});

	const loadFloor = () => {
		const floorImg = new Image();
		const imgData = config.floorsImages[interior][theme][currentFloor];
		floorImg.src = imgData.src;

		floorImg.onload = function () {
			if (imgData.opacity < 1) {
				ctx.save();
				ctx.globalAlpha = imgData.opacity;
				ctx.drawImage(
					floorImg,
					posX + (imgData?.position?.[0] ?? 0),
					poxY + (imgData?.position?.[1] ?? 0),
					imgData.width ?? imgWidth,
					imgData.height ?? imgHeight
				);
				ctx.restore();
			} else {
				ctx.drawImage(
					floorImg,
					posX + (imgData?.position?.[0] ?? 0),
					poxY + (imgData?.position?.[1] ?? 0),
					imgData.width ?? imgWidth,
					imgData.height ?? imgHeight
				);
			}
		};
	};

	const clearCanvas = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	const updateCanvas = () => {
		const background = new Image();
		const imgSrc = config.plotsImages.default.src;
		const imgSrcWithPod = config.plotsImages.withPod.src;
		background.src = isHasPod ? imgSrcWithPod : imgSrc;
		const podStatus = isHasPod ? "withPod" : "default";
		const imgData = config.plotsImages[podStatus];

		background.onload = function () {
			clearCanvas();
			if (currentFloor !== "gf") {
				ctx.save();
				ctx.globalAlpha = config.gfBloor;
				ctx.drawImage(
					background,
					posX + (imgData?.position?.[0] ?? 0),
					poxY + (imgData?.position?.[1] ?? 0),
					imgData.width ?? imgWidth,
					imgData.height ?? imgHeight
				);
				ctx.restore();
			} else if (imgData.opacity < 1) {
				ctx.save();
				ctx.globalAlpha = imgData.opacity;
				ctx.drawImage(
					background,
					posX + (imgData?.position?.[0] ?? 0),
					poxY + (imgData?.position?.[1] ?? 0),
					imgData.width ?? imgWidth,
					imgData.height ?? imgHeight
				);
				ctx.restore();
			} else {
				ctx.drawImage(
					background,
					posX + (imgData?.position?.[0] ?? 0),
					poxY + (imgData?.position?.[1] ?? 0),
					imgData.width ?? imgWidth,
					imgData.height ?? imgHeight
				);
			}

			loadFloor();
		};
		ctx?.scale(config?.zoom, config?.zoom);
	};

	const togglePod = () => {
		isHasPod = !isHasPod;
	};

	const changeFloor = (floor) => {
		currentFloor = floor;
	};

	const toggleTheme = () => {
		theme = theme === "cold" ? "warm" : "cold";
	};

	const toggleInterior = () => {
		interior = interior === "standart" ? "premium" : "standart";
	};

	$: updateCanvas(), isHasPod, currentFloor, theme, interior;
</script>

<main>
	<canvas id="viewport" />
	<div class="floorswitcher button-container">
		<button on:click={() => changeFloor("gf")}>GF</button>
		<button on:click={() => changeFloor("ff")}>1F</button>
	</div>
	<div class="podSwitcher button-container">
		<button on:click={togglePod}>{isHasPod ? "Remove" : "Add"} POD</button>
	</div>
	<div class="themeSwitcher button-container">
		<button on:click={toggleTheme}
			>change to {theme === "cold" ? "warm" : "cold"} theme</button
		>
	</div>
	<div class="themeSwitcher button-container">
		<button on:click={toggleInterior}
			>change to {interior === "standart" ? "premium" : "standart"} interior</button
		>
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
	}
	canvas#viewport {
		position: relative;
		border: 1px solid black;
	}
	.button-container {
		padding: 5px 10px;
		width: max-content;
	}
</style>
