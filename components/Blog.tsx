import { cx } from "@emotion/css";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import utilstyles from "../styles/util.module.css";
import Contact from "./Contact";
import Header from "./Header";
import Layout from "./Layout";

export interface IBlogProps {
  text: string;
}

export default function Blog(props: IBlogProps) {
  const { text } = props;
  const { title, description } = getBlogMeta(text);

  return (
    <React.Fragment>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout>
        <Header />
        <div className={cx(utilstyles["main-width"], utilstyles.section)}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        <Contact className={utilstyles["section"]} />
      </Layout>
    </React.Fragment>
  );
}

// [//]: # (This may be the most platform independent comment)
const kCommentStartsWith = '[//]: # "';
const kCommentEndsWith = '"';
const kCommentTitleKey = "title: ";
const kCommentDescriptionKey = "description: ";
const kNewLine = "\n";

function getCommentList(text: string) {
  let startIndex = 0;
  let newLineIndex = text.indexOf(kNewLine);
  let iterations = 0;

  const maxDepth = 2;
  const commentList: string[] = [];

  while (newLineIndex !== -1 && iterations < maxDepth) {
    const line = text.slice(startIndex, newLineIndex);
    const isComment = line.startsWith(kCommentStartsWith);

    if (line !== "") iterations += 1;
    startIndex = newLineIndex + 1;
    newLineIndex = text.indexOf(kNewLine, startIndex);
    if (!isComment) {
      continue;
    }

    const endCommentIndex = line.indexOf(
      kCommentEndsWith,
      kCommentStartsWith.length
    );
    const comment = line.slice(kCommentStartsWith.length, endCommentIndex);
    commentList.push(comment);
  }

  return commentList;
}

function getBlogMetaFromCommentListWithKey(commentList: string[], key: string) {
  const comment = commentList.find((comment) => comment.startsWith(key));
  if (comment) {
    return comment.slice(key.length);
  }
}

function getBlogMeta(text: string) {
  const commentList = getCommentList(text);
  const title = getBlogMetaFromCommentListWithKey(
    commentList,
    kCommentTitleKey
  );
  const description = getBlogMetaFromCommentListWithKey(
    commentList,
    kCommentDescriptionKey
  );
  return { title, description };
}
