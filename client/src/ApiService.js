const URL = "http://localhost:4000";

/* get food db*/
export const getDatabase = async () => {
  const response = await fetch(URL + "/db")
    .then((res) => res.json())

  return response;
}

/* get user log db*/
export const getLogs = async () => {
  const response = await fetch(URL + "/log")
    .then((res) => res.json())
    .then((data) => data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));

  return response;
};

/* get log detail*/
export const getLog = async (id) => {
  const response = await fetch(URL + "/log/edit/" + id)
    .then((res) => res.json())

  return response;
};

/* save log*/
export const postLog = async (newLog) => {
  const response = await fetch(URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLog),
  });

  return response.json();
};


/* delete log*/
export const deleteLog = async (id) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "DELETE"
  })

  return response;
};

/* edit log*/
export const editLog = async (id, editedLog) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedLog),
  });

  return response.json();
};