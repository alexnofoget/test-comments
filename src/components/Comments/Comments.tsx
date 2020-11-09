import React, { useMemo, useState } from 'react';
import styles from './Comments.module.scss';
import { Comment } from './Comment';
import { comments } from './mocks';
import { flattenComments } from './utils';

export const Comments: React.FC = () => {
  const [active, setActive] = useState<string>('');
  const list = useMemo(() => flattenComments(comments), [comments]);

  return (
    <div className={styles.Comments}>
      {list.map((comment) => (
        <Comment
          isActive={active === comment.author}
          onClick={(): void => setActive(comment.author)}
          key={`${comment.author}-${comment.deep}`}
          comment={comment}
        />
      ))}
    </div>
  );
};
