import React, { useState, useEffect } from 'react';

const Scoores = () => {
	const [scoores, setScoores] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const scrooresLength = scoores?.length;
	let scoorePerPage = 8;

	const fetchScoores = async () => {
		try {
			const res = await fetch('https://www.scorebat.com/video-api/v1/');
			const data = await res.json();
			setScoores(data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const totalPages = Math.ceil(scrooresLength / scoorePerPage);
	let pages = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	const indexOfLastScoore = currentPage * scoorePerPage;
	const indexOfFirstScoore = indexOfLastScoore - scoorePerPage;
	const filtredScoores = scoores.slice(indexOfFirstScoore, indexOfLastScoore);

	useEffect(() => {
		fetchScoores();
	}, []);

	const showModal = (id) => {
		const modal = document.querySelector(`.scoore #modal-${id}`);
		modal.classList.add('show');
	};

	const closeModal = (e) => {
		e.stopPropagation();
		if (e.target.classList.contains('modal')) {
			e.target.classList.remove('show');
		}
	};

	return (
		<>
			<div className="grid-scoore">
				{filtredScoores.map((scoore, index) => (
					<div className="scoore" id={index} key={index} onClick={() => showModal(index)}>
						<img src={scoore.thumbnail} alt="scoore" />
						<div className="info">
							<h4>{scoore.title}</h4>
						</div>
						<div className="modal" id={`modal-${index}`} onClick={(e) => closeModal(e)}>
							<div className="content">
								<div dangerouslySetInnerHTML={{ __html: scoore.embed }} />
							</div>
						</div>
					</div>
				))}
			</div>
			{scrooresLength !== 0 && (
				<div className="paginate">
					<button disabled={currentPage === 1 ? true : false} onClick={() => setCurrentPage(currentPage - 1)}>
						Prev
					</button>
					<button
						disabled={currentPage === totalPages ? true : false}
						onClick={() => setCurrentPage(currentPage + 1)}
					>
						Next
					</button>
				</div>
			)}
		</>
	);
};

export default Scoores;
