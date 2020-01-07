export const service = {
  signInRequest,
  signUpRequest,
  sendPointRequest,
  getPointsRequest
}

function signInRequest(data){
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  return fetch(`http://localhost:8080/auth/login `, requestOptions).then(handleResponse);
}

function signUpRequest(data){
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  };
  return fetch(`http://localhost:8080/auth/register `, requestOptions).then(handleResponse);
}

function sendPointRequest(coor){
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
              'Authorization': "Bearer_" + localStorage.getItem('user'),
              'Access-Control-Request-Method': 'POST',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
              'Accept': 'application/json'},
    body: JSON.stringify(coor)
  };
  console.log(requestOptions)
  return fetch(`http://localhost:8080/points/add_point`, requestOptions).then(handleResponse);
}

function getPointsRequest(){
  const requestOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
              'Authorization': "Bearer_" + localStorage.getItem('user'),
              'Access-Control-Request-Method': 'GET',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
              'Accept': 'application/json'},
    body: JSON.stringify()
  };
  console.log(requestOptions)
  return fetch(`http://localhost:8080/points/get_user_points`, requestOptions).then(handleResponse);
}

function handleResponse(response){
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
        if (response.status === 401) {
            console.log('wtf 401')
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    console.log(data)
    return data;
});
}