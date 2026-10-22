export type ConnectionDescriptionPart =
  | { kind: "text"; value: string }
  | { kind: "link"; text: string; href: string };

export type ConnectionStep = {
  id: string;
  title: string;
  description: readonly ConnectionDescriptionPart[];
};
