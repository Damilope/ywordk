import { FimidxNextAuthLogger } from "fimidx";
import { fimidxConsoleLogger } from "./fimidx-console-logger";

export const fimidxNextAuthLogger = new FimidxNextAuthLogger({
  fimidxConsoleLogger,
  debug: false,
});
