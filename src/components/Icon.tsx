import { useEffect, useState } from "react";
import rain from "../../public/Assets/rain.png";
import clear from "../../public/Assets/clear.png";
import cloud from "../../public/Assets/cloud.png";
import drizzle from "../../public/Assets/drizzle.png";
import snow from "../../public/Assets/snow.png";

export default function Icon({iconType, isMain}:{iconType:string,isMain:boolean}) {
    const [image, setImage] = useState("");
    useEffect(() => {
      const icon = iconType
   
      switch (icon) {
        case "02n":
        case "02d":
          setImage(cloud);
          break;
        case "04n":
        case "04d":
          setImage(cloud);
          break;
        case "03n":
        case "03d":
          setImage(drizzle);
          break;
        case "09n":
        case "09d":
          setImage(rain);
          break;
        case "10d":
        case "10n":
          setImage(rain);
          break;
        case "13d":
        case "13n":
          setImage(snow);
          break;
        default:
          setImage(clear);
          break;
      
      
      }
    }, [iconType]);
  

  return (
    <img className={`${isMain ? "h-20 w-20" : "h-10 w-10" }`} src={image} />
  )
}
