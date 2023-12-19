// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
// script.js

// Function to fetch data using Promise.all
const fetchDataAll = async () => {
  const startTime = Date.now();
  await Promise.all(apiUrls.map(url => fetch(url)));
  const endTime = Date.now();
  return endTime - startTime;
};

// Function to fetch data using Promise.any
const fetchDataAny = async () => {
  const startTime = Date.now();
  await Promise.any(apiUrls.map(url => fetch(url)));
  const endTime = Date.now();
  return endTime - startTime;
};

// Function to display results on the webpage
const displayResults = async () => {
  const timeTakenAll = await fetchDataAll();
  const timeTakenAny = await fetchDataAny();

  // Update the table with the results
  document.getElementById("output-all").textContent = timeTakenAll;
  document.getElementById("output-any").textContent = timeTakenAny;
};

// Call the displayResults function when the window has loaded
window.onload = displayResults;

