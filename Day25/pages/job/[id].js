import styled from 'styled-components';

const JobDetails = ({ job }) => {

    console.log(job);

    return (
        <div className="container">
            <JobStyled>
                <span>{job.type}</span>
                <h2>{job.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
                <br />
                <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
            </JobStyled>
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const { id } = context.query;
    const API_URL = `https://jobs.github.com/positions/${id}.json`;
    const data = await fetch(API_URL).then(response => response.json());

    return {
        props: {
            job: data,
        }
    }
}

const JobStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding-bottom: 100px;
    h2 {
        font-size: 35px;
        margin-bottom: 60px;
    }
    span {
        font-size: 20px;
        margin-bottom: 20px;
        color:#385BB8;
    }
    p,
    li,
    a  {
        font-size: 18px;
        line-height: 30px;
        color: black;
    }
`


export default JobDetails;