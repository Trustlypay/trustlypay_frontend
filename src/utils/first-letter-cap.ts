export function capitalizeFirstLetter(input: string): string {
  const result = input
    .replace("-", " ")
    .split(" ")
    .map((item) => {
      return item?.charAt(0).toUpperCase() + item?.slice(1);
    })
    .join(" ");
  return result;
}
