function n(t, e) {
    for (var n = 0; n < e.length - 2; n += 3) {
        var r = e.charAt(n + 2);
        r = "a" <= r ? r.charCodeAt(0) - 87 : Number(r),
        r = "+" === e.charAt(n + 1) ? t >>> r : t << r,
        t = "+" === e.charAt(n) ? t + r & 4294967295 : t ^ r
    }
    return t
}

function encrypt(text) {
    var a = text.length;
    const t = "".concat(text.substr(0, 10)).concat(text.substr(Math.floor(a / 2) - 5, 10)).concat(text.substr(-10, 10))
    for (var d = "".concat(String.fromCharCode(103)).concat(String.fromCharCode(116)).concat(String.fromCharCode(107)), h = "320305.131321201".split("."), f = Number(h[0]) || 0, m = Number(h[1]) || 0, g = [], y = 0, v = 0; v < text.length; v++) {
        var _ = text.charCodeAt(v);
        _ < 128 ? g[y++] = _ : (_ < 2048 ? g[y++] = _ >> 6 | 192 : (55296 == (64512 & _) && v + 1 < text.length && 56320 == (64512 & text.charCodeAt(v + 1)) ? (_ = 65536 + ((1023 & _) << 10) + (1023 & text.charCodeAt(++v)),
        g[y++] = _ >> 18 | 240,
        g[y++] = _ >> 12 & 63 | 128) : g[y++] = _ >> 12 | 224,
        g[y++] = _ >> 6 & 63 | 128),
        g[y++] = 63 & _ | 128)
    };
    for (var b = f, w = "".concat(String.fromCharCode(43)).concat(String.fromCharCode(45)).concat(String.fromCharCode(97)) + "".concat(String.fromCharCode(94)).concat(String.fromCharCode(43)).concat(String.fromCharCode(54)), k = "".concat(String.fromCharCode(43)).concat(String.fromCharCode(45)).concat(String.fromCharCode(51)) + "".concat(String.fromCharCode(94)).concat(String.fromCharCode(43)).concat(String.fromCharCode(98)) + "".concat(String.fromCharCode(43)).concat(String.fromCharCode(45)).concat(String.fromCharCode(102)), x = 0; x < g.length; x++)
        b = n(b += g[x], w)
    return b = n(b, k),
    (b ^= m) < 0 && (b = 2147483648 + (2147483647 & b)),
    "".concat((b %= 1e6).toString(), ".").concat(b ^ f)
}


text = '你好'
console.log(encrypt(text))