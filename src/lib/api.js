const { API, BASEURL } = process.env;

export default (resource, two) => {
  console.log(resource, two);
  // two contains the payload,
  //
  //

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
