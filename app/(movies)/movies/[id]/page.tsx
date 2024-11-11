import { API_URL } from "../../../(home)/page";

async function getMovies(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("============");
  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
  // const movie = await getMovies(id);
  // const videos = await getVideos(id);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
