export function capitalizeFirstLetter(input: string): string {
  return input
    .split(" ")
    .map((item) => {
      return item?.charAt(0).toUpperCase() + item?.slice(1);
    })
    .join(" ");
}
