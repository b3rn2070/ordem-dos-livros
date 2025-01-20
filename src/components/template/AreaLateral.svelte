<script>
	import { IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconFriends, IconHome, IconRss, IconSquare1, IconSquare2, IconSquare3, IconUsers } from '@tabler/icons-svelte';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';
</script>

<aside
	class="
    flex w-72 flex-col justify-start gap-10 rounded-md
    border border-zinc-800 p-5
"
>
	<Menu titulo="Navegação">
		<MenuItem texto="Início" href="/">
			<IconHome size={20} />
		</MenuItem>

		<MenuItem texto="Personagens" href="/">
			<IconFriends size={20} />
		</MenuItem>

		<MenuItem texto="Autores" href="/autores">
			<IconUsers size={20} />
		</MenuItem>

		<MenuItem texto="Séries" href="/">
			<IconBooks size={20} />
		</MenuItem>
	</Menu>

	<Menu titulo="Principais Autores">
		<MenuItem texto="J.R.R. Tolkien" href="/autores/j-r-r-tolkien">
			<IconSquare1 size={20} />
		</MenuItem>

		<MenuItem texto="J.K. Rolling" href="j-k-rowling">
			<IconSquare2 size={20} />
		</MenuItem>

		<MenuItem texto="George R.R. Martin" href="/autores/george-r-r-martin">
			<IconSquare3 size={20} />
		</MenuItem>
	</Menu>

	<Menu titulo="Outras Categorias">
		<MenuItem texto="Ultimas Noticias" href="/">
			<IconRss size={20} />
		</MenuItem>

		<MenuItem texto="Youtube" href="/">
			<IconBrandYoutube size={20} />
		</MenuItem>

		<MenuItem texto="Facebook" href="/">
			<IconBrandFacebook size={20} />
		</MenuItem>

		<MenuItem texto="Instagram" href="/">
			<IconBrandInstagram size={20} />
		</MenuItem>
	</Menu>
</aside>
