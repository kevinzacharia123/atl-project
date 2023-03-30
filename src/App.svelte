<script lang="ts">
  import "./app.css";
  // import Navbar from "./lib/Navbar.svelte";
  // import Lawyers from "./pages/LegalAdvice.svelte";
  import { page } from "./global";
</script>

<div>
  <!-- <Navbar />
  <button>Find a Lawyer</button>
  <Lawyers /> -->
  <svelte:component this={$page} />
</div>

<style>
</style>
