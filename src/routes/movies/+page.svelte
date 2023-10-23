<script>
  import { Input } from "flowbite-svelte";
  import Typeahead from "svelte-typeahead";

  let query = "";
  let results = [];
  let suggestions = ["Apple", "Banana", "Orange", "Grape"];

  function handleSearch() {
    // Your API logic here, for now using hardcoded data
    results = suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()));
  }
</script>

<!-- Apply TailwindCSS styling -->
<div class="min-h-screen flex justify-center items-center bg-gray-200">
  <div class="p-8 rounded-lg shadow-lg bg-white w-1/3">
    <h1 class="text-3xl mb-4">Movies search</h1>

    <!-- Flowbite Input -->
    <Input bind:value={query} placeholder="Search a movie" on:input={handleSearch} />

    <!-- Svelte-Typeahead -->
    {#if query}
      <div class="relative">
        <Typeahead items={results} bind:value={query} class="z-10" />

        <!-- Scrollable List -->
        <div class="absolute w-full mt-1 max-h-40 overflow-y-auto border rounded-lg z-0">
          {#each results as result}
            <div class="p-2 hover:bg-gray-300">{result}</div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

