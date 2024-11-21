import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNearbyPlaces } from "@/lib/hooks/useNearbyPlaces.ts";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Separator } from "../ui/separator.tsx";

const types: string[] = [];

export function NearbyPlaces() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [type, setType] = useState<string>("");

  const params = useMemo(() => {
    if (lat && lng && type) {
      return { lat, lng, type };
    }
    return null;
  }, [lat, lng, type]);
  const { data, error, isLoading } = useNearbyPlaces(params);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    } else {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          });
        }
      });
    }
  }, []);

  const selectNode = (
    <div>
      <Select onValueChange={(value) => setType(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  let placesNode: ReactNode = null;

  if (error) {
    placesNode = <div>{error}</div>;
  } else if (isLoading) {
    placesNode = <div>Loading...</div>;
  } else if (data) {
    placesNode = (
      <div>
        {data.map((place) => (
          <div key={place.displayName}>
            <p>
              {place.displayName} ({place.businessStatus})
            </p>
            <p>{place.adrFormatAddress}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {selectNode}
      <Separator className="my-4" />
      {placesNode}
    </div>
  );
}
