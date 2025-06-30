export async function reverseGeocode(
  lat: number,
  lng: number
): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`;

  const response = await fetch(url, {
    headers: {
      "User-Agent": "YourCoolApp/1.0 (your@email.com)", // optional but polite
    },
  });

  if (!response.ok) {
    throw new Error("Failed to reverse geocode");
  }

  const data = await response.json();

  return data.display_name; // human-readable address
}
