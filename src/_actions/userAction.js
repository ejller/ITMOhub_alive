export const user = {
  logIn
}

function logIn(data){
  return dispatch =>{
    console.log(data)
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    return fetch(`http://localhost:8080/auth/login `, requestOptions).then(handleResponse);
  }

  function logInSucsess(){return {type:'LOGIN_SUCSESS'}}
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api

          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      console.log(data)
      return data;
  });
}