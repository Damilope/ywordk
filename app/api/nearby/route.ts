import { loadPlace } from "@/lib/maps/loader.ts";
import assert from "assert";
import { isNumber, isString } from "lodash-es";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { Place, SearchNearbyRankPreference } = await loadPlace();

    const { lat, lng, type } = req.body || {};
    assert.ok(isNumber(lat), "lat must be a number");
    assert.ok(isNumber(lng), "lng must be a number");
    assert.ok(isString(type), "type must be a string");

    // Restrict within the map viewport.
    const center = new google.maps.LatLng(lat, lng);
    const request = {
      // required parameters
      fields: [
        "displayName",
        "location",
        "businessStatus",
        "addressComponents",
        "adrFormatAddress",
      ],
      locationRestriction: {
        center: center,
        radius: 500,
      },
      // optional parameters
      includedPrimaryTypes: [type],
      maxResultCount: 5,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
      language: "en-US",
      region: "us",
    };

    //@ts-ignore
    const { places } = await Place.searchNearby(request);
    res.status(200).json(places);
  } catch (error) {
    console.error(error);
    if (error instanceof assert.AssertionError) {
      return res.status(400).json({ error: error.message });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
}
