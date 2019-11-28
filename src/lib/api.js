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

// TODO if payload contains an ID just return that one
export const list = (resource, payload) => {
  console.log('read', payload);
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

// PUT payload = {}
export const update = (resource, payload) => {
  console.log('update', payload);
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

// POST with payload
export const create = (resource, payload) => {
  console.log('read', payload);
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

// DELETE with id
export const remove = (resource, payload) => {
  console.log('update', payload);
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
