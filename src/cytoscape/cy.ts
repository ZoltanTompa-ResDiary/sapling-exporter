import { node, nodeType, edge, data } from "../types";

console.log("weeeeeeeee");

const layout = {
  layout: {
    name: "grid",
    rows: 1,
  },
};

const style = {
  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "data(bgColor)", //"blueviolet",
        label: "data(name)",
      },
    },

    /* ,
    {
      selector: "[bgColor]",
      style: {
        "background-color": "data(bgColor)",
      },
    },
    /*  this works!
    {
      selector: "[isSphinx]",
      style: {
        "background-color": "yellow",
      },
    },
,
    {
      selector: "[type]",
      style: {
        "background-color": "yellow",
      },
    }*/ {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "black",
        "target-arrow-color": "black",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],
};

function getNodeColor(type: nodeType): string {
  switch (type) {
    case "Portal":
      return "orange";
    case "Sphinx":
      return "blue";
    case "3rdParty":
      return "grey";
  }
}

const nodes: node[] = [
  { id: "a", name: "A", type: "Portal" },
  { id: "b", name: "B", type: "Sphinx" },
  { id: "c", name: "C", type: "3rdParty" },
];

const nodes2: node[] = [
  {
    id: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
    name: "AboutUs",
    type: "Portal",
  },
  {
    id: "Nq42mMp5OWBYfmPeoVudeLMzX7xcVmuT",
    name: "PopUpManager",
    type: "Portal",
  },
  {
    id: "ScW5hd55XY2DKXf1PZWxNcCOHrxMofGY",
    name: "AcceptDishCultTermsAndPrivacyModal",
    type: "Portal",
  },
  {
    id: "OH5jCNd7yqpZsB1vpB08EJmh1vW3cTwG",
    name: "StaticPageLayout",
    type: "Portal",
  },
  {
    id: "UebOlnfy3udKZa3Cg9zYGSQS5Bnqat4C",
    name: "H5",
    type: "Sphinx",
  },
  {
    id: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    name: "PageContextWrapper",
    type: "Portal",
  },
  {
    id: "IV5bQZCmcsD82KPqgoUKL4QjnBCxZrrL",
    name: "ErrorBoundary",
    type: "Portal",
  },
  {
    id: "GT0rIVkjNlF4xlQ2AccoecselLp4VYzV",
    name: "GeoLocationProvider",
    type: "Portal",
  },
  {
    id: "z3nbHoqxraeJQ1aCyi8hICEO3nxYcCL6",
    name: "ThemeProvider",
    type: "3rdParty",
  },
  {
    id: "FdZvhBemoUkCDKBGeVRfgN23yAmzQfhH",
    name: "PortalAnalyticsProvider",
    type: "Portal",
  },
  {
    id: "AJD1CqwHr3ZyFFwapc0wflqG895FcMfB",
    name: "SegmentConsentManager",
    type: "Portal",
  },
  {
    id: "H0OLh8IRYfI8OIlSqRQrkv0zWH7q3fJu",
    name: "ConsentManager",
    type: "3rdParty",
  },
  {
    id: "O1CUl99QKcBpVLauYl9kptyeQhFAPFdf",
    name: "FeatureProvider",
    type: "Portal",
  },
];

const edges: edge[] = [
  {
    id: "ab",
    source: "a",
    target: "b",
  },
];

const edges2: edge[] = [
  {
    id: "076b2f95-0609-4bdc-ae68-c4b8d87908b3",
    source: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
    target: "Nq42mMp5OWBYfmPeoVudeLMzX7xcVmuT",
  },
  {
    id: "e463c5cd-abf2-411f-9a7d-ec5862c762b6",
    source: "Nq42mMp5OWBYfmPeoVudeLMzX7xcVmuT",
    target: "ScW5hd55XY2DKXf1PZWxNcCOHrxMofGY",
  },
  {
    id: "380244de-d6ab-4aae-b7a2-fb984904b3f0",
    source: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
    target: "OH5jCNd7yqpZsB1vpB08EJmh1vW3cTwG",
  },
  {
    id: "dc117bc6-d444-424f-8b5a-b6c56abb103b",
    source: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
    target: "UebOlnfy3udKZa3Cg9zYGSQS5Bnqat4C",
  },
  {
    id: "b4aefab1-9424-4172-9812-ecd7299b78a0",
    source: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
    target: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
  },
  {
    id: "b4869593-b0fe-41e4-847b-4757ebf1a323",
    source: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    target: "IV5bQZCmcsD82KPqgoUKL4QjnBCxZrrL",
  },
  {
    id: "05b1d664-89ce-4eac-a2fa-ca3b81b3e8f7",
    source: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    target: "GT0rIVkjNlF4xlQ2AccoecselLp4VYzV",
  },
  {
    id: "c416c412-3d17-4df2-b2f8-8bc56e622317",
    source: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    target: "z3nbHoqxraeJQ1aCyi8hICEO3nxYcCL6",
  },
  {
    id: "97f0f664-90e5-4a64-8d1f-b1097cc12c55",
    source: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    target: "FdZvhBemoUkCDKBGeVRfgN23yAmzQfhH",
  },
  {
    id: "09d83df3-6ea9-43ee-9b0f-920e0f82d88f",
    source: "FdZvhBemoUkCDKBGeVRfgN23yAmzQfhH",
    target: "AJD1CqwHr3ZyFFwapc0wflqG895FcMfB",
  },
  {
    id: "8b075429-14f8-4fcd-ab85-6fbaa2f4e8a5",
    source: "AJD1CqwHr3ZyFFwapc0wflqG895FcMfB",
    target: "H0OLh8IRYfI8OIlSqRQrkv0zWH7q3fJu",
  },
  {
    id: "8edbe972-b81c-449a-b5a9-bc55bf4281b3",
    source: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
    target: "O1CUl99QKcBpVLauYl9kptyeQhFAPFdf",
  },
];

function getData() {
  return {
    container: document.getElementById("cy"), // container to render in
    elements: [
      ...nodes2.map((n): data => {
        return { data: { ...n, bgColor: getNodeColor(n.type) } };
      }),
      ...edges2.map((e): data => {
        return { data: { ...e } };
      }),
    ],
    ...style,
    ...layout,
  };
}
