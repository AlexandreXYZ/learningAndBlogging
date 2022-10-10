import { FC } from 'react';
import styles from './styles.module.css';

interface AricleCardProps {
    title: string;
}

export const ArticleCard: FC<AricleCardProps> = ({title}) => {
	return <div className={styles.container}>{title}</div>;
};