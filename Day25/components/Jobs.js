import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';

const Jobs = ({ jobs }) => {
	return (
		<div className="container">
			<JobsStyled>
				<SearchBar />
				<div className="jobs-grid">
					{jobs.map((job) => (
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

const JobsStyled = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 60px;
	.jobs-grid {
		margin-top: 70px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 15px;
		a {
			color: inherit;
			text-decoration: none;
		}
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
	@media screen and (max-width: 1024px) {
		.jobs-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media screen and (max-width: 768px) {
		.jobs-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 500px) {
		.jobs-grid {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

export default Jobs;
