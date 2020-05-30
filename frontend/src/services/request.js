const fetchApi = (endPoint, method = 'get', headers=null, payload = "", callback) => {
  const apiConfig = {
    url: "http://localhost:8080",
  };

  return fetch(`${apiConfig.url}${endPoint}`,{
    method,
    headers: !!headers ? headers : {
      "Content-Type": "application/json"
    },
    body: payload
  })
}

export default fetchApi