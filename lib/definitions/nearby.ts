export interface NearbyPlace {
  displayName: string;
  location: google.maps.LatLngLiteral;
  businessStatus: string;
  addressComponents: google.maps.places.AddressComponent[];
  adrFormatAddress?: string | null;
}
