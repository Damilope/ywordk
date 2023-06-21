import mergeWith from "lodash/mergeWith";
import { getDate } from "./dateFns";

const tempPrefix = "temp-";

export function isTempId(id: string, matchId?: string) {
  const hasTempPrefix = id.startsWith(tempPrefix);
  if (hasTempPrefix && matchId) {
    return id.endsWith(matchId);
  }

  return hasTempPrefix;
}

export const pluralize = (str: string, count: number = 2) => {
  return `${str}${count === 1 ? "" : "s"}`;
};

export interface IMergeDataMeta {
  arrayUpdateStrategy?: "merge" | "concat" | "replace";
}

export const mergeData = <ResourceType = any>(
  resource: ResourceType,
  data: Partial<ResourceType>,
  meta: IMergeDataMeta = { arrayUpdateStrategy: "replace" }
) => {
  const result = mergeWith(resource, data, (objValue, srcValue) => {
    if (Array.isArray(objValue) && srcValue) {
      const strategy: IMergeDataMeta["arrayUpdateStrategy"] =
        meta.arrayUpdateStrategy || "replace";

      if (strategy === "concat") {
        return objValue.concat(srcValue);
      } else if (strategy === "replace") {
        return srcValue;
      }
    }
  });

  return result;
};

export function filterObjectList<T extends object = object>(
  list: T[],
  field: keyof T,
  searchQuery?: string
) {
  if (!searchQuery) {
    return list;
  }

  const lowercased = searchQuery.toLowerCase();
  return list.filter((block) => {
    const fieldValue = block[field];
    if (fieldValue) {
      return (fieldValue as unknown as string)
        .toLowerCase()
        .includes(lowercased);
    }

    return false;
  });
}

export function getMsForwardFrom(data: string) {
  return Date.now() - getDate(data).valueOf();
}

export function getBackwardMsFrom(data: string) {
  return getDate(data).valueOf() - Date.now();
}

export function toLabelString(str: string) {
  return str.replace(/[_-]/, " ");
}

export function capitalize(str: string) {
  if (str.length === 0) {
    return str;
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function withPrefix(str: string, prefix: string) {
  return str.startsWith(prefix) ? str : `${prefix}${str}`;
}

export function stripPrefix(str: string, prefix: string) {
  return prefix && str.startsWith(prefix) ? str.slice(prefix.length) : str;
}
