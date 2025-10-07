import { loadPlace } from "@/lib/maps/loader.ts";
import assert from "assert";
import { isNumber, isString } from "lodash-es";
import { NextRequest } from "next/server";
import { fimidxConsoleLogger } from "softkave-node-utils/common";

export async function POST(req: NextRequest) {
  try {
    const { Place, SearchNearbyRankPreference } = await loadPlace();

    // TODO: check if the request body is valid and is json
    const { lat, lng, type } = await req.json();
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
    return Response.json({ places });
  } catch (error) {
    fimidxConsoleLogger.error(error);
    if (error instanceof assert.AssertionError) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
