// Para carregar dados de uma API da Web Externa

fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);
