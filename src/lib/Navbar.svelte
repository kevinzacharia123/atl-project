<script>
  import { page, pages } from "../global";
</script>

<div class="navbar bg-base-200">
  <div class="flex-1">
    <a
      class="btn btn-ghost normal-case text-xl font-extrabold"
      on:click={(e) => {
        e.preventDefault();
        page.set(pages.Home);
      }}>Quicklaw</a
    >
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a
          on:click={(e) => {
            e.preventDefault();
            page.set(pages.Lawyers);
          }}>Lawyers</a
        >
      </li>
      <li><a>Newsfeed</a></li>
      <li><a>Forum</a></li>
      <li><a>Law Colleges</a></li>
      <li><a>User Profile</a></li>
      <li
        on:click={(e) => {
          e.preventDefault();
          page.set(pages.About);
        }}
      >
        <a>About</a>
      </li>
    </ul>
  </div>
</div>
