interface Params {
  firstUrl: URL;
  secondUrl: URL;
}

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

async function fetchComic({ firstUrl, secondUrl }: Params) {
  const first_fetched: FetchedResponse = await fetch(firstUrl);
  const query: Number = await first_fetched.json();
  const second_fetched: FetchedResponse = await fetch(
    secondUrl + query.toString()
  );
  const parsed_data: ComicResponse = await second_fetched.json();
  const image: HTMLImageElement = document.createElement("img");
  image.src = parsed_data.img;
  const comicImage: Element = document.getElementsByClassName("comic-img")[0];
  comicImage.appendChild(image);
  const date: string = new Date(
    Date.UTC(
      parseInt(parsed_data.year),
      parseInt(parsed_data.month),
      parseInt(parsed_data.day)
    )
  ).toDateString();
  const dateText: Text = document.createTextNode(date);
  const comicDate: Element = document.getElementsByClassName("comic-date")[0];
  comicDate.appendChild(dateText);
}

const firstUrl = new URL(
  "https://fwd.innopolis.app/api/hw2?email=h.saleh@innopolis.university"
);
const secondUrl = new URL("https://getxkcd.vercel.app/api/comic?num=");

fetchComic({ firstUrl, secondUrl });
