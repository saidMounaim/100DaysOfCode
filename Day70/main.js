let size = 0.001;

function increaseSize() {
	let elm = document.getElementById('text');
	let text = new Blotter.Text('OFFBEAT', {
		weight: 100,
		size: 190,
		fill: '#fff',
	});

	let material = new Blotter.RollingDistortMaterial();

	material.uniforms.uSineDistortAmplitude.value = 0.04;

	var blotter = new Blotter(material, {
		texts: text,
	});

	let scope = blotter.forText(text);

	scope.appendTo(elm);

	size += 0.001;
}

increaseSize();
