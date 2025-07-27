export const getInitialLetters = (fullName: string) => {
  if (!fullName) return "NA";
  if (fullName.includes(" ")) {
    const [firstName, lastName] = fullName.split(" ") || [];
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  } else {
    return fullName.charAt(fullName?.length - 1);
  }
};
