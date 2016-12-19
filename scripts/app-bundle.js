define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);
  };
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  message\r\n  <!--<div class=\"container\">\r\n    <h1>Setup your PPP Pool Account</h1>\r\n    <div class=\"col-xs-5\">\r\n      <p>Please enter a password for your account:</p>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"emailInput\">Sign-up Email:</label>\r\n          <h4><b>${email}</b></h4>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"passwordInput\">Password:</label>\r\n          <input id=\"passwordInput\" class=\"form-control\" type=\"password\" value.bind=\"password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirmInput\">Confirm:</label>\r\n          <input id=\"confirmInput\" class=\"form-control\" type=\"password\" value.bind=\"confirm\">\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"button\" click.trigger=\"do()\" disabled.bind=\"!password || !confirm || password !== confirm\">Set Password</button>\r\n        <p if.bind=\"!password || !confirm || password !== confirm\">The entries must match to continue.</p>\r\n      </form>\r\n    </div>\r\n  </div>-->\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map