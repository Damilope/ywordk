import { getFimidaraEndpoints } from "@/lib/api/fimidaraEndpoints.js";
import { useRequest } from "ahooks";

export function useLoadBlogList(filepath) {
  async function getBlogList() {
    const result = await getFimidaraEndpoints().files.readFile({
      body: { filepath },
    });
    const blogList = await result.body.json();
    return blogList as Array<IBlogInfo>;
  }

  const blogsHook = useRequest(getBlogList, {
    cacheKey: filepath,
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
  return blogsHook;
}
