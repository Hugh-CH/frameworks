import React, {useEffect, useState} from "react";
import {Button, Image} from "react-bootstrap";

const DogPicture:React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>()


  const  getImage = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setImageUrl(jsonResponse.message);
    } catch (error) {
      console.log('Missing image', error);
    }
  }


  useEffect(() => {
    getImage();
  }, [])



  return (
    <div className="d-flex flex-wrap w-100">
      <div className="w-50">
        <img className="w-100" src={imageUrl}/>
      </div>
      <div>
        <Button onClick={()=>getImage()}>
          New Dog
        </Button>
      </div>

    </div>
  )
};

export default DogPicture;