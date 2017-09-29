let detector = new FaceDetector({
					maxDetectedFaces: 2,
					fastMode: true
				});
let i = 0;
onmessage = e => {
	detector.detect(e.data).then(faces => {
				console.log(faces)
				postMessage({
					status: 0,
					data: faces
				});
			}).catch(err => {
				console.log(err);
				postMessage({status: 1});
			})
}
