<script lang="ts">
	export let autor: any = null;
</script>

{#if autor}
	<a
		href="/autores/{autor.id}"
		class="relative flex flex-col overflow-hidden rounded-md border border-zinc-800"
	>
		<img src={autor.imagem} alt="Foto do Autor" class="h-96 object-cover" />
		<div
			class="
            absolute bottom-0 flex w-full justify-end bg-black/50 px-6 py-4
        "
		>
			<span class="text-2xl font-black">{autor.nome}</span>
		</div>
	</a>
{/if}
