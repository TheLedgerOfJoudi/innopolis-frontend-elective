<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/comic" ? "page" : undefined}>
        <a href="/comic">Comic</a>
      </li>
      <li
        aria-current={$page.url.pathname.startsWith("/contact")
          ? "page"
          : undefined}
      >
        <a href="/contact">Contact</a>
      </li>
      <li
        aria-current={$page.url.pathname.startsWith("/info")
          ? "page"
          : undefined}
      >
        <a href="/info">Info</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>
  <h1>Hadi Saleh</h1>
  <hr />
  <p class="bold-text">
    I am a highly skilled communicator , a programmer, and a life enjoyer who
    cannot stay professional for more than 8 hours a day.
  </p>
  <hr />
</header>

<style>
  header {
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  .bold-text {
    font-weight: bold;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }
</style>
