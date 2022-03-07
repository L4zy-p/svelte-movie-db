<script lang="ts" context="module">
	// context module ใช้เมื่อมีการ export module ของตัวเอง
	export const load = async ({ fetch }) => {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=0570ee5b4017b2920d6c0e852de90cc2&language=en-US&page=1'
		);

		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	};
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import PopularMovies from '../components/PoppularMovies.svelte';
	import SearchMovie from '../components/SearchMovie.svelte';
	import type { MovieType } from '../types/MovieType';
	export let popular: MovieType[];
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovie />
	<PopularMovies movies={popular} />
</section>
