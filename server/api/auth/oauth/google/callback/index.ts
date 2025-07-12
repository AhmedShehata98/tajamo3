export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);
  console.log("code: ", code);
  return {
    code,
  };
});
