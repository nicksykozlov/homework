import { useEffect, useState } from "react";
import BigFoto from "./BigFoto";

export default function Gallery(){

const [photos, setPhotos]= useState([]);
const [selected, setSelected] = useState(false);
const [search, setSearch] = useState('')


useEffect(() => {
    (async () => {
      let url = `https://api.unsplash.com/photos?page=1&per_page=10`

      if (search){

        url = `https://api.unsplash.com/search/photos?page=1&per_page=10&query=${search}`

      }
      const response = await fetch(url,{
        headers:{
            'Authorization': `Client-ID 8nxbh2UEHmzKnQA9zhiu3p8qA5FinreZp3EvUp7lSog`
        }
      }
      );
      const json = await response.json();
      if (search){
        setPhotos(json.results)
      }  else{
        setPhotos(json)
      }
     
    
      console.log(json);
    })();
  }, [setPhotos, search]);

  function updateSelected (index){
    const curentIndex = photos.findIndex(img=>img.id===selected.id);
    if(curentIndex+index<0){
      setSelected(photos[photos.length-1])
    }else if (curentIndex+index>=photos.length){
      setSelected(photos[0])
    }else 
    {setSelected(photos[curentIndex+index])}

  }
 console.log(selected);
console.log(photos);
return(
    <div className="gallery">

      <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    
        {photos.map((img)=><img 
        key={img.id}
        src={img.urls.small} 
        alt="#"
        onClick={()=>setSelected(img)}
        />)}
              
    
    {selected &&  <BigFoto  image={selected.urls.small} 
    page={Array.from({ photos: 10 }, (v, k) => k)}
    onNavigate={index=>updateSelected(index)} 
    Onclose={()=>setSelected(false)}
    />
    // логическое И возврашает или selected или <BigFoto>
    } 
    
    </div>
)
}

