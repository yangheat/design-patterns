const singleTonePattern = (() => {
    let instance

    function init() {
        const _version = '1.0.0'

        function _formatNowDateTime() {
            return new Date().toISOString().split('T')
        }
        return {
            date: {
                getCurrentDate: () => {
                    return _formatNowDateTime()[0]
                },
                getCurrentTime: () => {
                    return _formatNowDateTime()[1].split('.')[0]
                }
            },
            getVersion: () => {
                return _version
            },
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
})()

const utils = singleTonePattern.getInstance()

console.log(utils.getVersion())
console.log(utils.date.getCurrentDate())
console.log(utils.date.getCurrentTime())


