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




return(
    <div className="gallery">
    
        {photos.map((img)=><img 
        src={img.urls.small} 
        alt="#"
        onClick={()=>setSelected(img)}
        />)}
              
    
    {selected &&  <BigFoto  image={selected.urls.small}/>
    // логическое И возврашает или selected или <BigFoto>
    } 
    
    </div>
)
}

