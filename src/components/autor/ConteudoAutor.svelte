<script lang="ts">
	import { marked } from "marked";

    export let autor: any = null
</script>

{#if autor} 
    <div class="felx flex-col gap-5">
        <img src="{autor.imagem}" 
            alt="Foto do Autor" 
            class="h-96 object-cover rounded-md"
        />
        <article class="prose lg:prose-xl prose-invert pt-2">
            {@html marked.parse(autor.biografia)}
        </article>
    </div>
{/if}