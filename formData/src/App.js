import React, { useState } from "react";

function App() {
  const [selectedFile, setSelectedFile] = useState();

  const handleChange = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <form id="user-form">
        <input
          type="file"
          onChange={handleChange}
          //multiple//что бы было можно несколько файлов сразу загружать
          //accept='images/*., png., img.,' при помощи accept только нужный формат файлов
          name="img"
        />

        <input type="submit" value="upload" />
        <img src="" alt="" />
        {selectedFile && (
          <ul>
            <li>Name:{selectedFile.name}</li>
            <li>Type:{selectedFile.size}</li>
            <li>lastModifiedDate :
            {selectedFile.lastModifiedDate.toLocaleDateString()}</li>
          </ul>
        )}
      </form>
    </>
  );
}

export default App;
