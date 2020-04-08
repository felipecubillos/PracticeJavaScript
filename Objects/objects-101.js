let Books = {
  title: "Cien años de soledad",
  author: "Gabriel Garcia Marquez",
  countPages: 320,
};

console.log(Books);
Books.countPages = 355;

console.log(`The book ${Books.title} have ${Books.countPages} pages`);

let Info = {
  name: "Andres Cubillos",
  age: 29,
  location: "Cali",
  grades: { university: "San Buenaventura", city: "Cali" },
};

console.log(Info);

Info.age +=1;

console.log(`${Info.name} is ${Info.age} years old and studied in ${Info.grades.university} university in ${Info.grades.city} city`);
