const URL = "http://localhost:4000";

export const getLogs = async () => {
  const response = await fetch(URL + "/log")
    .then((res) => res.json())
    .then((data) => data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  return response;
};

export const postLog = async (newLog) => {
  const response = await fetch(URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLog),
  });
  return response.json();
};
