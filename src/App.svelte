<script lang="ts">
  import "./app.css";
  import Navbar from "./lib/Navbar.svelte";
  // import Lawyers from "./pages/LegalAdvice.svelte";
  import { page } from "./global";
</script>

<div>
  <Navbar />
  <svelte:component this={$page} />
</div>

<style>
</style>
