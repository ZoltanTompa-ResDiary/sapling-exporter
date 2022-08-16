import { AsciiTree } from "oo-ascii-tree";
import { Tree } from "../src/parser/types/Tree";

import * as path from "path";
import { SaplingParser } from "../src/parser/SaplingParser";

const file = path.join(__dirname, "../sandbox/React/Pages/PortalHome.tsx");
const parser = new SaplingParser(file);

const result = parser.parse();

console.dir(result, {
  depth: null,
});
// todo this sould be in a json export

//console.log(result);

function printName(root: Tree, tree: AsciiTree) {
  const a = new AsciiTree(`${root.name}`);
  tree.add(a);
  root.children.forEach((node) => {
    printName(node, a);
  });
}

console.log("----------------------");
const tree = new AsciiTree("root");
printName(result, tree);
tree.printTree(); // todo this should go into a .txt file
console.log("----------------------");

/*
const tree = new AsciiTree("root");

const child1 = new AsciiTree("child1");
const child2 = new AsciiTree("child2");
const child3 = new AsciiTree("child3");

const grandchild1 = new AsciiTree("grandchild1");
const grandchild2 = new AsciiTree("grandchild2");

child2.add(grandchild1);
child2.add(grandchild2);

tree.add(child1);
tree.add(child2);
tree.add(child3);
*/
/*
tree.add(new AsciiTree("child1"));

tree.add(
  new AsciiTree(
    "child2",
    new AsciiTree("grandchild1"),
    new AsciiTree("grandchild2")
  )
);

tree.add(new AsciiTree("child3"));
tree.printTree();
*/
