import assert from "assert";

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
// const workspaceRootname = process.env.NEXT_PUBLIC_WORKSPACE_ROOTNAME;
// const faithBlogFolder = process.env.NEXT_PUBLIC_FAITH_BLOG_FOLDER;
// const overengineeredBlogFolder =
//   process.env.NEXT_PUBLIC_OVERENGINEERED_BLOG_FOLDER;
// const faithBlogListFilepath = process.env.NEXT_PUBLIC_FAITH_BLOGLIST_FILE_PATH;
// const overengineeredBlogListFilepath =
//   process.env.NEXT_PUBLIC_OVERENGINEERED_BLOGLIST_FILE_PATH;

assert(serverURL);
// assert(workspaceRootname);
// assert(faithBlogFolder);
// assert(overengineeredBlogFolder);
// assert(faithBlogListFilepath);
// assert(overengineeredBlogListFilepath);

export const kConstants = {
  // workspaceRootname,
  // faithBlogFolder,
  // faithBlogListFilepath,
  // overengineeredBlogFolder,
  // overengineeredBlogListFilepath,
  // appShortName: "overengineered",
  serverURL,
  blogsFolder: "blogs",
  booksFolder: "books",
  projectsFolder: "projects",
  blogsDefFilename: "blog-def-list.json",
  blogsItemListFilename: "blog-item-list.json",
  booksItemListFilename: "book-item-list.json",
  projectsItemListFilename: "project-item-list.json",
};

export const kAppRootPaths = {
  home: "/",
  blogs: "/blogs",
  books: "/books",
  projects: "/projects",
};
