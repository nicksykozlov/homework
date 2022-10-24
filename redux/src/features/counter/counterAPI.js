// A mock function to mimic making an async request for data
export async function fetchCount(amount = 10) {

  return fetch(`https://dummyjson.com/users?limit=${amount}`);
  
}
