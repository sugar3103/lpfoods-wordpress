!(function(l) {
  function t(t) {
    for (
      var e, n, a = t[0], i = t[1], r = t[2], o = 0, s = [];
      o < a.length;
      o++
    )
      (n = a[o]), u[n] && s.push(u[n][0]), (u[n] = 0);
    for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (l[e] = i[e]);
    for (f && f(t); s.length; ) s.shift()();
    return d.push.apply(d, r || []), c();
  }
  function c() {
    for (var t, e = 0; e < d.length; e++) {
      for (var n = d[e], a = !0, i = 1; i < n.length; i++) {
        var r = n[i];
        0 !== u[r] && (a = !1);
      }
      a && (d.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var n = {},
    u = { 0: 0 },
    d = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return l[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
  }
  (o.m = l),
    (o.c = n),
    (o.d = function(t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          o.d(
            n,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return n;
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/app/themes/cs-lpfoods-com-sg/public/");
  var e = (window.webpackJsonp = window.webpackJsonp || []),
    a = e.push.bind(e);
  (e.push = t), (e = e.slice());
  for (var i = 0; i < e.length; i++) t(e[i]);
  var f = a;
  d.push([62, 1]), c();
})([
  ,
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "SliderDefault", {
        enumerable: !0,
        get: function() {
          return a.default;
        }
      }),
      Object.defineProperty(e, "ButtonPlayYoutube", {
        enumerable: !0,
        get: function() {
          return i.default;
        }
      });
    var a = r(n(95)),
      i = r(n(98));
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(4),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "NavDefault",
      props: {
        navToggleable: { type: String, default: "lg", require: !0 },
        navLogos: { type: String, default: "", require: !0 },
        navItems: {
          type: Array,
          default: function() {
            return [];
          },
          require: !0
        },
        navAdditionalAnchor: {
          type: Array,
          default: function() {
            return [];
          }
        }
      },
      data: function() {
        return {
          isScrolled: !1,
          closed: !0,
          navTheme: void 0,
          lastScrollTop: 0
        };
      },
      computed: {
        breakpoint: function() {
          var t;
          switch (this.navToggleable) {
            case "md":
              t = 768;
              break;
            case "lg":
              t = 992;
              break;
            case "xl":
              t = 1200;
          }
          return t;
        },
        activeIndex: function() {
          var t = this.navItems.find(function(t) {
            return !0 === t.active;
          });
          return this.navItems.indexOf(t);
        }
      },
      created: function() {
        this.navTheme = this.initialLogo;
      },
      mounted: function() {
        var t = this;
        this.toggleScrolled(),
          window.addEventListener("scroll", this.toggleScrolled),
          window.addEventListener(
            "resize",
            function() {
              window.innerWidth >= t.breakpoint &&
                t.$refs.menu.classList.contains("open") &&
                (t.$refs.menu.classList.remove("open"),
                document.body.classList.remove("nav-open"));
            },
            !1
          );
      },
      methods: {
        toggleScrolled: function() {
          var t = window.pageYOffset || document.documentElement.scrollTop;
          t > this.lastScrollTop
            ? 48 <= t && (this.isScrolled = !0)
            : (this.isScrolled = !1),
            (this.lastScrollTop = t <= 0 ? 0 : t);
        },
        toggleMenu: function() {
          window.innerWidth < this.breakpoint &&
            (this.$refs.menu.classList.contains("open")
              ? (this.$refs.menu.classList.remove("open"),
                document.body.classList.remove("nav-open"))
              : (this.$refs.menu.classList.add("open"),
                document.body.classList.add("nav-open")));
        },
        changeLanguage: function(e) {
          [].forEach.call(this.navLanguage, function(t) {
            t.code === e && (window.location.href = t.link);
          });
        },
        navSelectHandler: function(t) {
          var e = new URL(t);
          "" !== e.hash &&
          e.pathname.split("/")[1] === window.location.pathname.split("/")[1]
            ? this.$scrollTo(e.hash)
            : window.location.replace("".concat(t));
        },
        anchorHandler: function(t) {
          document.getElementById(t.split("#")[1])
            ? this.$scrollTo(t)
            : window.location.replace(
                "".concat(window.location.origin).concat(t)
              );
        }
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(7),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "HeroDefault",
      props: {
        heroBackground: { type: String, default: "", require: !0 },
        heroBackgroundMobile: { type: String, default: "", require: !0 },
        heroCaption: { type: String, default: "", require: !0 },
        heroHeading: { type: String, default: "", require: !0 },
        heroLead: { type: String, default: "" },
        heroButtons: {
          type: Array,
          default: function() {
            return [];
          }
        },
        heroScroll: { type: String, default: "", require: !0 },
        short: { type: Boolean, default: !1 }
      },
      mounted: function() {
        window.innerWidth < 768 &&
          (this.$refs.heroWrapper.style.backgroundImage = this.heroBackgroundMobile);
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(10),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "HeroSplit",
      components: { ButtonPlayYoutube: n(2).ButtonPlayYoutube },
      props: {
        heroHeading: { type: String, default: "", required: !0 },
        heroLead: { type: String, default: "" },
        heroButtons: {
          type: Array,
          default: function() {
            return [];
          }
        },
        heroStaticVideo: { type: String, default: "" },
        heroVideoId: { type: String, default: "" }
      }
    };
    e.default = a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(12),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = n(116),
      i = {
        name: "SliderDefault",
        props: {
          sliderId: { type: String, default: "" },
          sliderItemsCount: { type: Number, default: 0 },
          perSlide: { type: Number, default: 1 },
          gutter: { type: Number, default: 30 },
          fixedWidth: { type: Number, default: void 0 },
          responsive: { type: Object, default: function() {} },
          hasControls: { type: Boolean, default: !1 },
          hasNav: { type: Boolean, default: !1 },
          hasPagination: { type: Boolean, default: !1 },
          notWait: { type: Boolean, default: !1 },
          overflowVisible: { type: Boolean, default: !1 }
        },
        data: function() {
          return { activeIndex: "01", slider: void 0 };
        },
        computed: {
          options: function() {
            return {
              container: "#".concat(this.sliderId, " .tns-slider"),
              items: this.perSlide,
              gutter: this.gutter,
              fixedWidth: this.fixedWidth || !1,
              mouseDrag: !0,
              rewind: !0,
              controls: this.hasControls,
              controlsText: ["", ""],
              controlsContainer: "#".concat(this.sliderId, " > .tns-controls"),
              nav: this.hasNav,
              navContainer: "#".concat(this.sliderId, " > .tns-nav"),
              responsive: this.responsive
            };
          },
          totalCount: function() {
            return this.sliderItemsCount < 10
              ? "0".concat(this.sliderItemsCount)
              : this.sliderItemsCount;
          }
        },
        mounted: function() {
          var t = this;
          this.notWait
            ? ((this.slider = (0, a.tns)(this.options)),
              this.slider.events.on("indexChanged", this.getIndex),
              this.getIndex())
            : setTimeout(function() {
                (t.slider = (0, a.tns)(t.options)),
                  t.slider.events.on("indexChanged", t.getIndex),
                  t.getIndex();
              }, 1e3);
        },
        methods: {
          getIndex: function() {
            var t = this.slider.getInfo().index + this.slider.getInfo().items;
            this.activeIndex = t < 10 ? "0".concat(t) : t;
          }
        }
      };
    e.default = i;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(14),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "ButtonPlayYoutube",
      props: {
        type: { type: String, default: "icon" },
        title: { type: String, default: "" },
        videoId: { type: String, default: "" }
      },
      data: function() {
        return {
          modalVideo: !1,
          popupPlayer: void 0,
          popupId: "popup-video-".concat(this._uid)
        };
      },
      mounted: function() {
        var t = this;
        setTimeout(function() {
          t.popupPlayer = new YT.Player(t.popupId, { videoId: t.videoId });
        }, 1e3);
      },
      methods: {
        handleModalVideo: function(t) {
          !0 === t
            ? this.popupPlayer.playVideo()
            : this.popupPlayer.pauseVideo();
        }
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(18),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "HeroDefault",
      props: {
        heroSliderImages: {
          type: Array,
          default: function() {
            return [];
          },
          require: !0
        },
        heroHeading: { type: String, default: "", require: !0 },
        heroLead: { type: String, default: "", require: !0 },
        heroButtons: {
          type: Array,
          default: function() {
            return [];
          }
        }
      },
      data: function() {
        return {
          sliderOptions: {
            items: 1,
            mouseDrag: !0,
            rewind: !0,
            controls: !1,
            nav: !0,
            navContainer: "#hero-slider .tns-nav"
          }
        };
      },
      mounted: function() {
        window.innerWidth < 768 &&
          (this.$refs.heroWrapper.style.backgroundImage = this.heroBackgroundMobile);
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(21),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "FormContact",
      props: {
        formAction: { type: String, default: "", required: !0 },
        formItems: {
          type: Array,
          default: function() {
            return [];
          },
          required: !0
        },
        formToken: { type: String, default: "", required: !0 },
        formNotification: { type: Object, default: function() {} }
      },
      data: function() {
        return { formContact: { token: this.formToken }, submitClicked: !1 };
      },
      computed: {
        ruleValidate: function() {
          var e = {};
          return (
            this.formItems.forEach(function(t) {
              "submit" !== t.value && (e["".concat(t.value)] = t.validation);
            }),
            e
          );
        }
      },
      methods: {
        checkDigit: function(t) {
          var e = t.which || t.keyCode;
          -1 !== [8, 9, 27, 13, 40, 41, 43].indexOf(e) ||
            (65 === e && (!0 === t.ctrlKey || !0 === t.metaKey)) ||
            (35 <= e && e <= 40) ||
            ((e < 48 || 57 < e) && t.preventDefault());
        },
        onSubmit: function() {
          var e = this,
            n = this;
          this.$refs.form.validate(function(t) {
            t
              ? n.$http
                  .post(n.formAction, n.formContact)
                  .then(function(t) {
                    "success" === t.data
                      ? (n.$emit("submit-success"),
                        n.$refs.formSubmitNotify.classList.add("shown"),
                        (n.$refs.form.style.opacity = 0),
                        setTimeout(function() {
                          n.$refs.formSubmitNotify.classList.add("visible");
                        }, 100))
                      : n.$Message.error(t.data);
                  })
                  .catch(function(t) {
                    n.$Message.error(n.footerPlaceholder.error_submission);
                  })
              : e.$Message.error("Fail");
          });
        }
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(24),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    var a;
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var i = {
      name: "FormNewsletter",
      components: {
        VueRecaptcha: ((a = n(106)) && a.__esModule ? a : { default: a })
          .default
      },
      props: {
        formAction: { type: String, default: "", require: !0 },
        formCsrf: { type: String, default: "", require: !0 },
        formPlaceholder: { type: Object, default: function() {}, require: !0 }
      },
      data: function() {
        return {
          formNewsletter: { email: "", recaptchaToken: "" },
          ruleValidate: {
            email: [
              {
                required: !0,
                message: this.formPlaceholder.email_empty_error,
                trigger: "blur"
              },
              {
                type: "email",
                message: this.formPlaceholder.email_format_error,
                trigger: "blur"
              }
            ]
          }
        };
      },
      methods: {
        onSubmit: function() {
          var e = this;
          this.$refs.form.validate(function(t) {
            t ? e.$refs.recaptcha.execute() : e.$Message.error("Fail!");
          });
        },
        onCaptchaVerified: function(t) {
          var e = this;
          (e.formNewsletter.recaptchaToken = t),
            e.$refs.recaptcha.reset(),
            e.$http
              .post(e.formAction, e.formNewsletter)
              .then(function(t) {
                console.log(t);
              })
              .catch(function(t) {
                console.log(t);
              });
        },
        onCaptchaExpired: function() {
          this.$refs.recaptcha.reset();
        }
      }
    };
    e.default = i;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(26),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "HeroHome",
      components: { ButtonPlayYoutube: n(2).ButtonPlayYoutube },
      props: {
        heroHeading: { type: String, default: "" },
        heroLead: { type: String, default: "" },
        heroCtas: {
          type: Array,
          default: function() {
            return [];
          }
        },
        heroVideoSrc: { type: String, default: "" },
        heroVideoId: { type: String, default: "" },
        heroVideoPoster: { type: Object, default: function() {} }
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(29),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "ProductsSlider",
      components: { SliderDefault: n(2).SliderDefault },
      props: {
        items: {
          type: Array,
          default: function() {
            return [];
          }
        }
      },
      data: function() {
        return {
          sliderId: "slider-".concat(this._uid),
          activeFilterIndex: 0,
          firstSliderNotWait: !1
        };
      }
    };
    e.default = a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(31),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "Solutions",
      props: {
        sectionHeading: { type: String, default: "" },
        sectionLead: { type: String, default: "" },
        solutionItems: {
          type: Array,
          default: function() {
            return [];
          }
        }
      },
      data: function() {
        return { activeIndex: 0 };
      }
    };
    e.default = a;
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(34),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "SectionContact",
      components: { FormContact: n(61).FormContact },
      props: {
        sectionTitle: { type: String, default: "" },
        contactItems: {
          type: Array,
          default: function() {
            return [];
          }
        },
        contactForm: { type: Object, default: function() {} }
      },
      data: function() {
        return { activeContact: 0 };
      }
    };
    e.default = a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(36),
      i = n.n(a);
    for (var r in a)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return a[t];
          });
        })(r);
    e.default = i.a;
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
    var a = {
      name: "HistorySlider",
      components: { SliderDefault: n(2).SliderDefault },
      props: {
        items: {
          type: Array,
          default: function() {
            return [];
          }
        }
      },
      data: function() {
        return { sliderId: "slider-".concat(this._uid) };
      }
    };
    e.default = a;
  },
  ,
  ,
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "div",
        {
          ref: "navbar",
          staticClass: "navbar to-animate-wrapper",
          class: n.isScrolled ? "scrolled" : ""
        },
        [
          a(
            "div",
            {
              staticClass:
                "row no-gutters justify-content-center align-items-center navbar-brand-wrapper"
            },
            [
              a(
                "a",
                { staticClass: "navbar-brand py-2", attrs: { href: "/" } },
                [a("img", { attrs: { src: n.navLogos, alt: "logo" } })]
              ),
              n._v(" "),
              a(
                "button",
                {
                  staticClass: "navbar-toggler",
                  class: "d-" + n.navToggleable + "-none",
                  attrs: { type: "button" },
                  on: { click: n.toggleMenu }
                },
                [a("span")]
              )
            ]
          ),
          n._v(" "),
          a(
            "div",
            {
              staticClass:
                "row no-gutters justify-content-center navbar-nav-wrapper d-none",
              class: "d-" + n.navToggleable + "-flex"
            },
            [
              a(
                "i-menu",
                {
                  ref: "navbarNav",
                  staticClass:
                    "navbar-nav d-flex w-100 justify-content-between",
                  attrs: {
                    "active-name": n.activeIndex,
                    mode: "horizontal",
                    theme: "light"
                  },
                  on: { "on-select": n.toggleMenu }
                },
                [
                  n._l(n.navItems, function(e, t) {
                    return a(
                      "menu-item",
                      {
                        key: "nav-" + t,
                        staticClass: "nav-item",
                        attrs: {
                          name: t,
                          "data-anchor": "#" + e.url.split("#")[1]
                        }
                      },
                      [
                        a(
                          "a",
                          {
                            class: { "text-dark": "dark" === n.navTheme },
                            attrs: { href: e.url },
                            on: {
                              click: function(t) {
                                return (
                                  t.preventDefault(), n.navSelectHandler(e.url)
                                );
                              }
                            }
                          },
                          [n._v("\n          " + n._s(e.title) + "\n        ")]
                        )
                      ]
                    );
                  }),
                  n._v(" "),
                  n._l(n.navAdditionalAnchor, function(e, t) {
                    return a("li", { key: "cta-" + t }, [
                      "anchor" === e.type
                        ? a(
                            "a",
                            {
                              class:
                                "btn--text d-none d-" +
                                n.navToggleable +
                                "-inline-flex",
                              attrs: { href: "" },
                              on: {
                                click: function(t) {
                                  return (
                                    t.preventDefault(),
                                    n.navSelectHandler(e.url)
                                  );
                                }
                              }
                            },
                            [
                              n._v("\n          " + n._s(e.title)),
                              a("i", { staticClass: "fas fa-angle-right ml-2" })
                            ]
                          )
                        : a(
                            "a",
                            {
                              class:
                                "btn btn--text d-none d-" +
                                n.navToggleable +
                                "-inline-flex",
                              attrs: {
                                href:
                                  "external" === e.type || "post" === e.type
                                    ? e.url
                                    : "",
                                target: "external" === e.type && "_blank"
                              }
                            },
                            [
                              n._v(n._s(e.title)),
                              a("i", { staticClass: "fas fa-angle-right ml-2" })
                            ]
                          )
                    ]);
                  })
                ],
                2
              )
            ],
            1
          ),
          n._v(" "),
          a(
            "div",
            {
              ref: "menu",
              staticClass: "navbar-offcanvas",
              class: "d-" + n.navToggleable + "-none"
            },
            [
              a(
                "i-menu",
                {
                  ref: "navbarNavMobile",
                  staticClass: "navbar-nav",
                  attrs: { "active-name": n.activeIndex, theme: "light" },
                  on: { "on-select": n.toggleMenu }
                },
                [
                  n._l(n.navItems, function(e, t) {
                    return a(
                      "menu-item",
                      {
                        key: "nav-mobile-" + t,
                        staticClass: "nav-item",
                        attrs: { name: t }
                      },
                      [
                        a(
                          "a",
                          {
                            attrs: { href: e.url },
                            on: {
                              click: function(t) {
                                return (
                                  t.preventDefault(), n.navSelectHandler(e.url)
                                );
                              }
                            }
                          },
                          [n._v("\n          " + n._s(e.title) + "\n        ")]
                        )
                      ]
                    );
                  }),
                  n._v(" "),
                  n._l(n.navAdditionalAnchor, function(e, t) {
                    return a("li", { key: "cta-" + t }, [
                      "anchor" === e.type
                        ? a(
                            "a",
                            {
                              staticClass: "btn--text",
                              attrs: { href: "" },
                              on: {
                                click: function(t) {
                                  return (
                                    t.preventDefault(),
                                    n.navSelectHandler(e.url)
                                  );
                                }
                              }
                            },
                            [
                              n._v(
                                "\n          " + n._s(e.title) + "\n          "
                              ),
                              a("i", { staticClass: "fas fa-angle-right ml-2" })
                            ]
                          )
                        : a(
                            "a",
                            {
                              staticClass: "btn--text",
                              attrs: {
                                href:
                                  "external" === e.type || "post" === e.type
                                    ? e.url
                                    : "",
                                target: "external" === e.type && "_blank"
                              }
                            },
                            [n._v(n._s(e.title))]
                          )
                    ]);
                  })
                ],
                2
              ),
              n._v(" "),
              a("img", {
                attrs: {
                  src:
                    "/app/themes/cs-lpfoods-com-sg/public/img/objects/decor-bottom-navbar.svg",
                  alt: "decor",
                  id: "decor-navbar"
                }
              })
            ],
            1
          )
        ]
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "section",
        {
          ref: "heroWrapper",
          staticClass: "hero hero--full",
          class: { short: n.short },
          style: { backgroundImage: "url(" + n.heroBackground + ")" }
        },
        [
          a("div", { staticClass: "cs-container p-r to-animate-wrapper" }, [
            a(
              "h1",
              {
                staticClass: "hero__heading d-flex flex-column text-white mb-5"
              },
              [
                a("span", { staticClass: "caption to-animate animate-up" }, [
                  n._v(n._s(n.heroCaption))
                ]),
                n._v(" "),
                a("span", {
                  staticClass: "to-animate animate-up",
                  domProps: { innerHTML: n._s(n.heroHeading) }
                }),
                n._v(" "),
                n.heroLead
                  ? a("p", { staticClass: "to-animate animate-up mt-4" }, [
                      n._v("\n        " + n._s(n.heroLead) + "\n      ")
                    ])
                  : n._e()
              ]
            ),
            n._v(" "),
            a(
              "div",
              { staticClass: "btn-wrapper" },
              n._l(n.heroButtons, function(t, e) {
                return a("div", { key: e }, [
                  "anchor" === t.type
                    ? a(
                        "a",
                        {
                          directives: [
                            {
                              name: "scroll-to",
                              rawName: "v-scroll-to",
                              value: { el: t.url },
                              expression: "{el: item.url}"
                            }
                          ],
                          staticClass: "btn",
                          class: 0 === e ? "btn--default" : "btn--alt"
                        },
                        [n._v("\n          " + n._s(t.title) + "\n        ")]
                      )
                    : "none" !== t.type
                    ? a(
                        "a",
                        {
                          staticClass: "btn",
                          class: 0 === e ? "btn--default" : "btn--alt",
                          attrs: {
                            href:
                              "external" === t.type || "post" === t.type
                                ? t.url
                                : "",
                            target: "external" === t.type && "_blank"
                          }
                        },
                        [n._v(n._s(t.title))]
                      )
                    : n._e()
                ]);
              }),
              0
            )
          ])
        ]
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a("section", { staticClass: "hero hero--split" }, [
        a("img", {
          staticClass: "video-curve",
          attrs: {
            src: "/app/themes/cs-lpfoods-com-sg/img/objects/video-svg-bg.svg",
            alt: "video"
          }
        }),
        n._v(" "),
        a(
          "div",
          {
            staticClass:
              "cs-container row no-gutters justify-content-center pr-md-0"
          },
          [
            a("div", { staticClass: "col-md-6" }, [
              a(
                "div",
                {
                  staticClass:
                    "content-wrapper to-animate-wrapper pb-md-0 pb-4 w-100"
                },
                [
                  a(
                    "h1",
                    {
                      staticClass:
                        "hero__heading theme-heading mb-3 mx-sm-0 mx-auto"
                    },
                    [
                      a("span", {
                        staticClass: "to-animate animate-up",
                        domProps: {
                          innerHTML: n._s(
                            n.heroHeading + "<span class='fullstop'></span>"
                          )
                        }
                      })
                    ]
                  ),
                  n._v(" "),
                  a("p", { staticClass: "hero__lead to-animate animate-in" }, [
                    n._v("\n          " + n._s(n.heroLead) + "\n        ")
                  ]),
                  n._v(" "),
                  a(
                    "div",
                    { staticClass: "btn-wrapper" },
                    n._l(n.heroButtons, function(t, e) {
                      return a(
                        "a",
                        {
                          directives: [
                            {
                              name: "scroll-to",
                              rawName: "v-scroll-to",
                              value: "anchor" === t.type && { el: t.url },
                              expression:
                                "item.type === 'anchor' ? {el: item.url} : false"
                            }
                          ],
                          key: e,
                          staticClass: "btn with-icon",
                          class: 0 === e ? "btn--default" : "btn--alt",
                          attrs: {
                            href:
                              "external" === t.type || "post" === t.type
                                ? t.url
                                : "",
                            target: "external" === t.type && "_blank"
                          }
                        },
                        [
                          n._v(
                            "\n            " + n._s(t.title) + "\n            "
                          ),
                          a(
                            "Icon",
                            0 === e
                              ? {
                                  attrs: { size: 24, type: "ios-arrow-forward" }
                                }
                              : { attrs: { size: 24, type: "md-add" } }
                          )
                        ],
                        1
                      );
                    }),
                    0
                  )
                ]
              )
            ]),
            n._v(" "),
            a("div", { staticClass: "col-md-6" }, [
              a(
                "div",
                { staticClass: "video-wrapper" },
                [
                  a("img", {
                    staticClass: "bean-shape",
                    attrs: {
                      src:
                        "/app/themes/cs-lpfoods-com-sg/img/objects/hero-video-cover.png",
                      alt: "video"
                    }
                  }),
                  n._v(" "),
                  a("lazy-video-as-g-i-f", {
                    attrs: { src: n.heroStaticVideo }
                  }),
                  n._v(" "),
                  a("button-play-youtube", {
                    attrs: { "video-id": n.heroVideoId }
                  })
                ],
                1
              )
            ])
          ]
        ),
        n._v(" "),
        a("img", {
          staticClass: "hero-curve",
          attrs: {
            src: "/app/themes/cs-lpfoods-com-sg/img/objects/hero-bg-curve.svg",
            alt: "bg"
          }
        })
      ]);
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n(
        "div",
        {
          class: [
            "slider-wrapper w-100",
            { "slider-overflow-visible": t.overflowVisible }
          ],
          attrs: { id: t.sliderId }
        },
        [
          n(
            "div",
            { ref: "slider", staticClass: "tns-slider" },
            [t._t("content")],
            2
          ),
          t._v(" "),
          t.hasControls
            ? n("div", { staticClass: "tns-controls" }, [
                t._m(0),
                t._v(" "),
                t._m(1)
              ])
            : t._e(),
          t._v(" "),
          t.hasNav
            ? n(
                "ul",
                { staticClass: "tns-nav" },
                t._l(t.sliderItemsCount, function(t, e) {
                  return n("li", { key: "nav-" + e });
                }),
                0
              )
            : t._e(),
          t._v(" "),
          t.hasPagination
            ? n("div", { staticClass: "tns-pagination" }, [
                n("span", { staticClass: "current" }, [
                  t._v(t._s(t.activeIndex))
                ]),
                t._v("\n    /\n    "),
                n("span", { staticClass: "total" }, [t._v(t._s(t.totalCount))])
              ])
            : t._e()
        ]
      );
    }
    var i = [
      function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("button", { staticClass: "btn--slider prev" }, [
          e("i", { staticClass: "fal fa-long-arrow-left" })
        ]);
      },
      function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("button", { staticClass: "btn--slider next" }, [
          e("i", { staticClass: "fal fa-long-arrow-right" })
        ]);
      }
    ];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t;
      return n(
        "div",
        [
          "text" === e.type
            ? n(
                "a",
                {
                  staticClass: "btn btn--default",
                  attrs: { href: "" },
                  on: {
                    click: function(t) {
                      t.preventDefault(), (e.modalVideo = !0);
                    }
                  }
                },
                [
                  e._v(e._s(e.title) + " "),
                  n("i", { staticClass: "far fa-angle-right ml-auto" })
                ]
              )
            : n("i-button", {
                staticClass: "btn--play",
                attrs: { shape: "circle", icon: "ios-play" },
                on: {
                  click: function(t) {
                    e.modalVideo = !0;
                  }
                }
              }),
          e._v(" "),
          n(
            "Modal",
            {
              attrs: {
                "footer-hide": !0,
                width: 100,
                "class-name": "modal--center modal--full modal__video"
              },
              on: {
                "on-visible-change": function(t) {
                  return e.handleModalVideo(t);
                }
              },
              model: {
                value: e.modalVideo,
                callback: function(t) {
                  e.modalVideo = t;
                },
                expression: "modalVideo"
              }
            },
            [
              n("Icon", {
                attrs: {
                  slot: "close",
                  size: 40,
                  color: "#fff",
                  type: "md-close"
                },
                slot: "close"
              }),
              e._v(" "),
              n("div", { attrs: { id: e.popupId } })
            ],
            1
          )
        ],
        1
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var t = this,
        e = t.$createElement,
        n = t._self._c || e;
      return n("section", { ref: "heroWrapper", staticClass: "hero pb-0" }, [
        n("div", { staticClass: "cs-container p-r to-animate-wrapper" }, [
          n(
            "div",
            { staticClass: "slider-wrapper", attrs: { id: "hero-slider" } },
            [
              n(
                "ul",
                { staticClass: "tns-nav" },
                t._l(t.heroSliderImages, function(t, e) {
                  return n("li", { key: "nav-" + e });
                }),
                0
              ),
              t._v(" "),
              n("div", { staticClass: "text-content" }, [
                n(
                  "h1",
                  { staticClass: "hero__heading text-white text-bold mb-4" },
                  [
                    n("span", {
                      staticClass: "to-animate animate-up",
                      domProps: { innerHTML: t._s(t.heroHeading) }
                    })
                  ]
                ),
                t._v(" "),
                n(
                  "p",
                  {
                    staticClass:
                      "hero__lead text-grow text-white to-animate animate-in"
                  },
                  [t._v("\n          " + t._s(t.heroLead) + "\n        ")]
                )
              ])
            ]
          )
        ])
      ]);
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "div",
        { staticClass: "form-wrapper" },
        [
          a(
            "div",
            {
              ref: "formSubmitNotify",
              staticClass: "form-submit-notify to-animate-wrapper"
            },
            [
              "" !== n.formNotification.icon
                ? a("img", {
                    staticClass:
                      "to-svg to-animate animate-draw mb-4 animate-up",
                    attrs: { src: n.formNotification.icon, alt: "success" }
                  })
                : n._e(),
              n._v(" "),
              "" !== n.formNotification.title
                ? a(
                    "div",
                    { staticClass: "heading-wrapper to-animate-wrapper" },
                    [
                      a("p", { staticClass: "text-title mb-4" }, [
                        n._v(
                          "\n        " +
                            n._s(n.formNotification.title) +
                            "\n      "
                        )
                      ]),
                      n._v(" "),
                      "" !== n.formNotification.message
                        ? a("p", { staticClass: "to-animate animate-up" }, [
                            n._v(
                              "\n        " +
                                n._s(n.formNotification.message) +
                                "\n      "
                            )
                          ])
                        : n._e()
                    ]
                  )
                : n._e()
            ]
          ),
          n._v(" "),
          a(
            "i-form",
            {
              ref: "form",
              attrs: {
                id: "form-contact",
                action: n.formAction,
                model: n.formContact,
                rules: n.ruleValidate
              }
            },
            n._l(n.formItems, function(e, t) {
              return a(
                "form-item",
                {
                  key: t,
                  attrs: {
                    prop: e.value,
                    label: "submit" !== e.type ? e.label : ""
                  }
                },
                [
                  "submit" !== e.type &&
                  "select" !== e.type &&
                  "datetime" !== e.type
                    ? a("i-input", {
                        attrs: {
                          id: "contact-" + e.value,
                          autosize: "textarea" === e.type && {
                            minRows: 5,
                            maxRows: 10
                          },
                          type: e.type,
                          prefix: e.icon
                        },
                        on: {
                          "on-keypress": function(t) {
                            "phone" === e.value && n.checkDigit(t);
                          }
                        },
                        model: {
                          value: n.formContact[e.value],
                          callback: function(t) {
                            n.$set(n.formContact, e.value, t);
                          },
                          expression: "formContact[item.value]"
                        }
                      })
                    : a("div", [
                        a(
                          "a",
                          {
                            staticClass: "btn btn--default mt-4",
                            attrs: { disabled: n.submitClicked, href: "" },
                            on: {
                              click: function(t) {
                                return t.preventDefault(), n.onSubmit(t);
                              }
                            }
                          },
                          [
                            n._v("\n          " + n._s(e.label)),
                            a("i", {
                              staticClass: "far fa-angle-right ml-auto"
                            })
                          ]
                        )
                      ])
                ],
                1
              );
            }),
            1
          )
        ],
        1
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var e = this,
        t = e.$createElement,
        n = e._self._c || t;
      return n(
        "i-form",
        {
          ref: "form",
          staticClass: "form-newsletter to-animate-wrapper",
          class: e.formClass,
          attrs: {
            action: e.formAction,
            model: e.formNewsletter,
            rules: e.ruleValidate
          }
        },
        [
          n("div", {
            attrs: { id: "form-crsf" },
            domProps: { innerHTML: e._s(e.formCsrf) }
          }),
          e._v(" "),
          n(
            "form-item",
            { attrs: { prop: "email" } },
            [
              n("i-input", {
                attrs: { placeholder: e.formPlaceholder.email },
                model: {
                  value: e.formNewsletter.email,
                  callback: function(t) {
                    e.$set(e.formNewsletter, "email", t);
                  },
                  expression: "formNewsletter.email"
                }
              }),
              e._v(" "),
              n(
                "a",
                {
                  staticClass:
                    "text-heading text-bold text-shrink text-white text-upper",
                  on: { click: e.onSubmit }
                },
                [e._v("\n      " + e._s(e.formPlaceholder.submit) + "\n    ")]
              )
            ],
            1
          ),
          e._v(" "),
          n(
            "form-item",
            [
              n("vue-recaptcha", {
                ref: "recaptcha",
                staticClass: "d-none",
                attrs: {
                  sitekey: e.formPlaceholder.recaptcha_site_key,
                  size: "invisible"
                },
                on: { verify: e.onCaptchaVerified, expired: e.onCaptchaExpired }
              })
            ],
            1
          )
        ],
        1
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "section",
        { ref: "heroWrapper", staticClass: "hero hero--home" },
        [
          a("picture", [
            a("source", {
              attrs: {
                media: "(min-width: 768px)",
                srcset: n.heroVideoPoster.desktop
              }
            }),
            n._v(" "),
            a("img", {
              staticClass: "hero__poster",
              attrs: { src: n.heroVideoPoster.mobile, alt: "poster" }
            })
          ]),
          n._v(" "),
          a(
            "div",
            { staticClass: "video-wrapper" },
            [a("lazy-video-as-g-i-f", { attrs: { src: n.heroVideoSrc } })],
            1
          ),
          n._v(" "),
          a(
            "div",
            { staticClass: "cs-container p-r to-animate-wrapper" },
            [
              a(
                "div",
                { staticClass: "hero__heading theme-heading text-white mb-4 " },
                [
                  a("h2", { staticClass: "to-animate animate-up" }, [
                    n._v("\n        " + n._s(n.heroHeading)),
                    a("span", { staticClass: "fullstop" }, [n._v(".")])
                  ])
                ]
              ),
              n._v(" "),
              n.heroLead
                ? a(
                    "p",
                    { staticClass: "text-white to-animate animate-up mb-5" },
                    [n._v("\n      " + n._s(n.heroLead) + "\n    ")]
                  )
                : n._e(),
              n._v(" "),
              a(
                "div",
                { staticClass: "btn-wrapper" },
                n._l(n.heroCtas, function(t, e) {
                  return a("div", { key: "cta-" + e }, [
                    "anchor" === t.type
                      ? a(
                          "a",
                          {
                            directives: [
                              {
                                name: "scroll-to",
                                rawName: "v-scroll-to",
                                value: t.url,
                                expression: "item.url"
                              }
                            ],
                            staticClass: "btn",
                            class: 0 === e ? "btn--default" : "btn--alt",
                            attrs: { href: "" }
                          },
                          [
                            n._v(
                              "\n          " + n._s(t.title) + "\n          "
                            ),
                            a("i", {
                              class: [
                                "far ml-auto",
                                0 === e ? "fa-angle-right" : "fa-plus"
                              ]
                            })
                          ]
                        )
                      : "none" !== t.type
                      ? a(
                          "a",
                          {
                            staticClass: "btn",
                            class: 0 === e ? "btn--default" : "btn--alt",
                            attrs: {
                              href:
                                "external" === t.type || "post" === t.type
                                  ? t.url
                                  : "",
                              target: "external" === t.type && "_blank"
                            }
                          },
                          [
                            n._v(
                              "\n          " + n._s(t.title) + "\n          "
                            ),
                            a("i", {
                              class: [
                                "far ml-auto",
                                0 === e ? "fa-angle-right" : "fa-plus"
                              ]
                            })
                          ]
                        )
                      : n._e()
                  ]);
                }),
                0
              ),
              n._v(" "),
              a(
                "a",
                {
                  directives: [
                    {
                      name: "scroll-to",
                      rawName: "v-scroll-to",
                      value: { el: "#section-about" },
                      expression: "{el: '#section-about'}"
                    }
                  ],
                  staticClass: "hero-anchor d-md-flex d-none"
                },
                [n._m(0), n._v(" "), a("span", [n._v("Scroll down")])]
              ),
              n._v(" "),
              n.heroVideoId
                ? a("button-play-youtube", {
                    staticClass: "d-md-block d-none",
                    attrs: { "video-id": n.heroVideoId }
                  })
                : n._e()
            ],
            1
          )
        ]
      );
    }
    var i = [
      function() {
        var t = this.$createElement,
          e = this._self._c || t;
        return e("div", { staticClass: "anchor-icon" }, [
          e("i", { staticClass: "far fa-angle-down" })
        ]);
      }
    ];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "slider-default",
        {
          ref: "slider",
          staticClass: "to-animate-wrapper",
          attrs: {
            "slider-id": n.sliderId,
            "slider-items-count": n.items.length,
            "fixed-width": 270,
            "has-controls": "",
            "has-pagination": "",
            "overflow-visible": ""
          }
        },
        n._l(n.items, function(t, e) {
          return a(
            "div",
            {
              key: e,
              staticClass: "slider-item",
              attrs: { slot: "content" },
              slot: "content"
            },
            [
              a("div", { staticClass: "to-animate animate-up" }, [
                a(
                  "a",
                  { staticClass: "product-item", attrs: { href: t.url } },
                  [
                    a("img", { attrs: { src: t.image, alt: t.name } }),
                    n._v(" "),
                    a("p", { staticClass: "text-heading text-black" }, [
                      n._v(n._s(t.name))
                    ])
                  ]
                )
              ])
            ]
          );
        }),
        0
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a("div", { staticClass: "section-solutions" }, [
        a(
          "div",
          { staticClass: "section__heading theme-heading to-animate-wrapper" },
          [
            a("h2", { staticClass: "w-100 to-animate animate-up" }, [
              n._v("\n      " + n._s(n.sectionHeading)),
              a("span", { staticClass: "fullstop" }, [n._v(".")])
            ]),
            n._v(" "),
            a("p", { staticClass: "mt-4 mx-0 to-animate animate-up" }, [
              n._v("\n      " + n._s(n.sectionLead) + "\n    ")
            ])
          ]
        ),
        n._v(" "),
        a(
          "div",
          {
            staticClass: "solutions__image d-lg-block d-none to-animate-wrapper"
          },
          [
            a("img", {
              staticClass: "d-lg-block d-none rounded to-animate animate-up",
              attrs: {
                src: n.solutionItems[n.activeIndex].image,
                alt: n.solutionItems[n.activeIndex].title
              }
            })
          ]
        ),
        n._v(" "),
        a("div", { staticClass: "solutions-container" }, [
          a(
            "div",
            {
              staticClass: "solutions__image to-animate-wrapper d-lg-none mb-5"
            },
            [
              a("img", {
                staticClass: "rounded to-animate animate-up",
                attrs: {
                  src: n.solutionItems[n.activeIndex].image,
                  alt: n.solutionItems[n.activeIndex].title
                }
              })
            ]
          ),
          n._v(" "),
          a(
            "div",
            { staticClass: "solutions-wrapper" },
            n._l(n.solutionItems, function(t, e) {
              return a(
                "div",
                {
                  key: "solution-" + e,
                  class: ["solutions-item", { active: e === n.activeIndex }],
                  on: {
                    click: function(t) {
                      n.activeIndex = e;
                    }
                  }
                },
                [
                  a("div", { staticClass: "solutions__icon" }, [
                    a("img", { attrs: { src: t.icon, alt: t.title } })
                  ]),
                  n._v(" "),
                  a("div", { staticClass: "solutions__content" }, [
                    a(
                      "p",
                      { staticClass: "text-grow text-heading text-black" },
                      [n._v("\n            " + n._s(t.title) + "\n          ")]
                    ),
                    n._v(" "),
                    a("p", [n._v(n._s(t.text))])
                  ])
                ]
              );
            }),
            0
          )
        ])
      ]);
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a("div", { staticClass: "row" }, [
        a("div", { staticClass: "col-lg-6 mr-lg-auto" }, [
          a(
            "div",
            {
              staticClass: "section__heading theme-heading to-animate-wrapper"
            },
            [
              a("h2", { staticClass: "to-animate animate-up" }, [
                n._v("\n        " + n._s(n.sectionTitle)),
                a("span", { staticClass: "fullstop" }, [n._v(".")])
              ])
            ]
          ),
          n._v(" "),
          a("div", { staticClass: "d-grid to-animate-wrapper" }, [
            a(
              "ul",
              { staticClass: "contact__regions d-lg-none mb-5" },
              n._l(n.contactItems, function(t, e) {
                return a(
                  "li",
                  {
                    key: e,
                    class: { active: e === n.activeContact },
                    on: {
                      click: function(t) {
                        n.activeContact = e;
                      }
                    }
                  },
                  [n._v("\n          " + n._s(t.region) + "\n        ")]
                );
              }),
              0
            ),
            n._v(" "),
            a(
              "ul",
              { staticClass: "contact__list mb-lg-5 mb-lg-0 mb-5" },
              n._l(n.contactItems[n.activeContact].contact, function(t, e) {
                return a(
                  "li",
                  { key: e, staticClass: "to-animate animate-up" },
                  [
                    a("span", { staticClass: "text-bold pr-3" }, [
                      n._v(n._s(t.label))
                    ]),
                    n._v(" "),
                    "none" !== t.link
                      ? a("a", { attrs: { href: t.link, target: "_blank" } }, [
                          n._v(n._s(t.content))
                        ])
                      : a("span", [n._v(n._s(t.content))])
                  ]
                );
              }),
              0
            ),
            n._v(" "),
            a(
              "div",
              {
                staticClass:
                  "contact__map rounded p-r o-h to-animate animate-up"
              },
              n._l(n.contactItems, function(t, e) {
                return a("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e === n.activeContact,
                      expression: "index === activeContact"
                    }
                  ],
                  key: e,
                  staticClass: "w-100 h-100",
                  domProps: { innerHTML: n._s(t.mapIframe) }
                });
              }),
              0
            )
          ])
        ]),
        n._v(" "),
        a(
          "div",
          { staticClass: "col-lg-5 mt-lg-0 mt-5" },
          [
            a(
              "ul",
              { staticClass: "contact__regions d-lg-block d-none mb-5" },
              n._l(n.contactItems, function(t, e) {
                return a(
                  "li",
                  {
                    key: e,
                    class: { active: e === n.activeContact },
                    on: {
                      click: function(t) {
                        n.activeContact = e;
                      }
                    }
                  },
                  [n._v("\n        " + n._s(t.region) + "\n      ")]
                );
              }),
              0
            ),
            n._v(" "),
            a("form-contact", {
              attrs: {
                "form-action": n.contactForm.action,
                "form-items": n.contactForm.items,
                "form-token": n.contactForm.token,
                "form-notification": n.contactForm.notifications
              }
            })
          ],
          1
        )
      ]);
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  function(t, e, n) {
    "use strict";
    function a() {
      var n = this,
        t = n.$createElement,
        a = n._self._c || t;
      return a(
        "div",
        { staticClass: "history-wrapper" },
        [
          a(
            "div",
            {
              staticClass:
                "history-timeline d-xl-flex d-none justify-content-between"
            },
            n._l(n.items, function(t, e) {
              return a("div", { key: e, staticClass: "history-item" }, [
                a("div", { staticClass: "timestamp-wrapper" }, [
                  a("img", {
                    staticClass: "mb-4",
                    attrs: { src: t.icon, alt: t.year }
                  }),
                  n._v(" "),
                  a("span", {
                    staticClass: "year",
                    domProps: { innerHTML: n._s(t.year) }
                  })
                ]),
                n._v(" "),
                a("div", { staticClass: "content" }, [
                  a("p", { domProps: { innerHTML: n._s(t.text) } })
                ])
              ]);
            }),
            0
          ),
          n._v(" "),
          a(
            "slider-default",
            {
              ref: "slider",
              staticClass: "d-xl-none",
              attrs: {
                "slider-id": n.sliderId,
                "slider-items-count": n.items.length,
                gutter: 20,
                "fixed-width": 130,
                responsive: { 768: { gutter: 42 } },
                "overflow-visible": ""
              }
            },
            n._l(n.items, function(t, e) {
              return a(
                "div",
                {
                  key: e,
                  staticClass: "slider-item",
                  attrs: { slot: "content" },
                  slot: "content"
                },
                [
                  a("div", { staticClass: "history-item" }, [
                    a("div", { staticClass: "timestamp-wrapper" }, [
                      a("img", {
                        staticClass: "mb-4",
                        attrs: { src: t.icon, alt: t.year }
                      }),
                      n._v(" "),
                      a("span", {
                        staticClass: "year",
                        domProps: { innerHTML: n._s(t.year) }
                      })
                    ]),
                    n._v(" "),
                    a("div", { staticClass: "content" }, [
                      a("p", { domProps: { innerHTML: n._s(t.text) } })
                    ])
                  ])
                ]
              );
            }),
            0
          )
        ],
        1
      );
    }
    var i = [];
    (a._withStripped = !0),
      n.d(e, "a", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return i;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "FormContact", {
        enumerable: !0,
        get: function() {
          return a.default;
        }
      }),
      Object.defineProperty(e, "FormNewsletter", {
        enumerable: !0,
        get: function() {
          return i.default;
        }
      });
    var a = r(n(103)),
      i = r(n(105));
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  function(t, e, n) {
    "use strict";
    var a = m(n(37)),
      i = m(n(65)),
      r = m(n(66)),
      o = m(n(67)),
      s = m(n(84)),
      l = m(n(85)),
      c = n(86);
    n(87), n(88);
    var u = n(89),
      d = n(61),
      f = n(2),
      p = n(107),
      v = n(114);
    function m(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (a.default.prototype.$http = o.default),
      (a.default.config.productionTip = !1),
      a.default.use(i.default, { locale: r.default }),
      a.default.use(s.default, { offset: -90 }),
      a.default.use(l.default),
      new a.default({
        el: "#app",
        data: {
          sectionsScrollspy: null,
          navItemsScrollspy: null,
          toAnimateEl: null,
          toSvgEl: null
        },
        components: {
          "cs-loader": c.ClipLoader,
          "cs-nav": u.Navbar,
          ButtonPlayYoutube: f.ButtonPlayYoutube,
          SliderDefault: f.SliderDefault,
          FormContact: d.FormContact,
          HeroHome: p.HeroHome,
          ProductsSlider: p.ProductsSlider,
          Solutions: p.Solutions,
          SectionContact: p.SectionContact,
          HistorySlider: v.HistorySlider
        },
        created: function() {},
        mounted: function() {
          var e = this;
          (this.navItemsScrollspy = this.$el.querySelectorAll(
            ".nav-item.scroll"
          )),
            (this.sectionsScrollspy = this.$el.querySelectorAll(
              ".section-scrollspy"
            )),
            (this.toAnimateEl = this.$el.querySelectorAll(
              ".to-animate-wrapper"
            )),
            (this.toSvgEl = this.$el.querySelectorAll(".to-svg")),
            setTimeout(function() {
              document.getElementById("app").classList.add("loaded"),
                (document.getElementById("layout").style.opacity = 1),
                "" !== window.location.hash &&
                  e.$scrollTo(window.location.hash),
                e.toSvgEl.forEach(function(t) {
                  e.replaceWithSvg(t);
                });
            }, 1e3),
            setTimeout(function() {
              e.toggleAnimate(),
                window.addEventListener("scroll", e.toggleAnimate);
            }, 1300),
            this.sectionsScrollspy.length && this.toggleNavItemScrollspy(),
            this.addMultiListener(
              window,
              "resize scroll",
              this.toggleNavItemScrollspy
            );
          for (
            var t = this.$el.getElementsByClassName("section__heading"), n = 0;
            n < t.length;
            n++
          )
            t[n].innerHTML = this.stickPointHeading(t[n].innerHTML);
          var a = document.getElementsByTagName("section");
          a[0].classList.contains("hero") || a[0].classList.add("no-hero");
        },
        methods: {
          addMultiListener: function(t, e, n) {
            for (var a = e.split(" "), i = 0; i < a.length; i++)
              t.addEventListener(a[i], n, !1);
          },
          isInViewport: function(t) {
            var e = window.scrollY + 100 || window.pageYOffset + 100,
              n = t.getBoundingClientRect().top + window.scrollY,
              a = e,
              i = e + window.innerHeight / 1.25,
              r = n;
            return (
              a < n + Math.abs(t.clientHeight - window.innerHeight / 1.25) &&
              r < i
            );
          },
          toggleAnimate: function() {
            var n = this;
            this.toAnimateEl.forEach(function(t) {
              if (n.isInViewport(t)) {
                var e = t.querySelectorAll(".to-animate");
                [].forEach.call(e, function(t, e) {
                  var n = t;
                  n.classList.contains("animate-in")
                    ? setTimeout(function() {
                        n.classList.add("animated", "fadeIn"),
                          n.classList.remove("to-animate", "animate-in");
                      }, 300 * e)
                    : n.classList.contains("animate-up")
                    ? setTimeout(function() {
                        n.classList.add("animated", "fadeInUp"),
                          n.classList.remove("to-animate", "animate-up");
                      }, 300 * e)
                    : n.classList.contains("animate-down")
                    ? setTimeout(function() {
                        n.classList.add("animated", "fadeInDown"),
                          n.classList.remove("to-animate", "animate-down");
                      }, 300 * e)
                    : n.classList.contains("animate-left")
                    ? setTimeout(function() {
                        n.classList.add("animated", "fadeInLeft"),
                          n.classList.remove("to-animate", "animate-left");
                      }, 300 * e)
                    : n.classList.contains("animate-right")
                    ? setTimeout(function() {
                        n.classList.add("animated", "fadeInRight"),
                          n.classList.remove("to-animate", "animate-right");
                      }, 300 * e)
                    : n.classList.contains("animate-zoom-in")
                    ? setTimeout(function() {
                        n.classList.add("animated", "zoomIn"),
                          n.classList.remove("to-animate", "animate-zoom-in");
                      }, 300 * e)
                    : n.classList.contains("animate-draw")
                    ? setTimeout(function() {
                        n.classList.add("animated"),
                          n.classList.remove("to-animate");
                      }, 300 * e)
                    : n.classList.contains("animate-drawline") &&
                      setTimeout(function() {
                        n.classList.add("animated"),
                          n.classList.remove("to-animate");
                      }, 300 * e);
                }),
                  t.classList.remove("to-animate-wrapper");
              }
            });
          },
          toggleNavItemScrollspy: function() {
            var a = this;
            this.sectionsScrollspy.forEach(function(t) {
              var e = "#".concat(t.id),
                n = a.$refs.navbar.$refs.navbarNav.$children.find(function(t) {
                  return t.$el.dataset.anchor === e;
                });
              n &&
                (a.isInViewport(t)
                  ? n.$el.classList.add(
                      "ivu-menu-item-active",
                      "ivu-menu-item-selected"
                    )
                  : n.$el.classList.remove(
                      "ivu-menu-item-active",
                      "ivu-menu-item-selected"
                    ));
            });
          },
          replaceWithSvg: function(n) {
            var a = n;
            this.$http
              .get(a.src)
              .then(function(t) {
                var e = document.createElement("div");
                (e.innerHTML = t.data.trim()),
                  !(e = e.getElementsByTagName("svg")[0]).attributes.viewBox &&
                    e.attributes.height &&
                    e.attributes.width &&
                    (e.attributes.viewBox =
                      "0 0 " + e.attributes.height + " " + e.attributes.width),
                  (e.classList = a.classList),
                  e.classList.remove("to-svg"),
                  n.parentElement.replaceChild(e, n);
              })
              .catch(function(t) {
                console.log(t);
              });
          },
          stickPointHeading: function(t) {
            if ("" == t || 2 !== t.split("<span").length) return t;
            var e = t.split("<span"),
              n = e[1].split("</h2>"),
              a = e[0].trim().split(" ");
            return a[a.length - 1].includes(">")
              ? t
              : ((a[a.length - 1] = "<span>" + a[a.length - 1]),
                (e[0] = a.join(" ")),
                (e[1] = "<span" + n[0] + "</span></h2>"),
                (t = e.join("")));
          }
        }
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "Navbar", {
        enumerable: !0,
        get: function() {
          return a.default;
        }
      }),
      Object.defineProperty(e, "HeroDefault", {
        enumerable: !0,
        get: function() {
          return i.default;
        }
      }),
      Object.defineProperty(e, "HeroSplit", {
        enumerable: !0,
        get: function() {
          return r.default;
        }
      }),
      Object.defineProperty(e, "HeroSlider", {
        enumerable: !0,
        get: function() {
          return o.default;
        }
      });
    var a = s(n(90)),
      i = s(n(92)),
      r = s(n(94)),
      o = s(n(101));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(39),
      i = n(3);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(91);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, null, null);
    (s.options.__file = "src/components/Layout/Navbar.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(5);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(40),
      i = n(6);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(93);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "407e0117", null);
    (s.options.__file = "src/components/Layout/Hero/HeroDefault.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(8);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(41),
      i = n(9);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(100);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "07af6e20", null);
    (s.options.__file = "src/components/Layout/Hero/HeroSplit.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(42),
      i = n(11);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "3642443b", null);
    (s.options.__file = "src/components/Utilities/SliderDefault.vue"),
      (e.default = s.exports);
  },
  ,
  ,
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(43),
      i = n(13);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(99);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "7a0d9e50", null);
    (s.options.__file = "src/components/Utilities/ButtonPlayYoutube.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(15);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    var a = n(16);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(44),
      i = n(17);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(102);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "3c9d7b0a", null);
    (s.options.__file = "src/components/Layout/Hero/HeroSlider.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(19);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(45),
      i = n(20);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(104);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "09224d81", null);
    (s.options.__file = "src/components/Form/FormContact.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(22);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(46),
      i = n(23);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "03fdcb68", null);
    (s.options.__file = "src/components/Form/FormNewsletter.vue"),
      (e.default = s.exports);
  },
  ,
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "HeroHome", {
        enumerable: !0,
        get: function() {
          return a.default;
        }
      }),
      Object.defineProperty(e, "ProductsSlider", {
        enumerable: !0,
        get: function() {
          return i.default;
        }
      }),
      Object.defineProperty(e, "Solutions", {
        enumerable: !0,
        get: function() {
          return r.default;
        }
      }),
      Object.defineProperty(e, "SectionContact", {
        enumerable: !0,
        get: function() {
          return o.default;
        }
      });
    var a = s(n(108)),
      i = s(n(110)),
      r = s(n(111)),
      o = s(n(113));
    function s(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(47),
      i = n(25);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(109);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "340dac56", null);
    (s.options.__file = "src/pages/Home/Hero.vue"), (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(27);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(48),
      i = n(28);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "77102541", null);
    (s.options.__file = "src/pages/Home/ProductsSlider.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(49),
      i = n(30);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    n(112);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "45f55b6e", null);
    (s.options.__file = "src/pages/Home/Solutions.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    var a = n(32);
    n.n(a).a;
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(50),
      i = n(33);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "2a119f52", null);
    (s.options.__file = "src/pages/Home/SectionContact.vue"),
      (e.default = s.exports);
  },
  function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "HistorySlider", {
        enumerable: !0,
        get: function() {
          return i.default;
        }
      });
    var a,
      i = (a = n(115)) && a.__esModule ? a : { default: a };
  },
  function(t, e, n) {
    "use strict";
    n.r(e);
    var a = n(51),
      i = n(35);
    for (var r in i)
      "default" !== r &&
        (function(t) {
          n.d(e, t, function() {
            return i[t];
          });
        })(r);
    var o = n(0),
      s = Object(o.a)(i.default, a.a, a.b, !1, null, "81adfa02", null);
    (s.options.__file = "src/pages/About/HistorySlider.vue"),
      (e.default = s.exports);
  }
]);
