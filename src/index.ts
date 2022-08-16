import { Tree } from "./types";
import { SaplingParser } from "./parser/SaplingParser";
import BuildTree from "./asciiTree/buildTree";
import * as fs from "fs";
import * as path from "path";
import { logAll } from "./helpers";

const GetJsonTree = (sourceEntrypoint: string): Tree => {
  const parsedTree = new SaplingParser(
    path.join(__dirname, sourceEntrypoint)
  ).parse();

  return parsedTree;
};

const ExportJsonTree = (sourceEntrypoint: string, outPath: string): void => {
  const sPath = path.parse(sourceEntrypoint);
  logAll(sPath);

  const parsedTree = GetJsonTree(sourceEntrypoint);

  fs.writeFile(
    `./out/${sPath.name}.json`,
    JSON.stringify(parsedTree),
    (err) => {
      if (err) throw err;
      console.log(`ExportJsonTree -- The file has been saved!`);
    }
  );
};

const ExportTextTree = (sourceEntrypoint: string, outPath: string): void => {
  const sPath = path.parse(sourceEntrypoint);
  logAll(sPath);

  const oPath = path.parse(outPath);
  logAll(oPath);

  const parsedTree = GetJsonTree(sourceEntrypoint);

  const asciiTree = BuildTree(parsedTree);

  // note this is for debug
  //logAll(asciiTree.toString());

  fs.writeFile(`./out/${sPath.name}.txt`, asciiTree.toString(), (err) => {
    if (err) throw err;
    console.log(`ExportTextTree -- The file has been saved!`);
  });
};

// fixme remove this, only here for testing
//ExportJsonTree("../sandbox/Portal/Pages/AboutUs.tsx", "../out/");
//ExportTextTree("../sandbox/Portal/Pages/AboutUs.tsx", "../out/");

export { ExportJsonTree, ExportTextTree };
