export type nodeType = "Portal" | "Sphinx" | "3rdParty";
export type node = {
  id: string;
  name: string;
  type: nodeType;
  bgColor?: string;
};

export type edge = {
  id: string;
  source: string;
  target: string;
};

export type data = {
  data: node | edge;
};
