(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[157], {
    2666: function (e, s, t) {
        Promise.resolve().then(t.bind(t, 8700)),
            Promise.resolve().then(t.bind(t, 769)),
            Promise.resolve().then(t.bind(t, 1137)),
            Promise.resolve().then(t.bind(t, 8165)),
            Promise.resolve().then(t.bind(t, 6687)),
            Promise.resolve().then(t.t.bind(t, 1749, 23)),
            Promise.resolve().then(t.t.bind(t, 5250, 23)),
            Promise.resolve().then(t.bind(t, 1974)),
            Promise.resolve().then(t.bind(t, 6971))
    },
    8700: function (e, s, t) {
        "use strict";
        t.r(s),
            t.d(s, {
                default: function () {
                    return L
                }
            });
        var l = t(7437)
            , i = t(2265);
        t(9154);
        var a = t(6691)
            , r = t.n(a)
            , c = t(1396)
            , n = t.n(c)
            , d = t(4685);
        t(8194);
        var x = t(347)
            , h = t(1752)
            , m = t(6430)
            , o = t(5101)
            , j = t(1836);
        t(6337);
        var g = t(9245)
            , p = t(867)
            , u = function (e) {
                let [s, t] = (0,
                    i.useState)(!1)
                    , [a, c] = (0,
                        i.useState)("")
                    , [d, x] = (0,
                        i.useState)(0)
                    , h = e.oldprice
                    , m = e.discount;
                function o(e, s) {
                    return 100 === s ? "free" : e - e * s / 100 + " DZD"
                }
                return (0,
                    i.useEffect)(() => {
                        e.dicountprice || t(!0)
                    }
                        , []),
                    (0,
                        l.jsxs)("div", {
                            className: " boxshadow duration-200 flex   justify-between   border border-1  relative border-gray-300  w-full rounded-lg",
                            children: [(0,
                                l.jsxs)("div", {
                                    style: {
                                        borderTopRightRadius: 8
                                    },
                                    className: e.discount ? " bg-red-600 text-white px-4 py-1 absolute top-0 right-0" : "hidden",
                                    children: [e.discount, e.discount ? "% OFF" : ""]
                                }), (0,
                                    l.jsx)("div", {
                                        className: " p-2 flex items-center justify-center",
                                        children: (0,
                                            l.jsx)(r(), {
                                                height: e.height,
                                                width: e.width,
                                                src: e.img,
                                                alt: "Red Dead Redemption 2",
                                                style: {
                                                    borderTopRightRadius: 8,
                                                    borderTopLeftRadius: 8
                                                },
                                                className: " select-none nodrag"
                                            })
                                    }), (0,
                                        l.jsx)("div", {
                                            className: " flex flex-col gap-1 select-none nodrag p-2 w-full justify-center items-start",
                                            children: (0,
                                                l.jsxs)("div", {
                                                    className: " flex w-full flex-col gap-2",
                                                    children: [(0,
                                                        l.jsx)("div", {
                                                            className: " flex items-center justify-start w-full",
                                                            children: e.category.length > 11 ? e.category.slice(0, 11) + "..." : e.category
                                                        }), (0,
                                                            l.jsx)("h1", {
                                                                className: " text-bold text-md",
                                                                children: e.title.length > 20 ? e.title.slice(0, 16) + "..." : e.title
                                                            }), (0,
                                                                l.jsxs)("div", {
                                                                    className: " flex flex-col gap-0 items-start w-full justify-between",
                                                                    children: [(0,
                                                                        l.jsxs)("div", {
                                                                            className: " w-full items-center flex flex-col justify-start",
                                                                            children: [(0,
                                                                                l.jsxs)("div", {
                                                                                    className: " flex  w-full gap-0 items-start justify-start",
                                                                                    children: [(0,
                                                                                        l.jsxs)("div", {
                                                                                            className: e.oldprice ? "flex items-center gap-2" : " hidden",
                                                                                            children: [(0,
                                                                                                l.jsxs)("span", {
                                                                                                    className: "text-gray-400 font-bold text-xs sm:text-sm line-through",
                                                                                                    children: [e.oldprice ? e.oldprice : "", " "]
                                                                                                }), (0,
                                                                                                    l.jsxs)("span", {
                                                                                                        className: " text-blue-950 font-bold text-xs sm:text-sm",
                                                                                                        children: ["  ", o(h, m) ? o(h, m) : "", " "]
                                                                                                    })]
                                                                                        }), (0,
                                                                                            l.jsxs)("span", {
                                                                                                className: e.oldprice ? " hidden" : " text-blue-950 font-bold text-xs sm:text-sm",
                                                                                                children: ["  ", e.price ? e.price : "No price included", " ", e.price ? "DZD" : ""]
                                                                                            })]
                                                                                }), (0,
                                                                                    l.jsx)("div", {
                                                                                        className: " w-full items-start",
                                                                                        children: (0,
                                                                                            l.jsx)(g.Z, {
                                                                                                sx: {
                                                                                                    "& > legend": {
                                                                                                        mt: 1
                                                                                                    }
                                                                                                },
                                                                                                children: (0,
                                                                                                    l.jsx)(p.Z, {
                                                                                                        name: "read-only",
                                                                                                        size: "small",
                                                                                                        value: e.rating,
                                                                                                        readOnly: !0
                                                                                                    })
                                                                                            })
                                                                                    })]
                                                                        }), (0,
                                                                            l.jsxs)("div", {
                                                                                className: " flex flex-wrap items-center w-full justify-between pr-6",
                                                                                children: [(0,
                                                                                    l.jsx)("button", {
                                                                                        className: e.price || e.oldprice ? " w-40 text-xs nav-top-background lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded" : " w-40 bg-gray-500 cursor-no-drop text-xs lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded",
                                                                                        children: "add to cart"
                                                                                    }), (0,
                                                                                        l.jsx)(n(), {
                                                                                            className: e.price || e.oldprice ? " p-1 text-xs cursor-pointer text-black underline" : " p-1 text-xs cursor-no-drop text-black underline",
                                                                                            href: "/",
                                                                                            children: "See Details"
                                                                                        })]
                                                                            })]
                                                                })]
                                                })
                                        })]
                        })
            }
            , f = t(4965);
        t(8996),
            t(6126);
        var Z = t(5599);
        t(6978),
            t(1734),
            t(7644),
            t(4132);
        var y = t(1100)
            , b = t(7760)
            , N = t(5266)
            , v = t(2502)
            , w = t(8864)
            , S = t(8212)
            , G = t(1068)
            , A = t(8727)
            , P = t(1344)
            , T = t(2492)
            , k = t(3457)
            , z = t(9150)
            , R = t(8389)
            , C = t(817)
            , D = t(2254)
            , O = t(9116)
            , V = t(819)
            , I = t(4309)
            , E = t(4081)
            , B = t(3906);
        function Q(e) {
            return "".concat(e, "\xb0C")
        }
        let X = {
            inputProps: {
                "aria-label": "Checkbox demo"
            }
        };
        var L = function () {
            let [e, s] = i.useState(!1)
                , [t, a] = i.useState(!1)
                , [c, p] = i.useState(!1)
                , [L, F] = i.useState(!1)
                , [U, Y] = i.useState(!0)
                , [K, M] = i.useState([10, 3e4]);
            function _(e) {
                return e.toLocaleString("en-US")
            }
            let q = _(K[0])
                , H = _(K[1])
                , J = () => {
                    a(!t)
                }
                , W = localStorage.getItem("isGrid")
                , [$, ee] = i.useState("module");
            (0,
                i.useEffect)(() => {
                    "true" === W ? ee("module") : ee("list")
                }
                    , []);
            let [es, et] = i.useState("")
                , el = e => {
                    et(e.target.value)
                }
                , ei = [{
                    title: "GTA 5",
                    price: 1e3,
                    category: "XBOX Games",
                    image: x.Z
                }, {
                    title: "Red dead 2",
                    price: 2500,
                    category: "PS5 Games",
                    image: m.Z
                }, {
                    title: "GTA 5",
                    price: 1e3,
                    category: "XBOX Games",
                    image: x.Z
                }, {
                    title: "Red dead 2",
                    price: 2500,
                    category: "PS5 Games",
                    image: m.Z
                }, {
                    title: "GTA 5",
                    price: 1e3,
                    category: "XBOX Games",
                    image: x.Z
                }, {
                    title: "Red dead 2",
                    price: 2500,
                    category: "PS5 Games",
                    image: m.Z
                }, {
                    title: "GTA 5",
                    price: 1e3,
                    category: "XBOX Games",
                    image: h.Z
                }];
            return (0,
                l.jsxs)("div", {
                    className: " flex flex-col justify-between relative h-auto    bg-white ",
                    children: [(0,
                        l.jsx)("div", {
                            className: " flex items-center px-4 sm:px-10 py-4 bg-slate-200",
                            children: (0,
                                l.jsxs)("div", {
                                    className: " w-auto flex items-center gap-3 outline bg-white outline-1 outline-gray-300 rounded-sm p-2",
                                    children: [(0,
                                        l.jsx)(Z.Z, {
                                            home: !0,
                                            title: "Home",
                                            path: "/"
                                        }), "/", (0,
                                            l.jsx)(Z.Z, {
                                                title: "Category",
                                                path: "/"
                                            }), "/", (0,
                                                l.jsx)(Z.Z, {
                                                    title: "Playstation",
                                                    path: "/"
                                                })]
                                })
                        }), (0,
                            l.jsxs)("div", {
                                className: "flex flex-col gap-7 px-4 h-auto py-7 sm:px-10",
                                children: [(0,
                                    l.jsxs)("div", {
                                        className: " w-full flex gap-5 flex-col-reverse lg:flex-row  h-full   ",
                                        children: [(0,
                                            l.jsxs)("div", {
                                                className: " h-auto  w-full lg:w-64  ",
                                                children: [(0,
                                                    l.jsx)("div", {
                                                        className: " p-2 nav-background ",
                                                        children: (0,
                                                            l.jsx)("h1", {
                                                                className: " text-white text-sm",
                                                                children: "Categories"
                                                            })
                                                    }), (0,
                                                        l.jsxs)("div", {
                                                            className: " flex flex-col gap-4",
                                                            children: [(0,
                                                                l.jsxs)(N.Z, {
                                                                    sx: {
                                                                        width: "100%"
                                                                    },
                                                                    component: "nav",
                                                                    "aria-labelledby": "nested-list-subheader",
                                                                    className: " bg-slate-100",
                                                                    children: [(0,
                                                                        l.jsxs)(v.Z, {
                                                                            className: " py-2 h-10 flex items-center",
                                                                            onClick: J,
                                                                            children: [(0,
                                                                                l.jsx)(S.Z, {
                                                                                    primary: "Streaming"
                                                                                }), t ? (0,
                                                                                    l.jsx)(A.Z, {}) : (0,
                                                                                        l.jsx)(P.Z, {})]
                                                                        }), (0,
                                                                            l.jsxs)(G.Z, {
                                                                                in: t,
                                                                                timeout: "auto",
                                                                                unmountOnExit: !0,
                                                                                children: [(0,
                                                                                    l.jsxs)(v.Z, {
                                                                                        className: " py-2 h-8 flex items-center",
                                                                                        sx: {
                                                                                            pl: 4
                                                                                        },
                                                                                        children: [(0,
                                                                                            l.jsx)(b.Z, {
                                                                                                size: "small",
                                                                                                ...X
                                                                                            }), (0,
                                                                                                l.jsx)(w.Z, {
                                                                                                    children: (0,
                                                                                                        l.jsx)(S.Z, {
                                                                                                            primary: "all"
                                                                                                        })
                                                                                                })]
                                                                                    }), (0,
                                                                                        l.jsxs)(v.Z, {
                                                                                            className: " py-2 h-8 flex items-center",
                                                                                            sx: {
                                                                                                pl: 4
                                                                                            },
                                                                                            children: [(0,
                                                                                                l.jsx)(b.Z, {
                                                                                                    size: "small",
                                                                                                    ...X
                                                                                                }), (0,
                                                                                                    l.jsx)(w.Z, {
                                                                                                        children: (0,
                                                                                                            l.jsx)(S.Z, {
                                                                                                                primary: "Netflix"
                                                                                                            })
                                                                                                    })]
                                                                                        }), (0,
                                                                                            l.jsxs)(v.Z, {
                                                                                                className: " py-2 h-8 flex items-center",
                                                                                                sx: {
                                                                                                    pl: 4
                                                                                                },
                                                                                                children: [(0,
                                                                                                    l.jsx)(b.Z, {
                                                                                                        size: "small",
                                                                                                        ...X
                                                                                                    }), (0,
                                                                                                        l.jsx)(w.Z, {
                                                                                                            children: (0,
                                                                                                                l.jsx)(S.Z, {
                                                                                                                    primary: "HBO Max"
                                                                                                                })
                                                                                                        })]
                                                                                            }), (0,
                                                                                                l.jsxs)(v.Z, {
                                                                                                    className: " py-2 h-8 flex items-center",
                                                                                                    sx: {
                                                                                                        pl: 4
                                                                                                    },
                                                                                                    children: [(0,
                                                                                                        l.jsx)(b.Z, {
                                                                                                            size: "small",
                                                                                                            ...X
                                                                                                        }), (0,
                                                                                                            l.jsx)(w.Z, {
                                                                                                                children: (0,
                                                                                                                    l.jsx)(S.Z, {
                                                                                                                        primary: "Amazon prime"
                                                                                                                    })
                                                                                                            })]
                                                                                                }), (0,
                                                                                                    l.jsxs)(v.Z, {
                                                                                                        className: " py-2 h-8 flex items-center",
                                                                                                        sx: {
                                                                                                            pl: 4
                                                                                                        },
                                                                                                        children: [(0,
                                                                                                            l.jsx)(b.Z, {
                                                                                                                size: "small",
                                                                                                                ...X
                                                                                                            }), (0,
                                                                                                                l.jsx)(w.Z, {
                                                                                                                    children: (0,
                                                                                                                        l.jsx)(S.Z, {
                                                                                                                            primary: "Shahid VIP"
                                                                                                                        })
                                                                                                                })]
                                                                                                    })]
                                                                            }), (0,
                                                                                l.jsxs)(v.Z, {
                                                                                    className: " py-2 h-10 flex items-center",
                                                                                    children: [(0,
                                                                                        l.jsx)(b.Z, {
                                                                                            size: "small",
                                                                                            ...X
                                                                                        }), (0,
                                                                                            l.jsx)(S.Z, {
                                                                                                primary: "Software"
                                                                                            })]
                                                                                }), (0,
                                                                                    l.jsxs)(v.Z, {
                                                                                        className: " py-2 h-10",
                                                                                        onClick: () => {
                                                                                            s(!e)
                                                                                        }
                                                                                        ,
                                                                                        children: [(0,
                                                                                            l.jsx)(S.Z, {
                                                                                                primary: "IPTV"
                                                                                            }), e ? (0,
                                                                                                l.jsx)(A.Z, {}) : (0,
                                                                                                    l.jsx)(P.Z, {})]
                                                                                    }), (0,
                                                                                        l.jsx)(G.Z, {
                                                                                            in: e,
                                                                                            timeout: "auto",
                                                                                            unmountOnExit: !0,
                                                                                            children: (0,
                                                                                                l.jsxs)(N.Z, {
                                                                                                    component: "div",
                                                                                                    disablePadding: !0,
                                                                                                    children: [(0,
                                                                                                        l.jsxs)(v.Z, {
                                                                                                            className: " py-2 h-8 flex items-center",
                                                                                                            sx: {
                                                                                                                pl: 4
                                                                                                            },
                                                                                                            children: [(0,
                                                                                                                l.jsx)(b.Z, {
                                                                                                                    size: "small",
                                                                                                                    ...X
                                                                                                                }), (0,
                                                                                                                    l.jsx)(w.Z, {
                                                                                                                        children: (0,
                                                                                                                            l.jsx)(S.Z, {
                                                                                                                                primary: "all"
                                                                                                                            })
                                                                                                                    })]
                                                                                                        }), (0,
                                                                                                            l.jsxs)(v.Z, {
                                                                                                                className: " py-2 h-8 flex items-center",
                                                                                                                sx: {
                                                                                                                    pl: 4
                                                                                                                },
                                                                                                                children: [(0,
                                                                                                                    l.jsx)(b.Z, {
                                                                                                                        size: "small",
                                                                                                                        ...X
                                                                                                                    }), (0,
                                                                                                                        l.jsx)(w.Z, {
                                                                                                                            children: (0,
                                                                                                                                l.jsx)(S.Z, {
                                                                                                                                    primary: "LYNX"
                                                                                                                                })
                                                                                                                        })]
                                                                                                            }), (0,
                                                                                                                l.jsxs)(v.Z, {
                                                                                                                    className: " py-2 h-8 flex items-center",
                                                                                                                    sx: {
                                                                                                                        pl: 4
                                                                                                                    },
                                                                                                                    children: [(0,
                                                                                                                        l.jsx)(b.Z, {
                                                                                                                            size: "small",
                                                                                                                            ...X
                                                                                                                        }), (0,
                                                                                                                            l.jsx)(w.Z, {
                                                                                                                                children: (0,
                                                                                                                                    l.jsx)(S.Z, {
                                                                                                                                        primary: "Iron PRO"
                                                                                                                                    })
                                                                                                                            })]
                                                                                                                }), (0,
                                                                                                                    l.jsxs)(v.Z, {
                                                                                                                        className: " py-2 h-8 flex items-center",
                                                                                                                        sx: {
                                                                                                                            pl: 4
                                                                                                                        },
                                                                                                                        children: [(0,
                                                                                                                            l.jsx)(b.Z, {
                                                                                                                                size: "small",
                                                                                                                                ...X
                                                                                                                            }), (0,
                                                                                                                                l.jsx)(w.Z, {
                                                                                                                                    children: (0,
                                                                                                                                        l.jsx)(S.Z, {
                                                                                                                                            primary: "GOGO"
                                                                                                                                        })
                                                                                                                                })]
                                                                                                                    })]
                                                                                                })
                                                                                        }), (0,
                                                                                            l.jsxs)(v.Z, {
                                                                                                className: " py-2 h-10 flex items-center",
                                                                                                children: [(0,
                                                                                                    l.jsx)(b.Z, {
                                                                                                        size: "small",
                                                                                                        ...X
                                                                                                    }), (0,
                                                                                                        l.jsx)(S.Z, {
                                                                                                            primary: "PC Games"
                                                                                                        })]
                                                                                            }), (0,
                                                                                                l.jsxs)(v.Z, {
                                                                                                    className: " py-2 h-10 flex items-center",
                                                                                                    children: [(0,
                                                                                                        l.jsx)(b.Z, {
                                                                                                            size: "small",
                                                                                                            ...X
                                                                                                        }), (0,
                                                                                                            l.jsx)(S.Z, {
                                                                                                                primary: "VPN"
                                                                                                            })]
                                                                                                }), (0,
                                                                                                    l.jsxs)(v.Z, {
                                                                                                        className: " py-2 h-10 flex items-center",
                                                                                                        onClick: J,
                                                                                                        children: [(0,
                                                                                                            l.jsx)(S.Z, {
                                                                                                                primary: "Gift Cards"
                                                                                                            }), t ? (0,
                                                                                                                l.jsx)(A.Z, {}) : (0,
                                                                                                                    l.jsx)(P.Z, {})]
                                                                                                    }), (0,
                                                                                                        l.jsx)(G.Z, {
                                                                                                            in: t,
                                                                                                            timeout: "auto",
                                                                                                            unmountOnExit: !0,
                                                                                                            children: (0,
                                                                                                                l.jsxs)(N.Z, {
                                                                                                                    component: "div",
                                                                                                                    disablePadding: !0,
                                                                                                                    children: [(0,
                                                                                                                        l.jsxs)(v.Z, {
                                                                                                                            className: " py-2 h-8 flex items-center",
                                                                                                                            sx: {
                                                                                                                                pl: 4
                                                                                                                            },
                                                                                                                            children: [(0,
                                                                                                                                l.jsx)(b.Z, {
                                                                                                                                    size: "small",
                                                                                                                                    ...X
                                                                                                                                }), (0,
                                                                                                                                    l.jsx)(w.Z, {
                                                                                                                                        children: (0,
                                                                                                                                            l.jsx)(S.Z, {
                                                                                                                                                primary: "all"
                                                                                                                                            })
                                                                                                                                    })]
                                                                                                                        }), (0,
                                                                                                                            l.jsxs)(v.Z, {
                                                                                                                                className: " py-2 h-8 flex items-center",
                                                                                                                                sx: {
                                                                                                                                    pl: 4
                                                                                                                                },
                                                                                                                                children: [(0,
                                                                                                                                    l.jsx)(b.Z, {
                                                                                                                                        size: "small",
                                                                                                                                        ...X
                                                                                                                                    }), (0,
                                                                                                                                        l.jsx)(w.Z, {
                                                                                                                                            children: (0,
                                                                                                                                                l.jsx)(S.Z, {
                                                                                                                                                    primary: "Google Play"
                                                                                                                                                })
                                                                                                                                        })]
                                                                                                                            }), (0,
                                                                                                                                l.jsxs)(v.Z, {
                                                                                                                                    className: " py-2 h-8 flex items-center",
                                                                                                                                    sx: {
                                                                                                                                        pl: 4
                                                                                                                                    },
                                                                                                                                    children: [(0,
                                                                                                                                        l.jsx)(b.Z, {
                                                                                                                                            size: "small",
                                                                                                                                            ...X
                                                                                                                                        }), (0,
                                                                                                                                            l.jsx)(w.Z, {
                                                                                                                                                children: (0,
                                                                                                                                                    l.jsx)(S.Z, {
                                                                                                                                                        primary: "Itunes"
                                                                                                                                                    })
                                                                                                                                            })]
                                                                                                                                }), (0,
                                                                                                                                    l.jsxs)(v.Z, {
                                                                                                                                        className: " py-2 h-8 flex items-center",
                                                                                                                                        sx: {
                                                                                                                                            pl: 4
                                                                                                                                        },
                                                                                                                                        children: [(0,
                                                                                                                                            l.jsx)(b.Z, {
                                                                                                                                                size: "small",
                                                                                                                                                ...X
                                                                                                                                            }), (0,
                                                                                                                                                l.jsx)(w.Z, {
                                                                                                                                                    children: (0,
                                                                                                                                                        l.jsx)(S.Z, {
                                                                                                                                                            primary: "Amazon "
                                                                                                                                                        })
                                                                                                                                                })]
                                                                                                                                    })]
                                                                                                                })
                                                                                                        }), (0,
                                                                                                            l.jsxs)(v.Z, {
                                                                                                                className: " py-2 h-10 flex items-center",
                                                                                                                children: [(0,
                                                                                                                    l.jsx)(b.Z, {
                                                                                                                        size: "small",
                                                                                                                        ...X
                                                                                                                    }), (0,
                                                                                                                        l.jsx)(S.Z, {
                                                                                                                            primary: "PC Games"
                                                                                                                        })]
                                                                                                            }), (0,
                                                                                                                l.jsxs)(v.Z, {
                                                                                                                    className: " py-2 h-10 flex items-center",
                                                                                                                    onClick: () => {
                                                                                                                        p(!c)
                                                                                                                    }
                                                                                                                    ,
                                                                                                                    children: [(0,
                                                                                                                        l.jsx)(S.Z, {
                                                                                                                            primary: "Playstation Games"
                                                                                                                        }), c ? (0,
                                                                                                                            l.jsx)(A.Z, {}) : (0,
                                                                                                                                l.jsx)(P.Z, {})]
                                                                                                                }), (0,
                                                                                                                    l.jsx)(G.Z, {
                                                                                                                        in: c,
                                                                                                                        timeout: "auto",
                                                                                                                        unmountOnExit: !0,
                                                                                                                        children: (0,
                                                                                                                            l.jsxs)(N.Z, {
                                                                                                                                component: "div",
                                                                                                                                disablePadding: !0,
                                                                                                                                children: [(0,
                                                                                                                                    l.jsxs)(v.Z, {
                                                                                                                                        className: " py-2 h-8 flex items-center",
                                                                                                                                        sx: {
                                                                                                                                            pl: 4
                                                                                                                                        },
                                                                                                                                        children: [(0,
                                                                                                                                            l.jsx)(b.Z, {
                                                                                                                                                size: "small",
                                                                                                                                                ...X
                                                                                                                                            }), (0,
                                                                                                                                                l.jsx)(w.Z, {
                                                                                                                                                    children: (0,
                                                                                                                                                        l.jsx)(S.Z, {
                                                                                                                                                            primary: "all"
                                                                                                                                                        })
                                                                                                                                                })]
                                                                                                                                    }), (0,
                                                                                                                                        l.jsxs)(v.Z, {
                                                                                                                                            className: " py-2 h-8 flex items-center",
                                                                                                                                            sx: {
                                                                                                                                                pl: 4
                                                                                                                                            },
                                                                                                                                            children: [(0,
                                                                                                                                                l.jsx)(b.Z, {
                                                                                                                                                    size: "small",
                                                                                                                                                    ...X
                                                                                                                                                }), (0,
                                                                                                                                                    l.jsx)(w.Z, {
                                                                                                                                                        children: (0,
                                                                                                                                                            l.jsx)(S.Z, {
                                                                                                                                                                primary: "PS5"
                                                                                                                                                            })
                                                                                                                                                    })]
                                                                                                                                        }), (0,
                                                                                                                                            l.jsxs)(v.Z, {
                                                                                                                                                className: " py-2 h-8 flex items-center",
                                                                                                                                                sx: {
                                                                                                                                                    pl: 4
                                                                                                                                                },
                                                                                                                                                children: [(0,
                                                                                                                                                    l.jsx)(b.Z, {
                                                                                                                                                        size: "small",
                                                                                                                                                        ...X
                                                                                                                                                    }), (0,
                                                                                                                                                        l.jsx)(w.Z, {
                                                                                                                                                            children: (0,
                                                                                                                                                                l.jsx)(S.Z, {
                                                                                                                                                                    primary: "PS4"
                                                                                                                                                                })
                                                                                                                                                        })]
                                                                                                                                            })]
                                                                                                                            })
                                                                                                                    }), (0,
                                                                                                                        l.jsxs)(v.Z, {
                                                                                                                            className: " py-2 h-10 flex items-center",
                                                                                                                            children: [(0,
                                                                                                                                l.jsx)(b.Z, {
                                                                                                                                    size: "small",
                                                                                                                                    ...X
                                                                                                                                }), (0,
                                                                                                                                    l.jsx)(S.Z, {
                                                                                                                                        primary: "Steam"
                                                                                                                                    })]
                                                                                                                        }), (0,
                                                                                                                            l.jsxs)(v.Z, {
                                                                                                                                className: " py-2 h-10",
                                                                                                                                onClick: () => {
                                                                                                                                    F(!L)
                                                                                                                                }
                                                                                                                                ,
                                                                                                                                children: [(0,
                                                                                                                                    l.jsx)(S.Z, {
                                                                                                                                        primary: "Xbox Games"
                                                                                                                                    }), L ? (0,
                                                                                                                                        l.jsx)(A.Z, {}) : (0,
                                                                                                                                            l.jsx)(P.Z, {})]
                                                                                                                            }), (0,
                                                                                                                                l.jsx)(G.Z, {
                                                                                                                                    in: L,
                                                                                                                                    timeout: "auto",
                                                                                                                                    unmountOnExit: !0,
                                                                                                                                    children: (0,
                                                                                                                                        l.jsxs)(N.Z, {
                                                                                                                                            component: "div",
                                                                                                                                            disablePadding: !0,
                                                                                                                                            children: [(0,
                                                                                                                                                l.jsxs)(v.Z, {
                                                                                                                                                    className: " py-2 h-8 flex items-center",
                                                                                                                                                    sx: {
                                                                                                                                                        pl: 4
                                                                                                                                                    },
                                                                                                                                                    children: [(0,
                                                                                                                                                        l.jsx)(b.Z, {
                                                                                                                                                            size: "small",
                                                                                                                                                            ...X
                                                                                                                                                        }), (0,
                                                                                                                                                            l.jsx)(w.Z, {
                                                                                                                                                                children: (0,
                                                                                                                                                                    l.jsx)(S.Z, {
                                                                                                                                                                        primary: "all"
                                                                                                                                                                    })
                                                                                                                                                            })]
                                                                                                                                                }), (0,
                                                                                                                                                    l.jsxs)(v.Z, {
                                                                                                                                                        className: " py-2 h-8 flex items-center",
                                                                                                                                                        sx: {
                                                                                                                                                            pl: 4
                                                                                                                                                        },
                                                                                                                                                        children: [(0,
                                                                                                                                                            l.jsx)(b.Z, {
                                                                                                                                                                size: "small",
                                                                                                                                                                ...X
                                                                                                                                                            }), (0,
                                                                                                                                                                l.jsx)(w.Z, {
                                                                                                                                                                    children: (0,
                                                                                                                                                                        l.jsx)(S.Z, {
                                                                                                                                                                            primary: "Xbox Series X"
                                                                                                                                                                        })
                                                                                                                                                                })]
                                                                                                                                                    }), (0,
                                                                                                                                                        l.jsxs)(v.Z, {
                                                                                                                                                            className: " py-2 h-8 flex items-center",
                                                                                                                                                            sx: {
                                                                                                                                                                pl: 4
                                                                                                                                                            },
                                                                                                                                                            children: [(0,
                                                                                                                                                                l.jsx)(b.Z, {
                                                                                                                                                                    size: "small",
                                                                                                                                                                    ...X
                                                                                                                                                                }), (0,
                                                                                                                                                                    l.jsx)(w.Z, {
                                                                                                                                                                        children: (0,
                                                                                                                                                                            l.jsx)(S.Z, {
                                                                                                                                                                                primary: "Xbox Sereis S"
                                                                                                                                                                            })
                                                                                                                                                                    })]
                                                                                                                                                        }), (0,
                                                                                                                                                            l.jsxs)(v.Z, {
                                                                                                                                                                className: " py-2 h-8 flex items-center",
                                                                                                                                                                sx: {
                                                                                                                                                                    pl: 4
                                                                                                                                                                },
                                                                                                                                                                children: [(0,
                                                                                                                                                                    l.jsx)(b.Z, {
                                                                                                                                                                        size: "small",
                                                                                                                                                                        ...X
                                                                                                                                                                    }), (0,
                                                                                                                                                                        l.jsx)(w.Z, {
                                                                                                                                                                            children: (0,
                                                                                                                                                                                l.jsx)(S.Z, {
                                                                                                                                                                                    primary: "Xbox One"
                                                                                                                                                                                })
                                                                                                                                                                        })]
                                                                                                                                                            })]
                                                                                                                                        })
                                                                                                                                })]
                                                                }), (0,
                                                                    l.jsxs)("div", {
                                                                        className: "  bg-slate-100 flex flex-col  w-full  ",
                                                                        children: [(0,
                                                                            l.jsx)("span", {
                                                                                className: "p-2 nav-background h-auto w-full text-white",
                                                                                children: "Filter BY PRICE"
                                                                            }), (0,
                                                                                l.jsxs)("div", {
                                                                                    className: "p-3 gap-3 flex-col w-full h-auto flex items-start",
                                                                                    children: [(0,
                                                                                        l.jsx)(y.ZP, {
                                                                                            getAriaLabel: () => "Minimum distance shift",
                                                                                            value: K,
                                                                                            onChange: (e, s, t) => {
                                                                                                if (Array.isArray(s)) {
                                                                                                    if (s[1] - s[0] < 10) {
                                                                                                        if (0 === t) {
                                                                                                            let e = Math.min(s[0], 90);
                                                                                                            M([e, e + 10])
                                                                                                        } else {
                                                                                                            let e = Math.max(s[1], 10);
                                                                                                            M([e - 10, e])
                                                                                                        }
                                                                                                    } else
                                                                                                        M(s)
                                                                                                }
                                                                                            }
                                                                                            ,
                                                                                            max: "50000.00",
                                                                                            valueLabelDisplay: "auto",
                                                                                            getAriaValueText: Q,
                                                                                            disableSwap: !0
                                                                                        }), (0,
                                                                                            l.jsx)("div", {
                                                                                                className: "flex flex-col items-start w-full gap-3   justify-start ",
                                                                                                children: (0,
                                                                                                    l.jsxs)("div", {
                                                                                                        className: " w-full px-1",
                                                                                                        children: [(0,
                                                                                                            l.jsx)("span", {
                                                                                                                children: "Price : "
                                                                                                            }), (0,
                                                                                                                l.jsxs)("div", {
                                                                                                                    className: "flex items-start justify-between w-full",
                                                                                                                    children: [(0,
                                                                                                                        l.jsxs)("span", {
                                                                                                                            children: [q, " DZD"]
                                                                                                                        }), (0,
                                                                                                                            l.jsxs)("span", {
                                                                                                                                children: [H, " DZD"]
                                                                                                                            })]
                                                                                                                })]
                                                                                                    })
                                                                                            }), (0,
                                                                                                l.jsx)("button", {
                                                                                                    className: " bg-orange-400 p-2 w-full text-white",
                                                                                                    children: "FILTER"
                                                                                                })]
                                                                                })]
                                                                    })]
                                                        })]
                                            }), (0,
                                                l.jsxs)("div", {
                                                    className: " h-auto w-full flex flex-col gap-2 ",
                                                    children: [(0,
                                                        l.jsxs)("div", {
                                                            className: " w-full p-2 bg-white outline outline-1 outline-gray-300 flex flex-col-reverse sm:flex-row items-center gap-5 justify-around",
                                                            children: [(0,
                                                                l.jsx)("div", {
                                                                    className: " flex items-center gap-4 w-full justify-start md:justify-start",
                                                                    children: (0,
                                                                        l.jsx)("div", {
                                                                            className: " flex gap-2",
                                                                            children: (0,
                                                                                l.jsx)("span", {
                                                                                    className: " text-xs lg:text-sm text-gray-500",
                                                                                    children: "Showing results for : 10 / 175 Products"
                                                                                })
                                                                        })
                                                                }), (0,
                                                                    l.jsxs)("div", {
                                                                        className: "flex flex-wrap sm:flex-nowrap items-start gap-3 justify-start md:justify-end w-full",
                                                                        children: [(0,
                                                                            l.jsx)("div", {
                                                                                className: " flex items-center gap-2",
                                                                                children: (0,
                                                                                    l.jsx)(g.Z, {
                                                                                        sx: {
                                                                                            minWidth: 120
                                                                                        },
                                                                                        children: (0,
                                                                                            l.jsxs)(E.Z, {
                                                                                                fullWidth: !0,
                                                                                                children: [(0,
                                                                                                    l.jsx)(V.Z, {
                                                                                                        style: {
                                                                                                            marginTop: -10
                                                                                                        },
                                                                                                        className: " text-center flex items-center  rounded-none",
                                                                                                        id: "demo-simple-select-label",
                                                                                                        children: "Per Page"
                                                                                                    }), (0,
                                                                                                        l.jsxs)(B.Z, {
                                                                                                            labelId: "demo-simple-select-label",
                                                                                                            id: "demo-simple-select",
                                                                                                            value: es,
                                                                                                            label: "ghj",
                                                                                                            onChange: el,
                                                                                                            className: "  h-8",
                                                                                                            children: [(0,
                                                                                                                l.jsx)(I.Z, {
                                                                                                                    value: 10,
                                                                                                                    children: "5"
                                                                                                                }), (0,
                                                                                                                    l.jsx)(I.Z, {
                                                                                                                        value: 20,
                                                                                                                        children: "10"
                                                                                                                    }), (0,
                                                                                                                        l.jsx)(I.Z, {
                                                                                                                            value: 30,
                                                                                                                            children: "50"
                                                                                                                        }), (0,
                                                                                                                            l.jsx)(I.Z, {
                                                                                                                                value: 30,
                                                                                                                                children: "100"
                                                                                                                            })]
                                                                                                        })]
                                                                                            })
                                                                                    })
                                                                            }), (0,
                                                                                l.jsx)("div", {
                                                                                    className: " flex items-center gap-2",
                                                                                    children: (0,
                                                                                        l.jsx)(g.Z, {
                                                                                            sx: {
                                                                                                minWidth: 120
                                                                                            },
                                                                                            children: (0,
                                                                                                l.jsxs)(E.Z, {
                                                                                                    fullWidth: !0,
                                                                                                    children: [(0,
                                                                                                        l.jsx)(V.Z, {
                                                                                                            style: {
                                                                                                                marginTop: -10
                                                                                                            },
                                                                                                            className: " text-center flex items-center  rounded-none",
                                                                                                            id: "demo-simple-select-label",
                                                                                                            children: "Sort By"
                                                                                                        }), (0,
                                                                                                            l.jsxs)(B.Z, {
                                                                                                                labelId: "demo-simple-select-label",
                                                                                                                id: "demo-simple-select",
                                                                                                                value: es,
                                                                                                                label: "ghj",
                                                                                                                onChange: el,
                                                                                                                className: "  h-8",
                                                                                                                children: [(0,
                                                                                                                    l.jsx)(I.Z, {
                                                                                                                        value: 10,
                                                                                                                        children: "Ten"
                                                                                                                    }), (0,
                                                                                                                        l.jsx)(I.Z, {
                                                                                                                            value: 20,
                                                                                                                            children: "Twenty"
                                                                                                                        }), (0,
                                                                                                                            l.jsx)(I.Z, {
                                                                                                                                value: 30,
                                                                                                                                children: "Thirty"
                                                                                                                            })]
                                                                                                            })]
                                                                                                })
                                                                                        })
                                                                                }), (0,
                                                                                    l.jsxs)(C.Z, {
                                                                                        orientation: "horizontal",
                                                                                        value: $,
                                                                                        exclusive: !0,
                                                                                        onChange: (e, s) => {
                                                                                            ee(s)
                                                                                        }
                                                                                        ,
                                                                                        children: [(0,
                                                                                            l.jsx)(R.Z, {
                                                                                                onClick: () => {
                                                                                                    localStorage.setItem("isGrid", !0)
                                                                                                }
                                                                                                ,
                                                                                                className: " h-8",
                                                                                                value: "module",
                                                                                                "aria-label": "module",
                                                                                                children: (0,
                                                                                                    l.jsx)(D.Z, {})
                                                                                            }), (0,
                                                                                                l.jsx)(R.Z, {
                                                                                                    onClick: () => {
                                                                                                        localStorage.setItem("isGrid", !1)
                                                                                                    }
                                                                                                    ,
                                                                                                    className: " h-8",
                                                                                                    value: "list",
                                                                                                    "aria-label": "list",
                                                                                                    children: (0,
                                                                                                        l.jsx)(O.Z, {})
                                                                                                })]
                                                                                    })]
                                                                    })]
                                                        }), (0,
                                                            l.jsx)("div", {
                                                                className: "true" == W ? " w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center gap-4 " : " w-full h-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center gap-4 ",
                                                                children: "true" == W ? (0,
                                                                    l.jsx)(() => (0,
                                                                        l.jsxs)(l.Fragment, {
                                                                            children: [(0,
                                                                                l.jsx)(z.Z, {
                                                                                    img: x.Z,
                                                                                    discount: 99,
                                                                                    oldprice: 6500,
                                                                                    price: 1e3,
                                                                                    title: "GTA V",
                                                                                    category: "PS5 Games",
                                                                                    rating: 5,
                                                                                    width: 290,
                                                                                    height: 290
                                                                                }), (0,
                                                                                    l.jsx)(z.Z, {
                                                                                        img: x.Z,
                                                                                        discount: 5,
                                                                                        oldprice: 100,
                                                                                        price: 16500,
                                                                                        title: "GTA V",
                                                                                        category: "PS5 Games",
                                                                                        rating: 5,
                                                                                        width: 290,
                                                                                        height: 290
                                                                                    }), (0,
                                                                                        l.jsx)(z.Z, {
                                                                                            img: x.Z,
                                                                                            discount: 5,
                                                                                            price: 16500,
                                                                                            title: "GTA V",
                                                                                            category: "PS5 Games",
                                                                                            rating: 5,
                                                                                            width: 290,
                                                                                            height: 290
                                                                                        }), (0,
                                                                                            l.jsx)(z.Z, {
                                                                                                img: x.Z,
                                                                                                discount: 5,
                                                                                                title: "GTA V",
                                                                                                category: "PS5 Games",
                                                                                                rating: 5,
                                                                                                width: 290,
                                                                                                height: 290
                                                                                            }), (0,
                                                                                                l.jsx)(z.Z, {
                                                                                                    img: x.Z,
                                                                                                    discount: 5,
                                                                                                    title: "GTA V",
                                                                                                    category: "PS5 Games",
                                                                                                    rating: 5,
                                                                                                    width: 290,
                                                                                                    height: 290
                                                                                                }), (0,
                                                                                                    l.jsx)(z.Z, {
                                                                                                        img: x.Z,
                                                                                                        discount: 5,
                                                                                                        title: "GTA V",
                                                                                                        category: "PS5 Games",
                                                                                                        rating: 5,
                                                                                                        width: 290,
                                                                                                        height: 290
                                                                                                    }), (0,
                                                                                                        l.jsx)(z.Z, {
                                                                                                            img: x.Z,
                                                                                                            discount: 5,
                                                                                                            title: "GTA V",
                                                                                                            category: "PS5 Games",
                                                                                                            rating: 5,
                                                                                                            width: 290,
                                                                                                            height: 290
                                                                                                        }), (0,
                                                                                                            l.jsx)(z.Z, {
                                                                                                                img: x.Z,
                                                                                                                discount: 5,
                                                                                                                title: "GTA V",
                                                                                                                category: "PS5 Games",
                                                                                                                rating: 5,
                                                                                                                width: 290,
                                                                                                                height: 290
                                                                                                            })]
                                                                        }), {}) : (0,
                                                                            l.jsx)(() => (0,
                                                                                l.jsxs)(l.Fragment, {
                                                                                    children: [(0,
                                                                                        l.jsx)(u, {
                                                                                            img: x.Z,
                                                                                            discount: 5,
                                                                                            oldprice: 6500,
                                                                                            title: "GTA V",
                                                                                            category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                            rating: 5,
                                                                                            width: U ? 290 : 240,
                                                                                            height: U ? 290 : 190
                                                                                        }), (0,
                                                                                            l.jsx)(u, {
                                                                                                img: x.Z,
                                                                                                discount: 5,
                                                                                                title: "GTA V",
                                                                                                price: 2e3,
                                                                                                category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                rating: 5,
                                                                                                width: U ? 290 : 240,
                                                                                                height: U ? 290 : 190
                                                                                            }), (0,
                                                                                                l.jsx)(u, {
                                                                                                    img: x.Z,
                                                                                                    discount: 5,
                                                                                                    title: "GTA V",
                                                                                                    price: 2e3,
                                                                                                    category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                    rating: 5,
                                                                                                    width: U ? 290 : 240,
                                                                                                    height: U ? 290 : 190
                                                                                                }), (0,
                                                                                                    l.jsx)(u, {
                                                                                                        img: x.Z,
                                                                                                        discount: 5,
                                                                                                        oldprice: 6500,
                                                                                                        title: "GTA V",
                                                                                                        price: 2e3,
                                                                                                        category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                        rating: 5,
                                                                                                        width: U ? 290 : 240,
                                                                                                        height: U ? 290 : 190
                                                                                                    }), (0,
                                                                                                        l.jsx)(u, {
                                                                                                            img: x.Z,
                                                                                                            discount: 5,
                                                                                                            title: "GTA V",
                                                                                                            price: 2e3,
                                                                                                            category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                            rating: 5,
                                                                                                            width: U ? 290 : 240,
                                                                                                            height: U ? 290 : 190
                                                                                                        }), (0,
                                                                                                            l.jsx)(u, {
                                                                                                                img: x.Z,
                                                                                                                discount: 5,
                                                                                                                title: "GTA V",
                                                                                                                price: 2e3,
                                                                                                                category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                                rating: 5,
                                                                                                                width: U ? 290 : 240,
                                                                                                                height: U ? 290 : 190
                                                                                                            }), (0,
                                                                                                                l.jsx)(u, {
                                                                                                                    img: x.Z,
                                                                                                                    discount: 5,
                                                                                                                    title: "GTA V",
                                                                                                                    price: 2e3,
                                                                                                                    category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                                    rating: 5,
                                                                                                                    width: U ? 290 : 240,
                                                                                                                    height: U ? 290 : 190
                                                                                                                }), (0,
                                                                                                                    l.jsx)(u, {
                                                                                                                        img: x.Z,
                                                                                                                        discount: 5,
                                                                                                                        title: "GTA V",
                                                                                                                        price: 2e3,
                                                                                                                        category: "PS5 Games fghgfhf fgjfdgj fghfdjgfdjhjdghjdghjdghjghjghjg",
                                                                                                                        rating: 5,
                                                                                                                        width: U ? 290 : 240,
                                                                                                                        height: U ? 290 : 190
                                                                                                                    })]
                                                                                }), {})
                                                            }), (0,
                                                                l.jsx)("div", {
                                                                    className: " py-4",
                                                                    children: (0,
                                                                        l.jsx)(k.Z, {
                                                                            spacing: 2,
                                                                            children: (0,
                                                                                l.jsx)(T.Z, {
                                                                                    count: 175,
                                                                                    shape: "rounded"
                                                                                })
                                                                        })
                                                                })]
                                                })]
                                    }), (0,
                                        l.jsxs)("div", {
                                            className: " text-2xl font-bold gap-3 flex flex-col",
                                            children: [(0,
                                                l.jsx)("h1", {
                                                    children: "You Might also Like "
                                                }), (0,
                                                    l.jsx)("div", {
                                                        children: (0,
                                                            l.jsx)(d.default, {
                                                                responsive: {
                                                                    superLargeDesktop: {
                                                                        breakpoint: {
                                                                            max: 4e3,
                                                                            min: 3e3
                                                                        },
                                                                        items: 5
                                                                    },
                                                                    desktop: {
                                                                        breakpoint: {
                                                                            max: 3e3,
                                                                            min: 1320
                                                                        },
                                                                        items: 5
                                                                    },
                                                                    tablet: {
                                                                        breakpoint: {
                                                                            max: 1320,
                                                                            min: 940
                                                                        },
                                                                        items: 4
                                                                    },
                                                                    mobilemid: {
                                                                        breakpoint: {
                                                                            max: 940,
                                                                            min: 640
                                                                        },
                                                                        items: 3
                                                                    },
                                                                    mobile: {
                                                                        breakpoint: {
                                                                            max: 640,
                                                                            min: 390
                                                                        },
                                                                        items: 2
                                                                    },
                                                                    mobilesmall: {
                                                                        breakpoint: {
                                                                            max: 390,
                                                                            min: 0
                                                                        },
                                                                        items: 2
                                                                    }
                                                                },
                                                                additionalTransfrom: 2,
                                                                arrows: !0,
                                                                autoPlay: !0,
                                                                autoPlaySpeed: 3e3,
                                                                centerMode: !1,
                                                                draggable: !0,
                                                                focusOnSelect: !1,
                                                                infinite: !0,
                                                                containerClass: "my-carousel",
                                                                keyBoardControl: !0,
                                                                minimumTouchDrag: 2,
                                                                renderButtonGroupOutside: !0,
                                                                renderDotsOutside: !1,
                                                                showDots: !1,
                                                                pauseOnHover: !0,
                                                                slidesToSlide: 1,
                                                                swipeable: !0,
                                                                sliderClass: "my-carousel",
                                                                className: " bg-white",
                                                                partialVisible: !1,
                                                                children: ei.map(e => (0,
                                                                    l.jsxs)("div", {
                                                                        className: " border border-1 mr-2  border-gray-300  rounded-lg",
                                                                        children: [(0,
                                                                            l.jsx)(r(), {
                                                                                height: 290,
                                                                                width: 290,
                                                                                src: e.image,
                                                                                alt: "Red Dead Redemption 2",
                                                                                style: {
                                                                                    borderTopRightRadius: 8,
                                                                                    borderTopLeftRadius: 8
                                                                                },
                                                                                className: " no-drag-img no-drag-text"
                                                                            }), (0,
                                                                                l.jsxs)("div", {
                                                                                    className: " flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start",
                                                                                    children: [(0,
                                                                                        l.jsxs)("div", {
                                                                                            className: " flex items-center justify-between w-full",
                                                                                            children: [(0,
                                                                                                l.jsx)("p", {
                                                                                                    className: " text-xs lg:text-sm text-gray-400",
                                                                                                    children: e.category
                                                                                                }), (0,
                                                                                                    l.jsxs)(n(), {
                                                                                                        className: " p-1 text-xs lg:text-sm text-black",
                                                                                                        href: "/",
                                                                                                        children: ["Details ", (0,
                                                                                                            l.jsx)(o.Z, {
                                                                                                                className: " text-xs text-black  ",
                                                                                                                fontSize: "small"
                                                                                                            })]
                                                                                                    })]
                                                                                        }), (0,
                                                                                            l.jsx)("h1", {
                                                                                                className: " text-bold text-sm text-black",
                                                                                                children: e.title
                                                                                            })]
                                                                                })]
                                                                    }, e.title))
                                                            })
                                                    })]
                                        })]
                            }), (0,
                                l.jsx)(j.Z, {}), (0,
                                    l.jsx)(f.default, {})]
                })
        }
    },
    5599: function (e, s, t) {
        "use strict";
        var l = t(7437)
            , i = t(2265)
            , a = t(1396)
            , r = t.n(a)
            , c = t(2303);
        s.Z = function (e) {
            let [s, t] = (0,
                i.useState)(!1);
            return (0,
                i.useEffect)(() => {
                    t(!0 === e.home)
                }
                    , [e.home]),
                (0,
                    l.jsx)("div", {
                        children: (0,
                            l.jsxs)(r(), {
                                className: "hover:underline flex gap-1 items-center",
                                href: "/".concat(e.path),
                                children: [s ? (0,
                                    l.jsx)(c.Z, {
                                        className: "text-black",
                                        color: "blue"
                                    }) : "", e.title]
                            })
                    })
        }
    },
    9150: function (e, s, t) {
        "use strict";
        var l = t(7437)
            , i = t(2265)
            , a = t(6691)
            , r = t.n(a);
        t(6337);
        var c = t(1396)
            , n = t.n(c)
            , d = t(9245)
            , x = t(867);
        s.Z = function (e) {
            let [s, t] = (0,
                i.useState)(!1)
                , [a, c] = (0,
                    i.useState)("")
                , [h, m] = (0,
                    i.useState)(0)
                , o = e.oldprice
                , j = e.discount;
            function g(e, s) {
                return 100 === s ? "free" : e - e * s / 100 + " DZD"
            }
            return (0,
                i.useEffect)(() => {
                    e.dicountprice || t(!0)
                }
                    , []),
                (0,
                    l.jsxs)("div", {
                        className: " boxshadow duration-200 flex flex-col justify-between   border border-1  relative border-gray-300  w-full rounded-lg",
                        children: [(0,
                            l.jsxs)("div", {
                                style: {
                                    borderTopRightRadius: 8
                                },
                                className: e.discount ? " bg-red-600 text-white px-4 py-1 absolute top-0 right-0" : " hidden",
                                children: [e.discount, e.discount ? "% OFF" : ""]
                            }), (0,
                                l.jsx)(r(), {
                                    height: e.height,
                                    width: e.width,
                                    src: e.img,
                                    alt: "Red Dead Redemption 2",
                                    style: {
                                        borderTopRightRadius: 8,
                                        borderTopLeftRadius: 8
                                    },
                                    className: " select-none nodrag"
                                }), (0,
                                    l.jsxs)("div", {
                                        className: " flex flex-col gap-1 select-none nodrag p-2 w-full justify-start items-start",
                                        children: [(0,
                                            l.jsxs)("div", {
                                                className: " flex items-center justify-between w-full",
                                                children: [e.category.length > 11 ? e.category.slice(0, 11) + "..." : e.category, (0,
                                                    l.jsx)(n(), {
                                                        className: e.price || e.oldprice ? " p-1 text-xs cursor-pointer text-black underline" : " p-1 text-xs cursor-no-drop text-black underline",
                                                        href: "/",
                                                        children: "See Details"
                                                    })]
                                            }), (0,
                                                l.jsxs)("h1", {
                                                    className: " text-bold text-md",
                                                    children: [" ", e.title.length > 20 ? e.title.slice(0, 16) + "..." : e.title]
                                                }), (0,
                                                    l.jsxs)("div", {
                                                        className: " flex flex-col gap-0 items-start w-full justify-between",
                                                        children: [(0,
                                                            l.jsxs)("div", {
                                                                className: " w-full items-center flex flex-col justify-start",
                                                                children: [(0,
                                                                    l.jsxs)("div", {
                                                                        className: " flex  w-full gap-0 items-start justify-start",
                                                                        children: [(0,
                                                                            l.jsxs)("div", {
                                                                                className: e.oldprice ? "flex items-center gap-2" : " hidden",
                                                                                children: [(0,
                                                                                    l.jsxs)("span", {
                                                                                        className: "text-gray-400 font-bold text-xs sm:text-sm line-through",
                                                                                        children: [e.oldprice ? e.oldprice : "", " "]
                                                                                    }), (0,
                                                                                        l.jsxs)("span", {
                                                                                            className: " text-blue-950 font-bold text-xs sm:text-sm",
                                                                                            children: ["  ", g(o, j) ? g(o, j) : "", " "]
                                                                                        })]
                                                                            }), (0,
                                                                                l.jsxs)("span", {
                                                                                    className: e.oldprice ? " hidden" : " text-blue-950 font-bold text-xs sm:text-sm",
                                                                                    children: ["  ", e.price ? e.price : "No price included", " ", e.price ? "DZD" : ""]
                                                                                })]
                                                                    }), (0,
                                                                        l.jsx)("div", {
                                                                            className: " w-full items-start",
                                                                            children: (0,
                                                                                l.jsx)(d.Z, {
                                                                                    sx: {
                                                                                        "& > legend": {
                                                                                            mt: 1
                                                                                        }
                                                                                    },
                                                                                    children: (0,
                                                                                        l.jsx)(x.Z, {
                                                                                            name: "read-only",
                                                                                            size: "small",
                                                                                            value: e.rating,
                                                                                            readOnly: !0
                                                                                        })
                                                                                })
                                                                        })]
                                                            }), (0,
                                                                l.jsx)("button", {
                                                                    className: e.price || e.oldprice ? " w-full text-xs nav-top-background lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded" : " w-full bg-gray-500 cursor-no-drop text-xs lg:text-sm px-1 md:px-3 lg:px-5 py-1 text-white rounded",
                                                                    children: "add to cart"
                                                                })]
                                                    })]
                                    })]
                    })
        }
    },
    6126: function () { },
    1752: function (e, s) {
        "use strict";
        s.Z = {
            src: "/_next/static/media/iptvcard.bc57981f.png",
            height: 512,
            width: 512,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqUlEQVR42mMQk9IXl9KXkDYQl4aQQAQSYQBiUUl9EQk9IENQTBfIBiKgNIOopB5QiaSsoZCYrrKqGVBUSs4QpIOBQToru6iltSs5Jae8og7IiIxOYmCQYwDi1LTcqqoGO3uvpOSsnNxiJ2c/BgZVBqCFbLxaDAzKjJya7HxAhhqfsI6EjCGDuLShpKyRtJyxlKwRkCElZyQhYwQUZIBQEtKGIFIGisSlDQHt4iDYv56EBQAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        }
    }
}, function (e) {
    e.O(0, [947, 962, 262, 898, 929, 47, 124, 238, 971, 458, 744], function () {
        return e(e.s = 2666)
    }),
        _N_E = e.O()
}
]);
