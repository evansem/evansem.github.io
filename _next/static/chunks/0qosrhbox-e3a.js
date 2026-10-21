(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    28298,
    (e, t, r) => {
      (e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useRouterBFCache", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = e.r(71645);
      function l(e, t, r) {
        let [l, a] = (0, n.useState)(() => ({ tree: e, renderTree: t, stateKey: r, next: null }));
        if (l.tree === e) return l;
        let o = { tree: e, renderTree: t, stateKey: r, next: null },
          u = 1,
          i = l,
          d = o;
        for (; null !== i && u < 1;) {
          if (i.stateKey === r) {
            d.next = i.next;
            break;
          }
          {
            u++;
            let e = { tree: i.tree, renderTree: i.renderTree, stateKey: i.stateKey, next: null };
            ((d.next = e), (d = e));
          }
          i = i.next;
        }
        return (a(o), o);
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    42903,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        createClientParams: function () {
          return a.createRenderParamsFromClient;
        },
        createClientSearchParams: function () {
          return o.createRenderSearchParamsFromClient;
        },
      };
      for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
      let a = e.r(97689),
        o = e.r(66996);
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    47257,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "ClientPageRoot", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let n = e.r(43476),
        l = e.r(8372),
        a = e.r(71645),
        o = e.r(33906),
        u = e.r(61994),
        i = e.r(42903);
      function d({ Component: e, serverProvidedParams: t }) {
        let r, s;
        if (null !== t) ((r = t.searchParams), (s = t.params));
        else {
          let e = (0, a.use)(l.LayoutRouterContext);
          ((s = null !== e ? e.parentParams : {}),
            (r = (0, o.urlSearchParamsToParsedUrlQuery)((0, a.use)(u.SearchParamsContext))));
        }
        let c = (0, i.createClientSearchParams)(r),
          f = (0, i.createClientParams)(s);
        return (0, n.jsx)(e, { params: f, searchParams: c });
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    92825,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "ClientSegmentRoot", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let n = e.r(43476),
        l = e.r(8372),
        a = e.r(71645),
        o = e.r(42903);
      function u({ Component: e, slots: t, serverProvidedParams: r }) {
        let i;
        if (null !== r) i = r.params;
        else {
          let e = (0, a.use)(l.LayoutRouterContext);
          i = null !== e ? e.parentParams : {};
        }
        let d = (0, o.createClientParams)(i);
        return (0, n.jsx)(e, { ...t, params: d });
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    68017,
    (e, t, r) => {
      (e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let n = e.r(90809),
        l = e.r(43476),
        a = n._(e.r(71645)),
        o = e.r(90373),
        u = e.r(54394),
        i = e.r(8372);
      class d extends a.default.Component {
        constructor(e) {
          (super(e), (this.state = { triggeredStatus: void 0, previousPathname: e.pathname }));
        }
        componentDidCatch() {}
        static getDerivedStateFromError(e) {
          if ((0, u.isHTTPAccessFallbackError)(e)) return { triggeredStatus: (0, u.getAccessFallbackHTTPStatus)(e) };
          throw e;
        }
        static getDerivedStateFromProps(e, t) {
          return e.pathname !== t.previousPathname && t.triggeredStatus
            ? { triggeredStatus: void 0, previousPathname: e.pathname }
            : { triggeredStatus: t.triggeredStatus, previousPathname: e.pathname };
        }
        render() {
          let { notFound: e, forbidden: t, unauthorized: r, children: n } = this.props,
            { triggeredStatus: a } = this.state,
            o = {
              [u.HTTPAccessErrorStatus.NOT_FOUND]: e,
              [u.HTTPAccessErrorStatus.FORBIDDEN]: t,
              [u.HTTPAccessErrorStatus.UNAUTHORIZED]: r,
            };
          if (a) {
            let i = a === u.HTTPAccessErrorStatus.NOT_FOUND && e,
              d = a === u.HTTPAccessErrorStatus.FORBIDDEN && t,
              s = a === u.HTTPAccessErrorStatus.UNAUTHORIZED && r;
            return i || d || s
              ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)("meta", { name: "robots", content: "noindex" }), !1, o[a]],
                })
              : n;
          }
          return n;
        }
      }
      function s({ notFound: e, forbidden: t, unauthorized: r, children: n }) {
        let u = (0, o.useUntrackedPathname)(),
          c = (0, a.useContext)(i.MissingSlotContext);
        return e || t || r
          ? (0, l.jsx)(d, { pathname: u, notFound: e, forbidden: t, unauthorized: r, missingSlots: c, children: n })
          : (0, l.jsx)(l.Fragment, { children: n });
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    77694,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        InstantValidationBoundaryContext: function () {
          return a.InstantValidationBoundaryContext;
        },
        PlaceValidationBoundaryBelowThisLevel: function () {
          return a.PlaceValidationBoundaryBelowThisLevel;
        },
        RenderValidationBoundaryAtThisLevel: function () {
          return a.RenderValidationBoundaryAtThisLevel;
        },
        SlotMarker: function () {
          return a.SlotMarker;
        },
      };
      for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
      let a = e.r(22976);
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    22976,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        InstantValidationBoundaryContext: function () {
          return a;
        },
        PlaceValidationBoundaryBelowThisLevel: function () {
          return o;
        },
        RenderValidationBoundaryAtThisLevel: function () {
          return u;
        },
        SlotMarker: function () {
          return i;
        },
      };
      for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
      let a = null,
        o = null,
        u = null,
        i = null;
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    39756,
    (e, t, r) => {
      (e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 }));
      var n = {
        LoadingBoundaryProvider: function () {
          return x;
        },
        default: function () {
          return M;
        },
      };
      for (var l in n) Object.defineProperty(r, l, { enumerable: !0, get: n[l] });
      let a = e.r(90809),
        o = e.r(43476),
        u = a._(e.r(71645)),
        i = e.r(8372),
        d = e.r(1244),
        s = e.r(72383),
        c = e.r(91915),
        f = e.r(58442),
        p = e.r(68017);
      e.r(77694);
      let m = e.r(27828),
        y = e.r(28298);
      e.r(74180);
      let h = e.r(61994),
        v = e.r(33906),
        b = e.r(24988);
      function g(e, t, r) {
        let n = e.getClientRects();
        if (0 === n.length) return 0;
        let l = 1 / 0;
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          t.top < l && (l = t.top);
        }
        return l >= r() && l <= t ? 1 : 2;
      }
      function P(e) {
        let t = u.default.useRef(null);
        return (
          (0, u.useLayoutEffect)(
            () => {
              let { scrollRef: r, renderTree: n } = e,
                l = r.forceScroll ? r.scrollRef : n.data.scrollRef;
              if (null === l || !l.current) return;
              let a = null,
                o = r.hashFragment;
              if (o) {
                if (
                  null ===
                  (a =
                    "top" === o
                      ? document.body
                      : (document.getElementById(o) ?? document.getElementsByName(o)[0] ?? null))
                ) {
                  ((l.current = !1), (r.onlyHashChange = !1), (r.hashFragment = null));
                  return;
                }
              } else a = t.current;
              if (null === a) return;
              let u = !1;
              ((0, c.disableSmoothScrollDuringRouteTransition)(
                () => {
                  let e = document.documentElement,
                    t = null,
                    r = null,
                    n = null,
                    i = () => {
                      var r;
                      let l, a;
                      return (
                        null === n &&
                          ((r = t),
                          (n =
                            !Number.isFinite((a = Number.parseFloat((l = getComputedStyle(e).scrollPaddingTop)))) ||
                            a < 0
                              ? 0
                              : l.endsWith("px")
                                ? a
                                : l.endsWith("%")
                                  ? (a / 100) * r
                                  : 0)),
                        n
                      );
                    };
                  (o || ((t = e.clientHeight), 0 !== (r = g(a, t, i)))) &&
                    (((u = !0), (l.current = !1), o)
                      ? a.scrollIntoView()
                      : 1 !== r && ((e.scrollTop = 0), 2 === g(a, t, i) && a.scrollIntoView()));
                },
                { dontForceLayout: !0, onlyHashChange: r.onlyHashChange },
              ),
                u && ((r.onlyHashChange = !1), (r.hashFragment = null)));
            },
            void 0,
          ),
          (0, o.jsx)(u.Fragment, { ref: t, children: e.children })
        );
      }
      function j({ children: e, renderTree: t }) {
        let r = (0, u.useContext)(i.GlobalLayoutRouterContext);
        if (!r) throw Error("invariant global layout router not mounted");
        return (0, o.jsx)(P, { scrollRef: r.scrollRef, renderTree: t, children: e });
      }
      function _({ tree: e, segmentPath: t, debugNameContext: r, renderTree: n, params: l, url: a, isActive: s }) {
        let c,
          f = (0, u.useContext)(i.GlobalLayoutRouterContext);
        if (((0, u.useContext)(h.NavigationPromisesContext), !f))
          throw Error("invariant global layout router not mounted");
        let p = null !== n.data.prefetchRsc ? n.data.prefetchRsc : n.data.rsc,
          m = (0, u.useDeferredValue)(n.data.rsc, p);
        if ((0, b.isDeferredRsc)(m)) {
          let e = (0, u.use)(m);
          (null === e && (0, u.use)(d.unresolvedThenable), (c = e));
        } else (null === m && (0, u.use)(d.unresolvedThenable), (c = m));
        let y = c;
        return (0, o.jsx)(i.LayoutRouterContext.Provider, {
          value: {
            parentTree: e,
            parentRenderTree: n,
            parentSegmentPath: t,
            parentParams: l,
            parentLoadingData: null,
            debugNameContext: r,
            url: a,
            isActive: s,
          },
          children: y,
        });
      }
      function x({ loading: e, children: t }) {
        let r = (0, u.use)(i.LayoutRouterContext);
        return null === r
          ? t
          : (0, o.jsx)(i.LayoutRouterContext.Provider, {
              value: {
                parentTree: r.parentTree,
                parentRenderTree: r.parentRenderTree,
                parentSegmentPath: r.parentSegmentPath,
                parentParams: r.parentParams,
                parentLoadingData: e,
                debugNameContext: r.debugNameContext,
                url: r.url,
                isActive: r.isActive,
              },
              children: t,
            });
      }
      function O({ name: e, loading: t, children: r }) {
        if (null !== t) {
          let n = t[0],
            l = t[1],
            a = t[2];
          return (0, o.jsx)(u.Suspense, {
            name: e,
            fallback: (0, o.jsxs)(o.Fragment, { children: [l, a, n] }),
            children: r,
          });
        }
        return (0, o.jsx)(o.Fragment, { children: r });
      }
      function M({
        parallelRouterKey: e,
        error: t,
        errorStyles: r,
        errorScripts: n,
        templateStyles: l,
        templateScripts: a,
        template: c,
        notFound: h,
        forbidden: b,
        unauthorized: g,
        segmentViewBoundaries: P,
      }) {
        let x = (0, u.useContext)(i.LayoutRouterContext);
        if (!x) throw Error("invariant expected layout router to be mounted");
        let {
            parentTree: T,
            parentRenderTree: C,
            parentSegmentPath: R,
            parentParams: S,
            parentLoadingData: F,
            url: w,
            isActive: B,
            debugNameContext: E,
          } = x,
          A = T[0],
          L = null === R ? [e] : R.concat([A, e]),
          H = T[1][e],
          k = C.slots?.get(e);
        (void 0 === H || void 0 === k) && (0, u.use)(d.unresolvedThenable);
        let D = H[0],
          N = (0, m.createSegmentKey)(D),
          I = (0, y.useRouterBFCache)(H, k, N),
          V = [];
        do {
          let e = I.tree,
            u = I.renderTree,
            d = I.stateKey,
            m = e[0],
            y = S;
          if (Array.isArray(m)) {
            let e = m[0],
              t = m[1],
              r = m[2],
              n = (0, v.getParamValueFromCacheKey)(t, r);
            null !== n && (y = { ...S, [e]: n });
          }
          let P = (function (e) {
              if ("/" === e) return "/";
              if ("string" == typeof e)
                if ("(__SLOT__)" === e) return;
                else return e + "/";
              return e[1] + "/";
            })(m),
            x = P ?? E,
            M = void 0 === P ? void 0 : E,
            T = (0, o.jsxs)(j, {
              renderTree: u,
              children: [
                (0, o.jsx)(s.ErrorBoundary, {
                  errorComponent: t,
                  errorStyles: r,
                  errorScripts: n,
                  children: (0, o.jsx)(O, {
                    name: M,
                    loading: F,
                    children: (0, o.jsx)(p.HTTPAccessFallbackBoundary, {
                      notFound: h,
                      forbidden: b,
                      unauthorized: g,
                      children: (0, o.jsxs)(f.RedirectBoundary, {
                        children: [
                          (0, o.jsx)(_, {
                            url: w,
                            tree: e,
                            params: y,
                            renderTree: u,
                            segmentPath: L,
                            debugNameContext: x,
                            isActive: B && d === N,
                          }),
                          null,
                        ],
                      }),
                    }),
                  }),
                }),
                null,
              ],
            }),
            C = (0, o.jsxs)(i.TemplateContext.Provider, { value: T, children: [l, a, c] }, d);
          (V.push(C), (I = I.next));
        } while (null !== I);
        return V;
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    37457,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let n = e.r(90809),
        l = e.r(43476),
        a = n._(e.r(71645)),
        o = e.r(8372);
      function u() {
        let e = (0, a.useContext)(o.TemplateContext);
        return (0, l.jsx)(l.Fragment, { children: e });
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    97689,
    (e, t, r) => {
      (e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "createRenderParamsFromClient", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = e.r(6831).createRenderParamsFromClient;
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    6831,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "createRenderParamsFromClient", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = new WeakMap();
      function l(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return ((r.status = "fulfilled"), (r.value = e), n.set(e, r), r);
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    66996,
    (e, t, r) => {
      (e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "createRenderSearchParamsFromClient", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = e.r(93504).createRenderSearchParamsFromClient;
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    93504,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "createRenderSearchParamsFromClient", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = new WeakMap();
      function l(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return ((r.status = "fulfilled"), (r.value = e), n.set(e, r), r);
      }
      ("function" == typeof r.default || ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    27201,
    (e, t, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "IconMark", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = e.r(43476),
        l = () => ("u" > typeof window ? null : (0, n.jsx)("meta", { name: "«nxt-icon»" }));
    },
    91915,
    (e, t, r) => {
      function n(e, t = {}) {
        if (t.onlyHashChange) return void e();
        let r = document.documentElement;
        if ("smooth" !== r.dataset.scrollBehavior) return void e();
        let l = r.style.scrollBehavior;
        ((r.style.scrollBehavior = "auto"), t.dontForceLayout || r.getClientRects(), e(), (r.style.scrollBehavior = l));
      }
      (e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
    },
    94459,
    (e) => {
      var t = e.i(43476),
        r = e.i(71645);
      let n = ["124,156,255", "167,139,250", "74,222,128", "245,197,66"],
        l = (e, t) => e + Math.random() * (t - e),
        a = (e, t) => Math.floor(l(e, t + 1)),
        o = (e, t) => `rgba(${e},${t})`;
      function u(e, t, r) {
        let n = t / e.wavelength + e.phase + 4e-5 * r;
        return e.centerX + Math.sin(n) * e.amplitude;
      }
      function i(e, t, r, n) {
        (e.beginPath(), e.arc(t, r, n, 0, 2 * Math.PI), e.fill());
      }
      e.s([
        "Backdrop",
        0,
        function () {
          let e = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let t = e.current,
                r = t?.getContext("2d");
              if (!t || !r) return;
              let d = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                s = { x: -9999, y: -9999 },
                c = 0,
                f = 0,
                p = [],
                m = [],
                y = () => {
                  var e, o, u;
                  let i,
                    d,
                    s = Math.min(window.devicePixelRatio || 1, 2);
                  ((c = window.innerWidth),
                    (f = window.innerHeight),
                    (t.width = c * s),
                    (t.height = f * s),
                    (t.style.width = `${c}px`),
                    (t.style.height = `${f}px`),
                    r.setTransform(s, 0, 0, s, 0, 0),
                    (i = Math.max(3, Math.round((e = c) / 140))),
                    (d = e / i),
                    (o = p =
                      Array.from({ length: i }, (e, t) => ({
                        centerX: (t + 0.5) * d + l(-20, 20),
                        amplitude: l(20, 70),
                        wavelength: l(180, 400),
                        phase: l(0, 2 * Math.PI),
                        color: t % 4 == 0 ? n[0] : n[a(0, n.length - 1)],
                      }))),
                    (u = f),
                    (m = o.flatMap((e, t) =>
                      Array.from({ length: a(2, 4) }, () => ({
                        laneIndex: t,
                        y: l(0, u),
                        speed: l(6, 16),
                        radius: l(1.6, 3.2),
                      })),
                    )));
                },
                h = (e, t) => {
                  if (((e.y += (e.speed * t) / 1e3), !(e.y <= f + 20) && ((e.y = -20), 0.35 > Math.random()))) {
                    let t,
                      r = 0.5 > Math.random() ? -1 : 1;
                    ((t = e.laneIndex + r), (e.laneIndex = Math.min(p.length - 1, Math.max(0, t))));
                  }
                },
                v = (e, t) => {
                  let n = p[e.laneIndex],
                    l = u(n, e.y, t),
                    a = 0.14 + 0.35 * Math.max(0, 1 - Math.hypot(l - s.x, e.y - s.y) / 220),
                    d = 6 * e.radius,
                    c = r.createRadialGradient(l, e.y, 0, l, e.y, d);
                  (c.addColorStop(0, o(n.color, 0.5 * a)),
                    c.addColorStop(1, o(n.color, 0)),
                    (r.fillStyle = c),
                    i(r, l, e.y, d),
                    (r.fillStyle = o(n.color, a)),
                    i(r, l, e.y, e.radius));
                },
                b = (e, t) => {
                  r.clearRect(0, 0, c, f);
                  for (let t of ((r.lineWidth = 1), p)) {
                    ((r.strokeStyle = o(t.color, 0.045)), r.beginPath(), r.moveTo(u(t, -10, e), -10));
                    for (let n = 2; n <= f + 10; n += 12) r.lineTo(u(t, n, e), n);
                    r.stroke();
                  }
                  for (let r of m) (h(r, t), v(r, e));
                },
                g = 0,
                P = performance.now(),
                j = 0,
                _ = (e) => {
                  ((g = requestAnimationFrame(_)), (j += Math.min(e - P, 100)), (P = e), j < 33 || (b(e, j), (j = 0)));
                },
                x = () => {
                  ((P = performance.now()), (g = requestAnimationFrame(_)));
                },
                O = () => {
                  (y(), d && b(0, 0));
                },
                M = (e) => {
                  ((s.x = e.clientX), (s.y = e.clientY));
                },
                T = () => {
                  ((s.x = -9999), (s.y = -9999));
                },
                C = () => {
                  (cancelAnimationFrame(g), document.hidden || x());
                };
              return (
                y(),
                window.addEventListener("resize", O),
                d
                  ? b(0, 0)
                  : (window.addEventListener("pointermove", M, { passive: !0 }),
                    document.addEventListener("pointerleave", T),
                    document.addEventListener("visibilitychange", C),
                    x()),
                () => {
                  (cancelAnimationFrame(g),
                    window.removeEventListener("resize", O),
                    window.removeEventListener("pointermove", M),
                    document.removeEventListener("pointerleave", T),
                    document.removeEventListener("visibilitychange", C));
                }
              );
            }, []),
            (0, t.jsx)("canvas", { ref: e, className: "backdrop", "aria-hidden": !0 })
          );
        },
      ]);
    },
  ]);
})();
