import assert from "assert";

const workspaceRootname = process.env.NEXT_PUBLIC_WORKSPACE_ROOTNAME;
const faithBlogFolder = process.env.NEXT_PUBLIC_FAITH_BLOG_FOLDER;
const overengineeredBlogFolder =
  process.env.NEXT_PUBLIC_OVERENGINEERED_BLOG_FOLDER;
const faithBlogListFilepath = process.env.NEXT_PUBLIC_FAITH_BLOGLIST_FILE_PATH;
const overengineeredBlogListFilepath =
  process.env.NEXT_PUBLIC_OVERENGINEERED_BLOGLIST_FILE_PATH;

assert(workspaceRootname);
assert(faithBlogFolder);
assert(overengineeredBlogFolder);
assert(faithBlogListFilepath);
assert(overengineeredBlogListFilepath);

export const systemConstants = {
  workspaceRootname,
  faithBlogFolder,
  faithBlogListFilepath,
  overengineeredBlogFolder,
  overengineeredBlogListFilepath,
  appShortName: "overengineered",
};

export const appRootPaths = {
  home: "/",
  faithBlogList: "/blogs/faith",
  overengineeredBlogList: "/blogs/overengineered",

  faithBlog(filename: string) {
    return `${this.faithBlogList}/${filename}`;
  },
  overengineeredBlog(filename: string) {
    return `${this.overengineeredBlogList}/${filename}`;
  },
};
