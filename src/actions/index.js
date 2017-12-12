// URL: "https://randomuser.me/api/"

// add thunk middleware

// inititally dispatch the ASYNC_START function
// make a fetch request
// when you receive a response
// dispatch FETCH_PROFILE with the user data
export function fetchProfile() {
  return { type: 'ASYNC_START' };
}
