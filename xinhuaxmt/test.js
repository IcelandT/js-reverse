function r(t, e) {
    const n = 31 & e;
    return t << n | t >>> 32 - n
}

function s(t) {
    return t ^ r(t, 9) ^ r(t, 17)
}

function o(t) {
    return t.map(t=>1 === (t = t.toString(16)).length ? "0" + t : t).join("")
}

function a(t) {
    let e = 8 * t.length
      , o = e % 512;
    o = o >= 448 ? 512 - o % 448 - 1 : 448 - o - 1;
    const n = new Uint32Array(68),
        i = new Uint32Array(64)
    const a = new Array((o - 7) / 8)
      , l = new Array(8);
    for (let t = 0, e = a.length; t < e; t++)
        a[t] = 0;
    for (let t = 0, e = l.length; t < e; t++)
        l[t] = 0;
    e = e.toString(2);
    for (let t = 7; t >= 0; t--)
        if (e.length > 8) {
            const n = e.length - 8;
            l[t] = parseInt(e.substr(n), 2),
            e = e.substr(0, n)
        } else
            e.length > 0 && (l[t] = parseInt(e, 2),
            e = "");
    const u = new Uint8Array([...t, 128, ...a, ...l])
      , c = new DataView(u.buffer,0)
      , d = u.length / 64
      , h = new Uint32Array([1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214]);
    for (let t = 0; t < d; t++) {
        n.fill(0),
        i.fill(0);
        const e = 16 * t;
        for (let t = 0; t < 16; t++)
            n[t] = c.getUint32(4 * (e + t), !1);
        for (let t = 16; t < 68; t++)
            n[t] = (f = n[t - 16] ^ n[t - 9] ^ r(n[t - 3], 15)) ^ r(f, 15) ^ r(f, 23) ^ r(n[t - 13], 7) ^ n[t - 6];
        for (let t = 0; t < 64; t++)
            i[t] = n[t] ^ n[t + 4];
        const o = 2043430169
          , a = 2055708042;
        let l, u, d, p, v, m = h[0], g = h[1], y = h[2], b = h[3], x = h[4], w = h[5], _ = h[6], k = h[7];
        for (let t = 0; t < 64; t++)
            v = t >= 0 && t <= 15 ? o : a,
            u = (l = r(r(m, 12) + x + r(v, t), 7)) ^ r(m, 12),
            d = (t >= 0 && t <= 15 ? m ^ g ^ y : m & g | m & y | g & y) + b + u + i[t],
            p = (t >= 0 && t <= 15 ? x ^ w ^ _ : x & w | ~x & _) + k + l + n[t],
            b = y,
            y = r(g, 9),
            g = m,
            m = d,
            k = _,
            _ = r(w, 19),
            w = x,
            x = s(p);
        h[0] ^= m,
        h[1] ^= g,
        h[2] ^= y,
        h[3] ^= b,
        h[4] ^= x,
        h[5] ^= w,
        h[6] ^= _,
        h[7] ^= k
    }
    var f;
    const p = [];
    for (let t = 0, e = h.length; t < e; t++) {
        const e = h[t];
        p.push((4278190080 & e) >>> 24, (16711680 & e) >>> 16, (65280 & e) >>> 8, 255 & e)
    }
    return p
    }

/* Signature 生成算法 */
function encrypt_signature(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
        const i = t.codePointAt(n);
        if (i <= 127)
            e.push(i);
        else if (i <= 2047)
            e.push(192 | i >>> 6),
            e.push(128 | 63 & i);
        else if (i <= 55295 || i >= 57344 && i <= 65535)
            e.push(224 | i >>> 12),
            e.push(128 | i >>> 6 & 63),
            e.push(128 | 63 & i);
        else {
            if (!(i >= 65536 && i <= 1114111))
                throw e.push(i),
                new Error("input is not supported");
            n++,
            e.push(240 | i >>> 18 & 28),
            e.push(128 | i >>> 12 & 63),
            e.push(128 | i >>> 6 & 63),
            e.push(128 | 63 & i)
        }
    }
    console.log(o(a(e)))
    return o(a(e))
}

text = 'Key=4bb7c7298e0778524f45f240d922d85b5bbc525c313a2f011148273f4ccbd186&Timestamp=1694416354934&Token=&Request={"cid":"277366","pageNum":1,"source":0,"pageSize":15}'
encrypt_signature(text)