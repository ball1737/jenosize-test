import Image from "next/image";

const imgGoole = (ref: string | undefined) =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=AIzaSyAIFLj2onkl1L4CufB1-PsLA-F47S_3-Nk`;

interface CardProps {
  name?: string;
  phoneNumber?: string;
  address?: string;
  imgName?: string;
}

const RestaurantCard: React.FC<CardProps> = ({ name, phoneNumber, address, imgName }) => {
  return (
    <div className="text-black w-full max-w-2xl mt-4">
      <div className="flex flex-row">
        <div className="basis-1/4 m-2">
          <Image alt="Picture of the author" src={imgGoole(imgName || undefined)} width={200} height={0}></Image>
        </div>
        <div className="basis-3/4 m-2">
          <h1 className="text-2xl mb-2">{name}</h1>
          <p className="text-sm">{phoneNumber}</p>
          <p className="text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
