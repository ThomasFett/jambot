import { analyze } from 'web-audio-beat-detector'
import { guess } from 'web-audio-beat-detector'
import AudioInputHelper from '../helpers/AudioInputHelper'

export default class BeatDetector {

    constructor(inputDeviceLabel) {
        this.inputDeviceLabel = inputDeviceLabel
        this.inputStream = undefined
        this.currentBPM = undefined
        this.audioContext = new AudioContext()
        this.startingTime = this.audioContext.currentTime
        this.analyzeInterval = 500 //in milliseconds
        this.minimumRecordingLength = 0.1 //in seconds
        this.maximumRecordingLength = 10.0 //in seconds
    }

    async init() {
        this.inputStream = await AudioInputHelper.getAudioInputStream(this.inputDeviceLabel)

        /* Comment in the following 2 lines of code to hear the audio input stream */
        // let source = this.audioContext.createMediaStreamSource(this.inputStream)
        // source.connect(this.audioContext.destination);

        this.recordStream()
        // setInterval is ok here, because we do not have to be precise
        setInterval(() => {
            this.recordStream()
        }, this.analyzeInterval)

    }

    recordStream() {
        const startingTimeOffset = this.audioContext.currentTime - this.startingTime
        const recordingLength = startingTimeOffset < this.maximumRecordingLength
            ? Math.max(startingTimeOffset, this.minimumRecordingLength)
            : this.maximumRecordingLength
        const mediaRecorder = new MediaRecorder(this.inputStream)

        mediaRecorder.start()
        mediaRecorder.ondataavailable = this.mediaRecorderDataHandler.bind(this)

        setTimeout(() => {
            mediaRecorder.stop()
        }, recordingLength * 1000)
    }

    async mediaRecorderDataHandler(event) {
        const data = event.data
        const url = URL.createObjectURL(data)
        const fetchResponse = await fetch(url)
        const arrayBuffer = await fetchResponse.arrayBuffer()
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer)
        this.analyzeRecording(audioBuffer)
    }

    analyzeRecording(audioBuffer) {
        analyze(audioBuffer)
            .then((tempo) => {
                console.log(tempo)
                this.currentBPM = tempo
            })
            .catch((err) => {
                console.log(err)
            });
    }
}
