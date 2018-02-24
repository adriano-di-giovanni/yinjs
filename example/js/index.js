function successCallback(stream) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    var audioContext = new AudioContext()

    var analyser = audioContext.createAnalyser()
    analyser.fftSize = Math.pow(2, 13)

    var sampleRate = audioContext.sampleRate
    var data = new Float32Array(analyser.fftSize)

    function step() {
        requestAnimationFrame(step)
        analyser.getFloatTimeDomainData(data)
        var frequency = window.yin(data, sampleRate)
        console.log(frequency)
    }

    var mediaStreamSource = audioContext.createMediaStreamSource(stream)
    mediaStreamSource.connect(analyser)

    requestAnimationFrame(step)
}

function errorCallback(err) {
    alert(err)
}

var constraints = {
    audio: true,
}
navigator.getUserMedia(constraints, successCallback, errorCallback)
