import { AsciiTree } from "oo-ascii-tree";
import { Tree } from "../types";

const PrintName = (root: Tree, tree: AsciiTree) => {
  const a = new AsciiTree(`${root.name}`);
  tree.add(a);
  root.children.forEach((node) => {
    PrintName(node, a);
  });
};

const BuildTree = (saplingTree: Tree) => {
  const tree = new AsciiTree("root");
  PrintName(saplingTree, tree);

  return tree;
};

export default BuildTree;
