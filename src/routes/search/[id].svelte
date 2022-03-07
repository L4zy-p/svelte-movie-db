<script lang="ts" context="module">
	export const load = async ({ fetch, params }) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=0570ee5b4017b2920d6c0e852de90cc2&language=en-US&page=1&include_adult=false&query=${params.id}`
		);

		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					searchMovie: data.results
				}
			};
		}
		return {
			props: {
				searchMovie: []
			}
		};
	};
</script>

<script lang="ts">
  import { fly } from 'svelte/transition';
	import MovieCard from '../../components/MovieCard.svelte';
	import type { MovieType } from '../../types/MovieType';
	export let searchMovie: MovieType[];
</script>

<div class="searched-movies"  in:fly={{y: 50, duration: 500, delay: 500}} out:fly={{ duration: 500}}>
	{#each searchMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
