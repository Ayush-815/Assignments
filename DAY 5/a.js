import { apiCallPromise, apiCallAsync } from "./b.js";

// Here doing with Promises
apiCallPromise().then((result) => {
  document.getElementById("promiseData").innerHTML =
    "Promise Version → " + result.names;
});

// Here trying to do with async
async function showAsync() {
  const result = await apiCallAsync();
  document.getElementById("asyncData").innerHTML =
    "Async/Await Version → " + result.sdf;
}
showAsync();
