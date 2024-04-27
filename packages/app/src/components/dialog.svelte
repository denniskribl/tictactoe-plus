<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let dialog: HTMLDialogElement;

	const dispatch = createEventDispatcher();

	function buttonClicked() {
		dispatch('buttonClicked');
	}
</script>

<dialog bind:this={dialog} class="modal max-w-[100vw]">
	<div class="modal-box break-words">
		<h3 class="font-bold text-lg"><slot name="title"></slot></h3>
		<p class="py-4"><slot name="content"></slot></p>
		<div class="modal-action">
			<form method="dialog">
				<button on:click={buttonClicked} class="btn"><slot name="button">Close</slot></button>
			</form>
		</div>
	</div>
</dialog>
