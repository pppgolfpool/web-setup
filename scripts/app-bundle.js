define('app',["exports", "aurelia-framework", "aurelia-fetch-client"], function (exports, _aureliaFramework, _aureliaFetchClient) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function App(http) {
      _classCallCheck(this, App);

      this.http = http;
      this.message = "styled message";
    }

    App.prototype.activate = function activate(params) {
      var queryDict = {};
      if (location.search) {
        location.search.substr(1).split("&").forEach(function (item) {
          queryDict[item.split("=")[0]] = item.split("=")[1];
        });
        console.log("logging query");
        console.log(queryDict);
        this.authUrl = queryDict['authUrl'];
        this.redirect = queryDict['redirect'];
        this.email = queryDict['userId'];
        this.code = queryDict['code'];
      } else {}
    };

    App.prototype.do = function _do() {
      var _this = this;

      if (!this.email || !this.password || !this.confirm) {
        return;
      }
      if (this.password !== this.confirm) {
        return;
      }

      this.http.fetch(this.authUrl + "/changepassword?userId=" + this.email + "&changeCode=" + this.code + "&newPassword=" + this.confirm).then(function (response) {
        return response.json().then(function (data) {
          window.location.replace(_this.redirect);
        });
      }, function (response) {
        return function (response) {
          return alert('unauthorized');
        };
      });
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: false,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"container\">\r\n    <h1>Setup your PPP Pool Account</h1>\r\n    <div class=\"col-xs-5\">\r\n      <p>Please enter a password for your account:</p>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"emailInput\">Sign-up Email:</label>\r\n          <h4><b>${email}</b></h4>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"passwordInput\">Password:</label>\r\n          <input id=\"passwordInput\" class=\"form-control\" type=\"password\" value.bind=\"password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmInput\">Confirm:</label>\r\n          <input id=\"confirmInput\" class=\"form-control\" type=\"password\" value.bind=\"confirm\">\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"button\" click.trigger=\"do()\" disabled.bind=\"!password || !confirm || password !== confirm\">Set Password</button>\r\n        <p if.bind=\"!password || !confirm || password !== confirm\">The entries must match to continue.</p>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map