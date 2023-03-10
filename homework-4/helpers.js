export function formatString(string) {
  let deleteMarkDollar = string.replace("$", "");
  let convertToNumber = Number(deleteMarkDollar.replace(",", ""));
  return convertToNumber;
}
