export default defineEventHandler(async (event) => {
  try {
    if (event.method === "GET") {
      const { lat, lng } = getQuery(event);

      const response = await fetch(
        `https://api.geoapify.com/v1/reverse?lat=${lat}&lon=${lng}&apiKey=${
          useRuntimeConfig().geoapifyApiKey
        }`
      );

      if (!response.ok) {
        return createError({
          statusCode: response.status,
          statusMessage: response.statusText,
        });
      }

      const data = await response.json();
      return new ResponseSchema(data, true, "Geo reverse data");
    }
    return createError({
      statusCode: 503,
      statusMessage: "method not implemented",
    });
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    });
  }
});
