import { Tree, node, nodeType, edge } from "../types";
import { logAll } from "../helpers";
import { v4 as uuidv4 } from "uuid";

const testTree: Tree = {
  id: "XZsfuUcJUID9mZqPIsxwvnbEXMwIOuxt",
  name: "AboutUs",
  fileName: "AboutUs.tsx",
  filePath: "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
  importPath: "/",
  expanded: false,
  depth: 0,
  count: 1,
  thirdParty: false,
  reactRouter: false,
  reduxConnect: false,
  children: [
    {
      id: "Nq42mMp5OWBYfmPeoVudeLMzX7xcVmuT",
      name: "PopUpManager",
      fileName: "PopUpManager",
      filePath:
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PopUpManager.tsx",
      importPath: "../Components/PopUpManager",
      expanded: false,
      depth: 1,
      thirdParty: false,
      reactRouter: false,
      reduxConnect: false,
      count: 1,
      props: {},
      children: [
        {
          id: "ScW5hd55XY2DKXf1PZWxNcCOHrxMofGY",
          name: "AcceptDishCultTermsAndPrivacyModal",
          fileName: "AcceptDishCultTermsAndPrivacy",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\Modals\\AcceptDishCultTermsAndPrivacy.tsx",
          importPath: "../Pages/Modals/AcceptDishCultTermsAndPrivacy",
          expanded: false,
          depth: 2,
          thirdParty: false,
          reactRouter: false,
          reduxConnect: false,
          count: 1,
          props: { closeMeFn: true },
          children: [],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PopUpManager.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
      ],
      parentList: [
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
      ],
      error: "",
    },
    {
      id: "OH5jCNd7yqpZsB1vpB08EJmh1vW3cTwG",
      name: "StaticPageLayout",
      fileName: "StaticPageLayout",
      filePath:
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\StaticPageLayout.js",
      importPath: "../Components/StaticPageLayout",
      expanded: false,
      depth: 1,
      thirdParty: false,
      reactRouter: false,
      reduxConnect: false,
      count: 1,
      props: {
        title: true,
        headerBackgroundImage: true,
        maskHeaderImage: true,
        isTallHeader: true,
        isHeaderImageDark: true,
        isDownloadAppSectionEnabled: true,
      },
      children: [],
      parentList: [
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
      ],
      error: "",
    },
    {
      id: "UebOlnfy3udKZa3Cg9zYGSQS5Bnqat4C",
      name: "H5",
      fileName: "ui-shared",
      filePath:
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\@resdiary\\ui-shared",
      importPath: "@resdiary/ui-shared",
      expanded: false,
      depth: 1,
      thirdParty: true,
      reactRouter: false,
      reduxConnect: false,
      count: 3,
      props: {},
      children: [],
      parentList: [
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
      ],
      error: "",
    },
    {
      id: "7JXRH6NGDngbXT8zz9qz3d9UmcD5zCSS",
      name: "PageContextWrapper",
      fileName: "PageContextWrapper",
      filePath:
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
      importPath: "../Components/PageContextWrapper",
      expanded: false,
      depth: 1,
      thirdParty: false,
      reactRouter: false,
      reduxConnect: false,
      count: 1,
      props: {},
      children: [
        {
          id: "IV5bQZCmcsD82KPqgoUKL4QjnBCxZrrL",
          name: "ErrorBoundary",
          fileName: "ErrorBoundary",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\ErrorBoundary.tsx",
          importPath: "./ErrorBoundary",
          expanded: false,
          depth: 2,
          thirdParty: false,
          reactRouter: false,
          reduxConnect: false,
          count: 2,
          props: { errorHandler: true },
          children: [],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
        {
          id: "GT0rIVkjNlF4xlQ2AccoecselLp4VYzV",
          name: "GeoLocationProvider",
          fileName: "GeoLocationContext",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\contexts\\GeoLocationContext.tsx",
          importPath: "../contexts/GeoLocationContext",
          expanded: false,
          depth: 2,
          thirdParty: false,
          reactRouter: false,
          reduxConnect: false,
          count: 1,
          props: {},
          children: [],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
        {
          id: "z3nbHoqxraeJQ1aCyi8hICEO3nxYcCL6",
          name: "ThemeProvider",
          fileName: "styled-components",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\styled-components",
          importPath: "styled-components",
          expanded: false,
          depth: 2,
          thirdParty: true,
          reactRouter: false,
          reduxConnect: false,
          count: 1,
          props: { theme: true },
          children: [],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
        {
          id: "FdZvhBemoUkCDKBGeVRfgN23yAmzQfhH",
          name: "PortalAnalyticsProvider",
          fileName: "PortalAnalyticsContext",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\contexts\\PortalAnalyticsContext.tsx",
          importPath: "../contexts/PortalAnalyticsContext",
          expanded: false,
          depth: 2,
          thirdParty: false,
          reactRouter: false,
          reduxConnect: false,
          count: 1,
          props: {
            analyticsWriteKey: true,
            analyticsLoadingDelayMs: true,
            theme: true,
          },
          children: [
            {
              id: "AJD1CqwHr3ZyFFwapc0wflqG895FcMfB",
              name: "SegmentConsentManager",
              fileName: "SegmentConsentManager",
              filePath:
                "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\SegmentConsentManager.tsx",
              importPath: "../Components/SegmentConsentManager",
              expanded: false,
              depth: 3,
              thirdParty: false,
              reactRouter: false,
              reduxConnect: false,
              count: 1,
              props: { segmentWriteKey: true },
              children: [
                {
                  id: "H0OLh8IRYfI8OIlSqRQrkv0zWH7q3fJu",
                  name: "ConsentManager",
                  fileName: "consent-manager",
                  filePath:
                    "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\@segment\\consent-manager",
                  importPath: "@segment/consent-manager",
                  expanded: false,
                  depth: 4,
                  thirdParty: true,
                  reactRouter: false,
                  reduxConnect: false,
                  count: 1,
                  props: {
                    writeKey: true,
                    shouldRequireConsent: true,
                    bannerContent: true,
                    bannerSubContent: true,
                    preferencesDialogTitle: true,
                    preferencesDialogContent: true,
                    cancelDialogTitle: true,
                    cancelDialogContent: true,
                    defaultDestinationBehavior: true,
                    bannerActionsBlock: true,
                    bannerTextColor: true,
                    bannerBackgroundColor: true,
                    bannerHideCloseButton: true,
                  },
                  children: [],
                  parentList: [
                    "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\SegmentConsentManager.tsx",
                    "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\contexts\\PortalAnalyticsContext.tsx",
                    "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
                    "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
                  ],
                  error: "",
                },
              ],
              parentList: [
                "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\contexts\\PortalAnalyticsContext.tsx",
                "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
                "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
              ],
              error: "",
            },
          ],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
        {
          id: "O1CUl99QKcBpVLauYl9kptyeQhFAPFdf",
          name: "FeatureProvider",
          fileName: "FeatureContext",
          filePath:
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\contexts\\FeatureContext.tsx",
          importPath: "../contexts/FeatureContext",
          expanded: false,
          depth: 2,
          thirdParty: false,
          reactRouter: false,
          reduxConnect: false,
          count: 1,
          props: { featureFlags: true },
          children: [],
          parentList: [
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Components\\PageContextWrapper.tsx",
            "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
          ],
          error: "",
        },
      ],
      parentList: [
        "C:\\Fun\\sapling-exporter\\sandbox\\Portal\\Pages\\AboutUs.tsx",
      ],
      error: "",
    },
  ],
  parentList: [],
  props: {},
  error: "",
};

function getNodeType({
  thirdParty,
  importPath,
}: Pick<Tree, "thirdParty" | "importPath">): nodeType {
  if (thirdParty) {
    if (importPath.startsWith("@resdiary/")) {
      return "Sphinx";
    } else {
      return "3rdParty";
    }
  } else {
    return "Portal";
  }
}

const TransformTreeToNodesAndEdges = (tree: Tree) /*:*/ => {
  const nodes: node[] = [];
  const edges: edge[] = [];

  // uuidv4();

  function getNodeAndEdge(root: Tree, parentID: string | null): void {
    nodes.push({
      id: root.id,
      name: root.name,
      type: getNodeType({
        thirdParty: root.thirdParty,
        importPath: root.importPath,
      }),
    });

    if (parentID) {
      edges.push({ id: uuidv4(), source: parentID, target: root.id });
    }

    root.children.forEach((node) => {
      getNodeAndEdge(node, root.id);
    });
  }

  getNodeAndEdge(tree, null);

  return { nodes: nodes, edges: edges };
};

logAll(TransformTreeToNodesAndEdges(testTree));

export { TransformTreeToNodesAndEdges };
