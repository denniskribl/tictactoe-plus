<script lang="ts">
    import Dialog from './dialog.svelte'
	let dialog: HTMLDialogElement;
</script>

<button class="btn btn-outline" on:click={() => dialog.showModal()}>How to play</button>
<Dialog bind:dialog>
	<span slot="title">How to play</span>
	<span slot="content">
		It's just like regular Tic Tac Toe, but here's the twist: <br /> <br />
		You can only place up to three Xs or Os on the board at a time. Once you place your fourth symbol,
		the first one you placed will vanish
	</span>
</Dialog>