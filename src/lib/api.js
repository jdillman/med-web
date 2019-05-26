
const api = resource => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:5001/api/v1/${resource}`)
    .then(response => {
      if (!response.ok) return resolve(response)
      return response.json();
    })
    .then(data => resolve({ ok: true, data }))
    .catch(err => reject(err))
  });
}

export default api;
