import {Log} from './Types'

const URL = "http://localhost:4000";

/* api service for food DB*/
export const getDatabase = async () => {
  const response = await fetch(URL + "/db")
    .then((res) => res.json())

  return response;
}

/* api service for log DB*/
export const getLogs = async () => {
  const response = await fetch(URL + "/log")
    .then((res) => res.json())
    .then((data) => data.sort((a:Log, b:Log) => {
      if(a.timestamp && b.timestamp){
        return Number(b.timestamp) - Number(a.timestamp)
      } 
      return 0
    }));
    return response;
};

export const getLog = async (id: string) => {
  const response = await fetch(URL + "/log/edit/" + id)
    .then((res) => res.json())

  return response;
};
//
export const postLog = async (newLog: Log) => {
  const response = await fetch(URL + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newLog),
  });

  return response.json();
};

export const deleteLog = async (id:string) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "DELETE"
  })

  return response;
};

export const editLog = async (id: string, editedLog: Log) => {
  const response = await fetch(URL + "/log/edit/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedLog),
  });

  return response.json();
};