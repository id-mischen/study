/*
 * Sorry for the compiled code. The original uses AMD and can be
 * found on Github: https://github.com/MathiasPaumgarten/hair
 */


var requirejs, require, define;
(function (global) {
    function isFunction(e) {
        return ostring.call(e) === "[object Function]"
    }

    function isArray(e) {
        return ostring.call(e) === "[object Array]"
    }

    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length; n += 1) if (e[n] && t(e[n], n, e)) break
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1; n -= 1) if (e[n] && t(e[n], n, e)) break
        }
    }

    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }

    function eachProp(e, t) {
        var n;
        for (n in e) if (e.hasOwnProperty(n) && t(e[n], n)) break
    }

    function mixin(e, t, n, r) {
        return t && eachProp(t, function (t, i) {
            if (n || !hasProp(e, i)) r && typeof t != "string" ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
        }), e
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeContextModuleFunc(e, t, n) {
        return function () {
            var r = aps.call(arguments, 0), i;
            return n && isFunction(i = r[r.length - 1]) && (i.__requireJsBuild = !0), r.push(t), e.apply(null, r)
        }
    }

    function addRequireMethods(e, t, n) {
        each([["toUrl"], ["undef"], ["defined", "requireDefined"], ["specified", "requireSpecified"]], function (r) {
            var i = r[1] || r[0];
            e[r[0]] = t ? makeContextModuleFunc(t[i], n) : function () {
                var e = contexts[defContextName];
                return e[i].apply(e, arguments)
            }
        })
    }

    function makeError(e, t, n, r) {
        var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
    }

    function newContext(e) {
        function v(e) {
            var t, n;
            for (t = 0; e[t]; t += 1) {
                n = e[t];
                if (n === ".") e.splice(t, 1), t -= 1; else if (n === "..") {
                    if (t === 1 && (e[2] === ".." || e[0] === "..")) break;
                    t > 0 && (e.splice(t - 1, 2), t -= 2)
                }
            }
        }

        function m(e, t, n) {
            var r, i, s, u, a, f, l, c, h, p, d, m = t && t.split("/"), g = m, y = o.map, b = y && y["*"];
            e && e.charAt(0) === "." && (t ? (o.pkgs[t] ? g = m = [t] : g = m.slice(0, m.length - 1), e = g.concat(e.split("/")), v(e), i = o.pkgs[r = e[0]], e = e.join("/"), i && e === r + "/" + i.main && (e = r)) : e.indexOf("./") === 0 && (e = e.substring(2)));
            if (n && (m || b) && y) {
                u = e.split("/");
                for (a = u.length; a > 0; a -= 1) {
                    l = u.slice(0, a).join("/");
                    if (m) for (f = m.length; f > 0; f -= 1) {
                        s = y[m.slice(0, f).join("/")];
                        if (s) {
                            s = s[l];
                            if (s) {
                                c = s, h = a;
                                break
                            }
                        }
                    }
                    if (c) break;
                    !p && b && b[l] && (p = b[l], d = a)
                }
                !c && p && (c = p, h = d), c && (u.splice(0, h, c), e = u.join("/"))
            }
            return e
        }

        function g(e) {
            isBrowser && each(scripts(), function (t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName) return t.parentNode.removeChild(t), !0
            })
        }

        function y(e) {
            var t = o.paths[e];
            if (t && isArray(t) && t.length > 1) return g(e), t.shift(), r.undef(e), r.require([e]), !0
        }

        function b(e, t, n, i) {
            var s, o, u, a = e ? e.indexOf("!") : -1, f = null, c = t ? t.name : null, d = e, v = !0, g = "";
            return e || (v = !1, e = "_@r" + (h += 1)), a !== -1 && (f = e.substring(0, a), e = e.substring(a + 1, e.length)), f && (f = m(f, c, i), o = l[f]), e && (f ? o && o.normalize ? g = o.normalize(e, function (e) {
                return m(e, c, i)
            }) : g = m(e, c, i) : (g = m(e, c, i), s = r.nameToUrl(g))), u = f && !o && !n ? "_unnormalized" + (p += 1) : "", {
                prefix: f,
                name: g,
                parentMap: t,
                unnormalized: !!u,
                url: s,
                originalName: d,
                isDefine: v,
                id: (f ? f + "!" + g : g) + u
            }
        }

        function w(e) {
            var t = e.id, n = u[t];
            return n || (n = u[t] = new r.Module(e)), n
        }

        function E(e, t, n) {
            var r = e.id, i = u[r];
            hasProp(l, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(l[r]) : w(e).on(t, n)
        }

        function S(e, t) {
            var n = e.requireModules, r = !1;
            t ? t(e) : (each(n, function (t) {
                var n = u[t];
                n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
            }), r || req.onError(e))
        }

        function x() {
            globalDefQueue.length && (apsp.apply(f, [f.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function T(e, t, n) {
            var i = e && e.map, s = makeContextModuleFunc(n || r.require, i, t);
            return addRequireMethods(s, r, i), s.isBrowser = isBrowser, s
        }

        function N(e) {
            delete u[e], each(d, function (t, n) {
                if (t.map.id === e) return d.splice(n, 1), t.defined || (r.waitCount -= 1), !0
            })
        }

        function C(e, t) {
            var n = e.map.id, r = e.depMaps, i;
            if (!e.inited) return;
            return t[n] ? e : (t[n] = !0, each(r, function (e) {
                var r = e.id, s = u[r];
                if (!s) return;
                return !s.inited || !s.enabled ? (i = null, delete t[n], !0) : i = C(s, mixin({}, t))
            }), i)
        }

        function k(e, t, n) {
            var r = e.map.id, s = e.depMaps;
            if (!e.inited || !e.map.isDefine) return;
            return t[r] ? l[r] : (t[r] = e, each(s, function (s) {
                var o = s.id, a = u[o], f;
                if (i[o]) return;
                if (a) {
                    if (!a.inited || !a.enabled) {
                        n[r] = !0;
                        return
                    }
                    f = k(a, t, n), n[o] || e.defineDepById(o, f)
                }
            }), e.check(!0), l[r])
        }

        function L(e) {
            e.check()
        }

        function A() {
            var e, n, i, a, f = o.waitSeconds * 1e3, l = f && r.startTime + f < (new Date).getTime(), c = [], h = !1,
                p = !0;
            if (t) return;
            t = !0, eachProp(u, function (t) {
                e = t.map, n = e.id;
                if (!t.enabled) return;
                if (!t.error) if (!t.inited && l) y(n) ? (a = !0, h = !0) : (c.push(n), g(n)); else if (!t.inited && t.fetched && e.isDefine) {
                    h = !0;
                    if (!e.prefix) return p = !1
                }
            });
            if (l && c.length) return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = r.contextName, S(i);
            p && (each(d, function (e) {
                if (e.defined) return;
                var t = C(e, {}), n = {};
                t && (k(t, n, {}), eachProp(n, L))
            }), eachProp(u, L)), (!l || a) && h && (isBrowser || isWebWorker) && !s && (s = setTimeout(function () {
                s = 0, A()
            }, 50)), t = !1
        }

        function O(e) {
            w(b(e[0], null, !0)).init(e[1], e[2])
        }

        function M(e, t, n, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
        }

        function _(e) {
            var t = e.currentTarget || e.srcElement;
            return M(t, r.onScriptLoad, "load", "onreadystatechange"), M(t, r.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        var t, n, r, i, s, o = {waitSeconds: 7, baseUrl: "./", paths: {}, pkgs: {}, shim: {}}, u = {}, a = {}, f = [],
            l = {}, c = {}, h = 1, p = 1, d = [];
        return i = {
            require: function (e) {
                return T(e)
            }, exports: function (e) {
                e.usingExports = !0;
                if (e.map.isDefine) return e.exports = l[e.map.id] = {}
            }, module: function (e) {
                return e.module = {
                    id: e.map.id, uri: e.map.url, config: function () {
                        return o.config && o.config[e.map.id] || {}
                    }, exports: l[e.map.id]
                }
            }
        }, n = function (e) {
            this.events = a[e.id] || {}, this.map = e, this.shim = o.shim[e.id], this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, n.prototype = {
            init: function (e, t, n, r) {
                r = r || {};
                if (this.inited) return;
                this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function (e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.depMaps.rjsSkipMap = e.rjsSkipMap, this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
            }, defineDepById: function (e, t) {
                var n;
                return each(this.depMaps, function (t, r) {
                    if (t.id === e) return n = r, !0
                }), this.defineDep(n, t)
            }, defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            }, fetch: function () {
                if (this.fetched) return;
                this.fetched = !0, r.startTime = (new Date).getTime();
                var e = this.map;
                if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                T(this, !0)(this.shim.deps || [], bind(this, function () {
                    return e.prefix ? this.callPlugin() : this.load()
                }))
            }, load: function () {
                var e = this.map.url;
                c[e] || (c[e] = !0, r.load(this.map.id, e))
            }, check: function (e) {
                if (!this.enabled || this.enabling) return;
                var t, n, i = this.map.id, s = this.depExports, o = this.exports, a = this.factory;
                if (!this.inited) this.fetch(); else if (this.error) this.emit("error", this.error); else if (!this.defining) {
                    this.defining = !0;
                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(a)) {
                            if (this.events.error) try {
                                o = r.execCb(i, a, s, o)
                            } catch (f) {
                                t = f
                            } else o = r.execCb(i, a, s, o);
                            this.map.isDefine && (n = this.module, n && n.exports !== undefined && n.exports !== this.exports ? o = n.exports : o === undefined && this.usingExports && (o = this.exports));
                            if (t) return t.requireMap = this.map, t.requireModules = [this.map.id], t.requireType = "define", S(this.error = t)
                        } else o = a;
                        this.exports = o, this.map.isDefine && !this.ignore && (l[i] = o, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), delete u[i], this.defined = !0, r.waitCount -= 1, r.waitCount === 0 && (d = [])
                    }
                    this.defining = !1, e || this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                }
            }, callPlugin: function () {
                var e = this.map, t = e.id, n = b(e.prefix, null, !1, !0);
                E(n, "defined", bind(this, function (n) {
                    var i, s, a, f = this.map.name, l = this.map.parentMap ? this.map.parentMap.name : null;
                    if (this.map.unnormalized) {
                        n.normalize && (f = n.normalize(f, function (e) {
                            return m(e, l, !0)
                        }) || ""), s = b(e.prefix + "!" + f, this.map.parentMap, !1, !0), E(s, "defined", bind(this, function (e) {
                            this.init([], function () {
                                return e
                            }, null, {enabled: !0, ignore: !0})
                        })), a = u[s.id], a && (this.events.error && a.on("error", bind(this, function (e) {
                            this.emit("error", e)
                        })), a.enable());
                        return
                    }
                    i = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0})
                    }), i.error = bind(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(u, function (e) {
                            e.map.id.indexOf(t + "_unnormalized") === 0 && N(e.map.id)
                        }), S(e)
                    }), i.fromText = function (e, t) {
                        var n = useInteractive;
                        n && (useInteractive = !1), w(b(e)), req.exec(t), n && (useInteractive = !0), r.completeLoad(e)
                    }, n.load(e.name, T(e.parentMap, !0, function (e, t, n) {
                        return e.rjsSkipMap = !0, r.require(e, t, n)
                    }), i, o)
                })), r.enable(n, this), this.pluginMaps[n.id] = n
            }, enable: function () {
                this.enabled = !0, this.waitPushed || (d.push(this), r.waitCount += 1, this.waitPushed = !0), this.enabling = !0, each(this.depMaps, bind(this, function (e, t) {
                    var n, s, o;
                    if (typeof e == "string") {
                        e = b(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.depMaps.rjsSkipMap), this.depMaps[t] = e, o = i[e.id];
                        if (o) {
                            this.depExports[t] = o(this);
                            return
                        }
                        this.depCount += 1, E(e, "defined", bind(this, function (e) {
                            this.defineDep(t, e), this.check()
                        })), this.errback && E(e, "error", this.errback)
                    }
                    n = e.id, s = u[n], !i[n] && s && !s.enabled && r.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = u[e.id];
                    t && !t.enabled && r.enable(e, this)
                })), this.enabling = !1, this.check()
            }, on: function (e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []), n.push(t)
            }, emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), e === "error" && delete this.events[e]
            }
        }, r = {
            config: o,
            contextName: e,
            registry: u,
            defined: l,
            urlFetched: c,
            waitCount: 0,
            defQueue: f,
            Module: n,
            makeModuleMap: b,
            configure: function (e) {
                e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                var t = o.pkgs, n = o.shim, i = o.paths, s = o.map;
                mixin(o, e, !0), o.paths = mixin(i, e.paths, !0), e.map && (o.map = mixin(s || {}, e.map, !0, !0)), e.shim && (eachProp(e.shim, function (e, t) {
                    isArray(e) && (e = {deps: e}), e.exports && !e.exports.__buildReady && (e.exports = r.makeShimExports(e.exports)), n[t] = e
                }), o.shim = n), e.packages && (each(e.packages, function (e) {
                    var n;
                    e = typeof e == "string" ? {name: e} : e, n = e.location, t[e.name] = {
                        name: e.name,
                        location: n || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), o.pkgs = t), eachProp(u, function (e, t) {
                    !e.inited && !e.map.unnormalized && (e.map = b(t))
                }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                var t;
                return typeof e == "string" ? (t = function () {
                    return getGlobal(e)
                }, t.exports = e, t) : function () {
                    return e.apply(global, arguments)
                }
            },
            requireDefined: function (e, t) {
                return hasProp(l, b(e, t, !1, !0).id)
            },
            requireSpecified: function (e, t) {
                return e = b(e, t, !1, !0).id, hasProp(l, e) || hasProp(u, e)
            },
            require: function (t, n, i, s) {
                var o, u, a, c, h;
                if (typeof t == "string") return isFunction(n) ? S(makeError("requireargs", "Invalid require call"), i) : req.get ? req.get(r, t, n) : (o = t, s = n, a = b(o, s, !1, !0), u = a.id, hasProp(l, u) ? l[u] : S(makeError("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e)));
                i && !isFunction(i) && (s = i, i = undefined), n && !isFunction(n) && (s = n, n = undefined), x();
                while (f.length) {
                    h = f.shift();
                    if (h[0] === null) return S(makeError("mismatch", "Mismatched anonymous define() module: " + h[h.length - 1]));
                    O(h)
                }
                return c = w(b(null, s)), c.init(t, n, i, {enabled: !0}), A(), r.require
            },
            undef: function (e) {
                x();
                var t = b(e, null, !0), n = u[e];
                delete l[e], delete c[t.url], delete a[e], n && (n.events.defined && (a[e] = n.events), N(e))
            },
            enable: function (e, t) {
                var n = u[e.id];
                n && w(e).enable()
            },
            completeLoad: function (e) {
                var t, n, r, i = o.shim[e] || {}, s = i.exports && i.exports.exports;
                x();
                while (f.length) {
                    n = f.shift();
                    if (n[0] === null) {
                        n[0] = e;
                        if (t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    O(n)
                }
                r = u[e];
                if (!t && !l[e] && r && !r.inited) {
                    if (o.enforceDefine && (!s || !getGlobal(s))) {
                        if (y(e)) return;
                        return S(makeError("nodefine", "No define call for " + e, null, [e]))
                    }
                    O([e, i.deps || [], i.exports])
                }
                A()
            },
            toUrl: function (e, t) {
                var n = e.lastIndexOf("."), i = null;
                return n !== -1 && (i = e.substring(n, e.length), e = e.substring(0, n)), r.nameToUrl(m(e, t && t.id, !0), i)
            },
            nameToUrl: function (e, t) {
                var n, r, i, s, u, a, f, l, c;
                if (req.jsExtRegExp.test(e)) l = e + (t || ""); else {
                    n = o.paths, r = o.pkgs, u = e.split("/");
                    for (a = u.length; a > 0; a -= 1) {
                        f = u.slice(0, a).join("/"), i = r[f], c = n[f];
                        if (c) {
                            isArray(c) && (c = c[0]), u.splice(0, a, c);
                            break
                        }
                        if (i) {
                            e === i.name ? s = i.location + "/" + i.main : s = i.location, u.splice(0, a, s);
                            break
                        }
                    }
                    l = u.join("/"), l += t || (/\?/.test(l) ? "" : ".js"), l = (l.charAt(0) === "/" || l.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + l
                }
                return o.urlArgs ? l + ((l.indexOf("?") === -1 ? "?" : "&") + o.urlArgs) : l
            },
            load: function (e, t) {
                req.load(r, e, t)
            },
            execCb: function (e, t, n, r) {
                return t.apply(r, n)
            },
            onScriptLoad: function (e) {
                if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = _(e);
                    r.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = _(e);
                if (!y(t.id)) return S(makeError("scripterror", "Script error", e, [t.id]))
            }
        }
    }

    function getInteractiveScript() {
        return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function (e) {
            if (e.readyState === "interactive") return interactiveScript = e
        }), interactiveScript)
    }

    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = "2.0.5", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty,
        ap = Array.prototype, aps = ap.slice, apsp = ap.splice,
        isBrowser = typeof window != "undefined" && !!navigator && !!document,
        isWebWorker = !isBrowser && typeof importScripts != "undefined",
        readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_", isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]",
        contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if (typeof define != "undefined") return;
    if (typeof requirejs != "undefined") {
        if (isFunction(requirejs)) return;
        cfg = requirejs, requirejs = undefined
    }
    typeof require != "undefined" && !isFunction(require) && (cfg = require, require = undefined), req = requirejs = function (e, t, n, r) {
        var i, s, o = defContextName;
        return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = contexts[o], i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
    }, req.config = function (e) {
        return req(e)
    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
        contexts: contexts,
        newContext: newContext
    }, req({}), addRequireMethods(req), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function (e) {
        throw e
    }, req.load = function (e, t, n) {
        var r = e && e.config || {}, i;
        if (isBrowser) return i = r.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), i.type = r.scriptType || "text/javascript", i.charset = "utf-8", i.async = !0, i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent && !(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0) && !isOpera ? (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
        isWebWorker && (importScripts(n), e.completeLoad(t))
    }, isBrowser && eachReverse(scripts(), function (e) {
        head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
        if (dataMain) return cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript), dataMain = dataMain.replace(jsSuffixRegExp, ""), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0
    }), define = function (e, t, n) {
        var r, i;
        typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = []), !t.length && isFunction(n) && n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, n) {
            t.push(n)
        }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t)), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
    }, define.amd = {jQuery: !0}, req.exec = function (text) {
        return eval(text)
    }, req(cfg)
})(this), define("requireJS", function () {
}), define("suds/oop/Class", [], function () {
    var e = !1, t = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /.*/, n = function () {
    };
    return n.extend = function (n) {
        function o() {
            !e && this.initialize && this.initialize.apply(this, arguments)
        }

        var r = this.prototype;
        e = !0;
        var i = new this;
        e = !1;
        for (var s in n) i[s] = typeof n[s] == "function" && typeof r[s] == "function" && t.test(n[s]) ? function (e, t) {
            return function () {
                var n = this._super;
                this._super = r[e];
                var i = t.apply(this, arguments);
                return this._super = n, i
            }
        }(s, n[s]) : n[s];
        return o.prototype = i, o.prototype.constructor = o, o.extend = arguments.callee, o
    }, n
}), define("suds/events/Dispatcher", ["suds/oop/Class"], function (e) {
    "use strict";
    var t = e.extend({
        listeners: null, initialize: function () {
            this.listeners = []
        }, addListener: function (e, t) {
            this.removeListener(e, t), this.listeners.push({name: e, closure: t})
        }, removeListener: function (e, t) {
            var n, r = 0, i = this.listeners.length;
            for (; r < i; r++) n = this.listeners[r], n.name === e && n.closure === t && (this.listeners.splice(r, 1), r--, i--)
        }, dispatch: function (e, t) {
            var n, r = 0, i = this.listeners.length;
            for (; r < i; r++) {
                n = this.listeners[r];
                if (!n) continue;
                n.name === e && n.closure.call(null, t)
            }
        }, hasListenerFor: function (e) {
            var t, n = 0, r = this.listeners.length;
            for (; n < r; n++) if (this.listeners[n].name === e) return !0;
            return !1
        }, hasListeners: function () {
            return this.listeners.length > 0
        }, removeAllListeners: function () {
            this.listeners = []
        }
    });
    return t
}), define("suds/patches/function.bind", [], function () {
    return typeof Function.prototype.bind != "function" && (Function.prototype.bind = function (e) {
        var t = this;
        return function () {
            t.apply(e, arguments)
        }
    }), !0
}), define("suds/events/Interval", ["suds/events/Dispatcher", "suds/patches/function.bind"], function (e) {
    var t = "FRAME", n = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }(), r = e.extend({
        FRAME: t, initialize: function () {
            this._super(), this.loop()
        }, loop: function () {
            this.dispatch(t), n(this.loop.bind(this))
        }
    }), i = new r;
    return i.FRAME = t, i
}), define("suds/helpers/MouseHelper", ["suds/events/Dispatcher", "suds/events/Interval"], function (e, t) {
    var n = {}, r = new e, i = -1, s = -1;
    n.x = -1, n.y = -1, n.startTracking = function () {
        window.addEventListener("mousemove", o)
    }, n.stopTracking = function () {
        window.removeEventListener("mousemove", o), n.x = -1, n.y = -1
    }, n.addListener = function (e, i) {
        e === n.MOUSE_MOVE && (n.startTracking(), t.addListener(t.FRAME, u)), r.addListener(e, i)
    }, n.removeListener = function (e, i) {
        r.removeListener(e, i);
        var s = !1;
        for (var o = 0; o < dispachter.listeners.length; o++) dispachter.listeners[o].name === n.MOUSE_MOVE && (s = !0);
        s === !1 && (n.stopTracking(), t.removeListener(t.FRAME, u))
    };
    var o = function (e) {
        n.x = e.clientX, n.y = e.clientY
    }, u = function (e) {
        (n.x !== i || n.y !== s) && r.dispatch(n.MOUSE_MOVE), i = n.x, s = n.y
    };
    return n.MOUSE_MOVE = "MouseHelper.MOUSE_MOVE", n
}), define("suds/math/Point", ["suds/oop/Class"], function (e) {
    var t = e.extend({
        x: 0, y: 0, initialize: function (e, t) {
            this.x = e || 0, this.y = t || 0
        }, add: function (e) {
            return this.x += e.x, this.y += e.y, this
        }, subtract: function (e) {
            return this.x -= e.x, this.y -= e.y, this
        }, multiply: function (e) {
            return this.x *= e, this.y *= e, this
        }, divide: function (e) {
            return this.x /= e, this.y /= e, this
        }, clone: function () {
            return new t(this.x, this.y)
        }, length: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }, normalize: function () {
            return this.divide(this.length())
        }, set: function (e) {
            return this.x = e.x, this.y = e.y, this
        }, rotate: function (e) {
            var t = Math.cos(e), n = Math.sin(e), r = this.x * t - this.y * n, i = this.y * t + this.x * n;
            return this.x = r, this.y = i, this
        }, flip: function () {
            return this.x *= -1, this.y *= -1, this
        }
    });
    return t.subtract = function (e, t) {
        return e.clone().subtract(t)
    }, t.add = function (e, t) {
        return e.clone().add(t)
    }, t.distance = function (e, t) {
        var n = e.x - t.x, r = e.y - t.y;
        return Math.sqrt(n * n + r * r)
    }, t.between = function (e, n) {
        return new t(n.x - e.x, n.y - e.y)
    }, t
}), define("suds/math/Bezier", ["suds/oop/Class", "suds/math/Point"], function (e, t) {
    var n = e.extend({
        anchors: null,
        time: 0,
        speed: .1,
        pixels: null,
        x: null,
        y: null,
        pixelBased: !1,
        initialize: function (e, t, n) {
            this.anchors = [], this.pixelBased = typeof t == "undefined" ? !1 : !!t, this.accuracy = typeof n == "undefined" ? 10 : n, this.time = 0, this.speed = e || .1, this.pixels = this.speed
        },
        addAnchor: function (e) {
            this.anchors.push(e);
            if (this.pixelBased) {
                var n = this.time, r = 0, i = this.accuracy, s = 0, o, u;
                for (; r < i; r++) {
                    this.time = r / i, this.calculate();
                    if (r === 0) {
                        o = new t(this.x, this.y);
                        continue
                    }
                    u = o, u = new t(this.x, this.y), s += t.distance(o, u)
                }
                this.time = n, this.speed = Math.min(1, this.pixels / s)
            }
        },
        update: function () {
            this.time += this.speed, this.time > 1 && (this.time = 1), this.calculate()
        },
        calculate: function () {
            var e = this.time, t = this.anchors.length, n = [], r, i;
            for (r = 0; r < t; r++) n[r] = {x: this.anchors[r].x, y: this.anchors[r].y};
            for (i = 1; i < t; ++i) for (r = 0; r < t - i; ++r) n[r].x = (1 - e) * n[r].x + e * n[~~(r + 1)].x, n[r].y = (1 - e) * n[r].y + e * n[~~(r + 1)].y;
            this.x = n[0].x, this.y = n[0].y
        },
        isComplete: function () {
            return this.time >= 1
        },
        setPercent: function (e) {
            this.time = e, this.calculate()
        }
    });
    return n
}), define("suds/ui/Motion", ["suds/oop/Class", "suds/math/Point", "suds/math/Bezier"], function (e, t, n) {
    var r = e.extend({
        pointA: null,
        pointB: null,
        pointC: null,
        pointAB: null,
        pointBC: null,
        speed: .1,
        radius: 10,
        initialize: function (e, t, r) {
            this.radius = e || this.radius, this.speed = t || this.speed, this.accuracy = r || 10, this.bezier = new n(this.speed, !0, this.accuracy), this.pointA = this.getRandomPoint(), this.pointB = this.getRandomPoint(), this.pointC = this.getRandomPoint(), this.pointAB = this.getMiddle(this.pointA, this.pointB), this.pointBC = this.getMiddle(this.pointB, this.pointC), this.bezier.addAnchor(this.pointAB), this.bezier.addAnchor(this.pointB), this.bezier.addAnchor(this.pointBC)
        },
        update: function () {
            if (this.bezier.isComplete()) {
                this.bezier = new n(this.speed, !0, this.accuracy), this.bezier.addAnchor(this.pointBC), this.bezier.addAnchor(this.pointC), this.pointA = this.pointB, this.pointB = this.pointC, this.pointC = this.getRandomPoint(), this.pointAB = this.pointBC, this.pointBC = this.getMiddle(this.pointB, this.pointC), this.bezier.addAnchor(this.pointBC), this.bezier.calculate();
                return
            }
            this.bezier.update()
        },
        getRandomPoint: function () {
            var e = Math.random() * Math.PI * 2;
            return new t(Math.cos(e) * (.1 + Math.random() * .9) * this.radius, Math.sin(e) * (.1 + Math.random() * .9) * this.radius)
        },
        getMiddle: function (e, n) {
            return t.add(e, n).divide(2)
        },
        getX: function () {
            return this.bezier.x
        },
        getY: function () {
            return this.bezier.y
        },
        getPosition: function () {
            return new t(this.bezier.x, this.bezier.y)
        }
    });
    return r
}), define("dat/utils/css", [], function () {
    return {
        load: function (e, t) {
            t = t || document;
            var n = t.createElement("link");
            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n)
        }, inject: function (e, t) {
            t = t || document;
            var n = document.createElement("style");
            n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n)
        }
    }
}), function () {
    var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        r = typeof location != "undefined" && location.href,
        i = r && location.protocol && location.protocol.replace(/\:/, ""), s = r && location.hostname,
        o = r && (location.port || undefined), u = [];
    define("text", [], function () {
        var a, f, l;
        return typeof window != "undefined" && window.navigator && window.document ? f = function (e, t) {
            var n = a.createXhr();
            n.open("GET", e, !0), n.onreadystatechange = function (e) {
                n.readyState === 4 && t(n.responseText)
            }, n.send(null)
        } : typeof process != "undefined" && process.versions && !!process.versions.node ? (l = require.nodeRequire("fs"), f = function (e, t) {
            t(l.readFileSync(e, "utf8"))
        }) : typeof Packages != "undefined" && (f = function (e, t) {
            var n = "utf-8", r = new java.io.File(e), i = java.lang.System.getProperty("line.separator"),
                s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r), n)), o, u,
                a = "";
            try {
                o = new java.lang.StringBuffer, u = s.readLine(), u && u.length() && u.charAt(0) === 65279 && (u = u.substring(1)), o.append(u);
                while ((u = s.readLine()) !== null) o.append(i), o.append(u);
                a = String(o.toString())
            } finally {
                s.close()
            }
            t(a)
        }), a = {
            version: "1.0.0", strip: function (e) {
                if (e) {
                    e = e.replace(t, "");
                    var r = e.match(n);
                    r && (e = r[1])
                } else e = "";
                return e
            }, jsEscape: function (e) {
                return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
            }, createXhr: function () {
                var t, n, r;
                if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                for (n = 0; n < 3; n++) {
                    r = e[n];
                    try {
                        t = new ActiveXObject(r)
                    } catch (i) {
                    }
                    if (t) {
                        e = [r];
                        break
                    }
                }
                if (!t) throw new Error("createXhr(): XMLHttpRequest not available");
                return t
            }, get: f, parseName: function (e) {
                var t = !1, n = e.indexOf("."), r = e.substring(0, n), i = e.substring(n + 1, e.length);
                return n = i.indexOf("!"), n !== -1 && (t = i.substring(n + 1, i.length), t = t === "strip", i = i.substring(0, n)), {
                    moduleName: r,
                    ext: i,
                    strip: t
                }
            }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (e, t, n, r) {
                var i = a.xdRegExp.exec(e), s, o, u;
                return i ? (s = i[2], o = i[3], o = o.split(":"), u = o[1], o = o[0], (!s || s === t) && (!o || o === n) && (!u && !o || u === r)) : !0
            }, finishLoad: function (e, t, n, r, i) {
                n = t ? a.strip(n) : n, i.isBuild && i.inlineText && (u[e] = n), r(n)
            }, load: function (e, t, n, u) {
                var f = a.parseName(e), l = f.moduleName + "." + f.ext, c = t.toUrl(l),
                    h = u && u.text && u.text.useXhr || a.useXhr;
                !r || h(c, i, s, o) ? a.get(c, function (t) {
                    a.finishLoad(e, f.strip, t, n, u)
                }) : t([l], function (e) {
                    a.finishLoad(f.moduleName + "." + f.ext, f.strip, e, n, u)
                })
            }, write: function (e, t, n, r) {
                if (t in u) {
                    var i = a.jsEscape(u[t]);
                    n.asModule(e + "!" + t, "define(function () { return '" + i + "';});\n")
                }
            }, writeFile: function (e, t, n, r, i) {
                var s = a.parseName(t), o = s.moduleName + "." + s.ext, u = n.toUrl(s.moduleName + "." + s.ext) + ".js";
                a.load(o, n, function (t) {
                    var n = function (e) {
                        return r(u, e)
                    };
                    n.asModule = function (e, t) {
                        return r.asModule(e, u, t)
                    }, a.write(e, o, n, i)
                }, i)
            }
        }, a
    })
}(), define("text!dat/gui/saveDialogue.html", [], function () {
    return '<div id="dg-save" class="dg dialogue">\r\n\r\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\r\n\r\n  <textarea id="dg-new-constructor"></textarea>\r\n\r\n  <div id="dg-save-locally">\r\n\r\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\r\n    values to <code>localStorage</code> on exit.\r\n\r\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\r\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\r\n      easier to work incrementally, but <code>localStorage</code> is fragile,\r\n      and your friends may not see the same values you do.\r\n      \r\n    </div>\r\n    \r\n  </div>\r\n\r\n</div>'
}), define("text!dat/gui/style.css", [], function () {
    return "/**\r\n * dat-gui JavaScript Controller Library\r\n * http://code.google.com/p/dat-gui\r\n *\r\n * Copyright 2011 Data Arts Team, Google Creative Lab\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n */\r\n\r\n.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\r\n"
}), define("dat/utils/common", [], function () {
    var e = Array.prototype.forEach, t = Array.prototype.slice;
    return {
        BREAK: {}, extend: function (e) {
            return this.each(t.call(arguments, 1), function (t) {
                for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
            }, this), e
        }, defaults: function (e) {
            return this.each(t.call(arguments, 1), function (t) {
                for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
            }, this), e
        }, compose: function () {
            var e = t.call(arguments);
            return function () {
                var n = t.call(arguments);
                for (var r = e.length - 1; r >= 0; r--) n = [e[r].apply(this, n)];
                return n[0]
            }
        }, each: function (t, n, r) {
            if (e && t.forEach === e) t.forEach(n, r); else if (t.length === t.length + 0) {
                for (var i = 0, s = t.length; i < s; i++) if (i in t && n.call(r, t[i], i) === this.BREAK) return
            } else for (var i in t) if (n.call(r, t[i], i) === this.BREAK) return
        }, defer: function (e) {
            setTimeout(e, 0)
        }, toArray: function (e) {
            return e.toArray ? e.toArray() : t.call(e)
        }, isUndefined: function (e) {
            return e === undefined
        }, isNull: function (e) {
            return e === null
        }, isNaN: function (e) {
            return e !== e
        }, isArray: Array.isArray || function (e) {
            return e.constructor === Array
        }, isObject: function (e) {
            return e === Object(e)
        }, isNumber: function (e) {
            return e === e + 0
        }, isString: function (e) {
            return e === e + ""
        }, isBoolean: function (e) {
            return e === !1 || e === !0
        }, isFunction: function (e) {
            return Object.prototype.toString.call(e) === "[object Function]"
        }
    }
}), define("dat/controllers/Controller", ["dat/utils/common"], function (e) {
    var t = function (e, t) {
        this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = undefined, this.__onFinishChange = undefined
    };
    return e.extend(t.prototype, {
        onChange: function (e) {
            return this.__onChange = e, this
        }, onFinishChange: function (e) {
            return this.__onFinishChange = e, this
        }, setValue: function (e) {
            return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
        }, getValue: function () {
            return this.object[this.property]
        }, updateDisplay: function () {
            return this
        }, isModified: function () {
            return this.initialValue !== this.getValue()
        }
    }), t
}), define("dat/dom/dom", ["dat/utils/common"], function (e) {
    function i(t) {
        if (t === "0" || e.isUndefined(t)) return 0;
        var n = t.match(r);
        return e.isNull(n) ? 0 : parseFloat(n[1])
    }

    var t = {
        HTMLEvents: ["change"],
        MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
        KeyboardEvents: ["keydown"]
    }, n = {};
    e.each(t, function (t, r) {
        e.each(t, function (e) {
            n[e] = r
        })
    });
    var r = /(\d+(\.\d+)?)px/, s = {
        makeSelectable: function (e, t) {
            if (e === undefined || e.style === undefined) return;
            e.onselectstart = t ? function () {
                return !1
            } : function () {
            }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off"
        }, makeFullscreen: function (t, n, r) {
            e.isUndefined(n) && (n = !0), e.isUndefined(r) && (r = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), r && (t.style.top = 0, t.style.bottom = 0)
        }, fakeEvent: function (t, r, i, s) {
            i = i || {};
            var o = n[r];
            if (!o) throw new Error("Event type " + r + " not supported.");
            var u = document.createEvent(o);
            switch (o) {
                case"MouseEvents":
                    var a = i.x || i.clientX || 0, f = i.y || i.clientY || 0;
                    u.initMouseEvent(r, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, a, f, !1, !1, !1, !1, 0, null);
                    break;
                case"KeyboardEvents":
                    var l = u.initKeyboardEvent || u.initKeyEvent;
                    e.defaults(i, {
                        cancelable: !0,
                        ctrlKey: !1,
                        altKey: !1,
                        shiftKey: !1,
                        metaKey: !1,
                        keyCode: undefined,
                        charCode: undefined
                    }), l(r, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                    break;
                default:
                    u.initEvent(r, i.bubbles || !1, i.cancelable || !0)
            }
            e.defaults(u, s), t.dispatchEvent(u)
        }, bind: function (e, t, n, r) {
            return r = r || !1, e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), s
        }, unbind: function (e, t, n, r) {
            return r = r || !1, e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), s
        }, addClass: function (e, t) {
            if (e.className === undefined) e.className = t; else if (e.className !== t) {
                var n = e.className.split(/ +/);
                n.indexOf(t) == -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            return s
        }, removeClass: function (e, t) {
            if (t) {
                if (e.className !== undefined) if (e.className === t) e.removeAttribute("class"); else {
                    var n = e.className.split(/ +/), r = n.indexOf(t);
                    r != -1 && (n.splice(r, 1), e.className = n.join(" "))
                }
            } else e.className = undefined;
            return s
        }, hasClass: function (e, t) {
            return (new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)")).test(e.className) || !1
        }, getWidth: function (e) {
            var t = getComputedStyle(e);
            return i(t["border-left-width"]) + i(t["border-right-width"]) + i(t["padding-left"]) + i(t["padding-right"]) + i(t.width)
        }, getHeight: function (e) {
            var t = getComputedStyle(e);
            return i(t["border-top-width"]) + i(t["border-bottom-width"]) + i(t["padding-top"]) + i(t["padding-bottom"]) + i(t.height)
        }, getOffset: function (e) {
            var t = {left: 0, top: 0};
            if (e.offsetParent) do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
            return t
        }, isActive: function (e) {
            return e === document.activeElement && (e.type || e.href)
        }
    };
    return s
}), define("dat/controllers/OptionController", ["dat/controllers/Controller", "dat/dom/dom", "dat/utils/common"], function (e, t, n) {
    var r = function (e, i, s) {
        r.superclass.call(this, e, i);
        var o = this;
        this.__select = document.createElement("select");
        if (n.isArray(s)) {
            var u = {};
            n.each(s, function (e) {
                u[e] = e
            }), s = u
        }
        n.each(s, function (e, t) {
            var n = document.createElement("option");
            n.innerHTML = t, n.setAttribute("value", e), o.__select.appendChild(n)
        }), this.updateDisplay(), t.bind(this.__select, "change", function () {
            var e = this.options[this.selectedIndex].value;
            o.setValue(e)
        }), this.domElement.appendChild(this.__select)
    };
    return r.superclass = e, n.extend(r.prototype, e.prototype, {
        setValue: function (e) {
            var t = r.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
        }, updateDisplay: function () {
            return this.__select.value = this.getValue(), r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}), define("dat/controllers/NumberController", ["dat/controllers/Controller", "dat/utils/common"], function (e, t) {
    function r(e) {
        return e = e.toString(), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
    }

    var n = function (e, i, s) {
        n.superclass.call(this, e, i), s = s || {}, this.__min = s.min, this.__max = s.max, this.__step = s.step, t.isUndefined(this.__step) ? this.initialValue == 0 ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = r(this.__impliedStep)
    };
    return n.superclass = e, t.extend(n.prototype, e.prototype, {
        setValue: function (e) {
            return this.__min !== undefined && e < this.__min ? e = this.__min : this.__max !== undefined && e > this.__max && (e = this.__max), this.__step !== undefined && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), n.superclass.prototype.setValue.call(this, e)
        }, min: function (e) {
            return this.__min = e, this
        }, max: function (e) {
            return this.__max = e, this
        }, step: function (e) {
            return this.__step = e, this
        }
    }), n
}), define("dat/controllers/NumberControllerBox", ["dat/controllers/NumberController", "dat/dom/dom", "dat/utils/common"], function (e, t, n) {
    function i(e, t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n
    }

    var r = function (e, i, s) {
        function a() {
            var e = parseFloat(o.__input.value);
            n.isNaN(e) || o.setValue(e)
        }

        function f() {
            a(), o.__onFinishChange && o.__onFinishChange.call(o, o.getValue())
        }

        function l(e) {
            t.bind(window, "mousemove", c), t.bind(window, "mouseup", h), u = e.clientY
        }

        function c(e) {
            var t = u - e.clientY;
            o.setValue(o.getValue() + t * o.__impliedStep), u = e.clientY
        }

        function h() {
            t.unbind(window, "mousemove", c), t.unbind(window, "mouseup", h)
        }

        this.__truncationSuspended = !1, r.superclass.call(this, e, i, s);
        var o = this, u;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", a), t.bind(this.__input, "blur", f), t.bind(this.__input, "mousedown", l), t.bind(this.__input, "keydown", function (e) {
            e.keyCode === 13 && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1)
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return r.superclass = e, n.extend(r.prototype, e.prototype, {
        updateDisplay: function () {
            return this.__input.value = this.__truncationSuspended ? this.getValue() : i(this.getValue(), this.__precision), r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}), define("text!dat/controllers/NumberControllerSlider.css", [], function () {
    return "/**\r\n * dat-gui JavaScript Controller Library\r\n * http://code.google.com/p/dat-gui\r\n *\r\n * Copyright 2011 Data Arts Team, Google Creative Lab\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n */\r\n\r\n.slider {\r\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\r\n  height: 1em;\r\n  border-radius: 1em;\r\n  background-color: #eee;\r\n  padding: 0 0.5em;\r\n  overflow: hidden;\r\n}\r\n\r\n.slider-fg {\r\n  padding: 1px 0 2px 0;\r\n  background-color: #aaa;\r\n  height: 1em;\r\n  margin-left: -0.5em;\r\n  padding-right: 0.5em;\r\n  border-radius: 1em 0 0 1em;\r\n}\r\n\r\n.slider-fg:after {\r\n  display: inline-block;\r\n  border-radius: 1em;\r\n  background-color: #fff;\r\n  border:  1px solid #aaa;\r\n  content: '';\r\n  float: right;\r\n  margin-right: -1em;\r\n  margin-top: -1px;\r\n  height: 0.9em;\r\n  width: 0.9em;\r\n}"
}), define("dat/controllers/NumberControllerSlider", ["dat/controllers/NumberController", "dat/dom/dom", "dat/utils/css", "dat/utils/common", "text!dat/controllers/NumberControllerSlider.css"], function (e, t, n, r, i) {
    function o(e, t, n, r, i) {
        return r + (i - r) * ((e - t) / (n - t))
    }

    var s = function (e, n, r, i, u) {
        function f(e) {
            t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), l(e)
        }

        function l(e) {
            e.preventDefault();
            var n = t.getOffset(a.__background), r = t.getWidth(a.__background);
            return a.setValue(o(e.clientX, n.left, n.left + r, a.__min, a.__max)), !1
        }

        function c() {
            t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c), a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
        }

        s.superclass.call(this, e, n, {min: r, max: i, step: u});
        var a = this;
        this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", f), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
    };
    return s.superclass = e, s.useDefaultStyles = function () {
        n.inject(i)
    }, r.extend(s.prototype, e.prototype, {
        updateDisplay: function () {
            var e = (this.getValue() - this.__min) / (this.__max - this.__min);
            return this.__foreground.style.width = e * 100 + "%", s.superclass.prototype.updateDisplay.call(this)
        }
    }), s
}), define("dat/controllers/StringController", ["dat/controllers/Controller", "dat/dom/dom", "dat/utils/common"], function (e, t, n) {
    var r = function (e, n) {
        function s() {
            i.setValue(i.__input.value)
        }

        function o() {
            i.__onFinishChange && i.__onFinishChange.call(i, i.getValue())
        }

        r.superclass.call(this, e, n);
        var i = this;
        this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", s), t.bind(this.__input, "change", s), t.bind(this.__input, "blur", o), t.bind(this.__input, "keydown", function (e) {
            e.keyCode === 13 && this.blur()
        }), this.updateDisplay(), this.domElement.appendChild(this.__input)
    };
    return r.superclass = e, n.extend(r.prototype, e.prototype, {
        updateDisplay: function () {
            return t.isActive(this.__input) || (this.__input.value = this.getValue()), r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}), define("dat/controllers/FunctionController", ["dat/controllers/Controller", "dat/dom/dom", "dat/utils/common"], function (e, t, n) {
    var r = function (e, n, i) {
        r.superclass.call(this, e, n);
        var s = this;
        this.__button = document.createElement("div"), this.__button.innerHTML = i === undefined ? "Fire" : i, t.bind(this.__button, "click", function (e) {
            return e.preventDefault(), s.fire(), !1
        }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
    };
    return r.superclass = e, n.extend(r.prototype, e.prototype, {
        fire: function () {
            this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
        }
    }), r
}), define("dat/controllers/BooleanController", ["dat/controllers/Controller", "dat/dom/dom", "dat/utils/common"], function (e, t, n) {
    var r = function (e, n) {
        function s() {
            i.setValue(!i.__prev)
        }

        r.superclass.call(this, e, n);
        var i = this;
        this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", s, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
    };
    return r.superclass = e, n.extend(r.prototype, e.prototype, {
        setValue: function (e) {
            var t = r.superclass.prototype.setValue.call(this, e);
            return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
        }, updateDisplay: function () {
            return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, r.superclass.prototype.updateDisplay.call(this)
        }
    }), r
}), define("dat/controllers/factory", ["dat/controllers/OptionController", "dat/controllers/NumberControllerBox", "dat/controllers/NumberControllerSlider", "dat/controllers/StringController", "dat/controllers/FunctionController", "dat/controllers/BooleanController", "dat/utils/common"], function (e, t, n, r, i, s, o) {
    return function (u, a) {
        var f = u[a];
        if (o.isArray(arguments[2]) || o.isObject(arguments[2])) return new e(u, a, arguments[2]);
        if (o.isNumber(f)) return o.isNumber(arguments[2]) && o.isNumber(arguments[3]) ? new n(u, a, arguments[2], arguments[3]) : new t(u, a, {
            min: arguments[2],
            max: arguments[3]
        });
        if (o.isString(f)) return new r(u, a);
        if (o.isFunction(f)) return new i(u, a, "");
        if (o.isBoolean(f)) return new s(u, a)
    }
}), define("dat/color/toString", ["dat/utils/common"], function (e) {
    return function (t) {
        if (t.a == 1 || e.isUndefined(t.a)) {
            var n = t.hex.toString(16);
            while (n.length < 6) n = "0" + n;
            return "#" + n
        }
        return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
    }
}), define("dat/color/interpret", ["dat/color/toString", "dat/utils/common"], function (e, t) {
    var n, r, i = function () {
        r = !1;
        var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
        return t.each(s, function (i) {
            if (i.litmus(e)) return t.each(i.conversions, function (i, s) {
                n = i.read(e);
                if (r === !1 && n !== !1) return r = n, n.conversionName = s, n.conversion = i, t.BREAK
            }), t.BREAK
        }), r
    }, s = [{
        litmus: t.isString, conversions: {
            THREE_CHAR_HEX: {
                read: function (e) {
                    var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                    return t === null ? !1 : {
                        space: "HEX",
                        hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                    }
                }, write: e
            }, SIX_CHAR_HEX: {
                read: function (e) {
                    var t = e.match(/^#([A-F0-9]{6})$/i);
                    return t === null ? !1 : {space: "HEX", hex: parseInt("0x" + t[1].toString())}
                }, write: e
            }, CSS_RGB: {
                read: function (e) {
                    var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                    return t === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3])
                    }
                }, write: e
            }, CSS_RGBA: {
                read: function (e) {
                    var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                    return t === null ? !1 : {
                        space: "RGB",
                        r: parseFloat(t[1]),
                        g: parseFloat(t[2]),
                        b: parseFloat(t[3]),
                        a: parseFloat(t[4])
                    }
                }, write: e
            }
        }
    }, {
        litmus: t.isNumber, conversions: {
            HEX: {
                read: function (e) {
                    return {space: "HEX", hex: e, conversionName: "HEX"}
                }, write: function (e) {
                    return e.hex
                }
            }
        }
    }, {
        litmus: t.isArray, conversions: {
            RGB_ARRAY: {
                read: function (e) {
                    return e.length != 3 ? !1 : {space: "RGB", r: e[0], g: e[1], b: e[2]}
                }, write: function (e) {
                    return [e.r, e.g, e.b]
                }
            }, RGBA_ARRAY: {
                read: function (e) {
                    return e.length != 4 ? !1 : {space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3]}
                }, write: function (e) {
                    return [e.r, e.g, e.b, e.a]
                }
            }
        }
    }, {
        litmus: t.isObject, conversions: {
            RGBA_OBJ: {
                read: function (e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b,
                        a: e.a
                    } : !1
                }, write: function (e) {
                    return {r: e.r, g: e.g, b: e.b, a: e.a}
                }
            }, RGB_OBJ: {
                read: function (e) {
                    return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                        space: "RGB",
                        r: e.r,
                        g: e.g,
                        b: e.b
                    } : !1
                }, write: function (e) {
                    return {r: e.r, g: e.g, b: e.b}
                }
            }, HSVA_OBJ: {
                read: function (e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v,
                        a: e.a
                    } : !1
                }, write: function (e) {
                    return {h: e.h, s: e.s, v: e.v, a: e.a}
                }
            }, HSV_OBJ: {
                read: function (e) {
                    return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                        space: "HSV",
                        h: e.h,
                        s: e.s,
                        v: e.v
                    } : !1
                }, write: function (e) {
                    return {h: e.h, s: e.s, v: e.v}
                }
            }
        }
    }];
    return i
}), define("dat/color/math", [], function () {
    var e;
    return {
        hsv_to_rgb: function (e, t, n) {
            var r = Math.floor(e / 60) % 6, i = e / 60 - Math.floor(e / 60), s = n * (1 - t), o = n * (1 - i * t),
                u = n * (1 - (1 - i) * t), a = [[n, u, s], [o, n, s], [s, n, u], [s, o, n], [u, s, n], [n, s, o]][r];
            return {r: a[0] * 255, g: a[1] * 255, b: a[2] * 255}
        }, rgb_to_hsv: function (e, t, n) {
            var r = Math.min(e, t, n), i = Math.max(e, t, n), s = i - r, o, u;
            return i == 0 ? {
                h: NaN,
                s: 0,
                v: 0
            } : (u = s / i, e == i ? o = (t - n) / s : t == i ? o = 2 + (n - e) / s : o = 4 + (e - t) / s, o /= 6, o < 0 && (o += 1), {
                h: o * 360,
                s: u,
                v: i / 255
            })
        }, rgb_to_hex: function (e, t, n) {
            var r = this.hex_with_component(0, 2, e);
            return r = this.hex_with_component(r, 1, t), r = this.hex_with_component(r, 0, n), r
        }, component_from_hex: function (e, t) {
            return e >> t * 8 & 255
        }, hex_with_component: function (t, n, r) {
            return r << (e = n * 8) | t & ~(255 << e)
        }
    }
}), define("dat/color/Color", ["dat/color/interpret", "dat/color/math", "dat/color/toString", "dat/utils/common"], function (e, t, n, r) {
    function s(e, t, n) {
        Object.defineProperty(e, t, {
            get: function () {
                return this.__state.space === "RGB" ? this.__state[t] : (u(this, t, n), this.__state[t])
            }, set: function (e) {
                this.__state.space !== "RGB" && (u(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
            }
        })
    }

    function o(e, t) {
        Object.defineProperty(e, t, {
            get: function () {
                return this.__state.space === "HSV" ? this.__state[t] : (a(this), this.__state[t])
            }, set: function (e) {
                this.__state.space !== "HSV" && (a(this), this.__state.space = "HSV"), this.__state[t] = e
            }
        })
    }

    function u(e, n, i) {
        if (e.__state.space === "HEX") e.__state[n] = t.component_from_hex(e.__state.hex, i); else {
            if (e.__state.space !== "HSV") throw"Corrupted color state";
            r.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
        }
    }

    function a(e) {
        var n = t.rgb_to_hsv(e.r, e.g, e.b);
        r.extend(e.__state, {
            s: n.s,
            v: n.v
        }), r.isNaN(n.h) ? r.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
    }

    var i = function () {
        this.__state = e.apply(this, arguments);
        if (this.__state === !1) throw"Failed to interpret color arguments";
        this.__state.a = this.__state.a || 1
    };
    return i.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(i.prototype, {
        toString: function () {
            return n(this)
        }, toOriginal: function () {
            return this.__state.conversion.write(this)
        }
    }), s(i.prototype, "r", 2), s(i.prototype, "g", 1), s(i.prototype, "b", 0), o(i.prototype, "h"), o(i.prototype, "s"), o(i.prototype, "v"), Object.defineProperty(i.prototype, "a", {
        get: function () {
            return this.__state.a
        }, set: function (e) {
            this.__state.a = e
        }
    }), Object.defineProperty(i.prototype, "hex", {
        get: function () {
            return !this.__state.space !== "HEX" && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
        }, set: function (e) {
            this.__state.space = "HEX", this.__state.hex = e
        }
    }), i
}), define("dat/controllers/ColorController", ["dat/controllers/Controller", "dat/dom/dom", "dat/color/Color", "dat/color/interpret", "dat/utils/common"], function (e, t, n, r, i) {
    function u(e, t, n, r) {
        e.style.background = "", i.each(o, function (i) {
            e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + r + " 100%); "
        })
    }

    function a(e) {
        e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
    }

    var s = function (e, o) {
        function c(e) {
            v(e), t.bind(window, "mousemove", v), t.bind(window, "mouseup", h)
        }

        function h() {
            t.unbind(window, "mousemove", v), t.unbind(window, "mouseup", h)
        }

        function p() {
            var e = r(this.value);
            e !== !1 ? (f.__color.__state = e, f.setValue(f.__color.toOriginal())) : this.value = f.__color.toString()
        }

        function d() {
            t.unbind(window, "mousemove", m), t.unbind(window, "mouseup", d)
        }

        function v(e) {
            e.preventDefault();
            var n = t.getWidth(f.__saturation_field), r = t.getOffset(f.__saturation_field),
                i = (e.clientX - r.left + document.body.scrollLeft) / n,
                s = 1 - (e.clientY - r.top + document.body.scrollTop) / n;
            return s > 1 ? s = 1 : s < 0 && (s = 0), i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.v = s, f.__color.s = i, f.setValue(f.__color.toOriginal()), !1
        }

        function m(e) {
            e.preventDefault();
            var n = t.getHeight(f.__hue_field), r = t.getOffset(f.__hue_field),
                i = 1 - (e.clientY - r.top + document.body.scrollTop) / n;
            return i > 1 ? i = 1 : i < 0 && (i = 0), f.__color.h = i * 360, f.setValue(f.__color.toOriginal()), !1
        }

        s.superclass.call(this, e, o), this.__color = new n(this.getValue()), this.__temp = new n(0);
        var f = this;
        this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function (e) {
            e.keyCode === 13 && p.call(this)
        }), t.bind(this.__input, "blur", p), t.bind(this.__selector, "mousedown", function (e) {
            t.addClass(this, "drag").bind(window, "mouseup", function (e) {
                t.removeClass(f.__selector, "drag")
            })
        });
        var l = document.createElement("div");
        i.extend(this.__selector.style, {
            width: "122px",
            height: "102px",
            padding: "3px",
            backgroundColor: "#222",
            boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
        }), i.extend(this.__field_knob.style, {
            position: "absolute",
            width: "12px",
            height: "12px",
            border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
            boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
            borderRadius: "12px",
            zIndex: 1
        }), i.extend(this.__hue_knob.style, {
            position: "absolute",
            width: "15px",
            height: "2px",
            borderRight: "4px solid #fff",
            zIndex: 1
        }), i.extend(this.__saturation_field.style, {
            width: "100px",
            height: "100px",
            border: "1px solid #555",
            marginRight: "3px",
            display: "inline-block",
            cursor: "pointer"
        }), i.extend(l.style, {
            width: "100%",
            height: "100%",
            background: "none"
        }), u(l, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
            width: "15px",
            height: "100px",
            display: "inline-block",
            border: "1px solid #555",
            cursor: "ns-resize"
        }), a(this.__hue_field), i.extend(this.__input.style, {
            outline: "none",
            textAlign: "center",
            color: "#fff",
            border: 0,
            fontWeight: "bold",
            textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
        }), t.bind(this.__saturation_field, "mousedown", c), t.bind(this.__field_knob, "mousedown", c), t.bind(this.__hue_field, "mousedown", function (e) {
            m(e), t.bind(window, "mousemove", m), t.bind(window, "mouseup", d)
        }), this.__saturation_field.appendChild(l), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
    };
    s.superclass = e, i.extend(s.prototype, e.prototype, {
        updateDisplay: function () {
            var e = r(this.getValue());
            if (e !== !1) {
                var t = !1;
                i.each(n.COMPONENTS, function (n) {
                    if (!i.isUndefined(e[n]) && !i.isUndefined(this.__color.__state[n]) && e[n] !== this.__color.__state[n]) return t = !0, {}
                }, this), t && i.extend(this.__color.__state, e)
            }
            i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
            var s = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, o = 255 - s;
            i.extend(this.__field_knob.style, {
                marginLeft: 100 * this.__color.s - 7 + "px",
                marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                backgroundColor: this.__temp.toString(),
                border: this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")"
            }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, u(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
                backgroundColor: this.__input.value = this.__color.toString(),
                color: "rgb(" + s + "," + s + "," + s + ")",
                textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)"
            })
        }
    });
    var o = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return s
}), define("dat/utils/requestAnimationFrame", [], function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
        window.setTimeout(e, 1e3 / 60)
    }
}), define("dat/dom/CenteredDiv", ["dat/dom/dom", "dat/utils/common"], function (e, t) {
    function r(e) {
        console.log(e)
    }

    var n = function () {
        this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, {
            backgroundColor: "rgba(0,0,0,0.8)",
            top: 0,
            left: 0,
            display: "none",
            zIndex: "1000",
            opacity: 0,
            WebkitTransition: "opacity 0.2s linear"
        }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, {
            position: "fixed",
            display: "none",
            zIndex: "1001",
            opacity: 0,
            WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
        }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
        var n = this;
        e.bind(this.backgroundElement, "click", function () {
            n.hide()
        })
    };
    return n.prototype.show = function () {
        var e = this;
        this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function () {
            e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
        })
    }, n.prototype.hide = function () {
        var t = this, n = function () {
            t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n)
        };
        e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
    }, n.prototype.layout = function () {
        this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
    }, n
}), define("dat/gui/GUI", ["dat/utils/css", "text!dat/gui/saveDialogue.html", "text!dat/gui/style.css", "dat/controllers/factory", "dat/controllers/Controller", "dat/controllers/BooleanController", "dat/controllers/FunctionController", "dat/controllers/NumberControllerBox", "dat/controllers/NumberControllerSlider", "dat/controllers/OptionController", "dat/controllers/ColorController", "dat/utils/requestAnimationFrame", "dat/dom/CenteredDiv", "dat/dom/dom", "dat/utils/common"], function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    function C(e, t, n, s) {
        if (t[n] === undefined) throw new Error("Object " + t + ' has no property "' + n + '"');
        var o;
        if (s.color) o = new l(t, n); else {
            var u = [t, n].concat(s.factoryArgs);
            o = r.apply(e, u)
        }
        s.before instanceof i && (s.before = s.before.__li), A(e, o), p.addClass(o.domElement, "c");
        var a = document.createElement("span");
        p.addClass(a, "property-name"), a.innerHTML = o.property;
        var f = document.createElement("div");
        f.appendChild(a), f.appendChild(o.domElement);
        var c = k(e, f, s.before);
        return p.addClass(c, N.CLASS_CONTROLLER_ROW), p.addClass(c, typeof o.getValue()), L(e, c, o), e.__controllers.push(o), o
    }

    function k(e, t, n) {
        var r = document.createElement("li");
        return t && r.appendChild(t), n ? e.__ul.insertBefore(r, params.before) : e.__ul.appendChild(r), e.onResize(), r
    }

    function L(e, t, n) {
        n.__li = t, n.__gui = e, d.extend(n, {
            options: function (t) {
                if (arguments.length > 1) return n.remove(), C(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [d.toArray(arguments)]
                });
                if (d.isArray(t) || d.isObject(t)) return n.remove(), C(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [t]
                })
            }, name: function (e) {
                return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
            }, listen: function () {
                return n.__gui.listen(n), n
            }, remove: function () {
                return n.__gui.remove(n), n
            }
        });
        if (n instanceof a) {
            var r = new u(n.object, n.property, {min: n.__min, max: n.__max, step: n.__step});
            d.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
                var t = n[e], i = r[e];
                n[e] = r[e] = function () {
                    var e = Array.prototype.slice.call(arguments);
                    return t.apply(n, e), i.apply(r, e)
                }
            }), p.addClass(t, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild)
        } else if (n instanceof u) {
            var i = function (t) {
                return d.isNumber(n.__min) && d.isNumber(n.__max) ? (n.remove(), C(e, n.object, n.property, {
                    before: n.__li.nextElementSibling,
                    factoryArgs: [n.__min, n.__max, n.__step]
                })) : t
            };
            n.min = d.compose(i, n.min), n.max = d.compose(i, n.max)
        } else n instanceof s ? (p.bind(t, "click", function () {
            p.fakeEvent(n.__checkbox, "click")
        }), p.bind(n.__checkbox, "click", function (e) {
            e.stopPropagation()
        })) : n instanceof o ? (p.bind(t, "click", function () {
            p.fakeEvent(n.__button, "click")
        }), p.bind(t, "mouseover", function () {
            p.addClass(n.__button, "hover")
        }), p.bind(t, "mouseout", function () {
            p.removeClass(n.__button, "hover")
        })) : n instanceof l && (p.addClass(t, "color"), n.updateDisplay = d.compose(function (e) {
            return t.style.borderLeftColor = n.__color.toString(), e
        }, n.updateDisplay), n.updateDisplay());
        n.setValue = d.compose(function (t) {
            return e.getRoot().__preset_select && n.isModified() && j(e.getRoot(), !0), t
        }, n.setValue)
    }

    function A(e, t) {
        var n = e.getRoot(), r = n.__rememberedObjects.indexOf(t.object);
        if (r != -1) {
            var i = n.__rememberedObjectIndecesToControllers[r];
            i === undefined && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[t.property] = t;
            if (n.load && n.load.remembered) {
                var s = n.load.remembered, o;
                if (s[e.preset]) o = s[e.preset]; else {
                    if (!s[y]) return;
                    o = s[y]
                }
                if (o[r] && o[r][t.property] !== undefined) {
                    var u = o[r][t.property];
                    t.initialValue = u, t.setValue(u)
                }
            }
        }
    }

    function O(e, t) {
        return document.location.href + "." + t
    }

    function M(e) {
        var t = e.__save_row = document.createElement("li");
        p.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), p.addClass(t, "save-row");
        var n = document.createElement("span");
        n.innerHTML = "&nbsp;", p.addClass(n, "button gears");
        var r = document.createElement("span");
        r.innerHTML = "Save", p.addClass(r, "button"), p.addClass(r, "save");
        var i = document.createElement("span");
        i.innerHTML = "New", p.addClass(i, "button"), p.addClass(i, "save-as");
        var s = document.createElement("span");
        s.innerHTML = "Revert", p.addClass(s, "button"), p.addClass(s, "revert");
        var o = e.__preset_select = document.createElement("select");
        e.load && e.load.remembered ? d.each(e.load.remembered, function (t, n) {
            H(e, n, n == e.preset)
        }) : H(e, y, !1), p.bind(o, "change", function () {
            for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
            e.preset = this.value
        }), t.appendChild(o), t.appendChild(n), t.appendChild(r), t.appendChild(i), t.appendChild(s);
        if (b) {
            var u = document.getElementById("dg-save-locally"), a = document.getElementById("dg-local-explain");
            u.style.display = "block";
            var f = document.getElementById("dg-local-storage");
            localStorage.getItem(O(e, "isLocal")) === "true" && f.setAttribute("checked", "checked");

            function l() {
                a.style.display = e.useLocalStorage ? "block" : "none"
            }

            l(), p.bind(f, "change", function () {
                e.useLocalStorage = !e.useLocalStorage, l()
            })
        }
        var c = document.getElementById("dg-new-constructor");
        p.bind(c, "keydown", function (e) {
            e.metaKey && (e.which === 67 || e.keyCode == 67) && w.hide()
        }), p.bind(n, "click", function () {
            c.innerHTML = JSON.stringify(e.getSaveObject(), undefined, 2), w.show(), c.focus(), c.select()
        }), p.bind(r, "click", function () {
            e.save()
        }), p.bind(i, "click", function () {
            var t = prompt("Enter a new preset name.");
            t && e.saveAs(t)
        }), p.bind(s, "click", function () {
            e.revert()
        })
    }

    function _(e) {
        function n(n) {
            return n.preventDefault(), t = n.clientX, p.addClass(e.__closeButton, N.CLASS_DRAG), p.bind(window, "mousemove", r), p.bind(window, "mouseup", i), !1
        }

        function r(n) {
            return n.preventDefault(), e.width += t - n.clientX, e.onResize(), t = n.clientX, !1
        }

        function i() {
            p.removeClass(e.__closeButton, N.CLASS_DRAG), p.unbind(window, "mousemove", r), p.unbind(window, "mouseup", i)
        }

        e.__resize_handle = document.createElement("div"), d.extend(e.__resize_handle.style, {
            width: "6px",
            marginLeft: "-3px",
            height: "200px",
            cursor: "ew-resize",
            position: "absolute"
        });
        var t;
        p.bind(e.__resize_handle, "mousedown", n), p.bind(e.__closeButton, "mousedown", n), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
    }

    function D(e, t) {
        e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
    }

    function P(e, t) {
        var n = {};
        return d.each(e.__rememberedObjects, function (r, i) {
            var s = {}, o = e.__rememberedObjectIndecesToControllers[i];
            d.each(o, function (e, n) {
                s[n] = t ? e.initialValue : e.getValue()
            }), n[i] = s
        }), n
    }

    function H(e, t, n) {
        var r = document.createElement("option");
        r.innerHTML = t, r.value = t, e.__preset_select.appendChild(r), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
    }

    function B(e) {
        for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t)
    }

    function j(e, t) {
        var n = e.__preset_select[e.__preset_select.selectedIndex];
        t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
    }

    function F(e) {
        e.length != 0 && c(function () {
            F(e)
        }), d.each(e, function (e) {
            e.updateDisplay()
        })
    }

    e.inject(n);
    var v = "dg", m = 72, g = 20, y = "Default", b = function () {
        try {
            return "localStorage" in window && window.localStorage !== null
        } catch (e) {
            return !1
        }
    }(), w, E = !0, S, x = !1, T = [], N = function (e) {
        function u() {
            localStorage.setItem(O(t, "gui"), JSON.stringify(t.getSaveObject()))
        }

        function f() {
            var e = t.getRoot();
            e.width += 1, d.defer(function () {
                e.width -= 1
            })
        }

        var t = this;
        this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), p.addClass(this.domElement, v), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = d.defaults(e, {
            autoPlace: !0,
            width: N.DEFAULT_WIDTH
        }), e = d.defaults(e, {
            resizable: e.autoPlace,
            hideable: e.autoPlace
        }), d.isUndefined(e.load) ? e.load = {preset: y} : e.preset && (e.load.preset = e.preset), d.isUndefined(e.parent) && e.hideable && T.push(this), e.resizable = d.isUndefined(e.parent) && e.resizable, e.autoPlace && d.isUndefined(e.scrollable) && (e.scrollable = !0);
        var n = b && localStorage.getItem(O(this, "isLocal")) === "true";
        Object.defineProperties(this, {
            parent: {
                get: function () {
                    return e.parent
                }
            }, scrollable: {
                get: function () {
                    return e.scrollable
                }
            }, autoPlace: {
                get: function () {
                    return e.autoPlace
                }
            }, preset: {
                get: function () {
                    return t.parent ? t.getRoot().preset : e.load.preset
                }, set: function (n) {
                    t.parent ? t.getRoot().preset = n : e.load.preset = n, B(this), t.revert()
                }
            }, width: {
                get: function () {
                    return e.width
                }, set: function (n) {
                    e.width = n, D(t, n)
                }
            }, name: {
                get: function () {
                    return e.name
                }, set: function (t) {
                    e.name = t, i && (i.innerHTML = e.name)
                }
            }, closed: {
                get: function () {
                    return e.closed
                }, set: function (n) {
                    e.closed = n, e.closed ? p.addClass(t.__ul, N.CLASS_CLOSED) : p.removeClass(t.__ul, N.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = n ? N.TEXT_OPEN : N.TEXT_CLOSED)
                }
            }, load: {
                get: function () {
                    return e.load
                }
            }, useLocalStorage: {
                get: function () {
                    return n
                }, set: function (e) {
                    b && (n = e, e ? p.bind(window, "unload", u) : p.unbind(window, "unload", u), localStorage.setItem(O(t, "isLocal"), e))
                }
            }
        });
        if (d.isUndefined(e.parent)) {
            e.closed = !1, p.addClass(this.domElement, N.CLASS_MAIN), p.makeSelectable(this.domElement, !1);
            if (b && n) {
                t.useLocalStorage = !0;
                var r = localStorage.getItem(O(this, "gui"));
                r && (e.load = JSON.parse(r))
            }
            this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = N.TEXT_CLOSED, p.addClass(this.__closeButton, N.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
                t.closed = !t.closed
            })
        } else {
            e.closed === undefined && (e.closed = !0);
            var i = document.createTextNode(e.name);
            p.addClass(i, "controller-name");
            var s = k(t, i), o = function (e) {
                return e.preventDefault(), t.closed = !t.closed, !1
            };
            p.addClass(this.__ul, N.CLASS_CLOSED), p.addClass(s, "title"), p.bind(s, "click", o), e.closed || (this.closed = !1)
        }
        e.autoPlace && (d.isUndefined(e.parent) && (E && (S = document.createElement("div"), p.addClass(S, v), p.addClass(S, N.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(S), E = !1), S.appendChild(this.domElement), p.addClass(this.domElement, N.CLASS_AUTO_PLACE)), this.parent || D(t, e.width)), p.bind(window, "resize", function () {
            t.onResize()
        }), p.bind(this.__ul, "webkitTransitionEnd", function () {
            t.onResize()
        }), p.bind(this.__ul, "transitionend", function () {
            t.onResize()
        }), p.bind(this.__ul, "oTransitionEnd", function () {
            t.onResize()
        }), this.onResize(), e.resizable && _(this);
        var a = t.getRoot();
        e.parent || f()
    };
    return N.toggleHide = function () {
        x = !x, d.each(T, function (e) {
            e.domElement.style.zIndex = x ? -999 : 999, e.domElement.style.opacity = x ? 0 : 1
        })
    }, N.CLASS_AUTO_PLACE = "a", N.CLASS_AUTO_PLACE_CONTAINER = "ac", N.CLASS_MAIN = "main", N.CLASS_CONTROLLER_ROW = "cr", N.CLASS_TOO_TALL = "taller-than-window", N.CLASS_CLOSED = "closed", N.CLASS_CLOSE_BUTTON = "close-button", N.CLASS_DRAG = "drag", N.DEFAULT_WIDTH = 245, N.TEXT_CLOSED = "Close Controls", N.TEXT_OPEN = "Open Controls", p.bind(window, "keydown", function (e) {
        document.activeElement.type !== "text" && (e.which === m || e.keyCode == m) && N.toggleHide()
    }, !1), d.extend(N.prototype, {
        add: function (e, t) {
            return C(this, e, t, {factoryArgs: Array.prototype.slice.call(arguments, 2)})
        }, addColor: function (e, t) {
            return C(this, e, t, {color: !0})
        }, remove: function (e) {
            this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
            var t = this;
            d.defer(function () {
                t.onResize()
            })
        }, destroy: function () {
            this.autoPlace && S.removeChild(this.domElement)
        }, addFolder: function (e) {
            if (this.__folders[e] !== undefined) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
            var t = {name: e, parent: this};
            t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
            var n = new N(t);
            this.__folders[e] = n;
            var r = k(this, n.domElement);
            return p.addClass(r, "folder"), n
        }, open: function () {
            this.closed = !1
        }, close: function () {
            this.closed = !0
        }, onResize: function () {
            var e = this.getRoot();
            if (e.scrollable) {
                var t = p.getOffset(e.__ul).top, n = 0;
                d.each(e.__ul.childNodes, function (t) {
                    if (!e.autoPlace || t !== e.__save_row) n += p.getHeight(t)
                }), window.innerHeight - t - g < n ? (p.addClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - g + "px") : (p.removeClass(e.domElement, N.CLASS_TOO_TALL), e.__ul.style.height = "auto")
            }
            e.__resize_handle && d.defer(function () {
                e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
            }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
        }, remember: function () {
            d.isUndefined(w) && (w = new h, w.domElement.innerHTML = t);
            if (this.parent) throw new Error("You can only call remember on a top level GUI.");
            var e = this;
            d.each(Array.prototype.slice.call(arguments), function (t) {
                e.__rememberedObjects.length == 0 && M(e), e.__rememberedObjects.indexOf(t) == -1 && e.__rememberedObjects.push(t)
            }), this.autoPlace && D(this, this.width)
        }, getRoot: function () {
            var e = this;
            while (e.parent) e = e.parent;
            return e
        }, getSaveObject: function () {
            var e = this.load;
            return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = P(this)), e.folders = {}, d.each(this.__folders, function (t, n) {
                e.folders[n] = t.getSaveObject()
            }), e
        }, save: function () {
            this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = P(this), j(this, !1)
        }, saveAs: function (e) {
            this.load.remembered || (this.load.remembered = {}, this.load.remembered[y] = P(this, !0)), this.load.remembered[e] = P(this), this.preset = e, H(this, e, !0)
        }, revert: function (e) {
            d.each(this.__controllers, function (t) {
                this.getRoot().load.remembered ? A(e || this.getRoot(), t) : t.setValue(t.initialValue)
            }, this), d.each(this.__folders, function (e) {
                e.revert(e)
            }), e || j(this.getRoot(), !1)
        }, listen: function (e) {
            var t = this.__listening.length == 0;
            this.__listening.push(e), t && F(this.__listening)
        }
    }), N
}), define("hair/config/controllers", [], function () {
    return {}
}), define("hair/config/options", ["dat/gui/GUI", "hair/config/controllers"], function (e, t) {
    var n = new e, r = {amount: 15, length: 50, thickness: 20, type: "face", suction: !1, color: "#642222"};
    return n.close(), t.amount = n.add(r, "amount", 5, 40), t.length = n.add(r, "length", 20, 200), t.thickness = n.add(r, "thickness", 4, 30), t.type = n.add(r, "type", ["face", "circle", "flat"]), t.suction = n.add(r, "suction").name("Inverse"), t.color = n.addColor(r, "color"), r
}), define("hair/Joint", ["suds/math/Point", "suds/ui/Motion", "hair/config/options"], function (e, t, n) {
    var r = e.extend({
        predecessor: null,
        force: null,
        distance: null,
        motion: null,
        successor: null,
        initialize: function (r, i) {
            var s, o;
            this.predecessor = r, this.index = i, this.distance = n.length, this.motion = new t(5, 2, 10), r ? (s = r.x + this.distance, o = r.y) : (s = 0, o = 0), this._super(s, o), this.top = (new e).set(this), this.bottom = (new e).set(this)
        },
        update: function () {
            var t = this.index * n.thickness;
            if (this.successor) {
                var r = e.between(this, this.successor).normalize().multiply(t);
                this.top = r.clone().rotate(Math.PI / 2), this.bottom = r.clone().rotate(-Math.PI / 2);
                return
            }
            if (!this.predecessor) return;
            this.motion.update();
            var i = this.force.clone().add(this.motion.getPosition());
            this.add(i);
            var r = e.between(this.predecessor, this).normalize(), s = r.clone().multiply(n.length),
                o = this.predecessor.clone().add(s);
            this.x = o.x, this.y = o.y, this.top = this.clone().add(r.clone().multiply(t).rotate(Math.PI / 2)), this.bottom = this.clone().add(r.clone().multiply(t).rotate(-Math.PI / 2))
        }
    });
    return r
}), define("hair/utils/bezier", [], function () {
    return function (e, t, n) {
        var r, i, s, o;
        for (var u = 1, a = e.length - 2; u < a; u++) r = e[u][n], i = e[u + 1][n], s = (r.x + i.x) * .5, o = (r.y + i.y) * .5, t.quadraticCurveTo(r.x, r.y, s, o);
        r = e[u][n], i = e[u + 1][n], t.quadraticCurveTo(r.x, r.y, i.x, i.y)
    }
}), define("hair/utils/reverse", [], function () {
    return function (e) {
        var t = [];
        for (var n = 0; n < e.length; n++) t.push(e[n]);
        return t.reverse(), t
    }
}), define("hair/Hair", ["suds/math/Point", "hair/Joint", "hair/utils/bezier", "hair/utils/reverse", "hair/config/options"], function (e, t, n, r, i) {
    var s = function (s) {
        function f() {
            var e, n = 5;
            for (var r = 0; r < n; r++) e = new t(e, (n - r) / n), e.force = a, o.push(e);
            o[0].successor = o[1]
        }

        var o = [], u = 25, a = new e;
        this.draw = function (t) {
            var u = o.length, a = o[0];
            t.save(), t.beginPath(), t.strokeStyle = "rgb( 0, 0, 0 )", t.fillStyle = i.color, t.lineWidth = 2, t.translate(s.x, s.y);
            for (var f = 0; f < u; f++) o[f].update();
            t.moveTo(a.top.x, a.top.y), n(o, t, "top"), n(r(o), t, "bottom");
            var l = e.between(a, a.top), c = e.between(a, a.bottom);
            t.arc(a.x, a.y, i.thickness, Math.atan2(c.y, c.x), Math.atan2(l.y, l.x), !0), t.closePath(), t.fill(), t.stroke(), t.restore()
        }, this.getOrigin = function () {
            return s
        }, this.setOrigin = function (e) {
            s.set(e)
        }, this.setForce = function (e) {
            a.set(e)
        }, f()
    };
    return s
}), define("hair/utils/polarToCartesian", ["suds/math/Point"], function (e) {
    return function (n, r) {
        return new e(r * Math.cos(n), r * Math.sin(n))
    }
}), define("hair/utils/circleOrder", [], function () {
    return function (e, t) {
        function s(e) {
            return (t + e) % n
        }

        var n = e.length, r = [], i = 0;
        j = n - 1;
        while (i <= j) r.unshift(e[s(i)]), i != j && r.unshift(e[s(j)]), i++, j--;
        return r
    }
}), define("hair/utils/faceOrder", [], function () {
    return function (e, t) {
        var n = e.length, r = [], i = 1, s = 1;
        r.unshift(e[t]);
        while (i > -1 || s > -1) i > -1 && (t + i > n - 1 ? i = -1 : (r.unshift(e[t + i]), i++)), s > -1 && (t - s < 0 ? s = -1 : (r.unshift(e[t - s]), s++));
        return r
    }
}), define("hair/utils/linear", [], function () {
    return function (e, t, n) {
        return (e - t) / (n - t)
    }
}), define("hair/App", ["suds/events/Interval", "suds/helpers/MouseHelper", "suds/math/Point", "hair/Hair", "hair/utils/polarToCartesian", "hair/utils/circleOrder", "hair/utils/faceOrder", "hair/utils/linear", "hair/config/options", "hair/config/controllers"], function (e, t, n, r, i, s, o, u, a, f) {
    "use strict";
    var l = function () {
        function v() {
            e.addListener(e.FRAME, y), t.startTracking(), l = document.getElementById("canvas"), c = l.getContext("2d"), p = l.width = window.innerWidth, d = l.height = window.innerHeight, m(), f.amount.onFinishChange(m), f.type.onFinishChange(g), window.addEventListener("resize", function () {
                p = l.width = window.innerWidth, d = l.height = window.innerHeight, g()
            })
        }

        function m() {
            var e = a.amount, t, i;
            h = [];
            for (var s = 0; s < e; s++) i = new r(new n), h.push(i);
            g()
        }

        function g() {
            var e = new n(p / 2, d / 2), t = h.length, r, s, o;
            switch (a.type) {
                case"circle":
                    for (var r = 0; r < t; r++) s = h[r], o = i(Math.PI * 2 * (r / t), 100).add(e), s.setOrigin(o);
                    break;
                case"flat":
                    var u = p * 3 * .25, f = (p - u) * .5, l = u / t, c = d * .5;
                    for (var r = 0; r < t; r++) s = h[r], o = new n(f + r * l, c), s.setOrigin(o);
                    break;
                case"face":
                    var v;
                    for (var r = 0; r < t; r++) s = h[r], v = -Math.PI * .1 - Math.PI * .8 * (r / (t - 1)), o = i(v, 100).add(e), s.setOrigin(o)
            }
        }

        function y() {
            l.width = p;
            var e = new n(p / 2, d / 2), r = n.between(t, e), i = Math.atan2(r.y, r.x),
                f = (Math.PI + i) / (Math.PI * 2), v, m;
            a.type === "face" ? (b(), f > .5 && f < 1 ? (f = u(f, .5, 1), v = ~~((1 - f) * (h.length - 1))) : (f = u(f, 0, .5), v = ~~(f * (h.length - 1))), m = o(h, v)) : (v = ~~(f * (h.length - 1)), m = s(h, v));
            var g, y;
            for (var w = 0, E = m.length; w < E; w++) g = m[w], y = n.between(t, g.getOrigin()).normalize().multiply(20), a.suction && y.flip(), g.setForce(y), g.draw(c)
        }

        function b() {
            c.beginPath(), c.strokeStyle = "rgb( 0, 0, 0 )", c.fillStyle = "rgb( 255, 255, 255 )", c.lineWidth = 2, c.arc(p / 2, d / 2, 100, 0, Math.PI, !0), c.closePath(), c.fill(), c.stroke(), c.beginPath(), c.fillStyle = "rgb( 0, 0, 0 )", c.arc(p / 2 - 30, d / 2 - 20, 7, 0, Math.PI * 2), c.closePath(), c.fill(), c.beginPath(), c.fillStyle = "rgb( 0, 0, 0 )", c.arc(p / 2 + 30, d / 2 - 20, 7, 0, Math.PI * 2), c.closePath(), c.fill(), c.beginPath(), c.moveTo(0, d / 2), c.lineTo(p, d / 2), c.stroke(), c.fillStyle = "rgb( 255, 255, 255 )", w(), E()
        }

        function w() {
            var e = p / 2 - 200;
            S(e), S(e + 15), S(e + 30)
        }

        function E() {
            var e = p / 2 + 200;
            S(e), S(e - 15), S(e - 30)
        }

        function S(e) {
            c.beginPath(), c.arc(e, d / 2, 10, 0, Math.PI * 2), c.closePath(), c.fill(), c.stroke()
        }

        var l = null, c = null, h = null, p = 0, d = 0;
        v()
    };
    return l
}), require.config({
    urlArgs: "bust=" + Date.now(),
    paths: {suds: "libs/suds/source", dat: "libs/dat", text: "libs/require/plugin.text"}
}), require(["hair/App"], function (e) {
    function r() {
        t.className = "before in", setTimeout(function () {
            t.className = ""
        }, 300)
    }

    var t = document.getElementById("tag"), n = new e;
    r()
}), define("main", function () {
});