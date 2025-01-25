import assert from "assert";
import { normalize } from "path";

const filesServerURL = process.env.NEXT_PUBLIC_FILES_SERVER_URL;
assert(filesServerURL);

const filesServerURLObj = new URL(filesServerURL);
const fileServerHost = filesServerURLObj.protocol + filesServerURLObj.host;
const fileServerBasepath = filesServerURLObj.pathname;

export const kConstants = {
  filesServerURL,
  fileServerHost,
  fileServerBasepath,
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
    return new URL(
      normalize(kConstants.fileServerBasepath + "/" + filepath),
      kConstants.fileServerHost
    );
  },
};

export const kAppRootPaths = {
  home: "/",
  blogs: "/blogs",
  books: "/books",
  projects: "/projects",
  calendar: "/calendar",
};
