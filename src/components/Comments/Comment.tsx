import React, { memo } from 'react';
import cx from 'classnames';
import { FormattedCommentType } from './CommentsTypes';
import styles from './Comments.module.scss';

interface CommentProps {
  comment: FormattedCommentType;
  isActive: boolean;
  onClick: () => void;
}

export const CommentUnmemorised: React.FC<CommentProps> = ({ comment, isActive = false, onClick }) => {
  return (
    <div className={cx(styles.Comment, { [styles.Active]: isActive })} style={{ marginLeft: comment.deep * 45 }}>
      <button className={styles.Button} type="button" onClick={onClick}>
        {comment.author}
      </button>
      <p>{comment.message}</p>
    </div>
  );
};

export const Comment = memo(CommentUnmemorised, (prev, next) => prev.isActive === next.isActive);
