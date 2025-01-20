<script lang="ts">
	export let serie: any = null;
</script>

{#if serie}
	<a
		href="/series/{serie.id}"
		class="flex w-full flex-col overflow-hidden rounded-md border border-zinc-800
    "
	>
		<img src={serie.imagem} alt="Imagem Série" class="h-96 object-cover" />
		<div
			class="
            flex flex-col gap-2 p-5
        "
		>
			<span class="text-2xl font-black">{serie.titulo}</span>
			<span class="text-sm text-zinc-400 text-justify">{serie.descricao}</span>
			<button class="botao azul">Leia Mais</button>
		</div>
	</a>
{/if}
