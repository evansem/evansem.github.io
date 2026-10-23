(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    88653,
    (t) => {
      var e = t.i(43476),
        i = t.i(71645),
        n = t.i(31178),
        s = t.i(47414),
        r = t.i(74008),
        o = t.i(21476),
        a = t.i(72846),
        l = i,
        h = t.i(13383);
      function u(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      class c extends l.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if ((0, a.f)(e) && t.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
            let t = e.offsetParent,
              i = ((0, a.f)(t) && t.offsetWidth) || 0,
              n = ((0, a.f)(t) && t.offsetHeight) || 0,
              s = getComputedStyle(e),
              r = this.props.sizeRef.current;
            ((r.height = parseFloat(s.height)),
              (r.width = parseFloat(s.width)),
              (r.top = e.offsetTop),
              (r.left = e.offsetLeft),
              (r.right = i - r.width - r.left),
              (r.bottom = n - r.height - r.top),
              (r.direction = s.direction));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: t, isPresent: n, anchorX: s, anchorY: r, root: o, pop: a }) {
        let p = (0, l.useId)(),
          f = (0, l.useRef)(null),
          m = (0, l.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
          { nonce: g } = (0, l.useContext)(h.f),
          y = (function (...t) {
            return i.useCallback(
              (function (...t) {
                return (e) => {
                  let i = !1,
                    n = t.map((t) => {
                      let n = u(t, e);
                      return (i || "function" != typeof n || (i = !0), n);
                    });
                  if (i)
                    return () => {
                      for (let e = 0; e < n.length; e++) {
                        let i = n[e];
                        "function" == typeof i ? i() : u(t[e], null);
                      }
                    };
                };
              })(...t),
              t,
            );
          })(f, !1 !== a ? (t.props?.ref ?? t?.ref) : void 0);
        return (
          (0, l.useInsertionEffect)(() => {
            let { width: t, height: e, top: i, left: l, right: h, bottom: u, direction: c } = m.current;
            if (n || !1 === a || !f.current || !t || !e) return;
            let d = "rtl" === c,
              y = "left" === s ? (d ? `right: ${h}` : `left: ${l}`) : d ? `left: ${l}` : `right: ${h}`,
              v = "bottom" === r ? `bottom: ${u}` : `top: ${i}`,
              x = f.current;
            x.dataset.motionPopId = p;
            let w = x.ownerDocument,
              b = w.createElement("style");
            g && (b.nonce = g);
            let T = o ?? w.head;
            return (
              T.appendChild(b),
              b.sheet &&
                b.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${y}px !important;
            ${v}px !important;
          }
        `),
              () => {
                (f.current?.removeAttribute("data-motion-pop-id"), T.contains(b) && T.removeChild(b));
              }
            );
          }, [n]),
          (0, e.jsx)(c, {
            isPresent: n,
            childRef: f,
            sizeRef: m,
            pop: a,
            children: !1 === a ? t : l.cloneElement(t, { ref: y }),
          })
        );
      }
      let p = ({
        children: t,
        initial: n,
        isPresent: a,
        onExitComplete: l,
        custom: h,
        presenceAffectsLayout: u,
        mode: c,
        anchorX: p,
        anchorY: m,
        root: g,
      }) => {
        let y = (0, s.f)(f),
          v = (0, i.useId)(),
          x = (0, i.useRef)(a),
          w = (0, i.useRef)(l);
        (0, r.f)(() => {
          ((x.current = a), (w.current = l));
        });
        let b = !0,
          T = (0, i.useMemo)(
            () => (
              (b = !1),
              {
                id: v,
                initial: n,
                isPresent: a,
                custom: h,
                onExitComplete: (t) => {
                  for (let e of (y.set(t, !0), y.values())) if (!e) return;
                  l && l();
                },
                register: (t) => (
                  y.set(t, !1),
                  () => {
                    (y.delete(t), x.current || y.size || w.current?.());
                  }
                ),
              }
            ),
            [a, y, l],
          );
        return (
          u && b && (T = { ...T }),
          (0, i.useMemo)(() => {
            y.forEach((t, e) => y.set(e, !1));
          }, [a]),
          i.useEffect(() => {
            a || y.size || !l || l();
          }, [a]),
          (t = (0, e.jsx)(d, { pop: "popLayout" === c, isPresent: a, anchorX: p, anchorY: m, root: g, children: t })),
          (0, e.jsx)(o.f.Provider, { value: T, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var m = t.i(64978);
      let g = (t) => t.key || "";
      function y(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      t.s(
        [
          "f",
          0,
          ({
            children: t,
            custom: o,
            initial: a = !0,
            onExitComplete: l,
            presenceAffectsLayout: h = !0,
            mode: u = "sync",
            propagate: c = !1,
            anchorX: d = "left",
            anchorY: f = "top",
            root: v,
          }) => {
            let [x, w] = (0, m.f)(c),
              b = (0, i.useMemo)(() => y(t), [t]),
              T = c && !x ? [] : b.map(g),
              S = (0, i.useRef)(!0),
              A = (0, s.f)(() => new Map()),
              P = (0, i.useRef)(new Set()),
              [E, k] = (0, i.useState)(b),
              [M, C] = (0, i.useState)(b);
            ((0, r.f)(() => {
              !c || x || M.length || w?.();
            }, [x, c, M.length, w]),
              (0, r.f)(() => {
                S.current = !1;
                for (let t = 0; t < M.length; t++) {
                  let e = g(M[t]);
                  T.includes(e) ? (A.delete(e), P.current.delete(e)) : !0 !== A.get(e) && A.set(e, !1);
                }
              }, [M, T.length, T.join("-")]));
            let V = [];
            if (b !== E) {
              let t = [...b],
                e = 0;
              for (let i of M) {
                let n = T.indexOf(g(i));
                -1 === n ? (t.splice(e++, 0, i), V.push(i)) : (e = n + V.length + 1);
              }
              return (V.every((t) => A.get(g(t))) ? (t = b) : "wait" === u && (t = V), C(y(t)), k(b), null);
            }
            let { forceRender: j } = (0, i.useContext)(n.f);
            return (0, e.jsx)(e.Fragment, {
              children: M.map((t) => {
                let i = g(t),
                  n = (!c || !!x) && (b === M || T.includes(i));
                return (0, e.jsx)(
                  p,
                  {
                    isPresent: n,
                    initial: (!S.current || !!a) && void 0,
                    custom: o,
                    presenceAffectsLayout: h,
                    mode: u,
                    root: v,
                    onExitComplete: n
                      ? void 0
                      : () => {
                          if (P.current.has(i) || !A.has(i)) return;
                          (P.current.add(i), A.set(i, !0));
                          let t = !0;
                          (A.forEach((e) => {
                            e || (t = !1);
                          }),
                            t && (j?.(), k([]), c && w?.(), l && l()));
                        },
                    anchorX: d,
                    anchorY: f,
                    children: t,
                  },
                  i,
                );
              }),
            });
          },
        ],
        88653,
      );
    },
    31178,
    47414,
    74008,
    21476,
    72846,
    13383,
    64978,
    76959,
    83411,
    65566,
    60830,
    48940,
    87022,
    30551,
    79294,
    96173,
    60140,
    25791,
    86427,
    28409,
    83920,
    44230,
    68514,
    12008,
    44573,
    55560,
    49652,
    61327,
    85260,
    46932,
    (t) => {
      let e, i, n;
      var s = t.i(71645);
      let r = (0, s.createContext)({});
      function o(t) {
        let e = (0, s.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
      (t.s(["f", 0, r], 31178), t.s(["f", 0, o], 47414));
      let a = "u" > typeof window ? s.useLayoutEffect : s.useEffect;
      t.s(["f", 0, a], 74008);
      let l = (0, s.createContext)(null);
      t.s(["f", 0, l], 21476);
      let h = (t) => "object" == typeof t && null !== t;
      function u(t) {
        return h(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
      }
      t.s(["f", 0, u], 72846);
      let c = (0, s.createContext)({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
      function d(t = !0) {
        let e = (0, s.useContext)(l);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: n, register: r } = e,
          o = (0, s.useId)();
        (0, s.useEffect)(() => {
          if (t) return r(o);
        }, [t]);
        let a = (0, s.useCallback)(() => t && n && n(o), [o, n, t]);
        return !i && n ? [!1, a] : [!0];
      }
      (t.s(["f", 0, c], 13383), t.s(["f", 0, d], 64978));
      let p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        f = new Set([...p, "pathRotation"]),
        m = (t, e, i) => (i > e ? e : i < t ? t : i);
      t.s(["f", 0, m], 76959);
      let g = { test: (t) => "number" == typeof t, parse: parseFloat, transform: (t) => t },
        y = { ...g, transform: (t) => m(0, 1, t) },
        v = { ...g, default: 1 },
        x = (t) => Math.round(1e5 * t) / 1e5,
        w = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        b =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        T = (t, e) => (i) =>
          !!(
            ("string" == typeof i && b.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        S = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, r, o, a] = n.match(w);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        A = { ...g, transform: (t) => Math.round(m(0, 255, t)) },
        P = {
          test: T("rgb", "red"),
          parse: S("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" + A.transform(t) + ", " + A.transform(e) + ", " + A.transform(i) + ", " + x(y.transform(n)) + ")",
        },
        E = {
          test: T("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              s = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)), (i = t.substring(3, 5)), (n = t.substring(5, 7)), (s = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (s = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (s += s)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: P.transform,
        },
        k = (t) => ({
          test: (e) => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        M = k("deg"),
        C = k("%"),
        V = k("px"),
        j = k("vh"),
        D = k("vw"),
        R = { ...C, parse: (t) => C.parse(t) / 100, transform: (t) => C.transform(100 * t) },
        L = {
          test: T("hsl", "hue"),
          parse: S("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            C.transform(x(e)) +
            ", " +
            C.transform(x(i)) +
            ", " +
            x(y.transform(n)) +
            ")",
        },
        B = {
          test: (t) => P.test(t) || E.test(t) || L.test(t),
          parse: (t) => (P.test(t) ? P.parse(t) : L.test(t) ? L.parse(t) : E.parse(t)),
          transform: (t) => ("string" == typeof t ? t : t.hasOwnProperty("red") ? P.transform(t) : L.transform(t)),
          getAnimatableNone: (t) => {
            let e = B.parse(t);
            return ((e.alpha = 0), B.transform(e));
          },
        },
        F = new RegExp(w.source),
        I = RegExp(
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
            .source,
          "i",
        ),
        O = "number",
        N = "color",
        $ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
      function U(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          r = 0,
          o = e
            .replace(
              $,
              (t) => (
                B.test(t)
                  ? (n.color.push(r), s.push(N), i.push(B.parse(t)))
                  : t.startsWith("var(")
                    ? (n.var.push(r), s.push("var"), i.push(t))
                    : (n.number.push(r), s.push(O), i.push(parseFloat(t))),
                ++r,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: s };
      }
      function W({ split: t, types: e }) {
        let i = t.length;
        return (n) => {
          let s = "";
          for (let r = 0; r < i; r++)
            if (((s += t[r]), void 0 !== n[r])) {
              let t = e[r];
              t === O ? (s += x(n[r])) : t === N ? (s += B.transform(n[r])) : (s += n[r]);
            }
          return s;
        };
      }
      let z = {
          test: function (t) {
            return isNaN(t) && "string" == typeof t && (F.test(t) || I.test(t));
          },
          parse: function (t) {
            return U(t).values;
          },
          createTransformer: function (t) {
            return W(U(t));
          },
          getAnimatableNone: function (t) {
            let e = U(t);
            return W(e)(
              e.values.map((t, i) =>
                ((t, e) =>
                  "number" == typeof t
                    ? e?.trim().endsWith("/")
                      ? t
                      : 0
                    : "number" == typeof t
                      ? 0
                      : B.test(t)
                        ? B.getAnimatableNone(t)
                        : t)(t, e.split[i]),
              ),
            );
          },
        },
        Y = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function H(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(w) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = +!!Y.has(e);
        return (n !== i && (r *= 100), e + "(" + r + s + ")");
      }
      let X = /\b([a-z-]*)\(.*?\)/gu,
        K = {
          ...z,
          getAnimatableNone: (t) => {
            let e = t.match(X);
            return e ? e.map(H).join(" ") : t;
          },
        },
        _ = {
          ...z,
          getAnimatableNone: (t) => {
            let e = z.parse(t);
            return z.createTransformer(t)(
              e.map((t) => ("number" == typeof t ? 0 : "object" == typeof t ? { ...t, alpha: 1 } : t)),
            );
          },
        },
        G = { ...g, transform: Math.round },
        q = {
          borderWidth: V,
          borderTopWidth: V,
          borderRightWidth: V,
          borderBottomWidth: V,
          borderLeftWidth: V,
          borderRadius: V,
          borderTopLeftRadius: V,
          borderTopRightRadius: V,
          borderBottomRightRadius: V,
          borderBottomLeftRadius: V,
          width: V,
          maxWidth: V,
          height: V,
          maxHeight: V,
          top: V,
          right: V,
          bottom: V,
          left: V,
          inset: V,
          insetBlock: V,
          insetBlockStart: V,
          insetBlockEnd: V,
          insetInline: V,
          insetInlineStart: V,
          insetInlineEnd: V,
          padding: V,
          paddingTop: V,
          paddingRight: V,
          paddingBottom: V,
          paddingLeft: V,
          paddingBlock: V,
          paddingBlockStart: V,
          paddingBlockEnd: V,
          paddingInline: V,
          paddingInlineStart: V,
          paddingInlineEnd: V,
          margin: V,
          marginTop: V,
          marginRight: V,
          marginBottom: V,
          marginLeft: V,
          marginBlock: V,
          marginBlockStart: V,
          marginBlockEnd: V,
          marginInline: V,
          marginInlineStart: V,
          marginInlineEnd: V,
          fontSize: V,
          backgroundPositionX: V,
          backgroundPositionY: V,
          rotate: M,
          pathRotation: M,
          rotateX: M,
          rotateY: M,
          rotateZ: M,
          scale: v,
          scaleX: v,
          scaleY: v,
          scaleZ: v,
          skew: M,
          skewX: M,
          skewY: M,
          distance: V,
          translateX: V,
          translateY: V,
          translateZ: V,
          x: V,
          y: V,
          z: V,
          perspective: V,
          transformPerspective: V,
          opacity: y,
          originX: R,
          originY: R,
          originZ: V,
          zIndex: G,
          fillOpacity: y,
          strokeOpacity: y,
          numOctaves: G,
        },
        Z = {
          ...q,
          color: B,
          backgroundColor: B,
          outlineColor: B,
          fill: B,
          stroke: B,
          borderColor: B,
          borderTopColor: B,
          borderRightColor: B,
          borderBottomColor: B,
          borderLeftColor: B,
          filter: K,
          WebkitFilter: K,
          mask: _,
          WebkitMask: _,
        },
        J = (t) => Z[t],
        Q = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        tt = () => ({ x: Q(), y: Q() }),
        te = () => ({ min: 0, max: 0 }),
        ti = () => ({ x: te(), y: te() }),
        tn = (t) => !!(t && t.getVelocity);
      t.s(["f", 0, tn], 83411);
      let ts = new Set(["width", "height", "top", "left", "right", "bottom", ...p]),
        tr = [g, V, C, M, D, j, { test: (t) => "auto" === t, parse: (t) => t }],
        to = (t) => tr.find((e) => e.test(t)),
        ta = () => {},
        tl = () => {};
      t.s(["k", 0, tl, "w", 0, ta], 65566);
      let th = (t) => (e) => "string" == typeof e && e.startsWith(t),
        tu = th("--"),
        tc = th("var(--"),
        td = (t) => !!tc(t) && tp.test(t.split("/*")[0].trim()),
        tp = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function tf(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--");
      }
      let tm = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tg = new Set([K, _]);
      function ty(t, e) {
        let i = J(t);
        return (tg.has(i) || (i = z), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0);
      }
      let tv = (t) => (180 * t) / Math.PI,
        tx = (t) => tb(tv(Math.atan2(t[1], t[0]))),
        tw = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scaleZ: () => 1,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: tx,
          rotateZ: tx,
          skewX: (t) => tv(Math.atan(t[1])),
          skewY: (t) => tv(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        tb = (t) => ((t %= 360) < 0 && (t += 360), t),
        tT = (t) => Math.hypot(t[0], t[1]),
        tS = (t) => Math.hypot(t[4], t[5]),
        tA = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: tT,
          scaleY: tS,
          scaleZ: (t) => Math.hypot(t[8], t[9], t[10]),
          scale: (t) => (tT(t) + tS(t)) / 2,
          rotateX: (t) => tb(tv(Math.atan2(t[6], t[5]))),
          rotateY: (t) => tb(tv(Math.atan2(-t[2], t[0]))),
          rotateZ: tx,
          rotate: tx,
          skewX: (t) => tv(Math.atan(t[4])),
          skewY: (t) => tv(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function tP(t) {
        return +!!t.includes("scale");
      }
      function tE(t, e) {
        let i, n;
        if (!t || "none" === t) return tP(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) ((i = tA), (n = s));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = tw), (n = e));
        }
        if (!n) return tP(e);
        let r = i[e],
          o = n[1].split(",").map(tk);
        return "function" == typeof r ? r(o) : o[r];
      }
      function tk(t) {
        return parseFloat(t.trim());
      }
      let tM = (t) => t === g || t === V,
        tC = new Set(["x", "y", "z"]),
        tV = p.filter((t) => !tC.has(t)),
        tj = new Set(["bottom", "right"]);
      function tD(t, e, i, n, s, r) {
        let o = parseFloat(t);
        if (!isNaN(o)) return o;
        let { min: a, max: l } = e()[i],
          h = l - a;
        return "border-box" === r ? h : h - parseFloat(n) - parseFloat(s);
      }
      let tR = {
        width: ({ width: t, paddingLeft: e = "0", paddingRight: i = "0", boxSizing: n }, s) => tD(t, s, "x", e, i, n),
        height: ({ height: t, paddingTop: e = "0", paddingBottom: i = "0", boxSizing: n }, s) => tD(t, s, "y", e, i, n),
        top: ({ top: t }) => parseFloat(t),
        left: ({ left: t }) => parseFloat(t),
        bottom: ({ top: t }, e) => {
          let { y: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        right: ({ left: t }, e) => {
          let { x: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        x: ({ transform: t }) => tE(t, "x"),
        y: ({ transform: t }) => tE(t, "y"),
      };
      ((tR.translateX = tR.x), (tR.translateY = tR.y));
      let tL = (t) => t;
      t.s(["f", 0, tL], 60830);
      let tB = {},
        tF = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
      function tI(t, e, i = { delta: 0, timestamp: 0, isProcessing: !1 }) {
        let n = !1,
          s = !0,
          r = () => (n = !0),
          o = tF.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  s = !1,
                  r = new Set(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  (r.has(e) && (i.add(e), t()), e(o));
                }
                let l = {
                  schedule: (t, s = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return (s && r.add(t), a.add(t), t);
                  },
                  cancel: (t) => {
                    (i.delete(t), r.delete(t));
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      s = !0;
                      return;
                    }
                    n = !0;
                    let r = e;
                    ((e = i), (i = r), e.forEach(a), e.clear(), (n = !1), s && ((s = !1), l.process(t)));
                  },
                };
                return l;
              })(r)),
              t
            ),
            {},
          ),
          {
            setup: a,
            read: l,
            resolveKeyframes: h,
            preUpdate: u,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = o,
          m = () => {
            let r = tB.useManualTiming,
              o = r ? i.timestamp : performance.now();
            ((n = !1),
              r || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)),
              (i.timestamp = o),
              (i.isProcessing = !0),
              a.process(i),
              l.process(i),
              h.process(i),
              u.process(i),
              c.process(i),
              d.process(i),
              p.process(i),
              f.process(i),
              (i.isProcessing = !1),
              n && e && ((s = !1), t(m)));
          };
        return {
          schedule: tF.reduce((e, r) => {
            let a = o[r];
            return (
              (e[r] = (e, r = !1, o = !1) => (!n && ((n = !0), (s = !0), i.isProcessing || t(m)), a.schedule(e, r, o))),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < tF.length; e++) o[tF[e]].cancel(t);
          },
          state: i,
          steps: o,
        };
      }
      let tO = { delta: 0, timestamp: 0, isProcessing: !1 };
      t.s(["f", 0, tO], 48940);
      let {
        schedule: tN,
        cancel: t$,
        steps: tU,
      } = tI("u" > typeof requestAnimationFrame ? requestAnimationFrame : tL, !0, tO);
      t.s(["Y", 0, t$, "y", 0, tN, "q", 0, tU], 87022);
      let tW = new Set(),
        tz = !1,
        tY = !1,
        tH = !1;
      function tX() {
        if (tY) {
          let t = [],
            e = new Set(),
            i = new Set();
          tW.forEach((n) => {
            n.needsMeasurement && (t.push(n), e.add(n.element), tj.has(n.name) && i.add(n.element));
          });
          let n = new Map();
          (i.forEach((t) => {
            let e,
              i =
                ((e = []),
                tV.forEach((i) => {
                  let n = t.getValue(i);
                  if (void 0 !== n) {
                    let t = n.get(),
                      s = +!!i.startsWith("scale");
                    if (t === s) return;
                    (e.push([i, t]), n.set(s));
                  }
                }),
                e);
            i.length && (n.set(t, i), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = n.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((tY = !1), (tz = !1), tW.forEach((t) => t.complete(tH)), tW.clear());
      }
      function tK() {
        tW.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (tY = !0));
        });
      }
      class t_ {
        constructor(t, e, i, n, s, r = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (tW.add(this), tz || ((tz = !0), tN.read(tK), tN.resolveKeyframes(tX)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, name: e, element: i, motionValue: n } = this;
          if (null === t[0]) {
            let s = n?.get(),
              r = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (i && e) {
              let n = (function (t, e, i) {
                if ("string" == typeof t) {
                  if (/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) || /^0[^.\s]+$/u.test(t)) return parseFloat(t);
                  if (!z.test(t) && z.test(i)) return ty(e, i);
                }
                return t ?? void 0;
              })(i.readValue(e, r), e, r);
              void 0 !== n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]));
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tW.delete(this));
        }
        cancel() {
          "scheduled" === this.state && (tW.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tG = new Set(["auto", "none", "0"]);
      class tq extends t_ {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        scheduleResolve() {
          if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
          super.scheduleResolve();
        }
        canReadNow() {
          let { unresolvedKeyframes: t, element: e, motionValue: i } = this,
            n = t[0] ?? i?.get();
          if (!e?.current || void 0 === n) return !1;
          for (let e = 0; e < t.length; e++) if (tf(e ? t[e] : n)) return !1;
          return !0;
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && td((n = n.trim()))) {
              let s = (function t(e, i, n = 1) {
                tl(
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [s, r] = (function (t) {
                  let e = tm.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${i ?? n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t;
                }
                return td(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              (void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !ts.has(i) || 2 !== t.length)) return;
          let [n, s] = t;
          if ("number" == typeof n && "number" == typeof s) return;
          let r = to(n),
            o = to(s);
          if (tf(n) !== tf(s) && tR[i]) {
            this.needsMeasurement = !0;
            return;
          }
          if (r !== o)
            if (tM(r) && tM(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else tR[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++)
            (null === t[e] ||
              (function (t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
              })(t[e])) &&
              i.push(e);
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n;) {
                let e = t[s];
                ("string" == typeof e &&
                  !tG.has(e) &&
                  (function (t) {
                    let e = t.toString();
                    return F.test(e) || I.test(e);
                  })(e) &&
                  (n = t[s]),
                  s++);
              }
              if (n && i) for (let s of e) t[s] !== n && (t[s] = ty(i, n));
            })(t, i, e);
        }
        measure() {
          let { element: t, name: e } = this;
          return tR[e](window.getComputedStyle(t.current), () => t.measureViewportBox());
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = this.measure()),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && this.motionValue?.jump(n, !1);
        }
        measureEndState() {
          let { element: t, unresolvedKeyframes: e } = this;
          if (!t || !t.current) return;
          this.motionValue?.jump(this.measuredOrigin, !1);
          let i = e.length - 1,
            n = e[i];
          ((e[i] = this.measure()),
            null !== n && void 0 === this.finalKeyframe && (this.finalKeyframe = n),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      let tZ = (t) => 1e3 * t;
      function tJ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function tQ(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class t0 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (tJ(this.subscriptions, t), () => this.remove(t));
        }
        remove(t) {
          tQ(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n)
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function t1(t, e, i) {
        e.startsWith("--") ? t.style.setProperty(e, i) : (t.style[e] = i);
      }
      function t4(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let t2 = {};
      function t3(t, e) {
        let i = t4(t);
        return () => t2[e] ?? i();
      }
      let t5 = t3(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        t6 = t3(() => void 0 !== window.ViewTimeline, "viewTimeline");
      t.s(["a", 0, t5, "G", 0, t6], 30551);
      let t8 = (t) => null !== t;
      function t9(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
        let r = t.filter(t8),
          o = s < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return o && void 0 !== n ? n : r[o];
      }
      class t7 {
        constructor() {
          this.isResolved = !1;
        }
        get finished() {
          return (
            this._finished ||
              (this._finished = this.isResolved
                ? Promise.resolve()
                : new Promise((t) => {
                    this._resolve = t;
                  })),
            this._finished
          );
        }
        updateFinished() {
          ((this._finished = this._resolve = void 0), (this.isResolved = !1));
        }
        notifyFinished() {
          ((this.isResolved = !0), this._resolve?.());
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      function et() {
        e = void 0;
      }
      t.s(["f", 0, t7], 79294);
      let ee = {
        now: () => (
          void 0 === e && ee.set(tO.isProcessing || tB.useManualTiming ? tO.timestamp : performance.now()),
          e
        ),
        set: (t) => {
          ((e = t), queueMicrotask(et));
        },
      };
      function ei(t, e) {
        return {
          kind: t,
          animation: e,
          timestamp: ee.now(),
          frameTimestamp: tO.timestamp,
          frameIsProcessing: tO.isProcessing,
        };
      }
      function en(t, e, i) {
        let n = globalThis.__MOTION_INSPECT__;
        if (n)
          try {
            n({ ...ei("animation-start", t), options: i ? { ...e, ...i } : e });
          } catch {}
      }
      t.s(["f", 0, ee], 96173);
      let es = (t) => Array.isArray(t) && "number" == typeof t[0],
        er = t3(() => {
          try {
            document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        eo = (t, e, i = 10) => {
          let n = "",
            s = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        ea = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        el = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ea([0, 0.65, 0.55, 1]),
          circOut: ea([0.55, 0, 1, 0.45]),
          backIn: ea([0.31, 0.01, 0.66, -0.59]),
          backOut: ea([0.33, 1.53, 0.69, 0.99]),
        };
      function eh(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class eu extends t7 {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !t)) return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: s,
            allowFlatten: r = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          ((this.isPseudoElement = !!s), (this.allowFlatten = r), (this.options = t), tl(t.type));
          let l = (function ({ type: t, ...e }) {
            return eh(t) && er()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            h,
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let c = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? er()
                    ? eo(e, i)
                    : "ease-out"
                  : es(e)
                    ? ea(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || el.easeOut)
                      : el[e];
            })(a, s);
            Array.isArray(c) && (u.easing = c);
            let d = {
              delay: n,
              duration: s,
              easing: Array.isArray(c) ? "linear" : c,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            return (h && (d.pseudoElement = h), t.animate(u, d));
          })(e, i, n, l, s)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !s)) {
                let t = t9(n, this.options, o, this.speed);
                (this.updateMotionValue && this.updateMotionValue(t), t1(e, i, t), this.animation.cancel());
              }
              (a?.(), this.notifyFinished());
            }),
            en(this, t, l));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null), this.animation.play(), "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let t = this.options?.element;
          !this.isPseudoElement && t?.isConnected && this.animation.commitStyles?.();
        }
        get duration() {
          return Number(this.animation.effect?.getComputedTiming?.().duration || 0) / 1e3;
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return (Number(this.animation.currentTime) || 0) / 1e3;
        }
        set time(t) {
          let e = null !== this.finishedTime;
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = tZ(t)),
            e && this.animation.pause());
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime ? "finished" : this.animation.playState;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, onAttach: e, observe: i }) {
          return (this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && t5())
            ? ((this.animation.timeline = t), e?.(this.animation), tL)
            : i(this);
        }
      }
      let ec = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
        ed = new WeakMap(),
        { schedule: ep, cancel: ef } = tI(queueMicrotask, !1);
      t.s(["w", 0, ef, "t", 0, ep], 60140);
      let em = (t, e) => (e ? (1e3 / e) * t : 0);
      t.s(["f", 0, em], 25791);
      let eg = { current: void 0 };
      class ey {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = ee.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev && (this.notifyChange(), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = ee.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current))));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          var i;
          return "change" === t ? this.onChangeSubscribe(e) : ((i = this.events)[t] || (i[t] = new t0())).add(e);
        }
        onChangeSubscribe(t) {
          let { events: e } = this;
          return (
            e.change || this.changeSubscriber
              ? (e.change ||
                  ((e.change = new t0()), e.change.add(this.changeSubscriber), (this.changeSubscriber = void 0)),
                e.change.add(t))
              : (this.changeSubscriber = t),
            () => {
              (this.changeSubscriber === t ? (this.changeSubscriber = void 0) : e.change?.remove(t),
                this.stopIfUnobserved());
            }
          );
        }
        stopIfUnobserved() {
          tN.read(() => {
            this.changeSubscriber || this.events.change?.getSize() || this.stop();
          });
        }
        clearListeners() {
          for (let t in ((this.changeSubscriber = void 0), this.events)) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t) {
          this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          (this.set(e), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.notifyChange();
        }
        notifyChange() {
          let { current: t, changeSubscriber: e } = this;
          e ? e(t) : this.events.change?.notify(t);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          eg.current && eg.current.push(this);
          let t = this.animation?.liveValue?.();
          return void 0 === t ? this.current : t;
        }
        getCurrent() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = ee.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return em(parseFloat(this.current) - parseFloat(this.prevFrameValue), e);
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              let i;
              this.hasAnimated = !0;
              let n = !1;
              ((i = t(() => {
                ((n = !0), this.events.animationComplete?.notify(), this.animation === i && this.clearAnimation(), e());
              })),
                n || (this.animation = i),
                this.events.animationStart?.notify());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = void 0;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function ev(t, e) {
        return new ey(t, e);
      }
      t.s(["I", 0, eg, "o", 0, ev], 86427);
      let ex = new WeakMap();
      function ew(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start;
      }
      function eb(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let eT = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        eS = ["initial", ...eT];
      function eA(t) {
        if (ew(t.animate)) return !0;
        for (let e = 0; e < eS.length; e++) if (eb(t[eS[e]])) return !0;
        return !1;
      }
      function eP(t) {
        return !!(eA(t) || t.variants);
      }
      var eE = t.i(38544),
        ek = t.i(71164);
      let eM = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        eC = {};
      class eV {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            skipAnimations: s,
            blockInitialAnimation: r,
            visualState: o,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = t_),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = ee.now();
              this.renderScheduledAt < t && ((this.renderScheduledAt = t), tN.render(this.render, !1, !0));
            }));
          let { latestValues: l, renderState: h } = o;
          ((this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.skipAnimationsConfig = s),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = eA(e)),
            (this.isVariantNode = eP(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (let t in c) {
            let e = c[t];
            void 0 !== l[t] && tn(e) && e.set(l[t]);
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (let t in this.initialValues)
              (this.values.get(t)?.jump(this.initialValues[t]), (this.latestValues[t] = this.initialValues[t]));
          if (
            ((this.current = t),
            ex.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.isVariantNode && !this.isControllingVariants)
          ) {
            let t = this;
            do t = !1 !== t.props.inherit && t.parent;
            while (t && !t.isVariantNode);
            if (t) {
              let { variantChildren: e } = t;
              (e.add(this), (this.removeFromVariantTree = () => e.delete(this)));
            }
          }
          (this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            "never" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !1)
              : "always" === this.reducedMotionConfig
                ? (this.shouldReduceMotion = !0)
                : (ek.E.current || (0, eE.f)(), (this.shouldReduceMotion = ek.d.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          t$(this.notifyUpdate),
          t$(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          (this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t));
        }
        removeChild(t) {
          (this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t));
        }
        bindToMotionValue(t, e) {
          let i;
          if (
            (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
            e.accelerate && ec.has(t) && this.current instanceof HTMLElement)
          ) {
            let { factory: i, keyframes: n, times: s, ease: r, duration: o } = e.accelerate,
              a = new eu({ element: this.current, name: t, keyframes: n, times: s, ease: r, duration: tZ(o) }),
              l = i(a);
            this.valueSubscriptions.set(t, () => {
              (l(), a.cancel());
            });
            return;
          }
          let n = f.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let s = e.on("change", (e) => {
            ((this.latestValues[t] = e),
              this.props.onUpdate && tN.preRender(this.notifyUpdate),
              n && (this.projection && (this.projection.isTransformDirty = !0), ed.get(this.current)?.check()),
              this.scheduleRender());
          });
          ("u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (s(), i && i());
            }));
        }
        sortNodePosition(t) {
          return this.current && t.current && this.sortInstanceNodePosition && this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in eC) {
            let e = eC[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if ((!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t])) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ti();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          let { transformTemplate: i, onUpdate: n } = this.props;
          ((t.transformTemplate || i) && this.scheduleRender(),
            ((t.transformTemplate && !i) || (t.onUpdate && !n)) && ed.get(this.current)?.demote(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < eM.length; e++) {
            let i = eM[e];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if (tn(s)) t.addValue(n, s);
              else if (tn(r)) t.addValue(n, ev(s, { owner: t }));
              else if (r !== s)
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, ev(void 0 !== e ? e : s, { owner: t }));
                }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues)),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        addValue(t, e) {
          let i = this.values.get(t);
          if (e !== i) {
            (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e));
            let n = e.get();
            void 0 !== n && (this.latestValues[t] = n);
          }
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = ev(e ?? this.getDefaultValue?.(t), { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          if (null != i) {
            let n, s;
            ("string" == typeof i &&
            ((n = i), /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n) || ((s = i), /^0[^.\s]+$/u.test(s)))
              ? (i = parseFloat(i))
              : "number" != typeof i && !z.test(i) && z.test(e) && (i = ty(t, e)),
              this.setBaseTarget(t, tn(i) ? i.get() : i));
          }
          return tn(i) ? i.get() : i;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        on(t, e) {
          return (this.events[t] || (this.events[t] = new t0()), this.events[t].add(e));
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ep.render(this.render);
        }
      }
      class ej extends eV {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = tq));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          let i = t.style;
          return i ? i[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tn(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function eD(t) {
        return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
      }
      let eR = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        eL = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
        eB = p.length;
      function eF(t, e, i) {
        let n = "",
          s = !0;
        for (let r = 0; r < eB; r++) {
          let o = p[r],
            a = t[o];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === +!!o.startsWith("scale");
          else {
            let t = parseFloat(a);
            l = o.startsWith("scale") ? 1 === t : 0 === t;
          }
          if (!l || i) {
            let t = eR(a, q[o]);
            if (!l) {
              s = !1;
              let e = eL[o] || o;
              n += `${e}(${t}) `;
            }
            i && (e[o] = t);
          }
        }
        let r = t.pathRotation;
        return (
          r && ((s = !1), (n += `rotate(${eR(r, q.pathRotation)}) `)),
          (n = n.trim()),
          i ? (n = i(e, s ? "" : n)) : s && (n = "none"),
          n
        );
      }
      function eI(t, e, i) {
        let { style: n, vars: s, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (f.has(t)) {
            o = !0;
            continue;
          }
          if (tu(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = eR(i, q[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform && (o || i ? (n.transform = eF(e, t.transform, i)) : n.transform && (n.transform = "none")), a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let eO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eN = { offset: "strokeDashoffset", array: "strokeDasharray" },
        e$ = [
          "transform",
          "opacity",
          "clipPath",
          "filter",
          "offsetDistance",
          "offsetPath",
          "offsetRotate",
          "offsetAnchor",
        ];
      function eU(
        t,
        { attrX: e, attrY: i, attrScale: n, pathLength: s, pathSpacing: r = 1, pathOffset: o = 0, ...a },
        l,
        h,
        u,
      ) {
        if ((eI(t, a, h), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: c, style: d } = t;
        for (let t of e$) void 0 !== c[t] && ((d[t] = c[t]), delete c[t]);
        ((d.transform || c.transformOrigin) &&
          ((d.transformOrigin = c.transformOrigin ?? "50% 50%"), delete c.transformOrigin),
          d.transform && ((d.transformBox = u?.transformBox ?? "fill-box"), delete c.transformBox),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? eO : eN;
              ((t[r.offset] = `${-n}`), (t[r.array] = `${e} ${i}`));
            })(c, s, r, o, !1));
      }
      let eW = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        ez = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function eY(t, { style: e, vars: i }, n, s) {
        let r,
          o = t.style;
        for (r in e) o[r] = e[r];
        for (r in (s?.applyProjectionStyles(o, n), i)) o.setProperty(r, i[r]);
      }
      let eH = {};
      function eX(t, { layout: e, layoutId: i }) {
        return f.has(t) || t.startsWith("origin") || ((e || void 0 !== i) && (!!eH[t] || "opacity" === t));
      }
      function eK(t, e, i) {
        let n = t.style,
          s = e?.style,
          r = {};
        if (!n) return r;
        for (let e in n)
          (tn(n[e]) || (s && tn(s[e])) || eX(e, t) || i?.getValue(e)?.liveStyle !== void 0) && (r[e] = n[e]);
        return r;
      }
      function e_(t, e, i) {
        let n = eK(t, e, i);
        for (let i in t)
          "children" !== i &&
            (tn(t[i]) || tn(e[i])) &&
            (n[-1 !== p.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
        return n;
      }
      class eG extends ej {
        constructor() {
          (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = ti));
        }
        getBaseTargetFromProps(t, e) {
          return f.has(e) ? (super.getBaseTargetFromProps(t, e) ?? tP(e)) : t[e];
        }
        getDefaultValue(t) {
          return f.has(t) ? (this.latestValues[t] ?? tP(t)) : void 0;
        }
        readValueFromInstance(t, e) {
          if (f.has(e)) {
            let t = J(e);
            return (t && t.default) || 0;
          }
          if (e$.includes(e)) {
            let i = getComputedStyle(t)[e];
            if ("string" == typeof i && i) return i.trim();
          }
          return ((e = eW.has(e) ? e : eD(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return e_(t, e, i);
        }
        build(t, e, i) {
          eU(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          for (let i in (eY(t, e, void 0, n), e.attrs)) t.setAttribute(eW.has(i) ? i : eD(i), e.attrs[i]);
        }
        mount(t) {
          ((this.isSVGTag = ez(t.tagName)), super.mount(t));
        }
      }
      function eq({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      let eZ = (t, e, i) => t + (e - t) * i;
      function eJ(t) {
        return void 0 === t || 1 === t;
      }
      function eQ({ scale: t, scaleX: e, scaleY: i }) {
        return !eJ(t) || !eJ(e) || !eJ(i);
      }
      function e0(t) {
        return eQ(t) || e1(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
      }
      function e1(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function e4(t, e, i, n, s) {
        return (void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e);
      }
      function e2(t, e = 0, i = 1, n, s) {
        ((t.min = e4(t.min, e, i, n, s)), (t.max = e4(t.max, e, i, n, s)));
      }
      function e3(t, { x: e, y: i }) {
        (e2(t.x, e.translate, e.scale, e.originPoint), e2(t.y, i.translate, i.scale, i.originPoint));
      }
      function e5(t, e) {
        ((t.min += e), (t.max += e));
      }
      function e6(t, e, i, n, s = 0.5) {
        let r = eZ(t.min, t.max, s);
        e2(t, e, i, r, n);
      }
      function e8(t, e) {
        return "string" == typeof t ? (parseFloat(t) / 100) * (e.max - e.min) : t;
      }
      function e9(t, e, i) {
        let n = i ?? t;
        (e6(t.x, e8(e.x, n.x), e.scaleX, e.scale, e.originX), e6(t.y, e8(e.y, n.y), e.scaleY, e.scale, e.originY));
      }
      function e7(t, e) {
        return eq(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      class it extends ej {
        constructor() {
          (super(...arguments), (this.type = "html"), (this.renderInstance = eY));
        }
        mount(t) {
          (tl(t.style), super.mount(t));
        }
        readValueFromInstance(t, e) {
          if (f.has(e))
            return this.projection?.isProjecting
              ? tP(e)
              : ((t, e) => {
                  let { transform: i = "none" } = getComputedStyle(t);
                  return tE(i, e);
                })(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (tu(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return e7(t, e);
        }
        build(t, e, i) {
          eI(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eK(t, e, i);
        }
      }
      let ie = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ii(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ie.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var is = t.i(43476);
      let ir = (0, s.createContext)({ strict: !1 }),
        io = (0, s.createContext)({});
      function ia(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let il = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
      function ih(t, e, i) {
        for (let n in e) tn(e[n]) || eX(n, i) || (t[n] = e[n]);
      }
      let iu = () => ({ ...il(), attrs: {} }),
        ic = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "propagate",
          "ignoreStrict",
          "viewport",
        ]);
      function id(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          ic.has(t)
        );
      }
      function ip(t) {
        return tn(t) ? t.get() : t;
      }
      function im(t, e, i, n) {
        let s = (e) => {
          let s;
          return "function" == typeof e
            ? e(
                void 0 !== i ? i : t.custom,
                ...((s = [{}, {}]),
                n?.values.forEach((t, e) => {
                  ((s[0][e] = t.get()), (s[1][e] = t.getVelocity()));
                }),
                s),
              )
            : e;
        };
        return ("string" == typeof (e = s(e)) && (e = t.variants && t.variants[e]), s(e));
      }
      let ig = (t) => (e, i) => {
          let n = (0, s.useContext)(io),
            r = (0, s.useContext)(l),
            a = () =>
              (function ({ scrapeMotionValuesFromProps: t, createRenderState: e }, i, n, s) {
                return {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      r = n(t, {});
                    for (let t in r) s[t] = ip(r[t]);
                    let { initial: o, animate: a } = t,
                      l = eA(t),
                      h = eP(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial,
                      c = (u = u || !1 === o) ? a : o;
                    if (c && "boolean" != typeof c && !ew(c)) {
                      let e = Array.isArray(c) ? c : [c];
                      for (let i = 0; i < e.length; i++) {
                        let n = im(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(i, n, s, t),
                  renderState: e(),
                };
              })(t, e, n, r);
          return i ? a() : o(a);
        },
        iy = ig({ scrapeMotionValuesFromProps: eK, createRenderState: il }),
        iv = ig({ scrapeMotionValuesFromProps: e_, createRenderState: iu }),
        ix = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        iw = !1;
      function ib() {
        return (
          !(function () {
            if (iw) return;
            let t = {};
            for (let e in ix) t[e] = { isEnabled: (t) => ix[e].some((e) => !!t[e]) };
            ((eC = t), (iw = !0));
          })(),
          eC
        );
      }
      let iT = Symbol.for("motionComponentSymbol"),
        iS = "data-" + eD("framerAppearId"),
        iA = (0, s.createContext)({});
      function iP(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current");
      }
      function iE(t, { forwardMotionProps: e = !1, type: i } = {}, n, o) {
        n &&
          (function (t) {
            let e = ib();
            for (let i in t) e[i] = { ...e[i], ...t[i] };
            eC = e;
          })(n);
        let h = i ? "svg" === i : ii(t),
          u = h ? iv : iy;
        function d(i, n) {
          var d;
          let p,
            f,
            m,
            g = {
              ...(0, s.useContext)(c),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, s.useContext)(r).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: y, isValidProp: v } = g,
            x = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (eA(t)) {
                  let { initial: e, animate: i } = t;
                  return { initial: !1 === e || eb(e) ? e : void 0, animate: eb(i) ? i : void 0 };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, s.useContext)(io));
              return (0, s.useMemo)(() => ({ initial: e, animate: i }), [ia(e), ia(i)]);
            })(i),
            w = u(i, y);
          if (!y && "u" > typeof window) {
            (0, s.useContext)(ir).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = ib();
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout: e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(g);
            ((p = e.MeasureLayout),
              (x.visualElement = (function (t, e, i, n, r, o) {
                let { visualElement: h } = (0, s.useContext)(io),
                  u = (0, s.useContext)(ir),
                  d = (0, s.useContext)(l),
                  p = (0, s.useContext)(c),
                  f = p.reducedMotion,
                  m = p.skipAnimations,
                  g = (0, s.useRef)(null),
                  y = (0, s.useRef)(!1);
                ((n = n || u.renderer),
                  !g.current &&
                    n &&
                    ((g.current = n(t, {
                      visualState: e,
                      parent: h,
                      props: i,
                      presenceContext: d,
                      blockInitialAnimation: !!d && !1 === d.initial,
                      reducedMotionConfig: f,
                      skipAnimations: m,
                      isSVG: o,
                    })),
                    y.current && g.current && (g.current.manuallyAnimateOnMount = !0)));
                let v = g.current,
                  x = (0, s.useContext)(iA);
                v &&
                  !v.projection &&
                  r &&
                  ("html" === v.type || "svg" === v.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: s,
                      layout: r,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: u,
                      layoutCrossfade: c,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: s,
                        layout: r,
                        alwaysMeasureLayout: !!o || (a && iP(a)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: n,
                        crossfade: c,
                        layoutScroll: l,
                        layoutRoot: h,
                        layoutAnchor: u,
                      }));
                  })(g.current, i, r, x);
                let w = (0, s.useRef)(!1);
                (0, s.useInsertionEffect)(() => {
                  v && w.current && v.update(i, d);
                });
                let b = i[iS],
                  T = (0, s.useRef)(
                    !!b &&
                      "u" > typeof window &&
                      !window.MotionHandoffIsComplete?.(b) &&
                      window.MotionHasOptimisedAnimation?.(b),
                  );
                return (
                  a(() => {
                    y.current && v && (v.animationState?.animateChanges(), (v.enteringChildren = void 0));
                  }, []),
                  a(() => {
                    ((y.current = !0),
                      v &&
                        ((w.current = !0),
                        (window.MotionIsMounted = !0),
                        v.updateFeatures(),
                        v.scheduleRenderMicrotask(),
                        T.current && v.animationState && v.animationState.animateChanges()));
                  }),
                  (0, s.useEffect)(() => {
                    v &&
                      (!T.current && v.animationState && v.animationState.animateChanges(),
                      T.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(b);
                        }),
                        (T.current = !1)),
                      (v.enteringChildren = void 0));
                  }),
                  v
                );
              })(t, w, g, o, e.ProjectionNode, h)));
          }
          return (0, is.jsxs)(io.Provider, {
            value: x,
            children: [
              p && x.visualElement ? (0, is.jsx)(p, { visualElement: x.visualElement, ...g }) : null,
              (function (t, e, i, { latestValues: n }, r, o = !1, a, l) {
                let h = (
                    (a ?? ii(t))
                      ? function (t, e, i, n) {
                          let r = (0, s.useMemo)(() => {
                            let i = iu();
                            return (
                              eU(i, e, ez(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (ih(e, t.style, t), (r.style = { ...e, ...r.style }));
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i,
                            n,
                            r = {},
                            o =
                              ((i = t.style || {}),
                              ih((n = {}), i, t),
                              Object.assign(
                                n,
                                (function ({ transformTemplate: t }, e) {
                                  return (0, s.useMemo)(() => {
                                    let i = il();
                                    return (eI(i, e, t), Object.assign({}, i.vars, i.style));
                                  }, [e]);
                                })(t, e),
                              ),
                              n);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
                              (o.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
                            (r.style = o),
                            r
                          );
                        }
                  )(e, n, r, t),
                  u = (function (t, e, i, n) {
                    let s = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        !tn(t[r]) &&
                        ((r.startsWith("on") ? !id(r) : (n?.(r) ?? !id(r))) ||
                          (!0 === i && id(r)) ||
                          (!e && !id(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (s[r] = t[r]);
                    return s;
                  })(e, "string" == typeof t, o, l),
                  c = t !== s.Fragment ? { ...u, ...h, ref: i } : {},
                  { children: d } = e,
                  p = (0, s.useMemo)(() => (tn(d) ? d.get() : d), [d]);
                return (0, s.createElement)(t, { ...c, children: p });
              })(
                t,
                i,
                ((d = x.visualElement),
                (f = (0, s.useRef)(n)),
                (0, s.useInsertionEffect)(() => {
                  f.current = n;
                }),
                (m = (0, s.useRef)(null)),
                (0, s.useCallback)(
                  (t) => {
                    (t && w.onMount?.(t), d && (t ? d.mount(t) : d.unmount()));
                    let e = f.current;
                    if ("function" == typeof e)
                      if (t) {
                        let i = e(t);
                        "function" == typeof i && (m.current = i);
                      } else m.current ? (m.current(), (m.current = null)) : e(t);
                    else e && (e.current = t);
                  },
                  [d],
                )),
                w,
                y,
                e,
                h,
                v,
              ),
            ],
          });
        }
        d.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let p = (0, s.forwardRef)(d);
        return ((p[iT] = t), p);
      }
      class ik {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      function iM(t, e, i) {
        return im(t.getProps(), e, i, t);
      }
      let iC = (t, e) => ("exit" === e ? t.presenceContext?.custom : void 0);
      function iV(t, e) {
        if (t?.inherit && e) {
          let { inherit: i, ...n } = t;
          return { ...e, ...n };
        }
        return t;
      }
      function ij(t, e) {
        let i = t?.[e] ?? t?.default ?? t;
        return i !== t ? iV(i, t) : i;
      }
      function iD(t, e) {
        let i = t.getValue("willChange");
        if (tn(i) && i.add) return i.add(e);
        if (!i && tB.WillChange) {
          let i = new tB.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      let iR = (...t) => t.reduce((t, e) => (i) => e(t(i)));
      function iL(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function iB(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iF = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        iI = [E, P, L];
      function iO(t) {
        let e = iI.find((e) => e.test(t));
        if (!e) return (ta(`'${t}' is not an animatable color. Use the equivalent color code instead.`), !1);
        let i = e.parse(t);
        return (
          e === L &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let s = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                ((s = iL(a, n, t + 1 / 3)), (r = iL(a, n, t)), (o = iL(a, n, t - 1 / 3)));
              } else s = r = o = i;
              return { red: Math.round(255 * s), green: Math.round(255 * r), blue: Math.round(255 * o), alpha: n };
            })(i)),
          i
        );
      }
      let iN = (t, e) => {
          let i = iO(t),
            n = iO(e);
          if (!i || !n) return iB(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = iF(i.red, n.red, t)),
            (s.green = iF(i.green, n.green, t)),
            (s.blue = iF(i.blue, n.blue, t)),
            (s.alpha = eZ(i.alpha, n.alpha, t)),
            P.transform(s)
          );
        },
        i$ = new Set(["none", "hidden"]);
      function iU(t, e) {
        return (i) => eZ(t, e, i);
      }
      function iW(t) {
        return "number" == typeof t
          ? iU
          : "string" == typeof t
            ? td(t)
              ? iB
              : B.test(t)
                ? iN
                : iH
            : Array.isArray(t)
              ? iz
              : "object" == typeof t
                ? B.test(t)
                  ? iN
                  : iY
                : iB;
      }
      function iz(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => iW(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function iY(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i) void 0 !== t[s] && void 0 !== e[s] && (n[s] = iW(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let iH = (t, e) => {
          let i = z.createTransformer(e),
            n = U(t),
            s = U(e);
          if (!(
            n.indexes.var.length === s.indexes.var.length &&
            n.indexes.color.length === s.indexes.color.length &&
            n.indexes.number.length >= s.indexes.number.length
          ))
            return (
              ta(
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              iB(t, e)
            );
          if ((i$.has(t) && !s.values.length) || (i$.has(e) && !n.values.length))
            return i$.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
          return iR(
            iz(
              (function (t, e) {
                let i = [],
                  n = { color: 0, var: 0, number: 0 };
                for (let s = 0; s < e.values.length; s++) {
                  let r = e.types[s],
                    o = t.indexes[r][n[r]],
                    a = t.values[o] ?? 0;
                  ((i[s] = a), n[r]++);
                }
                return i;
              })(n, s),
              s.values,
            ),
            i,
          );
        },
        iX = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
      function iK(t, e, i) {
        if ("number" == typeof t && "number" == typeof e && "number" == typeof i) return eZ(t, e, i);
        if ("string" == typeof t && "string" == typeof e) {
          let i = (function (t, e) {
            let i = iX.exec(t);
            if (!i) return;
            let n = iX.exec(e);
            if (!n || i[2] !== n[2]) return;
            let s = i[2],
              r = parseFloat(i[1]),
              o = parseFloat(n[1]);
            return (t) => x(eZ(r, o, t)) + s;
          })(t, e);
          if (i) return i;
        }
        return iW(t)(t, e);
      }
      let i_ = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => tN.update(e, t),
          stop: () => t$(e),
          now: () => (tO.isProcessing ? tO.timestamp : ee.now()),
        };
      };
      function iG(t, e = 50, i = 2e4, n) {
        let s = 0,
          r = t.next(s);
        for (n?.push(r.value); !r.done && s < i;) ((s += e), (r = t.next(s)), n?.push(r.value));
        return s >= i ? 1 / 0 : s;
      }
      let iq = 0.01,
        iZ = 2,
        iJ = 0.005,
        iQ = 0.5,
        i0 = (t) => (t < 0 ? 1 / Math.max(1 + t, 0.05) : Math.max(1 - t, 0.05));
      function i1(t, e) {
        if (!(t > 1)) return 1;
        let i = Math.sqrt(t * t - 1),
          n = t - i,
          s = t + i,
          r = 2 * i * Math.exp(-e) * (1 + e);
        return (
          i2(
            (t) => s * Math.exp(-n * t) - n * Math.exp(-s * t) - r,
            (t) => Math.exp(-s * t) - Math.exp(-n * t),
            e,
          ) / e
        );
      }
      function i4(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function i2(t, e, i) {
        let n = i;
        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
        return n;
      }
      let i3 = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;
      function i5(t, e) {
        if (i3(t, e)) return t;
      }
      function i6(t = 0.3, e = 0.3) {
        let i,
          n,
          s,
          r = "object" != typeof t ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t,
          o = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: h,
            damping: u,
            mass: c,
            duration: d,
            isResolvedFromDuration: p,
            isTimeDefined: f,
          } = (function (t) {
            let e = i5(t.stiffness),
              i = i5(t.damping, !0),
              n = i5(t.mass),
              s = {
                ...t,
                stiffness: e ?? 100,
                damping: i ?? 10,
                mass: n ?? 1,
                isResolvedFromDuration: !1,
                isTimeDefined: (e ?? i ?? n) === void 0 && (void 0 !== t.duration || void 0 !== t.bounce),
              };
            if (s.isTimeDefined) {
              if (t.visualDuration) {
                let e = i0(t.bounce || 0),
                  i = ((2 * Math.PI) / (1.2 * t.visualDuration)) * i1(e, (2 * Math.PI) / 1.2);
                ((s.stiffness = i * i), (s.damping = 2 * e * Math.sqrt(s.stiffness)));
              } else
                (Object.assign(
                  s,
                  (function ({ duration: t = 800, bounce: e = 0.3 }) {
                    let i, n;
                    ta(tZ(10));
                    let s = i0(e);
                    ((t = m(0.01, 10, t / 1e3)),
                      s < 1
                        ? ((i = (e) => {
                            let i = e * s,
                              n = i * t;
                            return 0.001 - (i / i4(e, s)) * Math.exp(-n);
                          }),
                          (n = (e) => {
                            let n = e * s * t,
                              r = s * s * e * e * t,
                              o = Math.exp(-n),
                              a = i4(e * e, s);
                            return (-((-i(e) + 0.001 > 0 ? -1 : 1) * r) * o) / a;
                          }))
                        : ((i = (e) => -0.001 + Math.exp(-e * t) * (e * t + 1)),
                          (n = (e) => -(t * t * e * Math.exp(-e * t)))));
                    let r = i2(i, n, 5 / t),
                      o = r * i1(s, r * t),
                      a = o * o;
                    return { stiffness: a, damping: 2 * s * Math.sqrt(a), duration: tZ(t) };
                  })(s),
                ),
                  (s.isResolvedFromDuration = !0));
              (i3(s.stiffness) && i3(s.damping, !0)) || ((s.stiffness = 100), (s.damping = 10));
            }
            return s;
          })({ ...r }),
          g = (t) => (f ? 0 : -(t / 1e3)),
          y = u / (2 * Math.sqrt(h * c)),
          v = Math.sqrt(h / c) / 1e3,
          x = y * v,
          w = { target: a, delta: a - o, velocity: g(r.velocity || 0) || 0, restSpeed: 0, restDelta: 0 },
          b = () => {
            let t = 5 > Math.abs(w.delta);
            ((w.restSpeed = r.restSpeed || (t ? iq : iZ)), (w.restDelta = r.restDelta || (t ? iJ : iQ)));
          };
        if ((b(), y < 1)) {
          let t = i4(v, y),
            e = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
          s = () => {
            ((e.A = (w.velocity + x * w.delta) / t),
              (e.sinC = x * e.A + w.delta * t),
              (e.cosC = x * w.delta - e.A * t));
          };
          let r = (i) => {
            i !== e.t && ((e.t = i), (e.env = Math.exp(-x * i)), (e.sin = Math.sin(t * i)), (e.cos = Math.cos(t * i)));
          };
          ((i = (t) => (r(t), w.target - e.env * (e.A * e.sin + w.delta * e.cos))),
            (n = (t) => (r(t), e.env * (e.sinC * e.sin + e.cosC * e.cos))));
        } else if (1 === y) {
          i = (t) => w.target - Math.exp(-v * t) * (w.delta + (w.velocity + v * w.delta) * t);
          let t = { C: 0 };
          ((s = () => {
            t.C = w.velocity + v * w.delta;
          }),
            (n = (e) => Math.exp(-v * e) * (v * t.C * e - w.velocity)));
        } else {
          let t = v * Math.sqrt(y * y - 1),
            e = x - t,
            r = x + t,
            o = f ? 1 / 0 : 300 / t,
            a = (t, e) => Math.exp(e > o ? -t * o - x * (e - o) : -t * e),
            l = { S: 0, F: 0 };
          ((s = () => {
            let e = (w.velocity + x * w.delta) / t;
            ((l.S = (w.delta + e) / 2), (l.F = (w.delta - e) / 2));
          }),
            (i = (t) => w.target - l.S * a(e, t) - l.F * a(r, t)),
            (n = (t) => e * l.S * a(e, t) + r * l.F * a(r, t)));
        }
        s();
        let T = (p && d) || null,
          S = {
            calculatedDuration: T,
            retarget: (t, e) => {
              ((w.target = t[t.length - 1]),
                (w.delta = w.target - t[0]),
                (w.velocity = g(e)),
                (r.restSpeed && r.restDelta) || b(),
                (S.calculatedDuration = T),
                (l.done = !1),
                s());
            },
            velocity: (t) => tZ(n(t)),
            next: (t) => {
              let e = i(t);
              return (
                p
                  ? (l.done = t >= d)
                  : (l.done = Math.abs(tZ(n(t))) <= w.restSpeed && Math.abs(w.target - e) <= w.restDelta),
                (l.value = l.done ? w.target : e),
                l
              );
            },
            toString: () => {
              let t = Math.min(iG(S), 2e4),
                e = eo((e) => S.next(t * e).value, t, 30);
              return t + "ms " + e;
            },
            toTransition: () => {},
          };
        return S;
      }
      function i8({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let c,
          d,
          p = t[0],
          f = { done: !1, value: p },
          m = i * e,
          g = p + m,
          y = void 0 === o ? g : o(g);
        y !== g && (m = y - p);
        let v = (t) => -m * Math.exp(-t / n),
          x = (t) => {
            let e = v(t);
            ((f.done = Math.abs(e) <= h), (f.value = f.done ? y : y + e));
          },
          w = (t) => {
            let e;
            if ((e = f.value) < a || e > l) {
              var i;
              ((c = t),
                (d = i6({
                  keyframes: [
                    f.value,
                    ((i = f.value), void 0 === a ? l : void 0 === l || Math.abs(a - i) < Math.abs(l - i) ? a : l),
                  ],
                  velocity: (-v(t) / n) * 1e3,
                  damping: s,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                })));
            }
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), x(t), w(t)), void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || x(t), f);
            },
          }
        );
      }
      ((i6.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let { keyframes: n, velocity: s } = t,
            r = n && n[n.length - 1] - n[0],
            o = i({ ...t, velocity: s && r ? (s * e) / r : s, keyframes: [0, e] }),
            a = Math.min(iG(o), 2e4);
          return { type: "keyframes", ease: (t) => o.next(a * t).value / e, duration: a / 1e3 };
        })(t, 100, i6);
        return ((t.ease = e.ease), (t.duration = tZ(e.duration)), (t.type = "keyframes"), t);
      }),
        t.s(["f", 0, i6], 28409));
      let i9 = (t, e, i) => t * (3 * (1 - t) * ((1 - t) * e + t * i) + t * t);
      function i7(t, e, i, n) {
        return t === e && i === n
          ? tL
          : (s) => {
              let r = 0,
                o = 1,
                a = s;
              for (let e = 0; ; e++) {
                (a >= r && a <= o) || (a = (r + o) / 2);
                let n = i9(a, t, i) - s;
                if (n * n < 1e-28 || 40 === e) break;
                (n > 0 ? (o = a) : (r = a), (a -= (1e-7 * n) / (i9(a + 1e-7, t, i) - s - n)));
              }
              return i9(a, e, n);
            };
      }
      let nt = i7(0.42, 0, 1, 1),
        ne = i7(0, 0, 0.58, 1),
        ni = i7(0.42, 0, 0.58, 1),
        nn = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
        ns = (t) => (e) => 1 - t(1 - e),
        nr = i7(0.33, 1.53, 0.69, 0.99),
        no = ns(nr),
        na = nn(no),
        nl = (t) => (t >= 1 ? 1 : (t *= 2) < 1 ? 0.5 * no(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
        nh = (t) => 1 - Math.sin(Math.acos(t)),
        nu = ns(nh),
        nc = nn(nh),
        nd = {
          linear: tL,
          easeIn: nt,
          easeInOut: ni,
          easeOut: ne,
          circIn: nh,
          circInOut: nc,
          circOut: nu,
          backIn: no,
          backInOut: na,
          backOut: nr,
          anticipate: nl,
        },
        np = (t) => {
          if (es(t)) {
            tl(t.length);
            let [e, i, n, s] = t;
            return i7(e, i, n, s);
          }
          return "string" == typeof t ? (tl(nd[t], `Invalid easing type '${t}'`), nd[t]) : t;
        },
        nf = (t, e, i) => {
          let n = e - t;
          return n ? (i - t) / n : 1;
        };
      function nm(t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
        let r = t.length;
        if ((tl(e.length), 1 === r)) return () => e[0];
        if (2 === r && e[0] === e[1]) return () => e[1];
        let o = t[0] === t[1];
        t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let a = (function (t, e, i) {
            let n = [],
              s = i || tB.mix || iK,
              r = t.length - 1;
            for (let i = 0; i < r; i++) {
              let r = s(t[i], t[i + 1]);
              (e && (r = iR(Array.isArray(e) ? e[i] || tL : e, r)), n.push(r));
            }
            return n;
          })(e, n, s),
          l = a.length,
          h = (i) => {
            if (o && i < t[0]) return e[0];
            let n = 0;
            if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
            let s = nf(t[n], t[n + 1], i);
            return a[n](s);
          };
        return i ? (e) => h(m(t[0], t[r - 1], e)) : h;
      }
      function ng(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let n = 1; n <= e; n++) {
              let s = nf(0, e, n);
              t.push(eZ(i, 1, s));
            }
          })(e, t.length - 1),
          e
        );
      }
      function ny({ duration: t = 300, keyframes: e, times: i, ease: n = "easeInOut" }) {
        var s;
        let r = Array.isArray(n) && "number" != typeof n[0] ? n.map(np) : np(n) || ni,
          o = { done: !1, value: e[0] };
        if (2 === e.length && !Array.isArray(r) && (!i || 2 !== i.length || (0 === i[0] && 1 === i[1]))) {
          let [i, n] = e,
            s = i === n ? void 0 : (tB.mix || iK)(i, n);
          return {
            calculatedDuration: t,
            next: (e) => ((o.value = s ? s(r(t > 0 ? m(0, 1, e / t) : 1)) : n), (o.done = e >= t), o),
          };
        }
        let a = nm(((s = i && i.length === e.length ? i : ng(e)), s.map((e) => e * t)), e, {
          ease: Array.isArray(r) ? r : e.map(() => r || ni).splice(0, e.length - 1),
        });
        return { calculatedDuration: t, next: (e) => ((o.value = a(e)), (o.done = e >= t), o) };
      }
      function nv(t, e, i = 0) {
        var n, s;
        let r;
        return e <= 0
          ? i
          : t.velocity
            ? t.velocity(e)
            : ((n = (e) => t.next(e).value), (s = t.next(e).value), em(s - n((r = Math.max(e - 5, 0))), e - r));
      }
      (t.s(["f", 0, nf], 83920), t.s(["f", 0, nm], 44230), t.s(["f", 0, ny], 68514), t.s(["f", 0, nv], 12008));
      let nx = { decay: i8, inertia: i8, tween: ny, keyframes: ny, spring: i6 };
      function nw(t) {
        "string" == typeof t.type && (t.type = nx[t.type]);
      }
      t.s(["f", 0, nw], 44573);
      let nb = (t, e) => (e - t > 40 && !tB.useManualTiming ? e : t);
      t.s(["f", 0, nb], 55560);
      let nT = (t) => t / 100,
        nS = (t) => Math.round(1e4 * t) / 1e4;
      class nA extends t7 {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              (t && t.updatedAt !== ee.now() && this.tick(ee.now()),
                (this.isStopped = !0),
                "idle" !== this.state && (this.teardown(), this.options.onStop?.()));
            }),
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause(),
            en(this, this.options));
        }
        initAnimation() {
          let { options: t } = this;
          nw(t);
          let { type: e = ny, repeat: i = 0, repeatDelay: n = 0, repeatType: s, velocity: r = 0 } = t,
            { keyframes: o } = t,
            a = e || ny;
          a !== ny && "number" != typeof o[0] && ((this.mixKeyframes = iR(nT, iK(o[0], o[1]))), (o = [0, 100]));
          let l = a(o === t.keyframes ? t : { ...t, keyframes: o });
          ("mirror" === s && (this.mirroredGenerator = a({ ...t, keyframes: [...o].reverse(), velocity: -r })),
            null === l.calculatedDuration && (l.calculatedDuration = iG(l)));
          let { calculatedDuration: h } = l;
          ((this.calculatedDuration = h),
            (this.resolvedDuration = h + n),
            (this.totalDuration = this.resolvedDuration * (i + 1) - n),
            (this.generator = l));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let { generator: i, totalDuration: n, calculatedDuration: s } = this;
          if (null === this.startTime) return i.next(0);
          let { delay: r = 0, keyframes: o, type: a, onUpdate: l, finalKeyframe: h } = this.options;
          (this.startTime === this.pendingStartTime && (this.startTime = nb(this.startTime, t)),
            (this.pendingStartTime = void 0),
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, t))
              : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let u = this.currentTime - r * (this.playbackSpeed >= 0 ? 1 : -1),
            c = this.playbackSpeed >= 0 ? u < 0 : u > n;
          ((this.currentTime = Math.max(u, 0)),
            "finished" === this.state && null === this.holdTime && (this.currentTime = n));
          let d = this.generate(this.currentTime, c),
            { done: p } = d;
          c || null === s || (p = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
          let f = null === this.holdTime && ("finished" === this.state || ("running" === this.state && p));
          return (
            f && a !== i8 && (d.value = t9(o, this.options, h, this.speed)),
            l && l(d.value),
            f && this.finish(),
            d
          );
        }
        at(t) {
          return this.holdTime ?? nS((t - this.startTime) * this.playbackSpeed);
        }
        sampleAt(t, e) {
          let { options: i, totalDuration: n } = this,
            s = this.at(t) - (i.delay || 0);
          return s >= n && i.type !== i8
            ? t9(i.keyframes, i, e ? void 0 : i.finalKeyframe)
            : this.generate(Math.max(s, 0), s < 0).value;
        }
        generate(t, e) {
          let i,
            { generator: n, totalDuration: s, mixKeyframes: r, mirroredGenerator: o, resolvedDuration: a } = this,
            { keyframes: l, repeat: h, repeatType: u, repeatDelay: c } = this.options,
            d = t,
            p = n;
          if (h) {
            let e = Math.min(t, s) / a,
              i = Math.floor(e),
              n = e % 1;
            (!n && e >= 1 && (n = 1),
              1 === n && i--,
              (i = Math.min(i, h + 1)) % 2 &&
                ("reverse" === u ? ((n = 1 - n), c && (n -= c / a)) : "mirror" === u && (p = o)),
              (d = m(0, 1, n) * a));
          }
          return (
            e ? ((this.delayState.value = l[0]), (i = this.delayState)) : (i = p.next(d)),
            r && !e && (i.value = r(i.value)),
            i
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return this.calculatedDuration / 1e3;
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return this.currentTime / 1e3;
        }
        set time(t) {
          ((t = tZ(t)),
            (this.currentTime = t),
            null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = t), this.tick(t)));
        }
        getGeneratorVelocity() {
          return nv(this.generator, this.currentTime, this.options.velocity);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (e && this.driver && this.updateTime(ee.now()),
            (this.playbackSpeed = t),
            e && this.driver && (this.time = this.currentTime / 1e3));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = i_, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))), this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime / (this.playbackSpeed || 1))
              : this.startTime || (this.startTime = e ?? (this.pendingStartTime = i)),
            "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"), this.updateTime(ee.now()), (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(), (this.state = "finished"), (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(), this.teardown(), (this.state = "finished"), this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null));
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let nP = { anticipate: nl, backInOut: na, circInOut: nc };
      class nE extends eu {
        constructor(t) {
          ("string" == typeof t.ease && t.ease in nP && (t.ease = nP[t.ease]),
            nw(t),
            super(t),
            void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime),
            (this.options = t));
        }
        elapsed() {
          return "running" === this.state ? (ee.now() - this.startTime) * this.speed : 1e3 * this.time;
        }
        sample(t) {
          if (!this.sampler) {
            let { motionValue: t, onUpdate: e, onComplete: i, onPlay: n, onStop: s, element: r, ...o } = this.options;
            ((this.sampler = new nA({ ...o, autoplay: !1 })), this.sampler.stop());
          }
          return this.sampler.sample(Math.max(0, t)).value;
        }
        liveValue() {
          let { state: t } = this;
          if ("running" === t || "paused" === t) return this.sample(this.elapsed());
        }
        updateMotionValue(t) {
          let { motionValue: e, element: i, name: n } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let { speed: s } = this,
            r = this.elapsed(),
            o = "running" === this.state && s ? m(0, 10, r) : 0,
            a = this.sample(r);
          (i && n && t1(i, n, a), e.setWithVelocity(this.sample(r - o * Math.sign(s)), a, o / Math.abs(s || 1)));
        }
      }
      let nk = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t && (z.test(t) || "0" === t) && !t.startsWith("url("))
        );
      function nM(t) {
        ((t.duration = 0), (t.type = "keyframes"));
      }
      let nC = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        nV = new Set([
          "color",
          "backgroundColor",
          "outlineColor",
          "fill",
          "stroke",
          "borderColor",
          "borderTopColor",
          "borderRightColor",
          "borderBottomColor",
          "borderLeftColor",
        ]),
        nj = t4(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        nD = (t, e) => t - e,
        nR = (t, e, i) => {
          let n = [];
          for (let s = 0; s <= i; s++) n.push(eZ(t, e, s / i));
          return n;
        },
        nL = (t, e) => (t.latestValues ? t.latestValues[e] : t.getValue(e)?.get());
      class nB extends nA {
        constructor(t) {
          let e = t.motionValue.owner.current,
            { driver: i = i_ } = t,
            n = (function (t) {
              let e = t.motionValue.owner,
                { onUpdate: i, transformTemplate: n } = e.getProps();
              return (
                !t.isHandoff &&
                !i &&
                !t.hasOnUpdate &&
                !n &&
                "inertia" !== t.type &&
                "none" === (nL(e, "transform") || "none") &&
                !nL(e, "pathRotation") &&
                !e.projection?.isProjecting()
              );
            })(t);
          ((t.driver = (t) => {
            let n = i(t);
            return {
              js: n,
              now: n.now,
              start: (t = !0) => {
                let i = ed.get(e);
                !i || i.isJS ? n.start(t) : i.schedule(!1, !t);
              },
              stop: () => {
                n.stop();
                let t = ed.get(e);
                t?.schedule(!t.isFinishing);
              },
            };
          }),
            super(t),
            (this.canAccelerate = n));
          let { stop: s } = this;
          this.stop = () => {
            (this.isAccelerated() && this.sync(), s());
          };
        }
        get group() {
          let t;
          return ((t = this.options.motionValue.owner.current), ed.get(t));
        }
        get js() {
          return this.driver?.js;
        }
        get name() {
          return this.options.name;
        }
        timing() {
          let { startTime: t, speed: e, totalDuration: i } = this,
            { delay: n = 0, repeatType: s } = this.options;
          return null !== this.holdTime
            ? [1 / 0, 0]
            : 1 / 0 === i
              ? [t + n / e, (this.resolvedDuration * ("loop" === s ? 1 : 2)) / e || 1]
              : [t + (n + i) / e, 0];
        }
        isAccelerated() {
          let { group: t, state: e } = this;
          return t?.tracks.has(this) && !t.isJS && this.canAccelerate && ("running" === e || "paused" === e);
        }
        liveValue() {
          return this.isAccelerated() ? this.sampleAt(ee.now()) : void 0;
        }
        tween() {
          let { keyframes: t, type: e, ease: i, times: n, repeat: s, delay: r = 0 } = this.options,
            o = es(i) ? ea(i) : /^(linear|ease(In|Out|InOut))$/.test(i) && el[i];
          if (o && !s && !n && 2 === t.length && e === ny && null === this.holdTime) {
            let t = this.startTime + r / this.speed;
            return [t, t + this.resolvedDuration / this.speed, o];
          }
        }
        boundaries(t, e) {
          let { startTime: i, speed: n, resolvedDuration: s, options: r } = this,
            { delay: o = 0, repeat: a = 0, repeatDelay: l = 0, repeatType: h, times: u, keyframes: c, type: d } = r,
            p = (d || ny) === ny ? u || ng(c) : [0, 1],
            f = i + o / n,
            m = [];
          if (null !== this.holdTime || !(s > 0)) return m;
          for (let i = Math.max(0, Math.floor(((t - f) * n) / s)); i <= a; i++) {
            let r = f + (i * s) / n;
            if (r > e) break;
            for (let o of p) {
              let a = r + ((i % 2 && h && "loop" !== h ? 1 - o : o) * (s - l)) / n;
              a > t && a < e && m.push(a);
            }
          }
          return m;
        }
        numberAt(t) {
          return parseFloat(this.sampleAt(t, !0));
        }
        sync() {
          let t = ee.now();
          this.options.motionValue.setWithVelocity(this.sampleAt(t - 10, !0), this.sampleAt(t, !0), 10);
        }
        play() {
          var t;
          let e, i, n, s, r, o, a, l, h, u, c, d, f, m, g, y, v, x, w, b;
          this.isStopped ||
            ((
              this.group ||
              ((e = (t = this.options.motionValue.owner).current),
              (i = new Set()),
              (n = new Map()),
              (s = {}),
              (r = []),
              (o = new Map()),
              (a = []),
              (l = !1),
              (h = !1),
              (u = !1),
              (c = -1 / 0),
              (d = (t) => {
                for (let e of i) if (e.name === t) return !0;
              }),
              (f = (e, i) => {
                let o = {};
                for (let a of void 0 === e ? p : r) {
                  let r = n.get(a),
                    l = void 0 === e ? nL(t, a) : r ? r.sampleAt(i > e && !r.timing()[1] ? i : e) : s[a];
                  void 0 !== l && (o[a] = l);
                }
                return o;
              }),
              (m = (t = f()) => {
                e.style.transform = eF(t, {});
              }),
              (g = (t = !0) => {
                (t && m(), a.forEach(({ animation: t }) => t.cancel()), (a = []));
              }),
              (y = (t, e, i = 1 / 0) => {
                let n = { animation: t, offset: e, end: i };
                ((t.startTime = ee.now() + e),
                  i < 1 / 0 &&
                    (t.onfinish = () => {
                      ((n.isDone = !0),
                        a.some((t) => 1 / 0 === t.end) && (t.cancel(), (a = a.filter((t) => t !== n))),
                        b.schedule(!1));
                    }),
                  (t.oncancel = () => a.includes(n) && b.demote()),
                  a.push(n));
              }),
              (v = (t, e, i) => {
                let n = (e, i) => Math.abs(t(i) - t(e)),
                  s = n(e, i);
                for (; i - e > 0.01;) {
                  let t = (e + i) / 2;
                  n(e, t) > n(t, i) ? (i = t) : (e = t);
                }
                return n(e, i) > s / 2 ? [e, i] : [];
              }),
              (x = (t, i, n, s = { fill: "both" }, r, o) => {
                let a = t.flatMap((t) => t.boundaries(i, n)),
                  l =
                    o ||
                    ((t, e, i, n) => {
                      let s,
                        r,
                        o = Math.min(200, Math.max(2, Math.ceil((i - e) / 10)));
                      if (4 * n.length > o) return;
                      let a = nR(e, i, o).concat(n).sort(nD);
                      for (let e of t) {
                        let t = a.map((t) => e.numberAt(t)),
                          [i] = t,
                          n = t[t.length - 1] - i,
                          o = t.map((t) => (n ? (t - i) / n : t - i));
                        if (n)
                          if (s) {
                            if (o.some((t, e) => !(0.001 >= Math.abs(t - s[e])))) return;
                          } else ((s = o), (r = (t) => (e.numberAt(t) - i) / n));
                        else if (o.some((t) => !(0.001 >= Math.abs(t)))) return;
                      }
                      if (!s || s.every((t, n) => 0.001 >= Math.abs(t - nf(e, i, a[n])))) return "linear";
                      let l = [],
                        h = (t, n = r(t)) => l.push(nS(n) + " " + nS(100 * nf(e, i, t)) + "%");
                      return (
                        s.forEach((t, e) => {
                          (e && Math.abs(t - s[e - 1]) > 0.2 && v(r, a[e - 1], a[e]).forEach((t) => h(t)), h(a[e], t));
                        }),
                        "linear(" + l + ")"
                      );
                    })(t, i, n, a),
                  h = l
                    ? [i, n]
                    : ((t, e, i, n) => {
                        let s = [e],
                          r = (e, i, n) => {
                            if (
                              i - e < 1 ||
                              t.every(
                                (t) =>
                                  !(
                                    Math.abs(t.numberAt((e + i) / 2) - (t.numberAt(e) + t.numberAt(i)) / 2) >
                                    (t.name.startsWith("scale") ? 0.001 : 0.1)
                                  ),
                              )
                            )
                              s.push(i);
                            else if (n < 4) (r(e, (e + i) / 2, n + 1), r((e + i) / 2, i, n + 1));
                            else {
                              for (let n of t) s.push(...v((t) => n.numberAt(t), e, i));
                              s.push(i);
                            }
                          },
                          o = nR(e, i, Math.ceil((i - e) / 100));
                        for (let t of n) o.push(t, Math.min(t + 0.01, i));
                        let a = e;
                        for (let t of o.sort(nD)) (t > a && r(a, t, 0), (a = t));
                        return s.sort(nD);
                      })(t, i, n, a),
                  u = h.map((t) =>
                    ((t, e) => {
                      let i = "",
                        n = f(t, e);
                      for (let t in n) i += (eL[t] || t) + "(" + eR(n[t], q[t]) + ") ";
                      return i || "none";
                    })(t, r),
                  ),
                  c = { transform: u };
                return (
                  l || (c.offset = h.map((t) => nf(i, n, t))),
                  u.every((t) => t === u[0]) && (m(f(i, r)), (c = null)),
                  e.animate(c, { ...s, duration: n - i, easing: l || "linear" })
                );
              }),
              (w = () => {
                let d = ee.now();
                if (
                  (b.isJS ||
                    ((b.isFinishing = !0),
                    i.forEach((e) => {
                      let [i, n] = e.timing();
                      "running" === e.state &&
                        e.speed > 0 &&
                        !n &&
                        i <= d + 1 &&
                        (e.complete(), (s[e.name] = nL(t, e.name)), o.has(e) || (l = !0));
                    }),
                    (b.isFinishing = !1)),
                  (h = !1),
                  i.forEach(({ state: t }, e) => {
                    ("idle" === t || "finished" === t) && i.delete(e);
                  }),
                  !i.size)
                ) {
                  (ed.delete(e), b.isJS || g());
                  return;
                }
                for (let t of i) if (!t.canAccelerate) return b.demote(!0);
                b.isJS && ((b.isJS = !1), (l = !0), i.forEach((t) => t.js?.stop()));
                let f = l,
                  m = u;
                if (
                  ((l = u = !1),
                  f ||
                    !((t) => {
                      let e,
                        n = 0;
                      for (let s of i) {
                        let i = o.get(s);
                        if (!i) return !1;
                        let [r, a, l] = i,
                          h = s.at(t),
                          u = 1 / 0 === s.timing()[0];
                        if (l) {
                          if (u && h === r) continue;
                          return !1;
                        }
                        let c = (h - r) / a,
                          d = u ? 0 : s.speed / a;
                        if (void 0 === e) ((e = c), (n = d));
                        else if (Math.abs(c - e) > 1 || d !== n) return !1;
                      }
                      if (void 0 === e) return !0;
                      if (!a.length) return !1;
                      for (let { offset: t, end: i, isDone: n } of a) {
                        let s = e - t;
                        if (i < 1 / 0 && (n ? s < i - 1 : s < 0 || s >= i)) return !1;
                      }
                      for (let { animation: i, offset: s, isDone: r } of a) {
                        if (r) continue;
                        let o = e - s;
                        n ? ((i.playbackRate = n), (i.startTime = t - o / n)) : (i.pause(), (i.currentTime = o));
                      }
                      return !0;
                    })(d))
                ) {
                  if (m) {
                    if (d - c < 100) return b.demote();
                    c = d;
                  }
                  if (
                    !((l) => {
                      let h = l,
                        u = 0,
                        c = 0,
                        d = [],
                        f = [],
                        m = new Set();
                      for (let t of (n.clear(), (o = new Map()), i)) {
                        n.set(t.name, t);
                        let [e, i] = t.timing(),
                          s = 1 / 0 === e;
                        if ((o.set(t, [t.at(l), t.speed, s]), s)) {
                          t.sync();
                          continue;
                        }
                        if (t.speed < 0) return;
                        if (i) {
                          if (u) {
                            let t = (e - c) / i;
                            if (Math.abs(i - u) > 1 || Math.abs(t - Math.round(t)) * u > 1) return;
                          } else ((u = i), (c = e));
                          f.push(t);
                        } else m.add(e);
                        (d.push(t), (h = Math.max(h, e)));
                      }
                      ((s = {}),
                        (r = p.filter((e) => {
                          if (n.has(e)) return !0;
                          let i = (s[e] = nL(t, e));
                          return void 0 !== i && parseFloat(i) !== +!!e.startsWith("scale");
                        })),
                        g(!1));
                      let v =
                        !u &&
                        ((t) => {
                          let e;
                          for (let i of t) {
                            let t = i.tween();
                            if (!t || e?.some((e, i) => (i < 2 ? Math.abs(t[i] - e) > 1 : t[i] !== e))) return;
                            e = t;
                          }
                          return e;
                        })(d);
                      try {
                        if (v && v[1] > l) {
                          let [t, e, i] = v;
                          y(x(d, t, e, void 0, void 0, i), t - l, e - t);
                        } else
                          h > l &&
                            (y(x(d, l, h), 0, h - l),
                            m.forEach((t) => t < h - 1 && y(e.animate(null, { duration: t - l }), 0, t - l)));
                        if (u) {
                          let t = c + Math.floor((h - c) / u) * u;
                          y(
                            x(f, t, t + u, { iterations: 1 / 0, iterationStart: (h - t) / u, fill: "forwards" }, h),
                            h - l,
                          );
                        }
                      } catch {
                        return;
                      }
                      return (a.length || g(), !0);
                    })(d)
                  )
                    return b.demote();
                }
              }),
              (b = {
                tracks: i,
                isJS: !1,
                isFinishing: !1,
                schedule(t, e) {
                  (l || (l = t),
                    u || (u = !!e),
                    h || ((h = !0), tO.isProcessing ? tN.render(w, !1, !0) : queueMicrotask(w)));
                },
                check() {
                  if (!b.isJS) {
                    for (let e in s) if (nL(t, e) !== s[e] && !d(e)) return b.schedule(!0, !0);
                  }
                },
                demote(t) {
                  b.isJS ||
                    (i.forEach((e) => {
                      (e.isAccelerated() && e.sync(), t || (e.canAccelerate = !1));
                    }),
                    (b.isJS = !0),
                    (o = new Map()),
                    g(),
                    i.forEach((t) => "running" === t.state && t.js?.start()));
                },
              }),
              ed.set(e, b),
              b)
            ).tracks.add(this),
            super.play());
        }
        pause() {
          (super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1)));
        }
        complete() {
          super.complete();
          let { group: t } = this;
          t && !t.isJS && this.canAccelerate && this.tick(ee.now());
        }
        get time() {
          return this.isAccelerated()
            ? m(0, this.totalDuration, this.at(ee.now()) - (this.options.delay || 0)) / 1e3
            : super.time;
        }
        set time(t) {
          super.time = t;
        }
        attachTimeline(t) {
          return ((this.canAccelerate = !1), this.group?.demote(!0), super.attachTimeline(t));
        }
      }
      class nF extends t7 {
        constructor(t) {
          (super(),
            (this.stop = () => {
              (this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel());
            }),
            (this.createdAt = ee.now()));
          let { keyframes: e, name: i, motionValue: n, element: s } = t;
          (t.autoplay ?? (t.autoplay = !0),
            t.delay ?? (t.delay = 0),
            t.type ?? (t.type = "keyframes"),
            t.repeat ?? (t.repeat = 0),
            t.repeatDelay ?? (t.repeatDelay = 0),
            t.repeatType ?? (t.repeatType = "loop"));
          let r = s?.KeyframeResolver || t_;
          ((this.keyframeResolver = new r(e, (e, i, n) => this.onKeyframesResolved(e, i, t, !n), i, n, s)),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          let s;
          this.keyframeResolver = void 0;
          let { name: r, type: o, velocity: a, delay: l, isHandoff: h, onUpdate: u } = i;
          this.resolvedAt = ee.now();
          let c = !0;
          !(function (t, e, i, n) {
            let s = t[0];
            if (null === s) return !1;
            if ("display" === e || "visibility" === e) return !0;
            let r = t[t.length - 1],
              o = nk(s, e),
              a = nk(r, e);
            return o && a
              ? (function (t) {
                  let e = t[0];
                  if (1 === t.length) return !0;
                  for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                })(t) ||
                  (("spring" === i || eh(i)) && n)
              : (o !== a &&
                  ta(
                    `You are trying to animate ${e} from "${s}" to "${r}". "${o ? r : s}" is not an animatable value.`,
                  ),
                !1);
          })(t, r, o, a) &&
            ((c = !1),
            (tB.instantAnimations || !l) && u?.(t9(t, i, e)),
            (t[0] = t[t.length - 1]),
            nM(i),
            (i.repeat = 0));
          let { onComplete: d } = i;
          ((i.finalKeyframe = e),
            (i.keyframes = t),
            (i.onComplete = () => {
              (d?.(), this.notifyFinished());
            }));
          let f =
              c &&
              !h &&
              (function (t) {
                let { motionValue: e, name: i, repeatDelay: n, repeatType: s, damping: r, type: o, keyframes: a } = t;
                if (!i || !(ec.has(i) || nV.has(i))) return !1;
                let l = e?.owner?.current;
                if (!(l instanceof HTMLElement) && !(l instanceof SVGElement)) return !1;
                let { onUpdate: h, transformTemplate: u } = e.owner.getProps();
                return (
                  nj() &&
                  (ec.has(i) ||
                    (nV.has(i) &&
                      (function (t) {
                        for (let e = 0; e < t.length; e++) if ("string" == typeof t[e] && nC.test(t[e])) return !0;
                        return !1;
                      })(a))) &&
                  ("transform" !== i || !u) &&
                  !h &&
                  !n &&
                  "mirror" !== s &&
                  0 !== r &&
                  "inertia" !== o
                );
              })(i),
            m =
              !f &&
              (({ name: t, motionValue: e }) =>
                t && p.includes(t) && e?.owner?.current instanceof HTMLElement && nj() && er())(i);
          if (
            (n &&
              (f || m || this.resolvedAt !== this.createdAt) &&
              (i.startTime ?? (i.startTime = nb(this.createdAt, this.resolvedAt))),
            f)
          ) {
            i.element = i.motionValue?.owner?.current;
            try {
              s = new nE(i);
            } catch {
              s = new nA(i);
            }
          } else s = m ? new nB(i) : new nA(i);
          (this.pendingTimeline &&
            ((this.stopTimeline = s.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
            (this._animation = s));
        }
        get finished() {
          return this._animation ? this._animation.finished : super.finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        liveValue() {
          return this._animation?.liveValue?.();
        }
        get animation() {
          return (
            this._animation || (this.keyframeResolver?.resume(), (tH = !0), tK(), tX(), (tH = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation ? (this.stopTimeline = this.animation.attachTimeline(t)) : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
        }
      }
      let nI = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nO = { type: "keyframes", duration: 0.8 },
        nN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        n$ = new Set([
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ]),
        nU =
          (t, e, i, n = {}, s, r) =>
          (o) => {
            let a = ij(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: h = 0 } = n;
            h -= tZ(l);
            let u = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -h,
              onUpdate: (t) => {
                (e.set(t), a.onUpdate && a.onUpdate(t));
              },
              onComplete: () => {
                (o(), a.onComplete && a.onComplete());
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : s,
              hasOnUpdate: !!a.onUpdate,
            };
            (!(function (t) {
              for (let e in t) if (!n$.has(e)) return !0;
              return !1;
            })(a) &&
              Object.assign(
                u,
                ((t, { keyframes: e }) =>
                  e.length > 2
                    ? nO
                    : f.has(t)
                      ? t.startsWith("scale")
                        ? {
                            type: "spring",
                            stiffness: 550,
                            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                            restSpeed: 10,
                          }
                        : nI
                      : nN)(t, u),
              ),
              u.duration && (u.duration = tZ(u.duration)),
              u.repeatDelay && (u.repeatDelay = tZ(u.repeatDelay)),
              void 0 !== u.from && (u.keyframes[0] = u.from));
            let c = !1;
            if (
              ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) || (nM(u), 0 === u.delay && (c = !0)),
              (tB.instantAnimations || tB.skipAnimations || s?.shouldSkipAnimations || a.skipAnimations) &&
                ((c = !0), nM(u), (u.delay = 0)),
              (u.allowFlatten = !a.type && !a.ease),
              c && !r && void 0 !== e.get())
            ) {
              let t = t9(u.keyframes, a);
              if (void 0 !== t)
                return void tN.update(() => {
                  (u.onUpdate(t), u.onComplete());
                });
            }
            return a.isSync ? new nA(u) : new nF(u);
          },
        nW = "u" > typeof window;
      function nz(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        let { transition: r, transitionEnd: o, ...a } = e,
          l = t.getDefaultTransition();
        r = r ? iV(r, l) : l;
        let h = r?.reduceMotion,
          u = r?.skipAnimations;
        n && (r = n);
        let c = [],
          d = s && t.animationState?.getState()[s],
          p = r?.path;
        for (let e in (p && p.animateVisualElement(t, a, r, i, c), a)) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            s = a[e];
          if (
            void 0 === s ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = i in t && !e[i];
                return ((e[i] = !1), n);
              })(d, e))
          )
            continue;
          let o = { delay: i, ...ij(r || {}, e) };
          u && (o.skipAnimations = !0);
          let l = n.get();
          if (void 0 !== l && !n.isAnimating() && !Array.isArray(s) && s === l && !o.velocity) {
            tN.update(() => n.set(s));
            continue;
          }
          let p = !1;
          if (nW && window.MotionHandoffAnimation) {
            let i = t.props[iS];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, tN);
              null !== t && ((o.startTime = t), (p = !0));
            }
          }
          iD(t, e);
          let f = h ?? t.shouldReduceMotion;
          n.start(nU(e, n, s, f && ts.has(e) ? { type: !1 } : o, t, p));
          let m = n.animation;
          m && c.push(m);
        }
        if (o) {
          let e = () =>
            tN.update(() => {
              o &&
                (function (t, e) {
                  let { transitionEnd: i = {}, transition: n = {}, ...s } = iM(t, e) || {};
                  for (let e in (s = { ...s, ...i })) {
                    var r;
                    let i = Array.isArray((r = s[e])) ? r[r.length - 1] || 0 : r;
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, ev(i));
                  }
                })(t, o);
            });
          c.length ? Promise.all(c).then(e) : e();
        }
        return c;
      }
      function nY(t, e, i, n = 0, s = 1) {
        let r = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          a = (o - 1) * n;
        return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n;
      }
      function nH(t, e, i = {}) {
        let n = iM(t, e, iC(t, i.type)),
          s = i.transitionOverride || (n?.transition ?? (t.getDefaultTransition() || {})),
          r = () => Promise.all(n ? nz(t, n, i) : []),
          o = (n = 0) => {
            let { variantChildren: r } = t,
              { delayChildren: o = 0, staggerChildren: a, staggerDirection: l } = s,
              h = [];
            return (
              r?.forEach((t) => {
                (t.notify("AnimationStart", e),
                  h.push(
                    nH(t, e, { ...i, delay: n + ("function" == typeof o ? 0 : o) + nY(r, t, o, a, l) }).then(() =>
                      t.notify("AnimationComplete", e),
                    ),
                  ));
              }),
              Promise.all(h)
            );
          },
          { when: a } = s;
        return a ? ("beforeChildren" === a ? r().then(() => o()) : o().then(r)) : Promise.all([r(), o(i.delay)]);
      }
      function nX(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let nK = [...eT].reverse();
      function n_() {
        let t = {};
        for (let e of eT)
          t[e] = { isActive: "animate" === e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
        return t;
      }
      let nG = 0;
      function nq(t) {
        return [t("x"), t("y")];
      }
      function nZ(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n));
      }
      let nJ = { x: !1, y: !1 };
      function nQ(t) {
        return t.max - t.min;
      }
      function n0(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = eZ(e.min, e.max, t.origin)),
          (t.scale = nQ(i) / nQ(e)),
          (t.translate = eZ(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) && (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) || isNaN(t.translate)) && (t.translate = 0));
      }
      function n1(t, e, i, n) {
        (n0(t.x, e.x, i.x, n ? n.originX : void 0), n0(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function n4(t, e, i, n = 0) {
        ((t.min = (n ? eZ(i.min, i.max, n) : i.min) + e.min), (t.max = t.min + nQ(e)));
      }
      function n2(t, e, i, n = 0) {
        let s = n ? eZ(i.min, i.max, n) : i.min;
        ((t.min = e.min - s), (t.max = t.min + nQ(e)));
      }
      function n3(t, e, i, n) {
        (n2(t.x, e.x, i.x, n?.x), n2(t.y, e.y, i.y, n?.y));
      }
      function n5(t) {
        return h(t) && "ownerSVGElement" in t;
      }
      function n6(t, e, i) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let n = document;
          e && (n = e.current);
          let s = i?.[t] ?? n.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t).filter((t) => null != t);
      }
      t.s(["f", 0, n6], 49652);
      let n8 = new WeakMap(),
        n9 = (t, e, i) => (n, s) => (s && s[0] ? s[0][t + "Size"] : n5(n) && "getBBox" in n ? n.getBBox()[e] : n[i]),
        n7 = n9("inline", "width", "offsetWidth"),
        st = n9("block", "height", "offsetHeight");
      function se({ target: t, borderBoxSize: e }) {
        n8.get(t)?.forEach((i) => {
          i(t, {
            get width() {
              return n7(t, e);
            },
            get height() {
              return st(t, e);
            },
          });
        });
      }
      function si(t) {
        t.forEach(se);
      }
      let sn = new Set();
      function ss(t, e) {
        let s;
        return "function" == typeof t
          ? (sn.add(t),
            n ||
              ((n = () => {
                let t = {
                  get width() {
                    return window.innerWidth;
                  },
                  get height() {
                    return window.innerHeight;
                  },
                };
                sn.forEach((e) => e(t));
              }),
              window.addEventListener("resize", n)),
            () => {
              (sn.delete(t),
                sn.size || "function" != typeof n || (window.removeEventListener("resize", n), (n = void 0)));
            })
          : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(si)),
            (s = n6(t)).forEach((t) => {
              let n = n8.get(t);
              (n || ((n = new Set()), n8.set(t, n)), n.add(e), i?.observe(t));
            }),
            () => {
              s.forEach((t) => {
                let n = n8.get(t);
                (n?.delete(e), n?.size || i?.unobserve(t));
              });
            });
      }
      t.s(["f", 0, ss], 61327);
      let sr = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        so = new Set(["INPUT", "SELECT", "TEXTAREA"]),
        sa = (t) => ("mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary);
      function sl(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function sh(t, e, i, n) {
        return nZ(t, e, (t) => sa(t) && i(t, sl(t)), n);
      }
      let su = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        sc = (t, e) => Math.abs(t - e),
        sd = new Set(["auto", "scroll"]);
      class sp {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3,
            element: o,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (t) => {
              this.handleScroll(t.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              ((this.hasPendingMove = !1),
                this.lastRawMoveEventInfo &&
                  (this.lastMoveEventInfo = sf(this.lastRawMoveEventInfo, this.transformPagePoint)));
              let i = sg(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(sc(t.x, e.x) ** 2 + sc(t.y, e.y) ** 2) >= this.distanceThreshold);
              if (!n && !s) return;
              let { point: r } = i;
              this.history.push({ ...r, timestamp: ee.now() });
              let { onStart: o, onMove: a } = this.handlers;
              (n || (o && o(this.lastMoveEvent, i), (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, i));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastRawMoveEventInfo = e),
                (this.lastMoveEventInfo = sf(e, this.transformPagePoint)),
                (this.hasPendingMove = !0),
                tN.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              (this.hasPendingMove && this.updatePoint(), this.end());
              let { onEnd: i, onSessionEnd: n, resumeAnimation: s } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sg(
                "pointercancel" === t.type ? this.lastMoveEventInfo : sf(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, r), n && n(t, r));
            }),
            !sa(t))
          )
            return;
          ((this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = n || window));
          let a = sf(sl(t), this.transformPagePoint),
            { point: l } = a,
            { timestamp: h } = tO;
          this.history = [{ ...l, timestamp: h }];
          let { onSessionStart: u } = e;
          u && u(t, sg(a, this.history));
          let c = { passive: !0, capture: !0 };
          ((this.removeListeners = iR(
            sh(this.contextWindow, "pointermove", this.handlePointerMove, c),
            sh(this.contextWindow, "pointerup", this.handlePointerUp, c),
            sh(this.contextWindow, "pointercancel", this.handlePointerUp, c),
          )),
            o && this.startScrollTracking(o));
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e;) {
            let t = getComputedStyle(e);
            ((sd.has(t.overflowX) || sd.has(t.overflowY)) &&
              this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
              (e = e.parentElement));
          }
          (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
            window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
            window.addEventListener("scroll", this.onWindowScroll),
            (this.removeScrollListeners = () => {
              (window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
                window.removeEventListener("scroll", this.onWindowScroll));
            }));
        }
        handleScroll(t) {
          let e = this.scrollPositions.get(t);
          if (!e) return;
          let i = t === window,
            n = i ? { x: window.scrollX, y: window.scrollY } : { x: t.scrollLeft, y: t.scrollTop },
            s = { x: n.x - e.x, y: n.y - e.y };
          (0 !== s.x || 0 !== s.y) &&
            (i
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += s.x), (this.lastMoveEventInfo.point.y += s.y))
              : this.history.length > 0 && ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
            this.scrollPositions.set(t, n),
            tN.update(this.updatePoint, !0));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            t$(this.updatePoint));
        }
      }
      function sf(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function sm(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sg({ point: t }, e) {
        return {
          point: t,
          delta: sm(t, sy(e)),
          offset: sm(t, e[0]),
          velocity: (function (t) {
            if (t.length < 2) return { x: 0, y: 0 };
            let e = t.length - 1,
              i = null,
              n = sy(t);
            for (; e >= 0 && ((i = t[e]), !(n.timestamp - i.timestamp > tZ(0.1)));) e--;
            if (!i) return { x: 0, y: 0 };
            i === t[0] && t.length > 2 && n.timestamp - i.timestamp > 2 * tZ(0.1) && (i = t[1]);
            let s = (n.timestamp - i.timestamp) / 1e3;
            if (0 === s) return { x: 0, y: 0 };
            let r = { x: (n.x - i.x) / s, y: (n.y - i.y) / s };
            return (1 / 0 === r.x && (r.x = 0), 1 / 0 === r.y && (r.y = 0), r);
          })(e),
        };
      }
      function sy(t) {
        return t[t.length - 1];
      }
      function sv(t, e, i) {
        return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0 };
      }
      function sx(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n });
      }
      function sw(t, e, i) {
        return { min: sb(t, e), max: sb(t, i) };
      }
      function sb(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sT = new WeakMap();
      class sS {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ti()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let s = (t) => {
              (e && this.snapToCursor(t), this.stopAnimation());
            },
            r = (t, e) => {
              let { drag: i, dragPropagation: n, onDragStart: s } = this.getProps();
              if (
                i &&
                !n &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (function (t) {
                  if ("x" === t || "y" === t)
                    if (nJ[t]) return null;
                    else
                      return (
                        (nJ[t] = !0),
                        () => {
                          nJ[t] = !1;
                        }
                      );
                  return nJ.x || nJ.y
                    ? null
                    : ((nJ.x = nJ.y = !0),
                      () => {
                        nJ.x = nJ.y = !1;
                      });
                })(i)),
                !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                nq((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (C.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      n && (e = nQ(n) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                s && tN.update(() => s(t, e), !1, !0),
                iD(this.visualElement, "transform"));
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            o = (t, e) => {
              ((this.latestPointerEvent = t), (this.latestPanInfo = e));
              let { dragPropagation: i, dragDirectionLock: n, onDirectionLock: s, onDrag: r } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: o } = e;
              if (n && null === this.currentDirection) {
                ((this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (Math.abs(t.y) > e ? (i = "y") : Math.abs(t.x) > e && (i = "x"), i);
                })(o)),
                  null !== this.currentDirection && s && s(this.currentDirection));
                return;
              }
              (this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                r && tN.update(() => r(t, e), !1, !0));
            },
            a = (t, e) => {
              ((this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                this.stop(t, e),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            l = () => {
              let { dragSnapToOrigin: t } = this.getProps();
              (t || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: h } = this.getProps();
          this.panSession = new sp(
            t,
            { onSessionStart: s, onStart: r, onMove: o, onSessionEnd: a, resumeAnimation: l },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: h,
              distanceThreshold: i,
              contextWindow: su(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            s = this.isDragging;
          if ((this.cancel(), !s || !n || !i)) return;
          let { velocity: r } = n;
          this.startAnimation(r);
          let { onDragEnd: o } = this.getProps();
          o && tN.postRender(() => o(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: i } = this.getProps();
          (!i && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(), (this.panSession = void 0));
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !sP(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eZ(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i && t > i && (t = n ? eZ(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          (t && iP(t)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (t, { top: e, left: i, bottom: n, right: s }) {
                  return { x: sv(t.x, i, s), y: sv(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sw(t, "left", "right"), y: sw(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              !iP(t) &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nq((t) => {
                var e, n;
                let s;
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] =
                    ((e = i.layoutBox[t]),
                    (n = this.constraints[t]),
                    (s = {}),
                    void 0 !== n.min && (s.min = n.min - e.min),
                    void 0 !== n.max && (s.max = n.max - e.min),
                    s));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
          if (!e || !iP(e)) return !1;
          let n = e.current;
          tl();
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          s.root && ((s.root.scroll = void 0), s.root.updateScroll());
          let r = (function (t, e, i) {
              let n = e7(t, i),
                { scroll: s } = e;
              return (s && (e5(n.x, s.offset.x), e5(n.y, s.offset.y)), n);
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            o = ((t = s.layout.layoutBox), { x: sx(t.x, r.x), y: sx(t.y, r.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = eq(t)));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nq((o) => {
              if (!sP(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              (!0 === r || r === o) && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (iD(this.visualElement, t), i.start(nU(t, i, 0, e, this.visualElement, !1)));
        }
        stopAnimation() {
          nq((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`;
          return (
            this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0)
          );
        }
        snapToCursor({ clientX: t, clientY: e }) {
          let { drag: i } = this.getProps(),
            n = { x: t, y: e },
            s = this.visualElement.getTransformPagePoint()?.(n) || n,
            r = this.visualElement.measureViewportBox();
          nq((t) => {
            if (!sP(t, i, this.currentDirection)) return;
            let e = this.getAxisMotionValue(t),
              { min: n, max: o } = r[t];
            e.set((e.get() || 0) + s[t] - eZ(n, o, 0.5));
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iP(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = this.constraints,
            s = { x: 0, y: 0 };
          nq((t) => {
            var e, i;
            let r,
              o,
              a,
              l = this.getAxisMotionValue(t).get();
            s[t] =
              ((e = { min: l, max: l }),
              (i = n[t]),
              (r = 0.5),
              (o = nQ(e)),
              (a = nQ(i)) > o ? (r = nf(i.min, i.max - o, e.min)) : o > a && (r = nf(e.min, e.max - a, i.min)),
              m(0, 1, r));
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            nq((e) => {
              let i = this.getAxisMotionValue(e);
              if (!sP(e, t, null) || !i.get()) return;
              let { min: n, max: r } = this.constraints[e];
              i.set(eZ(n, r, s[e]));
            }),
            this.visualElement.render());
        }
        addListeners() {
          let t;
          if (!this.visualElement.current) return;
          sT.set(this.visualElement, this);
          let e = this.visualElement.current,
            i = sh(e, "pointerdown", (t) => {
              let { drag: i, dragListener: n = !0 } = this.getProps(),
                s = t.target,
                r = s !== e && (so.has(s.tagName) || !0 === s.isContentEditable);
              i && n && !r && this.start(t);
            }),
            n = () => {
              var i, n, s;
              let r,
                o,
                { dragConstraints: a } = this.getProps();
              iP(a) &&
                a.current &&
                ((this.constraints = this.resolveRefConstraints()),
                t ||
                  ((i = e),
                  (n = a.current),
                  (r = ss(i, sA((s = () => this.scalePositionWithinConstraints())))),
                  (o = ss(n, sA(s))),
                  (t = () => {
                    (r(), o());
                  })));
            },
            { projection: s } = this.visualElement,
            r = s.addEventListener("measure", n);
          (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), tN.read(n));
          let o = nZ(window, "resize", () => this.scalePositionWithinConstraints()),
            a = s.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e }) => {
              this.isDragging &&
                e &&
                (nq((e) => {
                  let i = this.getAxisMotionValue(e);
                  i && ((this.originPoint[e] += t[e].translate), i.set(i.get() + t[e].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (o(), i(), r(), a && a(), t && t());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function sA(t) {
        let e = !0;
        return () => {
          if (e) {
            e = !1;
            return;
          }
          t();
        };
      }
      function sP(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let sE = (t) => (e, i) => {
          t && tN.update(() => t(e, i), !1, !0);
        },
        sk = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      var sM = s;
      let sC = !1;
      class sV extends sM.Component {
        componentDidMount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i, layoutId: n } = this.props,
            { projection: s } = t;
          (s &&
            (e.group && e.group.add(s),
            i && i.register && n && i.register(s),
            sC && s.root.didUpdate(),
            s.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            s.setOptions({
              ...s.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (sk.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let { layoutDependency: e, visualElement: i, drag: n, isPresent: s } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = s),
              t.layoutDependency !== e && r.setOptions({ ...r.options, layoutDependency: e }),
              (sC = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s ? r.willUpdate() : this.safeToRemove(),
              t.isPresent !== s &&
                (s
                  ? r.promote()
                  : r.relegate() ||
                    tN.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { visualElement: t, layoutAnchor: e } = this.props,
            { projection: i } = t;
          i &&
            ((i.options.layoutAnchor = e),
            i.root.didUpdate(),
            ep.postRender(() => {
              !i.currentAnimation && i.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: t, layoutGroup: e, switchLayoutGroup: i } = this.props,
            { projection: n } = t;
          ((sC = !0),
            n &&
              (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n)));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sj(t) {
        let [e, i] = d(),
          n = (0, sM.useContext)(r);
        return (0, is.jsx)(sV, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, sM.useContext)(iA),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let sD = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
        sR = (t) => ("number" == typeof t ? t : parseFloat(t));
      t.s(["f", 0, sR], 85260);
      let sL = sD.length,
        sB = (t) => "number" == typeof t || V.test(t);
      function sF(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let sI = sN(0, 0.5, nu),
        sO = sN(0.5, 0.95, tL);
      function sN(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(nf(t, e, n)));
      }
      function s$(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function sU(t, e) {
        (s$(t.x, e.x), s$(t.y, e.y));
      }
      function sW(t, e) {
        ((t.translate = e.translate), (t.scale = e.scale), (t.originPoint = e.originPoint), (t.origin = e.origin));
      }
      function sz(t, e, i, n, s) {
        return ((t -= e), (t = n + (1 / i) * (t - n)), void 0 !== s && (t = n + (1 / s) * (t - n)), t);
      }
      function sY(t, e, [i, n, s], r, o) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
          if ((C.test(e) && ((e = parseFloat(e)), (e = eZ(o.min, o.max, e / 100) - o.min)), "number" != typeof e))
            return;
          let a = eZ(r.min, r.max, n);
          (t === r && (a -= e), (t.min = sz(t.min, e, i, a, s)), (t.max = sz(t.max, e, i, a, s)));
        })(t, e[i], e[n], e[s], e.scale, r, o);
      }
      let sH = ["x", "scaleX", "originX"],
        sX = ["y", "scaleY", "originY"];
      function sK(t, e, i, n) {
        (sY(t.x, e, sH, i ? i.x : void 0, n ? n.x : void 0), sY(t.y, e, sX, i ? i.y : void 0, n ? n.y : void 0));
      }
      function s_(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function sG(t) {
        return s_(t.x) && s_(t.y);
      }
      function sq(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function sZ(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
      }
      function sJ(t, e) {
        return sZ(t.x, e.x) && sZ(t.y, e.y);
      }
      function sQ(t) {
        return nQ(t.x) / nQ(t.y);
      }
      function s0(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
      }
      class s1 {
        constructor() {
          this.members = [];
        }
        add(t) {
          tJ(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            let i = this.members[e];
            if (i === t || i === this.lead || i === this.prevLead) continue;
            let n = i.instance;
            (n && !1 !== n.isConnected) || i.snapshot || (tQ(this.members, i), i.unmount());
          }
          t.scheduleRender();
        }
        remove(t) {
          if ((tQ(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            let t = this.members[e];
            if (!1 !== t.isPresent && t.instance?.isConnected !== !1) return (this.promote(t), !0);
          }
          return !1;
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.updateSnapshot(), t.scheduleRender());
            let { layoutDependency: n } = i.options,
              { layoutDependency: s } = t.options;
            ((void 0 === n || n !== s) &&
              ((t.resumeFrom = i),
              e && (i.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues)),
              t.root?.isUpdating && (t.isLayoutDirty = !0)),
              !1 === t.options.crossfade && i.hide());
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            (t.options.onExitComplete?.(), t.resumingFrom?.options.onExitComplete?.());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => t.instance && t.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function s4(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let s2 = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!V.test(t)) return t;
              else t = parseFloat(t);
            let i = s4(t, e.target.x),
              n = s4(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        s3 = {
          borderRadius: { ...s2, applyTo: [...sD] },
          borderTopLeftRadius: s2,
          borderTopRightRadius: s2,
          borderBottomLeftRadius: s2,
          borderBottomRightRadius: s2,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = z.parse(t);
              if (n.length > 5) return t;
              let s = z.createTransformer(t),
                r = +("number" != typeof n[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              ((n[0 + r] /= o), (n[1 + r] /= a));
              let l = eZ(o, a, 0.5);
              return (
                "number" == typeof n[2 + r] && (n[2 + r] /= l),
                "number" == typeof n[3 + r] && (n[3 + r] /= l),
                s(n)
              );
            },
          },
        },
        s5 = (t, e) => t.depth - e.depth;
      class s6 {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          (tJ(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          (tQ(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(s5), (this.isDirty = !1), this.children.forEach(t));
        }
      }
      Object.assign(eH, { ...s3, ...eH });
      let s8 = ["", "X", "Y", "Z"],
        s9 = 0;
      function s7(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      let rt = ({ instance: t }) => t && ed.get(t)?.demote();
      function re({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = s9++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  this.nodes.forEach(rs),
                  this.nodes.forEach(rf),
                  this.nodes.forEach(rm),
                  this.nodes.forEach(rr));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new s6());
          }
          addEventListener(t, e) {
            return (this.eventHandlers.has(t) || this.eventHandlers.set(t, new t0()), this.eventHandlers.get(t).add(e));
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG = n5(e) && !(n5(e) && "svg" === e.tagName)), (this.instance = e));
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                n = 0,
                s = () => (this.root.updateBlockedByResize = !1);
              (tN.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  if (t !== n) {
                    let e, r;
                    ((n = t),
                      (this.root.updateBlockedByResize = !0),
                      i && i(),
                      (e = ee.now()),
                      (r = ({ timestamp: t }) => {
                        let i = t - e;
                        i >= 250 && (t$(r), s());
                      }),
                      tN.setup(r, !0),
                      (i = () => t$(r)),
                      sk.hasAnimatedSinceResize && ((sk.hasAnimatedSinceResize = !1), this.nodes.forEach(rp)));
                  }
                }));
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({ delta: t, hasLayoutChanged: e, hasRelativeLayoutChanged: i, layout: n }) => {
                    if (this.isAnimationBlocked) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let r = this.options.transition || s.getDefaultTransition() || rb,
                      { onLayoutAnimationStart: o, onLayoutAnimationComplete: a } = s.getProps(),
                      l = !this.targetLayout || !sJ(this.targetLayout, n),
                      h = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || h || (e && (l || !this.currentAnimation))) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...ij(r, "layout"), onPlay: o, onComplete: a };
                      ((s.shouldReduceMotion || this.options.layoutRoot) && ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h, e.path));
                    } else
                      (e || rp(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              t$(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0), this.nodes && this.nodes.forEach(rg), this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[iS];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(n, "transform", tN, !(t || i));
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            (rt(this), (this.isLayoutDirty = !0));
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                rt(e),
                ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1),
                e.isAnimationBlocked && (e.dragSnapshot || (e.dragSnapshot = e.measure()), (this.dragAncestor = e)));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              let t = this.updateBlockedByResize;
              (this.unblockUpdate(),
                (this.updateBlockedByResize = !1),
                this.clearAllSnapshots(),
                t && this.nodes.forEach(rl),
                this.nodes.forEach(ra));
              return;
            }
            if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(rh);
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(ru),
                  this.nodes.forEach(rc),
                  this.nodes.forEach(rd),
                  this.nodes.forEach(ri),
                  this.nodes.forEach(rn))
                : this.nodes.forEach(rh),
              this.clearAllSnapshots());
            let t = ee.now();
            ((tO.delta = m(0, 1e3 / 60, t - tO.timestamp)),
              (tO.timestamp = t),
              (tO.isProcessing = !0),
              tU.update.process(tO),
              tU.preRender.process(tO),
              tU.render.process(tO),
              (tO.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), ep.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(ro), this.sharedNodes.forEach(ry));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0), tN.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tN.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                nQ(this.snapshot.measuredBox.x) ||
                nQ(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              this.layoutCorrected || (this.layoutCorrected = ti()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
            t && rt(this);
            let e = this.projectionDelta && !sG(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || e0(this.latestValues) || r) &&
              (s(this.instance, n), (this.shouldResetTransform = !1), this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rA((e = n).x),
              rA(e.y),
              { animationId: this.root.animationId, measuredBox: i, layoutBox: n, latestValues: {}, source: this.id }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ti();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(rE))) {
              let { scroll: t } = this.root;
              t && (e5(e.x, t.offset.x), e5(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = ti();
            if ((sU(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && sU(e, t), e5(e.x, s.offset.x), e5(e.y, s.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1, i) {
            let n = i || ti();
            sU(n, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              (!e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (e5(n.x, -i.scroll.offset.x), e5(n.y, -i.scroll.offset.y)),
                e0(i.latestValues) && e9(n, i.latestValues, i.layout?.layoutBox));
            }
            return (e0(this.latestValues) && e9(n, this.latestValues, this.layout?.layoutBox), n);
          }
          removeTransform(t) {
            let e = ti();
            sU(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i,
                n = this.path[t];
              e0(n.latestValues) &&
                (n.instance && (eQ(n.latestValues) && n.updateSnapshot(), sU((i = ti()), n.measurePageBox())),
                sK(e, n.latestValues, n.snapshot?.layoutBox, i));
            }
            return (e0(this.latestValues) && sK(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = { ...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tO.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (!(
              t ||
              (i && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              this.parent?.isProjectionDirty ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            ))
              return;
            let { layout: n, layoutId: s } = this.options;
            if (!this.layout || !(n || s)) return;
            this.resolvedRelativeTargetAt = tO.timestamp;
            let r = this.getClosestProjectingParent();
            if (
              (this.targetDelta ||
                this.relativeTarget ||
                (!1 !== this.options.layoutAnchor && r && r.layout
                  ? this.createRelativeTarget(r, this.layout.layoutBox, r.layout.layoutBox)
                  : this.removeRelativeTarget()),
              this.relativeTarget || this.targetDelta)
            ) {
              if (
                (this.target || ((this.target = ti()), (this.targetWithTransforms = ti())),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target)
              ) {
                var o, a, l, h;
                (this.forceRelativeParentToResolveTarget(),
                  (o = this.target),
                  (a = this.relativeTarget),
                  (l = this.relativeParent.target),
                  (h = this.options.layoutAnchor || void 0),
                  n4(o.x, a.x, l.x, h?.x),
                  n4(o.y, a.y, l.y, h?.y));
              } else
                this.targetDelta
                  ? (this.resumingFrom
                      ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                      : sU(this.target, this.layout.layoutBox),
                    e3(this.target, this.targetDelta))
                  : sU(this.target, this.layout.layoutBox);
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                !1 !== this.options.layoutAnchor &&
                r &&
                !!r.resumingFrom == !!this.resumingFrom &&
                !r.options.layoutScroll &&
                r.target &&
                1 !== this.animationProgress
                  ? this.createRelativeTarget(r, this.target, r.target)
                  : (this.relativeParent = this.relativeTarget = void 0));
            }
          }
          getClosestProjectingParent() {
            if (!(!this.parent || eQ(this.parent.latestValues) || e1(this.parent.latestValues)))
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
          }
          createRelativeTarget(t, e, i) {
            ((this.relativeParent = t),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ti()),
              (this.relativeTargetOrigin = ti()),
              n3(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0),
              sU(this.relativeTarget, this.relativeTargetOrigin));
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1),
              e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
              this.resolvedRelativeTargetAt === tO.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            sU(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              o = this.treeScale.y;
            (!(function (t, e, i, n = !1) {
              let s,
                r,
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o || !o.props.style || "contents" !== o.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      (e5(t.x, -s.scroll.offset.x), e5(t.y, -s.scroll.offset.y)),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), e3(t, r)),
                    n && e0(s.latestValues) && e9(t, s.latestValues, s.layout?.layoutBox));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox), (t.targetWithTransforms = ti())));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (sW(this.prevProjectionDelta.x, this.projectionDelta.x),
                sW(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              n1(this.projectionDelta, this.layoutCorrected, a, this.latestValues),
              (this.treeScale.x === r &&
                this.treeScale.y === o &&
                s0(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                s0(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", a)));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = tt()),
              (this.projectionDelta = tt()),
              (this.projectionDeltaWithTransform = tt()));
          }
          setAnimationOrigin(t, e = !1, i) {
            let n,
              s = this.snapshot,
              r = s ? s.latestValues : {},
              o = { ...this.latestValues },
              a = tt();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let l = ti(),
              h = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(h && !c && !0 === this.options.crossfade && !this.path.some(rw));
            this.animationProgress = 0;
            let p = i?.interpolateProjection(t);
            ((this.mixTargetDelta = (e) => {
              let i = e / 1e3,
                s = p?.(i);
              if (
                (s
                  ? ((a.x.translate = s.x),
                    (a.x.scale = eZ(t.x.scale, 1, i)),
                    (a.x.origin = t.x.origin),
                    (a.x.originPoint = t.x.originPoint),
                    (a.y.translate = s.y),
                    (a.y.scale = eZ(t.y.scale, 1, i)),
                    (a.y.origin = t.y.origin),
                    (a.y.originPoint = t.y.originPoint))
                  : (rv(a.x, t.x, i), rv(a.y, t.y, i)),
                this.setTargetDelta(a),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var u, f, m, g, y, v;
                (n3(
                  l,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                  this.options.layoutAnchor || void 0,
                ),
                  (m = this.relativeTarget),
                  (g = this.relativeTargetOrigin),
                  (y = l),
                  (v = i),
                  rx(m.x, g.x, y.x, v),
                  rx(m.y, g.y, y.y, v),
                  n &&
                    ((u = this.relativeTarget), (f = n), sq(u.x, f.x) && sq(u.y, f.y)) &&
                    (this.isProjectionDirty = !1),
                  n || (n = ti()),
                  sU(n, this.relativeTarget));
              }
              (h &&
                ((this.animationValues = o),
                (function (t, e, i, n, s, r) {
                  s
                    ? ((t.opacity = eZ(0, i.opacity ?? 1, sI(n))), (t.opacityExit = eZ(e.opacity ?? 1, 0, sO(n))))
                    : r && (t.opacity = eZ(e.opacity ?? 1, i.opacity ?? 1, n));
                  for (let s = 0; s < sL; s++) {
                    let r = sD[s],
                      o = sF(e, r),
                      a = sF(i, r);
                    (void 0 !== o || void 0 !== a) &&
                      (o || (o = 0),
                      a || (a = 0),
                      0 === o || 0 === a || sB(o) === sB(a)
                        ? ((t[r] = Math.max(eZ(sR(o), sR(a), n), 0)), (C.test(a) || C.test(o)) && (t[r] += "%"))
                        : (t[r] = a));
                  }
                  (e.rotate || i.rotate) && (t.rotate = eZ(e.rotate || 0, i.rotate || 0, n));
                })(o, r, this.latestValues, i, d, c)),
                s &&
                  void 0 !== s.rotate &&
                  (this.animationValues || (this.animationValues = o), (this.animationValues.pathRotation = s.rotate)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = i));
            }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation && (t$(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tN.update(() => {
                var e, i, n;
                let s;
                ((sk.hasAnimatedSinceResize = !0),
                  this.motionValue || (this.motionValue = ev(0)),
                  this.motionValue.jump(0, !1),
                  (this.currentAnimation =
                    ((e = this.motionValue),
                    (i = [0, 1e3]),
                    (n = {
                      ...t,
                      velocity: 0,
                      isSync: !0,
                      onUpdate: (e) => {
                        (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                      },
                      onComplete: () => {
                        (t.onComplete && t.onComplete(), this.completeAnimation());
                      },
                    }),
                    (s = tn(e) ? e : ev(e)).start(nU("", s, i, n)),
                    s.animation)),
                  (function (t, e) {
                    let i = globalThis.__MOTION_INSPECT__;
                    if (i)
                      try {
                        i({ ...ei("layout-animation-start", t), node: e });
                      } catch {}
                  })(this.currentAnimation, this),
                  this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              { targetWithTransforms: e, layout: i, latestValues: n } = t,
              { target: s } = t;
            if (e && s && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                rP(this.options.animationType, this.layout.layoutBox, i.layoutBox)
              ) {
                s = this.target || ti();
                let e = nQ(this.layout.layoutBox.x);
                ((s.x.min = t.target.x.min), (s.x.max = s.x.min + e));
                let i = nQ(this.layout.layoutBox.y);
                ((s.y.min = t.target.y.min), (s.y.max = s.y.min + i));
              }
              (sU(e, s), e9(e, n), n1(this.projectionDeltaWithTransform, this.layoutCorrected, e, n));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new s1()), this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
            let n = this.getStack();
            (n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e))
              return;
            let n = {};
            i.z && s7("z", t, n, this.animationValues);
            for (let e = 0; e < s8.length; e++)
              (s7(`rotate${s8[e]}`, t, n, this.animationValues), s7(`skew${s8[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              ((this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = ip(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none"));
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              (this.options.layoutId &&
                ((t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1),
                (t.pointerEvents = ip(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !e0(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"), (this.hasProjected = !1)));
              return;
            }
            t.visibility = "";
            let s = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let n = "",
                s = t.x.translate / e.x,
                r = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  pathRotation: s,
                  rotateX: r,
                  rotateY: o,
                  skewX: a,
                  skewY: l,
                } = i;
                (t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  s && (n += `rotate(${s}deg) `),
                  r && (n += `rotateX(${r}deg) `),
                  o && (n += `rotateY(${o}deg) `),
                  a && (n += `skewX(${a}deg) `),
                  l && (n += `skewY(${l}deg) `));
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return ((1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none");
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            (i && (r = i(s, r)), (t.transform = r));
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? (s.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : s.opacityExit)
              : (t.opacity =
                  n === this ? (void 0 !== s.opacity ? s.opacity : "") : void 0 !== s.opacityExit ? s.opacityExit : 0),
            eH)) {
              if (void 0 === s[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = eH[e],
                l = "none" === r ? s[e] : i(s[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else a ? (this.options.visualElement.renderState.vars[e] = l) : (t[e] = l);
            }
            this.options.layoutId && (t.pointerEvents = n === this ? ip(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(ra),
              this.root.sharedNodes.clear());
          }
        };
      }
      function ri(t) {
        (t.updateLayout(),
          (function (t) {
            let { snapshot: e, dragAncestor: i } = t,
              n = i?.layout;
            if (!e || !n || t.resumeFrom || t.isAnimationBlocked) return;
            let s = i.dragSnapshot;
            nq((t) => e5(e.layoutBox[t], n.layoutBox[t].min - s.layoutBox[t].min));
          })(t));
      }
      function rn(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = e.source !== t.layout.source;
          if ("size" === s)
            nq((t) => {
              let n = r ? e.measuredBox[t] : e.layoutBox[t],
                s = nQ(n);
              ((n.min = i[t].min), (n.max = n.min + s));
            });
          else if ("x" === s || "y" === s) {
            let t = "x" === s ? "y" : "x";
            s$(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
          } else
            rP(s, e.layoutBox, i) &&
              nq((n) => {
                let s = r ? e.measuredBox[n] : e.layoutBox[n],
                  o = nQ(i[n]);
                ((s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0), (t.relativeTarget[n].max = t.relativeTarget[n].min + o)));
              });
          let o = tt();
          n1(o, i, e.layoutBox);
          let a = tt();
          r ? n1(a, t.applyTransform(n, !0), e.measuredBox) : n1(a, i, e.layoutBox);
          let l = !sG(o),
            h = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = t.options.layoutAnchor || void 0,
                  a = ti();
                n3(a, e.layoutBox, s.layoutBox, o);
                let l = ti();
                (n3(l, i, r.layoutBox, o),
                  sJ(a, l) || (h = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = l), (t.relativeTargetOrigin = a), (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rs(t) {
        t.parent &&
          (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
          t.isSharedProjectionDirty ||
            (t.isSharedProjectionDirty = !!(
              t.isProjectionDirty ||
              t.parent.isProjectionDirty ||
              t.parent.isSharedProjectionDirty
            )),
          t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function rr(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
      }
      function ro(t) {
        t.clearSnapshot();
      }
      function ra(t) {
        t.clearMeasurements();
      }
      function rl(t) {
        ((t.isLayoutDirty = !0), t.updateLayout());
      }
      function rh(t) {
        t.isLayoutDirty = !1;
      }
      function ru(t) {
        t.isAnimationBlocked &&
          t.layout &&
          !t.isLayoutDirty &&
          ((t.snapshot = t.dragSnapshot || t.layout), (t.isLayoutDirty = !0));
      }
      function rc(t) {
        t.relativeTarget &&
          t.relativeParent?.isLayoutDirty &&
          (t.currentAnimation ? (t.isLayoutDirty = !0) : ((t.targetDelta = void 0), t.removeRelativeTarget()));
      }
      function rd(t) {
        let { visualElement: e } = t.options;
        (e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform());
      }
      function rp(t) {
        (t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0), (t.isProjectionDirty = !0));
      }
      function rf(t) {
        t.resolveTargetDelta();
      }
      function rm(t) {
        t.calcProjection();
      }
      function rg(t) {
        t.resetSkewAndRotation();
      }
      function ry(t) {
        t.removeLeadSnapshot();
      }
      function rv(t, e, i) {
        ((t.translate = eZ(e.translate, 0, i)),
          (t.scale = eZ(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function rx(t, e, i, n) {
        ((t.min = eZ(e.min, i.min, n)), (t.max = eZ(e.max, i.max, n)));
      }
      function rw(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rT = (t) => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        rS = rT("applewebkit/") && !rT("chrome/") ? Math.round : tL;
      function rA(t) {
        ((t.min = rS(t.min)), (t.max = rS(t.max)));
      }
      function rP(t, e, i) {
        return "position" === t || ("preserve-aspect" === t && !(0.2 >= Math.abs(sQ(e) - sQ(i))));
      }
      function rE(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let rk = re({
          attachResizeListener: (t, e) => nZ(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
            y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rM = { current: void 0 },
        rC = re({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rM.current) {
              let t = new rk({});
              (t.mount(window), t.setOptions({ layoutScroll: !0 }), (rM.current = t));
            }
            return rM.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) => "fixed" === window.getComputedStyle(t).position,
        });
      function rV(t, e) {
        let i = n6(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function rj(t, e, i) {
        let { props: n } = t;
        t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && tN.postRender(() => s(e, sl(e)));
      }
      let rD = (t, e) => !!e && (t === e || rD(t, e.parentElement)),
        rR = new WeakSet();
      function rL(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rB(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
      }
      function rF(t) {
        return sa(t) && !(nJ.x || nJ.y);
      }
      let rI = new WeakSet();
      function rO(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && tN.postRender(() => s(e, sl(e)));
      }
      let rN = new WeakMap(),
        r$ = new WeakMap(),
        rU = (t) => {
          let e = rN.get(t.target);
          e && e(t);
        },
        rW = (t) => {
          t.forEach(rU);
        },
        rz = { some: 0, all: 1 },
        rY = (function (t, e) {
          if ("u" < typeof Proxy) return iE;
          let i = new Map(),
            n = (i, n) => iE(i, n, t, e);
          return new Proxy((t, e) => n(t, e), {
            get: (s, r) => ("create" === r ? n : (i.has(r) || i.set(r, iE(r, void 0, t, e)), i.get(r))),
          });
        })(
          {
            animation: {
              Feature: class extends ik {
                constructor(t) {
                  (super(t),
                    t.animationState ||
                      (t.animationState = (function (t) {
                        let e = (e) =>
                            Promise.all(
                              e.map(({ animation: e, options: i }) =>
                                (function (t, e, i = {}) {
                                  return (
                                    t.notify("AnimationStart", e),
                                    (Array.isArray(e)
                                      ? Promise.all(e.map((e) => nH(t, e, i)))
                                      : "string" == typeof e
                                        ? nH(t, e, i)
                                        : Promise.all(nz(t, iM(t, e, i.custom), i))
                                    ).then(() => {
                                      t.notify("AnimationComplete", e);
                                    })
                                  );
                                })(t, e, i),
                              ),
                            ),
                          i = n_(),
                          n = !0,
                          s = !1;
                        function r(r) {
                          let { props: o, parent: a, manuallyAnimateOnMount: l } = t,
                            h = n || s,
                            u = [],
                            c = new Set(),
                            d = {},
                            p = 1 / 0,
                            f = t;
                          do f = !1 !== f.props.inherit && f.parent;
                          while (f && !f.isControllingVariants);
                          if (
                            (nK.forEach((e, n) => {
                              var s, m;
                              let g = i[e],
                                y = o[e],
                                v = f && f.props[e],
                                x = void 0 !== y ? y : eb(v) || !1 === v ? v : void 0,
                                w = eb(x),
                                b = e === r ? g.isActive : null;
                              !1 === b && (p = n);
                              let T = w && void 0 === y && !(h && l);
                              if (
                                ((g.protectedKeys = { ...d }),
                                (!g.isActive && null === b) || (!x && !g.prevProp) || ew(x) || "boolean" == typeof x)
                              )
                                return;
                              if ("exit" === e && g.isActive && !0 !== b) {
                                d = { ...d, ...g.prevResolvedValues };
                                return;
                              }
                              let S =
                                  ((s = g.prevProp),
                                  "string" == typeof (m = x) ? m !== s : !!Array.isArray(m) && !nX(m, s)),
                                A = S || (w && ((b && !T) || n > p)),
                                P = !1,
                                E = Array.isArray(x) ? x : [x],
                                k = {};
                              if (!1 !== b)
                                for (let i of E) {
                                  let { transition: n, transitionEnd: s, ...r } = iM(t, i, iC(t, e)) || {};
                                  k = { ...k, ...r, ...s };
                                }
                              let { prevResolvedValues: M } = g;
                              for (let e in { ...M, ...k }) {
                                if (e in d) continue;
                                let i = k[e],
                                  n = M[e],
                                  s = Array.isArray(i) && Array.isArray(n) ? !nX(i, n) || S : i !== n;
                                if (s && null == i) c.add(e);
                                else if (s || (void 0 !== i && c.has(e))) {
                                  ((A = !0), c.delete(e) && (P = !0), (g.needsAnimating[e] = !0));
                                  let i = t.getValue(e);
                                  i && (i.liveStyle = !1);
                                } else g.protectedKeys[e] = !0;
                              }
                              if (
                                ((g.prevProp = x),
                                (g.prevResolvedValues = k),
                                g.isActive && (d = { ...d, ...k }),
                                A && (!(T && S) || P))
                              )
                                for (let i of E) {
                                  let n = { type: e };
                                  if ("string" == typeof i && h && l && a?.enteringChildren) {
                                    let e = iM(a, i)?.transition?.delayChildren;
                                    n.delay = nY(a.enteringChildren, t, e);
                                  }
                                  u.push({ animation: i, options: n });
                                }
                            }),
                            c.size)
                          ) {
                            let { initial: e } = o,
                              i = {},
                              n =
                                "boolean" != typeof e && iM(t, Array.isArray(e) ? e[0] : e, t.presenceContext?.custom);
                            (n && n.transition && (i.transition = n.transition),
                              c.forEach((s) => {
                                let r = t.getValue(s);
                                r && (r.liveStyle = !0);
                                let a = n && !Array.isArray(e) ? n[s] : void 0,
                                  l = t.getBaseTargetFromProps(o, s);
                                i[s] =
                                  (void 0 !== a
                                    ? a
                                    : void 0 === l || tn(l)
                                      ? void 0 === t.initialValues[s]
                                        ? t.baseTarget[s]
                                        : void 0
                                      : l) ?? null;
                              }),
                              u.push({ animation: i }));
                          }
                          let m =
                            (h && t.blockInitialAnimation) ||
                            (n && !l && (!1 === o.initial || o.initial === o.animate));
                          return ((n = s = !1), !m && u.length ? e(u) : Promise.resolve());
                        }
                        return {
                          animateChanges: r,
                          setActive: function (e, n) {
                            if (i[e].isActive === n) return Promise.resolve();
                            (t.variantChildren?.forEach((t) => t.animationState?.setActive(e, n)), (i[e].isActive = n));
                            let s = r(e);
                            for (let t in i) i[t].protectedKeys = {};
                            return s;
                          },
                          setAnimateFunction: (i) => {
                            e = i(t);
                          },
                          getState: () => i,
                          reset: () => {
                            ((i = n_()), (s = !0));
                          },
                        };
                      })(t)));
                }
                updateAnimationControlsSubscription() {
                  let { animate: t } = this.node.getProps();
                  ew(t) && (this.unmountControls = t.subscribe(this.node));
                }
                mount() {
                  this.updateAnimationControlsSubscription();
                }
                update() {
                  let { animate: t } = this.node.getProps(),
                    { animate: e } = this.node.prevProps || {};
                  t !== e && this.updateAnimationControlsSubscription();
                }
                unmount() {
                  (this.node.animationState.reset(), this.unmountControls?.());
                }
              },
            },
            exit: {
              Feature: class extends ik {
                constructor() {
                  (super(...arguments), (this.id = nG++));
                }
                update() {
                  let { presenceContext: t, prevPresenceContext: e, animationState: i } = this.node;
                  if (!t || !i) return;
                  let { isPresent: n, onExitComplete: s } = t,
                    r = e?.isPresent;
                  if (n === r) return;
                  if (n && !1 === r) {
                    if (!0 === this.exit) {
                      let { initial: t } = this.node.getProps();
                      if (t && !Array.isArray(t)) {
                        let { transition: e, transitionEnd: i, ...n } = iM(this.node, t) || {};
                        for (let t in n) this.node.getValue(t)?.jump(n[t]);
                      }
                      ((this.node.blockInitialAnimation = !1), i.reset(), i.animateChanges());
                    } else i.setActive("exit", !1);
                    this.exit = void 0;
                    return;
                  }
                  let o = (this.exit = i.setActive("exit", !n));
                  s &&
                    !n &&
                    o.then(() => {
                      this.exit === o && ((this.exit = !0), s(this.id));
                    });
                }
                mount() {
                  let { register: t, onExitComplete: e } = this.node.presenceContext || {};
                  (e && e(this.id), t && (this.unmount = t(this.id)));
                }
                unmount() {}
              },
            },
            inView: {
              Feature: class extends ik {
                constructor() {
                  (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
                }
                startObserver() {
                  var t;
                  let e;
                  this.stopObserver?.();
                  let { viewport: i = {} } = this.node.getProps(),
                    { root: n, margin: s, amount: r = "some", once: o } = i,
                    a = { root: n ? n.current : void 0, rootMargin: s, threshold: "number" == typeof r ? r : rz[r] },
                    l = (t) => {
                      let { isIntersecting: e } = t;
                      if (this.isInView === e || ((this.isInView = e), o && !e && this.hasEnteredView)) return;
                      (e && (this.hasEnteredView = !0),
                        this.node.animationState && this.node.animationState.setActive("whileInView", e));
                      let { onViewportEnter: i, onViewportLeave: n } = this.node.getProps(),
                        s = e ? i : n;
                      s && s(t);
                    };
                  this.stopObserver =
                    ((t = this.node.current),
                    (e = (function ({ root: t, ...e }) {
                      let i = t || document;
                      r$.has(i) || r$.set(i, {});
                      let n = r$.get(i),
                        s = JSON.stringify(e);
                      return (n[s] || (n[s] = new IntersectionObserver(rW, { root: t, ...e })), n[s]);
                    })(a)),
                    rN.set(t, l),
                    e.observe(t),
                    () => {
                      (rN.delete(t), e.unobserve(t));
                    });
                }
                mount() {
                  this.startObserver();
                }
                update() {
                  if ("u" < typeof IntersectionObserver) return;
                  let { props: t, prevProps: e } = this.node;
                  ["amount", "margin", "root"].some(
                    (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                      return (i) => t[i] !== e[i];
                    })(t, e),
                  ) && this.startObserver();
                }
                unmount() {
                  (this.stopObserver?.(), (this.hasEnteredView = !1), (this.isInView = !1));
                }
              },
            },
            tap: {
              Feature: class extends ik {
                mount() {
                  let { current: t } = this.node;
                  if (!t) return;
                  let { globalTapTarget: e, propagate: i } = this.node.props;
                  this.unmount = (function (t, e, i = {}) {
                    let [n, s, r] = rV(t, i),
                      o = (t) => {
                        let n = t.currentTarget;
                        if (!rF(t) || rI.has(t)) return;
                        (rR.add(n), i.stopPropagation && rI.add(t));
                        let r = e(n, t),
                          o = { ...s, capture: !0 },
                          a = (t, e) => {
                            (window.removeEventListener("pointerup", l, o),
                              window.removeEventListener("pointercancel", h, o),
                              rR.has(n) && rR.delete(n),
                              rF(t) && "function" == typeof r && r(t, { success: e }));
                          },
                          l = (t) => {
                            a(t, n === window || n === document || i.useGlobalTarget || rD(n, t.target));
                          },
                          h = (t) => {
                            a(t, !1);
                          };
                        (window.addEventListener("pointerup", l, o), window.addEventListener("pointercancel", h, o));
                      };
                    return (
                      n.forEach((t) => {
                        ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, s), u(t)) &&
                          (t.addEventListener("focus", (t) =>
                            ((t, e) => {
                              let i = t.currentTarget;
                              if (!i) return;
                              let n = rL(() => {
                                if (rR.has(i)) return;
                                rB(i, "down");
                                let t = rL(() => {
                                  rB(i, "up");
                                });
                                (i.addEventListener("keyup", t, e),
                                  i.addEventListener("blur", () => rB(i, "cancel"), e));
                              });
                              (i.addEventListener("keydown", n, e),
                                i.addEventListener("blur", () => i.removeEventListener("keydown", n), e));
                            })(t, s),
                          ),
                          sr.has(t.tagName) ||
                            !0 === t.isContentEditable ||
                            t.hasAttribute("tabindex") ||
                            (t.tabIndex = 0));
                      }),
                      r
                    );
                  })(
                    t,
                    (t, e) => (
                      rO(this.node, e, "Start"),
                      (t, { success: e }) => rO(this.node, t, e ? "End" : "Cancel")
                    ),
                    { useGlobalTarget: e, stopPropagation: i?.tap === !1 },
                  );
                }
                unmount() {}
              },
            },
            focus: {
              Feature: class extends ik {
                constructor() {
                  (super(...arguments), (this.isActive = !1));
                }
                onFocus() {
                  let t = !1;
                  try {
                    t = this.node.current.matches(":focus-visible");
                  } catch (e) {
                    t = !0;
                  }
                  t &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                }
                onBlur() {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                }
                mount() {
                  this.unmount = iR(
                    nZ(this.node.current, "focus", () => this.onFocus()),
                    nZ(this.node.current, "blur", () => this.onBlur()),
                  );
                }
                unmount() {}
              },
            },
            hover: {
              Feature: class extends ik {
                mount() {
                  let { current: t } = this.node;
                  t &&
                    (this.unmount = (function (t, e, i = {}) {
                      let [n, s, r] = rV(t, i);
                      return (
                        n.forEach((t) => {
                          let i,
                            n = !1,
                            r = !1,
                            o = (e) => {
                              (i && (i(e), (i = void 0)), t.removeEventListener("pointerleave", l));
                            },
                            a = (t) => {
                              ((n = !1),
                                window.removeEventListener("pointerup", a),
                                window.removeEventListener("pointercancel", a),
                                r && ((r = !1), o(t)));
                            },
                            l = (t) => {
                              if ("touch" !== t.pointerType) {
                                if (n) {
                                  r = !0;
                                  return;
                                }
                                o(t);
                              }
                            };
                          (t.addEventListener(
                            "pointerenter",
                            (n) => {
                              if ("touch" === n.pointerType || nJ.x || nJ.y) return;
                              r = !1;
                              let o = e(t, n);
                              "function" == typeof o && ((i = o), t.addEventListener("pointerleave", l, s));
                            },
                            s,
                          ),
                            t.addEventListener(
                              "pointerdown",
                              () => {
                                ((n = !0),
                                  window.addEventListener("pointerup", a, s),
                                  window.addEventListener("pointercancel", a, s));
                              },
                              s,
                            ));
                        }),
                        r
                      );
                    })(t, (t, e) => (rj(this.node, e, "Start"), (t) => rj(this.node, t, "End"))));
                }
                unmount() {}
              },
            },
            pan: {
              Feature: class extends ik {
                constructor() {
                  (super(...arguments), (this.removePointerDownListener = tL));
                }
                onPointerDown(t) {
                  this.session = new sp(t, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: su(this.node),
                  });
                }
                createPanHandlers() {
                  let { onPanSessionStart: t, onPanStart: e, onPan: i, onPanEnd: n } = this.node.getProps();
                  return {
                    onSessionStart: sE(t),
                    onStart: sE(e),
                    onMove: sE(i),
                    onEnd: (t, e) => {
                      (delete this.session, n && tN.postRender(() => n(t, e)));
                    },
                  };
                }
                mount() {
                  this.removePointerDownListener = sh(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
                }
                update() {
                  this.session && this.session.updateHandlers(this.createPanHandlers());
                }
                unmount() {
                  (this.removePointerDownListener(), this.session && this.session.end());
                }
              },
            },
            drag: {
              Feature: class extends ik {
                constructor(t) {
                  (super(t), (this.removeGroupControls = tL), (this.removeListeners = tL), (this.controls = new sS(t)));
                }
                mount() {
                  let { dragControls: t } = this.node.getProps();
                  (t && (this.removeGroupControls = t.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || tL));
                }
                update() {
                  let { dragControls: t } = this.node.getProps(),
                    { dragControls: e } = this.node.prevProps || {};
                  t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
                }
                unmount() {
                  (this.removeGroupControls(),
                    this.removeListeners(),
                    this.controls.isDragging || this.controls.endPanSession());
                }
              },
              ProjectionNode: rC,
              MeasureLayout: sj,
            },
            layout: { ProjectionNode: rC, MeasureLayout: sj },
          },
          (t, e) => ((e.isSVG ?? ii(t)) ? new eG(e) : new it(e, { allowProjection: t !== s.Fragment })),
        );
      t.s(["f", 0, rY], 46932);
    },
    72328,
    (t) => {
      t.i(47167);
      var e = t.i(71164),
        i = t.i(38544),
        n = t.i(71645);
      t.s([
        "f",
        0,
        function () {
          e.E.current || (0, i.f)();
          let [t] = (0, n.useState)(e.d.current);
          return t;
        },
      ]);
    },
    38544,
    71164,
    (t) => {
      let e = { current: null },
        i = { current: !1 };
      t.s(["E", 0, i, "d", 0, e], 71164);
      let n = "u" > typeof window;
      t.s(
        [
          "f",
          0,
          function () {
            if (((i.current = !0), n))
              if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                  i = () => (e.current = t.matches);
                (t.addEventListener("change", i), i());
              } else e.current = !1;
          },
        ],
        38544,
      );
    },
    83036,
    (t) => {
      var e = t.i(43476),
        i = t.i(88653),
        n = t.i(46932),
        s = t.i(71645);
      let r = (0, s.createContext)(() => {});
      t.s([
        "ToastProvider",
        0,
        function ({ children: t }) {
          let [o, a] = (0, s.useState)(null),
            l = (0, s.useRef)(void 0),
            h = (0, s.useCallback)((t) => {
              (a(t), clearTimeout(l.current), (l.current = setTimeout(() => a(null), 2600)));
            }, []);
          return (0, e.jsxs)(r.Provider, {
            value: h,
            children: [
              t,
              (0, e.jsx)(i.f, {
                children:
                  o &&
                  (0, e.jsx)(n.f.div, {
                    className: "toast",
                    role: "status",
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 12 },
                    children: o,
                  }),
              }),
            ],
          });
        },
        "useToast",
        0,
        function () {
          return (0, s.useContext)(r);
        },
      ]);
    },
    85945,
    (t) => {
      var e = t.i(43476),
        i = t.i(88653),
        n = t.i(71645),
        s = t.i(9183),
        r = t.i(91458);
      function o() {
        (console.log(
          `%c  git log --author=${r.f.handle}  `,
          "background: #7c9cff;color: #0a0d12;font: 600 14px monospace;padding: 4px 0;border-radius: 4px",
        ),
          console.log(`%c${s.i.join("\n")}`, "color: #8b98a9;font: 13px monospace"));
      }
      var a = t.i(45888),
        l = t.i(46932);
      function h({ onDone: t }) {
        return (
          (0, n.useEffect)(() => {
            document.body.classList.add("shake");
            let e = setTimeout(t, 3200);
            return () => {
              (clearTimeout(e), document.body.classList.remove("shake"));
            };
          }, [t]),
          (0, e.jsx)(l.f.div, {
            className: "forcepush",
            onClick: t,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("pre", { children: s.X.output.join("\n") }),
                (0, e.jsx)("p", { children: s.X.punchline }),
              ],
            }),
          })
        );
      }
      var u = t.i(34549);
      let c = "A side project I designed and built end to end.",
        d = "A full write-up of the problem, the approach and what I learned is on its way.",
        p = [
          {
            slug: "justeg",
            branch: "feature/justeg",
            name: "JustEg",
            summary: c,
            problem: d,
            highlights: ["Case study coming soon"],
            stack: [],
            links: [],
            accent: "#f5c542",
          },
          {
            slug: "whatcanieat",
            branch: "feature/whatcanieat",
            name: "WhatCanIEat",
            summary: c,
            problem: d,
            highlights: ["Case study coming soon"],
            stack: [],
            links: [],
            accent: "#4ade80",
          },
        ];
      var f = t.i(58261);
      let m = (t) => [{ kind: "output", text: t }],
        g = (t) => [{ kind: "error", text: t }],
        y = { kind: "output", text: `${r.f.handle} ${s.O.welcome}` };
      function v({ onClose: t, onForcePush: i }) {
        let [o, a] = (0, n.useState)([y]),
          [h, c] = (0, n.useState)(""),
          d = (function () {
            let [t, e] = (0, n.useState)([]),
              [i, s] = (0, n.useState)(-1);
            return {
              record: (t) => {
                (t.trim() && e((e) => [t, ...e]), s(-1));
              },
              older: () => {
                if (0 === t.length) return null;
                let e = Math.min(i + 1, t.length - 1);
                return (s(e), t[e]);
              },
              newer: () => {
                let e = Math.max(i - 1, -1);
                return (s(e), -1 === e ? "" : t[e]);
              },
            };
          })(),
          x = (0, n.useRef)(null),
          w = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let t = document.activeElement;
            return (w.current?.focus(), () => t?.focus());
          }, []),
          (0, n.useEffect)(() => {
            let t = x.current;
            t?.scrollTo({ top: t.scrollHeight });
          }, [o]),
          (0, e.jsx)(l.f.div, {
            className: "term-backdrop",
            onClick: t,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: (0, e.jsxs)(l.f.div, {
              className: "term",
              role: "dialog",
              "aria-modal": "true",
              "aria-label": "terminal",
              onClick: (t) => {
                (t.stopPropagation(), w.current?.focus());
              },
              initial: { y: 40, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 40, opacity: 0 },
              children: [
                (0, e.jsxs)("div", {
                  className: "term-bar",
                  children: [
                    (0, e.jsx)("i", {}),
                    (0, e.jsx)("i", {}),
                    (0, e.jsx)("i", {}),
                    (0, e.jsxs)("span", { children: ["~/", r.f.handle, " — zsh"] }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: "term-body",
                  ref: x,
                  children: o.map((t, i) => (0, e.jsx)("div", { className: t.kind, children: t.text }, i)),
                }),
                (0, e.jsxs)("div", {
                  className: "term-line",
                  children: [
                    (0, e.jsx)("span", { children: "$" }),
                    (0, e.jsx)("input", {
                      ref: w,
                      value: h,
                      "aria-label": "command",
                      autoComplete: "off",
                      spellCheck: !1,
                      onChange: (t) => c(t.target.value),
                      onKeyDown: (e) => {
                        switch (e.key) {
                          case "Enter":
                            (() => {
                              let e = (function (t, e) {
                                let [i, ...n] = t.trim().split(/\s+/);
                                switch (i) {
                                  case "":
                                    return [];
                                  case "help":
                                    return m(
                                      [
                                        "available commands:",
                                        ...s.O.help.map(({ usage: t, description: e }) =>
                                          `  ${t.padEnd(18)}${e}`.trimEnd(),
                                        ),
                                      ].join("\n"),
                                    );
                                  case "whoami":
                                    let o;
                                    return (
                                      (o = r.f.role.toLowerCase()),
                                      m(`${r.f.handle}: ${o} based in ${r.f.location}. ${r.f.tagline}`)
                                    );
                                  case "ls":
                                    return m(p.map((t) => `${t.slug}/`).join("  "));
                                  case "cat":
                                    return (function (t = "") {
                                      let e = t.replace(/\/$/, "").toLowerCase(),
                                        i = p.find((t) => t.slug === e);
                                      if (!i) return g(`cat: ${t}: No such file or directory`);
                                      let n = [i.name, i.summary];
                                      return (
                                        i.stack.length > 0 && n.push("", `stack: ${i.stack.join(", ")}`),
                                        m(n.join("\n"))
                                      );
                                    })(n[0]);
                                  case "git":
                                    return (function (t = "", e, i) {
                                      switch (t) {
                                        case "log":
                                          return m(
                                            [
                                              ...p.map((t) => `* Merge branch '${t.branch}'`),
                                              `* ${f.f.initialCommit.commitMessage}`,
                                            ].join("\n"),
                                          );
                                        case "push":
                                          if (!e.includes("--force")) break;
                                          return (i.forcePush(), m(s.O.replies.gitPush));
                                        case "tag":
                                          return m(
                                            u.f
                                              .map((t) => {
                                                let e = t.tag.padEnd(22);
                                                return `${e} ${t.name} (${t.issuer})`;
                                              })
                                              .join("\n"),
                                          );
                                        case "blame":
                                          return m(s.O.replies.gitBlame);
                                      }
                                      return g(`git: '${t}' is not a git command here. try 'git log'.`);
                                    })(n[0], n.slice(1), e);
                                  case "contact":
                                    let a;
                                    return (
                                      (a = [`github   ${r.f.github}`]),
                                      r.f.email && a.unshift(`email    ${r.f.email}`),
                                      r.f.linkedin && a.push(`linkedin ${r.f.linkedin}`),
                                      m(a.join("\n"))
                                    );
                                  case "sudo":
                                    if ("hire-me" === n.join(" ")) {
                                      let t = r.f.email || r.f.github;
                                      return m(s.O.replies.hireMe(t));
                                    }
                                    return g(s.O.replies.notSudoer(r.f.handle));
                                  case "rm":
                                    return g(s.O.replies.rm);
                                  case "vim":
                                    return m(s.O.replies.vim);
                                  case "clear":
                                    return "clear";
                                  case "exit":
                                    return (e.close(), []);
                                  default:
                                    return g(`command not found: ${i}. type 'help'.`);
                                }
                              })(h, { close: t, forcePush: i });
                              if ((d.record(h), c(""), "clear" === e)) return a([]);
                              let n = { kind: "input", text: `$ ${h}` };
                              a((t) => [...t, n, ...e]);
                            })();
                            break;
                          case "Escape":
                            t();
                            break;
                          case "ArrowUp": {
                            let t = d.older();
                            if (null === t) break;
                            (e.preventDefault(), c(t));
                            break;
                          }
                          case "ArrowDown":
                            (e.preventDefault(), c(d.newer()));
                        }
                      },
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      let x = ["`", "~"],
        w = [
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
          "b",
          "a",
        ];
      t.s(
        [
          "EasterEggs",
          0,
          function () {
            let [t, s] = (0, n.useState)(!1),
              [r, l] = (0, n.useState)(!1),
              u = (0, n.useCallback)(() => s(!0), []),
              c = (0, n.useCallback)(() => s(!1), []),
              d = (0, n.useCallback)(() => s((t) => !t), []),
              p = (0, n.useCallback)(() => l(!0), []),
              f = (0, n.useCallback)(() => l(!1), []),
              m = (0, n.useCallback)(() => {
                (s(!1), l(!0));
              }, []);
            return (
              (0, n.useEffect)(o, []),
              (0, n.useEffect)(() => (0, a.X)(u), [u]),
              !(function ({ onTerminalKey: t, onKonamiCode: e }) {
                (0, n.useEffect)(() => {
                  let i = [],
                    n = (n) => {
                      let s;
                      if ("INPUT" !== (s = n.target).tagName && "TEXTAREA" !== s.tagName) {
                        var r;
                        if (x.includes(n.key)) {
                          (n.preventDefault(), t());
                          return;
                        }
                        (i = [...i, 1 === (r = n.key).length ? r.toLowerCase() : r].slice(-w.length)).join() ===
                          w.join() && ((i = []), e());
                      }
                    };
                  return (window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n));
                }, [t, e]);
              })({ onTerminalKey: d, onKonamiCode: p }),
              (0, e.jsxs)(i.f, {
                children: [
                  t && (0, e.jsx)(v, { onClose: c, onForcePush: m }, "terminal"),
                  r && (0, e.jsx)(h, { onDone: f }, "force-push"),
                ],
              })
            );
          },
        ],
        85945,
      );
    },
    43220,
    (t) => {
      var e = t.i(43476),
        i = t.i(9183),
        n = t.i(45888);
      t.s([
        "OpenTerminalHint",
        0,
        function () {
          return (0, e.jsxs)("button", {
            className: "hint",
            onClick: n.F,
            children: ["press ", (0, e.jsx)("kbd", { children: "`" }), " ", i.O.hint],
          });
        },
      ]);
    },
    45888,
    (t) => {
      let e = "open-terminal";
      t.s([
        "X",
        0,
        function (t) {
          return (window.addEventListener(e, t), () => window.removeEventListener(e, t));
        },
        "F",
        0,
        function () {
          window.dispatchEvent(new Event(e));
        },
      ]);
    },
    89634,
    (t) => {
      var e = t.i(43476),
        i = t.i(46932),
        n = t.i(30747),
        s = t.i(90966);
      t.s([
        "Commit",
        0,
        function ({ id: t, seed: r, message: o, refs: a = [], head: l = !1, children: h }) {
          return (0, e.jsxs)(i.f.section, {
            id: t,
            className: "commit",
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, margin: "-80px" },
            transition: { duration: 0.6, ease: n.f },
            children: [
              (0, e.jsx)(i.f.span, {
                className: l ? "node head" : "node",
                initial: { scale: 0 },
                whileInView: { scale: 1 },
                viewport: { once: !0 },
                transition: { type: "spring", stiffness: 400, damping: 18, delay: 0.1 },
              }),
              (0, e.jsxs)("div", {
                className: "meta",
                children: [
                  (0, e.jsx)(s.f, { seed: r }),
                  a.map((t) => (0, e.jsx)("span", { className: `ref ${t.kind}`, children: t.label }, t.label)),
                ],
              }),
              (0, e.jsx)("p", { className: "msg", children: o }),
              h,
            ],
          });
        },
      ]);
    },
    90966,
    (t) => {
      var e = t.i(43476),
        i = t.i(9183),
        n = t.i(83036);
      t.s(
        [
          "f",
          0,
          function ({ seed: t }) {
            let s = (0, n.useToast)(),
              r = (function (t) {
                let e = 0x811c9dc5;
                for (let i = 0; i < t.length; i++) ((e ^= t.charCodeAt(i)), (e = Math.imul(e, 0x1000193)));
                return (e >>> 0).toString(16).padStart(8, "0").slice(0, 7);
              })(t);
            return (0, e.jsx)("button", {
              className: "hash",
              title: "copy sha",
              onClick: () => {
                (navigator.clipboard?.writeText(r).catch(() => {}), s((0, i.r)(r)));
              },
              children: r,
            });
          },
        ],
        90966,
      );
    },
    54334,
    (t) => {
      var e = t.i(43476),
        i = t.i(46932),
        n = t.i(60140),
        s = t.i(30551),
        r = t.i(86427),
        o = t.i(65566),
        a = t.i(71645),
        l = t.i(60830),
        h = t.i(61327),
        u = t.i(87022),
        c = t.i(48940),
        d = t.i(76959),
        p = t.i(83920),
        f = t.i(25791);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        g = () => ({ time: 0, x: m(), y: m() }),
        y = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } },
        v = new WeakMap(),
        x = { start: 0, center: 0.5, end: 1 };
      function w(t, e, i = 0) {
        let n = 0;
        if ((t in x && (t = x[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (n = e)
            : t.endsWith("%")
              ? (t = e / 100)
              : t.endsWith("vw")
                ? (n = (e / 100) * document.documentElement.clientWidth)
                : t.endsWith("vh")
                  ? (n = (e / 100) * document.documentElement.clientHeight)
                  : (t = e);
        }
        return ("number" == typeof t && (n = e * t), i + n);
      }
      let b = [0, 0];
      function T(t, e, i, n) {
        let s = Array.isArray(t) ? t : b,
          r = 0;
        return (
          "number" == typeof t
            ? (s = [t, t])
            : "string" == typeof t && (s = (t = t.trim()).includes(" ") ? t.split(" ") : [t, x[t] ? t : "0"]),
          (r = w(s[0], i, n)) - w(s[1], e)
        );
      }
      let S = [
        [0, 0],
        [1, 1],
      ];
      var A = t.i(72846);
      let P = new WeakMap(),
        E = new WeakMap(),
        k = new WeakMap(),
        M = new WeakMap(),
        C = (t) => (t === document.scrollingElement ? window : t);
      function V(t, { container: e = document.scrollingElement, trackContentSize: i = !1, ...n } = {}) {
        if (!e) return l.f;
        let s = k.get(e);
        s || ((s = new Set()), k.set(e, s));
        let r = (function (t, e, i, n = {}) {
          let { target: s } = n,
            r = s || n.offset;
          return {
            measure: (e) => {
              if (r) {
                for (let t in ((i.time = e.time), y)) {
                  let { offset: n } = i[t];
                  (Object.assign(i[t], e[t]), (i[t].offset = n));
                }
                if (s && s !== t) {
                  let e = (function (t, e) {
                      let i = { x: 0, y: 0 },
                        n = t;
                      for (; n && n !== e;)
                        if ((0, A.f)(n)) ((i.x += n.offsetLeft), (i.y += n.offsetTop), (n = n.offsetParent));
                        else if ("svg" === n.tagName) {
                          let t = n.getBoundingClientRect(),
                            e = (n = n.parentElement).getBoundingClientRect();
                          ((i.x += t.left - e.left), (i.y += t.top - e.top));
                        } else if (n instanceof SVGGraphicsElement) {
                          let { x: t, y: e } = n.getBBox();
                          ((i.x += t), (i.y += e));
                          let s = null,
                            r = n.parentNode;
                          for (; !s;) ("svg" === r.tagName && (s = r), (r = n.parentNode));
                          n = s;
                        } else break;
                      return i;
                    })(s, t),
                    n =
                      "getBBox" in s && "svg" !== s.tagName
                        ? s.getBBox()
                        : { width: s.clientWidth, height: s.clientHeight };
                  ((i.x.targetOffset = e.x),
                    (i.y.targetOffset = e.y),
                    (i.x.targetLength = n.width),
                    (i.y.targetLength = n.height));
                }
                !(function (t, e) {
                  let { offset: i = S, axis: n = "y" } = e,
                    s = t[n];
                  s.offset.length = 0;
                  let r = i.length;
                  for (let t = 0; t < r; t++) s.offset[t] = T(i[t], s.containerLength, s.targetLength, s.targetOffset);
                  s.progress = (0, d.f)(
                    0,
                    1,
                    (function (t, e) {
                      let i = t.length - 1;
                      if (i < 1) return 0;
                      let n = t[0] > t[i],
                        s = (e) => t[n ? i - e : e];
                      if (t[0] === t[1] && e < s(0)) return +!!n;
                      let r = 0;
                      for (; r < i - 1 && e >= s(r + 1);) r++;
                      let o = (r + (0, p.f)(s(r), s(r + 1), e)) / i;
                      return n ? 1 - o : o;
                    })(s.offset, s.current),
                  );
                })(i, n);
              }
            },
            notify: (t) => e(r ? i : t),
          };
        })(e, t, g(), n);
        if ((s.add(r), !P.has(e))) {
          let t = g(),
            i = () => {
              var i = c.f.timestamp;
              for (let n in y)
                !(function (t, e, i, n) {
                  let s = i[e],
                    { length: r, position: o } = y[e],
                    a = s.current,
                    l = i.time,
                    h = t[`scroll${o}`];
                  ((s.current = !(function (t, e) {
                    let i = t === document.scrollingElement,
                      n = (i && document.body) || t,
                      s = v.get(n);
                    s || v.set(n, (s = getComputedStyle(n)));
                    let { writingMode: r, flexDirection: o } = s,
                      a = ("x" === e) !== /^[vs]/.test(r);
                    return (
                      (a ? ("rtl" === s.direction) != ("sideways-lr" === r) : r.endsWith("rl")) !==
                      (!i && s.display.includes("flex") && (a !== ("c" === o[0]) ? o : s.flexWrap).endsWith("reverse"))
                    );
                  })(t, e)
                    ? h
                    : -h || 0),
                    (s.containerLength = t[`client${r}`]),
                    (s.targetLength = t[`scroll${r}`]),
                    (s.scrollLength = s.targetLength - s.containerLength),
                    (s.offset.length = 0),
                    (s.offset[0] = 0),
                    (s.offset[1] = s.scrollLength),
                    (s.progress = (0, d.f)(0, 1, (0, p.f)(0, s.scrollLength, s.current))));
                  let u = n - l;
                  s.velocity = u > 50 ? 0 : (0, f.f)(s.current - a, u);
                })(e, n, t, i);
              for (let e of ((t.time = i), s)) e.measure(t);
              u.y.preUpdate(n);
            },
            n = () => {
              for (let e of s) e.notify(t);
            },
            r = () => u.y.read(i);
          P.set(e, r);
          let o = C(e);
          (window.addEventListener("resize", r),
            e !== document.documentElement && E.set(e, (0, h.f)(e, r)),
            o.addEventListener("scroll", r),
            r());
        }
        if (i && !M.has(e)) {
          let t = P.get(e),
            i = { width: e.scrollWidth, height: e.scrollHeight },
            n = u.y.read(() => {
              let n = e.scrollWidth,
                s = e.scrollHeight;
              (i.width !== n || i.height !== s) && (t(), (i.width = n), (i.height = s));
            }, !0);
          M.set(e, n);
        }
        let o = P.get(e);
        return (
          u.y.read(o, !1, !0),
          () => {
            (0, u.Y)(o);
            let t = k.get(e);
            if (!t || (t.delete(r), t.size)) return;
            k.delete(e);
            let i = P.get(e);
            (P.delete(e),
              i && (C(e).removeEventListener("scroll", i), E.get(e)?.(), window.removeEventListener("resize", i)));
            let n = M.get(e);
            n && ((0, u.Y)(n), M.delete(e));
          }
        );
      }
      let j = new Map(),
        D = (t) => {
          if (/v/u.test(t)) return [];
          let e = T(t, 0, 0, 0);
          return [T(t, 0, 1, 0) - e, e - T(t, 1, 0, 0), e];
        },
        R = ([t, e, i]) => !i && (0 === e || 1 === e) && `${e ? "entry" : "exit"}-crossing ${100 * t}%`;
      function L(t = S) {
        if (2 !== t.length) return;
        let [e, i] = t.map(D),
          n = [R(e), R(i)],
          s = i[0] - e[0],
          r = e[1] - i[1];
        if (n[0] && n[1] && (s || r)) return { points: n, a: s, b: r, cover: !e[0] && 1 === s && 1 === r };
      }
      function B(t, { axis: e = "y", source: i, container: n = document.scrollingElement, ...r } = {}) {
        if (!n) return l.f;
        let o = { axis: e, container: i || n, ...r };
        return "function" == typeof t
          ? V((i) => t(i[e].progress, i), o)
          : (function (t, e) {
              let i,
                { target: n, container: r, axis: o } = e,
                a = n && L(e.offset),
                l = !("u" < typeof window) && (n ? (0, s.G)() : (0, s.a)()) && (n ? !!a : !e.offset),
                u = new Map(),
                c = new Set(),
                d = !1,
                p = (t, e) => {
                  let [i, n] = a.points;
                  (e.effect.updateTiming({ direction: d ? ("normal" === t ? "reverse" : "alternate-reverse") : t }),
                    Object.assign(e, { rangeStart: d ? n : i, rangeEnd: d ? i : n }),
                    e.play());
                },
                f = [
                  t.attachTimeline({
                    get timeline() {
                      return l
                        ? (function ({ container: t, target: e, axis: i }) {
                            let n = j.get(t);
                            n || ((n = new Map()), j.set(t, n));
                            let s = e ?? "self",
                              r = n.get(s);
                            return (
                              r || ((r = {}), n.set(s, r)),
                              r[i] ||
                                (r[i] = e
                                  ? new ViewTimeline({ subject: e, axis: i })
                                  : new ScrollTimeline({ source: t, axis: i }))
                            );
                          })(e)
                        : void 0;
                    },
                    onAttach:
                      a &&
                      ((t) => {
                        let e = t.effect.getTiming().direction;
                        (u.set(t, e), p(e, t));
                      }),
                    observe: (t) => (
                      t.pause(),
                      c.add(t),
                      i ||
                        (i = V((t) => {
                          c.forEach((e) => {
                            e.time = e.iterationDuration * t[o].progress;
                          });
                        }, e)),
                      () => c.delete(t)
                    ),
                  }),
                ];
              if (l && a) {
                let { a: t, b: e } = a,
                  i = "y" === o ? "clientHeight" : "clientWidth",
                  s = () => {
                    d !== (d = t * n[i] + e * r[i] < 0) && u.forEach(p);
                  };
                (s(), t * e < 0 && f.push((0, h.f)(s), (0, h.f)([n, r], s)));
              }
              return () => {
                (f.forEach((t) => t()), i?.());
              };
            })(t, o);
      }
      var F = t.i(47414),
        I = t.i(74008);
      let O = () => ({
          scrollX: (0, r.o)(0),
          scrollY: (0, r.o)(0),
          scrollXProgress: (0, r.o)(0),
          scrollYProgress: (0, r.o)(0),
        }),
        N = (t) => !!t && !t.current;
      function $(t, e, i, s) {
        return {
          factory: (r) => {
            let o,
              a = () => {
                N(i) || N(s)
                  ? n.t.read(a)
                  : (o = B(r, { ...e, axis: t, container: i?.current || void 0, target: s?.current || void 0 }));
              };
            return (
              n.t.read(a),
              () => {
                ((0, n.w)(a), o?.());
              }
            );
          },
          times: [0, 1],
          keyframes: [0, 1],
          ease: (t) => t,
          duration: 1,
        };
      }
      var U = t.i(28409),
        W = t.i(96173),
        z = t.i(12008),
        Y = t.i(55560),
        H = t.i(79294);
      let X = new Set(),
        K = ({ timestamp: t }) => {
          X.forEach((e) => e.tick(t));
        };
      class _ extends H.f {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = 0),
            (this.currentTime = 0),
            (this.started = !1),
            (this.hasNextTarget = !1),
            (this.nextTarget = 0),
            (this.stop = () => {
              "idle" !== this.state && (this.teardown(), this.options.onStop?.());
            }),
            (this.options = t),
            (this.factory = t.type),
            (this.generator = this.factory(t)));
          let { driver: e } = t;
          (e && (this.driver = e((t) => this.tick(t))),
            (this.startTime = this.now()),
            (this.state = "running"),
            this.driver ? this.driver.start() : (X.size || u.y.update(K, !0), X.add(this)));
        }
        setTarget(t, e) {
          ((this.nextTarget = t), (this.nextVelocity = e), (this.hasNextTarget = !0));
        }
        retarget(t, e) {
          let { options: i, generator: n } = this;
          ((i.keyframes = t),
            (i.velocity = e),
            (this.startTime = this.now()),
            (this.currentTime = 0),
            n.retarget ? n.retarget(t, e) : (this.generator = this.factory(i)));
        }
        tick(t) {
          let { options: e, hasNextTarget: i } = this,
            { delay: n = 0, onUpdate: s, onPlay: r } = e;
          this.started || (this.startTime = (0, Y.f)(this.startTime, t));
          let o = Math.round(t - this.startTime) - n,
            a = (this.currentTime = Math.max(0, o)),
            l = this.generator.next(a),
            h = o < 0 ? e.keyframes[0] : l.value;
          if (i) {
            this.hasNextTarget = !1;
            let { keyframes: t } = e;
            ((t[0] = h), (t[1] = this.nextTarget), this.retarget(t, this.nextVelocity ?? this.getGeneratorVelocity()));
          }
          ((i || !this.started) && ((this.started = !0), r?.()),
            "running" === this.state &&
              (s?.(h),
              l.done &&
                o >= 0 &&
                !i &&
                !this.hasNextTarget &&
                "running" === this.state &&
                (this.notifyFinished(), this.teardown(), (this.state = "finished"), e.onComplete?.())));
        }
        getGeneratorVelocity() {
          return (0, z.f)(this.generator, this.currentTime, this.options.velocity);
        }
        now() {
          return this.driver ? this.driver.now() : W.f.now();
        }
        teardown() {
          ((this.state = "idle"), this.driver ? this.driver.stop() : (X.delete(this), X.size || (0, u.Y)(K)));
        }
      }
      var G = t.i(85260),
        q = t.i(83411);
      function Z(t, e, i) {
        return (function (t, e, i) {
          let n,
            s = t.get(),
            r = null,
            o = "string" == typeof s ? s.replace(/[\d.-]/g, "") : void 0,
            a = (t) => n(o ? t + o : t),
            l = () => t.events.animationStart?.notify(),
            h = () => {
              (r && (r.stop(), (r = null)), (t.animation = void 0));
            };
          if (
            (t.attach((e, s) => {
              n = s;
              let o = (0, G.f)(e);
              if (r?.state === "running") return void r.setTarget(o, i.velocity);
              let u = (0, G.f)(t.get()),
                c = r ? r.getGeneratorVelocity() : t.getVelocity();
              if ((h(), u === o)) return;
              let d = (r = new _({
                ...{ keyframes: [u, o], velocity: c, restDelta: 0.001, restSpeed: 0.01, ...i, onUpdate: a },
                onPlay: l,
              }));
              ((t.animation = d),
                d.then(() => {
                  r === d && ((r = null), (t.animation = void 0), t.events.animationComplete?.notify());
                }));
            }, h),
            (0, q.f)(e))
          ) {
            let n = !0 === i.skipInitialAnimation,
              s = (e) => {
                var i, s, r, a;
                n ? ((n = !1), t.jump(((i = e), (s = o) ? i + s : i), !1)) : t.set(((r = e), (a = o) ? r + a : r));
              },
              r = e.on("change", s),
              a = e.get();
            (0, G.f)(a) - (0, G.f)(t.get()) && s(a);
            let l = t.on("destroy", r);
            return () => {
              (r(), l(), h());
            };
          }
          return h;
        })(t, e, { ...i, type: U.f });
      }
      (t.i(68514), t.i(44573));
      var J = t.i(13383);
      function Q(t) {
        let e = (0, F.f)(() => (0, r.o)(t)),
          { isStatic: i } = (0, a.useContext)(J.f);
        if (i) {
          let [, i] = (0, a.useState)(t);
          (0, a.useEffect)(() => e.on("change", i), []);
        }
        return e;
      }
      var tt = t.i(44230);
      function te(t, e) {
        let i = Q(e()),
          n = () => i.set(e());
        return (
          n(),
          (0, I.f)(() => {
            let e = () => u.y.preRender(n, !1, !0),
              i = t.map((t) => t.on("change", e));
            return (
              n(),
              () => {
                (i.forEach((t) => t()), (0, u.Y)(n));
              }
            );
          }),
          i
        );
      }
      function ti(t, e) {
        let i = (0, F.f)(() => []);
        return te(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
      t.s(
        [
          "Graph",
          0,
          function ({ children: t }) {
            let l = (0, a.useRef)(null),
              { scrollYProgress: h } = (function ({ container: t, target: e, ...i } = {}) {
                var r;
                let l = (0, F.f)(O);
                ((r = i.offset),
                  !("u" < typeof window) &&
                    (e ? (0, s.G)() && !!L(r) : (0, s.a)() && !r) &&
                    ((l.scrollXProgress.accelerate = $("x", i, t, e)),
                    (l.scrollYProgress.accelerate = $("y", i, t, e))));
                let h = (0, a.useRef)(null),
                  u = (0, a.useRef)(!1),
                  c = (0, a.useCallback)(
                    () => (
                      (h.current = B(
                        (t, { x: e, y: i }) => {
                          (l.scrollX.set(e.current),
                            l.scrollXProgress.set(e.progress),
                            l.scrollY.set(i.current),
                            l.scrollYProgress.set(i.progress));
                        },
                        { ...i, container: t?.current || void 0, target: e?.current || void 0 },
                      )),
                      () => {
                        h.current?.();
                      }
                    ),
                    [t, e, JSON.stringify(i.offset)],
                  );
                return (
                  (0, I.f)(() => {
                    if (((u.current = !1), !(N(t) || N(e)))) return c();
                    u.current = !0;
                  }, [c]),
                  (0, a.useEffect)(() => {
                    let i;
                    if (!u.current) return;
                    let s = () => {
                      let n = N(t),
                        s = N(e);
                      ((0, o.k)(!n, "Container ref is defined but not hydrated", "use-scroll-ref"),
                        (0, o.k)(!s, "Target ref is defined but not hydrated", "use-scroll-ref"),
                        n || s || (i = c()));
                    };
                    return (
                      n.t.read(s),
                      () => {
                        ((0, n.w)(s), i?.());
                      }
                    );
                  }, [c]),
                  l
                );
              })({ target: l, offset: ["start 60%", "end 80%"] }),
              u = (function (t, e = {}) {
                return (function (t, e, i) {
                  let { isStatic: n } = (0, a.useContext)(J.f),
                    s = () => ((0, q.f)(t) ? t.get() : t);
                  if (n)
                    return (function t(e, i, n, s) {
                      if ("function" == typeof e) {
                        let t;
                        return ((r.I.current = []), e(), (t = te(r.I.current, e)), (r.I.current = void 0), t);
                      }
                      if (void 0 !== n && !Array.isArray(n) && "function" != typeof i) {
                        var o = e,
                          a = i,
                          l = n,
                          h = s;
                        let r = (0, F.f)(() => Object.keys(l)),
                          u = (0, F.f)(() => ({}));
                        for (let e of r) u[e] = t(o, a, l[e], h);
                        return u;
                      }
                      let u =
                          "function" == typeof i
                            ? i
                            : (function (...t) {
                                let e = !Array.isArray(t[0]),
                                  i = e ? 0 : -1,
                                  n = t[0 + i],
                                  s = t[1 + i],
                                  r = t[2 + i],
                                  o = t[3 + i],
                                  a = (0, tt.f)(s, r, o);
                                return e ? a(n) : a;
                              })(i, n, s),
                        c = Array.isArray(e) ? ti(e, u) : ti([e], ([t]) => u(t)),
                        d = Array.isArray(e) ? void 0 : e.accelerate;
                      if (d && !d.isTransformed && "function" != typeof i && Array.isArray(n) && s?.clamp !== !1) {
                        let t = s?.ease;
                        c.accelerate = {
                          ...d,
                          times: [0, ...i, 1],
                          keyframes: [n[0], ...n, n[n.length - 1]],
                          isTransformed: !0,
                          ...(t ? { ease: Array.isArray(t) ? [t[0], ...t] : t } : {}),
                        };
                      }
                      return c;
                    })(s);
                  let o = Q(s());
                  return ((0, a.useInsertionEffect)(() => i(o, t, e), [o, JSON.stringify(e)]), o);
                })(t, e, Z);
              })(h, { stiffness: 120, damping: 30, mass: 0.4 });
            return (0, e.jsxs)("div", {
              ref: l,
              className: "graph",
              children: [
                (0, e.jsx)("div", {
                  className: "spine",
                  "aria-hidden": !0,
                  children: (0, e.jsx)(i.f.div, { className: "spine-fill", style: { scaleY: u } }),
                }),
                t,
              ],
            });
          },
        ],
        54334,
      );
    },
    47909,
    (t) => {
      var e = t.i(43476),
        i = t.i(46932),
        n = t.i(71645),
        s = t.i(49652);
      let r = { some: 0, all: 1 };
      var o = t.i(72328),
        a = t.i(1476),
        l = t.i(30747),
        h = t.i(90966);
      t.s(
        [
          "ProjectBranch",
          0,
          function ({ project: t, index: u }) {
            let c = (0, o.f)(),
              d = (0, n.useRef)(null),
              p = (function (t, { root: e, margin: i, amount: o, once: a = !1, initial: l = !1 } = {}) {
                let [h, u] = (0, n.useState)(l);
                return (
                  (0, n.useEffect)(() => {
                    if (!t.current || (a && h)) return;
                    let n = { root: (e && e.current) || void 0, margin: i, amount: o };
                    return (function (t, e, { root: i, margin: n, amount: o = "some" } = {}) {
                      let a = (0, s.f)(t),
                        l = new WeakMap(),
                        h = new IntersectionObserver(
                          (t) => {
                            t.forEach((t) => {
                              let i = l.get(t.target);
                              if (!!i !== t.isIntersecting)
                                if (t.isIntersecting) {
                                  let i = e(t.target, t);
                                  "function" == typeof i ? l.set(t.target, i) : h.unobserve(t.target);
                                } else "function" == typeof i && (i(t), l.delete(t.target));
                            });
                          },
                          { root: i, rootMargin: n, threshold: "number" == typeof o ? o : r[o] },
                        );
                      return (a.forEach((t) => h.observe(t)), () => h.disconnect());
                    })(t.current, () => (u(!0), a ? void 0 : () => u(!1)), n);
                  }, [e, t, i, a, o]),
                  h
                );
              })(d, { once: !0, amount: 0.15 }),
              f = `${t.accent}88`,
              m = { fill: "none", stroke: t.accent, strokeWidth: 2, style: { filter: `drop-shadow(0 0 6px ${f})` } },
              g = c ? {} : { initial: { pathLength: 0 }, animate: { pathLength: +!!p } };
            return (0, e.jsxs)("section", {
              ref: d,
              id: t.slug,
              className: "feature",
              style: (0, a.f)(t.accent),
              children: [
                (0, e.jsx)("svg", {
                  className: "fork",
                  viewBox: "0 0 72 48",
                  "aria-hidden": !0,
                  children: (0, e.jsx)(i.f.path, {
                    d: "M14 0 C 14 26, 42 22, 42 48",
                    ...m,
                    ...g,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }),
                }),
                (0, e.jsx)(i.f.span, {
                  className: "lane",
                  "aria-hidden": !0,
                  style: { background: t.accent, boxShadow: `0 0 8px ${f}` },
                  initial: c ? void 0 : { scaleY: 0 },
                  animate: { scaleY: +!!(p || c) },
                  transition: { duration: 1.1, delay: 0.45, ease: "easeInOut" },
                }),
                (0, e.jsx)("svg", {
                  className: "fork merge-curve",
                  viewBox: "0 0 72 48",
                  "aria-hidden": !0,
                  children: (0, e.jsx)(i.f.path, {
                    d: "M42 0 C 42 26, 14 22, 14 48",
                    ...m,
                    ...g,
                    transition: { duration: 0.5, delay: 1.4, ease: "easeOut" },
                  }),
                }),
                (0, e.jsxs)(i.f.article, {
                  className: "card",
                  initial: { opacity: 0, x: 30 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0, margin: "-100px" },
                  transition: { duration: 0.7, delay: 0.25, ease: l.f },
                  whileHover: c ? void 0 : { borderColor: t.accent },
                  children: [
                    (0, e.jsxs)("div", {
                      className: "meta",
                      children: [
                        (0, e.jsx)(h.f, { seed: t.slug }),
                        (0, e.jsx)("span", { className: "ref branch", style: { color: t.accent }, children: t.branch }),
                        (0, e.jsxs)("span", { children: ["side project #", u + 1] }),
                      ],
                    }),
                    (0, e.jsx)("h3", { children: t.name }),
                    (0, e.jsx)("p", { className: "summary", children: t.summary }),
                    (0, e.jsx)("p", { className: "problem", children: t.problem }),
                    (0, e.jsx)("ul", {
                      className: "diff",
                      children: t.highlights.map((t) => (0, e.jsx)("li", { children: t }, t)),
                    }),
                    t.stack.length > 0 &&
                      (0, e.jsx)("div", {
                        className: "stack",
                        children: t.stack.map((t) => (0, e.jsx)("span", { className: "chip", children: t }, t)),
                      }),
                    t.links.length > 0 &&
                      (0, e.jsx)("div", {
                        className: "links",
                        children: t.links.map((t) =>
                          (0, e.jsxs)(
                            "a",
                            { href: t.href, target: "_blank", rel: "noreferrer", children: [t.label, " ↗"] },
                            t.href,
                          ),
                        ),
                      }),
                  ],
                }),
                (0, e.jsxs)("p", { className: "merge", children: ["Merge branch '", t.branch, "' into main"] }),
              ],
            });
          },
        ],
        47909,
      );
    },
    67514,
    (t) => {
      var e = t.i(43476),
        i = t.i(91458);
      let n = (t) => String(t).padStart(2, "0");
      var s = t.i(71645);
      function r(t) {
        let e = setInterval(t, 1e3);
        return () => clearInterval(e);
      }
      function o() {
        return 1e3 * Math.floor(Date.now() / 1e3);
      }
      function a() {
        return null;
      }
      let l = new Date(i.f.firstCommit).getTime();
      t.s(
        [
          "Uptime",
          0,
          function () {
            let t,
              i,
              h,
              u,
              c = (0, s.useSyncExternalStore)(r, o, a);
            return null === c
              ? (0, e.jsx)("span", { children: "uptime: calculating…" })
              : (0, e.jsxs)("span", {
                  title: "since my first commit",
                  children: [
                    "uptime: ",
                    ((i = Math.floor((t = Math.floor((c - l) / 1e3)) / 86400)),
                    (h = Math.floor((t % 86400) / 3600)),
                    (u = Math.floor((t % 3600) / 60)),
                    `${i}d ${n(h)}:${n(u)}:${n(t % 60)}`),
                  ],
                });
          },
        ],
        67514,
      );
    },
    35002,
    (t) => {
      var e = t.i(43476),
        i = t.i(46932),
        n = t.i(34549),
        s = t.i(58261),
        r = t.i(1476),
        o = t.i(30747);
      t.s([
        "CertificationGrid",
        0,
        function () {
          return (0, e.jsx)("div", {
            className: "certs",
            children: n.f.map((t, n) =>
              (0, e.jsxs)(
                i.f.div,
                {
                  className: "cert",
                  style: (0, r.f)(t.accent),
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, margin: "-60px" },
                  transition: { duration: 0.5, delay: 0.1 * n, ease: o.f },
                  children: [
                    (0, e.jsx)("div", {
                      className: "badge-slot",
                      children: (0, e.jsx)("img", {
                        className: "badge-img",
                        src: t.badge,
                        alt: `${t.name} badge`,
                        width: 150,
                        height: 150,
                        loading: "lazy",
                      }),
                    }),
                    (0, e.jsxs)("span", { className: "cert-tag", children: ["$ git tag -v ", t.tag] }),
                    (0, e.jsx)("span", { className: "cert-name", children: t.name }),
                    (0, e.jsx)("span", { className: "cert-issuer", children: t.issuer }),
                    (0, e.jsxs)("a", {
                      className: "cert-verify",
                      href: t.href,
                      target: "_blank",
                      rel: "noreferrer",
                      children: [
                        (0, e.jsx)("span", { className: "ok", children: "✓" }),
                        " ",
                        s.f.certifications.verifyLabel,
                        " ↗",
                      ],
                    }),
                  ],
                },
                t.tag,
              ),
            ),
          });
        },
      ]);
    },
    41699,
    (t) => {
      var e = t.i(43476),
        i = t.i(72328),
        n = t.i(71645),
        s = t.i(91458);
      t.s([
        "TypedRole",
        0,
        function () {
          let t = (0, i.f)(),
            r = `> ${s.f.role.toLowerCase()}`,
            [o, a] = (0, n.useState)(0),
            l = o >= r.length,
            h = t ? r.length : o;
          return (
            (0, n.useEffect)(() => {
              if (t || l) return;
              let e = setTimeout(() => a(o + 1), 0 === o ? 500 : 55);
              return () => clearTimeout(e);
            }, [o, l, t]),
            (0, e.jsxs)("span", {
              className: "role",
              "aria-label": s.f.role,
              children: [r.slice(0, h), (0, e.jsx)("span", { className: "caret", "aria-hidden": !0 })],
            })
          );
        },
      ]);
    },
    34549,
    58261,
    (t) => {
      let e =
        "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main";
      (t.s(
        [
          "f",
          0,
          [
            {
              tag: "az-ai-engineer",
              name: "Azure AI Engineer Associate",
              issuer: "Microsoft",
              badge: e,
              href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/8D83632555218E6A?sharingId=42045F4A976B2289",
              accent: "#4cc2ff",
            },
            {
              tag: "az-security-engineer",
              name: "Azure Security Engineer Associate",
              issuer: "Microsoft",
              badge: e,
              href: "https://learn.microsoft.com/api/credentials/share/en-us/emanuel-evans/46DD67DDAF309515?sharingId=42045F4A976B2289",
              accent: "#7c9cff",
            },
            {
              tag: "csslp",
              name: "Certified Secure Software Lifecycle Professional (CSSLP)",
              issuer: "ISC2",
              badge: "/badges/csslp.png",
              href: "https://www.credly.com/badges/0a5d2907-0a3f-4af0-a7ef-b93f5cf4c8cd",
              accent: "#4ade80",
            },
          ],
        ],
        34549,
      ),
        t.s(
          [
            "f",
            0,
            {
              hero: { commitMessage: "feat: say hello", headRef: "HEAD -> main", greeting: "Hey, my name is" },
              about: { commitMessage: "docs: add README.md", heading: "About" },
              certifications: {
                commitMessage: "ci: add verified credentials",
                tagRef: "signed",
                heading: "Certifications",
                verifyLabel: "Verify certification",
              },
              contact: {
                commitMessage: "chore: keen to make a difference",
                tagRef: "v1.0.0",
                heading: "Let's talk",
                command: "git checkout -b work-together",
                emailLabel: "Say hello",
              },
              initialCommit: { commitMessage: "init: hello world" },
              footer: { builtWith: "built with Next.js", status: "all checks passed" },
            },
          ],
          58261,
        ));
    },
    9183,
    (t) => {
      t.s([
        "r",
        0,
        (t) => `Copied ${t}. It doesn't check out to anything, but nice instinct.`,
        "i",
        0,
        [
          "Hello, fellow dev-tools opener. 👋",
          "You clearly read source for fun, so we'd probably get along.",
          "Press ` anywhere on the page for a shell, or try the Konami code.",
        ],
        "X",
        0,
        {
          output: [
            "$ git push --force origin main",
            "+ 3f2a1c9...0000000 main -> main (forced update)",
            "remote: Rewriting history...",
            "remote: Deleting 1,337 commits...",
          ],
          punchline: "Just kidding. Protected branches exist for a reason.",
        },
        "O",
        0,
        {
          welcome: "shell v1.0. type 'help' to look around.",
          hint: "to open a shell",
          help: [
            { usage: "whoami", description: "who wrote all this" },
            { usage: "ls", description: "list side projects" },
            { usage: "cat <project>", description: "read about a project" },
            { usage: "git log", description: "recent history" },
            { usage: "git tag", description: "certifications" },
            { usage: "contact", description: "how to reach me" },
            { usage: "sudo hire-me", description: "¯\\_(ツ)_/¯" },
            { usage: "clear | exit", description: "" },
          ],
          replies: {
            gitBlame: "it was me. it is always me.",
            gitPush: "pushing...",
            rm: "rm: nice try. this site has backups.",
            vim: "you are now trapped in vim. type 'exit' (we're kind here).",
            hireMe: (t) => `[sudo] password for recruiter: ********
Access granted. Opening a conversation is the next step: ${t}`,
            notSudoer: (t) => `${t} is not in the sudoers file. This incident will be reported.`,
          },
        },
      ]);
    },
    91458,
    (t) => {
      t.s([
        "f",
        0,
        {
          name: "Emanuel",
          handle: "evansem",
          role: "Application Security Engineer",
          tagline: "I like solving software problems with a security perspective",
          location: "Australia",
          github: "https://github.com/evansem",
          linkedin: "https://www.linkedin.com/in/emanuel-evans/",
          email: "",
          firstCommit: "2017-01-01",
        },
      ]);
    },
    1476,
    (t) => {
      t.s([
        "f",
        0,
        function (t) {
          return { "--accent": t };
        },
      ]);
    },
    30747,
    (t) => {
      t.s(["f", 0, [0.2, 0.7, 0.2, 1]]);
    },
  ]);
})();
