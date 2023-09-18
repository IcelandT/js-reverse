var s = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257],
    a = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
    i = 0,
    r = 32,
    o = 16

function uuu(e) {
    return (255 & a[e >>> 24 & 255]) << 24 | (255 & a[e >>> 16 & 255]) << 16 | (255 & a[e >>> 8 & 255]) << 8 | 255 & a[255 & e]
}
function c(e) {
    return e ^ lll(e, 2) ^ lll(e, 10) ^ lll(e, 18) ^ lll(e, 24)
}
function lll(e, t) {
    return e << t | e >>> 32 - t
}
function h(e) {
    return e ^ lll(e, 13) ^ lll(e, 23)
}

function A(e) {
    var t, n, i = [];
    t = e.length;
    for (var r = 0; r < t; r++)
        (n = e.charCodeAt(r)) >= 65536 && n <= 1114111 ? (i.push(n >> 18 & 7 | 240),
        i.push(n >> 12 & 63 | 128),
        i.push(n >> 6 & 63 | 128),
        i.push(63 & n | 128)) : n >= 2048 && n <= 65535 ? (i.push(n >> 12 & 15 | 224),
        i.push(n >> 6 & 63 | 128),
        i.push(63 & n | 128)) : n >= 128 && n <= 2047 ? (i.push(n >> 6 & 31 | 192),
        i.push(63 & n | 128)) : i.push(255 & n);
    return i
}

function d(e, t, n) {
    for (var i, r, o = new Array(4), a = new Array(4), s = 0; s < 4; s++)
        a[0] = 255 & e[0 + 4 * s],
        a[1] = 255 & e[1 + 4 * s],
        a[2] = 255 & e[2 + 4 * s],
        a[3] = 255 & e[3 + 4 * s],
        o[s] = a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3];
    for (i = 0; i < 32; i += 4)
        r = uuu(r = o[1] ^ o[2] ^ o[3] ^ n[i + 0]),
        o[0] ^= c(r),
        r = uuu(r = o[2] ^ o[3] ^ o[0] ^ n[i + 1]),
        o[1] ^= c(r),
        r = uuu(r = o[3] ^ o[0] ^ o[1] ^ n[i + 2]),
        o[2] ^= c(r),
        r = uuu(r = o[0] ^ o[1] ^ o[2] ^ n[i + 3]),
        o[3] ^= c(r);
    for (var l = 0; l < 16; l += 4)
        t[l] = o[3 - l / 4] >>> 24 & 255,
        t[l + 1] = o[3 - l / 4] >>> 16 & 255,
        t[l + 2] = o[3 - l / 4] >>> 8 & 255,
        t[l + 3] = 255 & o[3 - l / 4]
}

