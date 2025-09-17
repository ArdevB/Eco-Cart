import { url } from "inspector";

const youtubeUrl =
  "https://www.youtube.com/watch?v=Sc1OI1i-Kgs&list=RDSc1OI1i-Kgs&start_radio=0";

const urlObject = new URL(youtubeUrl);

console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);

const params = new URLSearchParams(urlObject.search);

console.log(params);

params.set("start_radio", "1");

console.log(params);
