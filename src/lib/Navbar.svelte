<script>
  import { page, pages } from "../global";
</script>

<div class="navbar bg-base-300">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-square btn-ghost"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        ></label
      >
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
      >
        <li>
          <a
            on:click={(e) => {
              e.preventDefault();
              page.set(pages.Home);
            }}>Home</a
          >
        </li>
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
</div>
