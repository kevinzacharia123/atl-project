<script lang="ts">
  import "./app.css";
  import Navbar from "./lib/Navbar.svelte";
  // import Lawyers from "./pages/LegalAdvice.svelte";
  import { page } from "./global";
</script>

<!-- <div class="flex flex-col min-h-screen">
  <Navbar />
  <div class="flex-grow">
    <svelte:component this={$page} />
  </div>
</div> -->
<div class="">
  <Navbar />
  <svelte:component this={$page} />
</div>

<style>
</style>
