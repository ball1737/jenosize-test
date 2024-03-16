"use client";

import { useEffect } from "react";

import { restaurantStore } from "@/store/restaurant";

import Footer from "./component/footer";
import RestaurantCard from "./component/restaurantCard";
import TopNavigationBar from "./component/topNavigationBar";

export default function restaurantSearch() {
  const { restaurant, resetRestaurant } = restaurantStore();

  useEffect(() => {
    resetRestaurant();
  }, []);

  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);

  return (
    <>
      <div className="flex flex-col w-full bg-white min-h-screen h-full justify-between">
        {/** top nav */}
        <TopNavigationBar></TopNavigationBar>
        <div className=" flex flex-col w-full items-center">
          {restaurant?.length === 0 ? (
            <>
              <div className="text-black">Search restaurant in Thailand.</div>
              <div className="text-black">How to : Fill key in search box and press Enter.</div>
            </>
          ) : (
            <>
              {restaurant?.map(({ name, address, phoneNumber, imgName }, index) => {
                return (
                  <RestaurantCard
                    key={index}
                    name={name}
                    address={address}
                    phoneNumber={phoneNumber}
                    imgName={imgName}
                  ></RestaurantCard>
                );
              })}
            </>
          )}
        </div>
        {/** footer */}
        <Footer></Footer>
      </div>
    </>
  );
}
