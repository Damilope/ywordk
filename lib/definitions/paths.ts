import { kAppRootPaths } from "./system.ts";

export const kAppPaths = {
  blogType(pathname: string) {
    return `${kAppRootPaths.blogs}/${pathname}`;
  },
  blogItem(blogType: string, blogFilename: string) {
    return `${kAppRootPaths.blogs}/${blogType}/${blogFilename}`;
  },
};
