import assert from "assert";
import * as fimidara from "fimidara";
import fs from "fs";
import fse from "fs-extra";
import { kConstants } from "../lib/definitions/system";
import { IBlogInfo } from "../lib/definitions/types";
import { indexArray } from "../lib/utils/indexArray";

const kFaithBlogDir = "./blogs/faith";
const kOverEngineeredBlogDir = "./blogs/overengineered";
const kFaithBlogListFilepath = "./blogs/faith/faith-blog-list.json";
const kOverEngineeredBlogListFilepath =
  "./blogs/overengineered/overengineered-blog-list.json";

const uploadBlogsJwtToken = process.env.UPLOAD_BLOGS_JWT_TOKEN;
assert(uploadBlogsJwtToken);

const fimidaraEndpoint = new fimidara.FimidaraEndpoints({
  authToken: uploadBlogsJwtToken,
});

/**
 * Uploads blog files from a dir to fimidara.
 */
async function uploadBlogFiles(
  blogListFilepath: string,
  cloudBlogListFilepath: string,
  blogFolderpath: string,
  cloudBlogFolderpath: string
) {
  const [
    cloudBlogListResult,
    cloudBlogListFiles,
    blogListRaw,
    blogListFileNames,
  ] = await Promise.all([
    fimidaraEndpoint.files.readFile({
      body: { filepath: cloudBlogListFilepath },
    }),
    getEveryBlogListFiles(cloudBlogFolderpath),
    fse.promises.readFile(blogListFilepath, "utf-8"),
    fse.promises.readdir(blogFolderpath),
  ]);

  let blogListChanged = false;
  const changedBlogFiles: string[] = [];
  const newBlogFiles: string[] = [];
  const deletedBlogFiles: string[] = [];

  const cloudBlogListRaw = await cloudBlogListResult.body.text();
  const blogListFileStats = await Promise.all(
    blogListFileNames.map((f) => fse.promises.stat(`${blogFolderpath}/${f}`))
  );
  const cloudBlogListJson = JSON.parse(cloudBlogListRaw) as IBlogInfo[];
  const blogListJson = JSON.parse(blogListRaw) as IBlogInfo[];
  const cloudBlogListMap = indexArray(cloudBlogListJson, { path: "filename" });
  const blogListMap = indexArray(blogListJson, { path: "filename" });
  const blogListFileStatMap = blogListFileNames.reduce((map, f, i) => {
    const stat = blogListFileStats[i];
    map[f] = stat;
    return map;
  }, {} as Record<string, fse.Stats>);

  blogListChanged = cloudBlogListRaw !== blogListRaw;
  blogListJson.forEach((blog) => {
    if (!cloudBlogListMap[blog.filename]) {
      newBlogFiles.push(blog.filename);
    }
  });
  cloudBlogListJson.forEach((blog) => {
    if (!blogListMap[blog.filename]) {
      deletedBlogFiles.push(blog.filename);
    }
  });
  cloudBlogListFiles.forEach((file) => {
    const filename = file.name + (file.extension ? `.${file.extension}` : "");
    const fstat = blogListFileStatMap[filename];
    if (file.lastUpdatedAt < fstat.mtimeMs) {
      changedBlogFiles.push(filename);
    }
  });

  console.log();
  console.log(blogFolderpath);
  console.log(`-- blogListChanged`, blogListChanged);
  console.log(`-- deletedBlogFiles`);
  if (deletedBlogFiles.length) console.log(deletedBlogFiles);
  else console.log("none");
  console.log(`-- newBlogFiles`);
  if (newBlogFiles.length) console.log(newBlogFiles);
  else console.log("none");
  console.log(`-- changedBlogFiles`);
  if (changedBlogFiles.length) console.log(changedBlogFiles);
  else console.log("none");

  await Promise.all([
    blogListChanged &&
      fimidaraEndpoint.files.uploadFile({
        body: { filepath: cloudBlogListFilepath, data: blogListRaw },
      }),
    deletedBlogFiles.length &&
      deleteFilesInCloud(cloudBlogFolderpath, deletedBlogFiles),
    newBlogFiles.length &&
      uploadFilesToCloud(blogFolderpath, cloudBlogFolderpath, newBlogFiles),
    changedBlogFiles.length &&
      uploadFilesToCloud(blogFolderpath, cloudBlogFolderpath, changedBlogFiles),
  ]);
}

async function getEveryBlogListFiles(cloudBlogFolderpath: string) {
  const count = await fimidaraEndpoint.folders.countFolderContent({
    body: { folderpath: cloudBlogFolderpath, contentType: "file" },
  });
  let blogList: fimidara.File[] = [];
  let page = 0;

  while (blogList.length < count.body.filesCount) {
    const iterationBlogList = await fimidaraEndpoint.folders.listFolderContent({
      body: {
        page,
        folderpath: cloudBlogFolderpath,
        contentType: "file",
      },
    });
    page = iterationBlogList.body.page + 1;
    blogList = blogList.concat(iterationBlogList.body.files);
  }

  return blogList;
}

async function deleteFilesInCloud(folderpath: string, filenameList: string[]) {
  await Promise.all(
    filenameList.map((f) =>
      fimidaraEndpoint.files.deleteFile({
        body: { filepath: `${folderpath}/${f}` },
      })
    )
  );
}

async function uploadFilesToCloud(
  folderpath: string,
  cloudFolderpath: string,
  filenameList: string[]
) {
  const readStreamList = filenameList.map((f) => {
    const filepath = `${folderpath}/${f}`;
    return fs.createReadStream(filepath, "utf-8");
  });
  await Promise.all(
    readStreamList.map((readStream, i) => {
      const filename = filenameList[i];
      const filepath = `${cloudFolderpath}/${filename}`;
      return fimidaraEndpoint.files.uploadFile({
        body: { filepath, data: readStream },
      });
    })
  );
}

async function main() {
  await Promise.all([
    uploadBlogFiles(
      kFaithBlogListFilepath,
      kConstants.faithBlogListFilepath,
      kFaithBlogDir,
      kConstants.faithBlogFolder
    ),
    uploadBlogFiles(
      kOverEngineeredBlogListFilepath,
      kConstants.overengineeredBlogListFilepath,
      kOverEngineeredBlogDir,
      kConstants.overengineeredBlogFolder
    ),
  ]);
}

console.log("Uploading blog files...");
main().catch(console.error.bind(console));
