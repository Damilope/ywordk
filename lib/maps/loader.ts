import { Loader } from "@googlemaps/js-api-loader";
import assert from "assert";

let Place: google.maps.PlacesLibrary | undefined;

export async function loadPlace() {
  if (Place) {
    return await Place;
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  assert.ok(apiKey, "GOOGLE_MAPS_API_KEY is required");

  const loader = new Loader({
    apiKey,
    version: "weekly",
  });

  Place = await loader.importLibrary("places");
  return Place;
}
