module.exports = function (errCode, msg, data) {
    return {
        status: {
            code: errCode,
            msg: msg
        },
        data: data || {}
    }
}