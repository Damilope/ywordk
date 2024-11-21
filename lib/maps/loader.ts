import { Loader } from "@googlemaps/js-api-loader";
import assert from "assert";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
assert.ok(apiKey, "GOOGLE_MAPS_API_KEY is required");

const loader = new Loader({
  apiKey,
  version: "weekly",
});

const PlacePromise = loader.importLibrary("places");

export async function loadPlace() {
  return await PlacePromise;
}
