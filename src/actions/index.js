// URL: "https://randomuser.me/api/"

// add thunk middleware

// inititally dispatch the ASYNC_START function
// make a fetch request
// when you receive a response
// dispatch FETCH_PROFILE with the user data

export function fetchProfile() {
  return function(dispatch) {
    dispatch({ type: 'ASYNC_START' });
    fetch('https://randomuser.me/api/')
      .then(r => r.json())
      .then(user => {
        const firstName = user.results[0].name.first;
        const picture = user.results[0].picture.thumbnail;

        setTimeout(
          () =>
            dispatch({ type: 'FETCH_PROFILE', user: { firstName, picture } }),
          2000
        );
      });
  };
}
