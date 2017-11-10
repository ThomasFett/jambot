export default class AudioInputHelper {
    constructor() {

    }

    static async getAudioInputDevices() {
        const allDevices = await navigator.mediaDevices.enumerateDevices()

        return allDevices.filter(device => device.kind === 'audioinput')
    }

    // returns a promise
    static async getAudioInputStream(audioInputLabel) {
        const allAudioInputDevices = await AudioInputHelper.getAudioInputDevices()
        const audioInputDevice = allAudioInputDevices.find( device => device.label === audioInputLabel)
        const constraints = {
            audio: {
                deviceId: audioInputDevice.deviceId
            }
        }

        return await navigator.mediaDevices.getUserMedia(constraints)
    }
}
