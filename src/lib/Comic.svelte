<script lang="ts">
    import {onMount} from 'svelte';

  type FetchedResponse = Response;

  type ComicResponse = {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  };
	
	let comicImage: Element;
  let comicDate: Element;

  async function fetchComic(firstUrl: URL, secondUrl: URL) {
    const firstFetched: FetchedResponse = await fetch(firstUrl);
    const query: Number = await firstFetched.json();
    const secondFetched: FetchedResponse = await fetch(
      secondUrl + query.toString()
    );
    const parsedData: ComicResponse = await secondFetched.json();
    let image: HTMLImageElement = document.createElement("img");
    image.src = parsedData.img;
    comicImage.appendChild(image);
    const date: Date = new Date(
      parseInt(parsedData.year),
      parseInt(parsedData.month) - 1,
      parseInt(parsedData.day)
    );
    const dateText: Text = document.createTextNode(date.toDateString());
    comicDate.appendChild(dateText);
  }

  const firstUrl = new URL(
    "https://fwd.innopolis.app/api/hw2?email=h.saleh@innopolis.university"
  );
  const secondUrl = new URL("https://getxkcd.vercel.app/api/comic?num=");

  fetchComic(firstUrl, secondUrl);
</script>

<div bind:this={comicImage} />
<div bind:this={comicDate} />

<style>
  div {
  margin-bottom: 10px;
  }
</style>
