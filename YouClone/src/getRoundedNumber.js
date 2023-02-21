export const getRoundedNumber = () => {
  let randomNum = Math.round(Math.random() * 10000);

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumSignificantDigits: 2,
    maximumSignificantDigits: 3,
  });

  const formattedNumber = formatter.format(randomNum);

  return formattedNumber;
};