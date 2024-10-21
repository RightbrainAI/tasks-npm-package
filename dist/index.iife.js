var index = (function (exports) {
  'use strict';

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  /**
   * The IdentityClient class. Uses an Access Token to find the Org and Project Identity to which it belongs.
   */
  var IdentityClient = /*#__PURE__*/function () {
    function IdentityClient(apiHost) {
      _classCallCheck(this, IdentityClient);
      this.apiHost = apiHost;
    }

    /**
     * Returns the Org and Project ID for a given access token.
     * @param accessToken An access token
     * @return {object}
     */
    return _createClass(IdentityClient, [{
      key: "GetIdentity",
      value: (function () {
        var _GetIdentity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(accessToken) {
          var res, details;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (accessToken) {
                  _context.next = 2;
                  break;
                }
                throw new Error('cannot get identity, expected access token to not be empty');
              case 2:
                _context.next = 4;
                return fetch("https://".concat(this.apiHost, "/api/v1/whoami"), {
                  method: 'GET',
                  headers: {
                    Authorization: "Bearer ".concat(accessToken)
                  }
                });
              case 4:
                res = _context.sent;
                if (!(res.status !== 200)) {
                  _context.next = 7;
                  break;
                }
                throw new Error("cannot get identity, expected 200 but got ".concat(res.status, ": ").concat(res.statusText));
              case 7:
                _context.next = 9;
                return res.json();
              case 9:
                details = _context.sent;
                if (details.client) {
                  _context.next = 12;
                  break;
                }
                throw new Error('cannot get identity, expected response to contain client details');
              case 12:
                return _context.abrupt("return", details.client);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function GetIdentity(_x) {
          return _GetIdentity.apply(this, arguments);
        }
        return GetIdentity;
      }())
    }]);
  }();

  /**
   * The TokenClient class. Performs a Client Credentials OAuth2 Grant for an given Client ID and Secret.
   */
  var TokenClient = /*#__PURE__*/function () {
    function TokenClient(authHost, clientID, clientSecret) {
      _classCallCheck(this, TokenClient);
      this.authHost = authHost;
    }

    /**
     * Create an Access Token
     * @param clientID The OAuth Client App ID.
     * @param clientSecret The OAuth Client App Secret.
     * @return {string}
     */
    return _createClass(TokenClient, [{
      key: "Create",
      value: (function () {
        var _Create = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(clientID, clientSecret) {
          var res, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://".concat(this.authHost, "/oauth2/token"), {
                  method: 'POST',
                  headers: {
                    Authorization: "Basic ".concat(this.getBasicAuthorizationHeader(clientID, clientSecret))
                  },
                  body: this.getFormDataWithGrantType('client_credentials')
                });
              case 2:
                res = _context.sent;
                if (!(res.status !== 200)) {
                  _context.next = 5;
                  break;
                }
                throw new Error("cannot create token, expected 200 but got ".concat(res.status, ": ").concat(res.statusText));
              case 5:
                _context.next = 7;
                return res.json();
              case 7:
                data = _context.sent;
                if (data.access_token) {
                  _context.next = 10;
                  break;
                }
                throw new Error('cannot create token, expected response to contain access token');
              case 10:
                return _context.abrupt("return", data.access_token);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function Create(_x, _x2) {
          return _Create.apply(this, arguments);
        }
        return Create;
      }()
      /**
       * @private
       */
      )
    }, {
      key: "getBasicAuthorizationHeader",
      value: function getBasicAuthorizationHeader(clientID, clientSecret) {
        return btoa("".concat(clientID, ":").concat(clientSecret));
      }

      /**
       * @private
       */
    }, {
      key: "getFormDataWithGrantType",
      value: function getFormDataWithGrantType(grantType) {
        var formData = new FormData();
        formData.append('grant_type', grantType);
        return formData;
      }
    }]);
  }();

  var maxTaskInputLength = 128000;

  /**
   * The TasksClient class. Performs various Tasks CRUD operations against the Rightbrain AI API.
   */
  var TasksClient = /*#__PURE__*/function () {
    function TasksClient(tokenClient, identityClient, apiHost, clientID, clientSecret) {
      _classCallCheck(this, TasksClient);
      this.tokenClient = tokenClient;
      this.identityClient = identityClient;
      this.apiHost = apiHost;
      this.clientID = clientID;
      this.clientSecret = clientSecret;
    }

    /**
     * Creates a new Task
     * @param definition A task definition as required by the API
     * @return {object}
     */
    return _createClass(TasksClient, [{
      key: "Create",
      value: (function () {
        var _Create = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(definition) {
          var accessToken, response;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.tokenClient.Create(this.clientID, this.clientSecret);
              case 2:
                accessToken = _context.sent;
                _context.t0 = fetch;
                _context.next = 6;
                return this.getTaskCreateURL(accessToken);
              case 6:
                _context.t1 = _context.sent;
                _context.t2 = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(accessToken)
                  },
                  body: JSON.stringify(definition)
                };
                _context.next = 10;
                return (0, _context.t0)(_context.t1, _context.t2);
              case 10:
                response = _context.sent;
                if (!(response.status !== 200)) {
                  _context.next = 13;
                  break;
                }
                throw new Error("Error creating Task, expected status code of 200, but got ".concat(response.status, ": ").concat(response.statusText));
              case 13:
                _context.next = 15;
                return response.json();
              case 15:
                return _context.abrupt("return", _context.sent);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function Create(_x) {
          return _Create.apply(this, arguments);
        }
        return Create;
      }()
      /**
       * Runs a Task
       * @param taskID The ID of the Task to be ran.
       * @param taskInput The Task Input required by the Task.
       * @param taskRevision If supplied, the revision of the Task to be ran.
       * @return {object}
       */
      )
    }, {
      key: "Run",
      value: (function () {
        var _Run = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(taskID, taskInput, taskRevision) {
          var data, accessToken, response;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                data = JSON.stringify(taskInput);
                this.assertTaskInputSize(data);
                _context2.next = 4;
                return this.authClient.CreateToken();
              case 4:
                accessToken = _context2.sent;
                _context2.t0 = fetch;
                _context2.next = 8;
                return this.getTaskRunURL(accessToken, taskID, taskRevision);
              case 8:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  method: 'POST',
                  headers: {
                    Authorization: "Bearer ".concat(accessToken)
                  },
                  body: this.getTaskInputFormData(data)
                };
                _context2.next = 12;
                return (0, _context2.t0)(_context2.t1, _context2.t2);
              case 12:
                response = _context2.sent;
                if (!(response.status !== 200)) {
                  _context2.next = 15;
                  break;
                }
                throw new Error("Error running Task, expected status code of 200, but got ".concat(response.status, ": ").concat(response.statusText));
              case 15:
                _context2.next = 17;
                return response.json();
              case 17:
                return _context2.abrupt("return", _context2.sent);
              case 18:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
        function Run(_x2, _x3, _x4) {
          return _Run.apply(this, arguments);
        }
        return Run;
      }()
      /**
       * @private
       */
      )
    }, {
      key: "getTaskCreateURL",
      value: (function () {
        var _getTaskCreateURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(accessToken) {
          var identity;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getIdentity(accessToken);
              case 2:
                identity = _context3.sent;
                return _context3.abrupt("return", "https://".concat(this.apiHost, "/api/v1/org/").concat(identity.org_id, "/project/").concat(identity.project_id, "/task"));
              case 4:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function getTaskCreateURL(_x5) {
          return _getTaskCreateURL.apply(this, arguments);
        }
        return getTaskCreateURL;
      }()
      /**
       * @private
       */
      )
    }, {
      key: "getTaskRunURL",
      value: (function () {
        var _getTaskRunURL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(accessToken, taskID, taskRevision) {
          var identity, url;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getIdentity(accessToken);
              case 2:
                identity = _context4.sent;
                url = "https://".concat(this.apiHost, "/api/v1/org/").concat(identity.org_id, "/project/").concat(identity.project_id, "/task/").concat(taskID, "/run");
                if (taskRevision) {
                  url += "?revision=".concat(taskRevision);
                }
                return _context4.abrupt("return", url);
              case 6:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this);
        }));
        function getTaskRunURL(_x6, _x7, _x8) {
          return _getTaskRunURL.apply(this, arguments);
        }
        return getTaskRunURL;
      }()
      /**
       * @private
       */
      )
    }, {
      key: "assertTaskInputSize",
      value: function assertTaskInputSize(taskInput) {
        if (taskInput.length > maxTaskInputLength) {
          throw new Error("Error running task, max task input is ".concat(maxTaskInputLength, " but input was ").concat(taskInput.length));
        }
      }

      /**
       * @private
       */
    }, {
      key: "getTaskInputFormData",
      value: function getTaskInputFormData(taskInput) {
        var formData = new FormData();
        formData.append('task_input', taskInput);
        return formData;
      }

      /**
       * @private
       */
    }, {
      key: "getIdentity",
      value: (function () {
        var _getIdentity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(accessToken) {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (this.cachedIdentity) {
                  _context5.next = 4;
                  break;
                }
                _context5.next = 3;
                return this.identityClient.GetIdentity(accessToken);
              case 3:
                this.cachedIdentity = _context5.sent;
              case 4:
                return _context5.abrupt("return", this.cachedIdentity);
              case 5:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
        function getIdentity(_x9) {
          return _getIdentity.apply(this, arguments);
        }
        return getIdentity;
      }())
    }]);
  }();

  var defaultTasksClientOptions = {
    apiHost: 'app.rightbrain.ai',
    authHost: 'oauth.rightbrain.ai',
    clientID: null,
    clientSecret: null
  };

  /**
   * Creates a new Tasks Client
   * @param options An object of options to replace the defaults.
   * @return {object}
   */
  function NewDefaultTasksClient(options) {
    options = _objectSpread2(_objectSpread2({}, defaultTasksClientOptions), options);
    var identityClient = new IdentityClient(options.apiHost);
    var tokenClient = new TokenClient(options.authHost);
    return new TasksClient(tokenClient, identityClient, options.apiHost, options.clientID, options.clientSecret);
  }

  exports.NewDefaultTasksClient = NewDefaultTasksClient;

  return exports;

})({});
//# sourceMappingURL=index.iife.js.map
