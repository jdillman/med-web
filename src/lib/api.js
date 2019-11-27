const { API, BASEURL } = process.env;

export default resource => {
  return new Promise((resolve, reject) => {
    fetch(`${API}${BASEURL}${resource}`)
      .then(response => {
        if (!response.ok) return resolve(response);
        return response.json();
      })
      .then(data => resolve({ ok: true, data }))
      .catch(err => reject(err));
  });
};
