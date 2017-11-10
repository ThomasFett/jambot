import BeatDetector from '../beatDetector/beatDetector'

const CONFIG = {
    INPUT_DEVICE_LABEL_DEFAULT: 'Default',
    INPUT_DEVICE_LABEL_BEAT_DETECTOR: 'Loopback Logic'
}

export default class Brain {
    constructor() {
        this.beatDetector = undefined
    }

    init() {
        this.beatDetector = new BeatDetector(CONFIG.INPUT_DEVICE_LABEL_BEAT_DETECTOR).init()
    }
}
