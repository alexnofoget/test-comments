import { CommentType, FormattedCommentType } from './CommentsTypes';

export const flattenComments = (commentsTree: CommentType[]): FormattedCommentType[] => {
  let queue = [...commentsTree];
  const result: FormattedCommentType[] = [];
  while (queue.length > 0) {
    const comment = queue[0];
    const newComments = comment.comments && comment.comments.length > 0 ? comment.comments : [];
    queue = [
      ...newComments.map((c) => ({ ...c, deep: comment.deep ? comment.deep + 1 : 1 })),
      ...queue.slice(1, queue.length),
    ];
    result.push({
      author: comment.author,
      message: comment.message,
      deep: comment.deep || 0,
    });
  }
  return result;
};
