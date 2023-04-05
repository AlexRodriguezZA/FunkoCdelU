async function setImageBackend(imagen) {
    let formData = new FormData();
    formData.append("image", imagen);
  
    const response = await fetch("http://localhost:5000/upload", {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
      headers : {
        "Accept": "*/*"}
    }); 
  
    console.log(response);


}

export default setImageBackend;
