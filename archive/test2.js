"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const oo_ascii_tree_1 = require("oo-ascii-tree");
const path = __importStar(require("path"));
const SaplingParser_1 = require("../src/parser/SaplingParser");
const file = path.join(__dirname, "../sandbox/React/Pages/PortalHome.tsx");
const parser = new SaplingParser_1.SaplingParser(file);
const result = parser.parse();
console.dir(result, {
    depth: null,
});
// todo this sould be in a json export
//console.log(result);
function printName(root, tree) {
    const a = new oo_ascii_tree_1.AsciiTree(`${root.name}`);
    tree.add(a);
    root.children.forEach((node) => {
        printName(node, a);
    });
}
console.log("----------------------");
const tree = new oo_ascii_tree_1.AsciiTree("root");
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
//# sourceMappingURL=test2.js.map