import assert from "assert";
import { File, FimidaraEndpoints, stringifyFimidaraFilepath } from "fimidara";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PageLoading from "../PageLoading";
import PageMessage from "../PageMessage";

const kWordPicsFolderpath = process.env.NEXT_PUBLIC_WORD_PICS_FOLDERPATH;
assert(kWordPicsFolderpath, "kWordPicsFolderpath is not set");

const useWordPics = () => {
  const [wordPics, setWordPics] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fimidaraRef = useRef<FimidaraEndpoints>(new FimidaraEndpoints());

  const fetchWordPics = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fimidaraRef.current.folders.listFolderContent({
        folderpath: kWordPicsFolderpath,
        contentType: "file",
      });

      const files = result.files.sort((a, b) => {
        return a.createdAt - b.createdAt;
      });

      setWordPics(files);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWordPics();
  }, [fetchWordPics]);

  return { wordPics, isLoading, error };
};

const WordContainer = () => {
  const { wordPics, isLoading, error } = useWordPics();
  const { latestWordPic, remainingWordPics } = useMemo(() => {
    const latestWordPic = wordPics[0];
    const remainingWordPics = wordPics.slice(1);
    return { latestWordPic, remainingWordPics };
  }, [wordPics]);

  if (isLoading) {
    return <PageLoading />;
  }

  if (error) {
    return <PageMessage message={error.message} />;
  }

  return (
    <div>
      <div>
        <Image
          src={stringifyFimidaraFilepath(latestWordPic)}
          alt={latestWordPic.description ?? `Scripture - ${latestWordPic.name}`}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {remainingWordPics.map((pic) => {
          const filepath = stringifyFimidaraFilepath(pic);
          return (
            <div key={filepath}>
              <Image
                src={filepath}
                alt={pic.description ?? `Scripture - ${pic.name}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordContainer;
