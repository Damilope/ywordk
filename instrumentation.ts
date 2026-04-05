import { fimidxConsoleLogger } from "./lib/common/logger";

export function register() {
  fimidxConsoleLogger.log("PID", { pid: process.pid });
  fimidxConsoleLogger.log("PPID", { ppid: process.ppid });
}
