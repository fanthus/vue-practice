
import CryptoJS from "crypto-js";
import fs from 'fs'

const filePath = "./utils/encrypt_string.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    let value = decode(data)
    console.log(value);
  }
});

function decode(data) {
  const key = CryptoJS.enc.Base64.parse(data);
  // 解出来一个base64,需要将他转化成一个hex string才能正确传入
  const a = CryptoJS.enc.Hex.stringify(key);
  const key1 = CryptoJS.enc.Utf8.parse("37ac0b5f54b04f7fbdc641eed4382fae");
  const bytes = CryptoJS.AES.decrypt(a, key1, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
    format: CryptoJS.format.Hex
  });
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  // return decryptedData
  return JSON.parse(decryptedData)
}
