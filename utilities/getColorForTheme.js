import { Appearance } from "react-native-appearance";

export function getColorForTheme(hex: string): string {
  let modifiedHex = hex;
  const isDarkMode = Appearance.getColorScheme() === "dark";

  if (isDarkMode) {
    let opacity = "";
    if (modifiedHex.indexOf("#") === 0) {
      modifiedHex = modifiedHex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (modifiedHex.length === 3) {
      modifiedHex =
        modifiedHex[0] +
        modifiedHex[0] +
        modifiedHex[1] +
        modifiedHex[1] +
        modifiedHex[2] +
        modifiedHex[2];
    } else if (modifiedHex.length === 8) {
      opacity = modifiedHex.slice(-2);
      modifiedHex = modifiedHex.slice(0, 6);
    } else if (modifiedHex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    // invert color components
    const r = (255 - parseInt(modifiedHex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(modifiedHex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(modifiedHex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return `#${padZero(r)}${padZero(g)}${padZero(b)}${opacity}`;
  }
  return hex;
}

function padZero(str: string, len: number = 2): string {
  const zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}