function s_encrypt(e, t, n) {
    var a = []
      , l = 0
      , c = new Array(r);
    !function(e, t, n) {
        for (var r, o, a = new Array(4), l = new Array(4), c = 0; c < 4; c++)
            l[0] = 255 & e[0 + 4 * c],
            l[1] = 255 & e[1 + 4 * c],
            l[2] = 255 & e[2 + 4 * c],
            l[3] = 255 & e[3 + 4 * c],
            a[c] = l[0] << 24 | l[1] << 16 | l[2] << 8 | l[3];
        for (a[0] ^= 2746333894,
        a[1] ^= 1453994832,
        a[2] ^= 1736282519,
        a[3] ^= 2993693404,
        r = 0; r < 32; r += 4)
            o = uuu(o = a[1] ^ a[2] ^ a[3] ^ s[r + 0]),
            t[r + 0] = a[0] ^= h(o),
            o = uuu(o = a[2] ^ a[3] ^ a[0] ^ s[r + 1]),
            t[r + 1] = a[1] ^= h(o),
            o = uuu(o = a[3] ^ a[0] ^ a[1] ^ s[r + 2]),
            t[r + 2] = a[2] ^= h(o),
            o = uuu(o = a[0] ^ a[1] ^ a[2] ^ s[r + 3]),
            t[r + 3] = a[3] ^= h(o);
        if (n === i)
            for (r = 0; r < 16; r++)
                o = t[r],
                t[r] = t[31 - r],
                t[31 - r] = o
    }(t, c, n),
    new Array(16);
    for (var f = new Array(16), p = e.length; p >= o; ) {
        d(e.slice(l, l + 16), f, c);
        for (var m = 0; m < o; m++)
            a[l + m] = f[m];
        p -= o,
        l += o
    }
    return a
}
function aa() {
    return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
}
function ss(e, t) {
    if (aa() < t)
        throw new RangeError("Invalid typed array length");
    return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)),
    e.length = t),
    e
}
function ff(e) {
    if (e >= aa())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
    return 0 | e
}
function dd(e, t) {
    var n = t.length < 0 ? 0 : 0 | ff(t.length);
    e = ss(e, n);
    for (var i = 0; i < n; i += 1)
        e[i] = 255 & t[i];
    return e
}
function u(e, t, n, i) {
    if ("number" == typeof t)
        throw new TypeError('"value" argument must not be a number');
    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
        if (t.byteLength,
        n < 0 || t.byteLength < n)
            throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (i || 0))
            throw new RangeError("'length' is out of bounds");
        return t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t,n) : new Uint8Array(t,n,i),
        l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = dd(e, t),
        e
    }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
        if ("string" == typeof n && "" !== n || (n = "utf8"),
        !l.isEncoding(n))
            throw new TypeError('"encoding" must be a valid string encoding');
        var i = 0 | p(t, n)
          , r = (e = s(e, i)).write(t, n);
        return r !== i && (e = e.slice(0, r)),
        e
    }(e, t, n) : function(e, t) {
        if (l.isBuffer(t)) {
            var n = 0 | f(t.length);
            return 0 === (e = s(e, n)).length || t.copy(e, 0, 0, n),
            e
        }
        if (t) {
            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                return "number" != typeof t.length || (i = t.length) != i ? s(e, 0) : dd(e, t);
            if ("Buffer" === t.type && o(t.data))
                return d(e, t.data)
        }
        var i;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
    }(e, t)
}

function B(e) {
    return e < 16 ? "0" + e.toString(16) : e.toString(16)
}

function D(e, t, n) {
    var i = e.length;
    (!t || t < 0) && (t = 0),
    (!n || n < 0 || n > i) && (n = i);
    for (var r = "", o = t; o < n; ++o)
        r += B(e[o]);
    return r
}

function l(e, t, n) {
    if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
        return new l(e,t,n);
    if ("number" == typeof e) {
        if ("string" == typeof t)
            throw new Error("If encoding is specified then the first argument must be a string");
        return h(this, e)
    }
    return u(this, e, t, n)
}
l.from = function(e, t, n) {
    return u(null, e, t, n)
}
l.isBuffer = function(e) {
    return !(null == e || !e._isBuffer)
}
l.prototype.toString = function() {
    var e = 0 | this.length;
    return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : function(e, t, n) {
        var i = !1;
        if ((void 0 === t || t < 0) && (t = 0),
        t > this.length)
            return "";
        if ((void 0 === n || n > this.length) && (n = this.length),
        n <= 0)
            return "";
        if ((n >>>= 0) <= (t >>>= 0))
            return "";
        for (e || (e = "utf8"); ; )
            switch (e) {
            case "hex":
                return D(this, t, n);
            case "utf8":
            case "utf-8":
                return S(this, t, n);
            case "ascii":
                return O(this, t, n);
            case "latin1":
            case "binary":
                return E(this, t, n);
            case "base64":
                return _(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return T(this, t, n);
            default:
                if (i)
                    throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(),
                i = !0
            }
    }
    .apply(this, arguments)
}

function y(e, t) {
    return A(b(A(e.substr(0, 16)), A(t)).toUpperCase().substr(0, 16))
}
function b(t, n) {
    var i = 16 - parseInt(n.length % 16);
    n = n.concat(new Array(i).fill(i));
    var r = s_encrypt(n, t, 1);
    return u(null, r, undefined, undefined).toString("hex")
}

function enc_data(t) {
    const n = A(t),
        u = 'T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ',
        c = 'NMVFVILMKT13GEMD3BKPKCTBOQBPZR2P'
    const i = y(u, c);
    const r = b(i, n);
    return r.toUpperCase()
}

var t = '{"addr":"","regnCode":"120000","medinsName":"","medinsLvCode":"","medinsTypeCode":"","openElec":"","pageNum":1,"pageSize":10,"queryDataSource":"es"}'
console.log(enc_data(t))