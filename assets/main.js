/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 89)
}([function (t, e) {
    var n = Array.isArray;
    t.exports = n
}, function (t, e, n) {
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(91),
        d = r.tram = n(48) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function g(t) {
        f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
            o = l.filter(o, function (e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
        i[t] && g(i[t]);
        var r = i[t] = e(u, l, n) || {};
        return h(r), r
    }, r.require = function (t) {
        return i[t]
    }, r.push = function (t) {
        p ? f(t) && t() : a.push(t)
    }, r.env = function (t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var m, y = navigator.userAgent.toLowerCase(),
        b = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        w = r.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
        x = r.env.ios = /(ipod|iphone|ipad)/.test(y);
    r.env.safari = /safari/.test(y) && !w && !x, b && s.on("touchstart mousedown", function (t) {
        m = t.target
    }), r.validClick = b ? function (t) {
        return t === m || u.contains(t, m)
    } : function () {
        return !0
    };
    var _, O = "resize.webflow orientationchange.webflow load.webflow";

    function I(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function (t) {
            l.each(n, function (e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function (t) {
            "function" == typeof t && (l.contains(n, t) || n.push(t))
        }, r.off = function (t) {
            n = arguments.length ? l.filter(n, function (e) {
                return e !== t
            }) : []
        }, r
    }

    function j(t) {
        f(t) && t()
    }

    function E() {
        _ && (_.reject(), c.off("load", _.resolve)), _ = new u.Deferred, c.on("load", _.resolve)
    }
    r.resize = I(c, O), r.scroll = I(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = I(), r.location = function (t) {
        window.location = t
    }, r.env() && (r.location = function () {}), r.ready = function () {
        p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, j), l.each(a, j), r.resize.up()
    }, r.load = function (t) {
        _.then(t)
    }, r.destroy = function (t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, g), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === _.state() && E()
    }, u(r.ready), E(), t.exports = window.Webflow = r
}, function (t, e, n) {
    var r = n(57),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "m", function () {
        return r
    }), n.d(e, "n", function () {
        return i
    }), n.d(e, "o", function () {
        return o
    }), n.d(e, "p", function () {
        return a
    }), n.d(e, "l", function () {
        return u
    }), n.d(e, "k", function () {
        return c
    }), n.d(e, "q", function () {
        return s
    }), n.d(e, "c", function () {
        return f
    }), n.d(e, "e", function () {
        return l
    }), n.d(e, "f", function () {
        return d
    }), n.d(e, "b", function () {
        return p
    }), n.d(e, "j", function () {
        return v
    }), n.d(e, "g", function () {
        return h
    }), n.d(e, "i", function () {
        return g
    }), n.d(e, "h", function () {
        return m
    }), n.d(e, "d", function () {
        return y
    }), n.d(e, "a", function () {
        return b
    }), n.d(e, "r", function () {
        return w
    });
    var r = "IX2_RAW_DATA_IMPORTED",
        i = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        a = "IX2_SESSION_STOPPED",
        u = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        s = "IX2_STOP_REQUESTED",
        f = "IX2_CLEAR_REQUESTED",
        l = "IX2_EVENT_LISTENER_ADDED",
        d = "IX2_EVENT_STATE_CHANGED",
        p = "IX2_ANIMATION_FRAME_CHANGED",
        v = "IX2_PARAMETER_CHANGED",
        h = "IX2_INSTANCE_ADDED",
        g = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        y = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        w = "IX2_VIEWPORT_WIDTH_CHANGED"
}, function (t, e) {
    t.exports = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    var r = n(129),
        i = n(132);
    t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function (t, e, n) {
    var r = n(160),
        i = n(184),
        o = n(39),
        a = n(0),
        u = n(188);
    t.exports = function (t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "y", function () {
        return r
    }), n.d(e, "N", function () {
        return i
    }), n.d(e, "f", function () {
        return o
    }), n.d(e, "n", function () {
        return a
    }), n.d(e, "p", function () {
        return u
    }), n.d(e, "r", function () {
        return c
    }), n.d(e, "l", function () {
        return s
    }), n.d(e, "m", function () {
        return f
    }), n.d(e, "o", function () {
        return l
    }), n.d(e, "q", function () {
        return d
    }), n.d(e, "k", function () {
        return p
    }), n.d(e, "L", function () {
        return v
    }), n.d(e, "M", function () {
        return h
    }), n.d(e, "I", function () {
        return g
    }), n.d(e, "F", function () {
        return m
    }), n.d(e, "G", function () {
        return y
    }), n.d(e, "H", function () {
        return b
    }), n.d(e, "K", function () {
        return w
    }), n.d(e, "z", function () {
        return x
    }), n.d(e, "t", function () {
        return _
    }), n.d(e, "O", function () {
        return O
    }), n.d(e, "v", function () {
        return I
    }), n.d(e, "c", function () {
        return j
    }), n.d(e, "b", function () {
        return E
    }), n.d(e, "e", function () {
        return S
    }), n.d(e, "i", function () {
        return T
    }), n.d(e, "s", function () {
        return A
    }), n.d(e, "u", function () {
        return k
    }), n.d(e, "P", function () {
        return C
    }), n.d(e, "a", function () {
        return M
    }), n.d(e, "j", function () {
        return L
    }), n.d(e, "h", function () {
        return P
    }), n.d(e, "d", function () {
        return N
    }), n.d(e, "g", function () {
        return D
    }), n.d(e, "x", function () {
        return R
    }), n.d(e, "J", function () {
        return z
    }), n.d(e, "B", function () {
        return V
    }), n.d(e, "w", function () {
        return F
    }), n.d(e, "A", function () {
        return B
    }), n.d(e, "E", function () {
        return U
    }), n.d(e, "C", function () {
        return q
    }), n.d(e, "D", function () {
        return W
    });
    var r = "|",
        i = "data-wf-page",
        o = ".w-dyn-item",
        a = "xValue",
        u = "yValue",
        c = "zValue",
        s = "value",
        f = "xUnit",
        l = "yUnit",
        d = "zUnit",
        p = "unit",
        v = "transform",
        h = "translate3d",
        g = "scale3d",
        m = "rotateX",
        y = "rotateY",
        b = "rotateZ",
        w = "skew",
        x = "opacity",
        _ = "filter",
        O = "width",
        I = "height",
        j = "backgroundColor",
        E = "background",
        S = "borderColor",
        T = "color",
        A = "display",
        k = "flex",
        C = "willChange",
        M = "AUTO",
        L = ",",
        P = ":",
        N = "|",
        D = "CHILDREN",
        R = "IMMEDIATE_CHILDREN",
        z = "SIBLINGS",
        V = "preserve-3d",
        F = "HTML_ELEMENT",
        B = "PLAIN_OBJECT",
        U = "RENDER_TRANSFORM",
        q = "RENDER_GENERAL",
        W = "RENDER_STYLE"
}, function (t, e, n) {
    var r = n(12),
        i = n(121),
        o = n(122),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function (t, e, n) {
    var r = n(58),
        i = n(34);
    t.exports = function (t) {
        return null != t && i(t.length) && !r(t)
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = g, e.replaceAt = m, e.getIn = y, e.set = b, e.setIn = w, e.update = x, e.updateIn = _, e.merge = O, e.mergeDeep = I, e.mergeIn = j, e.omit = E, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var g = a(h);
                if (g.length)
                    for (var m = 0; m <= g.length; m++) {
                        var y = g[m];
                        if (!t || void 0 === r[y]) {
                            var b = h[y];
                            e && f(r[y]) && f(b) && (b = s(t, e, r[y], b)), void 0 !== b && b !== r[y] && (u || (u = !0, r = c(r)), r[y] = b)
                        }
                    }
            }
        }
        return r
    }

    function f(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function l(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function g(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function m(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function y(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function b(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function w(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return b(e, a, o)
        }(t, e, n, 0) : n
    }

    function x(t, e, n) {
        return b(t, e, n(null == t ? void 0 : t[e]))
    }

    function _(t, e, n) {
        return w(t, e, n(y(t, e)))
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function I(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function j(t, e, n, r, i, o, a) {
        var u = y(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return w(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function E(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            } if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var T = {
        clone: c,
        addLast: l,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: g,
        replaceAt: m,
        getIn: y,
        set: b,
        setIn: w,
        update: x,
        updateIn: _,
        merge: O,
        mergeDeep: I,
        mergeIn: j,
        omit: E,
        addDefaults: S
    };
    e.default = T
}, function (t, e, n) {
    var r = n(2).Symbol;
    t.exports = r
}, function (t, e, n) {
    var r = n(17),
        i = 1 / 0;
    t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function (t, e, n) {
    "use strict";
    e.g = function () {
        return "i" + j++
    }, e.f = function (t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + E++
    }, e.p = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = l()(e, function (t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function (t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.n = function (t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? S : i,
            a = e.getState,
            u = (0, e.subscribe)(function () {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.c = A, e.d = function (t) {
        var e = t.element,
            n = t.actionItem;
        if (!y.c) return {};
        switch (n.actionTypeId) {
            case h.i:
            case h.e:
            case h.f:
            case h.j:
            case h.b:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.h = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments[3],
            i = arguments[4].getStyle,
            o = r.actionTypeId,
            a = r.config;
        switch (o) {
            case h.k:
            case h.m:
            case h.l:
            case h.n:
                return e[o] || N[o];
            case h.g:
                return C(e[o], r.config.filters);
            case h.h:
                return {
                    value: s()(parseFloat(i(t, m.z)), 1)
                };
            case h.i:
                var u = i(t, m.O),
                    c = i(t, m.v),
                    f = void 0,
                    l = void 0;
                return f = a.widthUnit === m.a ? k.test(u) ? parseFloat(u) : parseFloat(n.width) : s()(parseFloat(u), parseFloat(n.width)), l = a.heightUnit === m.a ? k.test(c) ? parseFloat(c) : parseFloat(n.height) : s()(parseFloat(c), parseFloat(n.height)), {
                    widthValue: f,
                    heightValue: l
                };
            case h.e:
            case h.f:
            case h.j:
                return function (t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = _[n],
                        a = i(e, o),
                        u = V.test(a) ? a : r[o],
                        c = function (t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(F, u).split(m.j);
                    return {
                        rValue: s()(parseInt(c[0], 10), 255),
                        gValue: s()(parseInt(c[1], 10), 255),
                        bValue: s()(parseInt(c[2], 10), 255),
                        aValue: s()(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case h.b:
                return {
                    value: s()(i(t, m.s), n.display)
                };
            case h.d:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, n.d(e, "i", function () {
        return L
    }), e.e = function (t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi;
        switch (n.actionTypeId) {
            case h.k:
            case h.m:
            case h.l:
            case h.n:
                var i = n.config,
                    o = i.xValue,
                    a = i.yValue,
                    u = i.zValue;
                return {
                    xValue: o,
                    yValue: a,
                    zValue: u
                };
            case h.i:
                var c = r.getStyle,
                    s = r.setStyle,
                    f = r.getProperty,
                    l = n.config,
                    d = l.widthUnit,
                    p = l.heightUnit,
                    v = n.config,
                    g = v.widthValue,
                    b = v.heightValue;
                if (!y.c) return {
                    widthValue: g,
                    heightValue: b
                };
                if (d === m.a) {
                    var w = c(e, m.O);
                    s(e, m.O, ""), g = f(e, "offsetWidth"), s(e, m.O, w)
                }
                if (p === m.a) {
                    var x = c(e, m.v);
                    s(e, m.v, ""), b = f(e, "offsetHeight"), s(e, m.v, x)
                }
                return {
                    widthValue: g,
                    heightValue: b
                };
            case h.e:
            case h.f:
            case h.j:
                var _ = n.config,
                    O = _.rValue,
                    I = _.gValue,
                    j = _.bValue,
                    E = _.aValue;
                return {
                    rValue: O,
                    gValue: I,
                    bValue: j,
                    aValue: E
                };
            case h.g:
                return n.config.filters.reduce(M, {});
            default:
                var S = n.config.value;
                return {
                    value: S
                }
        }
    }, e.l = P, e.m = function (t, e) {
        return t === m.D ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.q = function (t, e, n, r, i, o, a, u) {
        switch (u) {
            case m.E:
                return function (t, e, n, r, i) {
                    var o = z.map(function (t) {
                            var n = N[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                g = void 0 === v ? "" : v;
                            switch (t) {
                                case h.k:
                                    return m.M + "(" + o + l + ", " + u + p + ", " + s + g + ")";
                                case h.m:
                                    return m.I + "(" + o + l + ", " + u + p + ", " + s + g + ")";
                                case h.l:
                                    return m.F + "(" + o + l + ") " + m.G + "(" + u + p + ") " + m.H + "(" + s + g + ")";
                                case h.n:
                                    return m.K + "(" + o + l + ", " + u + p + ")";
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    B(t, y.d, i), a(t, y.d, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === h.k && void 0 !== d || s === h.m && void 0 !== d || s === h.l && (void 0 !== f || void 0 !== l)) && a(t, y.e, m.B);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case m.D:
                return function (t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case h.i:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                g = n.widthValue,
                                y = n.heightValue;
                            void 0 !== g && (d === m.a && (d = "px"), B(t, m.O, o), a(t, m.O, g + d)), void 0 !== y && (v === m.a && (v = "px"), B(t, m.v, o), a(t, m.v, y + v));
                            break;
                        case h.g:
                            ! function (t, e, n, r) {
                                var i = l()(e, function (t, e, r) {
                                        return t + " " + r + "(" + e + R(r, n) + ")"
                                    }, ""),
                                    o = r.setStyle;
                                B(t, m.t, r), o(t, m.t, i)
                            }(t, n, c, o);
                            break;
                        case h.e:
                        case h.f:
                        case h.j:
                            var b = _[u],
                                w = n.rValue,
                                x = n.gValue,
                                O = n.bValue,
                                I = n.aValue;
                            B(t, b, o), a(t, b, I >= 1 ? "rgb(" + Math.round(w) + "," + Math.round(x) + "," + Math.round(O) + ")" : "rgba(" + Math.round(w) + "," + Math.round(x) + "," + Math.round(O) + "," + I + ")");
                            break;
                        default:
                            var j = c.unit,
                                E = void 0 === j ? "" : j;
                            B(t, i, o), a(t, i, n.value + E)
                    }
                }(t, 0, n, i, o, a);
            case m.C:
                return function (t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case h.b:
                            var i = e.config.value;
                            return void(i === m.u && y.c ? r(t, m.s, y.b) : r(t, m.s, i))
                    }
                }(t, i, a)
        }
    }, e.b = function (t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && q({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function (t) {
            q({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.a = function (t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === h.i) {
            var a = e.config;
            a.widthUnit === m.a && r(t, m.O, ""), a.heightUnit === m.a && r(t, m.v, "")
        }
        i(t, m.P) && X({
            effect: U,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.j = H, e.o = function (t) {
        var e = t.actionListId,
            n = t.actionItemId,
            r = t.rawData,
            i = r.actionLists[e],
            o = i.actionItemGroups,
            a = i.continuousParameterGroups,
            u = [],
            c = function (t) {
                return u.push(Object(v.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return o && o.some(function (t) {
            return t.actionItems.some(c)
        }), a && a.some(function (t) {
            return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(c)
            })
        }), Object(v.setIn)(r, ["actionLists"], w({}, e, {
            id: e,
            actionItemGroups: [{
                actionItems: u
            }]
        }))
    }, e.s = function (t, e) {
        var n = e.basedOn;
        return t === g.w && (n === g.g || null == n) || t === g.j && n === g.g
    }, e.k = function (t, e) {
        return t + m.h + e
    }, e.r = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.t = function (t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget,
            a = void 0 === o ? "" : o;
        return n + m.d + i + m.d + a
    };
    var r, i, o, a = n(15),
        u = n.n(a),
        c = n(147),
        s = n.n(c),
        f = n(148),
        l = n.n(f),
        d = n(191),
        p = n.n(d),
        v = n(11),
        h = (n.n(v), n(56), n(42)),
        g = n(43),
        m = n(8),
        y = n(80),
        b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

    function w(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var x = function (t) {
            return t.trim()
        },
        _ = Object.freeze((w(r = {}, h.e, m.c), w(r, h.f, m.e), w(r, h.j, m.i), r)),
        O = Object.freeze((w(i = {}, y.d, m.L), w(i, m.c, m.b), w(i, m.z, m.z), w(i, m.t, m.t), w(i, m.O, m.O), w(i, m.v, m.v), i)),
        I = {},
        j = 1;
    var E = 1;
    var S = function (t, e) {
        return t === e
    };

    function T(t) {
        var e = void 0 === t ? "undefined" : b(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function A(t) {
        var e = t.config,
            n = t.event,
            r = t.eventTarget,
            i = t.elementRoot,
            o = t.elementApi;
        if (!o) throw new Error("IX2 missing elementApi");
        var a = o.getValidDocument,
            c = o.getQuerySelector,
            s = o.queryDocument,
            f = o.getChildElements,
            l = o.getSiblingElements,
            d = o.matchSelector,
            p = o.elementContains,
            v = o.isSiblingNode,
            h = e.target;
        if (!h) return [];
        var b = T(h),
            w = b.id,
            x = b.objectId,
            _ = b.selector,
            O = b.selectorGuids,
            j = b.appliesTo,
            E = b.useEventTarget;
        if (x) return [I[x] || (I[x] = {})];
        if (j === g.q) {
            var S = a(w);
            return S ? [S] : []
        }
        var A = u()(n, "action.config.affectedElements", {})[w || _] || {},
            k = Boolean(A.id || A.selector),
            C = void 0,
            M = void 0,
            L = void 0,
            P = n && c(T(n.target));
        if (k ? (C = A.limitAffectedElements, M = P, L = c(A)) : M = L = c({
                id: w,
                selector: _,
                selectorGuids: O
            }), n && E) {
            var N = r && (L || !0 === E) ? [r] : s(P);
            if (L) {
                if (E === m.g) return s(L).filter(function (t) {
                    return N.some(function (e) {
                        return p(e, t)
                    })
                });
                if (E === m.J) return s(L).filter(function (t) {
                    return N.some(function (e) {
                        return v(e, t)
                    })
                })
            }
            return N
        }
        return null == M || null == L ? [] : y.c && i ? s(L).filter(function (t) {
            return i.contains(t)
        }) : C === m.g ? s(M, L) : C === m.x ? f(s(M)).filter(d(L)) : C === m.J ? l(s(M)).filter(d(L)) : s(L)
    }
    var k = /px/,
        C = function (t, e) {
            return e.reduce(function (t, e) {
                return null == t[e.type] && (t[e.type] = D[e.type]), t
            }, t || {})
        };
    var M = function (t, e) {
            return e && (t[e.type] = e.value || 0), t
        },
        L = function (t, e, n) {
            if (t === h.g) {
                var r = p()(n.filters, function (t) {
                    return t.type === e
                });
                return r ? r.value : 0
            }
            return n[e]
        };

    function P(t) {
        return /^TRANSFORM_/.test(t) ? m.E : /^STYLE_/.test(t) ? m.D : /^GENERAL_/.test(t) ? m.C : void 0
    }
    var N = (w(o = {}, h.k, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), w(o, h.m, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), w(o, h.l, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), w(o, h.n, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        D = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        R = function (t, e) {
            var n = p()(e.filters, function (e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        z = Object.keys(N);
    var V = /^rgb/,
        F = RegExp("rgba?\\(([^)]+)\\)");

    function B(t, e, n) {
        if (y.c) {
            var r = O[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, m.P);
                if (a) {
                    var u = a.split(m.j).map(x); - 1 === u.indexOf(r) && o(t, m.P, u.concat(r).join(m.j))
                } else o(t, m.P, r)
            }
        }
    }

    function U(t, e, n) {
        if (y.c) {
            var r = O[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, m.P);
                a && -1 !== a.indexOf(r) && o(t, m.P, a.split(m.j).map(x).filter(function (t) {
                    return t !== r
                }).join(m.j))
            }
        }
    }

    function q(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function (t) {
            W({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
                W({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function W(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function (t) {
            var e = t.actionTypeId,
                i = t.config,
                o = X({
                    effect: G,
                    actionTypeId: e,
                    elementApi: r
                });
            A({
                config: i,
                event: n,
                elementApi: r
            }).forEach(o)
        })
    }
    var X = function (t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function (t) {
            switch (n) {
                case h.k:
                case h.m:
                case h.l:
                case h.n:
                    e(t, y.d, r);
                    break;
                case h.g:
                    e(t, m.t, r);
                    break;
                case h.h:
                    e(t, m.z, r);
                    break;
                case h.i:
                    e(t, m.O, r), e(t, m.v, r);
                    break;
                case h.e:
                case h.f:
                case h.j:
                    e(t, _[n], r);
                    break;
                case h.b:
                    e(t, m.s, r)
            }
        }
    };

    function G(t, e, n) {
        var r = n.setStyle;
        U(t, e, n), r(t, e, ""), e === y.d && r(t, y.e, "")
    }

    function H(t) {
        var e = 0,
            n = 0;
        return t.forEach(function (t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function (t, e, n) {
    var r = n(26);
    t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(27),
        o = n(123),
        a = n(60);
    t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function (t, e, n) {
    var r = n(9),
        i = n(5),
        o = "[object Symbol]";
    t.exports = function (t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function (t, e, n) {
    var r = n(6)(Object, "create");
    t.exports = r
}, function (t, e, n) {
    var r = n(137),
        i = n(138),
        o = n(139),
        a = n(140),
        u = n(141);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(29);
    t.exports = function (t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function (t, e, n) {
    var r = n(143);
    t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function (t, e, n) {
    var r = n(65),
        i = n(35),
        o = n(10);
    t.exports = function (t) {
        return o(t) ? r(t) : i(t)
    }
}, function (t, e, n) {
    var r = n(153),
        i = n(5),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function () {
            return arguments
        }()) ? r : function (t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function (t, e, n) {
    "use strict";
    var r = n(49);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function (t, e) {
                r.triggers.reset(t, e)
            },
            intro: function (t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function (t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(16),
        i = n(13);
    t.exports = function (t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function (t, e, n) {
    var r = n(0),
        i = n(17),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function (t, e, n) {
    var r = n(126),
        i = n(142),
        o = n(144),
        a = n(145),
        u = n(146);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
    t.exports = function (t, e) {
        return t === e || t != t && e != e
    }
}, function (t, e, n) {
    var r = n(6)(n(2), "Map");
    t.exports = r
}, function (t, e, n) {
    (function (t) {
        var r = n(2),
            i = n(154),
            o = "object" == typeof e && e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(e, n(66)(t))
}, function (t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function (t, e, n) {
    var r = n(155),
        i = n(156),
        o = n(157),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function (t, e, n) {
    var r = n(36),
        i = n(158),
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function (t, e, n) {
    var r = n(180),
        i = n(30),
        o = n(181),
        a = n(182),
        u = n(74),
        c = n(9),
        s = n(59),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function (t, e) {
    t.exports = function (t) {
        return t
    }
}, function (t, e, n) {
    var r = n(193);
    t.exports = function (t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function (t, e, n) {
    var r = n(3),
        i = n(17),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function (t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "k", function () {
        return r
    }), n.d(e, "m", function () {
        return i
    }), n.d(e, "l", function () {
        return o
    }), n.d(e, "n", function () {
        return a
    }), n.d(e, "h", function () {
        return u
    }), n.d(e, "i", function () {
        return c
    }), n.d(e, "g", function () {
        return s
    }), n.d(e, "e", function () {
        return f
    }), n.d(e, "f", function () {
        return l
    }), n.d(e, "j", function () {
        return d
    }), n.d(e, "b", function () {
        return p
    }), n.d(e, "a", function () {
        return v
    }), n.d(e, "c", function () {
        return h
    }), n.d(e, "d", function () {
        return g
    });
    var r = "TRANSFORM_MOVE",
        i = "TRANSFORM_SCALE",
        o = "TRANSFORM_ROTATE",
        a = "TRANSFORM_SKEW",
        u = "STYLE_OPACITY",
        c = "STYLE_SIZE",
        s = "STYLE_FILTER",
        f = "STYLE_BACKGROUND_COLOR",
        l = "STYLE_BORDER",
        d = "STYLE_TEXT_COLOR",
        p = "GENERAL_DISPLAY",
        v = "GENERAL_CONTINUOUS_ACTION",
        h = "GENERAL_START_ACTION",
        g = "OBJECT_VALUE"
}, function (t, e, n) {
    "use strict";
    n.d(e, "h", function () {
        return r
    }), n.d(e, "m", function () {
        return i
    }), n.d(e, "i", function () {
        return o
    }), n.d(e, "n", function () {
        return a
    }), n.d(e, "l", function () {
        return u
    }), n.d(e, "k", function () {
        return c
    }), n.d(e, "j", function () {
        return s
    }), n.d(e, "x", function () {
        return f
    }), n.d(e, "y", function () {
        return l
    }), n.d(e, "w", function () {
        return d
    }), n.d(e, "B", function () {
        return p
    }), n.d(e, "C", function () {
        return v
    }), n.d(e, "p", function () {
        return h
    }), n.d(e, "o", function () {
        return g
    }), n.d(e, "z", function () {
        return m
    }), n.d(e, "A", function () {
        return y
    }), n.d(e, "d", function () {
        return b
    }), n.d(e, "c", function () {
        return w
    }), n.d(e, "a", function () {
        return x
    }), n.d(e, "b", function () {
        return _
    }), n.d(e, "v", function () {
        return O
    }), n.d(e, "r", function () {
        return I
    }), n.d(e, "u", function () {
        return j
    }), n.d(e, "t", function () {
        return E
    }), n.d(e, "s", function () {
        return S
    }), n.d(e, "g", function () {
        return T
    }), n.d(e, "D", function () {
        return A
    }), n.d(e, "q", function () {
        return k
    }), n.d(e, "f", function () {
        return C
    }), n.d(e, "e", function () {
        return M
    });
    var r = "MOUSE_CLICK",
        i = "MOUSE_SECOND_CLICK",
        o = "MOUSE_DOWN",
        a = "MOUSE_UP",
        u = "MOUSE_OVER",
        c = "MOUSE_OUT",
        s = "MOUSE_MOVE",
        f = "SCROLL_INTO_VIEW",
        l = "SCROLL_OUT_OF_VIEW",
        d = "SCROLLING_IN_VIEW",
        p = "TAB_ACTIVE",
        v = "TAB_INACTIVE",
        h = "NAVBAR_OPEN",
        g = "NAVBAR_CLOSE",
        m = "SLIDER_ACTIVE",
        y = "SLIDER_INACTIVE",
        b = "DROPDOWN_OPEN",
        w = "DROPDOWN_CLOSE",
        x = "COMPONENT_ACTIVE",
        _ = "COMPONENT_INACTIVE",
        O = "PAGE_START",
        I = "PAGE_FINISH",
        j = "PAGE_SCROLL_UP",
        E = "PAGE_SCROLL_DOWN",
        S = "PAGE_SCROLL",
        T = "ELEMENT",
        A = "VIEWPORT",
        k = "PAGE",
        C = "ECOMMERCE_CART_OPEN",
        M = "ECOMMERCE_CART_CLOSE"
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "rawDataImported", function () {
        return u
    }), n.d(e, "sessionInitialized", function () {
        return c
    }), n.d(e, "sessionStarted", function () {
        return s
    }), n.d(e, "sessionStopped", function () {
        return f
    }), n.d(e, "previewRequested", function () {
        return l
    }), n.d(e, "playbackRequested", function () {
        return d
    }), n.d(e, "stopRequested", function () {
        return p
    }), n.d(e, "clearRequested", function () {
        return v
    }), n.d(e, "eventListenerAdded", function () {
        return h
    }), n.d(e, "eventStateChanged", function () {
        return g
    }), n.d(e, "animationFrameChanged", function () {
        return m
    }), n.d(e, "parameterChanged", function () {
        return y
    }), n.d(e, "instanceAdded", function () {
        return b
    }), n.d(e, "instanceStarted", function () {
        return w
    }), n.d(e, "instanceRemoved", function () {
        return x
    }), n.d(e, "elementStateChanged", function () {
        return _
    }), n.d(e, "actionListPlaybackChanged", function () {
        return O
    }), n.d(e, "viewportWidthChanged", function () {
        return I
    });
    var r = n(4),
        i = n(42),
        o = n(14),
        a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        u = function (t) {
            return {
                type: r.m,
                payload: a({}, Object(o.p)(t))
            }
        },
        c = function (t) {
            var e = t.hasBoundaryNodes;
            return {
                type: r.n,
                payload: {
                    hasBoundaryNodes: e
                }
            }
        },
        s = function () {
            return {
                type: r.o,
                payload: {}
            }
        },
        f = function () {
            return {
                type: r.p,
                payload: {}
            }
        },
        l = function (t) {
            var e = t.rawData;
            return {
                type: r.l,
                payload: {
                    rawData: e
                }
            }
        },
        d = function (t) {
            var e = t.actionTypeId,
                n = void 0 === e ? i.c : e,
                o = t.actionListId,
                a = t.actionItemId,
                u = t.eventId,
                c = t.allowEvents,
                s = t.immediate,
                f = t.verbose,
                l = t.rawData;
            return {
                type: r.k,
                payload: {
                    actionTypeId: n,
                    actionListId: o,
                    actionItemId: a,
                    eventId: u,
                    allowEvents: c,
                    immediate: s,
                    verbose: f,
                    rawData: l
                }
            }
        },
        p = function (t) {
            return {
                type: r.q,
                payload: {
                    actionListId: t
                }
            }
        },
        v = function () {
            return {
                type: r.c,
                payload: {}
            }
        },
        h = function (t, e) {
            return {
                type: r.e,
                payload: {
                    target: t,
                    listenerParams: e
                }
            }
        },
        g = function (t, e) {
            return {
                type: r.f,
                payload: {
                    stateKey: t,
                    newState: e
                }
            }
        },
        m = function (t, e) {
            return {
                type: r.b,
                payload: {
                    now: t,
                    parameters: e
                }
            }
        },
        y = function (t, e) {
            return {
                type: r.j,
                payload: {
                    key: t,
                    value: e
                }
            }
        },
        b = function (t) {
            return {
                type: r.g,
                payload: a({}, t)
            }
        },
        w = function (t) {
            return {
                type: r.i,
                payload: {
                    instanceId: t
                }
            }
        },
        x = function (t) {
            return {
                type: r.h,
                payload: {
                    instanceId: t
                }
            }
        },
        _ = function (t, e, n, i) {
            return {
                type: r.d,
                payload: {
                    elementId: t,
                    actionTypeId: e,
                    current: n,
                    actionItem: i
                }
            }
        },
        O = function (t) {
            var e = t.actionListId,
                n = t.isPlaying;
            return {
                type: r.a,
                payload: {
                    actionListId: e,
                    isPlaying: n
                }
            }
        },
        I = function (t) {
            var e = t.width,
                n = t.mediaQueries;
            return {
                type: r.r,
                payload: {
                    width: e,
                    mediaQueries: n
                }
            }
        }
}, function (t, e, n) {
    var r = n(86),
        i = n(46);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
    t.exports = function () {}
}, function (t, e, n) {
    var r = n(86),
        i = n(46),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    window.tram = function (t) {
        function e(t, e) {
            return (new R.Bare).init(t, e)
        }

        function r(t) {
            return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return Y.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            X.debug && window && window.console.warn(t)
        }
        var f = function (t, e, r) {
                function i(t) {
                    return "object" == (void 0 === t ? "undefined" : n(t))
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function n(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {}
                    c === r && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function (e) {
                        return f[t] = s[t] = n(s, e)[t], s
                    }, s.open = function (t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function (t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function (t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            g = /[\-\.0-9]/g,
            m = /[A-Z]/,
            y = "number",
            b = /^(rgb|#)/,
            w = /(em|cm|mm|in|pt|pc|px)$/,
            x = /(em|cm|mm|in|pt|pc|px|%)$/,
            _ = /(deg|rad|turn)$/,
            O = "unitless",
            I = /(all|none) 0s ease 0s/,
            j = /^(width|height)$/,
            E = " ",
            S = p.createElement("a"),
            T = ["Webkit", "Moz", "O", "ms"],
            A = ["-webkit-", "-moz-", "-o-", "-ms-"],
            k = function (t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < T.length; e++)
                    if ((n = T[e] + r) in S.style) return {
                        dom: n,
                        css: A[e] + t
                    }
            },
            C = e.support = {
                bind: Function.prototype.bind,
                transform: k("transform"),
                transition: k("transition"),
                backface: k("backface-visibility"),
                timing: k("transition-timing-function")
            };
        if (C.transition) {
            var M = C.timing.dom;
            if (S.style[M] = l["ease-in-back"][0], !S.style[M])
                for (var L in d) l[L][0] = d[L]
        }
        var P = e.frame = function () {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && C.bind ? t.bind(v) : function (t) {
                    v.setTimeout(t, 16)
                }
            }(),
            N = e.now = function () {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function () {
                    return +new Date
                }
            }(),
            D = f(function (e) {
                function i(t, e) {
                    var n = function (t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(E)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, r) {
                    if (t) {
                        var o = void 0 === t ? "undefined" : n(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new q({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, r && r[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function (t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function (t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new q({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                g = {};
                            P(function () {
                                p.call(v, t, function (t) {
                                    t.active && (h = !0, g[t.name] = t.nextStyle)
                                }), h && v.$el.css(g)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() {
                    u.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
                }

                function p(t, e, n) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in K ? (f.transform || (f.transform = {}), f.transform[o] = u) : (m.test(o) && (o = r(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    n && c && n.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function g(t, e) {
                    t.set(e)
                }

                function y(t) {
                    this.$el.css(t)
                }

                function b(t, n) {
                    e[t] = function () {
                        return this.children ? function (t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function (e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                        var n = H(this.el, "transition");
                        n && !I.test(n) && (this.upstream = n)
                    }
                    C.backface && X.hideBackface && G(this.el, C.backface.css, "hidden")
                }, b("add", i), b("start", o), b("wait", function (t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new q({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), b("then", function (t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), b("next", a), b("stop", u), b("set", function (t) {
                    u.call(this, t), p.call(this, t, g, y)
                }), b("show", function (t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), b("hide", f), b("redraw", l), b("destroy", function () {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            R = f(D, function (e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new D.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function (e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function (t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            z = f(function (t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function r(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function (t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), $[o] && (o = $[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = j.test(this.name), this.unit = r.unit || this.unit || X.defaultUnit, this.angle = r.angle || this.angle || X.defaultAngle, X.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + E + this.duration + "ms" + ("ease" != this.ease ? E + l[this.ease][0] : "") + (this.delay ? E + this.delay + "ms" : ""))
                }, t.set = function (t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function (t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function (t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function () {
                    return H(this.el, this.name)
                }, t.update = function (t) {
                    G(this.el, this.name, t)
                }, t.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, G(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function (t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case y:
                            if (o) return t;
                            if (a && "" === t.replace(g, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case b:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case w:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case x:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case _:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case O:
                            if (o) return t;
                            if (a && x.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function (t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
                    }(i, t), t
                }, t.redraw = function () {
                    this.el.offsetHeight
                }
            }),
            V = f(z, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), b))
                }
            }),
            F = f(z, function (t, e) {
                t.init = function () {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function () {
                    return this.$el[this.name]()
                }, t.update = function (t) {
                    this.$el[this.name](t)
                }
            }),
            B = f(z, function (t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = K[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function () {
                    e.init.apply(this, arguments), this.current || (this.current = {}, K.perspective && X.perspective && (this.current.perspective = X.perspective, G(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function (t) {
                    n.call(this, t, function (t, e) {
                        this.current[t] = e
                    }), G(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function (t) {
                    var e = this.values(t);
                    this.tween = new W({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function () {
                    G(this.el, this.name, this.style(this.current))
                }, t.style = function (t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function (t) {
                    var e, r = {};
                    return n.call(this, t, function (t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            U = f(function (e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = N(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function (t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = N(), !1 !== t.autoplay && this.play()
                }, e.play = function () {
                    var t;
                    this.active || (this.start || (this.start = N()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function () {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function (t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function (t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function (t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function (t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(g, "");
                        n !== t.replace(g, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            q = f(U, function (t) {
                t.init = function (t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function (t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            W = f(U, function (t, e) {
                t.init = function (t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function (t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function () {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            X = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
        e.fallback = function (t) {
            if (!C.transition) return X.fallback = !0;
            X.agentTests.push("(" + t + ")");
            var e = new RegExp(X.agentTests.join("|"), "i");
            X.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
            return new U(t)
        }, e.delay = function (t, e, n) {
            return new q({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function (t) {
            return e.call(null, this, t)
        };
        var G = t.style,
            H = t.css,
            $ = {
                transform: C.transform && C.transform.css
            },
            Q = {
                color: [V, b],
                background: [V, b, "background-color"],
                "outline-color": [V, b],
                "border-color": [V, b],
                "border-top-color": [V, b],
                "border-right-color": [V, b],
                "border-bottom-color": [V, b],
                "border-left-color": [V, b],
                "border-width": [z, w],
                "border-top-width": [z, w],
                "border-right-width": [z, w],
                "border-bottom-width": [z, w],
                "border-left-width": [z, w],
                "border-spacing": [z, w],
                "letter-spacing": [z, w],
                margin: [z, w],
                "margin-top": [z, w],
                "margin-right": [z, w],
                "margin-bottom": [z, w],
                "margin-left": [z, w],
                padding: [z, w],
                "padding-top": [z, w],
                "padding-right": [z, w],
                "padding-bottom": [z, w],
                "padding-left": [z, w],
                "outline-width": [z, w],
                opacity: [z, y],
                top: [z, x],
                right: [z, x],
                bottom: [z, x],
                left: [z, x],
                "font-size": [z, x],
                "text-indent": [z, x],
                "word-spacing": [z, x],
                width: [z, x],
                "min-width": [z, x],
                "max-width": [z, x],
                height: [z, x],
                "min-height": [z, x],
                "max-height": [z, x],
                "line-height": [z, O],
                "scroll-top": [F, y, "scrollTop"],
                "scroll-left": [F, y, "scrollLeft"]
            },
            K = {};
        C.transform && (Q.transform = [B], K = {
            x: [x, "translateX"],
            y: [x, "translateY"],
            rotate: [_],
            rotateX: [_],
            rotateY: [_],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [_],
            skewX: [_],
            skewY: [_]
        }), C.transform && C.backface && (K.z = [x, "translateZ"], K.rotateZ = [_], K.scaleZ = [y], K.perspective = [w]);
        var Y = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function (t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function (t, e) {
                e.__wf_intro = null
            },
            intro: function (t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function (t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function () {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function (t, e, n) {
    "use strict";
    var r = n(51),
        i = n(110);
    n(111), n(112), n(55), n(54);
    n.d(e, "b", function () {
        return r.b
    }), n.d(e, "a", function () {
        return i.a
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return o
    }), e.b = function t(e, n, a) {
        var u;
        "function" == typeof n && void 0 === a && (a = n, n = void 0);
        if (void 0 !== a) {
            if ("function" != typeof a) throw new Error("Expected the enhancer to be a function.");
            return a(t)(e, n)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var c = e;
        var s = n;
        var f = [];
        var l = f;
        var d = !1;

        function p() {
            l === f && (l = f.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function () {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function g(t) {
            if (!Object(r.a)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = f = l, n = 0; n < e.length; n++) e[n]();
            return t
        }
        g({
            type: o.INIT
        });
        return u = {
            dispatch: g,
            subscribe: h,
            getState: v,
            replaceReducer: function (t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, g({
                    type: o.INIT
                })
            }
        }, u[i.a] = function () {
            var t, e = h;
            return (t = {
                subscribe: function (t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    n();
                    var r = e(n);
                    return {
                        unsubscribe: r
                    }
                }
            })[i.a] = function () {
                return this
            }, t
        }, u
    };
    var r = n(52),
        i = n(107),
        o = {
            INIT: "@@redux/INIT"
        }
}, function (t, e, n) {
    "use strict";
    var r = n(99),
        i = n(104),
        o = n(106),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.a = function (t) {
        if (!Object(o.a)(t) || Object(r.a)(t) != a) return !1;
        var e = Object(i.a)(t);
        if (null === e) return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == l
    }
}, function (t, e, n) {
    "use strict";
    var r = n(100).a.Symbol;
    e.a = r
}, function (t, e, n) {
    "use strict"
}, function (t, e, n) {
    "use strict";
    e.a = function () {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function (t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function () {
            return i.reduceRight(function (t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
}, function (t, e, n) {
    "use strict";
    e.b = i, e.a = function (t, e) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        return i(e > 0 && t && r[t] ? r[t](e) : e)
    };
    var r = n(119);

    function i(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function (t, e, n) {
    (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(25))
}, function (t, e, n) {
    var r = n(9),
        i = n(3),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function (t, e, n) {
    var r = n(61);
    t.exports = function (t) {
        return null == t ? "" : r(t)
    }
}, function (t, e, n) {
    var r = n(12),
        i = n(62),
        o = n(0),
        a = n(17),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function (t, e, n) {
    var r = n(64),
        i = n(159)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(150),
        i = n(22);
    t.exports = function (t, e) {
        return t && r(t, e, i)
    }
}, function (t, e, n) {
    var r = n(152),
        i = n(23),
        o = n(0),
        a = n(31),
        u = n(32),
        c = n(33),
        s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var g in t) !e && !s.call(t, g) || p && ("length" == g || l && ("offset" == g || "parent" == g) || d && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h)) || v.push(g);
        return v
    }
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    var r = n(19),
        i = n(162),
        o = n(163),
        a = n(164),
        u = n(165),
        c = n(166);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
    var r = n(167),
        i = n(5);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function (t, e, n) {
    var r = n(168),
        i = n(171),
        o = n(172),
        a = 1,
        u = 2;
    t.exports = function (t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t);
        if (v && f.get(e)) return v == e;
        var h = -1,
            g = !0,
            m = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++h < d;) {
            var y = t[h],
                b = e[h];
            if (c) var w = l ? c(b, y, h, e, t, f) : c(y, b, h, t, e, f);
            if (void 0 !== w) {
                if (w) continue;
                g = !1;
                break
            }
            if (m) {
                if (!i(e, function (t, e) {
                        if (!o(m, e) && (y === t || s(y, t, n, c, f))) return m.push(e)
                    })) {
                    g = !1;
                    break
                }
            } else if (y !== b && !s(y, b, n, c, f)) {
                g = !1;
                break
            }
        }
        return f.delete(t), f.delete(e), g
    }
}, function (t, e, n) {
    var r = n(37),
        i = n(0);
    t.exports = function (t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function (t, e, n) {
    var r = n(179),
        i = n(73),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function (t) {
            return null == t ? [] : (t = Object(t), r(a(t), function (e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function (t, e) {
    t.exports = function () {
        return []
    }
}, function (t, e, n) {
    var r = n(6)(n(2), "WeakMap");
    t.exports = r
}, function (t, e, n) {
    var r = n(3);
    t.exports = function (t) {
        return t == t && !r(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return function (n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function (t, e, n) {
    var r = n(7),
        i = n(10),
        o = n(22);
    t.exports = function (t) {
        return function (e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function (t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "c", function () {
        return o
    }), n.d(e, "a", function () {
        return u
    }), n.d(e, "b", function () {
        return c
    }), n.d(e, "d", function () {
        return s
    }), n.d(e, "e", function () {
        return l
    });
    var r = n(81),
        i = n.n(r),
        o = "undefined" != typeof window,
        a = function (t, e) {
            return o ? t() : e
        },
        u = a(function () {
            return i()(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                return t in Element.prototype
            })
        }),
        c = a(function () {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (t.style.display = i, t.style.display === i) return i
                }
                return ""
            } catch (t) {
                return ""
            }
        }, "flex"),
        s = a(function () {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i
                }
            return "transform"
        }, "transform"),
        f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle"
}, function (t, e, n) {
    var r = n(78)(n(194));
    t.exports = r
}, function (t, e, n) {
    "use strict";
    e.a = function (t) {
        Object(O.n)({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: P
        }), Object(O.n)({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: D
        }), Object(O.n)({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: R
        }), Object(O.n)({
            store: t,
            select: function (t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: z
        })
    }, e.c = V, e.e = F, e.d = H, e.b = $;
    var r = n(81),
        i = n.n(r),
        o = n(15),
        a = n.n(o),
        u = n(196),
        c = n.n(u),
        s = n(202),
        f = n.n(s),
        l = n(214),
        d = n.n(l),
        p = n(215),
        v = n.n(p),
        h = n(216),
        g = n.n(h),
        m = n(219),
        y = n.n(m),
        b = n(220),
        w = n.n(b),
        x = n(223),
        _ = n.n(x),
        O = n(14),
        I = n(43),
        j = n(44),
        E = n(225),
        S = n(8),
        T = n(42),
        A = n(226),
        k = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };
    var C = navigator.userAgent,
        M = C.match(/iPad/i) || C.match(/iPhone/),
        L = 12;

    function P(t, e) {
        V({
            store: e,
            rawData: t.rawData,
            allowEvents: !0
        }), document.dispatchEvent(new CustomEvent("IX2_PREVIEW_LOAD"))
    }

    function N(t) {
        return t && y()(t, "_EFFECT")
    }

    function D(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.verbose,
            s = void 0 === c || c,
            f = t.rawData;
        if (r && i && f && u && (f = Object(O.o)({
                actionListId: r,
                actionItemId: i,
                rawData: f
            })), V({
                store: e,
                rawData: f,
                allowEvents: a
            }), r && n === T.c || N(n)) {
            H({
                store: e,
                actionListId: r
            }), G({
                store: e,
                actionListId: r,
                eventId: o
            });
            var l = $({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: s
            });
            s && l && e.dispatch(Object(j.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function R(t, e) {
        var n = t.actionListId;
        n ? H({
            store: e,
            actionListId: n
        }) : function (t) {
            var e = t.store,
                n = e.getState().ixInstances;
            g()(n, function (t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    K(t, e), r && e.dispatch(Object(j.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            })
        }({
            store: e
        }), F(e)
    }

    function z(t, e) {
        F(e), Object(O.b)({
            store: e,
            elementApi: E
        })
    }

    function V(t) {
        var e = t.store,
            n = t.rawData,
            r = t.allowEvents,
            o = e.getState().ixSession;
        n && e.dispatch(Object(j.rawDataImported)(n)), o.active || (e.dispatch(Object(j.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(S.f))
        })), r && function (t) {
            var e = t.getState().ixData.eventTypeMap;
            g()(e, function (e, n) {
                var r = A.a[n];
                r ? function (t) {
                    var e = t.logic,
                        n = t.store,
                        r = t.events;
                    ! function (t) {
                        if (M) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = E.getQuerySelector(a);
                                e[u] || o !== I.h && o !== I.m || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(r);
                    var o = e.types,
                        u = e.handler,
                        s = n.getState().ixData,
                        f = s.actionLists,
                        l = q(r, X);
                    if (c()(l)) {
                        g()(l, function (t, e) {
                            var o = r[e],
                                u = o.action,
                                c = o.id,
                                s = u.config.actionListId;
                            if (u.actionTypeId === T.a) {
                                var l = Array.isArray(o.config) ? o.config : [o.config];
                                l.forEach(function (e) {
                                    var r = e.continuousParameterGroupId,
                                        o = a()(f, s + ".continuousParameterGroups", []),
                                        u = i()(o, function (t) {
                                            var e = t.id;
                                            return e === r
                                        }),
                                        l = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    u && t.forEach(function (t, r) {
                                        var i = c + S.h + r;
                                        ! function (t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                r = t.eventTarget,
                                                i = t.eventId,
                                                o = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                s = t.smoothing,
                                                f = t.restingValue,
                                                l = e.getState(),
                                                d = l.ixData,
                                                p = l.ixSession,
                                                v = d.events[i],
                                                h = v.eventTypeId,
                                                g = {},
                                                m = {},
                                                y = [],
                                                b = c.continuousActionGroups,
                                                w = c.id;
                                            Object(O.s)(h, o) && (w = Object(O.k)(n, w));
                                            var x = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
                                            b.forEach(function (t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function (t) {
                                                    var n = t.actionTypeId,
                                                        i = t.config.target;
                                                    if (i) {
                                                        var o = i.boundaryMode ? x : null,
                                                            a = Object(O.t)(i) + S.h + n;
                                                        if (m[a] = function () {
                                                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    e = arguments[1],
                                                                    n = arguments[2],
                                                                    r = [].concat(function (t) {
                                                                        if (Array.isArray(t)) {
                                                                            for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                                                            return n
                                                                        }
                                                                        return Array.from(t)
                                                                    }(t)),
                                                                    i = void 0;
                                                                return r.some(function (t, n) {
                                                                    return t.keyframe === e && (i = n, !0)
                                                                }), null == i && (i = r.length, r.push({
                                                                    keyframe: e,
                                                                    actionItems: []
                                                                })), r[i].actionItems.push(n), r
                                                            }(m[a], e, t), !g[a]) {
                                                            g[a] = !0;
                                                            var u = t.config;
                                                            Object(O.c)({
                                                                config: u,
                                                                event: v,
                                                                eventTarget: r,
                                                                elementRoot: o,
                                                                elementApi: E
                                                            }).forEach(function (t) {
                                                                y.push({
                                                                    element: t,
                                                                    key: a
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function (t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    o = m[r],
                                                    c = a()(o, "[0].actionItems[0]", {}),
                                                    l = Object(O.e)({
                                                        element: n,
                                                        actionItem: c,
                                                        elementApi: E
                                                    });
                                                Q({
                                                    store: e,
                                                    element: n,
                                                    eventId: i,
                                                    actionListId: u,
                                                    actionItem: c,
                                                    destination: l,
                                                    continuous: !0,
                                                    parameterId: w,
                                                    actionGroups: o,
                                                    smoothing: s,
                                                    restingValue: f
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: i,
                                            eventTarget: t,
                                            eventId: c,
                                            eventConfig: e,
                                            actionListId: s,
                                            parameterGroup: u,
                                            smoothing: l,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(u.actionTypeId === T.c || N(u.actionTypeId)) && G({
                                store: n,
                                actionListId: s,
                                eventId: c
                            })
                        });
                        var d = function (t) {
                                var e = n.getState(),
                                    i = e.ixSession;
                                W(l, function (e, o, a) {
                                    var c = r[o],
                                        f = i.eventState[a],
                                        l = c.action,
                                        d = c.mediaQueries,
                                        p = void 0 === d ? s.mediaQueryKeys : d;
                                    if (Object(O.r)(p, i.mediaQueryKey)) {
                                        var v = function () {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = u({
                                                    store: n,
                                                    element: e,
                                                    event: c,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: a
                                                }, f);
                                            _()(i, f) || n.dispatch(Object(j.eventStateChanged)(a, i))
                                        };
                                        if (l.actionTypeId === T.a) {
                                            var h = Array.isArray(c.config) ? c.config : [c.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            p = w()(d, L),
                            v = function (t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function (t) {
                                    var e = o ? p : d;
                                    r.addEventListener(t, e), n.dispatch(Object(j.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(v) : "string" == typeof o && v(e)
                    }
                }({
                    logic: r,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: " + n)
            }), t.getState().ixSession.eventListeners.length && function (t) {
                function e() {
                    var e = t.getState(),
                        n = e.ixSession,
                        r = e.ixData,
                        i = window.innerWidth;
                    if (i !== n.viewportWidth) {
                        var o = r.mediaQueries;
                        t.dispatch(Object(j.viewportWidthChanged)({
                            width: i,
                            mediaQueries: o
                        }))
                    }
                }
                U.forEach(function (n) {
                    window.addEventListener(n, e), t.dispatch(Object(j.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(e), e.dispatch(Object(j.sessionStarted)()), function (t) {
            ! function e(n) {
                var r = t.getState(),
                    i = r.ixSession,
                    o = r.ixParameters;
                i.active && (t.dispatch(Object(j.animationFrameChanged)(n, o)), requestAnimationFrame(e))
            }(window.performance.now())
        }(e))
    }

    function F(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(B), t.dispatch(Object(j.sessionStopped)()))
    }

    function B(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var U = ["resize", "orientationchange"];
    var q = function (t, e) {
            return f()(v()(t, e), d.a)
        },
        W = function (t, e) {
            g()(t, function (t, n) {
                t.forEach(function (t, r) {
                    var i = n + S.h + r;
                    e(t, n, i)
                })
            })
        },
        X = function (t) {
            var e = {
                target: t.target
            };
            return Object(O.c)({
                config: e,
                elementApi: E
            })
        };

    function G(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState().ixData,
            o = i.actionLists,
            u = i.events[r],
            c = o[n];
        c && c.useFirstGroupAsInitialState && a()(c, "actionItemGroups[0].actionItems", []).forEach(function (t) {
            var i = t.config;
            Object(O.c)({
                config: i,
                event: u,
                elementApi: E
            }).forEach(function (i) {
                Q({
                    destination: Object(O.e)({
                        element: i,
                        actionItem: t,
                        elementApi: E
                    }),
                    immediate: !0,
                    store: e,
                    element: i,
                    eventId: r,
                    actionItem: t,
                    actionListId: n
                })
            })
        })
    }

    function H(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            u = e.getState(),
            c = u.ixInstances,
            s = u.ixSession.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null;
        g()(c, function (t) {
            var r = a()(t, "actionItem.config.target.boundaryMode"),
                u = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && u) {
                if (s && r && !E.elementContains(s, t.element)) return;
                K(t, e), t.verbose && e.dispatch(Object(j.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function $(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            s = t.immediate,
            f = t.verbose,
            l = e.getState(),
            d = l.ixData,
            p = l.ixSession,
            v = d.events[n] || {},
            h = v.mediaQueries,
            g = void 0 === h ? d.mediaQueryKeys : h,
            m = a()(d, "actionLists." + o, {}),
            y = m.actionItemGroups;
        c >= y.length && a()(v, "config.loop") && (c = 0), 0 === c && m.useFirstGroupAsInitialState && c++;
        var b = a()(y, [c, "actionItems"], []);
        if (!b.length) return !1;
        if (!Object(O.r)(g, p.mediaQueryKey)) return !1;
        var w = p.hasBoundaryNodes && r ? E.getClosestElement(r, S.f) : null,
            x = Object(O.j)(b),
            _ = !1;
        return b.forEach(function (t, a) {
            var u = t.config,
                l = u.target;
            if (l) {
                var d = l.boundaryMode ? w : null;
                Object(O.c)({
                    config: u,
                    event: v,
                    eventTarget: r,
                    elementRoot: d,
                    elementApi: E
                }).forEach(function (u, l) {
                    _ = !0;
                    var d = x === a && 0 === l,
                        p = Object(O.d)({
                            element: u,
                            actionItem: t
                        }),
                        v = Object(O.e)({
                            element: u,
                            actionItem: t,
                            elementApi: E
                        });
                    Q({
                        store: e,
                        element: u,
                        actionItem: t,
                        eventId: n,
                        eventTarget: r,
                        eventStateKey: i,
                        actionListId: o,
                        groupIndex: c,
                        isCarrier: d,
                        computedStyle: p,
                        destination: v,
                        immediate: s,
                        verbose: f
                    })
                })
            }
        }), _
    }

    function Q(t) {
        var e = t.store,
            n = t.computedStyle,
            r = function (t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            a = r.actionItem,
            u = r.immediate,
            c = Object(O.g)(),
            s = e.getState().ixElements,
            f = Object(O.f)(s, o),
            l = (s[f] || {}).refState,
            d = E.getRefType(o),
            p = Object(O.h)(o, l, n, a, E);
        e.dispatch(Object(j.instanceAdded)(k({
            instanceId: c,
            elementId: f,
            origin: p,
            refType: d
        }, r))), Y(document.body, "ix2-animation-started", c), u ? function (t, e) {
            t.dispatch(Object(j.instanceStarted)(e));
            var n = t.getState().ixParameters;
            t.dispatch(Object(j.animationFrameChanged)(Number.POSITIVE_INFINITY, n)), Z(t.getState().ixInstances[e], t)
        }(e, c) : (Object(O.n)({
            store: e,
            select: function (t) {
                return t.ixInstances[c]
            },
            onChange: Z
        }), i && e.dispatch(Object(j.instanceStarted)(c)))
    }

    function K(t, e) {
        Y(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === S.w && Object(O.a)(o, r, E), e.dispatch(Object(j.instanceRemoved)(t.id))
    }

    function Y(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function Z(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            g = t.styleProp,
            m = t.verbose,
            y = e.getState(),
            b = y.ixData,
            w = y.ixSession,
            x = (b.events[l] || {}).mediaQueries,
            _ = void 0 === x ? b.mediaQueryKeys : x;
        if (Object(O.r)(_, w.mediaQueryKey) && (r || n || i)) {
            if (s || c === S.C && i) {
                e.dispatch(Object(j.elementStateChanged)(o, u, s, a));
                var I = e.getState().ixElements[o] || {},
                    T = I.ref,
                    A = I.refType,
                    k = I.refState,
                    C = k && k[u];
                switch (A) {
                    case S.w:
                        Object(O.q)(T, k, C, l, a, g, E, c)
                }
            }
            if (i) {
                if (h) {
                    var M = $({
                        store: e,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: f + 1,
                        verbose: m
                    });
                    m && !M && e.dispatch(Object(j.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                K(t, e)
            }
        }
    }
}, function (t, e, n) {
    var r = n(84);
    t.exports = function (t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function (t, e, n) {
    var r = n(6),
        i = function () {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function (t, e) {
    t.exports = function (t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function (t, e, n) {
    var r = n(3),
        i = Object.create,
        o = function () {
            function t() {}
            return function (e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function (t, e, n) {
    var r = n(239),
        i = n(240),
        o = r ? function (t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function (t, e, n) {
    var r = n(241),
        i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function (t, e, n) {
    n(90), n(92), n(93), n(94), n(96), n(97), n(247), n(248), n(249), n(250), n(251), t.exports = n(252)
}, function (t, e, n) {
    var r = n(1);
    r.define("brand", t.exports = function (t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function () {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function (t, e, n) {
    var r = window.$,
        i = n(48) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function () {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function (n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function (t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function (t, e, n) {
            var r;
            return h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function (t, e, n) {
            var r = [];
            return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function (t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
                return t === e
            }))
        }, t.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, t.defer = function (e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function (t) {
            var e, n, r;
            return function () {
                e || (e = !0, n = arguments, r = this, i.frame(function () {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function (e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, u = t.now();
                var f = r && !i;
                return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function (e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function (e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function (t, e) {
            return u.call(t, e)
        }, t.isObject = function (t) {
            return t === Object(t)
        }, t.now = Date.now || function () {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var g = /(.)^/,
            m = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            y = /\\|'|\r|\n|\u2028|\u2029/g,
            b = function (t) {
                return "\\" + m[t]
            };
        return t.template = function (e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || g).source, (n.interpolate || g).source, (n.evaluate || g).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function (t, n, r, i, u) {
                return a += e.slice(o, u).replace(y, b), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function (e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function (t, e, n) {
    var r = n(1),
        i = n(24);
    r.define("dropdown", t.exports = function (t, e) {
        var n, o, a = {},
            u = t(document),
            c = r.env(),
            s = r.env.touch,
            f = ".w-dropdown",
            l = "w--open",
            d = "w-close" + f,
            p = i.triggers,
            v = 900,
            h = !1;

        function g() {
            o = c && r.env("design"), (n = u.find(f)).each(m)
        }

        function m(n, i) {
            var a = t(i),
                s = t.data(i, f);
            s || (s = t.data(i, f, {
                open: !1,
                el: a,
                config: {}
            })), s.list = a.children(".w-dropdown-list"), s.toggle = a.children(".w-dropdown-toggle"), s.links = s.list.children(".w-dropdown-link"), s.outside = function (n) {
                n.outside && u.off(_() + f, n.outside);
                return e.debounce(function (e) {
                    if (n.open) {
                        var i = t(e.target);
                        if (!i.closest(".w-dropdown-toggle").length) {
                            var o = -1 === t.inArray(n.el[0], i.parents(f)),
                                a = r.env("editor");
                            if (o) {
                                if (a) {
                                    var u = 1 === i.parents().length && 1 === i.parents("svg").length,
                                        c = i.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (u || c) return
                                }
                                x(n)
                            }
                        }
                    }
                })
            }(s), s.complete = function (t) {
                return function () {
                    t.list.removeClass(l), t.toggle.removeClass(l), t.manageZ && t.el.css("z-index", "")
                }
            }(s), s.leave = function (t) {
                return function () {
                    t.hovering = !1, x(t)
                }
            }(s), s.moveOutside = function (n) {
                return e.debounce(function (e) {
                    if (n.open) {
                        var r = t(e.target),
                            i = -1 === t.inArray(n.el[0], r.parents(f));
                        if (i) {
                            var o = r.parents(".w-editor-bem-EditorHoverControls").length,
                                a = r.parents(".w-editor-bem-RTToolbar").length,
                                u = t(".w-editor-bem-EditorOverlay"),
                                c = u.find(".w-editor-edit-outline").length || u.find(".w-editor-bem-RTToolbar").length;
                            if (o || a || c) return;
                            n.hovering = !1, x(n)
                        }
                    }
                })
            }(s), a.off(f), s.toggle.off(f), y(s), s.nav && s.nav.off(f), s.nav = a.closest(".w-nav"), s.nav.on(d, b(s)), o ? a.on("setting" + f, b(s)) : (s.toggle.on(_() + f, function (t) {
                return e.debounce(function () {
                    t.open ? x(t) : w(t)
                })
            }(s)), s.config.hover && s.toggle.on("mouseenter" + f, function (t) {
                return function () {
                    t.hovering = !0, w(t)
                }
            }(s)), a.on(d, b(s)), c && (s.hovering = !1, x(s)))
        }

        function y(t) {
            var e = Number(t.el.css("z-index"));
            t.manageZ = e === v || e === v + 1, t.config = {
                hover: Boolean(t.el.attr("data-hover")) && !s,
                delay: Number(t.el.attr("data-delay")) || 0
            }
        }

        function b(t) {
            return function (e, n) {
                return n = n || {}, "w-close" === e.type ? x(t) : "setting" === e.type ? (y(t), !0 === n.open && w(t), void(!1 === n.open && x(t, !0))) : void 0
            }
        }

        function w(e) {
            if (!e.open) {
                ! function (e) {
                    var r = e.el[0];
                    n.each(function (e, n) {
                        var i = t(n);
                        i.is(r) || i.has(r).length || i.triggerHandler(d)
                    })
                }(e), e.open = !0, e.list.addClass(l), e.toggle.addClass(l), p.intro(0, e.el[0]), r.redraw.up(), e.manageZ && e.el.css("z-index", v + 1);
                var i = r.env("editor");
                o || u.on(_() + f, e.outside), e.hovering && !i && e.el.on("mouseleave" + f, e.leave), e.hovering && i && u.on("mousemove" + f, e.moveOutside), window.clearTimeout(e.delayId)
            }
        }

        function x(t, e) {
            if (t.open && (!t.config.hover || !t.hovering)) {
                t.open = !1;
                var n = t.config;
                if (p.outro(0, t.el[0]), u.off(_() + f, t.outside), t.el.off("mouseleave" + f, t.leave), u.off("mousemove" + f, t.moveOutside), window.clearTimeout(t.delayId), !n.delay || e) return t.complete();
                t.delayId = window.setTimeout(t.complete, n.delay)
            }
        }

        function _() {
            return s ? "tap" : "mouseup"
        }
        return a.ready = g, a.design = function () {
            h && u.find(f).each(function (e, n) {
                t(n).triggerHandler(d)
            }), h = !1, g()
        }, a.preview = function () {
            h = !0, g()
        }, a
    })
}, function (t, e, n) {
    var r = n(1);
    r.define("edit", t.exports = function (t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture) return {
            exit: 1
        };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function () {
                i = !0, window.WebflowEditor = !0, o.off(c, l),
                    function (t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) {
                            "WF_third_party_cookies_unsupported" === r.data ? (v(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (v(e, n), t(!0))
                        };
                        e.onerror = function () {
                            v(e, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function (e) {
                        t.ajax({
                            url: p("https://editor-api.webflow.com/api/editor/view"),
                            data: {
                                siteId: a.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: function (e) {
                                return function (n) {
                                    var r;
                                    n ? (n.thirdPartyCookiesSupported = e, function (e, n) {
                                        t.ajax({
                                            type: "GET",
                                            url: e,
                                            dataType: "script",
                                            cache: !0
                                        }).then(n, d)
                                    }((r = n.scriptPath).indexOf("//") >= 0 ? r : p("https://editor-api.webflow.com" + r), function () {
                                        window.WebflowEditor(n)
                                    })) : console.error("Could not load editor data")
                                }
                            }(e)
                        })
                    })
            },
            f = !1;
        try {
            f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function l() {
            i || /\?edit/.test(u.hash) && s()
        }

        function d(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function p(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function v(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
    })
}, function (t, e, n) {
    var r = n(1);
    r.define("forms", t.exports = function (t, e) {
        var i = {};
        n(95);
        var o, a, u, c, s, f = t(document),
            l = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            g = window.alert,
            m = r.env(),
            y = /list-manage[1-9]?.com/i,
            b = e.debounce(function () {
                g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function w(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, {
                form: r
            })), x(i);
            var o = r.closest("div.w-form");
            i.done = o.find("> .w-form-done"), i.fail = o.find("> .w-form-fail"), i.fileUploads = o.find(".w-file-upload"), i.fileUploads.each(function (e) {
                ! function (e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        c = i.find("> .w-file-upload-error"),
                        f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"),
                        d = l.children(),
                        p = c.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        g = v.find(".w-file-upload-file-name"),
                        y = p.attr("data-w-size-error"),
                        b = p.attr("data-w-type-error"),
                        w = p.attr("data-w-generic-error");
                    if (m) f.on("click", function (t) {
                        t.preventDefault()
                    }), l.on("click", function (t) {
                        t.preventDefault()
                    }), d.on("click", function (t) {
                        t.preventDefault()
                    });
                    else {
                        h.on("click", function () {
                            f.removeAttr("data-value"), f.val(""), g.html(""), o.toggle(!0), u.toggle(!1)
                        }), f.on("change", function (i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), c.toggle(!1), a.toggle(!0), g.text(r.name), S() || _(n), n.fileUploads[e].uploading = !0, function (e, n) {
                                var r = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: s,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function (t) {
                                    n(null, t)
                                }).fail(function (t) {
                                    n(t)
                                })
                            }(r, j))
                        });
                        var O = l.outerHeight();
                        f.height(O), f.width(1)
                    }

                    function I(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = w;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = b : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = y), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), c.toggle(!0), n.fileUploads[e].uploading = !1, S() || x(n)
                    }

                    function j(e, n) {
                        if (e) return I(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        f.attr("data-value", a),
                            function (e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function () {
                                    o(null)
                                }).fail(function (t) {
                                    o(t)
                                })
                            }(u, o, r, i, E)
                    }

                    function E(t) {
                        if (t) return I(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || x(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function (t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), y.test(u) ? i.handler = j : u || (a ? i.handler = I : b())
        }

        function x(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function _(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function O(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function (t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function I(e) {
            x(e);
            var n = e.form,
                i = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: l.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
                };
            S(e);
            var o = O(n, i.fields);
            if (o) return g(o);
            i.fileUploads = function (e) {
                var n = {};
                return e.find(':input[type="file"]').each(function (e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), _(e), a ? t.ajax({
                url: c,
                type: "POST",
                data: i,
                dataType: "json",
                crossDomain: !0
            }).done(function (t) {
                t && 200 === t.code && (e.success = !0), E(e)
            }).fail(function () {
                E(e)
            }) : E(e)
        }

        function j(n) {
            x(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = O(r, i);
                if (a) return g(a);
                _(n), e.each(i, function (t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function (t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), E(n)
                }).fail(function () {
                    E(n)
                })
            } else r.attr("method", "post")
        }

        function E(t) {
            var e = t.form,
                n = t.redirect,
                i = t.success;
            i && n ? r.location(n) : (t.done.toggle(i), t.fail.toggle(!i), e.toggle(!i), x(t))
        }

        function S(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return i.ready = i.design = i.preview = function () {
            ! function () {
                a = t("html").attr("data-wf-site"), c = "https://webflow.com/api/v1/form/" + a, d && c.indexOf("https://webflow.com") >= 0 && (c = c.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (s = c + "/signFile", !(o = t(p + " form")).length) return;
                o.each(w)
            }(), m || u || (u = !0, f.on("submit", p + " form", function (e) {
                var n = t.data(this, p);
                n.handler && (n.evt = e, n.handler(n))
            }))
        }, i
    })
}, function (t, e) {
    /*!
     * jQuery-ajaxTransport-XDomainRequest - v1.0.3
     * 2014-12-16 WEBFLOW - Removed UMD wrapper
     * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
     * Copyright (c) 2014 Jason Moon (@JSONMOON)
     * @license MIT (/blob/master/LICENSE.txt)
     */
    t.exports = function (t) {
        if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
            var e = /^https?:\/\//i,
                n = /^get|post$/i,
                r = new RegExp("^" + location.protocol, "i");
            t.ajaxTransport("* text html xml json", function (i, o, a) {
                if (i.crossDomain && i.async && n.test(i.type) && e.test(i.url) && r.test(i.url)) {
                    var u = null;
                    return {
                        send: function (e, n) {
                            var r = "",
                                a = (o.dataType || "").toLowerCase();
                            u = new XDomainRequest, /^\d+$/.test(o.timeout) && (u.timeout = o.timeout), u.ontimeout = function () {
                                n(500, "timeout")
                            }, u.onload = function () {
                                var e = "Content-Length: " + u.responseText.length + "\r\nContent-Type: " + u.contentType,
                                    r = {
                                        code: 200,
                                        message: "success"
                                    },
                                    i = {
                                        text: u.responseText
                                    };
                                try {
                                    if ("html" === a || /text\/html/i.test(u.contentType)) i.html = u.responseText;
                                    else if ("json" === a || "text" !== a && /\/json/i.test(u.contentType)) try {
                                        i.json = t.parseJSON(u.responseText)
                                    } catch (t) {
                                        r.code = 500, r.message = "parseerror"
                                    } else if ("xml" === a || "text" !== a && /\/xml/i.test(u.contentType)) {
                                        var o = new ActiveXObject("Microsoft.XMLDOM");
                                        o.async = !1;
                                        try {
                                            o.loadXML(u.responseText)
                                        } catch (t) {
                                            o = void 0
                                        }
                                        if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw r.code = 500, r.message = "parseerror", "Invalid XML: " + u.responseText;
                                        i.xml = o
                                    }
                                } catch (t) {
                                    throw t
                                } finally {
                                    n(r.code, r.message, i, e)
                                }
                            }, u.onprogress = function () {}, u.onerror = function () {
                                n(500, "error", {
                                    text: u.responseText
                                })
                            }, o.data && (r = "string" === t.type(o.data) ? o.data : t.param(o.data)), u.open(i.type, i.url), u.send(r)
                        },
                        abort: function () {
                            u && u.abort()
                        }
                    }
                }
            })
        }
    }(window.jQuery)
}, function (t, e, n) {
    var r = n(1),
        i = n(49);
    r.define("ix", t.exports = function (t, e) {
        var n, o, a = {},
            u = t(window),
            c = ".w-ix",
            s = t.tram,
            f = r.env,
            l = f(),
            d = f.chrome && f.chrome < 35,
            p = "none 0s ease 0s",
            v = t(),
            h = {},
            g = [],
            m = [],
            y = [],
            b = 1,
            w = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };

        function x(t) {
            t && (h = {}, e.each(t, function (t) {
                h[t.slug] = t.value
            }), _())
        }

        function _() {
            ! function () {
                var e = t("[data-ix]");
                if (!e.length) return;
                e.each(j), e.each(O), g.length && (r.scroll.on(E), setTimeout(E, 1));
                m.length && r.load(S);
                y.length && setTimeout(T, b)
            }(), i.init(), r.redraw.up()
        }

        function O(n, o) {
            var u = t(o),
                s = u.attr("data-ix"),
                f = h[s];
            if (f) {
                var d = f.triggers;
                d && (a.style(u, f.style), e.each(d, function (t) {
                    var e = {},
                        n = t.type,
                        o = t.stepsB && t.stepsB.length;

                    function a() {
                        A(t, u, {
                            group: "A"
                        })
                    }

                    function s() {
                        A(t, u, {
                            group: "B"
                        })
                    }
                    if ("load" !== n) {
                        if ("click" === n) return u.on("click" + c, function (n) {
                            r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(), A(t, u, {
                                group: e.clicked ? "B" : "A"
                            }), o && (e.clicked = !e.clicked))
                        }), void(v = v.add(u));
                        if ("hover" === n) return u.on("mouseenter" + c, a), u.on("mouseleave" + c, s), void(v = v.add(u));
                        if ("scroll" !== n) {
                            var f = w[n];
                            if (f) {
                                var d = u.closest(f);
                                return d.on(i.types.INTRO, a).on(i.types.OUTRO, s), void(v = v.add(d))
                            }
                        } else g.push({
                            el: u,
                            trigger: t,
                            state: {
                                active: !1
                            },
                            offsetTop: I(t.offsetTop),
                            offsetBot: I(t.offsetBot)
                        })
                    } else t.preload && !l ? m.push(a) : y.push(a)
                }))
            }
        }

        function I(t) {
            if (!t) return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
        }

        function j(e, n) {
            t(n).off(c)
        }

        function E() {
            for (var t = u.scrollTop(), e = u.height(), n = g.length, r = 0; r < n; r++) {
                var i = g[r],
                    o = i.el,
                    a = i.trigger,
                    c = a.stepsB && a.stepsB.length,
                    s = i.state,
                    f = o.offset().top,
                    l = o.outerHeight(),
                    d = i.offsetTop,
                    p = i.offsetBot;
                d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
                var v = f + l - d >= t && f + p <= t + e;
                v !== s.active && ((!1 !== v || c) && (s.active = v, A(a, o, {
                    group: v ? "A" : "B"
                })))
            }
        }

        function S() {
            for (var t = m.length, e = 0; e < t; e++) m[e]()
        }

        function T() {
            for (var t = y.length, e = 0; e < t; e++) y[e]()
        }

        function A(e, r, i, o) {
            var a = (i = i || {}).done,
                u = e.preserve3d;
            if (!n || i.force) {
                var c = i.group || "A",
                    f = e["loop" + c],
                    p = e["steps" + c];
                if (p && p.length) {
                    if (p.length < 2 && (f = !1), !o) {
                        var v = e.selector;
                        v && (r = e.descend ? r.find(v) : e.siblings ? r.siblings(v) : t(v), l && r.attr("data-ix-affect", 1)), d && r.addClass("w-ix-emptyfix"), u && r.css("transform-style", "preserve-3d")
                    }
                    for (var h = s(r), g = {
                            omit3d: !u
                        }, m = 0; m < p.length; m++) k(h, p[m], g);
                    g.start ? h.then(y) : y()
                }
            }

            function y() {
                if (f) return A(e, r, i, !0);
                "auto" === g.width && h.set({
                    width: "auto"
                }), "auto" === g.height && h.set({
                    height: "auto"
                }), a && a()
            }
        }

        function k(t, e, n) {
            var i = "add",
                o = "start";
            n.start && (i = o = "then");
            var a = e.transition;
            if (a) {
                a = a.split(",");
                for (var u = 0; u < a.length; u++) {
                    var c = a[u];
                    t[i](c)
                }
            }
            var s = C(e, n) || {};
            if (null != s.width && (n.width = s.width), null != s.height && (n.height = s.height), null == a) {
                n.start ? t.then(function () {
                    var e = this.queue;
                    this.set(s), s.display && (t.redraw(), r.redraw.up()), this.queue = e, this.next()
                }) : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
                var f = s.wait;
                null != f && (t.wait(f), n.start = !0)
            } else {
                if (s.display) {
                    var l = s.display;
                    delete s.display, n.start ? t.then(function () {
                        var t = this.queue;
                        this.set({
                            display: l
                        }).redraw(), r.redraw.up(), this.queue = t, this.next()
                    }) : (t.set({
                        display: l
                    }).redraw(), r.redraw.up())
                }
                t[o](s), n.start = !0
            }
        }

        function C(t, e) {
            var n = e && e.omit3d,
                r = {},
                i = !1;
            for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (r[o] = t[o], i = !0);
            return i ? r : null
        }
        return a.init = function (t) {
            setTimeout(function () {
                x(t)
            }, 1)
        }, a.preview = function () {
            n = !1, b = 100, setTimeout(function () {
                x(window.__wf_ix)
            }, 1)
        }, a.design = function () {
            n = !0, a.destroy()
        }, a.destroy = function () {
            o = !0, v.each(j), r.scroll.off(E), i.async(), g = [], m = [], y = []
        }, a.ready = function () {
            if (l) return f("design") ? a.design() : a.preview();
            h && o && (o = !1, _())
        }, a.run = A, a.style = l ? function (e, n) {
            var r = s(e);
            if (t.isEmptyObject(n)) return;
            e.css("transition", "");
            var i = e.css("transition");
            i === p && (i = r.upstream = null);
            r.upstream = p, r.set(C(n)), r.upstream = i
        } : function (t, e) {
            s(t).set(C(e))
        }, a
    })
}, function (t, e, n) {
    var r = n(1),
        i = n(98);
    r.define("ix2", t.exports = function () {
        return i
    })
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "init", function () {
        return f
    }), n.d(e, "destroy", function () {
        return l
    }), n.d(e, "store", function () {
        return s
    });
    var r = n(50),
        i = n(113),
        o = n(82),
        a = n(1),
        u = n.n(a),
        c = n(44);
    n.d(e, "actions", function () {
        return c
    });
    var s = Object(r.b)(i.a);

    function f(t) {
        l(), Object(o.c)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }

    function l() {
        Object(o.e)(s)
    }
    u.a.env() && Object(o.a)(s)
}, function (t, e, n) {
    "use strict";
    var r = n(53),
        i = n(102),
        o = n(103),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.a ? r.a.toStringTag : void 0;
    e.a = function (t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.a)(t) : Object(o.a)(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(101),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.a || i || Function("return this")();
    e.a = o
}, function (t, e, n) {
    "use strict";
    (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.a = n
    }).call(e, n(25))
}, function (t, e, n) {
    "use strict";
    var r = n(53),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.a ? r.a.toStringTag : void 0;
    e.a = function (t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.a = function (t) {
        return r.call(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(105),
        i = Object(r.a)(Object.getPrototypeOf, Object);
    e.a = i
}, function (t, e, n) {
    "use strict";
    e.a = function (t, e) {
        return function (n) {
            return t(e(n))
        }
    }
}, function (t, e, n) {
    "use strict";
    e.a = function (t) {
        return null != t && "object" == typeof t
    }
}, function (t, e, n) {
    "use strict";
    (function (t, r) {
        var i, o = n(109);
        i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
        var a = Object(o.a)(i);
        e.a = a
    }).call(e, n(25), n(108)(t))
}, function (t, e) {
    t.exports = function (t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function () {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function (t, e, n) {
    "use strict";
    e.a = function (t) {
        var e, n = t.Symbol;
        "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable";
        return e
    }
}, function (t, e, n) {
    "use strict";
    e.a = function (t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function (t) {
                Object.keys(t).forEach(function (e) {
                    var n = t[e],
                        i = n(void 0, {
                            type: r.a.INIT
                        });
                    if (void 0 === i) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                    if (void 0 === n(void 0, {
                            type: o
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    };
    var r = n(51);
    n(52), n(54);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }
}, function (t, e, n) {
    "use strict"
}, function (t, e, n) {
    "use strict";
    n(55), Object.assign
}, function (t, e, n) {
    "use strict";
    var r = n(50),
        i = n(114),
        o = n(115),
        a = n(116),
        u = n(117),
        c = n(118),
        s = n(195);
    e.a = Object(r.a)({
        ixData: i.a,
        ixRequest: o.a,
        ixSession: a.a,
        ixElements: u.a,
        ixInstances: c.a,
        ixParameters: s.a
    })
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return i
    });
    var r = n(4),
        i = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments[1];
            switch (e.type) {
                case r.m:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return f
    });
    var r, i = n(4),
        o = n(11),
        a = (n.n(o), Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        });

    function u(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var c = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        s = Object.create(null, (u(r = {}, i.l, {
            value: "preview"
        }), u(r, i.k, {
            value: "playback"
        }), u(r, i.q, {
            value: "stop"
        }), u(r, i.c, {
            value: "clear"
        }), r)),
        f = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
                e = arguments[1];
            if (e.type in s) {
                var n = [s[e.type]];
                return Object(o.setIn)(t, [n], a({}, e.payload))
            }
            return t
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return a
    });
    var r = n(4),
        i = n(11),
        o = (n.n(i), {
            active: !1,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1
        }),
        a = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
                e = arguments[1];
            switch (e.type) {
                case r.n:
                    var n = e.payload.hasBoundaryNodes;
                    return Object(i.set)(t, "hasBoundaryNodes", n);
                case r.o:
                    return Object(i.set)(t, "active", !0);
                case r.p:
                    return o;
                case r.e:
                    var a = Object(i.addLast)(t.eventListeners, e.payload);
                    return Object(i.set)(t, "eventListeners", a);
                case r.f:
                    var u = e.payload,
                        c = u.stateKey,
                        s = u.newState;
                    return Object(i.setIn)(t, ["eventState", c], s);
                case r.a:
                    var f = e.payload,
                        l = f.actionListId,
                        d = f.isPlaying;
                    return Object(i.setIn)(t, ["playbackState", l], d);
                case r.r:
                    for (var p = e.payload, v = p.width, h = p.mediaQueries, g = h.length, m = null, y = 0; y < g; y++) {
                        var b = h[y],
                            w = b.key,
                            x = b.min,
                            _ = b.max;
                        if (v >= x && v <= _) {
                            m = w;
                            break
                        }
                    }
                    return Object(i.merge)(t, {
                        viewportWidth: v,
                        mediaQueryKey: m
                    });
                default:
                    return t
            }
        }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return c
    });
    var r = n(11),
        i = (n.n(r), n(8)),
        o = n(4),
        a = {},
        u = "refState",
        c = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case o.p:
                    return a;
                case o.g:
                    var n = e.payload,
                        u = n.elementId,
                        c = n.element,
                        f = n.origin,
                        l = n.actionItem,
                        d = n.refType,
                        p = l.actionTypeId,
                        v = t;
                    return Object(r.getIn)(v, [u, c]) !== c && (v = function (t, e, n, o, a) {
                        var u = n === i.A ? Object(r.getIn)(a, ["config", "target", "objectId"]) : null;
                        return Object(r.mergeIn)(t, [o], {
                            id: o,
                            ref: e,
                            refId: u,
                            refType: n
                        })
                    }(v, c, d, u, l)), s(v, u, p, f, l);
                case o.d:
                    var h = e.payload;
                    return s(t, h.elementId, h.actionTypeId, h.current, h.actionItem);
                default:
                    return t
            }
        };

    function s(t, e, n, i, o) {
        var a = function (t) {
                var e = t.config;
                return f.reduce(function (t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            c = [e, u, n];
        return Object(r.mergeIn)(t, c, i, a)
    }
    var f = [
        [i.n, i.m],
        [i.p, i.o],
        [i.r, i.q],
        [i.l, i.k]
    ]
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return f
    });
    var r = n(8),
        i = n(4),
        o = n(11),
        a = (n.n(o), n(56)),
        u = n(14),
        c = function (t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                c = t.destinationKeys,
                s = t.smoothing,
                f = t.restingValue,
                l = t.actionTypeId,
                d = e.payload.parameters,
                p = Math.max(1 - s, .01),
                v = d[r];
            null == v && (p = 1, v = f);
            var h = Math.max(v, 0) || 0,
                g = Object(a.b)(h - n),
                m = Object(a.b)(n + g * p),
                y = 100 * m;
            if (m === n && t.current) return t;
            for (var b = void 0, w = void 0, x = void 0, _ = void 0, O = 0, I = i.length; O < I; O++) {
                var j = i[O],
                    E = j.keyframe,
                    S = j.actionItems;
                if (0 === O && (b = S[0]), y >= E) {
                    b = S[0];
                    var T = i[O + 1],
                        A = T && y !== E;
                    w = A ? T.actionItems[0] : null, A && (x = E / 100, _ = (T.keyframe - E) / 100)
                }
            }
            var k = {};
            if (b && !w)
                for (var C = 0, M = c.length; C < M; C++) {
                    var L = c[C];
                    k[L] = Object(u.i)(l, L, b.config)
                } else if (b && w)
                    for (var P = (m - x) / _, N = b.config.easing, D = Object(a.a)(N, P), R = 0, z = c.length; R < z; R++) {
                        var V = c[R],
                            F = Object(u.i)(l, V, b.config),
                            B = (Object(u.i)(l, V, w.config) - F) * D + F;
                        k[V] = B
                    }
            return Object(o.merge)(t, {
                position: m,
                current: k
            })
        },
        s = function (t, e) {
            var n = t,
                i = n.active,
                u = n.origin,
                c = n.start,
                s = n.immediate,
                f = n.renderType,
                l = n.verbose,
                d = n.actionItem,
                p = n.destination,
                v = n.destinationKeys,
                h = d.config.easing,
                g = d.config,
                m = g.duration,
                y = g.delay;
            f === r.C ? m = 0 : s && (m = y = 0);
            var b = e.payload.now;
            if (i && u) {
                var w = b - (c + y);
                if (l) {
                    var x = b - c,
                        _ = m + y,
                        O = Object(a.b)(Math.min(Math.max(0, x / _), 1));
                    t = Object(o.set)(t, "verboseTimeElapsed", _ * O)
                }
                if (w < 0) return t;
                var I = Object(a.b)(Math.min(Math.max(0, w / m), 1)),
                    j = Object(a.a)(h, I),
                    E = {},
                    S = v.length ? v.reduce(function (t, e) {
                        var n = p[e],
                            r = parseFloat(u[e]) || 0,
                            i = (parseFloat(n) - r) * j + r;
                        return t[e] = i, t
                    }, {}) : null;
                return E.current = S, E.position = I, 1 === I && (E.active = !1, E.complete = !0), Object(o.merge)(t, E)
            }
            return t
        },
        f = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments[1];
            switch (e.type) {
                case i.m:
                    return e.payload.ixInstances || Object.freeze({});
                case i.p:
                    return Object.freeze({});
                case i.g:
                    var n = e.payload,
                        r = n.instanceId,
                        a = n.elementId,
                        f = n.actionItem,
                        l = n.eventId,
                        d = n.eventTarget,
                        p = n.eventStateKey,
                        v = n.actionListId,
                        h = n.groupIndex,
                        g = n.isCarrier,
                        m = n.origin,
                        y = n.destination,
                        b = n.immediate,
                        w = n.verbose,
                        x = n.continuous,
                        _ = n.parameterId,
                        O = n.actionGroups,
                        I = n.smoothing,
                        j = n.restingValue,
                        E = f.actionTypeId,
                        S = Object(u.l)(E),
                        T = Object(u.m)(S, E),
                        A = Object.keys(y).filter(function (t) {
                            return null != y[t]
                        });
                    return Object(o.set)(t, r, {
                        id: r,
                        elementId: a,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: m,
                        destination: y,
                        destinationKeys: A,
                        immediate: b,
                        verbose: w,
                        current: null,
                        actionItem: f,
                        actionTypeId: E,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: h,
                        renderType: S,
                        isCarrier: g,
                        styleProp: T,
                        continuous: x,
                        parameterId: _,
                        actionGroups: O,
                        smoothing: I,
                        restingValue: j
                    });
                case i.i:
                    var k = e.payload.instanceId;
                    return Object(o.mergeIn)(t, [k], {
                        active: !0,
                        complete: !1,
                        start: window.performance.now()
                    });
                case i.h:
                    var C = e.payload.instanceId;
                    if (!t[C]) return t;
                    for (var M = {}, L = Object.keys(t), P = L.length, N = 0; N < P; N++) {
                        var D = L[N];
                        D !== C && (M[D] = t[D])
                    }
                    return M;
                case i.b:
                    for (var R = t, z = Object.keys(t), V = z.length, F = 0; F < V; F++) {
                        var B = z[F],
                            U = t[B],
                            q = U.continuous ? c : s;
                        R = Object(o.set)(R, B, q(U, e))
                    }
                    return R;
                default:
                    return t
            }
        }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n.d(e, "ease", function () {
        return a
    }), n.d(e, "easeIn", function () {
        return u
    }), n.d(e, "easeOut", function () {
        return c
    }), n.d(e, "easeInOut", function () {
        return s
    }), e.inQuad = function (t) {
        return Math.pow(t, 2)
    }, e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function (t) {
        return Math.pow(t, 3)
    }, e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function (t) {
        return Math.pow(t, 4)
    }, e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function (t) {
        return Math.pow(t, 5)
    }, e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function (t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function (t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function (t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function (t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function (t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function (t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    };
    var r = n(120),
        i = n.n(r),
        o = 1.70158,
        a = i()(.25, .1, .25, 1),
        u = i()(.42, 0, 1, 1),
        c = i()(0, 0, .58, 1),
        s = i()(.42, 0, .58, 1)
}, function (t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function f(t, e) {
        return 3 * e - 6 * t
    }

    function l(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
    }
    t.exports = function (t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                g = p(h, t, s);
            return g >= r ? function (t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === g ? h : function (t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function (n) {
            return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
        }
    }
}, function (t, e, n) {
    var r = n(12),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
        return n.call(t)
    }
}, function (t, e, n) {
    var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        o = n(124)(function (t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, function (t, n, r, o) {
                e.push(r ? o.replace(i, "$1") : n || t)
            }), e
        });
    t.exports = o
}, function (t, e, n) {
    var r = n(125),
        i = 500;
    t.exports = function (t) {
        var e = r(t, function (t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function (t, e, n) {
    var r = n(28),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function () {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function (t, e, n) {
    var r = n(127),
        i = n(19),
        o = n(30);
    t.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function (t, e, n) {
    var r = n(128),
        i = n(133),
        o = n(134),
        a = n(135),
        u = n(136);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
    var r = n(18);
    t.exports = function () {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function (t, e, n) {
    var r = n(58),
        i = n(130),
        o = n(3),
        a = n(59),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function (t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function (t, e, n) {
    var r, i = n(131),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function (t) {
        return !!o && o in t
    }
}, function (t, e, n) {
    var r = n(2)["__core-js_shared__"];
    t.exports = r
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t ? void 0 : t[e]
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e, n) {
    var r = n(18),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function (t, e, n) {
    var r = n(18),
        i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function (t, e, n) {
    var r = n(18),
        i = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function (t, e) {
    t.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (t, e, n) {
    var r = n(20),
        i = Array.prototype.splice;
    t.exports = function (t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function (t, e, n) {
    var r = n(20);
    t.exports = function (t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function (t, e, n) {
    var r = n(20);
    t.exports = function (t) {
        return r(this.__data__, t) > -1
    }
}, function (t, e, n) {
    var r = n(20);
    t.exports = function (t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t) {
        return r(this, t).get(t)
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t) {
        return r(this, t).has(t)
    }
}, function (t, e, n) {
    var r = n(21);
    t.exports = function (t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null == t || t != t ? e : t
    }
}, function (t, e, n) {
    var r = n(149),
        i = n(63),
        o = n(7),
        a = n(190),
        u = n(0);
    t.exports = function (t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function (t, e) {
    t.exports = function (t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function (t, e, n) {
    var r = n(151)();
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        return function (e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function (t, e, n) {
    var r = n(9),
        i = n(5),
        o = "[object Arguments]";
    t.exports = function (t) {
        return i(t) && r(t) == o
    }
}, function (t, e) {
    t.exports = function () {
        return !1
    }
}, function (t, e, n) {
    var r = n(9),
        i = n(34),
        o = n(5),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function (t, e) {
    t.exports = function (t) {
        return function (e) {
            return t(e)
        }
    }
}, function (t, e, n) {
    (function (t) {
        var r = n(57),
            i = "object" == typeof e && e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function () {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(e, n(66)(t))
}, function (t, e, n) {
    var r = n(67)(Object.keys, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(10);
    t.exports = function (t, e) {
        return function (n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function (t, e, n) {
    var r = n(161),
        i = n(183),
        o = n(76);
    t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
            return n === t || r(n, t, e)
        }
    }
}, function (t, e, n) {
    var r = n(68),
        i = n(69),
        o = 1,
        a = 2;
    t.exports = function (t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var l = n[c];
            if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var g = u(p, v, d, t, e, h);
                if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1
            }
        }
        return !0
    }
}, function (t, e, n) {
    var r = n(19);
    t.exports = function () {
        this.__data__ = new r, this.size = 0
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.get(t)
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e, n) {
    var r = n(19),
        i = n(30),
        o = n(28),
        a = 200;
    t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function (t, e, n) {
    var r = n(68),
        i = n(70),
        o = n(173),
        a = n(177),
        u = n(38),
        c = n(0),
        s = n(31),
        f = n(33),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, g, m, y) {
        var b = c(t),
            w = c(e),
            x = b ? p : u(t),
            _ = w ? p : u(e),
            O = (x = x == d ? v : x) == v,
            I = (_ = _ == d ? v : _) == v,
            j = x == _;
        if (j && s(t)) {
            if (!s(e)) return !1;
            b = !0, O = !1
        }
        if (j && !O) return y || (y = new r), b || f(t) ? i(t, e, n, g, m, y) : o(t, e, x, n, g, m, y);
        if (!(n & l)) {
            var E = O && h.call(t, "__wrapped__"),
                S = I && h.call(e, "__wrapped__");
            if (E || S) {
                var T = E ? t.value() : t,
                    A = S ? e.value() : e;
                return y || (y = new r), m(T, A, n, g, y)
            }
        }
        return !!j && (y || (y = new r), a(t, e, n, g, m, y))
    }
}, function (t, e, n) {
    var r = n(28),
        i = n(169),
        o = n(170);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function (t) {
        return this.__data__.set(t, n), this
    }
}, function (t, e) {
    t.exports = function (t) {
        return this.__data__.has(t)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return t.has(e)
    }
}, function (t, e, n) {
    var r = n(12),
        i = n(174),
        o = n(29),
        a = n(70),
        u = n(175),
        c = n(176),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        g = "[object RegExp]",
        m = "[object Set]",
        y = "[object String]",
        b = "[object Symbol]",
        w = "[object ArrayBuffer]",
        x = "[object DataView]",
        _ = r ? r.prototype : void 0,
        O = _ ? _.valueOf : void 0;
    t.exports = function (t, e, n, r, _, I, j) {
        switch (n) {
            case x:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case w:
                return !(t.byteLength != e.byteLength || !I(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case g:
            case y:
                return t == e + "";
            case v:
                var E = u;
            case m:
                var S = r & s;
                if (E || (E = c), t.size != e.size && !S) return !1;
                var T = j.get(t);
                if (T) return T == e;
                r |= f, j.set(t, e);
                var A = a(E(t), E(e), r, _, I, j);
                return j.delete(t), A;
            case b:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
}, function (t, e, n) {
    var r = n(2).Uint8Array;
    t.exports = r
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }), n
    }
}, function (t, e, n) {
    var r = n(178),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) {
            var p = f[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t);
        if (v && c.get(e)) return v == e;
        var h = !0;
        c.set(t, e), c.set(e, t);
        for (var g = s; ++d < l;) {
            var m = t[p = f[d]],
                y = e[p];
            if (a) var b = s ? a(y, m, p, e, t, c) : a(m, y, p, t, e, c);
            if (!(void 0 === b ? m === y || u(m, y, n, a, c) : b)) {
                h = !1;
                break
            }
            g || (g = "constructor" == p)
        }
        if (h && !g) {
            var w = t.constructor,
                x = e.constructor;
            w != x && "constructor" in t && "constructor" in e && !("function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x) && (h = !1)
        }
        return c.delete(t), c.delete(e), h
    }
}, function (t, e, n) {
    var r = n(71),
        i = n(72),
        o = n(22);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function (t, e, n) {
    var r = n(6)(n(2), "DataView");
    t.exports = r
}, function (t, e, n) {
    var r = n(6)(n(2), "Promise");
    t.exports = r
}, function (t, e, n) {
    var r = n(6)(n(2), "Set");
    t.exports = r
}, function (t, e, n) {
    var r = n(75),
        i = n(22);
    t.exports = function (t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function (t, e, n) {
    var r = n(69),
        i = n(15),
        o = n(185),
        a = n(27),
        u = n(75),
        c = n(76),
        s = n(13),
        f = 1,
        l = 2;
    t.exports = function (t, e) {
        return a(t) && u(e) ? c(s(t), e) : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
        }
    }
}, function (t, e, n) {
    var r = n(186),
        i = n(187);
    t.exports = function (t, e) {
        return null != t && i(t, e, r)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return null != t && e in Object(t)
    }
}, function (t, e, n) {
    var r = n(16),
        i = n(23),
        o = n(0),
        a = n(32),
        u = n(34),
        c = n(13);
    t.exports = function (t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function (t, e, n) {
    var r = n(77),
        i = n(189),
        o = n(27),
        a = n(13);
    t.exports = function (t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function (t, e, n) {
    var r = n(26);
    t.exports = function (t) {
        return function (e) {
            return r(e, t)
        }
    }
}, function (t, e) {
    t.exports = function (t, e, n, r, i) {
        return i(t, function (t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function (t, e, n) {
    var r = n(78)(n(192));
    t.exports = r
}, function (t, e, n) {
    var r = n(79),
        i = n(7),
        o = n(40),
        a = Math.max,
        u = Math.min;
    t.exports = function (t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function (t, e, n) {
    var r = n(41),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function (t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function (t, e, n) {
    var r = n(79),
        i = n(7),
        o = n(40),
        a = Math.max;
    t.exports = function (t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", function () {
        return i
    });
    var r = n(4),
        i = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments[1];
            switch (e.type) {
                case r.m:
                    return e.payload.ixParameters || {};
                case r.p:
                    return {};
                case r.j:
                    var n = e.payload,
                        i = n.key,
                        o = n.value;
                    return t[i] = o, t;
                default:
                    return t
            }
        }
}, function (t, e, n) {
    var r = n(35),
        i = n(38),
        o = n(10),
        a = n(197),
        u = n(198),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function (t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function (t, e, n) {
    var r = n(9),
        i = n(0),
        o = n(5),
        a = "[object String]";
    t.exports = function (t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function (t, e, n) {
    var r = n(199),
        i = n(200),
        o = n(201);
    t.exports = function (t) {
        return i(t) ? o(t) : r(t)
    }
}, function (t, e, n) {
    var r = n(77)("length");
    t.exports = r
}, function (t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function (t) {
        return n.test(t)
    }
}, function (t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function (t) {
        for (var e = l.lastIndex = 0; l.test(t);) ++e;
        return e
    }
}, function (t, e, n) {
    var r = n(7),
        i = n(203),
        o = n(204);
    t.exports = function (t, e) {
        return o(t, i(r(e)))
    }
}, function (t, e) {
    var n = "Expected a function";
    t.exports = function (t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function () {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function (t, e, n) {
    var r = n(62),
        i = n(7),
        o = n(205),
        a = n(208);
    t.exports = function (t, e) {
        if (null == t) return {};
        var n = r(a(t), function (t) {
            return [t]
        });
        return e = i(e), o(t, n, function (t, n) {
            return e(t, n[0])
        })
    }
}, function (t, e, n) {
    var r = n(26),
        i = n(206),
        o = n(16);
    t.exports = function (t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function (t, e, n) {
    var r = n(207),
        i = n(16),
        o = n(32),
        a = n(3),
        u = n(13);
    t.exports = function (t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function (t, e, n) {
    var r = n(83),
        i = n(29),
        o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function (t, e, n) {
    var r = n(71),
        i = n(209),
        o = n(211);
    t.exports = function (t) {
        return r(t, o, i)
    }
}, function (t, e, n) {
    var r = n(37),
        i = n(210),
        o = n(72),
        a = n(73),
        u = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function (t, e, n) {
    var r = n(67)(Object.getPrototypeOf, Object);
    t.exports = r
}, function (t, e, n) {
    var r = n(65),
        i = n(212),
        o = n(10);
    t.exports = function (t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function (t, e, n) {
    var r = n(3),
        i = n(36),
        o = n(213),
        a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function (t, e, n) {
    var r = n(35),
        i = n(38),
        o = n(23),
        a = n(0),
        u = n(10),
        c = n(31),
        s = n(36),
        f = n(33),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function (t, e, n) {
    var r = n(83),
        i = n(64),
        o = n(7);
    t.exports = function (t, e) {
        var n = {};
        return e = o(e, 3), i(t, function (t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function (t, e, n) {
    var r = n(217),
        i = n(63),
        o = n(218),
        a = n(0);
    t.exports = function (t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function (t, e) {
    t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function (t, e, n) {
    var r = n(39);
    t.exports = function (t) {
        return "function" == typeof t ? t : r
    }
}, function (t, e, n) {
    var r = n(85),
        i = n(61),
        o = n(40),
        a = n(60);
    t.exports = function (t, e, n) {
        t = a(t), e = i(e);
        var u = t.length,
            c = n = void 0 === n ? u : r(o(n), 0, u);
        return (n -= e.length) >= 0 && t.slice(n, c) == e
    }
}, function (t, e, n) {
    var r = n(221),
        i = n(3),
        o = "Expected a function";
    t.exports = function (t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function (t, e, n) {
    var r = n(3),
        i = n(222),
        o = n(41),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function (t, e, n) {
        var s, f, l, d, p, v, h = 0,
            g = !1,
            m = !1,
            y = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function b(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function w(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || m && t - h >= l
        }

        function x() {
            var t = i();
            if (w(t)) return _(t);
            p = setTimeout(x, function (t) {
                var n = e - (t - v);
                return m ? c(n, l - (t - h)) : n
            }(t))
        }

        function _(t) {
            return p = void 0, y && s ? b(t) : (s = f = void 0, d)
        }

        function O() {
            var t = i(),
                n = w(t);
            if (s = arguments, f = this, v = t, n) {
                if (void 0 === p) return function (t) {
                    return h = t, p = setTimeout(x, e), g ? b(t) : d
                }(v);
                if (m) return p = setTimeout(x, e), b(v)
            }
            return void 0 === p && (p = setTimeout(x, e)), d
        }
        return e = o(e) || 0, r(n) && (g = !!n.leading, l = (m = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, y = "trailing" in n ? !!n.trailing : y), O.cancel = function () {
            void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
        }, O.flush = function () {
            return void 0 === p ? d : _(i())
        }, O
    }
}, function (t, e, n) {
    var r = n(2);
    t.exports = function () {
        return r.Date.now()
    }
}, function (t, e, n) {
    "use strict";
    e.__esModule = !0;
    var r, i = n(224),
        o = (r = i) && r.__esModule ? r : {
            default: r
        };
    e.default = o.default
}, function (t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    t.exports = function (t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function (t, e, n) {
        t.style[e] = n
    }, e.getStyle = function (t, e) {
        return t.style[e]
    }, e.getProperty = function (t, e) {
        return t[e]
    }, e.matchSelector = function (t) {
        return function (e) {
            return e[i.a](t)
        }
    }, e.getQuerySelector = function (t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var i = e;
            if (-1 !== e.indexOf(r.y)) {
                var o = e.split(r.y),
                    a = o[0];
                if (i = o[1], a !== document.documentElement.getAttribute(r.N)) return null
            }
            return '[data-w-id^="' + i + '"]'
        }
        return n
    }, e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(r.N)) return document;
        return null
    }, e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function (t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = 0, r = t.length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function () {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, n.d(e, "getClosestElement", function () {
        return a
    }), e.getRefType = function (t) {
        if (null != t && "object" == (void 0 === t ? "undefined" : o(t))) return t instanceof Element ? r.w : r.A;
        return null
    };
    var r = n(8),
        i = n(80),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
    var a = Element.prototype.closest ? function (t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function (t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[i.a] && n[i.a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    }
}, function (t, e, n) {
    "use strict";
    var r, i = n(227),
        o = n.n(i),
        a = n(15),
        u = n.n(a),
        c = n(246),
        s = n.n(c),
        f = n(82),
        l = n(14),
        d = n(44),
        p = n(43),
        v = n(8),
        h = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        },
        g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

    function m(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    var y, b, w, x = function (t) {
            return function (e) {
                return !("object" !== (void 0 === e ? "undefined" : g(e)) || !t(e)) || e
            }
        },
        _ = x(function (t) {
            return t.element === t.nativeEvent.target
        }),
        O = x(function (t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        I = o()([_, O]),
        j = function (t, e) {
            return e ? t.getState().ixData.events[e] : null
        },
        E = function (t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                c = r.id,
                s = a.config,
                l = s.actionListId,
                d = s.autoStopEventId,
                p = j(n, d);
            return p && Object(f.d)({
                store: n,
                eventId: d,
                eventTarget: i,
                eventStateKey: d + v.h + o.split(v.h)[1],
                actionListId: u()(p, "action.config.actionListId")
            }), Object(f.d)({
                store: n,
                eventId: c,
                eventTarget: i,
                eventStateKey: o,
                actionListId: l
            }), Object(f.b)({
                store: n,
                eventId: c,
                eventTarget: i,
                eventStateKey: o,
                actionListId: l
            }), e
        },
        S = function (t, e) {
            return function (n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        T = {
            handler: S(I, E)
        },
        A = h({}, T, {
            types: [p.a, p.b].join(" ")
        }),
        k = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PREVIEW_LOAD",
            throttle: !0
        }],
        C = {
            types: [{
                target: document,
                types: "scroll wheel",
                throttle: !0
            }]
        },
        M = (y = void 0 !== window.pageXOffset, b = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
            return {
                scrollLeft: y ? window.pageXOffset : b.scrollLeft,
                scrollTop: y ? window.pageYOffset : b.scrollTop,
                stiffScrollTop: s()(y ? window.pageYOffset : b.scrollTop, 0, b.scrollHeight - window.innerHeight),
                scrollWidth: b.scrollWidth,
                scrollHeight: b.scrollHeight,
                clientWidth: b.clientWidth,
                clientHeight: b.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        L = function (t) {
            return function (e, n) {
                var r = -1 !== [p.a, p.b].indexOf(e.nativeEvent.type) ? e.nativeEvent.type === p.a : n.isActive,
                    i = h({}, n, {
                        isActive: r
                    });
                return n && i.isActive === n.isActive ? i : t(e, i) || i
            }
        },
        P = function (t) {
            return function (e, n) {
                var r = {
                    elementHovered: function (t) {
                        var e = t.element,
                            n = t.nativeEvent,
                            r = n.type,
                            i = n.target,
                            o = n.relatedTarget,
                            a = e.contains(i);
                        if ("mouseover" === r && a) return !0;
                        var u = e.contains(o);
                        return !("mouseout" !== r || !a || !u)
                    }(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        N = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = M(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    l = "PX" === c.scrollOffsetUnit,
                    d = o - a,
                    v = Number((i / d).toFixed(2));
                if (n && n.percentTop === v) return n;
                var g = (l ? f : a * (f || 0) / 100) / d,
                    m = void 0,
                    y = void 0,
                    b = 0;
                n && (m = v > n.percentTop, b = (y = n.scrollingDown !== m) ? v : n.anchorTop);
                var w = s === p.t ? v >= b + g : v <= b - g,
                    x = h({}, n, {
                        percentTop: v,
                        inBounds: w,
                        anchorTop: b,
                        scrollingDown: m
                    });
                return n && w && (y || x.inBounds !== n.inBounds) && t(e, x) || x
            }
        },
        D = function (t) {
            return function (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        R = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return h({}, A, {
                handler: S(t ? I : _, L(function (t, e) {
                    return e.isActive ? T.handler(t, e) : e
                }))
            })
        },
        z = function () {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return h({}, A, {
                handler: S(t ? I : _, L(function (t, e) {
                    return e.isActive ? e : T.handler(t, e)
                }))
            })
        },
        V = h({}, C, {
            handler: (w = function (t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === p.x === n ? (E(t), h({}, e, {
                    triggered: !0
                })) : e
            }, function (t, e) {
                var n = h({}, e, {
                    elementVisible: function (t) {
                        var e, n, r = t.element,
                            i = t.event.config,
                            o = M(),
                            a = o.clientWidth,
                            u = o.clientHeight,
                            c = i.scrollOffsetValue,
                            s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
                        return e = r.getBoundingClientRect(), n = {
                            left: 0,
                            top: s,
                            right: a,
                            bottom: u - s
                        }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
                    }(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && w(t, n) || n
            })
        });
    e.a = (m(r = {}, p.z, R()), m(r, p.A, z()), m(r, p.d, R()), m(r, p.c, z()), m(r, p.p, R(!1)), m(r, p.o, z(!1)), m(r, p.B, R()), m(r, p.C, z()), m(r, p.f, {
        types: "ecommerce-cart-open",
        handler: S(I, E)
    }), m(r, p.e, {
        types: "ecommerce-cart-close",
        handler: S(I, E)
    }), m(r, p.h, {
        types: "click",
        handler: S(I, D(function (t, e) {
            var n, r, i, o = e.clickCount;
            r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(j(r, i)) ? 1 === o && E(t) : E(t)
        }))
    }), m(r, p.m, {
        types: "click",
        handler: S(I, D(function (t, e) {
            2 === e.clickCount && E(t)
        }))
    }), m(r, p.i, h({}, T, {
        types: "mousedown"
    })), m(r, p.n, h({}, T, {
        types: "mouseup"
    })), m(r, p.l, {
        types: "mouseover mouseout",
        handler: S(I, P(function (t, e) {
            e.elementHovered && E(t)
        }))
    }), m(r, p.k, {
        types: "mouseover mouseout",
        handler: S(I, P(function (t, e) {
            e.elementHovered || E(t)
        }))
    }), m(r, p.j, {
        types: "mousemove mouseout scroll",
        handler: function (t) {
            var e = t.store,
                n = t.element,
                r = t.eventConfig,
                i = t.nativeEvent,
                o = t.eventStateKey,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                },
                u = r.basedOn,
                c = r.selectedAxis,
                s = r.continuousParameterGroupId,
                f = r.reverse,
                v = r.restingState,
                h = void 0 === v ? 0 : v,
                g = i.clientX,
                m = void 0 === g ? a.clientX : g,
                y = i.clientY,
                b = void 0 === y ? a.clientY : y,
                w = i.pageX,
                x = void 0 === w ? a.pageX : w,
                _ = i.pageY,
                O = void 0 === _ ? a.pageY : _,
                j = "X_AXIS" === c,
                E = "mouseout" === i.type,
                S = h / 100,
                T = s,
                A = !1;
            switch (u) {
                case p.D:
                    S = j ? Math.min(m, window.innerWidth) / window.innerWidth : Math.min(b, window.innerHeight) / window.innerHeight;
                    break;
                case p.q:
                    var k = M(),
                        C = k.scrollLeft,
                        L = k.scrollTop,
                        P = k.scrollWidth,
                        N = k.scrollHeight;
                    S = j ? Math.min(C + x, P) / P : Math.min(L + O, N) / N;
                    break;
                case p.g:
                default:
                    T = Object(l.k)(o, s);
                    var D = 0 === i.type.indexOf("mouse");
                    if (D && !0 !== I({
                            element: n,
                            nativeEvent: i
                        })) break;
                    var R = n.getBoundingClientRect(),
                        z = R.left,
                        V = R.top,
                        F = R.width,
                        B = R.height;
                    if (!D && ! function (t, e) {
                            return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                        }({
                            left: m,
                            top: b
                        }, R)) break;
                    A = !0, S = j ? (m - z) / F : (b - V) / B
            }
            return E && (S > .95 || S < .05) && (S = Math.round(S)), (u !== p.g || A || A !== a.elementHovered) && (S = f ? 1 - S : S, e.dispatch(Object(d.parameterChanged)(T, S))), {
                elementHovered: A,
                clientX: m,
                clientY: b,
                pageX: x,
                pageY: O
            }
        }
    }), m(r, p.s, {
        types: k,
        handler: function (t) {
            var e = t.store,
                n = t.eventConfig,
                r = n.continuousParameterGroupId,
                i = n.reverse,
                o = M(),
                a = o.scrollTop / (o.scrollHeight - o.clientHeight);
            a = i ? 1 - a : a, e.dispatch(Object(d.parameterChanged)(r, a))
        }
    }), m(r, p.w, {
        types: k,
        handler: function (t) {
            var e = t.element,
                n = t.store,
                r = t.eventConfig,
                i = t.eventStateKey,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    scrollPercent: 0
                },
                a = M(),
                u = a.scrollLeft,
                c = a.scrollTop,
                s = a.scrollWidth,
                f = a.scrollHeight,
                v = a.clientHeight,
                h = r.basedOn,
                g = r.selectedAxis,
                m = r.continuousParameterGroupId,
                y = r.startsEntering,
                b = r.startsExiting,
                w = r.addEndOffset,
                x = r.addStartOffset,
                _ = r.addOffsetValue,
                O = void 0 === _ ? 0 : _,
                I = r.endOffsetValue,
                j = void 0 === I ? 0 : I,
                E = "X_AXIS" === g;
            if (h === p.D) {
                var S = E ? u / s : c / f;
                return S !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(m, S)), {
                    scrollPercent: S
                }
            }
            var T = Object(l.k)(i, m),
                A = e.getBoundingClientRect(),
                k = (x ? O : 0) / 100,
                C = (w ? j : 0) / 100;
            k = y ? k : 1 - k, C = b ? C : 1 - C;
            var L = A.top + Math.min(A.height * k, v),
                P = A.top + A.height * C - L,
                N = Math.min(v + P, f),
                D = Math.min(Math.max(0, v - L), N) / N;
            return D !== o.scrollPercent && n.dispatch(Object(d.parameterChanged)(T, D)), {
                scrollPercent: D
            }
        }
    }), m(r, p.x, V), m(r, p.y, V), m(r, p.t, h({}, C, {
        handler: N(function (t, e) {
            e.scrollingDown && E(t)
        })
    })), m(r, p.u, h({}, C, {
        handler: N(function (t, e) {
            e.scrollingDown || E(t)
        })
    })), m(r, p.r, {
        types: "readystatechange IX2_PREVIEW_LOAD",
        handler: S(_, function (t) {
            return function (e, n) {
                var r = {
                    finished: "complete" === document.readyState
                };
                return !r.finished || n && n.finshed || t(e), r
            }
        }(E))
    }), m(r, p.v, {
        types: "readystatechange IX2_PREVIEW_LOAD",
        handler: S(_, function (t) {
            return function (e, n) {
                return n || t(e), {
                    started: !0
                }
            }
        }(E))
    }), r)
}, function (t, e, n) {
    var r = n(228)();
    t.exports = r
}, function (t, e, n) {
    var r = n(45),
        i = n(229),
        o = n(87),
        a = n(88),
        u = n(0),
        c = n(242),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function (t) {
        return i(function (e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !g && "wrapper" == a(h)) var g = new r([], !0)
            }
            for (i = g ? i : n; ++i < n;) {
                h = e[i];
                var m = a(h),
                    y = "wrapper" == m ? o(h) : void 0;
                g = y && c(y[0]) && y[1] == (d | f | l | p) && !y[4].length && 1 == y[9] ? g[a(y[0])].apply(g, y[3]) : 1 == h.length && c(h) ? g[m]() : g.thru(h)
            }
            return function () {
                var t = arguments,
                    r = t[0];
                if (g && 1 == t.length && u(r)) return g.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function (t, e, n) {
    var r = n(230),
        i = n(233),
        o = n(235);
    t.exports = function (t) {
        return o(i(t, void 0, r), t + "")
    }
}, function (t, e, n) {
    var r = n(231);
    t.exports = function (t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function (t, e, n) {
    var r = n(37),
        i = n(232);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function (t, e, n) {
    var r = n(12),
        i = n(23),
        o = n(0),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function (t, e, n) {
    var r = n(234),
        i = Math.max;
    t.exports = function (t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function () {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function (t, e, n) {
    var r = n(236),
        i = n(238)(r);
    t.exports = i
}, function (t, e, n) {
    var r = n(237),
        i = n(84),
        o = n(39),
        a = i ? function (t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function (t, e) {
    t.exports = function (t) {
        return function () {
            return t
        }
    }
}, function (t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function (t) {
        var e = 0,
            o = 0;
        return function () {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function (t, e, n) {
    var r = n(74),
        i = r && new r;
    t.exports = i
}, function (t, e) {
    t.exports = function () {}
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(47),
        i = n(87),
        o = n(88),
        a = n(243);
    t.exports = function (t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function (t, e, n) {
    var r = n(47),
        i = n(45),
        o = n(46),
        a = n(0),
        u = n(5),
        c = n(244),
        s = Object.prototype.hasOwnProperty;

    function f(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
    var r = n(47),
        i = n(45),
        o = n(245);
    t.exports = function (t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function (t, e) {
    t.exports = function (t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function (t, e, n) {
    var r = n(85),
        i = n(41);
    t.exports = function (t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function (t, e, n) {
    var r = n(1);

    function i(t, e, n, r) {
        var i, o, a, u = n.tram,
            c = Array.isArray,
            s = "w-lightbox-",
            f = /(^|\s+)/g,
            l = [];

        function d(t, e) {
            return l = c(t) ? t : [t], o || d.build(), l.length > 1 && (o.items = o.empty, l.forEach(function (t) {
                var e = k("thumbnail"),
                    n = k("item").append(e);
                o.items = o.items.add(n), O(t.thumbnailUrl || t.url, function (t) {
                    t.prop("width") > t.prop("height") ? S(t, "wide") : S(t, "tall"), e.append(S(t, "thumbnail-image"))
                })
            }), o.strip.empty().append(o.items), S(o.content, "group")), u(T(o.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                opacity: 1
            }), S(o.html, "noscroll"), d.show(e || 0)
        }

        function p(t) {
            return function (e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }
        d.build = function () {
            return d.destroy(), (o = {
                html: n(e.documentElement),
                empty: n()
            }).arrowLeft = k("control left inactive"), o.arrowRight = k("control right inactive"), o.close = k("control close"), o.spinner = k("spinner"), o.strip = k("strip"), a = new I(o.spinner, j("hide")), o.content = k("content").append(o.spinner, o.arrowLeft, o.arrowRight, o.close), o.container = k("container").append(o.content, o.strip), o.lightbox = k("backdrop hide").append(o.container), o.strip.on("tap", E("item"), m), o.content.on("swipe", y).on("tap", E("left"), v).on("tap", E("right"), h).on("tap", E("close"), g).on("tap", E("image, caption"), h), o.container.on("tap", E("view"), g).on("dragstart", E("img"), w), o.lightbox.on("keydown", x).on("focusin", b), n(r).append(o.lightbox.prop("tabIndex", 0)), d
        }, d.destroy = function () {
            o && (T(o.html, "noscroll"), o.lightbox.remove(), o = void 0)
        }, d.show = function (t) {
            if (t !== i) {
                var e = l[t];
                if (!e) return d.hide();
                var r, c, s = i;
                return i = t, a.show(), O(e.html && (r = e.width, c = e.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + r + '" height="' + c + '"/>')) || e.url, function (r) {
                    if (t === i) {
                        var c, f, d = k("figure", "figure").append(S(r, "image")),
                            p = k("frame").append(d),
                            v = k("view").append(p);
                        e.html && ((f = (c = n(e.html)).is("iframe")) && c.on("load", h), d.append(S(c, "embed"))), e.caption && d.append(k("caption", "figcaption").text(e.caption)), o.spinner.before(v), f || h()
                    }

                    function h() {
                        var e, n, r, c;
                        if (a.hide(), t === i) {
                            if (A(o.arrowLeft, "inactive", t <= 0), A(o.arrowRight, "inactive", t >= l.length - 1), o.view ? (u(o.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((e = o.view, function () {
                                    e.remove()
                                })), u(v).add("opacity .3s").add("transform .3s").set({
                                    x: t > s ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : v.css("opacity", 1), o.view = v, o.items) {
                                T(o.items, "active");
                                var f = o.items.eq(t);
                                S(f, "active"), n = f.position().left, r = o.strip.scrollLeft(), c = o.strip.width(), (n < r || n > c + r) && u(o.strip).add("scroll-left 500ms").start({
                                    "scroll-left": n
                                })
                            }
                        } else v.remove()
                    }
                }), d
            }
        }, d.hide = function () {
            return u(o.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(_), d
        }, d.prev = function () {
            i > 0 && d.show(i - 1)
        }, d.next = function () {
            i < l.length - 1 && d.show(i + 1)
        };
        var v = p(d.prev),
            h = p(d.next),
            g = p(d.hide),
            m = function (t) {
                var e = n(this).index();
                t.preventDefault(), d.show(e)
            },
            y = function (t, e) {
                t.preventDefault(), "left" === e.direction ? d.next() : "right" === e.direction && d.prev()
            },
            b = function () {
                this.focus()
            };

        function w(t) {
            t.preventDefault()
        }

        function x(t) {
            var e = t.keyCode;
            27 === e ? d.hide() : 37 === e ? d.prev() : 39 === e && d.next()
        }

        function _() {
            o && (o.strip.scrollLeft(0).empty(), T(o.html, "noscroll"), S(o.lightbox, "hide"), o.view && o.view.remove(), T(o.content, "group"), S(o.arrowLeft, "inactive"), S(o.arrowRight, "inactive"), i = o.view = void 0)
        }

        function O(t, e) {
            var n = k("img", "img");
            return n.one("load", function () {
                e(n)
            }), n.attr("src", t), n
        }

        function I(t, e, n) {
            this.$element = t, this.className = e, this.delay = n || 200, this.hide()
        }

        function j(t, e) {
            return t.replace(f, (e ? " ." : " ") + s)
        }

        function E(t) {
            return j(t, !0)
        }

        function S(t, e) {
            return t.addClass(j(e))
        }

        function T(t, e) {
            return t.removeClass(j(e))
        }

        function A(t, e, n) {
            return t.toggleClass(j(e), n)
        }

        function k(t, r) {
            return S(n(e.createElement(r || "div")), t)
        }
        return I.prototype.show = function () {
                var t = this;
                t.timeoutId || (t.timeoutId = setTimeout(function () {
                    t.$element.removeClass(t.className), delete t.timeoutId
                }, t.delay))
            }, I.prototype.hide = function () {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            },
            function () {
                var n = t.navigator.userAgent,
                    r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var i = e.createElement("style");
                    e.head.appendChild(i), t.addEventListener("orientationchange", o, !0), o()
                }

                function o() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    i.textContent = r
                }
            }(), d
    }
    r.define("lightbox", t.exports = function (t) {
        var e, n, o = {},
            a = r.env(),
            u = i(window, document, t, a ? "#lightbox-mountpoint" : "body"),
            c = t(document),
            s = ".w-lightbox";

        function f(t) {
            var e, r, i = t.el.children(".w-json").html();
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function (t) {
                    t.images && (t.images.forEach(function (t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(i), (e = i.group) ? ((r = n[e]) || (r = n[e] = []), t.items = r, i.items.length && (t.index = r.length, r.push.apply(r, i.items))) : t.items = i.items
            } else t.items = []
        }
        return o.ready = o.design = o.preview = function () {
            e = a && r.env("design"), u.destroy(), n = {}, c.find(s).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function () {
                t.each(this, function (n, r) {
                    var i = t.data(r, s);
                    i || (i = t.data(r, s, {
                        el: t(r),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), i.el.off(s), f(i), e ? i.el.on("setting" + s, f.bind(null, i)) : i.el.on("tap" + s, function (t) {
                        return function () {
                            t.items.length && u(t.items, t.index || 0)
                        }
                    }(i)).on("click" + s, function (t) {
                        t.preventDefault()
                    })
                })
            }
        }), o
    })
}, function (t, e, n) {
    var r = n(1);
    r.define("links", t.exports = function (t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /^#[\w:.-]+$/,
            p = /index\.(html|php)$/,
            v = /\/$/;

        function h(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (0 === r.indexOf("#") && d.test(r)) {
                    var u = t(r);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || p.test(r) && v.test(o);
                    m(a, l, c)
                }
            }
        }

        function g() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function (e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, m(r, l, c))
            })
        }

        function m(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function () {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(g), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) h(t[e]);
            i.length && (r.scroll.on(g), g())
        }, a
    })
}, function (t, e, n) {
    var r = n(1);
    r.define("scroll", t.exports = function (t) {
        var e = t(document),
            n = window,
            i = n.location,
            o = function () {
                try {
                    return Boolean(n.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : n.history,
            a = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
            ready: function () {
                var u = i.href.split("#")[0];
                e.on("click", "a", function (e) {
                    if (!(r.env("design") || window.$.mobile && t(e.currentTarget).hasClass("ui-link")))
                        if ("#" !== this.getAttribute("href")) {
                            var c = this.href.split("#"),
                                s = c[0] === u ? c[1] : null;
                            s && function (e, u) {
                                if (a.test(e)) {
                                    var c = t("#" + e);
                                    if (c.length) {
                                        if (u && (u.preventDefault(), u.stopPropagation()), i.hash !== e && o && o.pushState && (!r.env.chrome || "file:" !== i.protocol)) {
                                            var s = o.state && o.state.hash;
                                            s !== e && o.pushState({
                                                hash: e
                                            }, "", "#" + e)
                                        }
                                        var f = r.env("editor") ? ".w-editor-body" : "body",
                                            l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                                            d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                                        n.setTimeout(function () {
                                            ! function (e, r) {
                                                var i = t(n).scrollTop(),
                                                    o = e.offset().top - r;
                                                if ("mid" === e.data("scroll")) {
                                                    var a = t(n).height() - r,
                                                        u = e.outerHeight();
                                                    u < a && (o -= Math.round((a - u) / 2))
                                                }
                                                var c = 1;
                                                t("body").add(e).each(function () {
                                                    var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                    !isNaN(e) && (0 === e || e > 0) && (c = e)
                                                }), Date.now || (Date.now = function () {
                                                    return (new Date).getTime()
                                                });
                                                var s = Date.now(),
                                                    f = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || function (t) {
                                                        n.setTimeout(t, 15)
                                                    },
                                                    l = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * c;
                                                ! function t() {
                                                    var e = Date.now() - s;
                                                    n.scroll(0, function (t, e, n, r) {
                                                        return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                                        var i
                                                    }(i, o, e, l)), e <= l && f(t)
                                                }()
                                            }(c, d)
                                        }, u ? 0 : 300)
                                    }
                                }
                            }(s, e)
                        } else e.preventDefault()
                })
            }
        }
    })
}, function (t, e, n) {
    var r = n(1),
        i = n(24);
    r.define("slider", t.exports = function (t, e) {
        var n, o, a, u, c = {},
            s = t.tram,
            f = t(document),
            l = r.env(),
            d = ".w-slider",
            p = '<div class="w-slider-dot" data-wf-ignore />',
            v = i.triggers;

        function h() {
            (n = f.find(d)).length && (n.filter(":visible").each(y), u = null, a || (g(), r.resize.on(m), r.redraw.on(c.redraw)))
        }

        function g() {
            r.resize.off(m), r.redraw.off(c.redraw)
        }

        function m() {
            n.filter(":visible").each(E)
        }

        function y(e, n) {
            var r = t(n),
                i = t.data(n, d);
            if (i || (i = t.data(n, d, {
                    index: 0,
                    depth: 1,
                    el: r,
                    config: {}
                })), i.mask = r.children(".w-slider-mask"), i.left = r.children(".w-slider-arrow-left"), i.right = r.children(".w-slider-arrow-right"), i.nav = r.children(".w-slider-nav"), i.slides = i.mask.children(".w-slide"), i.slides.each(v.reset), u && (i.maskWidth = 0), !s.support.transform) return i.left.hide(), i.right.hide(), i.nav.hide(), void(a = !0);
            i.el.off(d), i.left.off(d), i.right.off(d), i.nav.off(d), b(i), o ? (i.el.on("setting" + d, I(i)), O(i), i.hasTimer = !1) : (i.el.on("swipe" + d, I(i)), i.left.on("tap" + d, x(i)), i.right.on("tap" + d, _(i)), i.config.autoplay && !i.hasTimer && (i.hasTimer = !0, i.timerCount = 1, function t(e) {
                O(e);
                var n = e.config;
                var r = n.timerMax;
                if (r && e.timerCount++ > r) return;
                e.timerId = window.setTimeout(function () {
                    null == e.timerId || o || (_(e)(), t(e))
                }, n.delay)
            }(i))), i.nav.on("tap" + d, "> div", I(i)), l || i.mask.contents().filter(function () {
                return 3 === this.nodeType
            }).remove(), E(e, n)
        }

        function b(t) {
            var e = {
                crossOver: 0
            };
            e.animation = t.el.attr("data-animation") || "slide", "outin" === e.animation && (e.animation = "cross", e.crossOver = .5), e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, w(t.el.attr("data-infinite")) && (e.infinite = !0), w(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), w(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), w(t.el.attr("data-autoplay"))) {
                e.autoplay = !0, e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3, e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var r = "mousedown" + d + " touchstart" + d;
                o || t.el.off(r).one(r, function () {
                    O(t)
                })
            }
            var i = t.right.width();
            e.edge = i ? i + 40 : 100, t.config = e
        }

        function w(t) {
            return "1" === t || "true" === t
        }

        function x(t) {
            return function () {
                j(t, {
                    index: t.index - 1,
                    vector: -1
                })
            }
        }

        function _(t) {
            return function () {
                j(t, {
                    index: t.index + 1,
                    vector: 1
                })
            }
        }

        function O(t) {
            window.clearTimeout(t.timerId), t.timerId = null
        }

        function I(n) {
            return function (i, a) {
                a = a || {};
                var u = n.config;
                if (o && "setting" === i.type) {
                    if ("prev" === a.select) return x(n)();
                    if ("next" === a.select) return _(n)();
                    if (b(n), S(n), null == a.select) return;
                    ! function (n, r) {
                        var i = null;
                        r === n.slides.length && (h(), S(n)), e.each(n.anchors, function (e, n) {
                            t(e.els).each(function (e, o) {
                                t(o).index() === r && (i = n)
                            })
                        }), null != i && j(n, {
                            index: i,
                            immediate: !0
                        })
                    }(n, a.select)
                } else {
                    if ("swipe" === i.type) {
                        if (u.disableSwipe) return;
                        if (r.env("editor")) return;
                        return "left" === a.direction ? _(n)() : "right" === a.direction ? x(n)() : void 0
                    }
                    n.nav.has(i.target).length && j(n, {
                        index: t(i.target).index()
                    })
                }
            }
        }

        function j(e, n) {
            n = n || {};
            var r = e.config,
                i = e.anchors;
            e.previous = e.index;
            var a = n.index,
                c = {};
            a < 0 ? (a = i.length - 1, r.infinite && (c.x = -e.endX, c.from = 0, c.to = i[0].width)) : a >= i.length && (a = 0, r.infinite && (c.x = i[i.length - 1].width, c.from = -i[i.length - 1].x, c.to = c.from - c.x)), e.index = a;
            var f = e.nav.children().eq(e.index).addClass("w-active");
            e.nav.children().not(f).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var l = e.offsetX || 0,
                d = e.offsetX = -i[e.index].x,
                p = {
                    x: d,
                    opacity: 1,
                    visibility: ""
                },
                h = t(i[e.index].els),
                g = t(i[e.previous] && i[e.previous].els),
                m = e.slides.not(h),
                y = r.animation,
                b = r.easing,
                w = Math.round(r.duration),
                x = n.vector || (e.index > e.previous ? 1 : -1),
                _ = "opacity " + w + "ms " + b,
                O = "transform " + w + "ms " + b;
            if (o || (h.each(v.intro), m.each(v.outro)), n.immediate && !u) return s(h).set(p), void E();
            if (e.index !== e.previous) {
                if ("cross" === y) {
                    var I = Math.round(w - w * r.crossOver),
                        j = Math.round(w - I);
                    return _ = "opacity " + I + "ms " + b, s(g).set({
                        visibility: ""
                    }).add(_).start({
                        opacity: 0
                    }), void s(h).set({
                        visibility: "",
                        x: d,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(_).wait(j).then({
                        opacity: 1
                    }).then(E)
                }
                if ("fade" === y) return s(g).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    x: d,
                    opacity: 0,
                    zIndex: e.depth++
                }).add(_).start({
                    opacity: 1
                }).then(E);
                if ("over" === y) return p = {
                    x: e.endX
                }, s(g).set({
                    visibility: ""
                }).stop(), void s(h).set({
                    visibility: "",
                    zIndex: e.depth++,
                    x: d + i[e.index].width * x
                }).add(O).start({
                    x: d
                }).then(E);
                r.infinite && c.x ? (s(e.slides.not(g)).set({
                    visibility: "",
                    x: c.x
                }).add(O).start({
                    x: d
                }), s(g).set({
                    visibility: "",
                    x: c.from
                }).add(O).start({
                    x: c.to
                }), e.shifted = g) : (r.infinite && e.shifted && (s(e.shifted).set({
                    visibility: "",
                    x: l
                }), e.shifted = null), s(e.slides).set({
                    visibility: ""
                }).add(O).start({
                    x: d
                }))
            }

            function E() {
                h = t(i[e.index].els), m = e.slides.not(h), "slide" !== y && (p.visibility = "hidden"), s(m).set(p)
            }
        }

        function E(e, n) {
            var r = t.data(n, d);
            if (r) return function (t) {
                var e = t.mask.width();
                if (t.maskWidth !== e) return t.maskWidth = e, !0;
                return !1
            }(r) ? S(r) : void(o && function (e) {
                var n = 0;
                if (e.slides.each(function (e, r) {
                        n += t(r).outerWidth(!0)
                    }), e.slidesWidth !== n) return e.slidesWidth = n, !0;
                return !1
            }(r) && S(r))
        }

        function S(e) {
            var n = 1,
                r = 0,
                i = 0,
                a = 0,
                u = e.maskWidth,
                c = u - e.config.edge;
            c < 0 && (c = 0), e.anchors = [{
                els: [],
                x: 0,
                width: 0
            }], e.slides.each(function (o, s) {
                i - r > c && (n++, r += u, e.anchors[n - 1] = {
                    els: [],
                    x: i,
                    width: 0
                }), a = t(s).outerWidth(!0), i += a, e.anchors[n - 1].width += a, e.anchors[n - 1].els.push(s)
            }), e.endX = i, o && (e.pages = null), e.nav.length && e.pages !== n && (e.pages = n, function (e) {
                var n, r = [],
                    i = e.el.attr("data-nav-spacing");
                i && (i = parseFloat(i) + "px");
                for (var o = 0; o < e.pages; o++) n = t(p), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({
                    "margin-left": i,
                    "margin-right": i
                }), r.push(n);
                e.nav.empty().append(r)
            }(e));
            var s = e.index;
            s >= n && (s = n - 1), j(e, {
                immediate: !0,
                index: s
            })
        }
        return c.ready = function () {
            o = r.env("design"), h()
        }, c.design = function () {
            o = !0, h()
        }, c.preview = function () {
            o = !1, h()
        }, c.redraw = function () {
            u = !0, h()
        }, c.destroy = g, c
    })
}, function (t, e, n) {
    var r = n(1),
        i = n(24);
    r.define("tabs", t.exports = function (t) {
        var e, n, o = {},
            a = t.tram,
            u = t(document),
            c = r.env,
            s = c.safari,
            f = c(),
            l = "data-w-tab",
            d = ".w-tabs",
            p = "w--current",
            v = "w--tab-active",
            h = i.triggers,
            g = !1;

        function m() {
            n = f && r.env("design"), (e = u.find(d)).length && (e.each(w), r.env("preview") && !g && e.each(b), y(), r.redraw.on(o.redraw))
        }

        function y() {
            r.redraw.off(o.redraw)
        }

        function b(e, n) {
            var r = t.data(n, d);
            r && (r.links && r.links.each(h.reset), r.panes && r.panes.each(h.reset))
        }

        function w(e, r) {
            var i = t(r),
                o = t.data(r, d);
            if (o || (o = t.data(r, d, {
                    el: i,
                    config: {}
                })), o.current = null, o.menu = i.children(".w-tab-menu"), o.links = o.menu.children(".w-tab-link"), o.content = i.children(".w-tab-content"), o.panes = o.content.children(".w-tab-pane"), o.el.off(d), o.links.off(d), function (t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var r = parseInt(t.el.attr("data-duration-out"), 10);
                    r = e.outro = r == r ? r : 0, e.immediate = !n && !r, t.config = e
                }(o), !n) {
                o.links.on("click" + d, function (t) {
                    return function (e) {
                        var n = e.currentTarget.getAttribute(l);
                        n && x(t, {
                            tab: n
                        })
                    }
                }(o));
                var a = o.links.filter("." + p).attr(l);
                a && x(o, {
                    tab: a,
                    immediate: !0
                })
            }
        }

        function x(e, n) {
            n = n || {};
            var i = e.config,
                o = i.easing,
                u = n.tab;
            if (u !== e.current) {
                e.current = u, e.links.each(function (e, n) {
                    var r = t(n);
                    n.getAttribute(l) === u ? r.addClass(p).each(h.intro) : r.hasClass(p) && r.removeClass(p).each(h.outro)
                });
                var c = [],
                    f = [];
                e.panes.each(function (e, n) {
                    var r = t(n);
                    n.getAttribute(l) === u ? c.push(n) : r.hasClass(v) && f.push(n)
                });
                var d = t(c),
                    m = t(f);
                if (n.immediate || i.immediate) return d.addClass(v).each(h.intro), m.removeClass(v), void(g || r.redraw.up());
                m.length && i.outro ? (m.each(h.outro), a(m).add("opacity " + i.outro + "ms " + o, {
                    fallback: s
                }).start({
                    opacity: 0
                }).then(y)) : y()
            }

            function y() {
                if (m.removeClass(v).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), d.addClass(v).each(h.intro), r.redraw.up(), !i.intro) return a(d).set({
                    opacity: 1
                });
                a(d).set({
                    opacity: 0
                }).redraw().add("opacity " + i.intro + "ms " + o, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
        }
        return o.ready = o.design = o.preview = m, o.redraw = function () {
            g = !0, m(), g = !1
        }, o.destroy = function () {
            (e = u.find(d)).length && (e.each(b), y())
        }, o
    })
}, function (t, e, n) {
    n(1).define("touch", t.exports = function (t) {
        var e = {},
            n = !document.addEventListener,
            r = window.getSelection;

        function i(e, n, r) {
            var i = t.Event(e, {
                originalEvent: n
            });
            t(n.target).trigger(i, r)
        }
        return n && (t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }), e.init = function (e) {
            return n ? null : (e = "string" == typeof e ? t(e).get(0) : e) ? new function (t) {
                var e, n, o, a = !1,
                    u = !1,
                    c = !1,
                    s = Math.min(Math.round(.04 * window.innerWidth), 40);

                function f(t) {
                    var r = t.touches;
                    r && r.length > 1 || (a = !0, u = !1, r ? (c = !0, e = r[0].clientX, n = r[0].clientY) : (e = t.clientX, n = t.clientY), o = e)
                }

                function l(t) {
                    if (a) {
                        if (c && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                        var f = t.touches,
                            l = f ? f[0].clientX : t.clientX,
                            d = f ? f[0].clientY : t.clientY,
                            v = l - o;
                        o = l, Math.abs(v) > s && r && "" === String(r()) && (i("swipe", t, {
                            direction: v > 0 ? "right" : "left"
                        }), p()), (Math.abs(l - e) > 10 || Math.abs(d - n) > 10) && (u = !0)
                    }
                }

                function d(t) {
                    if (a) {
                        if (a = !1, c && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(c = !1);
                        u || i("tap", t)
                    }
                }

                function p() {
                    a = !1
                }
                t.addEventListener("touchstart", f, !1), t.addEventListener("touchmove", l, !1), t.addEventListener("touchend", d, !1), t.addEventListener("touchcancel", p, !1), t.addEventListener("mousedown", f, !1), t.addEventListener("mousemove", l, !1), t.addEventListener("mouseup", d, !1), t.addEventListener("mouseout", p, !1), this.destroy = function () {
                    t.removeEventListener("touchstart", f, !1), t.removeEventListener("touchmove", l, !1), t.removeEventListener("touchend", d, !1), t.removeEventListener("touchcancel", p, !1), t.removeEventListener("mousedown", f, !1), t.removeEventListener("mousemove", l, !1), t.removeEventListener("mouseup", d, !1), t.removeEventListener("mouseout", p, !1), t = null
                }
            }(e) : null
        }, e.instance = e.init(document), e
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
        "slug": "cell-link-hover",
        "name": "Cell Link Hover",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".cta-text-arrow",
                "descend": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 250ms ease 0",
                    "x": "6px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }]
            }]
        }
    },
    {
        "slug": "card-hover",
        "name": "Card Hover",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".card-image",
                "descend": true,
                "loopA": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 6000ms ease 0",
                    "scaleX": 1.27,
                    "scaleY": 1.27,
                    "scaleZ": 1
                }, {
                    "transition": "transform 7000ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 350ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "resource-type-card-hover",
        "name": "Resource Type Card Hover",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".resource-type-icon",
                "descend": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "-3deg",
                    "scaleX": 1.11,
                    "scaleY": 1.11,
                    "scaleZ": 1
                }, {
                    "transition": "transform 400ms ease 0",
                    "scaleX": 0.9,
                    "scaleY": 0.9,
                    "scaleZ": 1,
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg"
                }, {
                    "transition": "transform 600ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": []
            }]
        }
    },
    {
        "slug": "resource-card-hover",
        "name": "Resource Card Hover",
        "value": {
            "style": {},
            "triggers": [{
                "type": "hover",
                "selector": ".resource-card-image",
                "descend": true,
                "loopA": true,
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 9000ms ease 0",
                    "scaleX": 1.15,
                    "scaleY": 1.15,
                    "scaleZ": 1
                }, {
                    "transition": "transform 9000ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }],
                "stepsB": [{
                    "transition": "transform 400ms ease 0",
                    "scaleX": 1,
                    "scaleY": 1,
                    "scaleZ": 1
                }]
            }]
        }
    },
    {
        "slug": "dropdown-interaction",
        "name": "Dropdown Interaction",
        "value": {
            "style": {},
            "triggers": [{
                "type": "dropdown",
                "stepsA": [{
                    "opacity": 0,
                    "x": "0px",
                    "y": "-10px",
                    "z": "0px"
                }, {
                    "opacity": 1,
                    "transition": "transform 350ms ease 0, opacity 350ms ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "transform 50ms ease 0, opacity 50ms ease 0",
                    "x": "0px",
                    "y": "-5px",
                    "z": "0px"
                }]
            }]
        }
    },
    {
        "slug": "menu-trigger",
        "name": "Menu Trigger",
        "value": {
            "style": {},
            "triggers": [{
                "type": "click",
                "selector": ".burger-menu-line-1",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "7px",
                    "z": "0px",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "45deg"
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg"
                }]
            }, {
                "type": "click",
                "selector": ".burger-menu-line-2",
                "stepsA": [{
                    "opacity": 0,
                    "width": "0px",
                    "transition": "opacity 200 ease 0, width 200 ease 0"
                }],
                "stepsB": [{
                    "opacity": 1,
                    "width": "27px",
                    "transition": "opacity 200 ease 0, width 200 ease 0"
                }]
            }, {
                "type": "click",
                "selector": ".burger-menu-line-3",
                "preserve3d": true,
                "stepsA": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "-7px",
                    "z": "0px",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "-45deg"
                }],
                "stepsB": [{
                    "transition": "transform 200 ease 0",
                    "x": "0px",
                    "y": "0px",
                    "z": "0px",
                    "rotateX": "0deg",
                    "rotateY": "0deg",
                    "rotateZ": "0deg"
                }]
            }, {
                "type": "click",
                "selector": ".menu",
                "stepsA": [{
                    "display": "none",
                    "opacity": 0
                }, {
                    "display": "block"
                }, {
                    "opacity": 1,
                    "transition": "opacity 250ms ease 0"
                }],
                "stepsB": [{
                    "opacity": 0,
                    "transition": "opacity 200 ease 0"
                }, {
                    "display": "none"
                }]
            }]
        }
    },
    {
        "slug": "new-interaction",
        "name": "New Interaction",
        "value": {
            "style": {
                "x": "0px",
                "y": "0px",
                "z": "0px"
            },
            "triggers": [{
                "type": "load",
                "stepsA": [],
                "stepsB": []
            }]
        }
    }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5a66e9f3166b686f8705fb"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532661328503
        },
        "e-2": {
            "id": "e-2",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5a66e9f3166b686f8705fb"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1532664864410
        },
        "e-4": {
            "id": "e-4",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5aa17aafe47484133299cf"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532666234273
        },
        "e-5": {
            "id": "e-5",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5aa355a08d6b6e24cb074e"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532700803441
        },
        "e-6": {
            "id": "e-6",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5aa868963e5b174183e392"
            },
            "config": [{
                "continuousParameterGroupId": "a-3-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532707904506
        },
        "e-7": {
            "id": "e-7",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5b4a13e054d27f08db4288"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532709967968
        },
        "e-8": {
            "id": "e-8",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5b4bc48b7032f076aa3f9e"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1532709999075
        },
        "e-9": {
            "id": "e-9",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b703e97681f895a25b5957a"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534082712010
        },
        "e-10": {
            "id": "e-10",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b703e97681f895a25b5957a"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534082712010
        },
        "e-12": {
            "id": "e-12",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70907b9e9b6f9ba13d4247"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534103675694
        },
        "e-13": {
            "id": "e-13",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70907b9e9b6f9ba13d4247"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534103675694
        },
        "e-15": {
            "id": "e-15",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b709d9b4c38190b311989cc"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534107035843
        },
        "e-16": {
            "id": "e-16",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b709d9b4c38190b311989cc"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534107035843
        },
        "e-18": {
            "id": "e-18",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a20d4c38193bf2199117"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534108173431
        },
        "e-19": {
            "id": "e-19",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a20d4c38193bf2199117"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534108173431
        },
        "e-21": {
            "id": "e-21",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a3419e9b6f24593d53de"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534108481684
        },
        "e-22": {
            "id": "e-22",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a3419e9b6f24593d53de"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534108481684
        },
        "e-24": {
            "id": "e-24",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a49e9e9b6ffe253d54f5"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534108830549
        },
        "e-25": {
            "id": "e-25",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70a49e9e9b6ffe253d54f5"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534108830549
        },
        "e-27": {
            "id": "e-27",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70ab704c381984ee199514"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534110577021
        },
        "e-28": {
            "id": "e-28",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70ab704c381984ee199514"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534110577021
        },
        "e-30": {
            "id": "e-30",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70b03c9e9b6f53e63d5b3c"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534111804518
        },
        "e-31": {
            "id": "e-31",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70b03c9e9b6f53e63d5b3c"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534111804518
        },
        "e-33": {
            "id": "e-33",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70b1bae5c31c042fc91af3"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534112186269
        },
        "e-34": {
            "id": "e-34",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70b1bae5c31c042fc91af3"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534112186269
        },
        "e-36": {
            "id": "e-36",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70c5c4e5c31c00ccc923e1"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534117316959
        },
        "e-39": {
            "id": "e-39",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70cb9b681f89f6a3b5e768"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534118811302
        },
        "e-40": {
            "id": "e-40",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70cb9b681f89f6a3b5e768"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534118811302
        },
        "e-42": {
            "id": "e-42",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70d695e5d6e288c4eb52f2"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534121621662
        },
        "e-43": {
            "id": "e-43",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70d695e5d6e288c4eb52f2"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534121621662
        },
        "e-45": {
            "id": "e-45",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70defb4c3819678719af7b"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1534123771745
        },
        "e-46": {
            "id": "e-46",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b70defb4c3819678719af7b"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1534123771745
        },
        "e-48": {
            "id": "e-48",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b5b2a3ae054d26f1ddb1534"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1535034378371
        },
        "e-49": {
            "id": "e-49",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b7ec4ac01bf97ec08df538b"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1535034541073
        },
        "e-50": {
            "id": "e-50",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b7ee0320504024ba936abd0"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1535041586189
        },
        "e-51": {
            "id": "e-51",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b7ee0320504024ba936abd0"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1535041586189
        },
        "e-53": {
            "id": "e-53",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b7ec56a7ac01a047a3b2069"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1535564405664
        },
        "e-54": {
            "id": "e-54",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9890f06b2b9e2c7795ebcc"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536725232544
        },
        "e-55": {
            "id": "e-55",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9890f06b2b9e2c7795ebcc"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536725232544
        },
        "e-57": {
            "id": "e-57",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b992b1825c34fc516c38a02"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536794779473
        },
        "e-58": {
            "id": "e-58",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b99a35545527f82a36a612c"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536795479671
        },
        "e-59": {
            "id": "e-59",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9a93aaa7afff998cce7a07"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536857004003
        },
        "e-60": {
            "id": "e-60",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9a93aaa7afff998cce7a07"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536857004003
        },
        "e-62": {
            "id": "e-62",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9a96a0a6ef60054a1d825c"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536857760708
        },
        "e-63": {
            "id": "e-63",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9a96a0a6ef60054a1d825c"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536857760708
        },
        "e-65": {
            "id": "e-65",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9afbd068ae5b6b747cacbd"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536883664787
        },
        "e-66": {
            "id": "e-66",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9afbd068ae5b6b747cacbd"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536883664787
        },
        "e-68": {
            "id": "e-68",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9afc4a899c1888c2cda6b4"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536883786098
        },
        "e-69": {
            "id": "e-69",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9afc4a899c1888c2cda6b4"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536883786098
        },
        "e-71": {
            "id": "e-71",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9c386fd5ba8a433ac97ab7"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1536964718805
        },
        "e-72": {
            "id": "e-72",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5b9c386fd5ba8a433ac97ab7"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1536964718805
        },
        "e-74": {
            "id": "e-74",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5ba3c1a021ed37b253b21553"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1537458589247
        },
        "e-75": {
            "id": "e-75",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5ba3c629207d8d5cc6e6b58a"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1537459750176
        },
        "e-76": {
            "id": "e-76",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5ba3c629207d8d5cc6e6b58a"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1537459750176
        },
        "e-78": {
            "id": "e-78",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bb4dac0096def56fefaaee2"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1538579135232
        },
        "e-79": {
            "id": "e-79",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bb4dac0096def56fefaaee2"
            },
            "config": {
                "loop": true,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1538579135232
        },
        "e-81": {
            "id": "e-81",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bb76235fb8421ccccc500aa"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1538744885511
        },
        "e-82": {
            "id": "e-82",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bc125eb5a5ed98dd06fb70c"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1539384811880
        },
        "e-85": {
            "id": "e-85",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bb4de855e930673e737c0e6"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540417367189
        },
        "e-86": {
            "id": "e-86",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bd2034530a32902e778acd2"
            },
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540492141133
        },
        "e-98": {
            "id": "e-98",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5bd2034530a32902e778acd2|d3ae42c2-e98e-a1d9-8418-ba5fd828a9e2"
            },
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540571259421
        },
        "e-99": {
            "id": "e-99",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5bd2034530a32902e778acd2|2149d0f9-3551-898a-3d7c-b2a92a5196c8"
            },
            "config": [{
                "continuousParameterGroupId": "a-29-p",
                "smoothing": 56,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540574531412
        },
        "e-100": {
            "id": "e-100",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5bd347674a8b2e8861a7867b"
            },
            "config": [{
                "continuousParameterGroupId": "a-34-p",
                "smoothing": 0,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540592281314
        },
        "e-101": {
            "id": "e-101",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5bd347674a8b2e8861a7867b|12972def-cb32-7356-4020-8b1c2ab14aa5"
            },
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1540593937668
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Menu Bar / Button Color",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-n-8",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".menu-item",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 2,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 0.7,
                            "unit": ""
                        }
                    }, {
                        "id": "a-n-8",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".menu-item",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 11,
                            "gValue": 94,
                            "bValue": 179,
                            "aValue": 0.9
                        }
                    }, {
                        "id": "a-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "fc8014ff",
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-n-7",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 11,
                            "gValue": 94,
                            "bValue": 179,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 6,
                    "actionItems": [{
                        "id": "a-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "c707ed94",
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 11,
                            "gValue": 94,
                            "bValue": 179,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-n-8",
                        "actionTypeId": "STYLE_BORDER",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "c707ed94",
                            "target": {
                                "selector": ".menu-cta-button",
                                "selectorGuids": ["358311d5-94da-53c0-1fce-00d3a5ab5292"]
                            },
                            "rValue": 11,
                            "gValue": 94,
                            "bValue": 179,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1532661332579
        },
        "a-34": {
            "id": "a-34",
            "title": "Menu Bar / Button Color / Dark",
            "continuousParameterGroups": [{
                "id": "a-34-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 2,
                    "actionItems": [{
                        "id": "a-34-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-34-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb7"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4d2c"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-7",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4d37"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-9",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cf8"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-11",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cfa"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-13",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "af9cdf52",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb9"
                            },
                            "rValue": 255,
                            "gValue": 251,
                            "bValue": 247,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-15",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb0"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-34-n-21",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|89d311f7-1df7-c4bd-8725-ca014999d3d0"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 3,
                    "actionItems": [{
                        "id": "a-34-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-34-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb7"
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4d2c"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-8",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4d37"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-10",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cf8"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-12",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cfa"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-14",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb9"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-34-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|1a35cc80-38ed-6a14-79e7-3c3b093d4cb0"
                            },
                            "value": 0.7,
                            "unit": ""
                        }
                    }, {
                        "id": "a-34-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|89d311f7-1df7-c4bd-8725-ca014999d3d0"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1532661332579
        },
        "a-3": {
            "id": "a-3",
            "title": "Menu Bar Change to Dark",
            "continuousParameterGroups": [{
                "id": "a-3-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 1,
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 4,
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".navigation-bar",
                                "selectorGuids": ["97f66cc7-6775-6277-6eea-32ea54183a9e"]
                            },
                            "value": 0.95,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1532661332579
        },
        "a-2": {
            "id": "a-2",
            "title": "Rotating Message Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-2-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b5a66e9f3166b686f8705fb|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-4": {
            "id": "a-4",
            "title": "Rotating Message Animation 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-4-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-4-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b703e97681f895a25b5957a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-5": {
            "id": "a-5",
            "title": "Rotating Message Animation 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-5-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70907b9e9b6f9ba13d4247|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-6": {
            "id": "a-6",
            "title": "Rotating Message Animation 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-6-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b709d9b4c38190b311989cc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-7": {
            "id": "a-7",
            "title": "Rotating Message Animation 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-7-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a20d4c38193bf2199117|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-8": {
            "id": "a-8",
            "title": "Rotating Message Animation 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-8-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a3419e9b6f24593d53de|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-9": {
            "id": "a-9",
            "title": "Rotating Message Animation 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-9-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70a49e9e9b6ffe253d54f5|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-10": {
            "id": "a-10",
            "title": "Rotating Message Animation 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70ab704c381984ee199514|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-11": {
            "id": "a-11",
            "title": "Rotating Message Animation 9",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-11-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b03c9e9b6f53e63d5b3c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-12": {
            "id": "a-12",
            "title": "Rotating Message Animation 10",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-12-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70b1bae5c31c042fc91af3|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-13": {
            "id": "a-13",
            "title": "Rotating Message Animation 11",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-13-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70c5c4e5c31c00ccc923e1|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-14": {
            "id": "a-14",
            "title": "Rotating Message Animation 12",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-14-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-14-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70cb9b681f89f6a3b5e768|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-15": {
            "id": "a-15",
            "title": "Rotating Message Animation 13",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-15-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70d695e5d6e288c4eb52f2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-16": {
            "id": "a-16",
            "title": "Rotating Message Animation 14",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-16-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b70defb4c3819678719af7b|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-17": {
            "id": "a-17",
            "title": "Rotating Message Animation 15",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-17-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-17-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b7ee0320504024ba936abd0|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-18": {
            "id": "a-18",
            "title": "Rotating Message Animation 16",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-18-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-18-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890ddde7fb76e7ae6c798|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-19": {
            "id": "a-19",
            "title": "Rotating Message Animation 17",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-19-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-19-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9890f06b2b9e2c7795ebcc|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-20": {
            "id": "a-20",
            "title": "Rotating Message Animation 18",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-20-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a93aaa7afff998cce7a07|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-21": {
            "id": "a-21",
            "title": "Rotating Message Animation 19",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9a96a0a6ef60054a1d825c|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-22": {
            "id": "a-22",
            "title": "Rotating Message Animation 20",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afbd068ae5b6b747cacbd|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-23": {
            "id": "a-23",
            "title": "Rotating Message Animation 21",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9afc4a899c1888c2cda6b4|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-24": {
            "id": "a-24",
            "title": "Rotating Message Animation 22",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-24-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5b9c386fd5ba8a433ac97ab7|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-25": {
            "id": "a-25",
            "title": "Rotating Message Animation 23",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-25-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-25-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5ba3c629207d8d5cc6e6b58a|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-26": {
            "id": "a-26",
            "title": "Rotating Message Animation 24",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "xValue": 0.8,
                        "yValue": 0.8,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|3d4fb66f-217d-602c-4f4d-436c3ca58ce5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-19",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|aaf73a44-cf34-4908-a600-aa4655d9d58f"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-21",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-23",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-24",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-25",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-26",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-27",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|8d54576f-6b29-aed2-fd83-135c50042d06"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-28",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-29",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-30",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-31",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-32",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-33",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-34",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "xValue": 0.6,
                        "yValue": 0.6,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-35",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "inOutQuint",
                        "duration": 500,
                        "target": {
                            "id": "5bb4dac0096def56fefaaee2|06ed9f2e-dbb3-3551-7af9-fe1396b3c6b4"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1532664867905,
            "useFirstGroupAsInitialState": true
        },
        "a-27": {
            "id": "a-27",
            "title": "app-animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "yValue": 27,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "xValue": 82,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                        },
                        "xValue": 204,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "xValue": -244,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-23",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "globalSwatchId": "488634eb",
                        "target": {
                            "id": "5bd2034530a32902e778acd2|872e1d43-6c8b-7ff5-9f49-a9c616f07ba8"
                        },
                        "rValue": 34,
                        "gValue": 45,
                        "bValue": 56,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-24",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|cb16d68b-92eb-808b-4d1d-ff6fd95c5735"
                        },
                        "rValue": 70,
                        "gValue": 88,
                        "bValue": 107,
                        "aValue": 0.57
                    }
                }, {
                    "id": "a-27-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-19",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-27-n-25",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "globalSwatchId": "2c182c61",
                        "target": {
                            "id": "5bd2034530a32902e778acd2|872e1d43-6c8b-7ff5-9f49-a9c616f07ba8"
                        },
                        "rValue": 70,
                        "gValue": 88,
                        "bValue": 107,
                        "aValue": 0.57
                    }
                }, {
                    "id": "a-27-n-26",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 2000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "globalSwatchId": "488634eb",
                        "target": {
                            "id": "5bd2034530a32902e778acd2|cb16d68b-92eb-808b-4d1d-ff6fd95c5735"
                        },
                        "rValue": 34,
                        "gValue": 45,
                        "bValue": 56,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-21",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 5000,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "yValue": 27,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1540503268638,
            "useFirstGroupAsInitialState": false
        },
        "a-28": {
            "id": "a-28",
            "title": "app-animation-past-1:1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 0,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "yValue": 27,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "xValue": 82,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                        },
                        "xValue": 204,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "xValue": -244,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "globalSwatchId": "488634eb",
                        "target": {
                            "id": "5bd2034530a32902e778acd2|872e1d43-6c8b-7ff5-9f49-a9c616f07ba8"
                        },
                        "rValue": 34,
                        "gValue": 45,
                        "bValue": 56,
                        "aValue": 1
                    }
                }, {
                    "id": "a-28-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|cb16d68b-92eb-808b-4d1d-ff6fd95c5735"
                        },
                        "rValue": 70,
                        "gValue": 88,
                        "bValue": 107,
                        "aValue": 0.57
                    }
                }, {
                    "id": "a-28-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1540503268638,
            "useFirstGroupAsInitialState": false
        },
        "a-29": {
            "id": "a-29",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-29-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 29,
                    "actionItems": [{
                        "id": "a-29-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-29-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-29-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-11",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "globalSwatchId": "2c182c61",
                            "target": {
                                "id": "5bd2034530a32902e778acd2|872e1d43-6c8b-7ff5-9f49-a9c616f07ba8"
                            },
                            "rValue": 70,
                            "gValue": 88,
                            "bValue": 107,
                            "aValue": 0.57
                        }
                    }, {
                        "id": "a-29-n-14",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd2034530a32902e778acd2|cb16d68b-92eb-808b-4d1d-ff6fd95c5735"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-29-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                            },
                            "xValue": 0,
                            "yValue": 28,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 55,
                    "actionItems": [{
                        "id": "a-29-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "xValue": -248,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-29-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                            },
                            "xValue": 83,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|acb9023b-7d93-8982-7164-e6c91be3fa89"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-29-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|8f0538e4-6cd5-162a-8f8f-f32f75643a25"
                            },
                            "xValue": 204,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-12",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "globalSwatchId": "488634eb",
                            "target": {
                                "id": "5bd2034530a32902e778acd2|872e1d43-6c8b-7ff5-9f49-a9c616f07ba8"
                            },
                            "rValue": 34,
                            "gValue": 45,
                            "bValue": 56,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-29-n-13",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "globalSwatchId": "2c182c61",
                            "target": {
                                "id": "5bd2034530a32902e778acd2|cb16d68b-92eb-808b-4d1d-ff6fd95c5735"
                            },
                            "rValue": 70,
                            "gValue": 88,
                            "bValue": 107,
                            "aValue": 0.57
                        }
                    }, {
                        "id": "a-29-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-29-n-18",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "easeInOut",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|938508b4-c66b-ff84-a7c1-5411ea22c5d9"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1540509090540
        },
        "a-30": {
            "id": "a-30",
            "title": "New Mouse Animation",
            "continuousParameterGroups": [{
                "id": "a-30-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-30-n",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "xValue": 10,
                            "yValue": -29,
                            "zValue": -3,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-30-n-2",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|fa323cca-f531-7f32-078d-11e2912fa766"
                            },
                            "xValue": -39,
                            "yValue": -39,
                            "zValue": -16,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }, {
                "id": "a-30-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1540511117392
        },
        "a-31": {
            "id": "a-31",
            "title": "managers",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|a696bd5e-b8f6-6fc9-f9ee-cd93590739e1"
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "5bd2034530a32902e778acd2|a696bd5e-b8f6-6fc9-f9ee-cd93590739e1"
                        },
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1540571221714,
            "useFirstGroupAsInitialState": false
        },
        "a-32": {
            "id": "a-32",
            "title": "Managers Animation",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 17,
                    "actionItems": [{
                        "id": "a-32-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|a696bd5e-b8f6-6fc9-f9ee-cd93590739e1"
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|d47cecc6-1c37-3343-99ae-a118000a48ac"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|bc9d6677-ac92-d1ec-6964-a5b1c518b767"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|f8ff4777-ad3a-1e97-d778-308b89f08cd0"
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|a696bd5e-b8f6-6fc9-f9ee-cd93590739e1"
                            },
                            "xValue": -143,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|d47cecc6-1c37-3343-99ae-a118000a48ac"
                            },
                            "xValue": 83,
                            "yValue": -65,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|bc9d6677-ac92-d1ec-6964-a5b1c518b767"
                            },
                            "xValue": 91,
                            "yValue": 74,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-32-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd2034530a32902e778acd2|f8ff4777-ad3a-1e97-d778-308b89f08cd0"
                            },
                            "xValue": -30,
                            "yValue": 22,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1540571267487
        },
        "a-33": {
            "id": "a-33",
            "title": "Dark Navigation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "cacb892d-0ed3-d1e1-cd85-b388cf9dcfe2"
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1540589126058,
            "useFirstGroupAsInitialState": false
        },
        "a-35": {
            "id": "a-35",
            "title": "Agency Animation",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|ec2ca234-f13f-9806-34a5-71f1cac11fb1"
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "5bd347674a8b2e8861a7867b|ec2ca234-f13f-9806-34a5-71f1cac11fb1"
                            },
                            "yValue": 143,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1540593944766
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});