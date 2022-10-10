import type { NextPage } from 'next';
import { ArticleCard } from '../components/ArticleCard';
import { handler } from './api/hello';

interface homeProps {
	postsTitles: string[];
}

const Home: NextPage<homeProps> = ({ postsTitles }) => {

	return (
		<div>
			{ postsTitles.map((title, i) => <ArticleCard key={i} title={title}/>) }
		</div>
	);
};

export const getServerSideProps = async () => {
	const postsTitles = await handler();
	return {
		props: {
			postsTitles
		}
	};
};


export default Home;