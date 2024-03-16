"use client";

import { create } from "zustand";

export interface Restaurant {
  name: string;
  phoneNumber: string;
  address: string;
  imgName: string;
}

interface RestaurantStore {
  restaurant?: Restaurant[];
  setRestaurant: (restaurant: Restaurant[]) => void;
  resetRestaurant: () => void;
}

export const restaurantStore = create<RestaurantStore>((set) => ({
  restaurant: [],
  setRestaurant: (restaurant: Restaurant[]) => {
    set({ restaurant });
  },
  resetRestaurant: () => {
    set(() => ({ restaurant: [] }));
  },
}));
