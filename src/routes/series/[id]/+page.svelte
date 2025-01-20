<script>
	import { page } from '$app/stores';
	import ConteudoSerie from '../../../components/series/ConteudoSerie.svelte';
</script>

<ConteudoSerie serie={$page.data.serie} />
