import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const Search = ({ searchJobs, query }) => {
	return (
		<div className="container">
			<JobsStyled>
				<SearchBar />

				<h1>Search for {query}</h1>

				<div className="jobs-grid">
					{searchJobs.map((job) => (
						<Link href="/job/:id" as={`/job/${job.id}`}>
							<a>
								<div className="item" key={job.id}>
									<span>{job.type}</span>
									<h3>{job.title}</h3>
									<object>
										<a href={job.company_url} target="_blank">
											{job.company}
										</a>
									</object>
								</div>
							</a>
						</Link>
					))}
				</div>
			</JobsStyled>
		</div>
	);
};

export const getServerSideProps = async (context) => {
	const { q } = context.query;
	const API_URL = `https://jobs.github.com/positions.json?description=${q}`;
	const data = await fetch(API_URL).then((response) => response.json());

	return {
		props: {
			searchJobs: data,
			query: q,
		},
	};
};

const JobsStyled = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 60px;
	h1 {
		margin-top: 58px;
		font-size: 38px;
		color: #385bb8;
	}
	.jobs-grid {
		margin-top: 70px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 15px;
		.item {
			background: white;
			height: 250px;
			padding: 24px;
			position: relative;
			h3 {
				font-size: 24px;
				line-height: 35px;
			}
			span {
				display: block;
				font-size: 16px;
				color: #727e9f;
				margin-bottom: 18px;
			}
			a {
				display: flex;
				flex-direction: column;
				position: absolute;
				bottom: 19px;
				text-decoration: none;
				font-size: 18px;
				margin-top: 40px;
				line-height: 29px;
				color: #727e9f;
			}
		}
	}
`;

export default Search;
