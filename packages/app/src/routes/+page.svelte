<script lang="ts">
	import Dialog from '../components/dialog.svelte';
	let dialog: HTMLDialogElement;
</script>

<div class="flex flex-col justify-center items-center gap-10 w-full h-full">
	<h1 class="text-4xl">tictactoe+</h1>
	<div class="flex flex-col gap-2">
		<a class="btn btn-primary" href="/play"> Single Player </a>
		<button class="btn btn-primary" on:click={() => dialog.showModal()}>How to play</button>
		<button class="btn btn-primary opacity-0" disabled>Multiplayer</button>
	</div>
</div>

<Dialog bind:dialog>
	<span slot="title">How to play</span>
	<span slot="content">
		It's just like regular Tic Tac Toe, but here's the twist: <br /> <br />
		You can only place up to three Xs or Os on the board at a time. Once you place your fourth symbol,
		the first one you placed will vanish
	</span>
</Dialog>
