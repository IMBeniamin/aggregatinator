/** @type {import("./$types").PageLoad} */
export function load({ params }) {
	const url = `https://api.themoviedb.org/3/movie/${params.id}language=en-US`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjkzMmM2ZDIwMThiM2VkNTIzYmFkNGE1YTI0ZTkzMiIsInN1YiI6IjY0ZjBjMTY0NzdkMjNiMDBlYzA0MzZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sxZWU_gD9QlfIB8SC4fyWZpvhN6AeSUSFuXUDrYY0oY'
		}
	};

	return fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));
}
