import { person, sayHello } from './lib';

/* let test = () => {
  console.log('salulate rueda!');
};

test(); */

console.log(person);
console.log(sayHello(person.name));

const url = 'https://jsonplaceholder.typicode.com/posts';
async function getPosts() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getPosts().then((posts) => {
  console.log(posts);
});
