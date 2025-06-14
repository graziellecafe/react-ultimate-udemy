# 📓 The Ultimate React Course 2025

## 00 - Revision Javascript

Nós iremos trabalhar neste capítulo uma revisão de conceitos de Javascript, tais quais:

- Destructuring
- Spread operator
- Template literals
- Ternaries
- Promises
- Async / Await
- Map, filter, reduce, sort

### 📍 Destructuring

```js
const numeros = [10, 20, 30];
```

✏️ Extraindo os valores

```js
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

✏️ Pulando elementos

```js
const numeros = [10, 20, 30, 40];
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 10
console.log(terceiro); // 30
```

✏️ Destructuring em objetos

```js
const pessoa = {
  nome: "Maria",
  idade: 25,
  cidade: "São Paulo",
};
```

✏️ Extraindo propriedades

```js
const { nome, cidade } = pessoa;

console.log(nome); // Maria
console.log(cidade); // São Paulo
```

✏️ Renomeando propriedades

```js
const { nome: nomePessoa } = pessoa;

console.log(nomePessoa); // Maria
```

### 📍 Rest operator

**Definição**: O rest operator coleta o 'resto' dos elementos ou propriedades em uma variável.

✏️ Rest em array

```js
const numeros = [1, 2, 3, 4, 5];

const [primeiro, ...resto] = numeros;

console.log(primeiro); // 1
console.log(resto); // [2, 3, 4, 5]
```

✏️ Rest em objetos

```js
const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",
};

const { nome, ...outrasInfos } = pessoa;

console.log(nome); // João
console.log(outrasInfos); // { idade: 30, profissao: 'Engenheiro' }
```

### 📍 Spread operator

Exemplo: Usar todos os gêneros e adicionar mais um no elemento do array ou objetos.

```js
const newGenres = [...genres, "epic fantasy"];
newGenres;
```

✏️ Clonando um objeto

```js
const original = { x: 10, y: 20 };
const copia = { ...original };

console.log(copia); // { x: 10, y: 20 }
```

### 📍 Template Literals

```js
const summary = `${title} is a book `;
```

### 📍 Template strings

```js
const pages = book.pages;
pages;
pages > 1200 ? "more than a thousand" : "less than a thousand";
```

### 📍 Arrow functions

✏️ Normal way

```js
const publicationDate = book.publicationDate;

function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear(publicationDate));
```

✏️ Arrow function

```js
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate)); // 1954
```

### 📍 Optional chaining

```js
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
```

### Map Array Method

Será realizado uma mudança em cada um dos elementos de uma matriz principal. É necessário passar uma callback function para isso. Cria-se portanto, uma nova matriz baseada na matriz primária realizando alguma operação aplicada a ela.

```js
const arrayMethod = [1, 2, 3, 4, 5.map((element) => element * 2)
// [2, 4, 6, 8, 10];
```

### Filter

Podemos usar o método de filtro para filtrar alguns elementos da matriz com base em uma condição. Retorna true or false

Queremos filtrar uma matriz em que tem apenas livros com 500 páginas.

```js
const longBooks = books.filter((book) => book.pages > 500);
longBooks;
```

### Sort

Reduzir o array a um único valor. Passar uma callback e um valor inicial.

// Asynchronous Javascript
