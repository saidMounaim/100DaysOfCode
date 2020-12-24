import React, { useState, useEffect } from 'react';

const Colors = () => {
	const [colors, setColors] = useState([]);

	const fetchColor = async () => {
		const data = await fetch('http://colormind.io/api/', {
			method: 'POST',
			body: JSON.stringify({
				model: 'default',
			}),
		})
			.then((result) => result.json())
			.catch(console.log);
		setColors(data.result);
	};

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	}

	function rgbToHex(r, g, b) {
		return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	const generatePalette = () => {
		fetchColor();
	};

	useEffect(() => {
		fetchColor();
	}, []);

	var doubledArray = colors.map((subarray) =>
		subarray.map((sub) => {
			return sub;
		})
	);

	document.onkeydown = function (e) {
		if (e.keyCode == 32) {
			document.querySelector('button').click();
		}
	};

	const copyHex = (hex) => {
		console.log('Color', hex);
	};

	return (
		<>
			<div className="colors-grid">
				{doubledArray.map((color) => (
					<div
						className="color"
						key={color}
						onClick={() => {
							navigator.clipboard.writeText(
								rgbToHex(
									color.toString().split(',')[0],
									color.toString().split(',')[1],
									color.toString().split(',')[2]
								)
							);
						}}
					>
						<div className="bg" style={{ backgroundColor: `rgb(${color.toString()})` }}></div>
						<div className="hex">
							<p>
								{rgbToHex(
									color.toString().split(',')[0],
									color.toString().split(',')[1],
									color.toString().split(',')[2]
								)}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="generate">
				<button onClick={generatePalette}>Generate Palette</button>
			</div>
			<p>Or just press the "Spacebar" to generate new palette</p>
		</>
	);
};

export default Colors;
