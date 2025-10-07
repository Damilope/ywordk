"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { fimidxConsoleLogger } from "softkave-node-utils/common";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    fimidxConsoleLogger.error(error);
  }, [error]);

  // TODO: only display ExternalErrors
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      {/* <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button> */}
    </div>
  );
}
