let detector = new FaceDetector({
					maxDetectedFaces: 2,
					fastMode: true
				});
let i = 0;
onmessage = (e) => {
	if(i <= 0) {
		console.log(e.data)
		detector.detect(e.data).then(faces => {
					console.log(faces)
				}).catch(err => {
					console.log(err)
				})

		++i;
	}
}