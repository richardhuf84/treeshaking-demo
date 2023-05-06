import * as Pe from "react";
import { forwardRef as Tr, useContext as he, createElement as V, Fragment as We, createContext as je } from "react";
import { jsx as Te } from "react/jsx-runtime";
function Ar(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Rr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var kr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rr(this));
    var a = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var s = Ar(a);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), R = "-ms-", Q = "-moz-", v = "-webkit-", ye = "comm", ve = "rule", ge = "decl", $r = "@import", Be = "@keyframes", Ir = "@layer", Mr = Math.abs, re = String.fromCharCode, Dr = Object.assign;
function Lr(e, r) {
  return A(e, 0) ^ 45 ? (((r << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) : 0;
}
function He(e) {
  return e.trim();
}
function Fr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function g(e, r, t) {
  return e.replace(r, t);
}
function se(e, r) {
  return e.indexOf(r);
}
function A(e, r) {
  return e.charCodeAt(r) | 0;
}
function W(e, r, t) {
  return e.slice(r, t);
}
function M(e) {
  return e.length;
}
function be(e) {
  return e.length;
}
function K(e, r) {
  return r.push(e), e;
}
function Vr(e, r) {
  return e.map(r).join("");
}
var te = 1, Y = 1, Ge = 0, k = 0, P = 0, U = "";
function ne(e, r, t, n, a, o, s) {
  return { value: e, root: r, parent: t, type: n, props: a, children: o, line: te, column: Y, length: s, return: "" };
}
function q(e, r) {
  return Dr(ne("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function zr() {
  return P;
}
function Yr() {
  return P = k > 0 ? A(U, --k) : 0, Y--, P === 10 && (Y = 1, te--), P;
}
function $() {
  return P = k < Ge ? A(U, k++) : 0, Y++, P === 10 && (Y = 1, te++), P;
}
function D() {
  return A(U, k);
}
function X() {
  return k;
}
function H(e, r) {
  return W(U, e, r);
}
function j(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Ke(e) {
  return te = Y = 1, Ge = M(U = e), k = 0, [];
}
function Xe(e) {
  return U = "", e;
}
function Z(e) {
  return He(H(k - 1, ce(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ur(e) {
  for (; (P = D()) && P < 33; )
    $();
  return j(e) > 2 || j(P) > 3 ? "" : " ";
}
function qr(e, r) {
  for (; --r && $() && !(P < 48 || P > 102 || P > 57 && P < 65 || P > 70 && P < 97); )
    ;
  return H(e, X() + (r < 6 && D() == 32 && $() == 32));
}
function ce(e) {
  for (; $(); )
    switch (P) {
      case e:
        return k;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ce(P);
        break;
      case 40:
        e === 41 && ce(e);
        break;
      case 92:
        $();
        break;
    }
  return k;
}
function Wr(e, r) {
  for (; $() && e + P !== 47 + 10; )
    if (e + P === 42 + 42 && D() === 47)
      break;
  return "/*" + H(r, k - 1) + "*" + re(e === 47 ? e : $());
}
function jr(e) {
  for (; !j(D()); )
    $();
  return H(e, k);
}
function Br(e) {
  return Xe(J("", null, null, null, [""], e = Ke(e), 0, [0], e));
}
function J(e, r, t, n, a, o, s, c, d) {
  for (var p = 0, u = 0, m = s, O = 0, x = 0, h = 0, l = 1, w = 1, _ = 1, C = 0, y = "", N = a, i = o, T = n, b = y; w; )
    switch (h = C, C = $()) {
      case 40:
        if (h != 108 && A(b, m - 1) == 58) {
          se(b += g(Z(C), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += Z(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Ur(h);
        break;
      case 92:
        b += qr(X() - 1, 7);
        continue;
      case 47:
        switch (D()) {
          case 42:
          case 47:
            K(Hr(Wr($(), X()), r, t), d);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * l:
        c[p++] = M(b) * _;
      case 125 * l:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            w = 0;
          case 59 + u:
            _ == -1 && (b = g(b, /\f/g, "")), x > 0 && M(b) - m && K(x > 32 ? Re(b + ";", n, t, m - 1) : Re(g(b, " ", "") + ";", n, t, m - 2), d);
            break;
          case 59:
            b += ";";
          default:
            if (K(T = Ae(b, r, t, p, u, a, c, y, N = [], i = [], m), o), C === 123)
              if (u === 0)
                J(b, r, T, T, N, o, m, c, i);
              else
                switch (O === 99 && A(b, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    J(e, T, T, n && K(Ae(e, T, T, 0, 0, a, c, y, a, N = [], m), i), a, i, m, c, n ? N : i);
                    break;
                  default:
                    J(b, T, T, T, [""], i, 0, c, i);
                }
        }
        p = u = x = 0, l = _ = 1, y = b = "", m = s;
        break;
      case 58:
        m = 1 + M(b), x = h;
      default:
        if (l < 1) {
          if (C == 123)
            --l;
          else if (C == 125 && l++ == 0 && Yr() == 125)
            continue;
        }
        switch (b += re(C), C * l) {
          case 38:
            _ = u > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            c[p++] = (M(b) - 1) * _, _ = 1;
            break;
          case 64:
            D() === 45 && (b += Z($())), O = D(), u = m = M(y = b += jr(X())), C++;
            break;
          case 45:
            h === 45 && M(b) == 2 && (l = 0);
        }
    }
  return o;
}
function Ae(e, r, t, n, a, o, s, c, d, p, u) {
  for (var m = a - 1, O = a === 0 ? o : [""], x = be(O), h = 0, l = 0, w = 0; h < n; ++h)
    for (var _ = 0, C = W(e, m + 1, m = Mr(l = s[h])), y = e; _ < x; ++_)
      (y = He(l > 0 ? O[_] + " " + C : g(C, /&\f/g, O[_]))) && (d[w++] = y);
  return ne(e, r, t, a === 0 ? ve : c, d, p, u);
}
function Hr(e, r, t) {
  return ne(e, r, t, ye, re(zr()), W(e, 2, -2), 0);
}
function Re(e, r, t, n) {
  return ne(e, r, t, ge, W(e, 0, n), W(e, n + 1, -1), n);
}
function z(e, r) {
  for (var t = "", n = be(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function Gr(e, r, t, n) {
  switch (e.type) {
    case Ir:
      if (e.children.length)
        break;
    case $r:
    case ge:
      return e.return = e.return || e.value;
    case ye:
      return "";
    case Be:
      return e.return = e.value + "{" + z(e.children, n) + "}";
    case ve:
      e.value = e.props.join(",");
  }
  return M(t = z(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Kr(e) {
  var r = be(e);
  return function(t, n, a, o) {
    for (var s = "", c = 0; c < r; c++)
      s += e[c](t, n, a, o) || "";
    return s;
  };
}
function Xr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Ze(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Zr = function(r, t, n) {
  for (var a = 0, o = 0; a = o, o = D(), a === 38 && o === 12 && (t[n] = 1), !j(o); )
    $();
  return H(r, k);
}, Jr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (j(a)) {
      case 0:
        a === 38 && D() === 12 && (t[n] = 1), r[n] += Zr(k - 1, t, n);
        break;
      case 2:
        r[n] += Z(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = D() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += re(a);
    }
  while (a = $());
  return r;
}, Qr = function(r, t) {
  return Xe(Jr(Ke(r), t));
}, ke = /* @__PURE__ */ new WeakMap(), et = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ke.get(n)) && !a) {
      ke.set(r, !0);
      for (var o = [], s = Qr(t, o), c = n.props, d = 0, p = 0; d < s.length; d++)
        for (var u = 0; u < c.length; u++, p++)
          r.props[p] = o[d] ? s[d].replace(/&\f/g, c[u]) : c[u] + " " + s[d];
    }
  }
}, rt = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, tt = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", nt = function(r) {
  return r.type === "comm" && r.children.indexOf(tt) > -1;
}, at = function(r) {
  return function(t, n, a) {
    if (!(t.type !== "rule" || r.compat)) {
      var o = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var s = !!t.parent, c = s ? t.parent.children : (
          // global rule at the root level
          a
        ), d = c.length - 1; d >= 0; d--) {
          var p = c[d];
          if (p.line < t.line)
            break;
          if (p.column < t.column) {
            if (nt(p))
              return;
            break;
          }
        }
        o.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Je = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, ot = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Je(t[n]))
      return !0;
  return !1;
}, $e = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, it = function(r, t, n) {
  Je(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), $e(r)) : ot(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), $e(r)));
};
function Qe(e, r) {
  switch (Lr(e, r)) {
    case 5103:
      return v + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return v + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return v + e + Q + e + R + e + e;
    case 6828:
    case 4268:
      return v + e + R + e + e;
    case 6165:
      return v + e + R + "flex-" + e + e;
    case 5187:
      return v + e + g(e, /(\w+).+(:[^]+)/, v + "box-$1$2" + R + "flex-$1$2") + e;
    case 5443:
      return v + e + R + "flex-item-" + g(e, /flex-|-self/, "") + e;
    case 4675:
      return v + e + R + "flex-line-pack" + g(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return v + e + R + g(e, "shrink", "negative") + e;
    case 5292:
      return v + e + R + g(e, "basis", "preferred-size") + e;
    case 6060:
      return v + "box-" + g(e, "-grow", "") + v + e + R + g(e, "grow", "positive") + e;
    case 4554:
      return v + g(e, /([^-])(transform)/g, "$1" + v + "$2") + e;
    case 6187:
      return g(g(g(e, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, v + "$1$`$1");
    case 4968:
      return g(g(e, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + R + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + v + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, v + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (M(e) - 1 - r > 6)
        switch (A(e, r + 1)) {
          case 109:
            if (A(e, r + 4) !== 45)
              break;
          case 102:
            return g(e, /(.+:)(.+)-([^]+)/, "$1" + v + "$2-$3$1" + Q + (A(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~se(e, "stretch") ? Qe(g(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (A(e, r + 1) !== 115)
        break;
    case 6444:
      switch (A(e, M(e) - 3 - (~se(e, "!important") && 10))) {
        case 107:
          return g(e, ":", ":" + v) + e;
        case 101:
          return g(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + v + (A(e, 14) === 45 ? "inline-" : "") + "box$3$1" + v + "$2$3$1" + R + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (A(e, r + 11)) {
        case 114:
          return v + e + R + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return v + e + R + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return v + e + R + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return v + e + R + e + e;
  }
  return e;
}
var st = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case ge:
        r.return = Qe(r.value, r.length);
        break;
      case Be:
        return z([q(r, {
          value: g(r.value, "@", "@" + v)
        })], a);
      case ve:
        if (r.length)
          return Vr(r.props, function(o) {
            switch (Fr(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return z([q(r, {
                  props: [g(o, /:(read-\w+)/, ":" + Q + "$1")]
                })], a);
              case "::placeholder":
                return z([q(r, {
                  props: [g(o, /:(plac\w+)/, ":" + v + "input-$1")]
                }), q(r, {
                  props: [g(o, /:(plac\w+)/, ":" + Q + "$1")]
                }), q(r, {
                  props: [g(o, /:(plac\w+)/, R + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, ct = [st], ut = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var w = l.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || ct;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var o = {}, s, c = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(l) {
      for (var w = l.getAttribute("data-emotion").split(" "), _ = 1; _ < w.length; _++)
        o[w[_]] = !0;
      c.push(l);
    }
  );
  var d, p = [et, rt];
  process.env.NODE_ENV !== "production" && p.push(at({
    get compat() {
      return h.compat;
    }
  }), it);
  {
    var u, m = [Gr, process.env.NODE_ENV !== "production" ? function(l) {
      l.root || (l.return ? u.insert(l.return) : l.value && l.type !== ye && u.insert(l.value + "{}"));
    } : Xr(function(l) {
      u.insert(l);
    })], O = Kr(p.concat(a, m)), x = function(w) {
      return z(Br(w), O);
    };
    d = function(w, _, C, y) {
      u = C, process.env.NODE_ENV !== "production" && _.map !== void 0 && (u = {
        insert: function(i) {
          C.insert(i + _.map);
        }
      }), x(w ? w + "{" + _.styles + "}" : _.styles), y && (h.inserted[_.name] = !0);
    };
  }
  var h = {
    key: t,
    sheet: new kr({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: d
  };
  return h.sheet.hydrate(c), h;
};
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ue.apply(this, arguments);
}
var fe = { exports: {} }, E = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function ft() {
  if (Ie)
    return E;
  Ie = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function y(i) {
    if (typeof i == "object" && i !== null) {
      var T = i.$$typeof;
      switch (T) {
        case r:
          switch (i = i.type, i) {
            case d:
            case p:
            case n:
            case o:
            case a:
            case m:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case u:
                case h:
                case x:
                case s:
                  return i;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  function N(i) {
    return y(i) === p;
  }
  return E.AsyncMode = d, E.ConcurrentMode = p, E.ContextConsumer = c, E.ContextProvider = s, E.Element = r, E.ForwardRef = u, E.Fragment = n, E.Lazy = h, E.Memo = x, E.Portal = t, E.Profiler = o, E.StrictMode = a, E.Suspense = m, E.isAsyncMode = function(i) {
    return N(i) || y(i) === d;
  }, E.isConcurrentMode = N, E.isContextConsumer = function(i) {
    return y(i) === c;
  }, E.isContextProvider = function(i) {
    return y(i) === s;
  }, E.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === r;
  }, E.isForwardRef = function(i) {
    return y(i) === u;
  }, E.isFragment = function(i) {
    return y(i) === n;
  }, E.isLazy = function(i) {
    return y(i) === h;
  }, E.isMemo = function(i) {
    return y(i) === x;
  }, E.isPortal = function(i) {
    return y(i) === t;
  }, E.isProfiler = function(i) {
    return y(i) === o;
  }, E.isStrictMode = function(i) {
    return y(i) === a;
  }, E.isSuspense = function(i) {
    return y(i) === m;
  }, E.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === p || i === o || i === a || i === m || i === O || typeof i == "object" && i !== null && (i.$$typeof === h || i.$$typeof === x || i.$$typeof === s || i.$$typeof === c || i.$$typeof === u || i.$$typeof === w || i.$$typeof === _ || i.$$typeof === C || i.$$typeof === l);
  }, E.typeOf = y, E;
}
var S = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function lt() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, O = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function y(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === p || f === o || f === a || f === m || f === O || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === x || f.$$typeof === s || f.$$typeof === c || f.$$typeof === u || f.$$typeof === w || f.$$typeof === _ || f.$$typeof === C || f.$$typeof === l);
    }
    function N(f) {
      if (typeof f == "object" && f !== null) {
        var oe = f.$$typeof;
        switch (oe) {
          case r:
            var G = f.type;
            switch (G) {
              case d:
              case p:
              case n:
              case o:
              case a:
              case m:
                return G;
              default:
                var Oe = G && G.$$typeof;
                switch (Oe) {
                  case c:
                  case u:
                  case h:
                  case x:
                  case s:
                    return Oe;
                  default:
                    return oe;
                }
            }
          case t:
            return oe;
        }
      }
    }
    var i = d, T = p, b = c, ae = s, L = r, F = u, fr = n, lr = h, dr = x, pr = t, mr = o, hr = a, yr = m, Ce = !1;
    function vr(f) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Ne(f) || N(f) === d;
    }
    function Ne(f) {
      return N(f) === p;
    }
    function gr(f) {
      return N(f) === c;
    }
    function br(f) {
      return N(f) === s;
    }
    function Er(f) {
      return typeof f == "object" && f !== null && f.$$typeof === r;
    }
    function Sr(f) {
      return N(f) === u;
    }
    function _r(f) {
      return N(f) === n;
    }
    function xr(f) {
      return N(f) === h;
    }
    function wr(f) {
      return N(f) === x;
    }
    function Cr(f) {
      return N(f) === t;
    }
    function Nr(f) {
      return N(f) === o;
    }
    function Or(f) {
      return N(f) === a;
    }
    function Pr(f) {
      return N(f) === m;
    }
    S.AsyncMode = i, S.ConcurrentMode = T, S.ContextConsumer = b, S.ContextProvider = ae, S.Element = L, S.ForwardRef = F, S.Fragment = fr, S.Lazy = lr, S.Memo = dr, S.Portal = pr, S.Profiler = mr, S.StrictMode = hr, S.Suspense = yr, S.isAsyncMode = vr, S.isConcurrentMode = Ne, S.isContextConsumer = gr, S.isContextProvider = br, S.isElement = Er, S.isForwardRef = Sr, S.isFragment = _r, S.isLazy = xr, S.isMemo = wr, S.isPortal = Cr, S.isProfiler = Nr, S.isStrictMode = Or, S.isSuspense = Pr, S.isValidElementType = y, S.typeOf = N;
  }()), S;
}
process.env.NODE_ENV === "production" ? fe.exports = ft() : fe.exports = lt();
var dt = fe.exports, er = dt, pt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, rr = {};
rr[er.ForwardRef] = pt;
rr[er.Memo] = mt;
var ht = !0;
function tr(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : n += a + " ";
  }), n;
}
var Ee = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ht === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, nr = function(r, t, n) {
  Ee(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + a : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function yt(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var vt = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, De = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, gt = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", bt = /[A-Z]|^ms/g, ar = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Se = function(r) {
  return r.charCodeAt(1) === 45;
}, Le = function(r) {
  return r != null && typeof r != "boolean";
}, ie = /* @__PURE__ */ Ze(function(e) {
  return Se(e) ? e : e.replace(bt, "-$&").toLowerCase();
}), ee = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ar, function(n, a, o) {
          return I = {
            name: a,
            styles: o,
            next: I
          }, a;
        });
  }
  return vt[r] !== 1 && !Se(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Et = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, St = ["normal", "none", "initial", "inherit", "unset"], _t = ee, xt = /^-ms-/, wt = /-(.)/g, Fe = {};
  ee = function(r, t) {
    if (r === "content" && (typeof t != "string" || St.indexOf(t) === -1 && !Et.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = _t(r, t);
    return n !== "" && !Se(r) && r.indexOf("-") !== -1 && Fe[r] === void 0 && (Fe[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(xt, "ms-").replace(wt, function(a, o) {
      return o.toUpperCase();
    }) + "?")), n;
  };
}
var or = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function B(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(or);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return I = {
          name: t.name,
          styles: t.styles,
          next: I
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            I = {
              name: n.name,
              styles: n.styles,
              next: I
            }, n = n.next;
        var a = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (a += t.map), a;
      }
      return Ct(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var o = I, s = t(e);
        return I = o, B(e, r, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], d = t.replace(ar, function(u, m, O) {
          var x = "animation" + c.length;
          return c.push("const " + x + " = keyframes`" + O.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + x + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + d + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + d + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var p = r[t];
  return p !== void 0 ? p : t;
}
function Ct(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += B(e, r, t[a]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object")
        r != null && r[s] !== void 0 ? n += o + "{" + r[s] + "}" : Le(s) && (n += ie(o) + ":" + ee(o, s) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(or);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            Le(s[c]) && (n += ie(o) + ":" + ee(o, s[c]) + ";");
        else {
          var d = B(e, r, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += ie(o) + ":" + d + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(gt), n += o + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Ve = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ir;
process.env.NODE_ENV !== "production" && (ir = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var I, le = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var a = !0, o = "";
  I = void 0;
  var s = r[0];
  s == null || s.raw === void 0 ? (a = !1, o += B(n, t, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(De), o += s[0]);
  for (var c = 1; c < r.length; c++)
    o += B(n, t, r[c]), a && (process.env.NODE_ENV !== "production" && s[c] === void 0 && console.error(De), o += s[c]);
  var d;
  process.env.NODE_ENV !== "production" && (o = o.replace(ir, function(O) {
    return d = O, "";
  })), Ve.lastIndex = 0;
  for (var p = "", u; (u = Ve.exec(o)) !== null; )
    p += "-" + // $FlowFixMe we know it's not null
    u[1];
  var m = yt(o) + p;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: o,
    map: d,
    next: I,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: o,
    next: I
  };
}, Nt = function(r) {
  return r();
}, Ot = Pe["useInsertionEffect"] ? Pe["useInsertionEffect"] : !1, sr = Ot || Nt, _e = {}.hasOwnProperty, xe = /* @__PURE__ */ je(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ut({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (xe.displayName = "EmotionCacheContext");
xe.Provider;
var cr = function(r) {
  return /* @__PURE__ */ Tr(function(t, n) {
    var a = he(xe);
    return r(t, a, n);
  });
}, we = /* @__PURE__ */ je({});
process.env.NODE_ENV !== "production" && (we.displayName = "EmotionThemeContext");
var ze = function(r) {
  var t = r.split(".");
  return t[t.length - 1];
}, Pt = function(r) {
  var t = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);
  if (t || (t = /^([A-Za-z0-9$.]+)@/.exec(r), t))
    return ze(t[1]);
}, Tt = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), At = function(r) {
  return r.replace(/\$/g, "-");
}, Rt = function(r) {
  if (r)
    for (var t = r.split(`
`), n = 0; n < t.length; n++) {
      var a = Pt(t[n]);
      if (a) {
        if (Tt.has(a))
          break;
        if (/^[A-Z]/.test(a))
          return At(a);
      }
    }
}, de = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", pe = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", kt = function(r, t) {
  if (process.env.NODE_ENV !== "production" && typeof t.css == "string" && // check if there is a css declaration
  t.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + t.css + "`");
  var n = {};
  for (var a in t)
    _e.call(t, a) && (n[a] = t[a]);
  if (n[de] = r, process.env.NODE_ENV !== "production" && t.css && (typeof t.css != "object" || typeof t.css.name != "string" || t.css.name.indexOf("-") === -1)) {
    var o = Rt(new Error().stack);
    o && (n[pe] = o);
  }
  return n;
}, $t = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Ee(t, n, a), sr(function() {
    return nr(t, n, a);
  }), null;
}, ur = /* @__PURE__ */ cr(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e[de], o = [n], s = "";
  typeof e.className == "string" ? s = tr(r.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var c = le(o, void 0, he(we));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var d = e[pe];
    d && (c = le([c, "label:" + d + ";"]));
  }
  s += r.key + "-" + c.name;
  var p = {};
  for (var u in e)
    _e.call(e, u) && u !== "css" && u !== de && (process.env.NODE_ENV === "production" || u !== pe) && (p[u] = e[u]);
  return p.ref = t, p.className = s, /* @__PURE__ */ V(We, null, /* @__PURE__ */ V($t, {
    cache: r,
    serialized: c,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ V(a, p));
});
process.env.NODE_ENV !== "production" && (ur.displayName = "EmotionCssPropInternal");
function It(e, r, t) {
  return _e.call(r, "css") ? Te(ur, kt(e, r), t) : Te(e, r, t);
}
var Mt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Dt = /* @__PURE__ */ Ze(
  function(e) {
    return Mt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Lt = Dt, Ft = function(r) {
  return r !== "theme";
}, Ye = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Lt : Ft;
}, Ue = function(r, t, n) {
  var a;
  if (t) {
    var o = t.shouldForwardProp;
    a = r.__emotion_forwardProp && o ? function(s) {
      return r.__emotion_forwardProp(s) && o(s);
    } : o;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, qe = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Vt = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Ee(t, n, a), sr(function() {
    return nr(t, n, a);
  }), null;
}, zt = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, o, s;
  t !== void 0 && (o = t.label, s = t.target);
  var c = Ue(r, t, n), d = c || Ye(a), p = !d("as");
  return function() {
    var u = arguments, m = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (o !== void 0 && m.push("label:" + o + ";"), u[0] == null || u[0].raw === void 0)
      m.push.apply(m, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(qe), m.push(u[0][0]);
      for (var O = u.length, x = 1; x < O; x++)
        process.env.NODE_ENV !== "production" && u[0][x] === void 0 && console.error(qe), m.push(u[x], u[0][x]);
    }
    var h = cr(function(l, w, _) {
      var C = p && l.as || a, y = "", N = [], i = l;
      if (l.theme == null) {
        i = {};
        for (var T in l)
          i[T] = l[T];
        i.theme = he(we);
      }
      typeof l.className == "string" ? y = tr(w.registered, N, l.className) : l.className != null && (y = l.className + " ");
      var b = le(m.concat(N), w.registered, i);
      y += w.key + "-" + b.name, s !== void 0 && (y += " " + s);
      var ae = p && c === void 0 ? Ye(C) : d, L = {};
      for (var F in l)
        p && F === "as" || // $FlowFixMe
        ae(F) && (L[F] = l[F]);
      return L.className = y, L.ref = _, /* @__PURE__ */ V(We, null, /* @__PURE__ */ V(Vt, {
        cache: w,
        serialized: b,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ V(C, L));
    });
    return h.displayName = o !== void 0 ? o : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", h.defaultProps = r.defaultProps, h.__emotion_real = h, h.__emotion_base = a, h.__emotion_styles = m, h.__emotion_forwardProp = c, Object.defineProperty(h, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), h.withComponent = function(l, w) {
      return e(l, ue({}, t, w, {
        shouldForwardProp: Ue(h, w, !0)
      })).apply(void 0, m);
    }, h;
  };
}, Yt = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], me = zt.bind();
Yt.forEach(function(e) {
  me[e] = me(e);
});
const Ut = me.button(({ color: e }) => ({
  backgroundColor: e,
  color: "white",
  border: 0
}));
function jt({ children: e, color: r }) {
  return /* @__PURE__ */ It(Ut, { color: r, children: e });
}
export {
  jt as TsButton
};
