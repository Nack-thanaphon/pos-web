function toObjectKeys<T extends readonly string[]>(
  arr: T
): { [K in T[number]]: K } {
  return Object.fromEntries(arr.map((value) => [value, value])) as {
    [K in T[number]]: K;
  };
}

export const queryKeys = toObjectKeys([
  "projects",
  "zones",
  "easyTemplates",
  "easyTemplatesCount",
] as const);
