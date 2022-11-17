import { useEffect, useState } from "react";
import BigFoto from "./BigFoto";

export default function Gallery(){

const [photos, setPhotos]= useState([]);
const [selected, setSelected] = useState(false)

useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.unsplash.com/photos?page=1`,{
        headers:{
            'Authorization': `Client-ID 8nxbh2UEHmzKnQA9zhiu3p8qA5FinreZp3EvUp7lSog`
        }
      }
      );
      const json = await response.json();

      setPhotos(json)
    
      console.log(json);
    })();
  }, [setPhotos]);

  function updateSelected (index){
    const curentIndex = photos.findIndex(img=>img.id===selected.id);
    if(curentIndex+index<0){
      setSelected(photos[photos.length-1])
    }else if (curentIndex+index>=photos.length){
      setSelected(photos[0])
    }else 
    {setSelected(photos[curentIndex+index])}

  }


return(
    <div className="gallery">
    
        {photos.map((img)=><img 
        key={img.id}
        src={img.urls.small} 
        alt="#"
        onClick={()=>setSelected(img)}
        />)}
              
    
    {selected &&  <BigFoto  image={selected.urls.small} onNavigate={index=>updateSelected(index)} Onclose={()=>setSelected(false)}/>
    // логическое И возврашает или selected или <BigFoto>
    } 
    
    </div>
)
}

