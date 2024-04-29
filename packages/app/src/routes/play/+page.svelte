<script lang="ts">
	import Dialog from '../../components/dialog.svelte';
	import Help from '../../components/help.svelte';
	import { Confetti } from 'svelte-confetti';

	let board = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];

	let turn: 'X' | 'O' = 'X';
	let queueX: [number, number][] = [];
	let queueO: [number, number][] = [];

	let showConfetti = false;

	let winnerDialog: HTMLDialogElement;

	$: winner = checkWinner(board);
	$: winner && onWin();

	let nextToPopX: [number, number] | undefined = undefined;
	let nextToPopO: [number, number] | undefined = undefined;

	function onWin() {
		winnerDialog.showModal();
		showConfetti = true;
	}

	function reset() {
		board = Array.from({ length: 3 }, () => ['', '', '']);
		queueO = [];
		queueX = [];
		turn = 'X';
		showConfetti = false;
	}

	function checkWinner(board: string[][]) {
		for (const row of board) {
			if (row[0] && row.every((cell) => cell === row[0])) {
				return row[0];
			}
		}
		for (let i = 0; i < board[0].length; i++) {
			const col = board.map((row) => row[i]);
			if (col[0] && col.every((cell) => cell === col[0])) {
				return col[0];
			}
		}
		const center = board[1][1];
		if (center) {
			if (
				(board[0][0] === center && center === board[2][2]) ||
				(board[0][2] === center && center === board[2][0])
			) {
				return center;
			}
		}
		return null;
	}

	function place(x: number, y: number): void {
		if (board[x][y] !== '') {
			return;
		}
		const queue = turn === 'X' ? queueX : queueO;
		if (queue.length === 3) {
			const [popX, popY] = queue.shift()!;
			board[popX][popY] = '';
		}
		queue.push([x, y]);
		board[x][y] = turn;
		turn = turn === 'X' ? 'O' : 'X';
		nextToPopX = determinePop(queueX);
		nextToPopO = determinePop(queueO);
	}

	function determinePop(queue: [number, number][]) {
		if (queue.length === 3) {
			return queue[0];
		}
	}
</script>

{#if showConfetti}
	<div class="fixed top-[-50px] left-0 h-full w-full flex justify-center overflow-hidden pointer-events-none z-100">
		<Confetti x={[-5, 5]} y={[0, 0.1]} infinite fallDistance="100vh" />
	</div>
{/if}
<div class="flex justify-center items-center flex-col h-screen">
	<h1 class="text-4xl">tictactoe+</h1>
	<div class="flex flex-col h-[60%] justify-center content-center max-w-xs">
		<h2
			class="text-2xl text-center mb-10"
			class:text-info={turn === 'X'}
			class:text-success={turn === 'O'}
		>
			{turn} is playing
		</h2>
		<div class="self-center">
			<div class="text-3xl max-w-xs">
				{#each board as row, x}
					<div class="flex -mb-2 gap-2">
						{#each row as col, y}
							<button
								on:click={() => place(x, y)}
								class="btn btn-ghost text-4xl bold flex items-center justify-center w-20 mb-4 h-20 border-white border-2 rounded-xl hover:bg-opacity-25 select-none duration-300"
							>
								<span
									class:text-info={board[x][y] === 'X'}
									class:text-success={board[x][y] === 'O'}
									class:opacity-30={(nextToPopX &&
										nextToPopX[0] === x &&
										nextToPopX[1] === y &&
										turn === 'X') ||
										(nextToPopO && nextToPopO[0] === x && nextToPopO[1] === y && turn === 'O')}
									class="pointer-events-none select-none"
								>
									{board[x][y]}
								</span>
							</button>
						{/each}
					</div>
				{/each}
			</div>
			<div class="w-full mt-10 flex flex-col gap-3">
				<a class="btn btn-primary" href="..">Exit</a>
				<Help />
			</div>
		</div>
	</div>
</div>


<Dialog bind:dialog={winnerDialog} on:buttonClicked={() => reset()}>
	<p slot="content" class="text-xl">{winner} won!</p>
	<slot slot="button">New game</slot>
</Dialog>

<style>
    /* Add this CSS to reset the :active pseudo-class */
    @media (hover:none) {
        /* Apply styles only on devices that do not support hover */
        .btn:active {
            background-color: transparent;
        }
    }
</style>