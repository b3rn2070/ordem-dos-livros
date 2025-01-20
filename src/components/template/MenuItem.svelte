<script>
	export let texto = '';
	export let href = '';
</script>

<li>
	<a
		{href}
		class="
        flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md
        text-zinc-400
        hover:underline hover:text-white hover:bg-white/10
    "
	>
	 	<slot></slot>
		<span>
			{texto}
		</span>
	</a>
</li>
