export type CommentType = {
  author: string;
  message: string;
  comments?: CommentType[];
  deep?: number;
};

export type FormattedCommentType = {
  author: string;
  message: string;
  deep: number;
};
