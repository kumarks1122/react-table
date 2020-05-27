const fetchApi = async (endPoint, method = 'get', headers=null, payload = "", callback) => {
  const apiConfig = {
    url: "http://localhost:8080",
  };

  await fetch(`${apiConfig.url}${endPoint}`,{
    method,
    headers: !!headers ? headers : {
      "Content-Type": "application/json"
    },
    body: payload
  }).then((res) => res.json()).then(callback)
}

export default fetchApi