export function toSingleString(value: string | string[] | undefined): string {
  if (!value) return "";
  return Array.isArray(value) ? value.join("\n") : String(value);
}
