<script lang="ts" context="module">
	export const load = async ({ fetch, params }) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=0570ee5b4017b2920d6c0e852de90cc2&language=en-US`
		);

		const movieDetail = await res.json();

		if (res.ok) {
			return {
				props: {
					movieDetail: movieDetail
				}
			};
		}
		return {
			props: {
				movieDetail: {}
			}
		};
	};
</script>

<script lang="ts">
	import type { MovieDetailType } from '../../types/MovieType';
	export let movieDetail: MovieDetailType;
</script>

<div class="movie-details">
	<div class="img-container">
		<img
			src={`http://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			<span>Release Date</span>
			{movieDetail.release_date} <br />
			<span>Budget: </span>
			{movieDetail.budget} <br />
			<span>Rating: </span>
			{movieDetail.vote_average}<br />
			<span>Runtime:</span>
			{movieDetail.runtime} min
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: bold;
	}
</style>
