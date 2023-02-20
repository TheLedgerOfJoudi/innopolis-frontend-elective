async function fetchComic() {
    const first_fetched = await fetch(
        "https://fwd.innopolis.app/api/hw2?email=h.saleh@innopolis.university"
    );
    const query = await first_fetched.json();
    const second_fetched = await fetch("https://getxkcd.vercel.app/api/comic?num=" + query);
    const parsed_data = await second_fetched.json();
    const image = document.createElement("img");
    image.src = parsed_data.img;
    const comicImage = document.getElementsByClassName("comic-img")[0];
    comicImage.appendChild(image);
    const date = new Date(Date.UTC(parsed_data.year, parsed_data.month, parsed_data.day));
    const dateText = document.createTextNode(date);
    const comicDate = document.getElementsByClassName("comic-date")[0];
    comicDate.appendChild(dateText);
}

fetchComic();