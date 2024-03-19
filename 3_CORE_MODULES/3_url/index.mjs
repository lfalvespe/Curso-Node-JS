import url from "url";

const adress = "https://www.meusite.com/catalog?products=cadeira";

const parsedUrl = new url.URL(adress);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('products'))
