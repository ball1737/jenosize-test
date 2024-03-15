"use client";

import axios from "axios";
import { useState } from "react";

const imgUri = (ref) =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=AIzaSyAIFLj2onkl1L4CufB1-PsLA-F47S_3-Nk`;

export default function restaurantSearch() {
  const [restaurant, setResaurant] = useState();

  const callApiService = async (searchKey: string) => {
    const res = await axios.post<any>(`/search`, { search: searchKey });
    setResaurant(res.data);
    console.log(restaurant);
  };

  return (
    <>
      <div className="flex h-screen items-center w-full justify-center" onClick={() => callApiService("mk")}>
        restaurantSearch
      </div>
    </>
  );
}
