<script>
	import ItemSerie from "../components/series/ItemSerie.svelte";
	import series from "../constants/series";

</script>

<div class="flex flex-col gap-5">
    {#each series as serie}
        <ItemSerie {serie} />
    {/each}
</div>
