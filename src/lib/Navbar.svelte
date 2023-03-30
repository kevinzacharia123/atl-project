<script>
  import { page, pages } from "../global";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
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
      <li><a>About</a></li>
    </ul>
  </div>
</div>
