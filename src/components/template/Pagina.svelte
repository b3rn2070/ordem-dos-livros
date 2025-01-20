<script>
	import AreaLateral from './AreaLateral.svelte';
	import Cabecalho from './Cabecalho.svelte';
	import Rodape from './Rodape.svelte';
</script>

<div
	class="
        flex min-h-screen flex-col
        bg-zinc-900 text-white
    "
>
	<Cabecalho />
	<div class="flex flex-1 max-w-7xl mx-auto w-full p-5 gap-5">
		<main class="flex-1">
			<slot></slot>
		</main>
		<AreaLateral />
	</div>
	<Rodape />
</div>
