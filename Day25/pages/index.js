import Jobs from "../components/Jobs";
import fetch from 'isomorphic-fetch';

export default function Home({ data }) {
  return (
    <div className="app">
      <Jobs jobs={data} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const API_URL = `https://jobs.github.com/positions.json?description=react`;
  const data = await fetch(API_URL).then(response => response.json());
  return {
    props: {
      data,
    }
  }
}
