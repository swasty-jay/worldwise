import { useSearchParams } from "react-router-dom";

export function UseUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat") || 40; // Default latitude
  const lng = searchParams.get("lng") || 0;
  return [lat, lng];
}
