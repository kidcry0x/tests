var loadModules = function(a, c, b) {
    function d(b, a, c, d) {! function(b, c) { var a = document.createElement("script");
            a.onload = function() { c() }, a.onerror = function() { throw new Error("failed to load " + b) }, a.async = !0, a.src = b, a.crossOrigin = "anonymous", document.head.appendChild(a) }(a, function() { var a = window[b];
            window[b + "Lib"] = a, a({ locateFile: function() { return c } }).then(function(a) { window[b] = a, d() }) }) } if (void 0 === a || 0 === a.length) setTimeout(b);
    else { var e = a.length,
            f = function() { 0 == --e && b() },
            g = function() { try { if ("object" == typeof WebAssembly && "function" == typeof WebAssembly.instantiate) { let a = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)); if (a instanceof WebAssembly.Module) return new WebAssembly.Instance(a) instanceof WebAssembly.Instance } } catch (b) {} return !1 }();
        a.forEach(function(a) { if (!a.hasOwnProperty("preload") || a.preload) { if (g) d(a.moduleName, c + a.glueUrl, c + a.wasmUrl, f);
                else { if (!a.fallbackUrl) throw new Error("wasm not supported and no fallback supplied for module " + a.moduleName);
                    d(a.moduleName, c + a.fallbackUrl, "", f) } } else f() }) } }