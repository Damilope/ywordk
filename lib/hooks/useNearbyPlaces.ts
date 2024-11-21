"use client";

import useSWR from "swr";
import { NearbyPlace } from "../definitions/nearby.ts";

export function useNearbyPlaces(
  params: {
    lat: number;
    lng: number;
    type: string;
  } | null
) {
  return useSWR<NearbyPlace[]>(
    params ? [`/api/nearby`, params] : null,
    async (url: string) => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      return await res.json();
    }
  );
}
