function _0x4d54ed(_0x779497) {
    try {
        return window['localStorage'] ? window['localStorage']['getItem'](_0x779497) : null;
    } catch (_0x4cba61) {
        return null;
    }
}

function encrypt_MsToken() {
    return _0x4d54ed('xmst')
}

console.log(encrypt_MsToken())