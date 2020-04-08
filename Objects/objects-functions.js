let myBook = {
  title: "Cien años de soledad",
  author: "Gabriel Garcia Marquez",
  countPages: 320,
};

let getSummary = function (book) {
  console.log(`the book ${book.title} has ${book.countPages} pages`);
};

getSummary(myBook);

let getPagesSummary = function (book) {
  return {
    bookSummary: `${book.title} by ${book.author}`,
    pagesSummary: `${book.title} has ${book.countPages} pages`,
  };
};

let getSummaryBooks = getPagesSummary(myBook);

console.log(getSummaryBooks.pagesSummary);

console.log(getSummaryBooks.bookSummary);

let currencyConvertion = function (pesos) {
  return {
    USD: pesos * 0.00026,
    EUR: pesos * 0.00024,
    YEN: pesos * 0.028,
  };
};
let pesos = 20000000;
let getCurrencyConvertion = currencyConvertion(pesos);
console.log(
  `${pesos} is equals to ${getCurrencyConvertion.USD} American Dolars, ${getCurrencyConvertion.EUR} Euro and ${getCurrencyConvertion.YEN} Japanese YEN`
);
