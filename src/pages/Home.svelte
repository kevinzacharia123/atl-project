<script>
  import Navbar from "../lib/Navbar.svelte";
  import { page, pages } from "../global";
</script>

<Navbar />
<button class="btn btn-primary" on:click={() => page.set(pages.LegalAdvice)}
  >Looking for legal advice</button
>
