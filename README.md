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

### Destructuring

```js
const numeros = [10, 20, 30];
```

📍 Extraindo os valores

```js
const [a, b, c] = numeros;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30
```

📍 Pulando elementos

```js
const numeros = [10, 20, 30, 40];
const [primeiro, , terceiro] = numeros;

console.log(primeiro); // 10
console.log(terceiro); // 30
```

📍 Destructuring em objetos

```js
const pessoa = {
  nome: "Maria",
  idade: 25,
  cidade: "São Paulo",
};
```

📍 Extraindo propriedades

```js
const { nome, cidade } = pessoa;

console.log(nome); // Maria
console.log(cidade); // São Paulo
```

📍 Renomeando propriedades

```js
const { nome: nomePessoa } = pessoa;

console.log(nomePessoa); // Maria
```

### Rest operator

**Definição**: O rest operator coleta o 'resto' dos elementos ou propriedades em uma variável.

📍 Rest em array

```js
const numeros = [1, 2, 3, 4, 5];

const [primeiro, ...resto] = numeros;

console.log(primeiro); // 1
console.log(resto); // [2, 3, 4, 5]
```

📍 Rest em objetos

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

### Spread operator

Exemplo: Usar todos os gêneros e adicionar mais um no elemento do array ou objetos.

```js
const newGenres = [...genres, "epic fantasy"];
newGenres;
```

📍 Clonando um objeto

```js
const original = { x: 10, y: 20 };
const copia = { ...original };

console.log(copia); // { x: 10, y: 20 }
```
