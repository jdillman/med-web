const { REACT_APP_API, REACT_APP_BASEURL } = process.env;

export default (resource) => {
  return new Promise((resolve, reject) => {
    fetch(`${REACT_APP_API}${REACT_APP_BASEURL}${resource}`)
    .then(response => {
      if (!response.ok) return resolve(response)
      return response.json();
    })
    .then(data => resolve({ ok: true, data }))
    .catch(err => reject(err))
  });
}
