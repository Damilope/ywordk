import { FimidaraEndpointError } from "fimidara";

export function useErrorNode(error?: Error) {
  if (error) {
    if ((error as FimidaraEndpointError).isFimidaraEndpointError) {
      return (error as FimidaraEndpointError).errors[0].message;
    } else {
      return error.message;
    }
  }

  return null;
}
