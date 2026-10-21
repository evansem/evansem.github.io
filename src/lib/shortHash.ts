// Deterministic fake commit hashes, so every section shows a stable 7-character sha.
// Uses 32-bit FNV-1a: cheap, well known and spreads similar inputs across very different outputs.

const FNV_OFFSET_BASIS = 0x811c9dc5;
const FNV_PRIME = 0x01000193;
const SHORT_SHA_LENGTH = 7;

export function shortHash(input: string): string {
  let hash = FNV_OFFSET_BASIS;

  for (let index = 0; index < input.length; index++) {
    hash ^= input.charCodeAt(index);
    // Math.imul keeps the multiplication within 32-bit integer arithmetic.
    hash = Math.imul(hash, FNV_PRIME);
  }

  // `>>> 0` reinterprets the signed 32-bit result as unsigned before printing it as hex.
  const unsignedHash = hash >>> 0;
  const hex = unsignedHash.toString(16).padStart(8, "0");

  return hex.slice(0, SHORT_SHA_LENGTH);
}
