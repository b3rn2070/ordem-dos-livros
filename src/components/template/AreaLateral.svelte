<script>
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside
	class="
    flex w-72 flex-col gap-10 justify-start rounded-md
    border border-zinc-800 p-5
"
>
	<Menu titulo="Navegação">
        <MenuItem texto="Início" href="/"/>
        <MenuItem texto="Personagens" href="/"/>
        <MenuItem texto="Autores" href="/autores"/>
        <MenuItem texto="Séries" href="/"/>
	</Menu>
	<Menu titulo="Principais Autores">
		<MenuItem texto="J.R.R. Tolkien" href="/autores/j-r-r-tolkien" />
		<MenuItem texto="J.K. Rolling" href="j-k-rowling" />
		<MenuItem texto="George R.R. Martin" href="/autores/george-r-r-martin" />
	</Menu>
	<Menu titulo="Outras Categorias">
		<MenuItem texto="Ultimas Noticias" href="/"/>
		<MenuItem texto="Youtube" href="/"/>
		<MenuItem texto="Facebook" href="/"/>
		<MenuItem texto="Instagram" href="/"/>
		
	</Menu>
</aside>
