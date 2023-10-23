<script>
  import "../app.css";
  import { BottomNav, BottomNavItem } from "flowbite-svelte";
  import { Icon } from "flowbite-svelte-icons";
</script>


<slot></slot>
<BottomNav position="absolute" classInner="grid-cols-7">
  <BottomNavItem btnName="Home" href="/">
    <Icon name="home-outline"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Movies" href="/movies">
    <Icon name="play-outline"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Series" href="/series">
    <Icon name="play-solid"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Anime" href="/anime">
    <Icon name="clapperboard-play-outline"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Manga" href="/manga">
    <Icon name="book-outline"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Manwa" href="/manwa">
    <Icon name="book-solid"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
  <BottomNavItem btnName="Books" href="/books">
    <Icon name="book-open-outline"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
  </BottomNavItem>
</BottomNav>