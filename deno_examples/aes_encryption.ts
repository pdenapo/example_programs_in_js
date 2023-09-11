// import {
//   decode as hd,
//   encode as he,
// } from "https://deno.land/std/encoding/hex.ts";

import {
  decode,
  encode,
} from "https://deno.land/std@0.201.0/encoding/base64.ts";


const te = (s: string) => new TextEncoder().encode(s),
  td = (d: Uint8Array) => new TextDecoder().decode(d);

const rawKey = new Uint8Array([
  238,
  17,
  126,
  165,
  51,
  87,
  22,
  218,
  53,
  217,
  137,
  113,
  215,
  198,
  109,
  117,
]);

const key = await crypto.subtle.importKey(
  "raw",
  rawKey.buffer,
  "AES-CBC",
  true,
  ["encrypt", "decrypt"],
);

const iv = await crypto.getRandomValues(new Uint8Array(16));


async function encrypt(plainText:string)
{
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv },
    key,
    te(plainText),
  );
  
  const encryptedBytes = new Uint8Array(encrypted);
  const encrypted_base64 = encode(encryptedBytes);
  return encrypted_base64 
}

async function decrypt(encrypted_base64:string) {
const encrypted_data=decode(encrypted_base64)
//console.log(encrypted_data)

const decryptedBuffer = await crypto.subtle.decrypt(
    { name: "AES-CBC", iv },
   key,
   encrypted_data,
 );

const decryptedBytes = new Uint8Array(decryptedBuffer);
console.log(decryptedBytes)

const decryptedText = td(decryptedBytes);
return decryptedText 
}


//const plainText = "Hola mundo encriptado!";
const plainText = "Chau mundo encriptado!";
const encrypted_base64 = await encrypt(plainText)
console.log("Encrypted data",encrypted_base64);
const decryptedText = await decrypt(encrypted_base64)
console.log("Decrypted data=", decryptedText);
