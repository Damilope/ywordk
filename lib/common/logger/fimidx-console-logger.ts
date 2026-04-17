import { FimidxConsoleLikeLogger } from "fimidx";
import { getClientConfig } from "../getClientConfig";
import { fimidxLogger } from "./fimidx-logger";

const { fimidxLoggerEnabled } = getClientConfig();

export const fimidxConsoleLogger = new FimidxConsoleLikeLogger({
  fimidxLogger: fimidxLogger,
  enableConsoleFallback: true,
  logToFimidx: fimidxLoggerEnabled,
});
