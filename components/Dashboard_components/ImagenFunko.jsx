import Image from "next/image";
import { useState, useEffect } from "react";



const ImagenFunko = ({ imagen_name, nombreFunko }) => {

  const [imageUrl, setImageUrl] = useState(`http://localhost:5000/public_funko_img/${imagen_name}`);


  return (
    <>
      <Image
        src={imageUrl}
        width={70}
        height={50}
        alt={`Imagen del funko ${nombreFunko}`}
      />
    </>
  );
};

export default ImagenFunko;
