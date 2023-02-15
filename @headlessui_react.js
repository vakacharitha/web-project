import {
  require_react_dom
} from "./chunk-XY35XOXX.js";
import {
  __toESM,
  require_react
} from "./chunk-C3URVCCN.js";

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/ssr.js
var e = typeof window == "undefined" || typeof document == "undefined";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var s = e ? import_react.useEffect : import_react.useLayoutEffect;

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e7) {
  let r8 = (0, import_react2.useRef)(e7);
  return s(() => {
    r8.current = e7;
  }, [e7]), r8;
}

// node_modules/@headlessui/react/dist/hooks/use-computed.js
function i(e7, o10) {
  let [u8, t10] = (0, import_react3.useState)(e7), r8 = s2(e7);
  return s(() => t10(r8.current), [r8, t10, ...o10]), u8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t2(e7) {
  typeof queueMicrotask == "function" ? queueMicrotask(e7) : Promise.resolve().then(e7).catch((o10) => setTimeout(() => {
    throw o10;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function m() {
  let n3 = [], i7 = [], r8 = { enqueue(e7) {
    i7.push(e7);
  }, addEventListener(e7, t10, a6, o10) {
    return e7.addEventListener(t10, a6, o10), r8.add(() => e7.removeEventListener(t10, a6, o10));
  }, requestAnimationFrame(...e7) {
    let t10 = requestAnimationFrame(...e7);
    return r8.add(() => cancelAnimationFrame(t10));
  }, nextFrame(...e7) {
    return r8.requestAnimationFrame(() => r8.requestAnimationFrame(...e7));
  }, setTimeout(...e7) {
    let t10 = setTimeout(...e7);
    return r8.add(() => clearTimeout(t10));
  }, microTask(...e7) {
    let t10 = { current: true };
    return t2(() => {
      t10.current && e7[0]();
    }), r8.add(() => {
      t10.current = false;
    });
  }, add(e7) {
    return n3.push(e7), () => {
      let t10 = n3.indexOf(e7);
      if (t10 >= 0) {
        let [a6] = n3.splice(t10, 1);
        a6();
      }
    };
  }, dispose() {
    for (let e7 of n3.splice(0))
      e7();
  }, async workQueue() {
    for (let e7 of i7.splice(0))
      await e7();
  } };
  return r8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e7] = (0, import_react4.useState)(m);
  return (0, import_react4.useEffect)(() => () => e7.dispose(), [e7]), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o2 = function(t10) {
  let e7 = s2(t10);
  return import_react5.default.useCallback((...r8) => e7.current(...r8), [e7]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
var r = { serverHandoffComplete: false };
function a2() {
  let [e7, f11] = (0, import_react6.useState)(r.serverHandoffComplete);
  return (0, import_react6.useEffect)(() => {
    e7 !== true && f11(true);
  }, [e7]), (0, import_react6.useEffect)(() => {
    r.serverHandoffComplete === false && (r.serverHandoffComplete = true);
  }, []), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var u;
var l = 0;
function r2() {
  return ++l;
}
var I = (u = import_react7.default.useId) != null ? u : function() {
  let n3 = a2(), [e7, o10] = import_react7.default.useState(n3 ? r2 : null);
  return s(() => {
    e7 === null && o10(r2());
  }, [e7]), e7 != null ? "" + e7 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r8, n3, ...a6) {
  if (r8 in n3) {
    let e7 = n3[r8];
    return typeof e7 == "function" ? e7(...a6) : e7;
  }
  let t10 = new Error(`Tried to handle "${r8}" but there is no handler defined. Only defined handlers are: ${Object.keys(n3).map((e7) => `"${e7}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t10, u2), t10;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e3(r8) {
  return e ? null : r8 instanceof Node ? r8.ownerDocument : r8 != null && r8.hasOwnProperty("current") && r8.current instanceof Node ? r8.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e7) => `${e7}:not([tabindex='-1'])`).join(",");
var L = ((n3) => (n3[n3.First = 1] = "First", n3[n3.Previous = 2] = "Previous", n3[n3.Next = 4] = "Next", n3[n3.Last = 8] = "Last", n3[n3.WrapAround = 16] = "WrapAround", n3[n3.NoScroll = 32] = "NoScroll", n3))(L || {});
var N = ((o10) => (o10[o10.Error = 0] = "Error", o10[o10.Overflow = 1] = "Overflow", o10[o10.Success = 2] = "Success", o10[o10.Underflow = 3] = "Underflow", o10))(N || {});
var T = ((r8) => (r8[r8.Previous = -1] = "Previous", r8[r8.Next = 1] = "Next", r8))(T || {});
function E(e7 = document.body) {
  return e7 == null ? [] : Array.from(e7.querySelectorAll(f2)).sort((t10, r8) => Math.sign((t10.tabIndex || Number.MAX_SAFE_INTEGER) - (r8.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F = ((r8) => (r8[r8.Strict = 0] = "Strict", r8[r8.Loose = 1] = "Loose", r8))(F || {});
function h(e7, t10 = 0) {
  var r8;
  return e7 === ((r8 = e3(e7)) == null ? void 0 : r8.body) ? false : u2(t10, { [0]() {
    return e7.matches(f2);
  }, [1]() {
    let l9 = e7;
    for (; l9 !== null; ) {
      if (l9.matches(f2))
        return true;
      l9 = l9.parentElement;
    }
    return false;
  } });
}
function v(e7) {
  let t10 = e3(e7);
  m().nextFrame(() => {
    t10 && !h(t10.activeElement, 0) && S(e7);
  });
}
function S(e7) {
  e7 == null || e7.focus({ preventScroll: true });
}
var H = ["textarea", "input"].join(",");
function w(e7) {
  var t10, r8;
  return (r8 = (t10 = e7 == null ? void 0 : e7.matches) == null ? void 0 : t10.call(e7, H)) != null ? r8 : false;
}
function A(e7, t10 = (r8) => r8) {
  return e7.slice().sort((r8, l9) => {
    let o10 = t10(r8), i7 = t10(l9);
    if (o10 === null || i7 === null)
      return 0;
    let n3 = o10.compareDocumentPosition(i7);
    return n3 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n3 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function g(e7, t10) {
  return I2(E(), t10, { relativeTo: e7 });
}
function I2(e7, t10, { sorted: r8 = true, relativeTo: l9 = null, skipElements: o10 = [] } = {}) {
  let i7 = Array.isArray(e7) ? e7.length > 0 ? e7[0].ownerDocument : document : e7.ownerDocument, n3 = Array.isArray(e7) ? r8 ? A(e7) : e7 : E(e7);
  o10.length > 0 && (n3 = n3.filter((s16) => !o10.includes(s16))), l9 = l9 != null ? l9 : i7.activeElement;
  let d10 = (() => {
    if (t10 & 5)
      return 1;
    if (t10 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x7 = (() => {
    if (t10 & 1)
      return 0;
    if (t10 & 2)
      return Math.max(0, n3.indexOf(l9)) - 1;
    if (t10 & 4)
      return Math.max(0, n3.indexOf(l9)) + 1;
    if (t10 & 8)
      return n3.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p7 = t10 & 32 ? { preventScroll: true } : {}, c6 = 0, a6 = n3.length, u8;
  do {
    if (c6 >= a6 || c6 + a6 <= 0)
      return 0;
    let s16 = x7 + c6;
    if (t10 & 16)
      s16 = (s16 + a6) % a6;
    else {
      if (s16 < 0)
        return 3;
      if (s16 >= a6)
        return 1;
    }
    u8 = n3[s16], u8 == null || u8.focus(p7), c6 += d10;
  } while (u8 !== i7.activeElement);
  return t10 & 6 && w(u8) && u8.select(), u8.hasAttribute("tabindex") || u8.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react8 = __toESM(require_react(), 1);
function d(e7, r8, n3) {
  let o10 = s2(r8);
  (0, import_react8.useEffect)(() => {
    function t10(u8) {
      o10.current(u8);
    }
    return document.addEventListener(e7, t10, n3), () => document.removeEventListener(e7, t10, n3);
  }, [e7, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L2(m12, E8, c6 = true) {
  let i7 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      i7.current = c6;
    });
  }, [c6]);
  function f11(e7, o10) {
    if (!i7.current || e7.defaultPrevented)
      return;
    let l9 = function r8(t10) {
      return typeof t10 == "function" ? r8(t10()) : Array.isArray(t10) || t10 instanceof Set ? t10 : [t10];
    }(m12), n3 = o10(e7);
    if (n3 !== null && !!n3.getRootNode().contains(n3)) {
      for (let r8 of l9) {
        if (r8 === null)
          continue;
        let t10 = r8 instanceof HTMLElement ? r8 : r8.current;
        if (t10 != null && t10.contains(n3) || e7.composed && e7.composedPath().includes(t10))
          return;
      }
      return !h(n3, F.Loose) && n3.tabIndex !== -1 && e7.preventDefault(), E8(e7, n3);
    }
  }
  let u8 = (0, import_react9.useRef)(null);
  d("mousedown", (e7) => {
    var o10, l9;
    i7.current && (u8.current = ((l9 = (o10 = e7.composedPath) == null ? void 0 : o10.call(e7)) == null ? void 0 : l9[0]) || e7.target);
  }, true), d("click", (e7) => {
    !u8.current || (f11(e7, () => u8.current), u8.current = null);
  }, true), d("blur", (e7) => f11(e7, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i2(t10) {
  var n3;
  if (t10.type)
    return t10.type;
  let e7 = (n3 = t10.as) != null ? n3 : "button";
  if (typeof e7 == "string" && e7.toLowerCase() === "button")
    return "button";
}
function s6(t10, e7) {
  let [n3, u8] = (0, import_react10.useState)(() => i2(t10));
  return s(() => {
    u8(i2(t10));
  }, [t10.type, t10.as]), s(() => {
    n3 || !e7.current || e7.current instanceof HTMLButtonElement && !e7.current.hasAttribute("type") && u8("button");
  }, [n3, e7]), n3;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u3 = Symbol();
function T2(t10, n3 = true) {
  return Object.assign(t10, { [u3]: n3 });
}
function y(...t10) {
  let n3 = (0, import_react11.useRef)(t10);
  (0, import_react11.useEffect)(() => {
    n3.current = t10;
  }, [t10]);
  let c6 = o2((e7) => {
    for (let o10 of n3.current)
      o10 != null && (typeof o10 == "function" ? o10(e7) : o10.current = e7);
  });
  return t10.every((e7) => e7 == null || (e7 == null ? void 0 : e7[u3])) ? void 0 : c6;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e7, accept: t10, walk: r8, enabled: c6 = true }) {
  let o10 = (0, import_react12.useRef)(t10), l9 = (0, import_react12.useRef)(r8);
  (0, import_react12.useEffect)(() => {
    o10.current = t10, l9.current = r8;
  }, [t10, r8]), s(() => {
    if (!e7 || !c6)
      return;
    let n3 = e3(e7);
    if (!n3)
      return;
    let f11 = o10.current, p7 = l9.current, d10 = Object.assign((i7) => f11(i7), { acceptNode: f11 }), u8 = n3.createTreeWalker(e7, NodeFilter.SHOW_ELEMENT, d10, false);
    for (; u8.nextNode(); )
      p7(u8.currentNode);
  }, [e7, c6, o10, l9]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f3(r8) {
  throw new Error("Unexpected object: " + r8);
}
var a3 = ((e7) => (e7[e7.First = 0] = "First", e7[e7.Previous = 1] = "Previous", e7[e7.Next = 2] = "Next", e7[e7.Last = 3] = "Last", e7[e7.Specific = 4] = "Specific", e7[e7.Nothing = 5] = "Nothing", e7))(a3 || {});
function x(r8, n3) {
  let t10 = n3.resolveItems();
  if (t10.length <= 0)
    return null;
  let l9 = n3.resolveActiveIndex(), s16 = l9 != null ? l9 : -1, d10 = (() => {
    switch (r8.focus) {
      case 0:
        return t10.findIndex((e7) => !n3.resolveDisabled(e7));
      case 1: {
        let e7 = t10.slice().reverse().findIndex((i7, c6, u8) => s16 !== -1 && u8.length - c6 - 1 >= s16 ? false : !n3.resolveDisabled(i7));
        return e7 === -1 ? e7 : t10.length - 1 - e7;
      }
      case 2:
        return t10.findIndex((e7, i7) => i7 <= s16 ? false : !n3.resolveDisabled(e7));
      case 3: {
        let e7 = t10.slice().reverse().findIndex((i7) => !n3.resolveDisabled(i7));
        return e7 === -1 ? e7 : t10.length - 1 - e7;
      }
      case 4:
        return t10.findIndex((e7) => n3.resolveId(e7) === r8.id);
      case 5:
        return null;
      default:
        f3(r8);
    }
  })();
  return d10 === -1 ? l9 : d10;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);
var S2 = ((a6) => (a6[a6.None = 0] = "None", a6[a6.RenderStrategy = 1] = "RenderStrategy", a6[a6.Static = 2] = "Static", a6))(S2 || {});
var j = ((e7) => (e7[e7.Unmount = 0] = "Unmount", e7[e7.Hidden = 1] = "Hidden", e7))(j || {});
function $({ ourProps: r8, theirProps: t10, slot: e7, defaultTag: a6, features: o10, visible: n3 = true, name: l9 }) {
  let s16 = T3(t10, r8);
  if (n3)
    return p2(s16, e7, a6, l9);
  let u8 = o10 != null ? o10 : 0;
  if (u8 & 2) {
    let { static: i7 = false, ...d10 } = s16;
    if (i7)
      return p2(d10, e7, a6, l9);
  }
  if (u8 & 1) {
    let { unmount: i7 = true, ...d10 } = s16;
    return u2(i7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p2({ ...d10, hidden: true, style: { display: "none" } }, e7, a6, l9);
    } });
  }
  return p2(s16, e7, a6, l9);
}
function p2(r8, t10 = {}, e7, a6) {
  let { as: o10 = e7, children: n3, refName: l9 = "ref", ...s16 } = m4(r8, ["unmount", "static"]), u8 = r8.ref !== void 0 ? { [l9]: r8.ref } : {}, i7 = typeof n3 == "function" ? n3(t10) : n3;
  s16.className && typeof s16.className == "function" && (s16.className = s16.className(t10));
  let d10 = {};
  if (t10) {
    let f11 = false, y4 = [];
    for (let [h9, g4] of Object.entries(t10))
      typeof g4 == "boolean" && (f11 = true), g4 === true && y4.push(h9);
    f11 && (d10["data-headlessui-state"] = y4.join(" "));
  }
  if (o10 === import_react13.Fragment && Object.keys(F3(s16)).length > 0) {
    if (!(0, import_react13.isValidElement)(i7) || Array.isArray(i7) && i7.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a6} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s16).map((f11) => `  - ${f11}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f11) => `  - ${f11}`).join(`
`)].join(`
`));
    return (0, import_react13.cloneElement)(i7, Object.assign({}, T3(i7.props, F3(m4(s16, ["ref"]))), d10, u8, w2(i7.ref, u8.ref)));
  }
  return (0, import_react13.createElement)(o10, Object.assign({}, m4(s16, ["ref"]), o10 !== import_react13.Fragment && u8, o10 !== import_react13.Fragment && d10), i7);
}
function w2(...r8) {
  return { ref: r8.every((t10) => t10 == null) ? void 0 : (t10) => {
    for (let e7 of r8)
      e7 != null && (typeof e7 == "function" ? e7(t10) : e7.current = t10);
  } };
}
function T3(...r8) {
  var a6;
  if (r8.length === 0)
    return {};
  if (r8.length === 1)
    return r8[0];
  let t10 = {}, e7 = {};
  for (let o10 of r8)
    for (let n3 in o10)
      n3.startsWith("on") && typeof o10[n3] == "function" ? ((a6 = e7[n3]) != null || (e7[n3] = []), e7[n3].push(o10[n3])) : t10[n3] = o10[n3];
  if (t10.disabled || t10["aria-disabled"])
    return Object.assign(t10, Object.fromEntries(Object.keys(e7).map((o10) => [o10, void 0])));
  for (let o10 in e7)
    Object.assign(t10, { [o10](n3, ...l9) {
      let s16 = e7[o10];
      for (let u8 of s16) {
        if ((n3 instanceof Event || (n3 == null ? void 0 : n3.nativeEvent) instanceof Event) && n3.defaultPrevented)
          return;
        u8(n3, ...l9);
      }
    } });
  return t10;
}
function C(r8) {
  var t10;
  return Object.assign((0, import_react13.forwardRef)(r8), { displayName: (t10 = r8.displayName) != null ? t10 : r8.name });
}
function F3(r8) {
  let t10 = Object.assign({}, r8);
  for (let e7 in t10)
    t10[e7] === void 0 && delete t10[e7];
  return t10;
}
function m4(r8, t10 = []) {
  let e7 = Object.assign({}, r8);
  for (let a6 of t10)
    a6 in e7 && delete e7[a6];
  return e7;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n3) {
  let e7 = n3.parentElement, l9 = null;
  for (; e7 && !(e7 instanceof HTMLFieldSetElement); )
    e7 instanceof HTMLLegendElement && (l9 = e7), e7 = e7.parentElement;
  let t10 = (e7 == null ? void 0 : e7.getAttribute("disabled")) === "";
  return t10 && i4(l9) ? false : t10;
}
function i4(n3) {
  if (!n3)
    return false;
  let e7 = n3.previousElementSibling;
  for (; e7 !== null; ) {
    if (e7 instanceof HTMLLegendElement)
      return false;
    e7 = e7.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e4(n3 = {}, r8 = null, t10 = []) {
  for (let [i7, o10] of Object.entries(n3))
    f4(t10, s7(r8, i7), o10);
  return t10;
}
function s7(n3, r8) {
  return n3 ? n3 + "[" + r8 + "]" : r8;
}
function f4(n3, r8, t10) {
  if (Array.isArray(t10))
    for (let [i7, o10] of t10.entries())
      f4(n3, s7(r8, i7.toString()), o10);
  else
    t10 instanceof Date ? n3.push([r8, t10.toISOString()]) : typeof t10 == "boolean" ? n3.push([r8, t10 ? "1" : "0"]) : typeof t10 == "string" ? n3.push([r8, t10]) : typeof t10 == "number" ? n3.push([r8, `${t10}`]) : t10 == null ? n3.push([r8, ""]) : e4(t10, r8, n3);
}
function p3(n3) {
  var t10;
  let r8 = (t10 = n3 == null ? void 0 : n3.form) != null ? t10 : n3.closest("form");
  if (!!r8) {
    for (let i7 of r8.elements)
      if (i7.tagName === "INPUT" && i7.type === "submit" || i7.tagName === "BUTTON" && i7.type === "submit" || i7.nodeName === "INPUT" && i7.type === "image") {
        i7.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "div";
var s8 = ((e7) => (e7[e7.None = 1] = "None", e7[e7.Focusable = 2] = "Focusable", e7[e7.Hidden = 4] = "Hidden", e7))(s8 || {});
var h2 = C(function(t10, o10) {
  let { features: e7 = 1, ...r8 } = t10, d10 = { ref: o10, "aria-hidden": (e7 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e7 & 4) === 4 && (e7 & 2) !== 2 && { display: "none" } } };
  return $({ ourProps: d10, theirProps: r8, slot: {}, defaultTag: a4, name: "Hidden" });
});

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react14 = __toESM(require_react(), 1);
var o5 = (0, import_react14.createContext)(null);
o5.displayName = "OpenClosedContext";
var p4 = ((e7) => (e7[e7.Open = 0] = "Open", e7[e7.Closed = 1] = "Closed", e7))(p4 || {});
function s9() {
  return (0, import_react14.useContext)(o5);
}
function C2({ value: t10, children: n3 }) {
  return import_react14.default.createElement(o5.Provider, { value: t10 }, n3);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o6 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o6 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react15 = __toESM(require_react(), 1);
function T4(l9, r8, c6) {
  let [i7, s16] = (0, import_react15.useState)(c6), e7 = l9 !== void 0, t10 = (0, import_react15.useRef)(e7), u8 = (0, import_react15.useRef)(false), d10 = (0, import_react15.useRef)(false);
  return e7 && !t10.current && !u8.current ? (u8.current = true, t10.current = e7, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e7 && t10.current && !d10.current && (d10.current = true, t10.current = e7, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e7 ? l9 : i7, o2((n3) => (e7 || s16(n3), r8 == null ? void 0 : r8(n3)))];
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m5(u8, t10) {
  let e7 = (0, import_react16.useRef)([]), r8 = o2(u8);
  (0, import_react16.useEffect)(() => {
    let o10 = [...e7.current];
    for (let [n3, a6] of t10.entries())
      if (e7.current[n3] !== a6) {
        let l9 = r8(t10, o10);
        return e7.current = t10, l9;
      }
  }, [r8, ...t10]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t5(e7) {
  return [e7.screenX, e7.screenY];
}
function u4() {
  let e7 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r8) {
    let n3 = t5(r8);
    return e7.current[0] === n3[0] && e7.current[1] === n3[1] ? false : (e7.current = n3, true);
  }, update(r8) {
    e7.current = t5(r8);
  } };
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var Fe = ((n3) => (n3[n3.Open = 0] = "Open", n3[n3.Closed = 1] = "Closed", n3))(Fe || {});
var _e = ((n3) => (n3[n3.Single = 0] = "Single", n3[n3.Multi = 1] = "Multi", n3))(_e || {});
var ke = ((n3) => (n3[n3.Pointer = 0] = "Pointer", n3[n3.Other = 1] = "Other", n3))(ke || {});
var we = ((l9) => (l9[l9.OpenCombobox = 0] = "OpenCombobox", l9[l9.CloseCombobox = 1] = "CloseCombobox", l9[l9.GoToOption = 2] = "GoToOption", l9[l9.RegisterOption = 3] = "RegisterOption", l9[l9.UnregisterOption = 4] = "UnregisterOption", l9[l9.RegisterLabel = 5] = "RegisterLabel", l9))(we || {});
function te(t10, r8 = (n3) => n3) {
  let n3 = t10.activeOptionIndex !== null ? t10.options[t10.activeOptionIndex] : null, o10 = A(r8(t10.options.slice()), (i7) => i7.dataRef.current.domRef.current), a6 = n3 ? o10.indexOf(n3) : null;
  return a6 === -1 && (a6 = null), { options: o10, activeOptionIndex: a6 };
}
var Be = { [1](t10) {
  return t10.dataRef.current.disabled || t10.comboboxState === 1 ? t10 : { ...t10, activeOptionIndex: null, comboboxState: 1 };
}, [0](t10) {
  if (t10.dataRef.current.disabled || t10.comboboxState === 0)
    return t10;
  let r8 = t10.activeOptionIndex, { isSelected: n3 } = t10.dataRef.current, o10 = t10.options.findIndex((a6) => n3(a6.dataRef.current.value));
  return o10 !== -1 && (r8 = o10), { ...t10, comboboxState: 0, activeOptionIndex: r8 };
}, [2](t10, r8) {
  var a6;
  if (t10.dataRef.current.disabled || t10.dataRef.current.optionsRef.current && !t10.dataRef.current.optionsPropsRef.current.static && t10.comboboxState === 1)
    return t10;
  let n3 = te(t10);
  if (n3.activeOptionIndex === null) {
    let i7 = n3.options.findIndex((l9) => !l9.dataRef.current.disabled);
    i7 !== -1 && (n3.activeOptionIndex = i7);
  }
  let o10 = x(r8, { resolveItems: () => n3.options, resolveActiveIndex: () => n3.activeOptionIndex, resolveId: (i7) => i7.id, resolveDisabled: (i7) => i7.dataRef.current.disabled });
  return { ...t10, ...n3, activeOptionIndex: o10, activationTrigger: (a6 = r8.trigger) != null ? a6 : 1 };
}, [3]: (t10, r8) => {
  let n3 = { id: r8.id, dataRef: r8.dataRef }, o10 = te(t10, (i7) => [...i7, n3]);
  t10.activeOptionIndex === null && t10.dataRef.current.isSelected(r8.dataRef.current.value) && (o10.activeOptionIndex = o10.options.indexOf(n3));
  let a6 = { ...t10, ...o10, activationTrigger: 1 };
  return t10.dataRef.current.__demoMode && t10.dataRef.current.value === void 0 && (a6.activeOptionIndex = 0), a6;
}, [4]: (t10, r8) => {
  let n3 = te(t10, (o10) => {
    let a6 = o10.findIndex((i7) => i7.id === r8.id);
    return a6 !== -1 && o10.splice(a6, 1), o10;
  });
  return { ...t10, ...n3, activationTrigger: 1 };
}, [5]: (t10, r8) => ({ ...t10, labelId: r8.id }) };
var ne = (0, import_react18.createContext)(null);
ne.displayName = "ComboboxActionsContext";
function $2(t10) {
  let r8 = (0, import_react18.useContext)(ne);
  if (r8 === null) {
    let n3 = new Error(`<${t10} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n3, $2), n3;
  }
  return r8;
}
var re = (0, import_react18.createContext)(null);
re.displayName = "ComboboxDataContext";
function G(t10) {
  let r8 = (0, import_react18.useContext)(re);
  if (r8 === null) {
    let n3 = new Error(`<${t10} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n3, G), n3;
  }
  return r8;
}
function Ue(t10, r8) {
  return u2(r8.type, Be, t10, r8);
}
var Ge = import_react18.Fragment;
function Ne(t10, r8) {
  let { value: n3, defaultValue: o10, onChange: a6, name: i7, by: l9 = (b5, T8) => b5 === T8, disabled: d10 = false, __demoMode: f11 = false, nullable: e7 = false, multiple: p7 = false, ...A6 } = t10, [s16 = p7 ? [] : void 0, R2] = T4(n3, a6, o10), [v5, c6] = (0, import_react18.useReducer)(Ue, { dataRef: (0, import_react18.createRef)(), comboboxState: f11 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), x7 = (0, import_react18.useRef)(false), C4 = (0, import_react18.useRef)({ static: false, hold: false }), N3 = (0, import_react18.useRef)(null), V3 = (0, import_react18.useRef)(null), _3 = (0, import_react18.useRef)(null), k3 = (0, import_react18.useRef)(null), I6 = o2(typeof l9 == "string" ? (b5, T8) => {
    let P6 = l9;
    return (b5 == null ? void 0 : b5[P6]) === (T8 == null ? void 0 : T8[P6]);
  } : l9), H8 = (0, import_react18.useCallback)((b5) => u2(m12.mode, { [1]: () => s16.some((T8) => I6(T8, b5)), [0]: () => I6(s16, b5) }), [s16]), m12 = (0, import_react18.useMemo)(() => ({ ...v5, optionsPropsRef: C4, labelRef: N3, inputRef: V3, buttonRef: _3, optionsRef: k3, value: s16, defaultValue: o10, disabled: d10, mode: p7 ? 1 : 0, get activeOptionIndex() {
    if (x7.current && v5.activeOptionIndex === null && v5.options.length > 0) {
      let b5 = v5.options.findIndex((T8) => !T8.dataRef.current.disabled);
      if (b5 !== -1)
        return b5;
    }
    return v5.activeOptionIndex;
  }, compare: I6, isSelected: H8, nullable: e7, __demoMode: f11 }), [s16, o10, d10, p7, e7, f11, v5]);
  s(() => {
    v5.dataRef.current = m12;
  }, [m12]), L2([m12.buttonRef, m12.inputRef, m12.optionsRef], () => Z5.closeCombobox(), m12.comboboxState === 0);
  let M8 = (0, import_react18.useMemo)(() => ({ open: m12.comboboxState === 0, disabled: d10, activeIndex: m12.activeOptionIndex, activeOption: m12.activeOptionIndex === null ? null : m12.options[m12.activeOptionIndex].dataRef.current.value, value: s16 }), [m12, d10, s16]), h9 = o2((b5) => {
    let T8 = m12.options.find((P6) => P6.id === b5);
    !T8 || j5(T8.dataRef.current.value);
  }), O2 = o2(() => {
    if (m12.activeOptionIndex !== null) {
      let { dataRef: b5, id: T8 } = m12.options[m12.activeOptionIndex];
      j5(b5.current.value), Z5.goToOption(a3.Specific, T8);
    }
  }), u8 = o2(() => {
    c6({ type: 0 }), x7.current = true;
  }), L5 = o2(() => {
    c6({ type: 1 }), x7.current = false;
  }), Q5 = o2((b5, T8, P6) => (x7.current = false, b5 === a3.Specific ? c6({ type: 2, focus: a3.Specific, id: T8, trigger: P6 }) : c6({ type: 2, focus: b5, trigger: P6 }))), Y5 = o2((b5, T8) => (c6({ type: 3, id: b5, dataRef: T8 }), () => c6({ type: 4, id: b5 }))), se3 = o2((b5) => (c6({ type: 5, id: b5 }), () => c6({ type: 5, id: null }))), j5 = o2((b5) => u2(m12.mode, { [0]() {
    return R2 == null ? void 0 : R2(b5);
  }, [1]() {
    let T8 = m12.value.slice(), P6 = T8.findIndex((K7) => I6(K7, b5));
    return P6 === -1 ? T8.push(b5) : T8.splice(P6, 1), R2 == null ? void 0 : R2(T8);
  } })), Z5 = (0, import_react18.useMemo)(() => ({ onChange: j5, registerOption: Y5, registerLabel: se3, goToOption: Q5, closeCombobox: L5, openCombobox: u8, selectActiveOption: O2, selectOption: h9 }), []), de3 = r8 === null ? {} : { ref: r8 }, J9 = (0, import_react18.useRef)(null), be5 = p();
  return (0, import_react18.useEffect)(() => {
    !J9.current || o10 !== void 0 && be5.addEventListener(J9.current, "reset", () => {
      j5(o10);
    });
  }, [J9, j5]), import_react18.default.createElement(ne.Provider, { value: Z5 }, import_react18.default.createElement(re.Provider, { value: m12 }, import_react18.default.createElement(C2, { value: u2(m12.comboboxState, { [0]: p4.Open, [1]: p4.Closed }) }, i7 != null && s16 != null && e4({ [i7]: s16 }).map(([b5, T8], P6) => import_react18.default.createElement(h2, { features: s8.Hidden, ref: P6 === 0 ? (K7) => {
    var ae3;
    J9.current = (ae3 = K7 == null ? void 0 : K7.closest("form")) != null ? ae3 : null;
  } : void 0, ...F3({ key: b5, as: "input", type: "hidden", hidden: true, readOnly: true, name: b5, value: T8 }) })), $({ ourProps: de3, theirProps: A6, slot: M8, defaultTag: Ge, name: "Combobox" }))));
}
var He = C(Ne);
var je = "input";
var Ke = C(function(r8, n3) {
  var m12, M8, h9, O2;
  let o10 = I(), { id: a6 = `headlessui-combobox-input-${o10}`, onChange: i7, displayValue: l9, type: d10 = "text", ...f11 } = r8, e7 = G("Combobox.Input"), p7 = $2("Combobox.Input"), A6 = y(e7.inputRef, n3), s16 = (0, import_react18.useRef)(false), R2 = p(), v5 = function() {
    var u8;
    return typeof l9 == "function" && e7.value !== void 0 ? (u8 = l9(e7.value)) != null ? u8 : "" : typeof e7.value == "string" ? e7.value : "";
  }();
  m5(([u8, L5], [Q5, Y5]) => {
    s16.current || !e7.inputRef.current || (Y5 === 0 && L5 === 1 || u8 !== Q5) && (e7.inputRef.current.value = u8);
  }, [v5, e7.comboboxState]);
  let c6 = (0, import_react18.useRef)(false), x7 = o2(() => {
    c6.current = true;
  }), C4 = o2(() => {
    setTimeout(() => {
      c6.current = false;
    });
  }), N3 = o2((u8) => {
    switch (s16.current = true, u8.key) {
      case o6.Backspace:
      case o6.Delete:
        if (e7.mode !== 0 || !e7.nullable)
          return;
        let L5 = u8.currentTarget;
        R2.requestAnimationFrame(() => {
          L5.value === "" && (p7.onChange(null), e7.optionsRef.current && (e7.optionsRef.current.scrollTop = 0), p7.goToOption(a3.Nothing));
        });
        break;
      case o6.Enter:
        if (s16.current = false, e7.comboboxState !== 0 || c6.current)
          return;
        if (u8.preventDefault(), u8.stopPropagation(), e7.activeOptionIndex === null) {
          p7.closeCombobox();
          return;
        }
        p7.selectActiveOption(), e7.mode === 0 && p7.closeCombobox();
        break;
      case o6.ArrowDown:
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), u2(e7.comboboxState, { [0]: () => {
          p7.goToOption(a3.Next);
        }, [1]: () => {
          p7.openCombobox();
        } });
      case o6.ArrowUp:
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), u2(e7.comboboxState, { [0]: () => {
          p7.goToOption(a3.Previous);
        }, [1]: () => {
          p7.openCombobox(), R2.nextFrame(() => {
            e7.value || p7.goToOption(a3.Last);
          });
        } });
      case o6.Home:
        if (u8.shiftKey)
          break;
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), p7.goToOption(a3.First);
      case o6.PageUp:
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), p7.goToOption(a3.First);
      case o6.End:
        if (u8.shiftKey)
          break;
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), p7.goToOption(a3.Last);
      case o6.PageDown:
        return s16.current = false, u8.preventDefault(), u8.stopPropagation(), p7.goToOption(a3.Last);
      case o6.Escape:
        return s16.current = false, e7.comboboxState !== 0 ? void 0 : (u8.preventDefault(), e7.optionsRef.current && !e7.optionsPropsRef.current.static && u8.stopPropagation(), p7.closeCombobox());
      case o6.Tab:
        if (s16.current = false, e7.comboboxState !== 0)
          return;
        e7.mode === 0 && p7.selectActiveOption(), p7.closeCombobox();
        break;
    }
  }), V3 = o2((u8) => {
    p7.openCombobox(), i7 == null || i7(u8);
  }), _3 = o2(() => {
    s16.current = false;
  }), k3 = i(() => {
    if (!!e7.labelId)
      return [e7.labelId].join(" ");
  }, [e7.labelId]), I6 = (0, import_react18.useMemo)(() => ({ open: e7.comboboxState === 0, disabled: e7.disabled }), [e7]), H8 = { ref: A6, id: a6, role: "combobox", type: d10, "aria-controls": (m12 = e7.optionsRef.current) == null ? void 0 : m12.id, "aria-expanded": e7.disabled ? void 0 : e7.comboboxState === 0, "aria-activedescendant": e7.activeOptionIndex === null || (M8 = e7.options[e7.activeOptionIndex]) == null ? void 0 : M8.id, "aria-multiselectable": e7.mode === 1 ? true : void 0, "aria-labelledby": k3, defaultValue: (O2 = (h9 = r8.defaultValue) != null ? h9 : e7.defaultValue !== void 0 ? l9 == null ? void 0 : l9(e7.defaultValue) : null) != null ? O2 : e7.defaultValue, disabled: e7.disabled, onCompositionStart: x7, onCompositionEnd: C4, onKeyDown: N3, onChange: V3, onBlur: _3 };
  return $({ ourProps: H8, theirProps: f11, slot: I6, defaultTag: je, name: "Combobox.Input" });
});
var We = "button";
var Xe = C(function(r8, n3) {
  var c6;
  let o10 = G("Combobox.Button"), a6 = $2("Combobox.Button"), i7 = y(o10.buttonRef, n3), l9 = I(), { id: d10 = `headlessui-combobox-button-${l9}`, ...f11 } = r8, e7 = p(), p7 = o2((x7) => {
    switch (x7.key) {
      case o6.ArrowDown:
        return x7.preventDefault(), x7.stopPropagation(), o10.comboboxState === 1 && a6.openCombobox(), e7.nextFrame(() => {
          var C4;
          return (C4 = o10.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        });
      case o6.ArrowUp:
        return x7.preventDefault(), x7.stopPropagation(), o10.comboboxState === 1 && (a6.openCombobox(), e7.nextFrame(() => {
          o10.value || a6.goToOption(a3.Last);
        })), e7.nextFrame(() => {
          var C4;
          return (C4 = o10.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        });
      case o6.Escape:
        return o10.comboboxState !== 0 ? void 0 : (x7.preventDefault(), o10.optionsRef.current && !o10.optionsPropsRef.current.static && x7.stopPropagation(), a6.closeCombobox(), e7.nextFrame(() => {
          var C4;
          return (C4 = o10.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), A6 = o2((x7) => {
    if (r3(x7.currentTarget))
      return x7.preventDefault();
    o10.comboboxState === 0 ? a6.closeCombobox() : (x7.preventDefault(), a6.openCombobox()), e7.nextFrame(() => {
      var C4;
      return (C4 = o10.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
    });
  }), s16 = i(() => {
    if (!!o10.labelId)
      return [o10.labelId, d10].join(" ");
  }, [o10.labelId, d10]), R2 = (0, import_react18.useMemo)(() => ({ open: o10.comboboxState === 0, disabled: o10.disabled, value: o10.value }), [o10]), v5 = { ref: i7, id: d10, type: s6(r8, o10.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (c6 = o10.optionsRef.current) == null ? void 0 : c6.id, "aria-expanded": o10.disabled ? void 0 : o10.comboboxState === 0, "aria-labelledby": s16, disabled: o10.disabled, onClick: A6, onKeyDown: p7 };
  return $({ ourProps: v5, theirProps: f11, slot: R2, defaultTag: We, name: "Combobox.Button" });
});
var $e = "label";
var Je = C(function(r8, n3) {
  let o10 = I(), { id: a6 = `headlessui-combobox-label-${o10}`, ...i7 } = r8, l9 = G("Combobox.Label"), d10 = $2("Combobox.Label"), f11 = y(l9.labelRef, n3);
  s(() => d10.registerLabel(a6), [a6]);
  let e7 = o2(() => {
    var s16;
    return (s16 = l9.inputRef.current) == null ? void 0 : s16.focus({ preventScroll: true });
  }), p7 = (0, import_react18.useMemo)(() => ({ open: l9.comboboxState === 0, disabled: l9.disabled }), [l9]);
  return $({ ourProps: { ref: f11, id: a6, onClick: e7 }, theirProps: i7, slot: p7, defaultTag: $e, name: "Combobox.Label" });
});
var qe = "ul";
var Qe = S2.RenderStrategy | S2.Static;
var Ye = C(function(r8, n3) {
  var v5;
  let o10 = I(), { id: a6 = `headlessui-combobox-options-${o10}`, hold: i7 = false, ...l9 } = r8, d10 = G("Combobox.Options"), f11 = y(d10.optionsRef, n3), e7 = s9(), p7 = (() => e7 !== null ? e7 === p4.Open : d10.comboboxState === 0)();
  s(() => {
    var c6;
    d10.optionsPropsRef.current.static = (c6 = r8.static) != null ? c6 : false;
  }, [d10.optionsPropsRef, r8.static]), s(() => {
    d10.optionsPropsRef.current.hold = i7;
  }, [d10.optionsPropsRef, i7]), F2({ container: d10.optionsRef.current, enabled: d10.comboboxState === 0, accept(c6) {
    return c6.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c6) {
    c6.setAttribute("role", "none");
  } });
  let A6 = i(() => {
    var c6, x7;
    return (x7 = d10.labelId) != null ? x7 : (c6 = d10.buttonRef.current) == null ? void 0 : c6.id;
  }, [d10.labelId, d10.buttonRef.current]), s16 = (0, import_react18.useMemo)(() => ({ open: d10.comboboxState === 0 }), [d10]), R2 = { "aria-activedescendant": d10.activeOptionIndex === null || (v5 = d10.options[d10.activeOptionIndex]) == null ? void 0 : v5.id, "aria-labelledby": A6, role: "listbox", id: a6, ref: f11 };
  return $({ ourProps: R2, theirProps: l9, slot: s16, defaultTag: qe, features: Qe, visible: p7, name: "Combobox.Options" });
});
var Ze = "li";
var ze = C(function(r8, n3) {
  var M8, h9;
  let o10 = I(), { id: a6 = `headlessui-combobox-option-${o10}`, disabled: i7 = false, value: l9, ...d10 } = r8, f11 = G("Combobox.Option"), e7 = $2("Combobox.Option"), p7 = f11.activeOptionIndex !== null ? f11.options[f11.activeOptionIndex].id === a6 : false, A6 = f11.isSelected(l9), s16 = (0, import_react18.useRef)(null), R2 = s2({ disabled: i7, value: l9, domRef: s16, textValue: (h9 = (M8 = s16.current) == null ? void 0 : M8.textContent) == null ? void 0 : h9.toLowerCase() }), v5 = y(n3, s16), c6 = o2(() => e7.selectOption(a6));
  s(() => e7.registerOption(a6, R2), [R2, a6]);
  let x7 = (0, import_react18.useRef)(!f11.__demoMode);
  s(() => {
    if (!f11.__demoMode)
      return;
    let O2 = m();
    return O2.requestAnimationFrame(() => {
      x7.current = true;
    }), O2.dispose;
  }, []), s(() => {
    if (f11.comboboxState !== 0 || !p7 || !x7.current || f11.activationTrigger === 0)
      return;
    let O2 = m();
    return O2.requestAnimationFrame(() => {
      var u8, L5;
      (L5 = (u8 = s16.current) == null ? void 0 : u8.scrollIntoView) == null || L5.call(u8, { block: "nearest" });
    }), O2.dispose;
  }, [s16, p7, f11.comboboxState, f11.activationTrigger, f11.activeOptionIndex]);
  let C4 = o2((O2) => {
    if (i7)
      return O2.preventDefault();
    c6(), f11.mode === 0 && e7.closeCombobox();
  }), N3 = o2(() => {
    if (i7)
      return e7.goToOption(a3.Nothing);
    e7.goToOption(a3.Specific, a6);
  }), V3 = u4(), _3 = o2((O2) => V3.update(O2)), k3 = o2((O2) => {
    !V3.wasMoved(O2) || i7 || p7 || e7.goToOption(a3.Specific, a6, 0);
  }), I6 = o2((O2) => {
    !V3.wasMoved(O2) || i7 || !p7 || f11.optionsPropsRef.current.hold || e7.goToOption(a3.Nothing);
  }), H8 = (0, import_react18.useMemo)(() => ({ active: p7, selected: A6, disabled: i7 }), [p7, A6, i7]);
  return $({ ourProps: { id: a6, ref: v5, role: "option", tabIndex: i7 === true ? void 0 : -1, "aria-disabled": i7 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onClick: C4, onFocus: N3, onPointerEnter: _3, onMouseEnter: _3, onPointerMove: k3, onMouseMove: k3, onPointerLeave: I6, onMouseLeave: I6 }, theirProps: d10, slot: H8, defaultTag: Ze, name: "Combobox.Option" });
});
var ko = Object.assign(He, { Input: Ke, Button: Xe, Label: Je, Options: Ye, Option: ze });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react19 = __toESM(require_react(), 1);
function s11(e7, r8, n3) {
  let o10 = s2(r8);
  (0, import_react19.useEffect)(() => {
    function t10(i7) {
      o10.current(i7);
    }
    return window.addEventListener(e7, t10, n3), () => window.removeEventListener(e7, t10, n3);
  }, [e7, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s12 = ((r8) => (r8[r8.Forwards = 0] = "Forwards", r8[r8.Backwards = 1] = "Backwards", r8))(s12 || {});
function n() {
  let e7 = (0, import_react20.useRef)(0);
  return s11("keydown", (o10) => {
    o10.key === "Tab" && (e7.current = o10.shiftKey ? 1 : 0);
  }, true), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react21 = __toESM(require_react(), 1);
function f7() {
  let e7 = (0, import_react21.useRef)(false);
  return s(() => (e7.current = true, () => {
    e7.current = false;
  }), []), e7;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react22 = __toESM(require_react(), 1);
function n2(...e7) {
  return (0, import_react22.useMemo)(() => e3(...e7), [...e7]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react23 = __toESM(require_react(), 1);
function E5(n3, e7, a6, t10) {
  let i7 = s2(a6);
  (0, import_react23.useEffect)(() => {
    n3 = n3 != null ? n3 : window;
    function r8(o10) {
      i7.current(o10);
    }
    return n3.addEventListener(e7, r8, t10), () => n3.removeEventListener(e7, r8, t10);
  }, [n3, e7, t10]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var z = "div";
var A2 = ((t10) => (t10[t10.None = 1] = "None", t10[t10.InitialFocus = 2] = "InitialFocus", t10[t10.TabLock = 4] = "TabLock", t10[t10.FocusLock = 8] = "FocusLock", t10[t10.RestoreFocus = 16] = "RestoreFocus", t10[t10.All = 30] = "All", t10))(A2 || {});
var de = Object.assign(C(function(u8, e7) {
  let l9 = (0, import_react24.useRef)(null), a6 = y(l9, e7), { initialFocus: m12, containers: t10, features: n3 = 30, ...E8 } = u8;
  a2() || (n3 = 1);
  let s16 = n2(l9);
  J({ ownerDocument: s16 }, Boolean(n3 & 16));
  let S5 = Q({ ownerDocument: s16, container: l9, initialFocus: m12 }, Boolean(n3 & 2));
  X({ ownerDocument: s16, container: l9, containers: t10, previousActiveElement: S5 }, Boolean(n3 & 8));
  let H8 = n(), R2 = o2((o10) => {
    let c6 = l9.current;
    if (!c6)
      return;
    ((_3) => _3())(() => {
      u2(H8.current, { [s12.Forwards]: () => I2(c6, L.First, { skipElements: [o10.relatedTarget] }), [s12.Backwards]: () => I2(c6, L.Last, { skipElements: [o10.relatedTarget] }) });
    });
  }), B4 = p(), L5 = (0, import_react24.useRef)(false), P6 = { ref: a6, onKeyDown(o10) {
    o10.key == "Tab" && (L5.current = true, B4.requestAnimationFrame(() => {
      L5.current = false;
    }));
  }, onBlur(o10) {
    let c6 = new Set(t10 == null ? void 0 : t10.current);
    c6.add(l9);
    let p7 = o10.relatedTarget;
    !p7 || p7.dataset.headlessuiFocusGuard !== "true" && (h3(c6, p7) || (L5.current ? I2(l9.current, u2(H8.current, { [s12.Forwards]: () => L.Next, [s12.Backwards]: () => L.Previous }) | L.WrapAround, { relativeTo: o10.target }) : o10.target instanceof HTMLElement && S(o10.target)));
  } };
  return import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(n3 & 4) && import_react24.default.createElement(h2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s8.Focusable }), $({ ourProps: P6, theirProps: E8, defaultTag: z, name: "FocusTrap" }), Boolean(n3 & 4) && import_react24.default.createElement(h2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R2, features: s8.Focusable }));
}), { features: A2 });
function J({ ownerDocument: r8 }, u8) {
  let e7 = (0, import_react24.useRef)(null);
  E5(r8 == null ? void 0 : r8.defaultView, "focusout", (a6) => {
    !u8 || e7.current || (e7.current = a6.target);
  }, true), m5(() => {
    u8 || ((r8 == null ? void 0 : r8.activeElement) === (r8 == null ? void 0 : r8.body) && S(e7.current), e7.current = null);
  }, [u8]);
  let l9 = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => (l9.current = false, () => {
    l9.current = true, t2(() => {
      !l9.current || (S(e7.current), e7.current = null);
    });
  }), []);
}
function Q({ ownerDocument: r8, container: u8, initialFocus: e7 }, l9) {
  let a6 = (0, import_react24.useRef)(null), m12 = f7();
  return m5(() => {
    if (!l9)
      return;
    let t10 = u8.current;
    !t10 || t2(() => {
      if (!m12.current)
        return;
      let n3 = r8 == null ? void 0 : r8.activeElement;
      if (e7 != null && e7.current) {
        if ((e7 == null ? void 0 : e7.current) === n3) {
          a6.current = n3;
          return;
        }
      } else if (t10.contains(n3)) {
        a6.current = n3;
        return;
      }
      e7 != null && e7.current ? S(e7.current) : I2(t10, L.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a6.current = r8 == null ? void 0 : r8.activeElement;
    });
  }, [l9]), a6;
}
function X({ ownerDocument: r8, container: u8, containers: e7, previousActiveElement: l9 }, a6) {
  let m12 = f7();
  E5(r8 == null ? void 0 : r8.defaultView, "focus", (t10) => {
    if (!a6 || !m12.current)
      return;
    let n3 = new Set(e7 == null ? void 0 : e7.current);
    n3.add(u8);
    let E8 = l9.current;
    if (!E8)
      return;
    let s16 = t10.target;
    s16 && s16 instanceof HTMLElement ? h3(n3, s16) ? (l9.current = s16, S(s16)) : (t10.preventDefault(), t10.stopPropagation(), S(E8)) : S(l9.current);
  }, true);
}
function h3(r8, u8) {
  var e7;
  for (let l9 of r8)
    if ((e7 = l9.current) != null && e7.contains(u8))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var i5 = /* @__PURE__ */ new Set();
var r6 = /* @__PURE__ */ new Map();
function u5(t10) {
  t10.setAttribute("aria-hidden", "true"), t10.inert = true;
}
function l4(t10) {
  let n3 = r6.get(t10);
  !n3 || (n3["aria-hidden"] === null ? t10.removeAttribute("aria-hidden") : t10.setAttribute("aria-hidden", n3["aria-hidden"]), t10.inert = n3.inert);
}
function M(t10, n3 = true) {
  s(() => {
    if (!n3 || !t10.current)
      return;
    let o10 = t10.current, a6 = e3(o10);
    if (!!a6) {
      i5.add(o10);
      for (let e7 of r6.keys())
        e7.contains(o10) && (l4(e7), r6.delete(e7));
      return a6.querySelectorAll("body > *").forEach((e7) => {
        if (e7 instanceof HTMLElement) {
          for (let f11 of i5)
            if (e7.contains(f11))
              return;
          i5.size === 1 && (r6.set(e7, { "aria-hidden": e7.getAttribute("aria-hidden"), inert: e7.inert }), u5(e7));
        }
      }), () => {
        if (i5.delete(o10), i5.size > 0)
          a6.querySelectorAll("body > *").forEach((e7) => {
            if (e7 instanceof HTMLElement && !r6.has(e7)) {
              for (let f11 of i5)
                if (e7.contains(f11))
                  return;
              r6.set(e7, { "aria-hidden": e7.getAttribute("aria-hidden"), inert: e7.inert }), u5(e7);
            }
          });
        else
          for (let e7 of r6.keys())
            l4(e7), r6.delete(e7);
      };
    }
  }, [n3]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react25 = __toESM(require_react(), 1);
var e5 = (0, import_react25.createContext)(false);
function l5() {
  return (0, import_react25.useContext)(e5);
}
function P2(o10) {
  return import_react25.default.createElement(e5.Provider, { value: o10.force }, o10.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function x3(i7) {
  let u8 = l5(), o10 = (0, import_react26.useContext)(A3), e7 = n2(i7), [r8, f11] = (0, import_react26.useState)(() => {
    if (!u8 && o10 !== null || e)
      return null;
    let n3 = e7 == null ? void 0 : e7.getElementById("headlessui-portal-root");
    if (n3)
      return n3;
    if (e7 === null)
      return null;
    let t10 = e7.createElement("div");
    return t10.setAttribute("id", "headlessui-portal-root"), e7.body.appendChild(t10);
  });
  return (0, import_react26.useEffect)(() => {
    r8 !== null && (e7 != null && e7.body.contains(r8) || e7 == null || e7.body.appendChild(r8));
  }, [r8, e7]), (0, import_react26.useEffect)(() => {
    u8 || o10 !== null && f11(o10.current);
  }, [o10, f11, u8]), r8;
}
var _ = import_react26.Fragment;
var U2 = C(function(u8, o10) {
  let e7 = u8, r8 = (0, import_react26.useRef)(null), f11 = y(T2((a6) => {
    r8.current = a6;
  }), o10), n3 = n2(r8), t10 = x3(r8), [l9] = (0, import_react26.useState)(() => {
    var a6;
    return e ? null : (a6 = n3 == null ? void 0 : n3.createElement("div")) != null ? a6 : null;
  }), b5 = a2(), p7 = (0, import_react26.useRef)(false);
  return s(() => {
    if (p7.current = false, !(!t10 || !l9))
      return t10.contains(l9) || (l9.setAttribute("data-headlessui-portal", ""), t10.appendChild(l9)), () => {
        p7.current = true, t2(() => {
          var a6;
          !p7.current || !t10 || !l9 || (t10.removeChild(l9), t10.childNodes.length <= 0 && ((a6 = t10.parentElement) == null || a6.removeChild(t10)));
        });
      };
  }, [t10, l9]), b5 ? !t10 || !l9 ? null : (0, import_react_dom.createPortal)($({ ourProps: { ref: f11 }, theirProps: e7, defaultTag: _, name: "Portal" }), l9) : null;
});
var j2 = import_react26.Fragment;
var A3 = (0, import_react26.createContext)(null);
var F4 = C(function(u8, o10) {
  let { target: e7, ...r8 } = u8, n3 = { ref: y(o10) };
  return import_react26.default.createElement(A3.Provider, { value: e7 }, $({ ourProps: n3, theirProps: r8, defaultTag: j2, name: "Popover.Group" }));
});
var $3 = Object.assign(U2, { Group: F4 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react27 = __toESM(require_react(), 1);
var d8 = (0, import_react27.createContext)(null);
function u6() {
  let n3 = (0, import_react27.useContext)(d8);
  if (n3 === null) {
    let t10 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t10, u6), t10;
  }
  return n3;
}
function k() {
  let [n3, t10] = (0, import_react27.useState)([]);
  return [n3.length > 0 ? n3.join(" ") : void 0, (0, import_react27.useMemo)(() => function(e7) {
    let i7 = o2((r8) => (t10((o10) => [...o10, r8]), () => t10((o10) => {
      let s16 = o10.slice(), p7 = s16.indexOf(r8);
      return p7 !== -1 && s16.splice(p7, 1), s16;
    }))), a6 = (0, import_react27.useMemo)(() => ({ register: i7, slot: e7.slot, name: e7.name, props: e7.props }), [i7, e7.slot, e7.name, e7.props]);
    return import_react27.default.createElement(d8.Provider, { value: a6 }, e7.children);
  }, [t10])];
}
var S3 = "p";
var F5 = C(function(t10, c6) {
  let e7 = I(), { id: i7 = `headlessui-description-${e7}`, ...a6 } = t10, r8 = u6(), o10 = y(c6);
  s(() => r8.register(i7), [i7, r8.register]);
  let s16 = { ref: o10, ...r8.props, id: i7 };
  return $({ ourProps: s16, theirProps: a6, slot: r8.slot || {}, defaultTag: S3, name: r8.name || "Description" });
});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react28 = __toESM(require_react(), 1);
var a5 = (0, import_react28.createContext)(() => {
});
a5.displayName = "StackContext";
var s14 = ((e7) => (e7[e7.Add = 0] = "Add", e7[e7.Remove = 1] = "Remove", e7))(s14 || {});
function x4() {
  return (0, import_react28.useContext)(a5);
}
function M2({ children: i7, onUpdate: r8, type: e7, element: n3, enabled: u8 }) {
  let l9 = x4(), o10 = o2((...t10) => {
    r8 == null || r8(...t10), l9(...t10);
  });
  return s(() => {
    let t10 = u8 === void 0 || u8 === true;
    return t10 && o10(0, e7, n3), () => {
      t10 && o10(1, e7, n3);
    };
  }, [o10, e7, n3, u8]), import_react28.default.createElement(a5.Provider, { value: o10 }, i7);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function o9() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var be = ((r8) => (r8[r8.Open = 0] = "Open", r8[r8.Closed = 1] = "Closed", r8))(be || {});
var ve = ((e7) => (e7[e7.SetTitleId = 0] = "SetTitleId", e7))(ve || {});
var Ae = { [0](t10, e7) {
  return t10.titleId === e7.id ? t10 : { ...t10, titleId: e7.id };
} };
var H2 = (0, import_react29.createContext)(null);
H2.displayName = "DialogContext";
function k2(t10) {
  let e7 = (0, import_react29.useContext)(H2);
  if (e7 === null) {
    let r8 = new Error(`<${t10} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, k2), r8;
  }
  return e7;
}
function Oe(t10, e7, r8 = () => [document.body]) {
  (0, import_react29.useEffect)(() => {
    var c6;
    if (!e7 || !t10)
      return;
    let s16 = m(), d10 = window.pageYOffset;
    function a6(n3, i7, l9) {
      let P6 = n3.style.getPropertyValue(i7);
      return Object.assign(n3.style, { [i7]: l9 }), s16.add(() => {
        Object.assign(n3.style, { [i7]: P6 });
      });
    }
    let o10 = t10.documentElement, f11 = ((c6 = t10.defaultView) != null ? c6 : window).innerWidth - o10.clientWidth;
    if (a6(o10, "overflow", "hidden"), f11 > 0) {
      let n3 = o10.clientWidth - o10.offsetWidth, i7 = f11 - n3;
      a6(o10, "paddingRight", `${i7}px`);
    }
    if (o9()) {
      a6(t10.body, "marginTop", `-${d10}px`), window.scrollTo(0, 0);
      let n3 = null;
      s16.addEventListener(t10, "click", (i7) => {
        if (i7.target instanceof HTMLElement)
          try {
            let l9 = i7.target.closest("a");
            if (!l9)
              return;
            let { hash: P6 } = new URL(l9.href), u8 = t10.querySelector(P6);
            u8 && !r8().some((_3) => _3.contains(u8)) && (n3 = u8);
          } catch {
          }
      }, true), s16.addEventListener(t10, "touchmove", (i7) => {
        i7.target instanceof HTMLElement && !r8().some((l9) => l9.contains(i7.target)) && i7.preventDefault();
      }, { passive: false }), s16.add(() => {
        window.scrollTo(0, window.pageYOffset + d10), n3 && n3.isConnected && (n3.scrollIntoView({ block: "nearest" }), n3 = null);
      });
    }
    return s16.dispose;
  }, [t10, e7]);
}
function Ce(t10, e7) {
  return u2(e7.type, Ae, t10, e7);
}
var Se = "div";
var Le = S2.RenderStrategy | S2.Static;
var Me = C(function(e7, r8) {
  let s16 = I(), { id: d10 = `headlessui-dialog-${s16}`, open: a6, onClose: o10, initialFocus: p7, __demoMode: f11 = false, ...c6 } = e7, [n3, i7] = (0, import_react29.useState)(0), l9 = s9();
  a6 === void 0 && l9 !== null && (a6 = u2(l9, { [p4.Open]: true, [p4.Closed]: false }));
  let P6 = (0, import_react29.useRef)(/* @__PURE__ */ new Set()), u8 = (0, import_react29.useRef)(null), _3 = y(u8, r8), U6 = (0, import_react29.useRef)(null), y4 = n2(u8), $6 = e7.hasOwnProperty("open") || l9 !== null, Y5 = e7.hasOwnProperty("onClose");
  if (!$6 && !Y5)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!$6)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!Y5)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof a6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a6}`);
  if (typeof o10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o10}`);
  let g4 = a6 ? 0 : 1, [h9, Q5] = (0, import_react29.useReducer)(Ce, { titleId: null, descriptionId: null, panelRef: (0, import_react29.createRef)() }), R2 = o2(() => o10(false)), j5 = o2((T8) => Q5({ type: 0, id: T8 })), x7 = a2() ? f11 ? false : g4 === 0 : false, w4 = n3 > 1, X7 = (0, import_react29.useContext)(H2) !== null, Z5 = w4 ? "parent" : "leaf";
  M(u8, w4 ? x7 : false);
  let N3 = o2(() => {
    var b5, D4;
    return [...Array.from((b5 = y4 == null ? void 0 : y4.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? b5 : []).filter((E8) => !(!(E8 instanceof HTMLElement) || E8.contains(U6.current) || h9.panelRef.current && E8.contains(h9.panelRef.current))), (D4 = h9.panelRef.current) != null ? D4 : u8.current];
  });
  L2(() => N3(), R2, x7 && !w4), E5(y4 == null ? void 0 : y4.defaultView, "keydown", (T8) => {
    T8.defaultPrevented || T8.key === o6.Escape && g4 === 0 && (w4 || (T8.preventDefault(), T8.stopPropagation(), R2()));
  }), Oe(y4, g4 === 0 && !X7, N3), (0, import_react29.useEffect)(() => {
    if (g4 !== 0 || !u8.current)
      return;
    let T8 = new IntersectionObserver((b5) => {
      for (let D4 of b5)
        D4.boundingClientRect.x === 0 && D4.boundingClientRect.y === 0 && D4.boundingClientRect.width === 0 && D4.boundingClientRect.height === 0 && R2();
    });
    return T8.observe(u8.current), () => T8.disconnect();
  }, [g4, u8, R2]);
  let [ee4, te5] = k(), oe4 = (0, import_react29.useMemo)(() => [{ dialogState: g4, close: R2, setTitleId: j5 }, h9], [g4, h9, R2, j5]), V3 = (0, import_react29.useMemo)(() => ({ open: g4 === 0 }), [g4]), re5 = { ref: _3, id: d10, role: "dialog", "aria-modal": g4 === 0 ? true : void 0, "aria-labelledby": h9.titleId, "aria-describedby": ee4 };
  return import_react29.default.createElement(M2, { type: "Dialog", enabled: g4 === 0, element: u8, onUpdate: o2((T8, b5, D4) => {
    b5 === "Dialog" && u2(T8, { [s14.Add]() {
      P6.current.add(D4), i7((E8) => E8 + 1);
    }, [s14.Remove]() {
      P6.current.add(D4), i7((E8) => E8 - 1);
    } });
  }) }, import_react29.default.createElement(P2, { force: true }, import_react29.default.createElement($3, null, import_react29.default.createElement(H2.Provider, { value: oe4 }, import_react29.default.createElement($3.Group, { target: u8 }, import_react29.default.createElement(P2, { force: false }, import_react29.default.createElement(te5, { slot: V3, name: "Dialog.Description" }, import_react29.default.createElement(de, { initialFocus: p7, containers: P6, features: x7 ? u2(Z5, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, $({ ourProps: re5, theirProps: c6, slot: V3, defaultTag: Se, features: Le, visible: g4 === 0, name: "Dialog" })))))))), import_react29.default.createElement(h2, { features: s8.Hidden, ref: U6 }));
});
var ke2 = "div";
var we2 = C(function(e7, r8) {
  let s16 = I(), { id: d10 = `headlessui-dialog-overlay-${s16}`, ...a6 } = e7, [{ dialogState: o10, close: p7 }] = k2("Dialog.Overlay"), f11 = y(r8), c6 = o2((l9) => {
    if (l9.target === l9.currentTarget) {
      if (r3(l9.currentTarget))
        return l9.preventDefault();
      l9.preventDefault(), l9.stopPropagation(), p7();
    }
  }), n3 = (0, import_react29.useMemo)(() => ({ open: o10 === 0 }), [o10]);
  return $({ ourProps: { ref: f11, id: d10, "aria-hidden": true, onClick: c6 }, theirProps: a6, slot: n3, defaultTag: ke2, name: "Dialog.Overlay" });
});
var Fe2 = "div";
var Ie = C(function(e7, r8) {
  let s16 = I(), { id: d10 = `headlessui-dialog-backdrop-${s16}`, ...a6 } = e7, [{ dialogState: o10 }, p7] = k2("Dialog.Backdrop"), f11 = y(r8);
  (0, import_react29.useEffect)(() => {
    if (p7.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [p7.panelRef]);
  let c6 = (0, import_react29.useMemo)(() => ({ open: o10 === 0 }), [o10]);
  return import_react29.default.createElement(P2, { force: true }, import_react29.default.createElement($3, null, $({ ourProps: { ref: f11, id: d10, "aria-hidden": true }, theirProps: a6, slot: c6, defaultTag: Fe2, name: "Dialog.Backdrop" })));
});
var He2 = "div";
var _e2 = C(function(e7, r8) {
  let s16 = I(), { id: d10 = `headlessui-dialog-panel-${s16}`, ...a6 } = e7, [{ dialogState: o10 }, p7] = k2("Dialog.Panel"), f11 = y(r8, p7.panelRef), c6 = (0, import_react29.useMemo)(() => ({ open: o10 === 0 }), [o10]), n3 = o2((l9) => {
    l9.stopPropagation();
  });
  return $({ ourProps: { ref: f11, id: d10, onClick: n3 }, theirProps: a6, slot: c6, defaultTag: He2, name: "Dialog.Panel" });
});
var xe2 = "h2";
var We2 = C(function(e7, r8) {
  let s16 = I(), { id: d10 = `headlessui-dialog-title-${s16}`, ...a6 } = e7, [{ dialogState: o10, setTitleId: p7 }] = k2("Dialog.Title"), f11 = y(r8);
  (0, import_react29.useEffect)(() => (p7(d10), () => p7(null)), [d10, p7]);
  let c6 = (0, import_react29.useMemo)(() => ({ open: o10 === 0 }), [o10]);
  return $({ ourProps: { ref: f11, id: d10 }, theirProps: a6, slot: c6, defaultTag: xe2, name: "Dialog.Title" });
});
var mt = Object.assign(Me, { Backdrop: Ie, Panel: _e2, Overlay: we2, Title: We2, Description: F5 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react30 = __toESM(require_react(), 1);
var J2 = ((l9) => (l9[l9.Open = 0] = "Open", l9[l9.Closed = 1] = "Closed", l9))(J2 || {});
var Q2 = ((t10) => (t10[t10.ToggleDisclosure = 0] = "ToggleDisclosure", t10[t10.CloseDisclosure = 1] = "CloseDisclosure", t10[t10.SetButtonId = 2] = "SetButtonId", t10[t10.SetPanelId = 3] = "SetPanelId", t10[t10.LinkPanel = 4] = "LinkPanel", t10[t10.UnlinkPanel = 5] = "UnlinkPanel", t10))(Q2 || {});
var V = { [0]: (e7) => ({ ...e7, disclosureState: u2(e7.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e7) => e7.disclosureState === 1 ? e7 : { ...e7, disclosureState: 1 }, [4](e7) {
  return e7.linkedPanel === true ? e7 : { ...e7, linkedPanel: true };
}, [5](e7) {
  return e7.linkedPanel === false ? e7 : { ...e7, linkedPanel: false };
}, [2](e7, n3) {
  return e7.buttonId === n3.buttonId ? e7 : { ...e7, buttonId: n3.buttonId };
}, [3](e7, n3) {
  return e7.panelId === n3.panelId ? e7 : { ...e7, panelId: n3.panelId };
} };
var B = (0, import_react30.createContext)(null);
B.displayName = "DisclosureContext";
function v3(e7) {
  let n3 = (0, import_react30.useContext)(B);
  if (n3 === null) {
    let l9 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l9, v3), l9;
  }
  return n3;
}
var h5 = (0, import_react30.createContext)(null);
h5.displayName = "DisclosureAPIContext";
function K2(e7) {
  let n3 = (0, import_react30.useContext)(h5);
  if (n3 === null) {
    let l9 = new Error(`<${e7} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l9, K2), l9;
  }
  return n3;
}
var H3 = (0, import_react30.createContext)(null);
H3.displayName = "DisclosurePanelContext";
function X2() {
  return (0, import_react30.useContext)(H3);
}
function Y(e7, n3) {
  return u2(n3.type, V, e7, n3);
}
var Z = import_react30.Fragment;
var ee = C(function(n3, l9) {
  let { defaultOpen: y4 = false, ...u8 } = n3, T8 = (0, import_react30.useRef)(null), t10 = y(l9, T2((a6) => {
    T8.current = a6;
  }, n3.as === void 0 || n3.as === import_react30.Fragment)), o10 = (0, import_react30.useRef)(null), f11 = (0, import_react30.useRef)(null), s16 = (0, import_react30.useReducer)(Y, { disclosureState: y4 ? 0 : 1, linkedPanel: false, buttonRef: f11, panelRef: o10, buttonId: null, panelId: null }), [{ disclosureState: i7, buttonId: p7 }, D4] = s16, d10 = o2((a6) => {
    D4({ type: 1 });
    let r8 = e3(T8);
    if (!r8 || !p7)
      return;
    let c6 = (() => a6 ? a6 instanceof HTMLElement ? a6 : a6.current instanceof HTMLElement ? a6.current : r8.getElementById(p7) : r8.getElementById(p7))();
    c6 == null || c6.focus();
  }), P6 = (0, import_react30.useMemo)(() => ({ close: d10 }), [d10]), A6 = (0, import_react30.useMemo)(() => ({ open: i7 === 0, close: d10 }), [i7, d10]), S5 = { ref: t10 };
  return import_react30.default.createElement(B.Provider, { value: s16 }, import_react30.default.createElement(h5.Provider, { value: P6 }, import_react30.default.createElement(C2, { value: u2(i7, { [0]: p4.Open, [1]: p4.Closed }) }, $({ ourProps: S5, theirProps: u8, slot: A6, defaultTag: Z, name: "Disclosure" }))));
});
var te2 = "button";
var ne3 = C(function(n3, l9) {
  let y4 = I(), { id: u8 = `headlessui-disclosure-button-${y4}`, ...T8 } = n3, [t10, o10] = v3("Disclosure.Button"), f11 = X2(), s16 = f11 === null ? false : f11 === t10.panelId, i7 = (0, import_react30.useRef)(null), p7 = y(i7, l9, s16 ? null : t10.buttonRef);
  (0, import_react30.useEffect)(() => {
    if (!s16)
      return o10({ type: 2, buttonId: u8 }), () => {
        o10({ type: 2, buttonId: null });
      };
  }, [u8, o10, s16]);
  let D4 = o2((r8) => {
    var c6;
    if (s16) {
      if (t10.disclosureState === 1)
        return;
      switch (r8.key) {
        case o6.Space:
        case o6.Enter:
          r8.preventDefault(), r8.stopPropagation(), o10({ type: 0 }), (c6 = t10.buttonRef.current) == null || c6.focus();
          break;
      }
    } else
      switch (r8.key) {
        case o6.Space:
        case o6.Enter:
          r8.preventDefault(), r8.stopPropagation(), o10({ type: 0 });
          break;
      }
  }), d10 = o2((r8) => {
    switch (r8.key) {
      case o6.Space:
        r8.preventDefault();
        break;
    }
  }), P6 = o2((r8) => {
    var c6;
    r3(r8.currentTarget) || n3.disabled || (s16 ? (o10({ type: 0 }), (c6 = t10.buttonRef.current) == null || c6.focus()) : o10({ type: 0 }));
  }), A6 = (0, import_react30.useMemo)(() => ({ open: t10.disclosureState === 0 }), [t10]), S5 = s6(n3, i7), a6 = s16 ? { ref: p7, type: S5, onKeyDown: D4, onClick: P6 } : { ref: p7, id: u8, type: S5, "aria-expanded": n3.disabled ? void 0 : t10.disclosureState === 0, "aria-controls": t10.linkedPanel ? t10.panelId : void 0, onKeyDown: D4, onKeyUp: d10, onClick: P6 };
  return $({ ourProps: a6, theirProps: T8, slot: A6, defaultTag: te2, name: "Disclosure.Button" });
});
var le3 = "div";
var re2 = S2.RenderStrategy | S2.Static;
var oe = C(function(n3, l9) {
  let y4 = I(), { id: u8 = `headlessui-disclosure-panel-${y4}`, ...T8 } = n3, [t10, o10] = v3("Disclosure.Panel"), { close: f11 } = K2("Disclosure.Panel"), s16 = y(l9, t10.panelRef, (P6) => {
    o10({ type: P6 ? 4 : 5 });
  });
  (0, import_react30.useEffect)(() => (o10({ type: 3, panelId: u8 }), () => {
    o10({ type: 3, panelId: null });
  }), [u8, o10]);
  let i7 = s9(), p7 = (() => i7 !== null ? i7 === p4.Open : t10.disclosureState === 0)(), D4 = (0, import_react30.useMemo)(() => ({ open: t10.disclosureState === 0, close: f11 }), [t10, f11]), d10 = { ref: s16, id: u8 };
  return import_react30.default.createElement(H3.Provider, { value: t10.panelId }, $({ ourProps: d10, theirProps: T8, slot: D4, defaultTag: le3, features: re2, visible: p7, name: "Disclosure.Panel" }));
});
var Le2 = Object.assign(ee, { Button: ne3, Panel: oe });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react31 = __toESM(require_react(), 1);
var Ue2 = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(Ue2 || {});
var Be2 = ((o10) => (o10[o10.Single = 0] = "Single", o10[o10.Multi = 1] = "Multi", o10))(Be2 || {});
var He3 = ((o10) => (o10[o10.Pointer = 0] = "Pointer", o10[o10.Other = 1] = "Other", o10))(He3 || {});
var Ge2 = ((n3) => (n3[n3.OpenListbox = 0] = "OpenListbox", n3[n3.CloseListbox = 1] = "CloseListbox", n3[n3.GoToOption = 2] = "GoToOption", n3[n3.Search = 3] = "Search", n3[n3.ClearSearch = 4] = "ClearSearch", n3[n3.RegisterOption = 5] = "RegisterOption", n3[n3.UnregisterOption = 6] = "UnregisterOption", n3[n3.RegisterLabel = 7] = "RegisterLabel", n3))(Ge2 || {});
function q2(e7, r8 = (o10) => o10) {
  let o10 = e7.activeOptionIndex !== null ? e7.options[e7.activeOptionIndex] : null, p7 = A(r8(e7.options.slice()), (c6) => c6.dataRef.current.domRef.current), i7 = o10 ? p7.indexOf(o10) : null;
  return i7 === -1 && (i7 = null), { options: p7, activeOptionIndex: i7 };
}
var je2 = { [1](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 ? e7 : { ...e7, activeOptionIndex: null, listboxState: 1 };
}, [0](e7) {
  if (e7.dataRef.current.disabled || e7.listboxState === 0)
    return e7;
  let r8 = e7.activeOptionIndex, { isSelected: o10 } = e7.dataRef.current, p7 = e7.options.findIndex((i7) => o10(i7.dataRef.current.value));
  return p7 !== -1 && (r8 = p7), { ...e7, listboxState: 0, activeOptionIndex: r8 };
}, [2](e7, r8) {
  var i7;
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let o10 = q2(e7), p7 = x(r8, { resolveItems: () => o10.options, resolveActiveIndex: () => o10.activeOptionIndex, resolveId: (c6) => c6.id, resolveDisabled: (c6) => c6.dataRef.current.disabled });
  return { ...e7, ...o10, searchQuery: "", activeOptionIndex: p7, activationTrigger: (i7 = r8.trigger) != null ? i7 : 1 };
}, [3]: (e7, r8) => {
  if (e7.dataRef.current.disabled || e7.listboxState === 1)
    return e7;
  let p7 = e7.searchQuery !== "" ? 0 : 1, i7 = e7.searchQuery + r8.value.toLowerCase(), t10 = (e7.activeOptionIndex !== null ? e7.options.slice(e7.activeOptionIndex + p7).concat(e7.options.slice(0, e7.activeOptionIndex + p7)) : e7.options).find((n3) => {
    var T8;
    return !n3.dataRef.current.disabled && ((T8 = n3.dataRef.current.textValue) == null ? void 0 : T8.startsWith(i7));
  }), u8 = t10 ? e7.options.indexOf(t10) : -1;
  return u8 === -1 || u8 === e7.activeOptionIndex ? { ...e7, searchQuery: i7 } : { ...e7, searchQuery: i7, activeOptionIndex: u8, activationTrigger: 1 };
}, [4](e7) {
  return e7.dataRef.current.disabled || e7.listboxState === 1 || e7.searchQuery === "" ? e7 : { ...e7, searchQuery: "" };
}, [5]: (e7, r8) => {
  let o10 = { id: r8.id, dataRef: r8.dataRef }, p7 = q2(e7, (i7) => [...i7, o10]);
  return e7.activeOptionIndex === null && e7.dataRef.current.isSelected(r8.dataRef.current.value) && (p7.activeOptionIndex = p7.options.indexOf(o10)), { ...e7, ...p7 };
}, [6]: (e7, r8) => {
  let o10 = q2(e7, (p7) => {
    let i7 = p7.findIndex((c6) => c6.id === r8.id);
    return i7 !== -1 && p7.splice(i7, 1), p7;
  });
  return { ...e7, ...o10, activationTrigger: 1 };
}, [7]: (e7, r8) => ({ ...e7, labelId: r8.id }) };
var X3 = (0, import_react31.createContext)(null);
X3.displayName = "ListboxActionsContext";
function B2(e7) {
  let r8 = (0, import_react31.useContext)(X3);
  if (r8 === null) {
    let o10 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, B2), o10;
  }
  return r8;
}
var J3 = (0, import_react31.createContext)(null);
J3.displayName = "ListboxDataContext";
function H4(e7) {
  let r8 = (0, import_react31.useContext)(J3);
  if (r8 === null) {
    let o10 = new Error(`<${e7} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, H4), o10;
  }
  return r8;
}
function Ke2(e7, r8) {
  return u2(r8.type, je2, e7, r8);
}
var Ve = import_react31.Fragment;
var Ne2 = C(function(r8, o10) {
  let { value: p7, defaultValue: i7, name: c6, onChange: t10, by: u8 = (l9, f11) => l9 === f11, disabled: n3 = false, horizontal: T8 = false, multiple: g4 = false, ...A6 } = r8;
  const m12 = T8 ? "horizontal" : "vertical";
  let P6 = y(o10), [y4 = g4 ? [] : void 0, S5] = T4(p7, t10, i7), [h9, s16] = (0, import_react31.useReducer)(Ke2, { dataRef: (0, import_react31.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), a6 = (0, import_react31.useRef)({ static: false, hold: false }), x7 = (0, import_react31.useRef)(null), D4 = (0, import_react31.useRef)(null), Q5 = (0, import_react31.useRef)(null), M8 = o2(typeof u8 == "string" ? (l9, f11) => {
    let v5 = u8;
    return (l9 == null ? void 0 : l9[v5]) === (f11 == null ? void 0 : f11[v5]);
  } : u8), L5 = (0, import_react31.useCallback)((l9) => u2(d10.mode, { [1]: () => y4.some((f11) => M8(f11, l9)), [0]: () => M8(y4, l9) }), [y4]), d10 = (0, import_react31.useMemo)(() => ({ ...h9, value: y4, disabled: n3, mode: g4 ? 1 : 0, orientation: m12, compare: M8, isSelected: L5, optionsPropsRef: a6, labelRef: x7, buttonRef: D4, optionsRef: Q5 }), [y4, n3, g4, h9]);
  s(() => {
    h9.dataRef.current = d10;
  }, [d10]), L2([d10.buttonRef, d10.optionsRef], (l9, f11) => {
    var v5;
    s16({ type: 1 }), h(f11, F.Loose) || (l9.preventDefault(), (v5 = d10.buttonRef.current) == null || v5.focus());
  }, d10.listboxState === 0);
  let G5 = (0, import_react31.useMemo)(() => ({ open: d10.listboxState === 0, disabled: n3, value: y4 }), [d10, n3, y4]), ie5 = o2((l9) => {
    let f11 = d10.options.find((v5) => v5.id === l9);
    !f11 || k3(f11.dataRef.current.value);
  }), re5 = o2(() => {
    if (d10.activeOptionIndex !== null) {
      let { dataRef: l9, id: f11 } = d10.options[d10.activeOptionIndex];
      k3(l9.current.value), s16({ type: 2, focus: a3.Specific, id: f11 });
    }
  }), ae3 = o2(() => s16({ type: 0 })), le6 = o2(() => s16({ type: 1 })), se3 = o2((l9, f11, v5) => l9 === a3.Specific ? s16({ type: 2, focus: a3.Specific, id: f11, trigger: v5 }) : s16({ type: 2, focus: l9, trigger: v5 })), ue3 = o2((l9, f11) => (s16({ type: 5, id: l9, dataRef: f11 }), () => s16({ type: 6, id: l9 }))), pe3 = o2((l9) => (s16({ type: 7, id: l9 }), () => s16({ type: 7, id: null }))), k3 = o2((l9) => u2(d10.mode, { [0]() {
    return S5 == null ? void 0 : S5(l9);
  }, [1]() {
    let f11 = d10.value.slice(), v5 = f11.findIndex((w4) => M8(w4, l9));
    return v5 === -1 ? f11.push(l9) : f11.splice(v5, 1), S5 == null ? void 0 : S5(f11);
  } })), de3 = o2((l9) => s16({ type: 3, value: l9 })), ce2 = o2(() => s16({ type: 4 })), fe4 = (0, import_react31.useMemo)(() => ({ onChange: k3, registerOption: ue3, registerLabel: pe3, goToOption: se3, closeListbox: le6, openListbox: ae3, selectActiveOption: re5, selectOption: ie5, search: de3, clearSearch: ce2 }), []), be5 = { ref: P6 }, j5 = (0, import_react31.useRef)(null), Te5 = p();
  return (0, import_react31.useEffect)(() => {
    !j5.current || i7 !== void 0 && Te5.addEventListener(j5.current, "reset", () => {
      k3(i7);
    });
  }, [j5, k3]), import_react31.default.createElement(X3.Provider, { value: fe4 }, import_react31.default.createElement(J3.Provider, { value: d10 }, import_react31.default.createElement(C2, { value: u2(d10.listboxState, { [0]: p4.Open, [1]: p4.Closed }) }, c6 != null && y4 != null && e4({ [c6]: y4 }).map(([l9, f11], v5) => import_react31.default.createElement(h2, { features: s8.Hidden, ref: v5 === 0 ? (w4) => {
    var Y5;
    j5.current = (Y5 = w4 == null ? void 0 : w4.closest("form")) != null ? Y5 : null;
  } : void 0, ...F3({ key: l9, as: "input", type: "hidden", hidden: true, readOnly: true, name: l9, value: f11 }) })), $({ ourProps: be5, theirProps: A6, slot: G5, defaultTag: Ve, name: "Listbox" }))));
});
var We3 = "button";
var Qe2 = C(function(r8, o10) {
  var h9;
  let p7 = I(), { id: i7 = `headlessui-listbox-button-${p7}`, ...c6 } = r8, t10 = H4("Listbox.Button"), u8 = B2("Listbox.Button"), n3 = y(t10.buttonRef, o10), T8 = p(), g4 = o2((s16) => {
    switch (s16.key) {
      case o6.Space:
      case o6.Enter:
      case o6.ArrowDown:
        s16.preventDefault(), u8.openListbox(), T8.nextFrame(() => {
          t10.value || u8.goToOption(a3.First);
        });
        break;
      case o6.ArrowUp:
        s16.preventDefault(), u8.openListbox(), T8.nextFrame(() => {
          t10.value || u8.goToOption(a3.Last);
        });
        break;
    }
  }), A6 = o2((s16) => {
    switch (s16.key) {
      case o6.Space:
        s16.preventDefault();
        break;
    }
  }), m12 = o2((s16) => {
    if (r3(s16.currentTarget))
      return s16.preventDefault();
    t10.listboxState === 0 ? (u8.closeListbox(), T8.nextFrame(() => {
      var a6;
      return (a6 = t10.buttonRef.current) == null ? void 0 : a6.focus({ preventScroll: true });
    })) : (s16.preventDefault(), u8.openListbox());
  }), P6 = i(() => {
    if (!!t10.labelId)
      return [t10.labelId, i7].join(" ");
  }, [t10.labelId, i7]), y4 = (0, import_react31.useMemo)(() => ({ open: t10.listboxState === 0, disabled: t10.disabled, value: t10.value }), [t10]), S5 = { ref: n3, id: i7, type: s6(r8, t10.buttonRef), "aria-haspopup": "listbox", "aria-controls": (h9 = t10.optionsRef.current) == null ? void 0 : h9.id, "aria-expanded": t10.disabled ? void 0 : t10.listboxState === 0, "aria-labelledby": P6, disabled: t10.disabled, onKeyDown: g4, onKeyUp: A6, onClick: m12 };
  return $({ ourProps: S5, theirProps: c6, slot: y4, defaultTag: We3, name: "Listbox.Button" });
});
var $e2 = "label";
var ze2 = C(function(r8, o10) {
  let p7 = I(), { id: i7 = `headlessui-listbox-label-${p7}`, ...c6 } = r8, t10 = H4("Listbox.Label"), u8 = B2("Listbox.Label"), n3 = y(t10.labelRef, o10);
  s(() => u8.registerLabel(i7), [i7]);
  let T8 = o2(() => {
    var m12;
    return (m12 = t10.buttonRef.current) == null ? void 0 : m12.focus({ preventScroll: true });
  }), g4 = (0, import_react31.useMemo)(() => ({ open: t10.listboxState === 0, disabled: t10.disabled }), [t10]);
  return $({ ourProps: { ref: n3, id: i7, onClick: T8 }, theirProps: c6, slot: g4, defaultTag: $e2, name: "Listbox.Label" });
});
var qe2 = "ul";
var Xe2 = S2.RenderStrategy | S2.Static;
var Je2 = C(function(r8, o10) {
  var s16;
  let p7 = I(), { id: i7 = `headlessui-listbox-options-${p7}`, ...c6 } = r8, t10 = H4("Listbox.Options"), u8 = B2("Listbox.Options"), n3 = y(t10.optionsRef, o10), T8 = p(), g4 = p(), A6 = s9(), m12 = (() => A6 !== null ? A6 === p4.Open : t10.listboxState === 0)();
  (0, import_react31.useEffect)(() => {
    var x7;
    let a6 = t10.optionsRef.current;
    !a6 || t10.listboxState === 0 && a6 !== ((x7 = e3(a6)) == null ? void 0 : x7.activeElement) && a6.focus({ preventScroll: true });
  }, [t10.listboxState, t10.optionsRef]);
  let P6 = o2((a6) => {
    switch (g4.dispose(), a6.key) {
      case o6.Space:
        if (t10.searchQuery !== "")
          return a6.preventDefault(), a6.stopPropagation(), u8.search(a6.key);
      case o6.Enter:
        if (a6.preventDefault(), a6.stopPropagation(), t10.activeOptionIndex !== null) {
          let { dataRef: x7 } = t10.options[t10.activeOptionIndex];
          u8.onChange(x7.current.value);
        }
        t10.mode === 0 && (u8.closeListbox(), m().nextFrame(() => {
          var x7;
          return (x7 = t10.buttonRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        }));
        break;
      case u2(t10.orientation, { vertical: o6.ArrowDown, horizontal: o6.ArrowRight }):
        return a6.preventDefault(), a6.stopPropagation(), u8.goToOption(a3.Next);
      case u2(t10.orientation, { vertical: o6.ArrowUp, horizontal: o6.ArrowLeft }):
        return a6.preventDefault(), a6.stopPropagation(), u8.goToOption(a3.Previous);
      case o6.Home:
      case o6.PageUp:
        return a6.preventDefault(), a6.stopPropagation(), u8.goToOption(a3.First);
      case o6.End:
      case o6.PageDown:
        return a6.preventDefault(), a6.stopPropagation(), u8.goToOption(a3.Last);
      case o6.Escape:
        return a6.preventDefault(), a6.stopPropagation(), u8.closeListbox(), T8.nextFrame(() => {
          var x7;
          return (x7 = t10.buttonRef.current) == null ? void 0 : x7.focus({ preventScroll: true });
        });
      case o6.Tab:
        a6.preventDefault(), a6.stopPropagation();
        break;
      default:
        a6.key.length === 1 && (u8.search(a6.key), g4.setTimeout(() => u8.clearSearch(), 350));
        break;
    }
  }), y4 = i(() => {
    var a6, x7, D4;
    return (D4 = (a6 = t10.labelRef.current) == null ? void 0 : a6.id) != null ? D4 : (x7 = t10.buttonRef.current) == null ? void 0 : x7.id;
  }, [t10.labelRef.current, t10.buttonRef.current]), S5 = (0, import_react31.useMemo)(() => ({ open: t10.listboxState === 0 }), [t10]), h9 = { "aria-activedescendant": t10.activeOptionIndex === null || (s16 = t10.options[t10.activeOptionIndex]) == null ? void 0 : s16.id, "aria-multiselectable": t10.mode === 1 ? true : void 0, "aria-labelledby": y4, "aria-orientation": t10.orientation, id: i7, onKeyDown: P6, role: "listbox", tabIndex: 0, ref: n3 };
  return $({ ourProps: h9, theirProps: c6, slot: S5, defaultTag: qe2, features: Xe2, visible: m12, name: "Listbox.Options" });
});
var Ye2 = "li";
var Ze2 = C(function(r8, o10) {
  let p7 = I(), { id: i7 = `headlessui-listbox-option-${p7}`, disabled: c6 = false, value: t10, ...u8 } = r8, n3 = H4("Listbox.Option"), T8 = B2("Listbox.Option"), g4 = n3.activeOptionIndex !== null ? n3.options[n3.activeOptionIndex].id === i7 : false, A6 = n3.isSelected(t10), m12 = (0, import_react31.useRef)(null), P6 = s2({ disabled: c6, value: t10, domRef: m12, get textValue() {
    var L5, d10;
    return (d10 = (L5 = m12.current) == null ? void 0 : L5.textContent) == null ? void 0 : d10.toLowerCase();
  } }), y4 = y(o10, m12);
  s(() => {
    if (n3.listboxState !== 0 || !g4 || n3.activationTrigger === 0)
      return;
    let L5 = m();
    return L5.requestAnimationFrame(() => {
      var d10, G5;
      (G5 = (d10 = m12.current) == null ? void 0 : d10.scrollIntoView) == null || G5.call(d10, { block: "nearest" });
    }), L5.dispose;
  }, [m12, g4, n3.listboxState, n3.activationTrigger, n3.activeOptionIndex]), s(() => T8.registerOption(i7, P6), [P6, i7]);
  let S5 = o2((L5) => {
    if (c6)
      return L5.preventDefault();
    T8.onChange(t10), n3.mode === 0 && (T8.closeListbox(), m().nextFrame(() => {
      var d10;
      return (d10 = n3.buttonRef.current) == null ? void 0 : d10.focus({ preventScroll: true });
    }));
  }), h9 = o2(() => {
    if (c6)
      return T8.goToOption(a3.Nothing);
    T8.goToOption(a3.Specific, i7);
  }), s16 = u4(), a6 = o2((L5) => s16.update(L5)), x7 = o2((L5) => {
    !s16.wasMoved(L5) || c6 || g4 || T8.goToOption(a3.Specific, i7, 0);
  }), D4 = o2((L5) => {
    !s16.wasMoved(L5) || c6 || !g4 || T8.goToOption(a3.Nothing);
  }), Q5 = (0, import_react31.useMemo)(() => ({ active: g4, selected: A6, disabled: c6 }), [g4, A6, c6]);
  return $({ ourProps: { id: i7, ref: y4, role: "option", tabIndex: c6 === true ? void 0 : -1, "aria-disabled": c6 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onClick: S5, onFocus: h9, onPointerEnter: a6, onMouseEnter: a6, onPointerMove: x7, onMouseMove: x7, onPointerLeave: D4, onMouseLeave: D4 }, theirProps: u8, slot: Q5, defaultTag: Ye2, name: "Listbox.Option" });
});
var Mt = Object.assign(Ne2, { Button: Qe2, Label: ze2, Options: Je2, Option: Ze2 });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react32 = __toESM(require_react(), 1);
var pe = ((o10) => (o10[o10.Open = 0] = "Open", o10[o10.Closed = 1] = "Closed", o10))(pe || {});
var de2 = ((o10) => (o10[o10.Pointer = 0] = "Pointer", o10[o10.Other = 1] = "Other", o10))(de2 || {});
var me2 = ((e7) => (e7[e7.OpenMenu = 0] = "OpenMenu", e7[e7.CloseMenu = 1] = "CloseMenu", e7[e7.GoToItem = 2] = "GoToItem", e7[e7.Search = 3] = "Search", e7[e7.ClearSearch = 4] = "ClearSearch", e7[e7.RegisterItem = 5] = "RegisterItem", e7[e7.UnregisterItem = 6] = "UnregisterItem", e7))(me2 || {});
function U4(t10, i7 = (o10) => o10) {
  let o10 = t10.activeItemIndex !== null ? t10.items[t10.activeItemIndex] : null, s16 = A(i7(t10.items.slice()), (u8) => u8.dataRef.current.domRef.current), a6 = o10 ? s16.indexOf(o10) : null;
  return a6 === -1 && (a6 = null), { items: s16, activeItemIndex: a6 };
}
var fe2 = { [1](t10) {
  return t10.menuState === 1 ? t10 : { ...t10, activeItemIndex: null, menuState: 1 };
}, [0](t10) {
  return t10.menuState === 0 ? t10 : { ...t10, menuState: 0 };
}, [2]: (t10, i7) => {
  var a6;
  let o10 = U4(t10), s16 = x(i7, { resolveItems: () => o10.items, resolveActiveIndex: () => o10.activeItemIndex, resolveId: (u8) => u8.id, resolveDisabled: (u8) => u8.dataRef.current.disabled });
  return { ...t10, ...o10, searchQuery: "", activeItemIndex: s16, activationTrigger: (a6 = i7.trigger) != null ? a6 : 1 };
}, [3]: (t10, i7) => {
  let s16 = t10.searchQuery !== "" ? 0 : 1, a6 = t10.searchQuery + i7.value.toLowerCase(), n3 = (t10.activeItemIndex !== null ? t10.items.slice(t10.activeItemIndex + s16).concat(t10.items.slice(0, t10.activeItemIndex + s16)) : t10.items).find((d10) => {
    var l9;
    return ((l9 = d10.dataRef.current.textValue) == null ? void 0 : l9.startsWith(a6)) && !d10.dataRef.current.disabled;
  }), e7 = n3 ? t10.items.indexOf(n3) : -1;
  return e7 === -1 || e7 === t10.activeItemIndex ? { ...t10, searchQuery: a6 } : { ...t10, searchQuery: a6, activeItemIndex: e7, activationTrigger: 1 };
}, [4](t10) {
  return t10.searchQuery === "" ? t10 : { ...t10, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (t10, i7) => {
  let o10 = U4(t10, (s16) => [...s16, { id: i7.id, dataRef: i7.dataRef }]);
  return { ...t10, ...o10 };
}, [6]: (t10, i7) => {
  let o10 = U4(t10, (s16) => {
    let a6 = s16.findIndex((u8) => u8.id === i7.id);
    return a6 !== -1 && s16.splice(a6, 1), s16;
  });
  return { ...t10, ...o10, activationTrigger: 1 };
} };
var G3 = (0, import_react32.createContext)(null);
G3.displayName = "MenuContext";
function O(t10) {
  let i7 = (0, import_react32.useContext)(G3);
  if (i7 === null) {
    let o10 = new Error(`<${t10} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o10, O), o10;
  }
  return i7;
}
function Te2(t10, i7) {
  return u2(i7.type, fe2, t10, i7);
}
var ye2 = import_react32.Fragment;
var Ie2 = C(function(i7, o10) {
  let s16 = (0, import_react32.useReducer)(Te2, { menuState: 1, buttonRef: (0, import_react32.createRef)(), itemsRef: (0, import_react32.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: a6, itemsRef: u8, buttonRef: n3 }, e7] = s16, d10 = y(o10);
  L2([n3, u8], (R2, A6) => {
    var g4;
    e7({ type: 1 }), h(A6, F.Loose) || (R2.preventDefault(), (g4 = n3.current) == null || g4.focus());
  }, a6 === 0);
  let l9 = o2(() => {
    e7({ type: 1 });
  }), f11 = (0, import_react32.useMemo)(() => ({ open: a6 === 0, close: l9 }), [a6, l9]), M8 = i7, T8 = { ref: d10 };
  return import_react32.default.createElement(G3.Provider, { value: s16 }, import_react32.default.createElement(C2, { value: u2(a6, { [0]: p4.Open, [1]: p4.Closed }) }, $({ ourProps: T8, theirProps: M8, slot: f11, defaultTag: ye2, name: "Menu" })));
});
var ge2 = "button";
var Me2 = C(function(i7, o10) {
  var g4;
  let s16 = I(), { id: a6 = `headlessui-menu-button-${s16}`, ...u8 } = i7, [n3, e7] = O("Menu.Button"), d10 = y(n3.buttonRef, o10), l9 = p(), f11 = o2((c6) => {
    switch (c6.key) {
      case o6.Space:
      case o6.Enter:
      case o6.ArrowDown:
        c6.preventDefault(), c6.stopPropagation(), e7({ type: 0 }), l9.nextFrame(() => e7({ type: 2, focus: a3.First }));
        break;
      case o6.ArrowUp:
        c6.preventDefault(), c6.stopPropagation(), e7({ type: 0 }), l9.nextFrame(() => e7({ type: 2, focus: a3.Last }));
        break;
    }
  }), M8 = o2((c6) => {
    switch (c6.key) {
      case o6.Space:
        c6.preventDefault();
        break;
    }
  }), T8 = o2((c6) => {
    if (r3(c6.currentTarget))
      return c6.preventDefault();
    i7.disabled || (n3.menuState === 0 ? (e7({ type: 1 }), l9.nextFrame(() => {
      var b5;
      return (b5 = n3.buttonRef.current) == null ? void 0 : b5.focus({ preventScroll: true });
    })) : (c6.preventDefault(), e7({ type: 0 })));
  }), R2 = (0, import_react32.useMemo)(() => ({ open: n3.menuState === 0 }), [n3]), A6 = { ref: d10, id: a6, type: s6(i7, n3.buttonRef), "aria-haspopup": "menu", "aria-controls": (g4 = n3.itemsRef.current) == null ? void 0 : g4.id, "aria-expanded": i7.disabled ? void 0 : n3.menuState === 0, onKeyDown: f11, onKeyUp: M8, onClick: T8 };
  return $({ ourProps: A6, theirProps: u8, slot: R2, defaultTag: ge2, name: "Menu.Button" });
});
var Re = "div";
var be2 = S2.RenderStrategy | S2.Static;
var Ae2 = C(function(i7, o10) {
  var b5, S5;
  let s16 = I(), { id: a6 = `headlessui-menu-items-${s16}`, ...u8 } = i7, [n3, e7] = O("Menu.Items"), d10 = y(n3.itemsRef, o10), l9 = n2(n3.itemsRef), f11 = p(), M8 = s9(), T8 = (() => M8 !== null ? M8 === p4.Open : n3.menuState === 0)();
  (0, import_react32.useEffect)(() => {
    let r8 = n3.itemsRef.current;
    !r8 || n3.menuState === 0 && r8 !== (l9 == null ? void 0 : l9.activeElement) && r8.focus({ preventScroll: true });
  }, [n3.menuState, n3.itemsRef, l9]), F2({ container: n3.itemsRef.current, enabled: n3.menuState === 0, accept(r8) {
    return r8.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : r8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(r8) {
    r8.setAttribute("role", "none");
  } });
  let R2 = o2((r8) => {
    var h9, F10;
    switch (f11.dispose(), r8.key) {
      case o6.Space:
        if (n3.searchQuery !== "")
          return r8.preventDefault(), r8.stopPropagation(), e7({ type: 3, value: r8.key });
      case o6.Enter:
        if (r8.preventDefault(), r8.stopPropagation(), e7({ type: 1 }), n3.activeItemIndex !== null) {
          let { dataRef: p7 } = n3.items[n3.activeItemIndex];
          (F10 = (h9 = p7.current) == null ? void 0 : h9.domRef.current) == null || F10.click();
        }
        v(n3.buttonRef.current);
        break;
      case o6.ArrowDown:
        return r8.preventDefault(), r8.stopPropagation(), e7({ type: 2, focus: a3.Next });
      case o6.ArrowUp:
        return r8.preventDefault(), r8.stopPropagation(), e7({ type: 2, focus: a3.Previous });
      case o6.Home:
      case o6.PageUp:
        return r8.preventDefault(), r8.stopPropagation(), e7({ type: 2, focus: a3.First });
      case o6.End:
      case o6.PageDown:
        return r8.preventDefault(), r8.stopPropagation(), e7({ type: 2, focus: a3.Last });
      case o6.Escape:
        r8.preventDefault(), r8.stopPropagation(), e7({ type: 1 }), m().nextFrame(() => {
          var p7;
          return (p7 = n3.buttonRef.current) == null ? void 0 : p7.focus({ preventScroll: true });
        });
        break;
      case o6.Tab:
        r8.preventDefault(), r8.stopPropagation(), e7({ type: 1 }), m().nextFrame(() => {
          g(n3.buttonRef.current, r8.shiftKey ? L.Previous : L.Next);
        });
        break;
      default:
        r8.key.length === 1 && (e7({ type: 3, value: r8.key }), f11.setTimeout(() => e7({ type: 4 }), 350));
        break;
    }
  }), A6 = o2((r8) => {
    switch (r8.key) {
      case o6.Space:
        r8.preventDefault();
        break;
    }
  }), g4 = (0, import_react32.useMemo)(() => ({ open: n3.menuState === 0 }), [n3]), c6 = { "aria-activedescendant": n3.activeItemIndex === null || (b5 = n3.items[n3.activeItemIndex]) == null ? void 0 : b5.id, "aria-labelledby": (S5 = n3.buttonRef.current) == null ? void 0 : S5.id, id: a6, onKeyDown: R2, onKeyUp: A6, role: "menu", tabIndex: 0, ref: d10 };
  return $({ ourProps: c6, theirProps: u8, slot: g4, defaultTag: Re, features: be2, visible: T8, name: "Menu.Items" });
});
var ve2 = import_react32.Fragment;
var Se2 = C(function(i7, o10) {
  let s16 = I(), { id: a6 = `headlessui-menu-item-${s16}`, disabled: u8 = false, ...n3 } = i7, [e7, d10] = O("Menu.Item"), l9 = e7.activeItemIndex !== null ? e7.items[e7.activeItemIndex].id === a6 : false, f11 = (0, import_react32.useRef)(null), M8 = y(o10, f11);
  s(() => {
    if (e7.menuState !== 0 || !l9 || e7.activationTrigger === 0)
      return;
    let p7 = m();
    return p7.requestAnimationFrame(() => {
      var v5, B4;
      (B4 = (v5 = f11.current) == null ? void 0 : v5.scrollIntoView) == null || B4.call(v5, { block: "nearest" });
    }), p7.dispose;
  }, [f11, l9, e7.menuState, e7.activationTrigger, e7.activeItemIndex]);
  let T8 = (0, import_react32.useRef)({ disabled: u8, domRef: f11 });
  s(() => {
    T8.current.disabled = u8;
  }, [T8, u8]), s(() => {
    var p7, v5;
    T8.current.textValue = (v5 = (p7 = f11.current) == null ? void 0 : p7.textContent) == null ? void 0 : v5.toLowerCase();
  }, [T8, f11]), s(() => (d10({ type: 5, id: a6, dataRef: T8 }), () => d10({ type: 6, id: a6 })), [T8, a6]);
  let R2 = o2(() => {
    d10({ type: 1 });
  }), A6 = o2((p7) => {
    if (u8)
      return p7.preventDefault();
    d10({ type: 1 }), v(e7.buttonRef.current);
  }), g4 = o2(() => {
    if (u8)
      return d10({ type: 2, focus: a3.Nothing });
    d10({ type: 2, focus: a3.Specific, id: a6 });
  }), c6 = u4(), b5 = o2((p7) => c6.update(p7)), S5 = o2((p7) => {
    !c6.wasMoved(p7) || u8 || l9 || d10({ type: 2, focus: a3.Specific, id: a6, trigger: 0 });
  }), r8 = o2((p7) => {
    !c6.wasMoved(p7) || u8 || !l9 || d10({ type: 2, focus: a3.Nothing });
  }), h9 = (0, import_react32.useMemo)(() => ({ active: l9, disabled: u8, close: R2 }), [l9, u8, R2]);
  return $({ ourProps: { id: a6, ref: M8, role: "menuitem", tabIndex: u8 === true ? void 0 : -1, "aria-disabled": u8 === true ? true : void 0, disabled: void 0, onClick: A6, onFocus: g4, onPointerEnter: b5, onMouseEnter: b5, onPointerMove: S5, onMouseMove: S5, onPointerLeave: r8, onMouseLeave: r8 }, theirProps: n3, slot: h9, defaultTag: ve2, name: "Menu.Item" });
});
var Ze3 = Object.assign(Ie2, { Button: Me2, Items: Ae2, Item: Se2 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react33 = __toESM(require_react(), 1);
var Ce2 = ((f11) => (f11[f11.Open = 0] = "Open", f11[f11.Closed = 1] = "Closed", f11))(Ce2 || {});
var Oe3 = ((o10) => (o10[o10.TogglePopover = 0] = "TogglePopover", o10[o10.ClosePopover = 1] = "ClosePopover", o10[o10.SetButton = 2] = "SetButton", o10[o10.SetButtonId = 3] = "SetButtonId", o10[o10.SetPanel = 4] = "SetPanel", o10[o10.SetPanelId = 5] = "SetPanelId", o10))(Oe3 || {});
var Me3 = { [0]: (r8) => ({ ...r8, popoverState: u2(r8.popoverState, { [0]: 1, [1]: 0 }) }), [1](r8) {
  return r8.popoverState === 1 ? r8 : { ...r8, popoverState: 1 };
}, [2](r8, n3) {
  return r8.button === n3.button ? r8 : { ...r8, button: n3.button };
}, [3](r8, n3) {
  return r8.buttonId === n3.buttonId ? r8 : { ...r8, buttonId: n3.buttonId };
}, [4](r8, n3) {
  return r8.panel === n3.panel ? r8 : { ...r8, panel: n3.panel };
}, [5](r8, n3) {
  return r8.panelId === n3.panelId ? r8 : { ...r8, panelId: n3.panelId };
} };
var ne4 = (0, import_react33.createContext)(null);
ne4.displayName = "PopoverContext";
function Z3(r8) {
  let n3 = (0, import_react33.useContext)(ne4);
  if (n3 === null) {
    let f11 = new Error(`<${r8} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f11, Z3), f11;
  }
  return n3;
}
var re3 = (0, import_react33.createContext)(null);
re3.displayName = "PopoverAPIContext";
function le4(r8) {
  let n3 = (0, import_react33.useContext)(re3);
  if (n3 === null) {
    let f11 = new Error(`<${r8} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f11, le4), f11;
  }
  return n3;
}
var ae2 = (0, import_react33.createContext)(null);
ae2.displayName = "PopoverGroupContext";
function ve3() {
  return (0, import_react33.useContext)(ae2);
}
var ue = (0, import_react33.createContext)(null);
ue.displayName = "PopoverPanelContext";
function Le3() {
  return (0, import_react33.useContext)(ue);
}
function Fe3(r8, n3) {
  return u2(n3.type, Me3, r8, n3);
}
var Be3 = "div";
var he = C(function(n3, f11) {
  var O2;
  let I6 = (0, import_react33.useRef)(null), b5 = y(f11, T2((e7) => {
    I6.current = e7;
  })), S5 = (0, import_react33.useReducer)(Fe3, { popoverState: 1, buttons: [], button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react33.createRef)(), afterPanelSentinel: (0, import_react33.createRef)() }), [{ popoverState: o10, button: t10, buttonId: P6, panel: a6, panelId: L5, beforePanelSentinel: F10, afterPanelSentinel: v5 }, u8] = S5, s16 = n2((O2 = I6.current) != null ? O2 : t10), p7 = (0, import_react33.useMemo)(() => {
    if (!t10 || !a6)
      return false;
    for (let M8 of document.querySelectorAll("body > *"))
      if (Number(M8 == null ? void 0 : M8.contains(t10)) ^ Number(M8 == null ? void 0 : M8.contains(a6)))
        return true;
    let e7 = E(), l9 = e7.indexOf(t10), d10 = (l9 + e7.length - 1) % e7.length, E8 = (l9 + 1) % e7.length, D4 = e7[d10], Y5 = e7[E8];
    return !a6.contains(D4) && !a6.contains(Y5);
  }, [t10, a6]), c6 = s2(P6), T8 = s2(L5), g4 = (0, import_react33.useMemo)(() => ({ buttonId: c6, panelId: T8, close: () => u8({ type: 1 }) }), [c6, T8, u8]), A6 = ve3(), C4 = A6 == null ? void 0 : A6.registerPopover, k3 = o2(() => {
    var e7;
    return (e7 = A6 == null ? void 0 : A6.isFocusWithinPopoverGroup()) != null ? e7 : (s16 == null ? void 0 : s16.activeElement) && ((t10 == null ? void 0 : t10.contains(s16.activeElement)) || (a6 == null ? void 0 : a6.contains(s16.activeElement)));
  });
  (0, import_react33.useEffect)(() => C4 == null ? void 0 : C4(g4), [C4, g4]), E5(s16 == null ? void 0 : s16.defaultView, "focus", (e7) => {
    var l9, d10, E8, D4;
    o10 === 0 && (k3() || !t10 || !a6 || e7.target !== window && ((d10 = (l9 = F10.current) == null ? void 0 : l9.contains) != null && d10.call(l9, e7.target) || (D4 = (E8 = v5.current) == null ? void 0 : E8.contains) != null && D4.call(E8, e7.target) || u8({ type: 1 })));
  }, true), L2([t10, a6], (e7, l9) => {
    u8({ type: 1 }), h(l9, F.Loose) || (e7.preventDefault(), t10 == null || t10.focus());
  }, o10 === 0);
  let B4 = o2((e7) => {
    u8({ type: 1 });
    let l9 = (() => e7 ? e7 instanceof HTMLElement ? e7 : "current" in e7 && e7.current instanceof HTMLElement ? e7.current : t10 : t10)();
    l9 == null || l9.focus();
  }), W3 = (0, import_react33.useMemo)(() => ({ close: B4, isPortalled: p7 }), [B4, p7]), i7 = (0, import_react33.useMemo)(() => ({ open: o10 === 0, close: B4 }), [o10, B4]), m12 = n3, R2 = { ref: b5 };
  return import_react33.default.createElement(ne4.Provider, { value: S5 }, import_react33.default.createElement(re3.Provider, { value: W3 }, import_react33.default.createElement(C2, { value: u2(o10, { [0]: p4.Open, [1]: p4.Closed }) }, $({ ourProps: R2, theirProps: m12, slot: i7, defaultTag: Be3, name: "Popover" }))));
});
var xe4 = "button";
var De = C(function(n3, f11) {
  let I6 = I(), { id: b5 = `headlessui-popover-button-${I6}`, ...S5 } = n3, [o10, t10] = Z3("Popover.Button"), { isPortalled: P6 } = le4("Popover.Button"), a6 = (0, import_react33.useRef)(null), L5 = `headlessui-focus-sentinel-${I()}`, F10 = ve3(), v5 = F10 == null ? void 0 : F10.closeOthers, u8 = Le3(), s16 = u8 === null ? false : u8 === o10.panelId;
  (0, import_react33.useEffect)(() => {
    if (!s16)
      return t10({ type: 3, buttonId: b5 }), () => {
        t10({ type: 3, buttonId: null });
      };
  }, [b5, t10]);
  let p7 = y(a6, f11, s16 ? null : (e7) => {
    if (e7)
      o10.buttons.push(b5);
    else {
      let l9 = o10.buttons.indexOf(b5);
      l9 !== -1 && o10.buttons.splice(l9, 1);
    }
    o10.buttons.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e7 && t10({ type: 2, button: e7 });
  }), c6 = y(a6, f11), T8 = n2(a6), g4 = o2((e7) => {
    var l9, d10, E8;
    if (s16) {
      if (o10.popoverState === 1)
        return;
      switch (e7.key) {
        case o6.Space:
        case o6.Enter:
          e7.preventDefault(), (d10 = (l9 = e7.target).click) == null || d10.call(l9), t10({ type: 1 }), (E8 = o10.button) == null || E8.focus();
          break;
      }
    } else
      switch (e7.key) {
        case o6.Space:
        case o6.Enter:
          e7.preventDefault(), e7.stopPropagation(), o10.popoverState === 1 && (v5 == null || v5(o10.buttonId)), t10({ type: 0 });
          break;
        case o6.Escape:
          if (o10.popoverState !== 0)
            return v5 == null ? void 0 : v5(o10.buttonId);
          if (!a6.current || (T8 == null ? void 0 : T8.activeElement) && !a6.current.contains(T8.activeElement))
            return;
          e7.preventDefault(), e7.stopPropagation(), t10({ type: 1 });
          break;
      }
  }), A6 = o2((e7) => {
    s16 || e7.key === o6.Space && e7.preventDefault();
  }), C4 = o2((e7) => {
    var l9, d10;
    r3(e7.currentTarget) || n3.disabled || (s16 ? (t10({ type: 1 }), (l9 = o10.button) == null || l9.focus()) : (e7.preventDefault(), e7.stopPropagation(), o10.popoverState === 1 && (v5 == null || v5(o10.buttonId)), t10({ type: 0 }), (d10 = o10.button) == null || d10.focus()));
  }), k3 = o2((e7) => {
    e7.preventDefault(), e7.stopPropagation();
  }), B4 = o10.popoverState === 0, W3 = (0, import_react33.useMemo)(() => ({ open: B4 }), [B4]), i7 = s6(n3, a6), m12 = s16 ? { ref: c6, type: i7, onKeyDown: g4, onClick: C4 } : { ref: p7, id: o10.buttonId, type: i7, "aria-expanded": n3.disabled ? void 0 : o10.popoverState === 0, "aria-controls": o10.panel ? o10.panelId : void 0, onKeyDown: g4, onKeyUp: A6, onClick: C4, onMouseDown: k3 }, R2 = n(), O2 = o2(() => {
    let e7 = o10.panel;
    if (!e7)
      return;
    function l9() {
      u2(R2.current, { [s12.Forwards]: () => I2(e7, L.First), [s12.Backwards]: () => I2(e7, L.Last) });
    }
    l9();
  });
  return import_react33.default.createElement(import_react33.default.Fragment, null, $({ ourProps: m12, theirProps: S5, slot: W3, defaultTag: xe4, name: "Popover.Button" }), B4 && !s16 && P6 && import_react33.default.createElement(h2, { id: L5, features: s8.Focusable, as: "button", type: "button", onFocus: O2 }));
});
var He4 = "div";
var ke3 = S2.RenderStrategy | S2.Static;
var Ge3 = C(function(n3, f11) {
  let I6 = I(), { id: b5 = `headlessui-popover-overlay-${I6}`, ...S5 } = n3, [{ popoverState: o10 }, t10] = Z3("Popover.Overlay"), P6 = y(f11), a6 = s9(), L5 = (() => a6 !== null ? a6 === p4.Open : o10 === 0)(), F10 = o2((s16) => {
    if (r3(s16.currentTarget))
      return s16.preventDefault();
    t10({ type: 1 });
  }), v5 = (0, import_react33.useMemo)(() => ({ open: o10 === 0 }), [o10]);
  return $({ ourProps: { ref: P6, id: b5, "aria-hidden": true, onClick: F10 }, theirProps: S5, slot: v5, defaultTag: He4, features: ke3, visible: L5, name: "Popover.Overlay" });
});
var we3 = "div";
var _e3 = S2.RenderStrategy | S2.Static;
var Ne3 = C(function(n3, f11) {
  let I6 = I(), { id: b5 = `headlessui-popover-panel-${I6}`, focus: S5 = false, ...o10 } = n3, [t10, P6] = Z3("Popover.Panel"), { close: a6, isPortalled: L5 } = le4("Popover.Panel"), F10 = `headlessui-focus-sentinel-before-${I()}`, v5 = `headlessui-focus-sentinel-after-${I()}`, u8 = (0, import_react33.useRef)(null), s16 = y(u8, f11, (i7) => {
    P6({ type: 4, panel: i7 });
  }), p7 = n2(u8);
  (0, import_react33.useEffect)(() => (P6({ type: 5, panelId: b5 }), () => {
    P6({ type: 5, panelId: null });
  }), [b5, P6]);
  let c6 = s9(), T8 = (() => c6 !== null ? c6 === p4.Open : t10.popoverState === 0)(), g4 = o2((i7) => {
    var m12;
    switch (i7.key) {
      case o6.Escape:
        if (t10.popoverState !== 0 || !u8.current || (p7 == null ? void 0 : p7.activeElement) && !u8.current.contains(p7.activeElement))
          return;
        i7.preventDefault(), i7.stopPropagation(), P6({ type: 1 }), (m12 = t10.button) == null || m12.focus();
        break;
    }
  });
  (0, import_react33.useEffect)(() => {
    var i7;
    n3.static || t10.popoverState === 1 && ((i7 = n3.unmount) != null ? i7 : true) && P6({ type: 4, panel: null });
  }, [t10.popoverState, n3.unmount, n3.static, P6]), (0, import_react33.useEffect)(() => {
    if (!S5 || t10.popoverState !== 0 || !u8.current)
      return;
    let i7 = p7 == null ? void 0 : p7.activeElement;
    u8.current.contains(i7) || I2(u8.current, L.First);
  }, [S5, u8, t10.popoverState]);
  let A6 = (0, import_react33.useMemo)(() => ({ open: t10.popoverState === 0, close: a6 }), [t10, a6]), C4 = { ref: s16, id: t10.panelId, onKeyDown: g4, onBlur: S5 && t10.popoverState === 0 ? (i7) => {
    var R2, O2, e7, l9, d10;
    let m12 = i7.relatedTarget;
    !m12 || !u8.current || (R2 = u8.current) != null && R2.contains(m12) || (P6({ type: 1 }), (((e7 = (O2 = t10.beforePanelSentinel.current) == null ? void 0 : O2.contains) == null ? void 0 : e7.call(O2, m12)) || ((d10 = (l9 = t10.afterPanelSentinel.current) == null ? void 0 : l9.contains) == null ? void 0 : d10.call(l9, m12))) && m12.focus({ preventScroll: true }));
  } : void 0, tabIndex: -1 }, k3 = n(), B4 = o2(() => {
    let i7 = u8.current;
    if (!i7)
      return;
    function m12() {
      u2(k3.current, { [s12.Forwards]: () => {
        I2(i7, L.First);
      }, [s12.Backwards]: () => {
        var R2;
        (R2 = t10.button) == null || R2.focus({ preventScroll: true });
      } });
    }
    m12();
  }), W3 = o2(() => {
    let i7 = u8.current;
    if (!i7)
      return;
    function m12() {
      u2(k3.current, { [s12.Forwards]: () => {
        var E8, D4, Y5;
        if (!t10.button)
          return;
        let R2 = E(), O2 = R2.indexOf(t10.button), e7 = R2.slice(0, O2 + 1), d10 = [...R2.slice(O2 + 1), ...e7];
        for (let M8 of d10.slice())
          if (((D4 = (E8 = M8 == null ? void 0 : M8.id) == null ? void 0 : E8.startsWith) == null ? void 0 : D4.call(E8, "headlessui-focus-sentinel-")) || ((Y5 = t10.panel) == null ? void 0 : Y5.contains(M8))) {
            let pe3 = d10.indexOf(M8);
            pe3 !== -1 && d10.splice(pe3, 1);
          }
        I2(d10, L.First, { sorted: false });
      }, [s12.Backwards]: () => I2(i7, L.Last) });
    }
    m12();
  });
  return import_react33.default.createElement(ue.Provider, { value: t10.panelId }, T8 && L5 && import_react33.default.createElement(h2, { id: F10, ref: t10.beforePanelSentinel, features: s8.Focusable, as: "button", type: "button", onFocus: B4 }), $({ ourProps: C4, theirProps: o10, slot: A6, defaultTag: we3, features: _e3, visible: T8, name: "Popover.Panel" }), T8 && L5 && import_react33.default.createElement(h2, { id: v5, ref: t10.afterPanelSentinel, features: s8.Focusable, as: "button", type: "button", onFocus: W3 }));
});
var Ke3 = "div";
var Ue3 = C(function(n3, f11) {
  let I6 = (0, import_react33.useRef)(null), b5 = y(I6, f11), [S5, o10] = (0, import_react33.useState)([]), t10 = o2((p7) => {
    o10((c6) => {
      let T8 = c6.indexOf(p7);
      if (T8 !== -1) {
        let g4 = c6.slice();
        return g4.splice(T8, 1), g4;
      }
      return c6;
    });
  }), P6 = o2((p7) => (o10((c6) => [...c6, p7]), () => t10(p7))), a6 = o2(() => {
    var T8;
    let p7 = e3(I6);
    if (!p7)
      return false;
    let c6 = p7.activeElement;
    return (T8 = I6.current) != null && T8.contains(c6) ? true : S5.some((g4) => {
      var A6, C4;
      return ((A6 = p7.getElementById(g4.buttonId.current)) == null ? void 0 : A6.contains(c6)) || ((C4 = p7.getElementById(g4.panelId.current)) == null ? void 0 : C4.contains(c6));
    });
  }), L5 = o2((p7) => {
    for (let c6 of S5)
      c6.buttonId.current !== p7 && c6.close();
  }), F10 = (0, import_react33.useMemo)(() => ({ registerPopover: P6, unregisterPopover: t10, isFocusWithinPopoverGroup: a6, closeOthers: L5 }), [P6, t10, a6, L5]), v5 = (0, import_react33.useMemo)(() => ({}), []), u8 = n3, s16 = { ref: b5 };
  return import_react33.default.createElement(ae2.Provider, { value: F10 }, $({ ourProps: s16, theirProps: u8, slot: v5, defaultTag: Ke3, name: "Popover.Group" }));
});
var St = Object.assign(he, { Button: De, Overlay: Ge3, Panel: Ne3, Group: Ue3 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react36 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react34 = __toESM(require_react(), 1);
function b2(g4 = 0) {
  let [r8, l9] = (0, import_react34.useState)(g4), u8 = (0, import_react34.useCallback)((e7) => l9((a6) => a6 | e7), [r8]), n3 = (0, import_react34.useCallback)((e7) => Boolean(r8 & e7), [r8]), o10 = (0, import_react34.useCallback)((e7) => l9((a6) => a6 & ~e7), [l9]), s16 = (0, import_react34.useCallback)((e7) => l9((a6) => a6 ^ e7), [l9]);
  return { addFlag: u8, hasFlag: n3, removeFlag: o10, toggleFlag: s16 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react35 = __toESM(require_react(), 1);
var u7 = (0, import_react35.createContext)(null);
function c4() {
  let n3 = (0, import_react35.useContext)(u7);
  if (n3 === null) {
    let r8 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r8, c4), r8;
  }
  return n3;
}
function M3() {
  let [n3, r8] = (0, import_react35.useState)([]);
  return [n3.length > 0 ? n3.join(" ") : void 0, (0, import_react35.useMemo)(() => function(e7) {
    let o10 = o2((l9) => (r8((t10) => [...t10, l9]), () => r8((t10) => {
      let i7 = t10.slice(), a6 = i7.indexOf(l9);
      return a6 !== -1 && i7.splice(a6, 1), i7;
    }))), s16 = (0, import_react35.useMemo)(() => ({ register: o10, slot: e7.slot, name: e7.name, props: e7.props }), [o10, e7.slot, e7.name, e7.props]);
    return import_react35.default.createElement(u7.Provider, { value: s16 }, e7.children);
  }, [r8])];
}
var h7 = "label";
var F7 = C(function(r8, d10) {
  let e7 = I(), { id: o10 = `headlessui-label-${e7}`, passive: s16 = false, ...l9 } = r8, t10 = c4(), i7 = y(d10);
  s(() => t10.register(o10), [o10, t10.register]);
  let a6 = { ref: i7, ...t10.props, id: o10 };
  return s16 && ("onClick" in a6 && delete a6.onClick, "onClick" in l9 && delete l9.onClick), $({ ourProps: a6, theirProps: l9, slot: t10.slot || {}, defaultTag: h7, name: t10.name || "Label" });
});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var he2 = ((t10) => (t10[t10.RegisterOption = 0] = "RegisterOption", t10[t10.UnregisterOption = 1] = "UnregisterOption", t10))(he2 || {});
var ke4 = { [0](n3, r8) {
  let t10 = [...n3.options, { id: r8.id, element: r8.element, propsRef: r8.propsRef }];
  return { ...n3, options: A(t10, (d10) => d10.element.current) };
}, [1](n3, r8) {
  let t10 = n3.options.slice(), d10 = n3.options.findIndex((c6) => c6.id === r8.id);
  return d10 === -1 ? n3 : (t10.splice(d10, 1), { ...n3, options: t10 });
} };
var $4 = (0, import_react36.createContext)(null);
$4.displayName = "RadioGroupDataContext";
function ne5(n3) {
  let r8 = (0, import_react36.useContext)($4);
  if (r8 === null) {
    let t10 = new Error(`<${n3} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t10, ne5), t10;
  }
  return r8;
}
var V2 = (0, import_react36.createContext)(null);
V2.displayName = "RadioGroupActionsContext";
function ie3(n3) {
  let r8 = (0, import_react36.useContext)(V2);
  if (r8 === null) {
    let t10 = new Error(`<${n3} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t10, ie3), t10;
  }
  return r8;
}
function Fe4(n3, r8) {
  return u2(r8.type, ke4, n3, r8);
}
var Le4 = "div";
var Ce3 = C(function(r8, t10) {
  let d10 = I(), { id: c6 = `headlessui-radiogroup-${d10}`, value: D4, defaultValue: O2, name: I6, onChange: E8, by: G5 = (e7, i7) => e7 === i7, disabled: h9 = false, ...U6 } = r8, T8 = o2(typeof G5 == "string" ? (e7, i7) => {
    let o10 = G5;
    return (e7 == null ? void 0 : e7[o10]) === (i7 == null ? void 0 : i7[o10]);
  } : G5), [k3, F10] = (0, import_react36.useReducer)(Fe4, { options: [] }), a6 = k3.options, [M8, N3] = M3(), [m12, L5] = k(), C4 = (0, import_react36.useRef)(null), W3 = y(C4, t10), [l9, x7] = T4(D4, E8, O2), s16 = (0, import_react36.useMemo)(() => a6.find((e7) => !e7.propsRef.current.disabled), [a6]), b5 = (0, import_react36.useMemo)(() => a6.some((e7) => T8(e7.propsRef.current.value, l9)), [a6, l9]), u8 = o2((e7) => {
    var o10;
    if (h9 || T8(e7, l9))
      return false;
    let i7 = (o10 = a6.find((f11) => T8(f11.propsRef.current.value, e7))) == null ? void 0 : o10.propsRef.current;
    return i7 != null && i7.disabled ? false : (x7 == null || x7(e7), true);
  });
  F2({ container: C4.current, accept(e7) {
    return e7.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e7) {
    e7.setAttribute("role", "none");
  } });
  let K7 = o2((e7) => {
    let i7 = C4.current;
    if (!i7)
      return;
    let o10 = e3(i7), f11 = a6.filter((p7) => p7.propsRef.current.disabled === false).map((p7) => p7.element.current);
    switch (e7.key) {
      case o6.Enter:
        p3(e7.currentTarget);
        break;
      case o6.ArrowLeft:
      case o6.ArrowUp:
        if (e7.preventDefault(), e7.stopPropagation(), I2(f11, L.Previous | L.WrapAround) === N.Success) {
          let y4 = a6.find((j5) => j5.element.current === (o10 == null ? void 0 : o10.activeElement));
          y4 && u8(y4.propsRef.current.value);
        }
        break;
      case o6.ArrowRight:
      case o6.ArrowDown:
        if (e7.preventDefault(), e7.stopPropagation(), I2(f11, L.Next | L.WrapAround) === N.Success) {
          let y4 = a6.find((j5) => j5.element.current === (o10 == null ? void 0 : o10.activeElement));
          y4 && u8(y4.propsRef.current.value);
        }
        break;
      case o6.Space:
        {
          e7.preventDefault(), e7.stopPropagation();
          let p7 = a6.find((y4) => y4.element.current === (o10 == null ? void 0 : o10.activeElement));
          p7 && u8(p7.propsRef.current.value);
        }
        break;
    }
  }), w4 = o2((e7) => (F10({ type: 0, ...e7 }), () => F10({ type: 1, id: e7.id }))), R2 = (0, import_react36.useMemo)(() => ({ value: l9, firstOption: s16, containsCheckedOption: b5, disabled: h9, compare: T8, ...k3 }), [l9, s16, b5, h9, T8, k3]), S5 = (0, import_react36.useMemo)(() => ({ registerOption: w4, change: u8 }), [w4, u8]), ae3 = { ref: W3, id: c6, role: "radiogroup", "aria-labelledby": M8, "aria-describedby": m12, onKeyDown: K7 }, le6 = (0, import_react36.useMemo)(() => ({ value: l9 }), [l9]), _3 = (0, import_react36.useRef)(null), pe3 = p();
  return (0, import_react36.useEffect)(() => {
    !_3.current || O2 !== void 0 && pe3.addEventListener(_3.current, "reset", () => {
      u8(O2);
    });
  }, [_3, u8]), import_react36.default.createElement(L5, { name: "RadioGroup.Description" }, import_react36.default.createElement(N3, { name: "RadioGroup.Label" }, import_react36.default.createElement(V2.Provider, { value: S5 }, import_react36.default.createElement($4.Provider, { value: R2 }, I6 != null && l9 != null && e4({ [I6]: l9 }).map(([e7, i7], o10) => import_react36.default.createElement(h2, { features: s8.Hidden, ref: o10 === 0 ? (f11) => {
    var p7;
    _3.current = (p7 = f11 == null ? void 0 : f11.closest("form")) != null ? p7 : null;
  } : void 0, ...F3({ key: e7, as: "input", type: "radio", checked: i7 != null, hidden: true, readOnly: true, name: e7, value: i7 }) })), $({ ourProps: ae3, theirProps: U6, slot: le6, defaultTag: Le4, name: "RadioGroup" })))));
});
var xe5 = ((t10) => (t10[t10.Empty = 1] = "Empty", t10[t10.Active = 2] = "Active", t10))(xe5 || {});
var we4 = "div";
var Ie3 = C(function(r8, t10) {
  var w4;
  let d10 = I(), { id: c6 = `headlessui-radiogroup-option-${d10}`, value: D4, disabled: O2 = false, ...I6 } = r8, E8 = (0, import_react36.useRef)(null), G5 = y(E8, t10), [h9, U6] = M3(), [T8, k3] = k(), { addFlag: F10, removeFlag: a6, hasFlag: M8 } = b2(1), N3 = s2({ value: D4, disabled: O2 }), m12 = ne5("RadioGroup.Option"), L5 = ie3("RadioGroup.Option");
  s(() => L5.registerOption({ id: c6, element: E8, propsRef: N3 }), [c6, L5, E8, r8]);
  let C4 = o2((R2) => {
    var S5;
    if (r3(R2.currentTarget))
      return R2.preventDefault();
    !L5.change(D4) || (F10(2), (S5 = E8.current) == null || S5.focus());
  }), W3 = o2((R2) => {
    if (r3(R2.currentTarget))
      return R2.preventDefault();
    F10(2);
  }), l9 = o2(() => a6(2)), x7 = ((w4 = m12.firstOption) == null ? void 0 : w4.id) === c6, s16 = m12.disabled || O2, b5 = m12.compare(m12.value, D4), u8 = { ref: G5, id: c6, role: "radio", "aria-checked": b5 ? "true" : "false", "aria-labelledby": h9, "aria-describedby": T8, "aria-disabled": s16 ? true : void 0, tabIndex: (() => s16 ? -1 : b5 || !m12.containsCheckedOption && x7 ? 0 : -1)(), onClick: s16 ? void 0 : C4, onFocus: s16 ? void 0 : W3, onBlur: s16 ? void 0 : l9 }, K7 = (0, import_react36.useMemo)(() => ({ checked: b5, disabled: s16, active: M8(2) }), [b5, s16, M8]);
  return import_react36.default.createElement(k3, { name: "RadioGroup.Description" }, import_react36.default.createElement(U6, { name: "RadioGroup.Label" }, $({ ourProps: u8, theirProps: I6, slot: K7, defaultTag: we4, name: "RadioGroup.Option" })));
});
var ut = Object.assign(Ce3, { Option: Ie3, Label: F7, Description: F5 });

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react37 = __toESM(require_react(), 1);
var b4 = (0, import_react37.createContext)(null);
b4.displayName = "GroupContext";
var Y2 = import_react37.Fragment;
function Z4(y4) {
  let [t10, a6] = (0, import_react37.useState)(null), [s16, m12] = M3(), [c6, o10] = k(), p7 = (0, import_react37.useMemo)(() => ({ switch: t10, setSwitch: a6, labelledby: s16, describedby: c6 }), [t10, a6, s16, c6]), d10 = {}, h9 = y4;
  return import_react37.default.createElement(o10, { name: "Switch.Description" }, import_react37.default.createElement(m12, { name: "Switch.Label", props: { onClick() {
    !t10 || (t10.click(), t10.focus({ preventScroll: true }));
  } } }, import_react37.default.createElement(b4.Provider, { value: p7 }, $({ ourProps: d10, theirProps: h9, defaultTag: Y2, name: "Switch.Group" }))));
}
var ee3 = "button";
var te4 = C(function(t10, a6) {
  let s16 = I(), { id: m12 = `headlessui-switch-${s16}`, checked: c6, defaultChecked: o10 = false, onChange: p7, name: d10, value: h9, ...v5 } = t10, r8 = (0, import_react37.useContext)(b4), u8 = (0, import_react37.useRef)(null), k3 = y(u8, a6, r8 === null ? null : r8.setSwitch), [n3, i7] = T4(c6, p7, o10), T8 = o2(() => i7 == null ? void 0 : i7(!n3)), g4 = o2((e7) => {
    if (r3(e7.currentTarget))
      return e7.preventDefault();
    e7.preventDefault(), T8();
  }), C4 = o2((e7) => {
    e7.key === o6.Space ? (e7.preventDefault(), T8()) : e7.key === o6.Enter && p3(e7.currentTarget);
  }), D4 = o2((e7) => e7.preventDefault()), L5 = (0, import_react37.useMemo)(() => ({ checked: n3 }), [n3]), R2 = { id: m12, ref: k3, role: "switch", type: s6(t10, u8), tabIndex: 0, "aria-checked": n3, "aria-labelledby": r8 == null ? void 0 : r8.labelledby, "aria-describedby": r8 == null ? void 0 : r8.describedby, onClick: g4, onKeyUp: C4, onKeyPress: D4 }, A6 = p();
  return (0, import_react37.useEffect)(() => {
    var E8;
    let e7 = (E8 = u8.current) == null ? void 0 : E8.closest("form");
    !e7 || o10 !== void 0 && A6.addEventListener(e7, "reset", () => {
      i7(o10);
    });
  }, [u8, i7]), import_react37.default.createElement(import_react37.default.Fragment, null, d10 != null && n3 && import_react37.default.createElement(h2, { features: s8.Hidden, ...F3({ as: "input", type: "checkbox", hidden: true, readOnly: true, checked: n3, name: d10, value: h9 }) }), $({ ourProps: R2, theirProps: v5, slot: L5, defaultTag: ee3, name: "Switch" }));
});
var Pe = Object.assign(te4, { Group: Z4, Label: F7, Description: F5 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react38 = __toESM(require_react(), 1);
function p6({ onFocus: n3 }) {
  let [r8, o10] = (0, import_react38.useState)(true);
  return r8 ? import_react38.default.createElement(h2, { as: "button", type: "button", features: s8.Focusable, onFocus: (a6) => {
    a6.preventDefault();
    let e7, u8 = 50;
    function t10() {
      if (u8-- <= 0) {
        e7 && cancelAnimationFrame(e7);
        return;
      }
      if (n3()) {
        o10(false), cancelAnimationFrame(e7);
        return;
      }
      e7 = requestAnimationFrame(t10);
    }
    e7 = requestAnimationFrame(t10);
  } }) : null;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var pe2 = ((n3) => (n3[n3.SetSelectedIndex = 0] = "SetSelectedIndex", n3[n3.RegisterTab = 1] = "RegisterTab", n3[n3.UnregisterTab = 2] = "UnregisterTab", n3[n3.RegisterPanel = 3] = "RegisterPanel", n3[n3.UnregisterPanel = 4] = "UnregisterPanel", n3))(pe2 || {});
var fe3 = { [0](e7, t10) {
  let r8 = e7.tabs.filter((c6) => {
    var s16;
    return !((s16 = c6.current) != null && s16.hasAttribute("disabled"));
  });
  if (t10.index < 0)
    return { ...e7, selectedIndex: e7.tabs.indexOf(r8[0]) };
  if (t10.index > e7.tabs.length)
    return { ...e7, selectedIndex: e7.tabs.indexOf(r8[r8.length - 1]) };
  let i7 = e7.tabs.slice(0, t10.index), n3 = [...e7.tabs.slice(t10.index), ...i7].find((c6) => r8.includes(c6));
  return n3 ? { ...e7, selectedIndex: e7.tabs.indexOf(n3) } : e7;
}, [1](e7, t10) {
  var n3;
  if (e7.tabs.includes(t10.tab))
    return e7;
  let r8 = e7.tabs[e7.selectedIndex], i7 = A([...e7.tabs, t10.tab], (c6) => c6.current), o10 = (n3 = i7.indexOf(r8)) != null ? n3 : e7.selectedIndex;
  return o10 === -1 && (o10 = e7.selectedIndex), { ...e7, tabs: i7, selectedIndex: o10 };
}, [2](e7, t10) {
  return { ...e7, tabs: e7.tabs.filter((r8) => r8 !== t10.tab) };
}, [3](e7, t10) {
  return e7.panels.includes(t10.panel) ? e7 : { ...e7, panels: A([...e7.panels, t10.panel], (r8) => r8.current) };
}, [4](e7, t10) {
  return { ...e7, panels: e7.panels.filter((r8) => r8 !== t10.panel) };
} };
var q6 = (0, import_react39.createContext)(null);
q6.displayName = "TabsSSRContext";
function J7(e7) {
  let t10 = (0, import_react39.useContext)(q6);
  if (t10 === null) {
    let r8 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, J7), r8;
  }
  return t10;
}
var Q3 = (0, import_react39.createContext)(null);
Q3.displayName = "TabsDataContext";
function M5(e7) {
  let t10 = (0, import_react39.useContext)(Q3);
  if (t10 === null) {
    let r8 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, M5), r8;
  }
  return t10;
}
var X5 = (0, import_react39.createContext)(null);
X5.displayName = "TabsActionsContext";
function Y3(e7) {
  let t10 = (0, import_react39.useContext)(X5);
  if (t10 === null) {
    let r8 = new Error(`<${e7} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r8, Y3), r8;
  }
  return t10;
}
function be3(e7, t10) {
  return u2(t10.type, fe3, e7, t10);
}
var Te4 = import_react39.Fragment;
var me4 = C(function(t10, r8) {
  let { defaultIndex: i7 = 0, vertical: o10 = false, manual: n3 = false, onChange: c6, selectedIndex: s16 = null, ...L5 } = t10;
  const g4 = o10 ? "vertical" : "horizontal", A6 = n3 ? "manual" : "auto";
  let d10 = s16 !== null, v5 = y(r8), [p7, l9] = (0, import_react39.useReducer)(be3, { selectedIndex: s16 != null ? s16 : i7, tabs: [], panels: [] }), P6 = (0, import_react39.useMemo)(() => ({ selectedIndex: p7.selectedIndex }), [p7.selectedIndex]), E8 = s2(c6 || (() => {
  })), f11 = s2(p7.tabs), b5 = (0, import_react39.useMemo)(() => ({ orientation: g4, activation: A6, ...p7 }), [g4, A6, p7]), y4 = o2((u8) => (l9({ type: 1, tab: u8 }), () => l9({ type: 2, tab: u8 }))), I6 = o2((u8) => (l9({ type: 3, panel: u8 }), () => l9({ type: 4, panel: u8 }))), R2 = o2((u8) => {
    k3.current !== u8 && E8.current(u8), d10 || l9({ type: 0, index: u8 });
  }), k3 = s2(d10 ? t10.selectedIndex : p7.selectedIndex), G5 = (0, import_react39.useMemo)(() => ({ registerTab: y4, registerPanel: I6, change: R2 }), []);
  s(() => {
    l9({ type: 0, index: s16 != null ? s16 : i7 });
  }, [s16]);
  let j5 = (0, import_react39.useRef)({ tabs: [], panels: [] }), W3 = { ref: v5 };
  return import_react39.default.createElement(q6.Provider, { value: j5 }, import_react39.default.createElement(X5.Provider, { value: G5 }, import_react39.default.createElement(Q3.Provider, { value: b5 }, b5.tabs.length <= 0 && import_react39.default.createElement(p6, { onFocus: () => {
    var u8, C4;
    for (let a6 of f11.current)
      if (((u8 = a6.current) == null ? void 0 : u8.tabIndex) === 0)
        return (C4 = a6.current) == null || C4.focus(), true;
    return false;
  } }), $({ ourProps: W3, theirProps: L5, slot: P6, defaultTag: Te4, name: "Tabs" }))));
});
var Pe2 = "div";
var xe6 = C(function(t10, r8) {
  let { orientation: i7, selectedIndex: o10 } = M5("Tab.List"), n3 = y(r8);
  return $({ ourProps: { ref: n3, role: "tablist", "aria-orientation": i7 }, theirProps: t10, slot: { selectedIndex: o10 }, defaultTag: Pe2, name: "Tabs.List" });
});
var ge3 = "button";
var ye3 = C(function(t10, r8) {
  var u8, C4;
  let i7 = I(), { id: o10 = `headlessui-tabs-tab-${i7}`, ...n3 } = t10, { orientation: c6, activation: s16, selectedIndex: L5, tabs: g4, panels: A6 } = M5("Tab"), d10 = Y3("Tab"), v5 = M5("Tab"), p7 = J7("Tab"), l9 = (0, import_react39.useRef)(null), P6 = y(l9, r8);
  s(() => d10.registerTab(l9), [d10, l9]);
  let E8 = p7.current.tabs.indexOf(o10);
  E8 === -1 && (E8 = p7.current.tabs.push(o10) - 1);
  let f11 = g4.indexOf(l9);
  f11 === -1 && (f11 = E8);
  let b5 = f11 === L5, y4 = o2((a6) => {
    var N3;
    let x7 = a6();
    if (x7 === N.Success && s16 === "auto") {
      let B4 = (N3 = e3(l9)) == null ? void 0 : N3.activeElement, Z5 = v5.tabs.findIndex((ae3) => ae3.current === B4);
      Z5 !== -1 && d10.change(Z5);
    }
    return x7;
  }), I6 = o2((a6) => {
    let x7 = g4.map((B4) => B4.current).filter(Boolean);
    if (a6.key === o6.Space || a6.key === o6.Enter) {
      a6.preventDefault(), a6.stopPropagation(), d10.change(f11);
      return;
    }
    switch (a6.key) {
      case o6.Home:
      case o6.PageUp:
        return a6.preventDefault(), a6.stopPropagation(), y4(() => I2(x7, L.First));
      case o6.End:
      case o6.PageDown:
        return a6.preventDefault(), a6.stopPropagation(), y4(() => I2(x7, L.Last));
    }
    if (y4(() => u2(c6, { vertical() {
      return a6.key === o6.ArrowUp ? I2(x7, L.Previous | L.WrapAround) : a6.key === o6.ArrowDown ? I2(x7, L.Next | L.WrapAround) : N.Error;
    }, horizontal() {
      return a6.key === o6.ArrowLeft ? I2(x7, L.Previous | L.WrapAround) : a6.key === o6.ArrowRight ? I2(x7, L.Next | L.WrapAround) : N.Error;
    } })) === N.Success)
      return a6.preventDefault();
  }), R2 = (0, import_react39.useRef)(false), k3 = o2(() => {
    var a6;
    R2.current || (R2.current = true, (a6 = l9.current) == null || a6.focus(), d10.change(f11), t2(() => {
      R2.current = false;
    }));
  }), G5 = o2((a6) => {
    a6.preventDefault();
  }), j5 = (0, import_react39.useMemo)(() => ({ selected: b5 }), [b5]), W3 = { ref: P6, onKeyDown: I6, onMouseDown: G5, onClick: k3, id: o10, role: "tab", type: s6(t10, l9), "aria-controls": (C4 = (u8 = A6[f11]) == null ? void 0 : u8.current) == null ? void 0 : C4.id, "aria-selected": b5, tabIndex: b5 ? 0 : -1 };
  return $({ ourProps: W3, theirProps: n3, slot: j5, defaultTag: ge3, name: "Tabs.Tab" });
});
var Re2 = "div";
var Ae3 = C(function(t10, r8) {
  let { selectedIndex: i7 } = M5("Tab.Panels"), o10 = y(r8), n3 = (0, import_react39.useMemo)(() => ({ selectedIndex: i7 }), [i7]);
  return $({ ourProps: { ref: o10 }, theirProps: t10, slot: n3, defaultTag: Re2, name: "Tabs.Panels" });
});
var Ee = "div";
var Se3 = S2.RenderStrategy | S2.Static;
var Le5 = C(function(t10, r8) {
  var b5, y4, I6, R2;
  let i7 = I(), { id: o10 = `headlessui-tabs-panel-${i7}`, ...n3 } = t10, { selectedIndex: c6, tabs: s16, panels: L5 } = M5("Tab.Panel"), g4 = Y3("Tab.Panel"), A6 = J7("Tab.Panel"), d10 = (0, import_react39.useRef)(null), v5 = y(d10, r8);
  s(() => g4.registerPanel(d10), [g4, d10]);
  let p7 = A6.current.panels.indexOf(o10);
  p7 === -1 && (p7 = A6.current.panels.push(o10) - 1);
  let l9 = L5.indexOf(d10);
  l9 === -1 && (l9 = p7);
  let P6 = l9 === c6, E8 = (0, import_react39.useMemo)(() => ({ selected: P6 }), [P6]), f11 = { ref: v5, id: o10, role: "tabpanel", "aria-labelledby": (y4 = (b5 = s16[l9]) == null ? void 0 : b5.current) == null ? void 0 : y4.id, tabIndex: P6 ? 0 : -1 };
  return !P6 && ((I6 = n3.unmount) != null ? I6 : true) && !((R2 = n3.static) != null && R2) ? import_react39.default.createElement(h2, { as: "span", ...f11 }) : $({ ourProps: f11, theirProps: n3, slot: E8, defaultTag: Ee, features: Se3, visible: P6, name: "Tabs.Panel" });
});
var Je3 = Object.assign(ye3, { Group: me4, List: xe6, Panels: Ae3, Panel: Le5 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l8(r8) {
  let e7 = { called: false };
  return (...t10) => {
    if (!e7.called)
      return e7.called = true, r8(...t10);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function v4(t10, ...e7) {
  t10 && e7.length > 0 && t10.classList.add(...e7);
}
function f10(t10, ...e7) {
  t10 && e7.length > 0 && t10.classList.remove(...e7);
}
function F9(t10, e7) {
  let n3 = m();
  if (!t10)
    return n3.dispose;
  let { transitionDuration: a6, transitionDelay: i7 } = getComputedStyle(t10), [m12, d10] = [a6, i7].map((o10) => {
    let [r8 = 0] = o10.split(",").filter(Boolean).map((l9) => l9.includes("ms") ? parseFloat(l9) : parseFloat(l9) * 1e3).sort((l9, g4) => g4 - l9);
    return r8;
  });
  if (m12 + d10 !== 0) {
    let o10 = n3.addEventListener(t10, "transitionend", (r8) => {
      r8.target === r8.currentTarget && (e7(), o10());
    });
  } else
    e7();
  return n3.add(() => e7()), n3.dispose;
}
function M6(t10, e7, n3, a6) {
  let i7 = n3 ? "enter" : "leave", m12 = m(), d10 = a6 !== void 0 ? l8(a6) : () => {
  };
  i7 === "enter" && (t10.removeAttribute("hidden"), t10.style.display = "");
  let u8 = u2(i7, { enter: () => e7.enter, leave: () => e7.leave }), o10 = u2(i7, { enter: () => e7.enterTo, leave: () => e7.leaveTo }), r8 = u2(i7, { enter: () => e7.enterFrom, leave: () => e7.leaveFrom });
  return f10(t10, ...e7.enter, ...e7.enterTo, ...e7.enterFrom, ...e7.leave, ...e7.leaveFrom, ...e7.leaveTo, ...e7.entered), v4(t10, ...u8, ...r8), m12.nextFrame(() => {
    f10(t10, ...r8), v4(t10, ...o10), F9(t10, () => (f10(t10, ...u8), v4(t10, ...e7.entered), d10()));
  }), m12.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D3({ container: i7, direction: t10, classes: o10, onStart: s16, onStop: u8 }) {
  let a6 = f7(), c6 = p(), r8 = s2(t10);
  s(() => {
    let e7 = m();
    c6.add(e7.dispose);
    let n3 = i7.current;
    if (!!n3 && r8.current !== "idle" && !!a6.current)
      return e7.dispose(), s16.current(r8.current), e7.add(M6(n3, o10.current, r8.current === "enter", () => {
        e7.dispose(), u8.current(r8.current);
      })), e7.dispose;
  }, [t10]);
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function e6(...n3) {
  return n3.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function P5(i7 = "") {
  return i7.split(" ").filter((e7) => e7.trim().length > 1);
}
var A5 = (0, import_react40.createContext)(null);
A5.displayName = "TransitionContext";
var Ce4 = ((s16) => (s16.Visible = "visible", s16.Hidden = "hidden", s16))(Ce4 || {});
function ge4() {
  let i7 = (0, import_react40.useContext)(A5);
  if (i7 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i7;
}
function be4() {
  let i7 = (0, import_react40.useContext)(M7);
  if (i7 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return i7;
}
var M7 = (0, import_react40.createContext)(null);
M7.displayName = "NestingContext";
function I5(i7) {
  return "children" in i7 ? I5(i7.children) : i7.current.filter(({ el: e7 }) => e7.current !== null).filter(({ state: e7 }) => e7 === "visible").length > 0;
}
function ne6(i7, e7) {
  let s16 = s2(i7), n3 = (0, import_react40.useRef)([]), m12 = f7(), R2 = p(), b5 = o2((l9, r8 = j.Hidden) => {
    let t10 = n3.current.findIndex(({ el: o10 }) => o10 === l9);
    t10 !== -1 && (u2(r8, { [j.Unmount]() {
      n3.current.splice(t10, 1);
    }, [j.Hidden]() {
      n3.current[t10].state = "hidden";
    } }), R2.microTask(() => {
      var o10;
      !I5(n3) && m12.current && ((o10 = s16.current) == null || o10.call(s16));
    }));
  }), E8 = o2((l9) => {
    let r8 = n3.current.find(({ el: t10 }) => t10 === l9);
    return r8 ? r8.state !== "visible" && (r8.state = "visible") : n3.current.push({ el: l9, state: "visible" }), () => b5(l9, j.Unmount);
  }), S5 = (0, import_react40.useRef)([]), u8 = (0, import_react40.useRef)(Promise.resolve()), p7 = (0, import_react40.useRef)({ enter: [], leave: [], idle: [] }), d10 = o2((l9, r8, t10) => {
    S5.current.splice(0), e7 && (e7.chains.current[r8] = e7.chains.current[r8].filter(([o10]) => o10 !== l9)), e7 == null || e7.chains.current[r8].push([l9, new Promise((o10) => {
      S5.current.push(o10);
    })]), e7 == null || e7.chains.current[r8].push([l9, new Promise((o10) => {
      Promise.all(p7.current[r8].map(([f11, a6]) => a6)).then(() => o10());
    })]), r8 === "enter" ? u8.current = u8.current.then(() => e7 == null ? void 0 : e7.wait.current).then(() => t10(r8)) : t10(r8);
  }), v5 = o2((l9, r8, t10) => {
    Promise.all(p7.current[r8].splice(0).map(([o10, f11]) => f11)).then(() => {
      var o10;
      (o10 = S5.current.shift()) == null || o10();
    }).then(() => t10(r8));
  });
  return (0, import_react40.useMemo)(() => ({ children: n3, register: E8, unregister: b5, onStart: d10, onStop: v5, wait: u8, chains: p7 }), [E8, b5, n3, d10, v5, p7, u8]);
}
function Ee2() {
}
var Se4 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re4(i7) {
  var s16;
  let e7 = {};
  for (let n3 of Se4)
    e7[n3] = (s16 = i7[n3]) != null ? s16 : Ee2;
  return e7;
}
function xe7(i7) {
  let e7 = (0, import_react40.useRef)(re4(i7));
  return (0, import_react40.useEffect)(() => {
    e7.current = re4(i7);
  }, [i7]), e7;
}
var Pe3 = "div";
var ie4 = S2.RenderStrategy;
var oe3 = C(function(e7, s16) {
  let { beforeEnter: n3, afterEnter: m12, beforeLeave: R2, afterLeave: b5, enter: E8, enterFrom: S5, enterTo: u8, entered: p7, leave: d10, leaveFrom: v5, leaveTo: l9, ...r8 } = e7, t10 = (0, import_react40.useRef)(null), o10 = y(t10, s16), f11 = r8.unmount ? j.Unmount : j.Hidden, { show: a6, appear: x7, initial: se3 } = ge4(), [h9, _3] = (0, import_react40.useState)(a6 ? "visible" : "hidden"), K7 = be4(), { register: D4, unregister: V3 } = K7, j5 = (0, import_react40.useRef)(null);
  (0, import_react40.useEffect)(() => D4(t10), [D4, t10]), (0, import_react40.useEffect)(() => {
    if (f11 === j.Hidden && !!t10.current) {
      if (a6 && h9 !== "visible") {
        _3("visible");
        return;
      }
      return u2(h9, { ["hidden"]: () => V3(t10), ["visible"]: () => D4(t10) });
    }
  }, [h9, t10, D4, V3, a6, f11]);
  let U6 = s2({ enter: P5(E8), enterFrom: P5(S5), enterTo: P5(u8), entered: P5(p7), leave: P5(d10), leaveFrom: P5(v5), leaveTo: P5(l9) }), w4 = xe7({ beforeEnter: n3, afterEnter: m12, beforeLeave: R2, afterLeave: b5 }), k3 = a2();
  (0, import_react40.useEffect)(() => {
    if (k3 && h9 === "visible" && t10.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [t10, h9, k3]);
  let G5 = se3 && !x7, le6 = (() => !k3 || G5 || j5.current === a6 ? "idle" : a6 ? "enter" : "leave")(), ae3 = o2((C4) => u2(C4, { enter: () => w4.current.beforeEnter(), leave: () => w4.current.beforeLeave(), idle: () => {
  } })), ue3 = o2((C4) => u2(C4, { enter: () => w4.current.afterEnter(), leave: () => w4.current.afterLeave(), idle: () => {
  } })), L5 = ne6(() => {
    _3("hidden"), V3(t10);
  }, K7);
  D3({ container: t10, classes: U6, direction: le6, onStart: s2((C4) => {
    L5.onStart(t10, C4, ae3);
  }), onStop: s2((C4) => {
    L5.onStop(t10, C4, ue3), C4 === "leave" && !I5(L5) && (_3("hidden"), V3(t10));
  }) }), (0, import_react40.useEffect)(() => {
    !G5 || (f11 === j.Hidden ? j5.current = null : j5.current = a6);
  }, [a6, G5, h9]);
  let B4 = r8, de3 = { ref: o10 };
  return x7 && a6 && (typeof window == "undefined" || typeof document == "undefined") && (B4 = { ...B4, className: e6(r8.className, ...U6.current.enter, ...U6.current.enterFrom) }), import_react40.default.createElement(M7.Provider, { value: L5 }, import_react40.default.createElement(C2, { value: u2(h9, { ["visible"]: p4.Open, ["hidden"]: p4.Closed }) }, $({ ourProps: de3, theirProps: B4, defaultTag: Pe3, features: ie4, visible: h9 === "visible", name: "Transition.Child" })));
});
var J8 = C(function(e7, s16) {
  let { show: n3, appear: m12 = false, unmount: R2, ...b5 } = e7, E8 = (0, import_react40.useRef)(null), S5 = y(E8, s16);
  a2();
  let u8 = s9();
  if (n3 === void 0 && u8 !== null && (n3 = u2(u8, { [p4.Open]: true, [p4.Closed]: false })), ![true, false].includes(n3))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p7, d10] = (0, import_react40.useState)(n3 ? "visible" : "hidden"), v5 = ne6(() => {
    d10("hidden");
  }), [l9, r8] = (0, import_react40.useState)(true), t10 = (0, import_react40.useRef)([n3]);
  s(() => {
    l9 !== false && t10.current[t10.current.length - 1] !== n3 && (t10.current.push(n3), r8(false));
  }, [t10, n3]);
  let o10 = (0, import_react40.useMemo)(() => ({ show: n3, appear: m12, initial: l9 }), [n3, m12, l9]);
  (0, import_react40.useEffect)(() => {
    if (n3)
      d10("visible");
    else if (!I5(v5))
      d10("hidden");
    else {
      let a6 = E8.current;
      if (!a6)
        return;
      let x7 = a6.getBoundingClientRect();
      x7.x === 0 && x7.y === 0 && x7.width === 0 && x7.height === 0 && d10("hidden");
    }
  }, [n3, v5]);
  let f11 = { unmount: R2 };
  return import_react40.default.createElement(M7.Provider, { value: v5 }, import_react40.default.createElement(A5.Provider, { value: o10 }, $({ ourProps: { ...f11, as: import_react40.Fragment, children: import_react40.default.createElement(oe3, { ref: S5, ...f11, ...b5 }) }, theirProps: {}, defaultTag: import_react40.Fragment, features: ie4, visible: p7 === "visible", name: "Transition" })));
});
var ye4 = C(function(e7, s16) {
  let n3 = (0, import_react40.useContext)(A5) !== null, m12 = s9() !== null;
  return import_react40.default.createElement(import_react40.default.Fragment, null, !n3 && m12 ? import_react40.default.createElement(J8, { ref: s16, ...e7 }) : import_react40.default.createElement(oe3, { ref: s16, ...e7 }));
});
var Je4 = Object.assign(J8, { Child: ye4, Root: J8 });
export {
  ko as Combobox,
  mt as Dialog,
  Le2 as Disclosure,
  de as FocusTrap,
  Mt as Listbox,
  Ze3 as Menu,
  St as Popover,
  $3 as Portal,
  ut as RadioGroup,
  Pe as Switch,
  Je3 as Tab,
  Je4 as Transition
};
//# sourceMappingURL=@headlessui_react.js.map
