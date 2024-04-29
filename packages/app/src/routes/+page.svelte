<script lang="ts">
	import Help from '../components/help.svelte';
</script>

<div class="flex flex-col justify-center items-center gap-10 w-full h-full">
	<h1 class="text-4xl">tictactoe+</h1>
	<div class="flex flex-col gap-4">
		<a class="btn btn-primary" href="/play"> Single Player </a>
		<Help />
		<button class="btn btn-primary opacity-0" disabled>Multiplayer</button>
	</div>
</div>