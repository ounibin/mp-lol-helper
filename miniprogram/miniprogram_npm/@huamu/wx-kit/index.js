module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1704873952058, function(require, module, exports) {


function request ({
  method = 'GET',
  url,
  data
}, showLoading = false) {
  return new Promise((resolve, reject) => {
    showLoading && wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url,
      data,
      method,
      success (res) {
        resolve(res.data);
      },
      fail (err) {
        reject(err);
      },
      complete () {
        showLoading && wx.hideLoading();
      }

    });
  })
}

function get (url, data, showLoading = false) {
  return request({
    method: 'GET',
    url,
    data
  }, showLoading)
}
function post (url, data, showLoading = false) {
  return request({
    method: 'POST',
    url,
    data
  }, showLoading)
}

var request$1 = {
  get,
  post
};

var index = {
  request: request$1
};

module.exports = index;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1704873952058);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map