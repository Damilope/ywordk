#!/usr/bin/env zx

const authToken = process.env.FIMIDARA_AUTH_TOKEN;
if (!authToken) {
  throw new Error("provide FIMIDARA_AUTH_TOKEN env var");
}

const p =
  await $`npx --yes -- fimidara sync -f "ywordk/ywordk/public" -l "public" -d "up" -r -m -t "${authToken}"`;
console.log(p.stderr);
console.log(p.stdout);
