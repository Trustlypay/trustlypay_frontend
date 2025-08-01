export function capitalizeFirstLetter(input: string): string {
  const result = input
    .replaceAll("-", " ")
    .split(" ")
    .map((item) => {
      return item?.charAt(0).toUpperCase() + item?.slice(1);
    })
    .join(" ");
  return result;
}
