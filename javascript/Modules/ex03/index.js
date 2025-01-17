import series from '../dados/series.js';

for (let s of series) {
	console.log('\n\n', s.titulo);

	for (let l of s.livros) {
		if (l.ano <= 2000) {
			console.log('\t-', l.titulo);
		}
	}
}
