import { join, normalize } from "path";

// Use local files during build time
const isBuildTime =
  typeof window === "undefined" && process.env.NODE_ENV === "production";

export const kConstants = {
  blogsFolder: "blogs",
  blogsFile(pathname: string, filename: string) {
    return normalize(`${kConstants.blogsFolder}/${pathname}/${filename}.mdx`);
  },
  booksFolder: "books",
  projectsFolder: "projects",
  blogsDefFilename: "blog-def-list.json",
  blogsItemListFilename: "blog-item-list.json",
  booksItemListFilename: "book-item-list.json",
  projectsItemListFilename: "project-item-list.json",
  getURL(filepath: string) {
    if (isBuildTime) {
      // During build time, read from local files
      const publicPath = join(process.cwd(), "public", filepath);
      return publicPath;
    }

    // During runtime, use the files server URL if available
    const filesServerURL = process.env.NEXT_PUBLIC_FILES_SERVER_URL;
    if (filesServerURL) {
      const filesServerURLObj = new URL(filesServerURL);
      const fileServerHost =
        filesServerURLObj.protocol + filesServerURLObj.host;
      const fileServerBasepath = filesServerURLObj.pathname;
      return new URL(
        normalize(fileServerBasepath + "/" + filepath),
        fileServerHost
      );
    }

    // Fallback to local files
    const publicPath = join(process.cwd(), "public", filepath);
    return publicPath;
  },
};

export const kAppRootPaths = {
  home: "/",
  blogs: "/blogs",
  books: "/books",
  projects: "/projects",
  calendar: "/calendar",
  clocks: "/clocks",
};
