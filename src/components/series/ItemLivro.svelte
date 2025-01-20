<script lang="ts">
	import { IconBrandAmazon } from '@tabler/icons-svelte';
	export let livro: any = null;
</script>

{#if livro}
	<a href={livro.link} target="_blank" class="flex flex-col overflow-hidden rounded-md bg-zinc-800">
		<img src={livro.imagem} alt="imagem do livro" class="h-96" />
		<div class="flex flex-1 flex-col gap-2 p-5">
			<span class="flex-1 text-center font-bold">{livro.titulo}</span>
			<button class="botao azul">
				<span> Link do Livro </span>
				<IconBrandAmazon size={24} />
			</button>
		</div>
	</a>
{/if}
