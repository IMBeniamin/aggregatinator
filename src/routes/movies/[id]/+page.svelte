<script>
  import { Skeleton, Video, VideoPlaceholder } from "flowbite-svelte";

  /** @type {import("./$types").PageData} */
  export let data;
</script>

<div class="container mx-auto p-8 bg-gray-100">
  <!-- Video Player -->
  <div class="mb-8 rounded shadow-lg">
    <VideoPlaceholder />
  </div>

  <!-- Movie Information -->
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="mb-4">
      <h2 class="text-4xl font-bold mb-2">{data.original_title}</h2>
      <p class="text-gray-700 text-lg">{data.overview}</p>
    </div>
    <ul class="list-disc list-inside text-gray-700">
      <li class="mb-2">Genres:
        {#each data.genres as genre, i}
          {genre.name}
          {#if i < data.genres.length - 1},{/if}
        {/each}
      </li>
      <li class="mb-2">Runtime: {data.runtime} minutes</li>
      <li class="mb-2">Release Date: {data.release_date}</li>
      <li class="mb-2">Rating: {data.vote_average}</li>
    </ul>
    <div class="mt-4 flex justify-between items-center">
      <a href={data.homepage.startsWith('http') ? data.homepage : 'http://' + data.homepage} target="_blank"
         rel="noopener noreferrer" class="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600">
        Visit Homepage
      </a>
      <div class="text-sm text-gray-600">
        <span>Produced in: </span>
        {#each data.production_countries as country, i}
          {country.name}
          {#if i < data.production_countries.length - 1},{/if}
        {/each}
      </div>
    </div>


  </div>
</div>
