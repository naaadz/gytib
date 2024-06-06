export default async (req, res) => {
  const apiKey = '123456';
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?apiKey=${apiKey}`);
  const data = await response.json();
  return data
};