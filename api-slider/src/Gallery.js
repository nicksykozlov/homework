import {useEffect, useState} from "react";
import Modal from "./Modal";
import './style.css';
export default function Gallery()
{
    const [photos, setPhotos] = useState([]);
    const [selected, setSelected] = useState(false);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://api.unsplash.com/photos?page=1&per_page=10', {
                headers: {
                    'Authorization' : 'Client-ID ВАШ ACCESS KEY',
                },
            })
            const json = await  response.json();
            setPhotos(json)
        })()
    }, [setPhotos])
    function updateSelected(index){
        const currentIndex = photos.findIndex(img => img.id === selected.id);
        if(currentIndex+index < 0){
            setSelected(photos[photos.length-1]);
        } else if(currentIndex + index >= photos.length){
            setSelected(photos[0]);
        }else {
            setSelected(photos[currentIndex+index])
        }
    }
    return (<div className="gallery">
        {photos.map(photo => <img
            onClick={()=> setSelected(photo)}
            key={photo.id}
            src={photo.urls.thumb}
            alt={photo.alt_description}/>)}
        {selected && <Modal image={selected} onNavigate={(index)=> updateSelected(index)} onClose={() => setSelected(false)}/>}
    </div>)
}