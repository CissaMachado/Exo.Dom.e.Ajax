
function ajax(method, url) {
  return new Promise(
    (resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      xhr.onreadystatechange = () => {
        if (xhr.status == "200" && xhr.readyState == "4") {
          resolve(xhr.responseText);
        }
      };
      xhr.onerror = () => {
        reject("ERRO")
      }
      xhr.send();
    }
  );


}