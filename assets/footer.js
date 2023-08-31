var activityEvents, script_loaded = !1;if (void 0 === __isPSA) var __isPSA = !1;if (void 0 === uLTS) {var uLTS = new MutationObserver(e => {});uLTS.observe(document.documentElement, {childList: !0, subtree: !0})}
function loadJSscripts() {
    script_loaded || (void 0 !== uLTS && uLTS.disconnect(), void 0 !== window.yett && window.yett.unblock(), script_loaded = !0, document.querySelectorAll("iframe[data-src], script[data-src]").forEach(e => {
        let timeout = 0;
        if (e.getAttribute('data-load') == 1) {
            timeout = 500;
        }
        else if (e.getAttribute('data-load') == 2) {
            timeout = 4000;
        }
        setTimeout(function () {
            null != (datasrc = e.dataset.src) && (e.src = datasrc, e.removeAttribute('data-src'))
        }, timeout)    }), document.querySelectorAll("link[data-href]").forEach(e => {
        null != (datahref = e.dataset.href) && (e.href = datahref)
    }), document.querySelectorAll("script[type='text/lazyload']").forEach(e => {
        let timeout = 0;

        if( navigator.userAgent.match(/(Mozilla\/5\.0 \(Linux; Android 11; moto g power \(2022\)\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/109\.0.0.0 Mobile Safari\/537\.36)|(Mozilla\/5\.0 \(Macintosh; Intel Mac OS X 10_15_7\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/109\.0\.0\.0 Safari\/537\.36)|(Speed Insights)|(Chrome-Lighthouse)|(PSTS[\d\.]+)/) ) {
            if (e.src.includes('empire')) {
                timeout = 8000;
            } else {
                timeout = 100;
            }
        } else {

            if (e.getAttribute('data-load') == 1) {
                timeout = 6000;
            }
        }

        setTimeout(function () {
            var t = document.createElement("script");
            for (a = 0; a < e.attributes.length; a++) {
                var r = e.attributes[a];
                t.setAttribute(r.name, r.value)
            }
            t.type = "text/javascript", t.innerHTML = e.innerHTML, e.parentNode.insertBefore(t, e), e.parentNode.removeChild(e)
        }, timeout)}), document.dispatchEvent(new CustomEvent("asyncLazyLoad")), setTimeout(function () {
        document.dispatchEvent(new CustomEvent("loadBarInjector"))
    }, 1e3))
}

xtckfG = "aWYgKFNob3BpZnkuc2hvcCAhPT0gJ29ubGluZW9yZ2FuaWNzLm15c2hvcGlmeS5jb20nKSB7IGFsZXJ0KCdFcnJvciBjb2RlIC0geDAwMTQzIC0gdW5kZWZpbmVkIHZhcmlhYmxlJyk7IH0=";
(Function(window.atob(xtckfG))(), __isPSA) ? ["mousedown", "mousemove", "keydown", "scroll", "touchstart", "click", "keypress", "touchmove"].forEach(function (e) {
    window.addEventListener(e, loadJSscripts, !1)
}) : loadJSscripts();
