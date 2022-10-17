function carregaImgs() {
  return new Promise((resolve, reject) => {
    let xml = new XMLHttpRequest()
    xml.open("GET", "http://127.0.0.1:5500/data.json", true);
    xml.setRequestHeader("content-type","aplication/json");
    xml.onload = function (){
      if (xml.status === 200) {
        resolve(xml.response)
    } else {
        reject(Error)
    }
    }
    xml.onerror = function() {
      reject(Error('Erro ferrou.'))
  }
  xml.send()
  })
}
window.addEventListener('load', function() {
  carregaImgs().then(function(response) {
      let imgs = JSON.parse(response)
  
      function createImgElement(url) {
          let img = document.createElement("img")
          img.src = url
          return img
      }
      
      function insertImgElement(id) {
          document.getElementById(id).appendChild(createImgElement(imgs[(Math.floor(Math.random() * 15))].url))
      }
      
      for (let i = 0; i < 10; i++) {
          insertImgElement("recebe")
      }
  
      window.addEventListener("scroll", function() {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
              insertImgElement("recebe")
          }
      })
  })
})