import React from 'react';
import { Comments } from '../Comments';
import styles from './App.module.scss';

export const App: React.FC = () => (
  <div className={styles.App}>
    <Comments />
  </div>
);
