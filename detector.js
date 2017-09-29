let detector = new FaceDetector({
					maxDetectedFaces: 2,
					fastMode: true
				});
let i = 0;
onmessage = e => {
	detector.detect(e.data).then(faces => {
				let faceArr = faces.map(face => {
					let box = face.boundingBox;
					let item = {
						x: box.x,
						y: box.y,
						width: box.width,
						height: box.height,
						left: box.left,
						right: box.left,
						top: box.top,
						bottom: box.bottom
					}
					return item;
				})
				postMessage({
					status: 0,
					faces: faceArr
				});
			}).catch(err => {
				console.log(err);
				postMessage({status: 1});
			})
}
