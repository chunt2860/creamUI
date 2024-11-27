import { series, parallel } from "gulp";
import { buildModules, buildBundle, buildTheme, copyFiles, concatFiles } from "./src/tasks";

export default series(parallel(buildModules, buildBundle, buildTheme), copyFiles, concatFiles);
