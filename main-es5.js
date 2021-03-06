(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/+4F":
    /*!************************************************!*\
      !*** ./src/app/get-paid/get-paid.component.ts ***!
      \************************************************/

    /*! exports provided: GetPaidComponent */

    /***/
    function F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetPaidComponent", function () {
        return GetPaidComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/pricing"];
      };

      var GetPaidComponent = /*#__PURE__*/function () {
        function GetPaidComponent(route, service) {
          _classCallCheck(this, GetPaidComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(GetPaidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
            this.LoginForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            }); // accordian

            $(document).ready(function () {
              $(".set > a").on("click", function () {
                if ($(this).hasClass("active")) {
                  $(this).removeClass("active");
                  $(this).siblings(".content").slideUp(200);
                  $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
                } else {
                  $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
                  $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
                  $(".set > a").removeClass("active");
                  $(this).addClass("active");
                  $(".content").slideUp(200);
                  $(this).siblings(".content").slideDown(200);
                }
              });
            });
          }
        }, {
          key: "onSubmitFirst",
          value: function onSubmitFirst() {
            var _this = this;

            if (!this.LoginForm.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  $('#apply').modal('show'); // this.service.succ(success.message)

                  _this.LoginForm.reset();
                } else {
                  _this.service.err(success.message);
                }
              }, function (error) {
                _this.service.err("Something went wrong");
              });
            }
          }
        }, {
          key: "onSubmitSecond",
          value: function onSubmitSecond() {
            var _this2 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm2.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm2.value);
              var apiData = {
                "email": this.LoginForm2.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this2.service.succ(success.message);

                  _this2.LoginForm2.reset();
                } else {
                  _this2.service.err(success.message);
                }
              }, function (error) {
                _this2.service.err("Something went wrong");
              });
            }
          }
        }]);

        return GetPaidComponent;
      }();

      GetPaidComponent.??fac = function GetPaidComponent_Factory(t) {
        return new (t || GetPaidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      GetPaidComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: GetPaidComponent,
        selectors: [["app-get-paid"]],
        decls: 303,
        vars: 4,
        consts: [[1, "BrandArea"], [1, "BrandBox"], [3, "formGroup"], ["formControlName", "email", "type", "text", "placeholder", "Email Id"], [3, "click"], [1, "WorkArea"], [1, "container"], [1, "WorkBox"], [1, "NewestArea1", 2, "margin-bottom", "30px"], ["src", "assets/images/coming.png"], ["src", "assets/images/Work-1.png"], ["src", "assets/images/Work-2.png"], ["src", "assets/images/Work-3.png"], [1, "WorkHeard"], [2, "text-align", "left"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [1, "ParticipatingArea"], [1, "row"], [1, "col-sm-6"], [1, "ParticipatingBox"], [1, "clientName"], [1, "faqarea"], [1, "col-sm-8", "col-sm-offset-2"], ["id", "accordion", 1, "panel-group"], [1, "panel"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse1", 1, "panel-heading"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["id", "collapse1", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse2", 1, "panel-heading"], ["id", "collapse2", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse3", 1, "panel-heading"], ["id", "collapse3", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse4", 1, "panel-heading"], ["id", "collapse4", 1, "panel-collapse", "collapse"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapse5", 1, "panel-heading"], ["id", "collapse5", 1, "panel-collapse", "collapse"], [1, "discord"], [1, "set", "set2", "boxs"], ["href", "javascript:void(0)", 1, "active"], [1, "fa", "fa-minus"], [1, "content", "content2", 2, "display", "block"], [1, "cont_full", "boxs"], ["href", "javascript:void(0)", 1, ""], [1, "fa", "fa-plus"], [1, "content", "content2", 2, "display", "none"], [1, "CheckArea"], [1, "CheckBox"], ["formControlName", "email", "type", "email", "placeholder", "Email Id"], ["href", "javascript:void(0)", 3, "click"], [3, "routerLink"], ["src", "assets/images/arrow.png"], ["id", "apply", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "ShareLink"], [1, "Small-Wrapper"], [1, "Dashboard-apply"], [1, "Header"], [1, "HeaderMiddle"], ["type", "button", "data-dismiss", "modal", 1, "close"], ["aria-hidden", "true", 1, "fa", "fa-times"], [1, "test-apply", 2, "padding-top", "40px", "padding-bottom", "25px"]],
        template: function GetPaidComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "High street brands want to hear from you! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Get paid to tell us what you think about websites for well known brands.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GetPaidComponent_Template_button_click_10_listener() {
              return ctx.onSubmitFirst();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "How it works ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Whether it\u2019s buying a pair of shoes or booking an airline ticket, brands want to know how consumers find the experience online. And that\u2019s where you come in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "We match brands to participants to get their feedback on the products and services they use. Participants complete an online test and give feedback via a video link. Tests last between 20 \u2013 60 minutes and you\u2019ll be paid between \xA35 - \xA350 per test. Easy money!. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "1. Sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Enter your email and we\u2019ll send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " you a quick survey to find out a bit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " more about you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "2. Leave a review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "We\u2019ll match you to available jobs. Tests are super simple to complete and we\u2019ll send you instructions to get going. Watch a demo.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "3. Get paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Once you complete a test, you\u2019ll ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " receive payment into your bank ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " account the next working day. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "All you need");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Internet access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " You will need access to a desktop or laptop computer to complete tests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Enthusiasm!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Be comfortable sharing your opinions as feedback is required throughout the test. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " The more the better! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "What our users think");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Join our network today. Sign up here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "We wanted to see how customers interacted with our website and what we could do to improve the layout. Online UserTesting was an easy way to do that. The team were very helpful and the software worked well - recommended. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Craig F. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Product Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Online UserTesting is a great idea for businesses looking for reliable feedback from the perspective of their customers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Kendall C.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Product Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "We loved Online UserTesting! We\u2019re a small business and we were looking for an inexpensive way to see how customers used our new website. We\u2019re glad we found this option. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Morgan A. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "UX Researcher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Easy to get started and share [with users]. Good report quality and level of detail. We were very pleased overall and we\u2019d use again.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Tom S.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Marketing & Sales Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Frequently asked questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "What do I need to get started?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "A laptop or desktop computer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "A stable internet connection");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](136, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "A microphone and camera, either built-in or external");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "The ability to download our screen recorder, this is a Chrome plugin so you must be able to download Chrome on your device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "You must be at least 18 years old");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "The ability to clearly share thoughts in English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "How do you apply? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "You just need to enter your email address at the top of this page. We will then send you a practice test to complete. Once you\u2019re approved you can start taking real tests and start earning cash!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "How do you pay participants?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "We pay participants via PayPal. You will receive your payment 14 days after completing a test. We cannot pay participants instantly as we need to make sure that they have completed the test properly.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "How much money can I make?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "The number of opportunities you receive will depend on your profile and the number of companies looking for participants like you. Taking part in tests is an easy way to make some extra money.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Additional Questions?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Please email apply@onlineuserteting if you have any questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Do I have to pay to join your panel?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "i", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](196, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "How much do I get paid and when will I be paid?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](201, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Test participants get paid \xA310 for each test they complete. A typical test consists of a 20-minute recording. Payments are made to participants within 14 days.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "How soon will I be able to start taking part in tests? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](210, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "When your application is approved we will add your details to our panel and you will start receiving email invitations to take part in tests.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](218, "What kind of device do I need?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](219, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "A laptop or desktop computer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "Do I need a microphone and camera to take part in tests?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](228, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Yes. To take part participants must be happy to create a short video (using our plugin) to do this successfully you must have access to a microphone and camera. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "To take part successfully do I need to download anything?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](237, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Yes. You will need to download our screen recorder onto your computer. It is available at the Chrome store. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "Is PayPal the only way to get paid?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](246, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](250, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](251, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Are my payments taxed?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "No, Online UserTesting does not deduct tax from your payment. You are responsible for determining and paying your tax liabilities.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "a", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "How do I apply to be a test participant?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "i", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "The application process is quick and easy. Just complete a short practice test and share some basic demographic information so that we can invite you to take part in relevant tests. Please click here to apply to join our panel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Try Online UserTesting Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "aside", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](278, "input", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "a", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function GetPaidComponent_Template_a_click_279_listener() {
              return ctx.onSubmitSecond();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](283, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](298, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, " your request successfully submitted to us, our team will contact you very soon ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](302, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](269);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1wYWlkL2dldC1wYWlkLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GetPaidComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-get-paid',
            templateUrl: './get-paid.component.html',
            styleUrls: ['./get-paid.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Done Projects\usertesting-web\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1W4x":
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function W4x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.provider */
      "FfXl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RegisterComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Full name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Full name must be minmum 10 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Full name must be maximum 30 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Full name can be only alphabets with space ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please enter valid email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Organization name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Organization name must be minmum 10 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Organization name must be maximum 30 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please Enter Valid password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RegisterComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please accept terms & conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/product"];
      };

      var _c2 = function _c2() {
        return ["/help"];
      };

      var _c3 = function _c3() {
        return ["/login"];
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(appProvider, route, service, activeRoute) {
          _classCallCheck(this, RegisterComponent);

          this.appProvider = appProvider;
          this.route = route;
          this.service = service;
          this.activeRoute = activeRoute;
          this.formInvalid = false;
          this.submitted = false;
          this.type = 'password';
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z ]*$/)]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
              organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')]),
              termsCondition: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
            this.activeRoute.queryParams.subscribe(function (params) {
              console.log(params);

              if (params && params.invitationId) {
                _this3.invitationId = params.invitationId;
              }

              if (params && params.orgId) {
                _this3.orgId = params.orgId;
              }

              if (params && params.orgName) {
                _this3.orgName = params.orgName;
              }

              if (params && params.source) {
                _this3.source = params.source;
              }

              if (params && params.email) {
                _this3.LoginForm.patchValue({
                  email: params.email
                });
              }

              if (params && params.orgName) {
                _this3.LoginForm.patchValue({
                  organization: params.orgName
                });
              } // this.OrderForm.patchValue({
              //   asm_code: item['ASM Code'],
              //   rsm_code: item['RSM Code'],
              //   status: 0,
              //   zone: item['Zone'],
              //   salesPersonCode: item['Code'],
              //   salesPersonName: item['Name'] == 'Self' ? this.loginUserData["Name"] : item['Name']
              // });
              // this.token=params.token
              // this.param1 = params['param1'];
              // this.param2 = params['param2'];

            });
          } // get f() {
          //   return this.LoginForm.controls;
          // }

        }, {
          key: "onView",
          value: function onView() {
            this.type = this.type == 'password' ? 'text' : 'password';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            this.submitted = true;

            if (this.LoginForm.invalid) {
              this.formInvalid = true; // this.service.sweetAlert('fghjk')

              return;
            } else {
              this.formInvalid = false;
              console.log(this.LoginForm.value);
              var apiData = {
                "fullName": this.LoginForm.value.fullName,
                "email": this.LoginForm.value.email,
                "password": this.LoginForm.value.password,
                "organisation": this.LoginForm.value.organization
              };

              if (this.source) {
                apiData['source'] = this.source;
              }

              if (this.invitationId) {
                apiData['invitationId'] = this.invitationId;
              }

              if (this.orgId) {
                apiData['orgId'] = this.orgId;
              }

              this.service.postApi('web/userSignup', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  localStorage.setItem('userTEmail', success.result.email);
                  localStorage.setItem('token', success.result.authToken);
                  _this4.appProvider.current.adminData = success.result;
                  localStorage.setItem('userTesting', JSON.stringify(success.result));
                  localStorage.setItem("userTestingWebLog", 'yeppp');

                  _this4.route.navigate(['/user', 'verification']);

                  if (success.welcome) {
                    _this4.service.succ(success.message);
                  } //  this.service.sweetAlert('User Registration Successfull')

                } else {
                  // this.service.sweetAlert(success.message)
                  _this4.service.err(success.message);
                }
              }, function (error) {
                // this.service.sweetAlert("Something went wrong")
                _this4.service.err("Something went wrong");
              });
              this.service.showSpinner();
            }
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.??fac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_provider__WEBPACK_IMPORTED_MODULE_2__["AppProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      RegisterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 79,
        vars: 22,
        consts: [[1, "Header", "Header-3"], [1, "navbar"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#Menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand", 3, "routerLink"], ["id", "Menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [3, "routerLink"], [1, "LoginArea"], [1, "LoginBox", 2, "margin", "70px 0 0"], ["src", "assets/images/Login.png"], [3, "formGroup"], [1, "form-group"], ["formControlName", "fullName", "type", "text", "placeholder", "Full Name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "email", "type", "text", "placeholder", "Email Address", 1, "form-control"], ["formControlName", "organization", "type", "text", "placeholder", "Organization Name ", 1, "form-control"], ["formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "type"], [1, "Icon", 3, "click"], ["src", "assets/images/eye.png"], [1, "switch"], ["formControlName", "termsCondition", "type", "checkbox", "checked", ""], [1, "slider", "round"], [3, "click"], [1, "ModalBox"], ["id", "SuccessfullModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "Successfull"], ["href", "javascript:void(0);", "data-dismiss", "modal", 1, "CloseModal"], ["src", "assets/images/verfiy.png"], [1, "text-danger"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Signin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Hey, Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Tell us a little about yourself");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, RegisterComponent_div_39_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, RegisterComponent_div_40_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, RegisterComponent_div_41_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, RegisterComponent_div_42_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, RegisterComponent_div_45_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, RegisterComponent_div_46_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, RegisterComponent_div_49_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, RegisterComponent_div_50_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, RegisterComponent_div_51_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_span_click_54_listener() {
              return ctx.onView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, RegisterComponent_div_56_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, RegisterComponent_div_57_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Use between 8-16 characters with a mix of letters, numbers & symbols");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, RegisterComponent_div_65_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RegisterComponent_Template_button_click_66_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "You have registered successfully!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("fullName").hasError("required") && ctx.LoginForm.get("fullName").dirty || ctx.formInvalid && !ctx.LoginForm.value.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.LoginForm.get("fullName").hasError("pattern") && ctx.LoginForm.get("fullName").hasError("minlength") && ctx.LoginForm.get("fullName").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.LoginForm.get("fullName").hasError("pattern") && ctx.LoginForm.get("fullName").hasError("maxlength") && ctx.LoginForm.get("fullName").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("fullName").hasError("pattern") && ctx.LoginForm.get("fullName").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("email").hasError("required") && ctx.LoginForm.get("email").dirty || ctx.formInvalid && !ctx.LoginForm.value.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("email").hasError("pattern") && ctx.LoginForm.get("email").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("organization").hasError("required") && ctx.LoginForm.get("organization").dirty || ctx.formInvalid && !ctx.LoginForm.value.organization);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("organization").hasError("minlength") && ctx.LoginForm.get("organization").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("organization").hasError("maxlength") && ctx.LoginForm.get("organization").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("password").hasError("required") && ctx.LoginForm.get("password").dirty || ctx.formInvalid && !ctx.LoginForm.value.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("password").hasError("pattern") && ctx.LoginForm.get("password").dirty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("termsCondition").hasError("required") && ctx.LoginForm.get("termsCondition").dirty || ctx.formInvalid && !ctx.LoginForm.value.termsCondition);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
          }]
        }], function () {
          return [{
            type: _app_provider__WEBPACK_IMPORTED_MODULE_2__["AppProvider"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6Eq7":
    /*!******************************************!*\
      !*** ./src/app/demos/demos.component.ts ***!
      \******************************************/

    /*! exports provided: DemosComponent */

    /***/
    function Eq7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemosComponent", function () {
        return DemosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/pricing"];
      };

      var DemosComponent = /*#__PURE__*/function () {
        function DemosComponent(route, service) {
          _classCallCheck(this, DemosComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(DemosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
            this.LoginForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
          }
        }, {
          key: "onSubmitFirst",
          value: function onSubmitFirst() {
            var _this5 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this5.service.succ(success.message);

                  _this5.LoginForm.reset();
                } else {
                  _this5.service.err(success.message);
                }
              }, function (error) {
                _this5.service.err("Something went wrong");
              });
            }
          }
        }, {
          key: "onSubmitSecond",
          value: function onSubmitSecond() {
            var _this6 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm2.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm2.value);
              var apiData = {
                "email": this.LoginForm2.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this6.service.succ(success.message);

                  _this6.LoginForm2.reset();
                } else {
                  _this6.service.err(success.message);
                }
              }, function (error) {
                _this6.service.err("Something went wrong");
              });
            }
          }
        }]);

        return DemosComponent;
      }();

      DemosComponent.??fac = function DemosComponent_Factory(t) {
        return new (t || DemosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      DemosComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DemosComponent,
        selectors: [["app-demos"]],
        decls: 96,
        vars: 3,
        consts: [[1, "DemosArea"], [1, "DemosContent"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "DemosContentLeft"], [1, "NewestArea1"], ["src", "assets/images/coming.png"], [1, "col-sm-12", "demoPadding", 2, "padding-top", "40px"], [1, "DemosContentRight"], [2, "padding-bottom", "20px", "padding-top", "10px"], [1, ""], [1, "DemosContentRight", 2, "padding-bottom", "50px"], [2, "padding-bottom", "20px"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [1, "NewestArea"], [1, "col-sm-6", "col-sm-offset-3"], [1, "CheckArea"], [1, "CheckBox"], [3, "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "Email Id"], ["href", "javascript:void(0)", 3, "click"], [3, "routerLink"], ["src", "assets/images/arrow.png"]],
        template: function DemosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Online UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Whatever your industry, getting feedback about your website lets you improve user experience, boost customer loyalty and drive sales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Whether it\u2019s buying a product, booking an airline ticket or signing up for a new service, customers can review the process with our Online UserTesting software. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Participants access the test via their desktop, and our easy-to-use solution records every step of their journey. Watch how users navigate the test and listen to their feedback as they go. We can manage the process for you, or you can just use our software. Whatever works for you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "section", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "We\u2019ll take care of everything ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Talk to us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Brief us on what you want tested ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Gather users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " We\u2019ll reach out to your existing customers or recruit new ones based on your target user profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Click and connect ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " We\u2019ll share personalised instructions and a link with each participant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Get the results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " You\u2019ll receive a video link for each user on your personal dashboard once each test is complete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Evaluation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " We\u2019ll provide you with a contact report at the end of the project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h3", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Use our software only ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Gather users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, " Recruit the users you want and use our software to issue invitations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Click and connect ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Share a personalised link with users to begin the test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Get the results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " You\u2019ll receive a video link for each user on your personal dashboard once each test is complete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Newest videos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Latest feature announcements and various other demos.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Try Online UserTesting Now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "aside", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DemosComponent_Template_a_click_90_listener() {
              return ctx.onSubmitSecond();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9zL2RlbW9zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DemosComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-demos',
            templateUrl: './demos.component.html',
            styleUrls: ['./demos.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6XR0":
    /*!****************************************!*\
      !*** ./src/app/news/news.component.ts ***!
      \****************************************/

    /*! exports provided: NewsComponent */

    /***/
    function XR0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
        return NewsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var NewsComponent = /*#__PURE__*/function () {
        function NewsComponent() {
          _classCallCheck(this, NewsComponent);
        }

        _createClass(NewsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewsComponent;
      }();

      NewsComponent.??fac = function NewsComponent_Factory(t) {
        return new (t || NewsComponent)();
      };

      NewsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NewsComponent,
        selectors: [["app-news"]],
        decls: 17,
        vars: 0,
        consts: [[1, "NewsArea"], [1, "NewsHead"], [1, "NewsBody"], [1, "NewsBox"], [1, "container"]],
        template: function NewsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "What's new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Coming Soon ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Right now respondents can complete your tests on a laptop or desktop computer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "We will be launching our app soon so that respondents can complete tests on any platform, including mobile and tablet devices. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.??fac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 21,
        vars: 0,
        consts: [[1, "AboutArea"], [1, "container"], [1, "AboutBox"], [1, "NewestArea1", 2, "margin-bottom", "30px"], ["src", "assets/images/coming.png"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Online UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Our mission is to tame the world wide web and make it accessible for digital natives and digital immigrants.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "We view the internet as an essential element of modern life. Ensuring that it is accessible to everyone makes the web a more friendly place. Our testing platform helps you to understand your users and provides important insights into the ways you can improve your website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "We are passionate about accessibility and can help you to recruit people with physical, cognitive and mental health difficulties to test your website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Online UserTesting is making the world wide web a more friendly place one URL at a time!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "If you have ideas about how we can help your team or improve the service that we offer please send an email to: hello@onlineusertesting.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "867t":
    /*!*****************************************************!*\
      !*** ./src/app/user/about-us/about-us.component.ts ***!
      \*****************************************************/

    /*! exports provided: AboutUsComponent */

    /***/
    function t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
        return AboutUsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "k9B/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/user", "Organization-setting"];
      };

      var _c1 = function _c1() {
        return ["/user", "Organization-member"];
      };

      var _c2 = function _c2() {
        return ["active"];
      };

      var _c3 = function _c3() {
        return ["/user", "Credit"];
      };

      var _c4 = function _c4() {
        return ["/user", "Organization-billing"];
      };

      var AboutUsComponent = /*#__PURE__*/function () {
        function AboutUsComponent() {
          _classCallCheck(this, AboutUsComponent);
        }

        _createClass(AboutUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutUsComponent;
      }();

      AboutUsComponent.??fac = function AboutUsComponent_Factory(t) {
        return new (t || AboutUsComponent)();
      };

      AboutUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AboutUsComponent,
        selectors: [["app-about-us"]],
        decls: 47,
        vars: 12,
        consts: [[1, "Dashboard"], [1, "SidenavBar"], [1, "active"], [3, "routerLink"], ["src", "assets/images/Sidenav-6.png"], ["src", "assets/images/Sidenav-7.png"], [3, "routerLinkActive"], ["src", "assets/images/price-tag.svg", 2, "filter", "brightness(0) invert(1)", "width", "28px", "height", "36px", "margin-left", "12px"], ["src", "assets/images/Sidenav-8.png"], [1, "WrapperArea"], [1, "WrapperBox"], [1, "BackButton", 3, "routerLink"], ["src", "assets/images/arrow.png"], [1, "Title"], [1, "SettingArea", "SettingAreaContact"], ["href", "mailto:hello@onlineusertesting.com"]],
        template: function AboutUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Credit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Billing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Online UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Our mission is to tame the world wide web and make it accessible for digital natives and digital immigrants.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "We view the internet as an essential element of modern life. Ensuring that it is accessible to everyone humanises the web. Our testing platform helps you to understand your users and provides important insights into the ways you can improve your website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "We are passionate about accessibility and can help you to recruit people with physical, cognitive and mental health difficulties to test your website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Online UserTesting is making the world wide web a more friendly place one URL at a time! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "If you have ideas about how we can help your team or improve the service that we offer please send an email to: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "hello@onlineusertesting.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about-us',
            templateUrl: './about-us.component.html',
            styleUrls: ['./about-us.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9lXE":
    /*!**********************************************!*\
      !*** ./src/app/pricing/pricing.component.ts ***!
      \**********************************************/

    /*! exports provided: PricingComponent */

    /***/
    function lXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
        return PricingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      function PricingComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r1.creditRequired, " Credit ");
        }
      }

      var PricingComponent = /*#__PURE__*/function () {
        function PricingComponent(route, service) {
          _classCallCheck(this, PricingComponent);

          this.route = route;
          this.service = service;
          this.priceList = [];
        }

        _createClass(PricingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this7 = this;

            this.service.getApi('web/findAllPrice').subscribe(function (success) {
              console.log(success);

              if (success.response == true) {
                _this7.priceList = success.result;
              } else {
                _this7.service.err(success.message);
              }
            }, function (error) {
              _this7.service.err("Something went wrong"); // this.service.sweetAlert("Something went wrong")
              //this.service.err("Something went wrong")

            });
            this.service.showSpinner();
          }
        }, {
          key: "onBuy",
          value: function onBuy() {
            this.loginUserData = JSON.parse(localStorage.getItem('userTesting'));

            if (this.loginUserData) {
              this.route.navigate(['/user', 'payment-gatway']);
            } else {
              this.service.err('Please login first before buy Credits');
            }
          }
        }]);

        return PricingComponent;
      }();

      PricingComponent.??fac = function PricingComponent_Factory(t) {
        return new (t || PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      PricingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PricingComponent,
        selectors: [["app-pricing"]],
        decls: 83,
        vars: 1,
        consts: [[1, "PricingArea"], [1, "container"], [1, "PricingBox"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "AnnulArea"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [1, "FAQPricing"], [1, "row"], [1, "col-sm-6"], [1, "FAQPricingBox"]],
        template: function PricingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\xA3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " 59");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Price per Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, PricingComponent_li_15_Template, 4, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PricingComponent_Template_button_click_16_listener() {
              return ctx.onBuy();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Buy Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "You can add an unlimited number of users (collaborators/observers) to your account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Credits in your account do not have an expiry date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "You can test an unlimited number of websites \u2013 test yours and test your competitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Ask respondents an unlimited number of questions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Create an unlimited number of Highlight Reels per test and highlight important feedback for your team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Pricing FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "What billing options do you offer?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Online UserTesting is a pay as you go service. We plan to start offering a subscription service and monthly billing in the near future.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Is there a trial of Online Usertesting? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "No, we do not offer trials to our customers as we offer a pay as you go service.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Your data security is our priority? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Keeping your information secure is our top priority and we protect your data through advanced security features such as Single Sign On (SSO/SAML 2.0), encryption at rest and data retention. Your IT teams can get in touch with us to ask any questions about data security. Email any questions to: it@onlineusertesting.com .");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Can our team share one account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Yes, as we offer a pay as you go service we charge per user. You are therefore welcome to share your account with multiple team members.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "What\u2019s the difference between \u201Ccollaborators\u201D and \u201Cobservers\u201D? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Collaborators are members of your team who can watch and comment on the tests in real-time. They have full access to the dashboard and overall test process alongside the project lead. Observers have more limited access to your account and can just watch and comment on the tests. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "What happens to my recordings and test data if I don\u2019t use my account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "We offer a pay as you go service. However, if your account is inactive for a year you will no longer be able to access your recordings and test data from the dashboard. Please ensure that you export and save all of your recordings onto your own personal desktop or device if you plan to stop using our service. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.priceList);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PricingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pricing',
            templateUrl: './pricing.component.html',
            styleUrls: ['./pricing.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _c1 = function _c1() {
        return ["/product"];
      };

      var _c2 = function _c2() {
        return ["/pricing"];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(route, service) {
          _classCallCheck(this, HomeComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            }); // var attachment, file;
            // file = new Buffer('', 'binary');
            // attachment = file.toString('base64');
            // AWS.config.credentials = new AWS.Credentials({
            //   accessKeyId: 'AKIA6BZKETTXT4J3GXWY', secretAccessKey: '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'
            // });
            // const params = {
            //   Bucket: 'petparenting-node',
            //   Key: `Vaibhav's Resume Update.pdf`
            // };
            // let s3 = new AWS.S3();
            // s3.getObject(params, function (err, data) {
            //   if (err) {
            //     console.error(err); // an error occurred
            //   } else {
            //     var attachment, file;
            //     file = new Buffer(data.Body, 'binary');
            //     attachment = file.toString('base64');
            //     // console.log(string);
            //   }
            // });

            var xhttp = new XMLHttpRequest();
            xhttp.open('GET', "http://petparenting-node.s3.ap-south-1.amazonaws.com/1582695790612-image.jpg", true); // xhttp.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');
            // xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            xhttp.send();

            xhttp.onreadystatechange = function () {
              {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                  console.log(xhttp.response); // if(format == 'pdf'){

                  var attachment, file;
                  file = new Buffer(xhttp.response, 'binary');
                  attachment = file.toString('base64'); // console.log(attachment)
                  // let a = convertToBase64(xhttp.response)
                  // console.log(a)
                  // let b = btoa(unescape(encodeURIComponent(xhttp.response)))
                  // console.log(b)

                  var blob = new Blob([xhttp.response]);
                  var reader = new FileReader();

                  reader.onload = function (event) {
                    var base64 = reader.result; // const base64 =  event.target.result

                    console.log(base64); // this.qzPrinting( format, a, printType )
                  };

                  reader.readAsDataURL(blob); // const converted = this.toBinary(xhttp.response);
                  // const encoded = btoa(converted);
                  // console.log(encoded);
                  // this.qzPrinting( format, xhttp.response, printType )
                } else {
                  console.log('error in print Data');
                }
              }
              ;
            };
          }
        }, {
          key: "onSubmitSecond",
          value: function onSubmitSecond() {
            var _this8 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm2.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm2.value);
              var apiData = {
                "email": this.LoginForm2.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this8.service.succ(success.message);

                  _this8.LoginForm2.reset();
                } else {
                  _this8.service.err(success.message);
                }
              }, function (error) {
                _this8.service.err("Something went wrong");
              });
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 288,
        vars: 21,
        consts: [[1, "SliderArea"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "SliderLeft"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [3, "routerLink"], [1, "fa", "fa-angle-right"], [1, "SliderRight"], ["src", "assets/images/Slide-1.png"], [1, "TestingArea"], [1, "container-fluid"], [1, "TestingLeft"], [1, "col-sm-6", "padding_none"], [1, "TestingRight"], ["src", "assets/images/Desktop2.png"], [1, "FastArea"], [1, "FastBox"], ["src", "assets/images/Fasrt-1.png"], ["src", "assets/images/Fasrt-2.png"], ["src", "assets/images/Fasrt-3.png"], ["src", "assets/images/Fasrt-4.png"], [1, "col-sm-12"], [1, "KnowArea"], [1, "col-sm-5"], [1, "KnowLeft"], [1, "col-sm-7", "padding_none"], [1, "KnowRight"], ["src", "assets/images/user.png"], [1, "TrustArea"], ["id", "TrustSlider", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#TrustSlider", "data-slide-to", "0", 1, "active"], ["data-target", "#TrustSlider", "data-slide-to", "1", 1, ""], [1, "carousel-inner"], [1, "item", "active"], [1, "TrustBox"], [1, "item", "next"], ["href", "#TrustSlider", "data-slide", "prev", 1, "left", "carousel-control"], [1, "fa", "fa-angle-left"], [1, "sr-only"], ["href", "#TrustSlider", "data-slide", "next", 1, "right", "carousel-control"], [1, "SupportArea"], [1, "SupportBox"], ["src", "assets/images/Support-1.png"], [1, "clear"], ["src", "assets/images/Support-2.png"], ["src", "assets/images/Support-3.png"], ["src", "assets/images/Support-4.png"], [1, "CheckArea"], [1, "CheckBox"], [3, "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "Email Id"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/images/arrow.png"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Quick and Easy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Online Unmoderated UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Online UserTesting is a tool that is designed for User Experience researchers who would like to improve their websites by conducting unmoderated user tests with their customers or prospects.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Find out how customers use your website when browsing or buying products or services. Listen to their feedback and find out what\u2019s working and what isn\u2019t. Use our in-house recruiters to access hand picked UK based participants or recruit and use your own respondents.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Boost sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Improve loyalty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Beat competitors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Run a usability Test ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "See All Features ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Online UserTesting on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Desktops or Laptops");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Use our extension and test your website on desktops or laptops. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Our tool provides an audio video of a real person using your website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " You can find testers on our platform or you can use your own respondents. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Online UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Get started quickly");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Find out more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Gather users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, " We\u2019ll reach out to your existing customers or recruit new ones based on your target user profile. Or, use our software and manage outreach in-house ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](80, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Click and connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Share a personalised link with users to begin the test ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Get the results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Receive a video link for each participant, showing users navigating the test and giving their feedback. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Online UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Find out more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Users complete the test at a time to suit them ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Receive video recordings for each user ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Access files from your personal dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Record notes so you don\u2019t miss a thing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Record highlights so critical issues can be highlighted");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Use our In-house Recruiters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Find out more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Respondents who match your project spec");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "UK and international panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "UK based Project Managers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "GDPR compliant recruitment practices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Respondents also available for accessibility testing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "What makes us special");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Find out more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Fuss-free ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, " Quick and easy-to-use software via link sharing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](155, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Note-taking ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, " Take notes on recordings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Teamwork ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " Share video files with colleagues or watch together live");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](165, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "Fast results ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " Receive recordings within 24 hours ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Great service ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, " A team trusted by brands worldwide ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "See More ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](179, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](187, "Use Our In-house Recruiters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, "Access hand picked UK based participants or recruit and use your own respondents ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "More about Online UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](192, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](195, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "WHO TRUST US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "Testimonials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "ol", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](206, "li", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](207, "li", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "Awesome respondents! As a team we were fed up of seeing professional respondents again and again and again. This platform allows you to observe genuine users using your website in their home environment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Krystal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "UX Researcher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](219, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "Online UserTesting is really straightforward to use and we like the flexibility of their pay as you go pricing. Their approach to respondent recruitment is also refreshing.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Steven");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Product Manager");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](226, "span", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](228, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "a", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](230, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "span", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](238, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Dedicated Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](242, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, " Team ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](244, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](248, "img", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "Secure Payment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](252, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](256, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "GDPR Compliant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](260, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](264, "img", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "Excellent ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](268, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, " Respondents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](270, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](271, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "Try Online UserTesting Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "aside", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "input", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "a", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_Template_a_click_282_listener() {
              return ctx.onSubmitSecond();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](286, "img", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](17, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c2));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CWLB":
    /*!********************************************************************!*\
      !*** ./src/app/organization-login/organization-login.component.ts ***!
      \********************************************************************/

    /*! exports provided: OrganizationLoginComponent */

    /***/
    function CWLB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrganizationLoginComponent", function () {
        return OrganizationLoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function OrganizationLoginComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Full name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_42_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please Enter valid email id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrganizationLoginComponent_div_42_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, OrganizationLoginComponent_div_42_div_2_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.email.errors.pattern);
        }
      }

      function OrganizationLoginComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Organization name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_50_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_50_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please Enter Valid password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function OrganizationLoginComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, OrganizationLoginComponent_div_50_div_1_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, OrganizationLoginComponent_div_50_div_2_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.password.errors.pattern);
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/product"];
      };

      var _c2 = function _c2() {
        return ["/help"];
      };

      var _c3 = function _c3() {
        return ["/login"];
      };

      var OrganizationLoginComponent = /*#__PURE__*/function () {
        function OrganizationLoginComponent(route, service, activeRoute) {
          _classCallCheck(this, OrganizationLoginComponent);

          this.route = route;
          this.service = service;
          this.activeRoute = activeRoute;
          this.formInvalid = false;
          this.submitted = false;
          this.type = 'password';
        }

        _createClass(OrganizationLoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)]),
              organization: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
            this.activeRoute.queryParams.subscribe(function (params) {
              console.log(params);

              if (params && params.invitationId) {
                _this9.invitationId = params.invitationId;
              }

              if (params && params.orgId) {
                _this9.orgId = params.orgId;
              }

              if (params && params.orgName) {
                _this9.orgName = params.orgName;
              }

              if (params && params.source) {
                _this9.source = params.source;
              }

              if (params && params.email) {
                _this9.LoginForm.patchValue({
                  email: params.email
                });
              }

              if (params && params.orgName) {
                _this9.LoginForm.patchValue({
                  organization: params.orgName
                });
              }

              if (params && params.type) {
                _this9.orgType = params.type; //   this.LoginForm.patchValue({
                //     type: params.type
                // });
              } // this.OrderForm.patchValue({
              //   asm_code: item['ASM Code'],
              //   rsm_code: item['RSM Code'],
              //   status: 0,
              //   zone: item['Zone'],
              //   salesPersonCode: item['Code'],
              //   salesPersonName: item['Name'] == 'Self' ? this.loginUserData["Name"] : item['Name']
              // });
              // this.token=params.token
              // this.param1 = params['param1'];
              // this.param2 = params['param2'];

            });
          }
        }, {
          key: "onView",
          value: function onView() {
            this.type = this.type == 'password' ? 'text' : 'password';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this10 = this;

            this.submitted = true;

            if (this.LoginForm.invalid) {
              this.formInvalid = true; // this.service.sweetAlert('fghjk')

              return;
            } else {
              this.formInvalid = false;
              console.log(this.LoginForm.value);
              var apiData = {
                "fullName": this.LoginForm.value.fullName,
                "email": this.LoginForm.value.email,
                "password": this.LoginForm.value.password,
                "organisation": this.LoginForm.value.organization
              };

              if (this.source) {
                apiData['source'] = this.source;
              }

              if (this.invitationId) {
                apiData['invitationId'] = this.invitationId;
              }

              if (this.orgId) {
                apiData['orgId'] = this.orgId;
              }

              if (this.orgType) {
                apiData['type'] = this.orgType;
              }

              apiData['emailVerify'] = 'yes';
              this.service.postApi('web/userSignup', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  success.result.emailVerify = 'yes';
                  localStorage.setItem('userTEmail', success.result.email);
                  localStorage.setItem('userTesting', JSON.stringify(success.result));
                  localStorage.setItem("userTestingWebLog", 'yeppp');

                  if (_this10.orgType == 'observer') {
                    _this10.route.navigate(['/user', 'recording-list']);
                  } else {
                    _this10.route.navigate(['/user', 'project-list']);
                  }

                  if (success.welcome) {
                    _this10.service.succ(success.message);
                  } //  this.service.sweetAlert('User Registration Successfull')

                } else {
                  // this.service.sweetAlert(success.message)
                  _this10.service.err(success.message);
                }
              }, function (error) {
                // this.service.sweetAlert("Something went wrong")
                _this10.service.err("Something went wrong");
              });
              this.service.showSpinner();
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.LoginForm.controls;
          }
        }]);

        return OrganizationLoginComponent;
      }();

      OrganizationLoginComponent.??fac = function OrganizationLoginComponent_Factory(t) {
        return new (t || OrganizationLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      OrganizationLoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: OrganizationLoginComponent,
        selectors: [["app-organization-login"]],
        decls: 55,
        vars: 14,
        consts: [[1, "Header", "Header-3"], [1, "navbar"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#Menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand", 3, "routerLink"], ["id", "Menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [3, "routerLink"], [1, "LoginArea"], [1, "LoginBox", 2, "margin", "70px 0 0"], ["src", "assets/images/Login.png"], [3, "formGroup"], [1, "form-group"], ["formControlName", "fullName", "type", "text", "placeholder", "Full Name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "email", "type", "text", "placeholder", "Email Address", 1, "form-control"], [4, "ngIf"], ["formControlName", "organization", "type", "text", "placeholder", "Organization Name ", 1, "form-control"], ["formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "type"], [1, "Icon", 3, "click"], ["src", "assets/images/eye.png"], [3, "click"], [1, "text-danger"]],
        template: function OrganizationLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Signin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Hey, Welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Tell us a little about yourself");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, OrganizationLoginComponent_div_39_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, OrganizationLoginComponent_div_42_Template, 3, 2, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, OrganizationLoginComponent_div_45_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrganizationLoginComponent_Template_span_click_48_listener() {
              return ctx.onView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, OrganizationLoginComponent_div_50_Template, 3, 2, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Use 8 or more characters with a mix of letters, numbers & symbols");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function OrganizationLoginComponent_Template_button_click_53_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("fullName").hasError("required") && ctx.LoginForm.get("fullName").dirty || ctx.formInvalid && !ctx.LoginForm.value.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("organization").hasError("required") && ctx.LoginForm.get("organization").dirty || ctx.formInvalid && !ctx.LoginForm.value.organization);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.password.errors);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1sb2dpbi9vcmdhbml6YXRpb24tbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrganizationLoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-organization-login',
            templateUrl: './organization-login.component.html',
            styleUrls: ['./organization-login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "F5nt":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: AppService */

    /***/
    function F5nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppService = /*#__PURE__*/function () {
        function AppService(http, toastr, spinner, _location) {
          _classCallCheck(this, AppService);

          // if (this.evnvor == 'prod') {
          //   this.baseUrl = "http://3.20.114.64:3010/"; // live
          //   this.baseUrlCrop = 'http://3.20.114.64:3014/'
          //   this.websiteurl = 'http://3.20.114.64/onlineusertesting/#/'
          // }
          this.http = http;
          this.toastr = toastr;
          this.spinner = spinner;
          this._location = _location;
          this.baseUrl = "http://3.6.100.194:3010/"; // devlopmnet

          this.baseUrlCrop = 'http://3.6.100.194:3012/';
          this.websiteurl = 'http://3.6.100.194/usertestingweb/#/';
          this.evnvor = 'prod';

          if (window.location.protocol == 'http:') {
            this.baseUrl = "http://3.20.114.64:3010/"; // live

            this.baseUrlCrop = 'http://3.20.114.64:3014/';
            this.websiteurl = 'http://3.20.114.64/onlineusertesting/#/';
          } else this.baseUrl = "https://onlineusertesting.com:3009/"; // live


          this.baseUrlCrop = 'https://onlineusertesting.com:3014/';
          this.websiteurl = 'https://onlineusertesting.com';
        }

        _createClass(AppService, [{
          key: "error",
          value: function error(response_message) {
            throw new Error("Method not implemented.");
          }
        }, {
          key: "getApi",
          value: function getApi(url) {
            this.httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
              })
            };
            return this.http.get(this.baseUrl + url, this.httpOptions);
          }
        }, {
          key: "getApiWithAuth",
          value: function getApiWithAuth(url) {
            this.httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('token')
              })
            };
            return this.http.get(this.baseUrl + url, this.httpOptions);
          }
        }, {
          key: "formdataApi",
          value: function formdataApi(url, data) {
            var httpOptions;
            httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem('token')
              })
            };
            return this.http.post(this.baseUrl + url, data, httpOptions);
          }
        }, {
          key: "formdataApiCrop",
          value: function formdataApiCrop(url, data) {
            var httpOptions;
            httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': localStorage.getItem('token')
              })
            };
            return this.http.post(this.baseUrlCrop + url, data, httpOptions);
          }
        }, {
          key: "succ",
          value: function succ(msg) {
            this.toastr.success(msg);
          }
        }, {
          key: "sweetAlert",
          value: function sweetAlert(msg) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(msg);
          }
        }, {
          key: "err",
          value: function err(msg) {
            this.toastr.error(msg);
          }
        }, {
          key: "showSpinner",
          value: function showSpinner() {//  this.loader=true
          }
        }, {
          key: "hideSpinner",
          value: function hideSpinner() {
            this.spinner.hide();
          }
        }, {
          key: "backClicked",
          value: function backClicked() {
            this._location.back();
          }
        }, {
          key: "postApi",
          value: function postApi(url, data, isHeader) {
            if (!isHeader) {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json"
                })
              };
              return this.http.post(this.baseUrl + url, data);
            } else {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  'token': localStorage.getItem('LOGINTOKEN'),
                  '_id': localStorage.getItem('_id')
                })
              };
              return this.http.post(this.baseUrl + url, data, this.httpOptions);
            }
          }
        }, {
          key: "postApiCrop",
          value: function postApiCrop(url, data, isHeader) {
            if (!isHeader) {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json"
                })
              };
              return this.http.post(this.baseUrlCrop + url, data);
            } else {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  'token': localStorage.getItem('LOGINTOKEN'),
                  '_id': localStorage.getItem('_id')
                })
              };
              return this.http.post(this.baseUrl + url, data, this.httpOptions);
            }
          }
        }, {
          key: "postApiWithAuth",
          value: function postApiWithAuth(url, data, isHeader) {
            if (!isHeader) {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json"
                })
              };
            } else {
              this.httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                  "Content-Type": "application/json",
                  'Authorization': localStorage.getItem('token')
                })
              };
            }

            return this.http.post(this.baseUrl + url, data, this.httpOptions);
          }
        }, {
          key: "exportFileData",
          value: function exportFileData(url) {
            window.open(this.baseUrl + 'web/exportFile?fileName=' + url);
          }
        }]);

        return AppService;
      }();

      AppService.??fac = function AppService_Factory(t) {
        return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
      };

      AppService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AppService,
        factory: AppService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FfXl":
    /*!*********************************!*\
      !*** ./src/app/app.provider.ts ***!
      \*********************************/

    /*! exports provided: Current, AppProvider */

    /***/
    function FfXl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Current", function () {
        return Current;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppProvider", function () {
        return AppProvider;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Current = function Current(leadsFilter) {
        _classCallCheck(this, Current);

        this.leadsFilter = leadsFilter;
        this.suggestedString = [];
        this.loadingFlag = false;
      };

      var AppProvider = function AppProvider() {
        _classCallCheck(this, AppProvider);

        this.current = new Current('all');
      };

      AppProvider.??fac = function AppProvider_Factory(t) {
        return new (t || AppProvider)();
      };

      AppProvider.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: AppProvider,
        factory: AppProvider.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppProvider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LvIC":
    /*!**********************************************!*\
      !*** ./src/app/product/product.component.ts ***!
      \**********************************************/

    /*! exports provided: ProductComponent */

    /***/
    function LvIC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _c1 = function _c1() {
        return ["/demos"];
      };

      var _c2 = function _c2() {
        return ["/pricing"];
      };

      var ProductComponent = /*#__PURE__*/function () {
        function ProductComponent(route, service) {
          _classCallCheck(this, ProductComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
            this.LoginForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
          }
        }, {
          key: "onSubmitFirst",
          value: function onSubmitFirst() {
            var _this11 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this11.service.succ(success.message);

                  _this11.LoginForm.reset();
                } else {
                  _this11.service.err(success.message);
                }
              }, function (error) {
                _this11.service.err("Something went wrong");
              });
            }
          }
        }, {
          key: "onSubmitSecond",
          value: function onSubmitSecond() {
            var _this12 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm2.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm2.value);
              var apiData = {
                "email": this.LoginForm2.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this12.service.succ(success.message);

                  _this12.LoginForm2.reset();
                } else {
                  _this12.service.err(success.message);
                }
              }, function (error) {
                _this12.service.err("Something went wrong");
              });
            }
          }
        }]);

        return ProductComponent;
      }();

      ProductComponent.??fac = function ProductComponent_Factory(t) {
        return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductComponent,
        selectors: [["app-product"]],
        decls: 131,
        vars: 7,
        consts: [[1, "ProductArea"], [1, "container"], [1, "NewestArea1"], ["src", "assets/images/coming.png"], [2, "margin", "0", "text-align", "left"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [2, "text-align", "left"], ["src", "assets/images/laptop.png"], [1, "WorksArea"], [1, "row"], [1, "col-sm-6"], [1, "WorkLeft"], [1, "StepBox"], ["src", "assets/images/Step-1.png"], [1, "clear"], ["src", "assets/images/Step-2.png"], ["src", "assets/images/Step-3.png"], [1, "WorkRigt"], ["src", "assets/images/Step.png"], [1, "TestingArea", "Watch"], [1, "container-fluid"], [1, "col-sm-7"], [1, "TestingLeft"], [1, "LearnAbout", 3, "routerLink"], ["src", "assets/images/arrow.png"], [1, "col-sm-5", "padding_none"], [1, "TestingRight"], ["src", "assets/images/Desktop.png"], [1, "ParticipantsArea"], [1, "ParticipantBox"], [3, "routerLink"], [1, "CheckArea"], [1, "CheckBox"], [3, "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "Email Id"], ["href", "javascript:void(0)", 3, "click"]],
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "What is Online UserTesting?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Understand how customers use your website when browsing or buying ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " products or services. Find out what\u2019s working and what isn\u2019t, to give ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " users the best possible experience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Get started quickly ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Gather users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " We\u2019ll reach out to your existing customers or recruit new ones based on your target user profile. Or, use our software to manage outreach in-house ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Click and connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Share a personalised link with users to begin the test ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Get the results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Receive a video link for each participant, showing users navigating the test and their feedback on the process ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "HOW IT WORKS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Our software is incredibly easy to use, so participants can access the test without any delays or hassle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Step 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Users receive an email with test instructions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Step 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Users click on the link in the email to begin ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " the test on their laptop or desktop computer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Step 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "User begins test.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Reviewing the tests");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "When a user completes a test, you will be notified by email. You will receive a video link for each user on your personal dashboard where you can access participant recordings anytime, anywhere.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Learn more about dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Supporting you");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "We can manage the process and recruit the users you need or if you prefer to recruit in-house, you can just use our software. Whatever works best for you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Find out more ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Try Online UserTesting Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "aside", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_a_click_125_listener() {
              return ctx.onSubmitSecond();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](129, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c2));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Mt+8":
    /*!******************************************************************!*\
      !*** ./src/app/service-agreement/service-agreement.component.ts ***!
      \******************************************************************/

    /*! exports provided: ServiceAgreementComponent */

    /***/
    function Mt8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiceAgreementComponent", function () {
        return ServiceAgreementComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var ServiceAgreementComponent = /*#__PURE__*/function () {
        function ServiceAgreementComponent() {
          _classCallCheck(this, ServiceAgreementComponent);
        }

        _createClass(ServiceAgreementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ServiceAgreementComponent;
      }();

      ServiceAgreementComponent.??fac = function ServiceAgreementComponent_Factory(t) {
        return new (t || ServiceAgreementComponent)();
      };

      ServiceAgreementComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ServiceAgreementComponent,
        selectors: [["app-service-agreement"]],
        decls: 551,
        vars: 0,
        consts: [[1, "FAQArea"], [1, "FAQHead"], [1, "container"], [1, "FAQBody"], [1, "FAQBox"], [1, "TableList"], [1, "dragscroll"]],
        template: function ServiceAgreementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "SERVICES AGREEMENT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Meanings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "1. In this Agreement, the following words are defined:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Agreement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "this agreement for the provision of the Services (as defined below) including any schedules; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Confidential Information ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "in relation to either party, any information (whether or not stated to be confidential or marked as such) which that party discloses to the other, or which the other party obtains from any information disclosed to it by that party, either orally or in writing or by any other means, under or in connection with this Agreement; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Deliverables ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "all documents, items, plans, products, goods and materials supplied by the Supplier, including any methodologies, ideas, designs, computer programs, data, disks, tapes, and reports, in whatever form, which are developed, created, written, prepared, devised or discovered by the Supplier or its agents, sub-contractors, consultants and employees in relation to the Services; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Effective Date ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "the date on which the Agreement is signed by all parties; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Equipment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "any equipment, systems, tools, cabling, items, materials or facilities requested or used directly or indirectly in the supply of the Services, by the Supplier or its sub-contractors; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Intellectual Property Rights ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "any invention, patent, utility model right, copyright and related right, registered design, unregistered design right, trade mark, trade name, internet domain name, design right, design, service mark, database rights, topography rights, rights in get-up, rights in goodwill or to sue for passing off and any other rights of a similar nature or other industrial or intellectual property rights owned or used by the Supplier in any part of the world whether or not any of the same is registered (or capable of registration), including applications and the right to apply for and be granted, extensions or renewals of, and rights to claim priority from, such rights and all equivalent or similar rights or protections which subsist now or will subsist in the future; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "the services which are set out and described in Schedule 1 of this Agreement, together with any other services which the Supplier provides or agrees to provide to the Customer through the change control procedure set out below (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Change Control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Service Charges ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "the charges for the Services, which are set out in Schedule 2 of this Agreement; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Service Levels ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "the service levels, standards or performance targets applicable to the Services, which are set out in Schedule 3 of this Agreement; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Specification ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "the description or specification for the Services as set out in Schedule 1 of this Agreement or as otherwise agreed between the parties through Change Control;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Working Day ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "any day other than a Saturday, Sunday or public holiday in England and Wales. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "2. In this Agreement, unless the context requires a different interpretation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "a. the singular includes the plural and vice versa; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "b. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this Agreement; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "c. a reference to a person includes firms, companies, government entities, trusts and partnerships; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "d. \"including\" is understood to mean \"including without limitation\"; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "e. reference to any statutory provision includes any modification or amendment of it; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "f. the headings and sub-headings do not form part of this Agreement; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "g. \"writing\" or \"written\" will include fax and e-mail unless otherwise stated.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Provision of Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "3. The Supplier shall provide the Services to the Customer on the terms and conditions of this Agreement from the Effective Date and as set out in Schedule 1. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "4. The Services will be provided by the Supplier either: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "a. on an on-going basis; or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "b. in response to each request from the Customer from time to time as specified in Schedule 1.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "5. The Agreement begins on the Effective Date and will continue until either party serves notice to terminate under the clause below (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Termination");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "6. The Supplier shall provide the Services (including any Deliverables) in accordance with the Specification\u202Fand the Service Levels\u202Fin all material respects. Time is of the essence for any dates for delivery of the Services under this Agreement, unless specifically stated otherwise in any schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "7. The Supplier shall perform the Services with reasonable care and skill, in accordance with: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "a. generally recognised commercial practices and standards in the applicable industry; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "b. all laws and regulations applicable to the Services, including all laws and regulations related to (i) anti-bribery and corruption, and (ii) data protection.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Customer's Obligations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "8. No amendment shall be made to Schedule 1 except on terms agreed in writing by the Parties in accordance with the clause below\u202FChange Control. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "9. The Customer must: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "a. co-operate with the Supplier in all matters relating to the Services; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "b. provide, in a timely manner, any Equipment, materials and any information as the Supplier may reasonably require; in the case of Equipment, the Customer shall ensure that it is in good working order and suitable for the purposes for which it is used, and in the case of information, the Customer shall ensure that it is accurate in all material respects; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "c. obtain and maintain all necessary licences and consents and comply with all relevant legislation in relation to the Services before the date on which the Services are to start;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "Defective Services ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "10. The Supplier shall promptly notify the Customer of: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "a. any delays or problems from time to time in the provision of the Services of which the Supplier becomes aware; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "b. any circumstances from time to time which may prevent the Supplier from providing the Services in accordance with this Agreement together with (where practicable) recommendations as to how such circumstances can be avoided; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "c. any complaint (whether written or not) or other matter which comes to its attention and which it reasonably believes may give rise to any loss by or claim against the Customer or which may result in any adverse publicity for the Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "11. The Customer shall, without limiting any right or remedy of the Customer, promptly report to the Supplier any defects in the Supplier's performance of the Services as soon as reasonably practicable after any such defect comes to the attention of the Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "12. Where any defect in the provision of the Services is reported to the Supplier by the Customer or otherwise comes to the attention of the Supplier, the Supplier shall, without limiting any other right or remedy of the Customer, use its reasonable endeavours to provide such further services as are necessary in order to rectify the default as soon as is reasonably practicable\u202Fand give the Customer a credit against the Service Charges calculated in accordance with Schedule 2.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Charges, Payment And Time Records ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, "13. In consideration of the provision of the Services by the Supplier, the Customer shall pay the Service Charges as set out in Schedule 2 which specifies whether the charges are on a time and materials basis, a fixed price basis or a combination of both. Time is of the essence for the payment of the Service Charges. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "14. All charges quoted to the Customer are inclusive of VAT. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "15. Where Services are provided on a time and materials basis: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "a. the charges payable for the Services shall be calculated in accordance with the Supplier's standard daily fee rates for each individual person and are calculated on the basis of an eight-hour day, worked between 9 am and 5 pm on Working Days and otherwise by arrangement between the parties; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "b. the Supplier will ensure that every individual whom it engages in relation to the Services completes time sheets recording time spent on the Services or Deliverables; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "c. the Supplier will invoice the Customer monthly in arrears for its charges for time, expenses and materials (together with VAT where appropriate) for the month concerned, accompanied by any relevant receipts for any Equipment, materials and expenses as incurred in accordance with the clause below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](180, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "16. Where Services are provided for a fixed price, the total price for the Services is set out in Schedule 2. Upon completion of the Services or when an agreed instalment is due, the Supplier shall invoice the Customer for the charges that are then payable, together with any Equipment, materials and expenses, which have not been expressly included in the fixed price and VAT. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "17. Expenses incurred by the Supplier may include: the cost of hotel, subsistence, travelling and any other expenses reasonably incurred by the individuals whom the Supplier engages in connection with the Services, the cost of any materials and the cost of services reasonably and properly provided by third parties and required by the Supplier for the supply of the Services. Any expenses in excess of \xA310\u202Fmust be pre-approved by the Customer in writing. Such expenses, materials and third party services must be invoiced by the Supplier at cost, together with VAT, which the Supplier will add to its invoices at the appropriate rate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "18. The Customer shall pay each invoice submitted to it by the Supplier, in full and in cleared funds, within\u202F30\u202Fdays of receipt (which shall be determined in accordance with the section below (");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Notices");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](189, ")) to a bank account nominated in writing by the Supplier (the\u202F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Due Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, ").\u202FOther payment methods include: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "a. by credit card but subject to an additional charge as notified by the Supplier. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](196, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, "19. Without prejudice to any other right or remedy that it may have, if the Customer fails to pay the Supplier on the Due Date: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "a. the Customer shall pay interest on the overdue amount at the rate of 4% per annum above the Bank of England base rate at the relevant time. Such interest will accrue on a daily basis from the due date until actual payment of the overdue amount, whether before or after judgment. The Supplier may choose to charge statutory interest due. The Customer shall pay the interest together with the overdue amount; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](203, "b. the Supplier may suspend all Services until payment has been made in full. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](204, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](206, "20. All sums payable to the Supplier under this Agreement shall become due immediately on its termination, despite any other provision. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "21. The Supplier and the Customer shall pay all amounts due under this Agreement in full without any deduction except as required by law and neither party shall be entitled to assert any credit, set-off or counterclaim against the other in order to justify withholding payment of any amount due, in whole or in part.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Change control ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "22. The Customer may at any time during the term of this Agreement request an increase or decrease in the volume of the Services, a change in the Specification, or the addition of new Services (Change Request) by notifying the Supplier in writing of its requirements. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "23. The Supplier shall give due consideration to any Change Request from Customer and shall, within\u202F10\u202FWorking Days of receiving a Change Request from the Customer: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "a. confirm its acceptance of the Change Request, without any further variation to the terms of the Agreement, in which case the parties shall execute a variation to the Agreement as soon as reasonably practicable and the Supplier shall implement the Change Request accordingly; or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "b. provide a written proposal for accepting the Change Request, subject to any variation that it reasonably considers necessary to the Services, the Specification or the Service Charges, including any new Services (Change Proposal); or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](221, "c. if the Supplier believes it is not reasonably practicable to accept the Change Request, with or without any such variation, provide the Customer with a written statement of its reasons for doing so. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "24. Any Change Proposal provided by the Supplier under the above clause shall be based on the Service Charges or, if this is not appropriate, shall be a fair and reasonable quotation for the Change Request. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "25. The Customer shall give due consideration to the Supplier's Change Proposal under the clause above and shall within\u202F10\u202FWorking Days after receipt of the Change Proposal either give the Supplier a written notice accepting the Change Proposal (subject to or without further negotiation) or rejecting the Change Proposal. If the Customer accepts the Change Proposal, the parties shall as soon as reasonably practicable execute a variation to the Agreement and the Supplier shall implement the agreed variation. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "26. The Supplier shall have the right to make any changes to the Services which are necessary to comply with any applicable law or safety requirement, provided that the Supplier gives the Customer reasonable notice of such changes and that such changes do not materially affect the nature/scope of the Services or the Service Charges.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Indemnity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "27. The Supplier shall indemnify the Customer against any claim by any other person that the provision of the Services to the Customer in accordance with this Agreement infringes any Intellectual Property Rights of that other person.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "Liability and Insurance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "28. If the Supplier's performance of its obligations under this Agreement is prevented or delayed by any act or omission of the Customer, its agents, sub-contractors, consultants or employees, the Supplier shall not be liable for any costs, charges or losses sustained or incurred by the Customer that arise directly or indirectly from such prevention or delay. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "29. Nothing in this Agreement limits or excludes either party's liability for: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](240, "a. death or personal injury caused by its negligence; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "b. fraud or fraudulent misrepresentation; or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](244, "c. breach of the terms implied by section 2 of the Supply of Goods and Services Act 1982 (title and quiet possession); or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "d. any other liability which cannot be limited or excluded by applicable law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "30. Subject to the above clause and the clause above (Indemnity), neither party shall have any liability to the other party, whether in contract, tort (including negligence), for breach of statutory duty, or otherwise, arising under or in connection with this Agreement for: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "a. loss of profits; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "b. loss of sales or business; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "c. loss of agreements or contracts; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "d. loss of anticipated savings; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](259, "e. loss of or damage to goodwill; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "f. loss of use or corruption of software, data or information; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](263, "g. any indirect or consequential loss. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "31. Subject to the two preceding clauses and the clause above (Indemnity), the total liability of either party for any other loss of the other party in respect of any one event or series of connected events shall not exceed \xA3100. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "32. The\u202Fterms\u202Fimplied by sections 3 to 5 of the Supply of Goods and Services Act 1982 are, to the fullest extent permitted by law, excluded from this Agreement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](269, "33. During this Agreement, the Supplier and the Customer shall each maintain in force with a reputable insurance company, insurance sufficient to indemnify risks for which they may be responsible, including for their respective sub-contractors, agents and employees, in connection with the Services and shall, on either parties' request, produce both the insurance certificate giving details of cover and the receipt for the current year's premium. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Confidentiality ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "34. Each party will only use Confidential Information to perform its obligations under the Agreement and will not cause or allow the information to be disclosed except: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "a. where required by law, court order or any governmental or regulatory body; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](278, "b. to any of its employees, officers, sub-contractors, representatives or advisers who need to know the information in order to discharge its obligations under the Agreement and agree only to use the information for that purpose and not to cause or allow disclosure of that information; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](280, "c. where the information has become generally available to the public (other than as a result of disclosure in breach of the Agreement by the party or any of its employees, officers, sub-contractors, representatives or advisers); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](282, "d. where the information was available or known to it on a non-confidential basis before being disclosed under the Agreement; or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](283, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](284, "e. where the information was developed by or for it independently of the Agreement and is received by persons who are not the disclosing party. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](285, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](286, "Intellectual Property ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](287, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](288, "35. Subject to the clause below, the Supplier reserves all Intellectual Property Rights (if any) which may subsist in any Deliverables, or in connection with, the provision of the Services. The Supplier reserves the right to take such action as may be appropriate to restrain or prevent the infringement of such Intellectual Property Rights. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](290, "36. The Supplier licenses all such rights to the Customer free of charge and on a non-exclusive, worldwide basis to such extent as is necessary to enable the Customer to make reasonable use of the Deliverables and the Services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "37. If this Agreement is terminated, this licence will automatically terminate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](294, "Data Protection ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](295, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](296, "38. Each party shall comply with its obligations, and may exercise its respective rights and remedies under Schedule\u202F4. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Anti-Bribery ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "39. The Supplier and its agents, sub-contractors, consultants or employees shall: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "a. comply with all applicable laws, regulations, statutes, and codes relating to anti-bribery and anti-corruption including but not limited to the Bribery Act 2010 (Bribery Laws); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](304, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, "b. not commit an offence under sections 1, 2 or 6 of the Bribery Act 2010; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "c. comply with any relevant industry code related to Anti-Bribery (Bribery Policies); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "d. have, maintain, and enforce throughout the term of this Agreement its own policies and procedures, to ensure compliance with the Bribery Laws and the Bribery Policies; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](311, "e. promptly report to the Customer any request or demand for any undue financial or other advantage of any kind received by the Supplier in connection with the performance of this Agreement.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](313, "Non-Solicitation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "40. The Customer shall not, without the prior written consent of the Supplier, at any time from the date of this Agreement to the expiry of\u202F1\u202Fmonths after the last date of supply of the Services or termination of this Agreement (whichever is the latest), solicit or entice away from the Supplier or employ or attempt to employ any person who is, or has been, engaged as an employee, consultant or sub-contractor of the Supplier in the provision of the Services.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](317, "Circumstances beyond the control of either party ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](318, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](319, "41. Neither party shall be liable for any failure or delay in performing their obligations where such failure or delay results from any cause that is beyond the reasonable control of that party. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](320, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](321, "42. Such causes include, but are not limited to: power failure, Internet Service Provider failure, acts of God, epidemic, pandemic, civil unrest, fire, flood, droughts, storms, earthquakes, collapse of buildings, explosion or accident, acts of terrorism, acts of war, governmental action, any law or any action taken by a government or public authority, including without limitation imposing an export or import restriction, quota or prohibition, or any other event that is beyond the control of the party in question. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](322, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](323, "43. The party affected by a circumstance beyond its control shall use all reasonable endeavours to mitigate the effect of the force majeure upon the performance of its obligations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](324, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](325, "44. The corresponding obligations of the other party will be suspended to the same extent as those of the party affected by a force majeure event. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](326, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](327, "45. If the delay continues for a period of 90 days, either party may terminate or cancel the Services to be carried out under this Agreement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](328, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](329, "Termination ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](330, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](331, "46. Either party may terminate this Agreement by giving the other party\u202F30 days' prior written notice. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](332, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](333, "47. A party may terminate the Agreement immediately by giving written notice to the other party if that other party: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](334, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](335, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](336, "a. does not pay any sum due to it under the Agreement within\u202F30\u202Fdays of the due date for payment; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](337, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](338, "b. commits a material breach of the Agreement which, if capable of remedy, it fails to remedy within 30 days after being given written notice specifying full particulars of the breach and requiring it to be remedied); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](339, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](340, "c. persistently breaches any term of the Agreement; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](341, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](342, "d. is dissolved, ceases to conduct substantially all of its business or becomes unable to pay its debts as they fall due; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](343, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](344, "e. is a company over any of whose assets or property a receiver is appointed; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](345, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](346, "f. makes any voluntary arrangement with its creditors or (if a company) becomes subject to an administration order (within the meaning of the Insolvency Act 1986); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](347, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](348, "g. (if an individual or firm) has a bankruptcy order made against it or (if a company) goes into liquidation; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](349, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](350, "h. undergoes a change of control (within the meaning of section 1124 of the Corporation Tax Act 2010); or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](351, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](352, "i. (if an individual) dies or as a result of illness or incapacity becomes incapable of managing his or her own affairs.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](353, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](354, "Consequences of Termination ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](355, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](356, "48. On termination or expiry of this Agreement: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](357, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](358, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](359, "a. the Customer shall immediately pay to the Supplier all of the Supplier's outstanding unpaid invoices and interest and, in respect of Services supplied but for which no invoice has been submitted, the Supplier may submit an invoice, which shall be payable immediately on receipt; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](360, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](361, "b. the Customer shall, within a reasonable time, return all of the Supplier's Equipment and any relevant Deliverables remaining the property of the Supplier. Until they have been returned or repossessed, the Customer shall be solely responsible for their safe keeping. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](362, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](363, "49. Termination or expiry of the Agreement shall not affect any rights, remedies, obligations or liabilities of the parties that have accrued up to the date of termination or expiry, including the right to claim damages in respect of any breach of the agreement which existed at or before the date of termination or expiry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](364, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](365, "50. Other than as set out in the Agreement, neither party shall have any further obligation to the other under the Agreement after its termination. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](366, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](367, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](368, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](369, "51. This Agreement contains the whole agreement between the parties relating to its subject matter and supersedes all prior discussions, arrangements or agreements that might have taken place in relation to the Agreement. Nothing in this clause limits or excludes any liability for fraud or fraudulent misrepresentation. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](370, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](371, "52. No party may assign, transfer or sub-contract to any third party the benefit and/or burden of the Agreement without the prior written consent (not to be unreasonably withheld) of the other party. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](372, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](373, "53. No variation of the Agreement will be valid or binding unless it is recorded in writing and signed by or on behalf of both parties. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](374, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](375, "54. The\u202FContracts (Rights of Third Parties) Act 1999\u202Fdoes not apply to the Agreement and no third party has any right to enforce or rely on any provision of the Agreement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](376, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](377, "55. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](378, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](379, "56. A provision which by its intent or terms is meant to survive the termination of the Agreement will do so. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](380, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](381, "57. If any court or competent authority finds that any provision (or part) of the Agreement is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of the Agreement will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](382, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](383, "58. Unless specifically provided by the parties, nothing in the Agreement will establish any employment relationship, partnership or joint venture between the parties, or mean that one party becomes the agent of the other party, nor does the Agreement authorise any party to enter into any commitments for or on behalf of the other party. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](384, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](385, "59. Any notice (other than in legal proceedings) to be delivered under the Agreement must be in writing and delivered by pre-paid first class post to or left by hand delivery at the other party's registered address or place of business, or sent by email to the other party's main business email address as notified to the sending party. Notices: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](386, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](387, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](388, "a. sent by post will be deemed to have been received, where posted from and to addresses in the United Kingdom, on the second Working Day and, where posted from or to addresses outside the United Kingdom, on the tenth Working Day following the date of posting; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](389, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](390, "b. delivered by hand will be deemed to have been received at the time the notice is left at the proper address; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](391, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](392, "c. sent by email will be deemed to have been received on the next Working Day after sending.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](393, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](394, "Governing law and jurisdiction ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](395, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](396, "60. This Agreement shall be governed by and interpreted according to the law of\u202FEngland and Wales\u202Fand all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the\u202FEnglish and Welsh\u202Fcourts. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](397, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](398, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](399, " SCHEDULE 1 SPECIFICATION OF SERVICES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](400, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](401, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](402, "SCHEDULE 2 CHARGES ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](403, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](404, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](405, "SCHEDULE 3 SERVICE LEVELS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](406, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](407, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](408, "SCHEDULE 4 DATA PROTECTION");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](409, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](410, "PART A ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](411, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](412, "1. For the purposes of this Schedule: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](413, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](414, "a. Data Protection Laws means any applicable law relating to the processing of Personal Data, as applicable to either party or the Services, including: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](415, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](416, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](417, "i. the Directive 95/46/EC (Data Protection Directive) or the GDPR; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](418, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](419, "ii. any laws which implement such laws; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](420, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](421, "iii. any laws that replace, extend, re-enact, consolidate or amend any of the laws stated in (i) and (ii) above; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](422, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](423, "iv. all guidance, codes of practice and codes of conduct issued by any relevant Data Protection Supervisory Authority relating to such Data Protection Laws (whether legally binding or not). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](424, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](425, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](426, "b. GDPR means the General Data Protection Regulation (EU) 2016/679; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](427, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](428, "c. Protected Data means Personal Data received from or on behalf of the Customer, or obtained in connection with the performance of the Supplier's obligations under the Agreement; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](429, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](430, "d. Sub-processor means any agent, subcontractor or any other third party engaged by the Supplier (or by any other Sub-Processor) for carrying out any processing activities in respect of the Protected Data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](431, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](432, "The terms \"Controller\", \"Data Subject\", \"International Organisation\" \"Member State\", \"Personal Data\", \"Personal Data Breach\", \"Processor\", \"Processing\" and \"Supervisory Authority\" shall have the same meaning as in the GDPR. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](433, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](434, "Compliance with data protection laws ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](435, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](436, "2. The parties agree that the Customer is a Controller and the Supplier is a Processor for the processing of Protected Data pursuant to this Agreement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](437, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](438, "3. The Supplier shall, and shall ensure its Sub-Processors and each of the Supplier personnel shall comply with all Data Protection Laws in connection with the processing of Protected Data and the provision of the Services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](439, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](440, "4. Nothing in this Agreement relieves the Supplier of any responsibilities or liabilities under Data Protection Laws. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](441, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](442, "Indemnity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](443, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](444, "5. Each party shall be liable for and shall indemnify (and keep indemnified) the other against all actions, proceedings, liabilities, costs, claims, losses, expenses, compensation paid to Data Subjects and other reasonable professional costs and expenses suffered or incurred by the indemnified party arising out of or in connection with any breach of the the Data Protection Laws by the indemnifying party, its employees or agents. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](445, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](446, "Instructions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](447, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](448, "6. The Supplier shall only process (and shall ensure Supplier personnel only process) the Protected Data in accordance with Section 1 of Part B of this Schedule and the Customer's written instructions. The Supplier will immediately inform the Customer if any instruction relating to the Protected Data infringes or may infringe any Data Protection Law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](449, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](450, "Security");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](451, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](452, "7.The Supplier shall implement appropriate technical and organisational measures to protect the Protected Data from accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access. The technical and organisational security measures which the Supplier shall have in place are set out in Part B to this Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](453, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](454, "Sub-processing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](455, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](456, "8. The Supplier will not permit any processing of Protected Data by any third party (except Supplier personnel that are subject to an enforceable obligation of confidence with regards to the Protected Data) without the prior specific written permission of the Customer, except (i) as specifically stated in this Schedule, or (ii) where such processing is required by any applicable law, regulation or public authority. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](457, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](458, "9. The Supplier shall prior to the relevant Sub-Processor carrying out any processing activities in respect of the Protected Data, appoint each Sub-Processor under a written agreement containing data protection obligations that provide at least the same level of protection for Protected Data as those in this Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](459, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](460, "10. The Supplier shall remain fully liable to the Customer under this Agreement for all the acts and omissions of each Sub-Processor and each of the Supplier Personnel as if they were its own. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](461, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](462, "11. Where a Sub-processor is engaged by the Supplier, the Supplier shall: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](463, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](464, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](465, "a. carry out adequate due diligence to ensure that the Sub-processor is capable of providing the level of protection for Protected Data required by this Schedule; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](466, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](467, "b. remain liable for any breach of this Schedule caused by a Sub-processor; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](468, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](469, "c. provide relevant details and a copy of each agreement with a Sub-Processor to the Customer on request. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](470, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](471, "Assistance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](472, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](473, "12. The Supplier shall, taking into account the nature of the processing, provide reasonable assistance to the Customer insofar as this is possible, to enable the Customer to respond to requests from a data subject seeking to exercise their rights under Data Protection Laws. In the event that such request is made directly to the Supplier, the Supplier shall promptly inform the Customer of the same. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](474, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](475, "13. The Supplier shall to the extent required by Data Protection Laws, taking into account the nature of the processing and the information available to the Supplier, provide the Customer with commercially reasonable assistance with data protection impact assessments (as such term is defined in Data Protection Laws) or prior consultations with data protection authorities that the Customer is required to carry out under Data Protection Laws. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](476, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](477, "Data subject requests ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](478, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](479, "14. The Supplier will record and refer all requests and communications received from Data Subjects or any Supervisory Authority to the Customer which relate (or which may relate) to any Protected Data promptly (and in any event within three days of receipt) and will not respond to any without the Customer's express written approval and strictly in accordance with the Customer's instructions unless and to the extent required by law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](480, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](481, "International transfers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](482, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](483, "15. The Supplier will not process and/or transfer, or otherwise directly or indirectly disclose, any Protected Data in or to countries outside the EEA or to any International Organisation without the prior written consent of the Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](484, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](485, "Audits and records ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](486, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](487, "16. The Supplier will, in accordance with Data Protection Laws, make available to the Customer such information in the Supplier's possession or control as the Customer may reasonably request with a view to demonstrating the Supplier's compliance with the obligations of data processors under Data Protection Laws in relation to its processing of Protected Data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](488, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](489, "17. The Customer may exercise its right to audit under Data Protection Laws through the Supplier providing: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](490, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](491, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](492, "a. an audit report not older than 18 months by an independent external auditor demonstrating that the Supplier's technical and organisational measures are in accordance with the Supplier's industry audit standard; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](493, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](494, "b. additional information in the Supplier's possession or control to a Supervisory Authority when it requests or requires additional information in relation to the data processing activities carried out by the Supplier under this Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](495, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](496, "Breach ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](497, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](498, "18. The Supplier shall promptly (and in any event within 24 hours) notify the Customer if it (or any of its Sub-Processors or the Supplier Personnel) suspects or becomes aware of any suspected, actual or threatened occurrence of any Personal Data Breach in respect of any Protected Data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](499, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](500, "19. The Supplier shall promptly (and in any event within 24 hours) provide all information as the Customer requires to report the circumstances referred to in paragraph 19 (above) to a Supervisory Authority and to notify affected Data Subjects under Data Protection Laws. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](501, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](502, "Return/Deletion of Protected Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](503, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](504, "20. Upon termination or expiry of the Agreement, the Supplier shall at the Customer's election, promptly (and in any event, within 30 days of the expiry of the Agreement) delete or return to the Customer the Protected Data (including existing copies) in the Supplier's possession by secure file transfer, save to the extent that the Supplier is required by any applicable law to retain some or all of the Protected Data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](505, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](506, "21. The Supplier will provide written certification to the Customer that it has fully complied with the section above within 30 days of the expiry of the Agreement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](507, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](508, "Survival ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](509, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](510, "22. This Schedule shall survive termination or expiry of the Agreement for any reason. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](511, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](512, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](513, "PART B ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](514, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](515, "Section 1 - Data processing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](516, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](517, "Processing of the Protected Data by the Supplier under this Schedule shall be for the subject-matter, duration, nature and purposes and involve the types of Personal Data and categories of Data Subjects set out in this Section 1 of Part B. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](518, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](519, "Subject-matter of processing: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](520, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](521, "The Supplier's provision of the Services and any related technical support to Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](522, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](523, "Duration of the processing: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](524, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](525, "The term plus the period from expiry of the term until return/deletion of all Protected Data by the Supplier in accordance with this Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](526, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](527, "Nature and purpose of the processing: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](528, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](529, "The Supplier will Process Protected Data for the purpose of providing the Services and any related technical support to the Customer in accordance with this Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](530, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](531, "Type of Personal Data: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](532, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](533, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](534, "names, email addresses, physical addresses. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](535, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](536, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](537, "Categories of Data Subjects: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](538, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](539, "Protected Data will concern the following categories of Data Subjects: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](540, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](541, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](542, "Data Subjects about whom the Supplier collects Protected Data in its provision of the Services; and/or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](543, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](544, "Data Subjects about whom Protected Data is transferred to the Supplier in connection with the Services by, at the direction of, or on behalf of Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](545, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](546, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](547, "Section 2 - Minimum technical and organisational security measures ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](548, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](549, "Without prejudice to its other obligations, the Supplier shall implement appropriate technical and organisational measures to ensure an appropriate level of security for Personal Data. The Supplier\u202Fshall provide the Customer\u202Fwith details of all such technical and organisational measures on reasonable written notice from the Customer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](550, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2UtYWdyZWVtZW50L3NlcnZpY2UtYWdyZWVtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServiceAgreementComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-service-agreement',
            templateUrl: './service-agreement.component.html',
            styleUrls: ['./service-agreement.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "MwYd":
    /*!************************************************!*\
      !*** ./src/app/customer/customer.component.ts ***!
      \************************************************/

    /*! exports provided: CustomerComponent */

    /***/
    function MwYd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
        return CustomerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/help"];
      };

      var _c1 = function _c1() {
        return ["/pricing"];
      };

      var CustomerComponent = /*#__PURE__*/function () {
        function CustomerComponent(route, service) {
          _classCallCheck(this, CustomerComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(CustomerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
            this.LoginForm2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]+([.-]?[a-zA-Z0-9]+)*@([a-zA-Z]+([.-]?[a-zA-Z]))[.]{1}[a-zA-Z]{2,}$')])
            });
          }
        }, {
          key: "onSubmitFirst",
          value: function onSubmitFirst() {
            var _this13 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this13.service.succ(success.message);

                  _this13.LoginForm.reset();
                } else {
                  _this13.service.err(success.message);
                }
              }, function (error) {
                _this13.service.err("Something went wrong");
              });
            }
          }
        }, {
          key: "onSubmitSecond",
          value: function onSubmitSecond() {
            var _this14 = this;

            if (!this.LoginForm2.value.email) {
              this.service.err('Please enter email id');
              return;
            }

            if (!this.LoginForm2.valid) {
              this.service.err('Please enter valid email id');
            } else {
              console.log(this.LoginForm2.value);
              var apiData = {
                "email": this.LoginForm2.value.email
              };
              this.service.postApi('web/createPaidUser', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  _this14.service.succ(success.message);

                  _this14.LoginForm2.reset();
                } else {
                  _this14.service.err(success.message);
                }
              }, function (error) {
                _this14.service.err("Something went wrong");
              });
            }
          }
        }]);

        return CustomerComponent;
      }();

      CustomerComponent.??fac = function CustomerComponent_Factory(t) {
        return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      CustomerComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CustomerComponent,
        selectors: [["app-customer"]],
        decls: 76,
        vars: 5,
        consts: [[1, "CustomerArea"], [1, "CustomerBox"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [3, "routerLink"], [1, "TrustArea"], [1, "container"], ["id", "TrustSlider", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#TrustSlider", "data-slide-to", "0", 1, "active"], ["data-target", "#TrustSlider", "data-slide-to", "1", 1, ""], [1, "carousel-inner"], [1, "item", "active"], [1, "TrustBox"], [1, "item"], ["href", "#TrustSlider", "data-slide", "prev", 1, "left", "carousel-control"], [1, "fa", "fa-angle-left"], [1, "sr-only"], ["href", "#TrustSlider", "data-slide", "next", 1, "right", "carousel-control"], [1, "fa", "fa-angle-right"], [1, "CheckArea"], [1, "CheckBox"], [3, "formGroup"], ["formControlName", "email", "type", "email", "placeholder", "Email Id"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/images/arrow.png"]],
        template: function CustomerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Get ahead with unmoderated user testing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Consumers today have so much choice and a great online experience can keep their attention for longer. That\u2019s why successful businesses turn to unmoderated user testing to get valuable insights into their website\u2019s performance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "We\u2019re proud to be a trusted service provider to leading brands worldwide. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "An experienced UK-based team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Fast and friendly customer service ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Flexible rates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Contact us today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "WHO TRUST US");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Testimonials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "ol", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Awesome respondents! As a team we were fed up of seeing professional respondents again and again and again. This platform allows you to observe genuine users using your website in their home environment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Krystal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "UX Researcher ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Online UserTesting is really straightforward to use and we like the flexibility of their pay as you go pricing. Their approach to respondent recruitment is also refreshing. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Steven");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Product Manager ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Try Online UserTesting Now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "aside", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CustomerComponent_Template_a_click_70_listener() {
              return ctx.onSubmitSecond();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customer',
            templateUrl: './customer.component.html',
            styleUrls: ['./customer.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/product"];
      };

      var _c1 = function _c1() {
        return ["/login"];
      };

      var _c2 = function _c2() {
        return ["/pricing"];
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 141,
        vars: 6,
        consts: [[1, "DashboardMainArea"], [1, "container"], ["src", "assets/images/dashboard.PNG"], [1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#Highlights"], ["data-toggle", "tab", "href", "#Projects"], ["data-toggle", "tab", "href", "#Notifications"], [1, "tab-content"], ["id", "Highlights", 1, "tab-pane", "fade", "in", "active"], ["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "item", "active"], [1, "NewestArea1"], ["src", "assets/images/coming.png"], [1, "item"], ["href", "#myCarousel", "data-slide", "prev", 1, "left", "carousel-control"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "sr-only"], ["href", "#myCarousel", "data-slide", "next", 1, "right", "carousel-control"], ["aria-hidden", "true", 1, "fa", "fa-angle-right"], ["id", "Projects", 1, "tab-pane", "fade"], [1, "ProjectBox"], [1, "row"], [1, "col-sm-6"], ["href", "javascript:void(0);"], ["id", "Notifications", 1, "tab-pane", "fade"], [1, "Notification"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "SelftestArea"], [1, "SelftestBox"], ["src", "assets/images/Blue-Cursor.png"], [3, "routerLink"], [1, "CheckArea"], [1, "CheckBox"], ["type", "email", "placeholder", "Email Id"], ["src", "assets/images/arrow.png"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Your Research in One Place ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The Online UserTesting dashboard provides an accessible and easy way to store your research projects. You can invite colleagues to collaborate with you or to observe video highlights and read project notes. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Highlights");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "You can create video highlights so your team can quickly ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " and easily view important footage. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Create projects for your teams and stakeholders. You can ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " invite colleagues to collaborate with you or to observe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "video highlights and read project notes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "myweb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "+ Add project description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "+ Add project description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Online UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "+ Add project description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "+ Add project description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Our notes function means you can share insights and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " read feedback from your team. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "The user cannot find the check out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "Users emphasise that the new features are easy to use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Users struggle to navigate the old payment gateway");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Users find the new payment gateway much more userfriendly! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Unmoderated Online UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Easily send an Online UserTesting link to respondents. Participants can take part in their own time and in their natural environment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "See how Online UserTesting works");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Try Online UserTesting Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Pay as you go");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "More Info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "View Pricing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c2));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.provider */
      "FfXl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(appProvider) {
          _classCallCheck(this, AppComponent);

          this.appProvider = appProvider;
          this.title = 'usertesting';
          this.loginUserData = JSON.parse(localStorage.getItem('userTesting'));

          if (this.loginUserData) {
            this.appProvider.current.adminData = this.loginUserData;
          }
        }

        _createClass(AppComponent, [{
          key: "onActivate",
          value: function onActivate(event) {
            window.scroll(0, 0); //or document.body.scrollTop = 0;
            //or document.querySelector('body').scrollTo(0,0)
            // ...
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_provider__WEBPACK_IMPORTED_MODULE_1__["AppProvider"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [[3, "activate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("activate", function AppComponent_Template_router_outlet_activate_0_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _app_provider__WEBPACK_IMPORTED_MODULE_1__["AppProvider"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "U+5A":
    /*!********************************************************!*\
      !*** ./src/app/password-set/password-set.component.ts ***!
      \********************************************************/

    /*! exports provided: PasswordSetComponent */

    /***/
    function U5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PasswordSetComponent", function () {
        return PasswordSetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PasswordSetComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PasswordSetComponent_div_12_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Please Enter Valid password:Use 8 or more characters with a mix of letters, numbers & symbols ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function PasswordSetComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PasswordSetComponent_div_12_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PasswordSetComponent_div_12_div_2_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.password.errors.pattern);
        }
      }

      var PasswordSetComponent = /*#__PURE__*/function () {
        function PasswordSetComponent(route, service, activeRoute) {
          _classCallCheck(this, PasswordSetComponent);

          this.route = route;
          this.service = service;
          this.activeRoute = activeRoute;
          this.formInvalid = false;
          this.submitted = false;
          this.type = 'password';
        }

        _createClass(PasswordSetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.activeRoute.queryParams.subscribe(function (params) {
              console.log(params);
              _this15.token = params.token; // this.param1 = params['param1'];
              // this.param2 = params['param2'];
            });
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/)])
            });
          }
        }, {
          key: "onView",
          value: function onView() {
            this.type = this.type == 'password' ? 'text' : 'password';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this16 = this;

            this.submitted = true;

            if (this.LoginForm.invalid) {
              this.formInvalid = true; // this.service.sweetAlert('fghjk')

              return;
            } else {
              this.formInvalid = false;
              console.log(this.LoginForm.value);
              var apiData = {
                "password": this.LoginForm.value.password,
                "token": this.token
              };
              this.service.postApi('web/resetPassword', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  //  localStorage.setItem('userTesting', JSON.stringify(success.result));
                  //  localStorage.setItem("userTestingWebLog", 'yeppp')
                  _this16.route.navigate(['/login']);

                  _this16.service.succ('Password updated Successfull');
                } else {
                  // this.service.sweetAlert(success.message)
                  _this16.service.err(success.message);
                }
              }, function (error) {
                // this.service.sweetAlert("Something went wrong")
                _this16.service.err("Something went wrong");
              });
              this.service.showSpinner();
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.LoginForm.controls;
          }
        }]);

        return PasswordSetComponent;
      }();

      PasswordSetComponent.??fac = function PasswordSetComponent_Factory(t) {
        return new (t || PasswordSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      PasswordSetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PasswordSetComponent,
        selectors: [["app-password-set"]],
        decls: 15,
        vars: 3,
        consts: [[1, "Dashboard"], [1, "PasswordBox", 3, "formGroup"], [1, "form-group"], ["formControlName", "password", "placeholder", "New password", 1, "form-control", 3, "type"], [1, "Icon", 3, "click"], ["src", "assets/images/eye.png"], [4, "ngIf"], ["type", "button", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
        template: function PasswordSetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "You are near by !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Set a new, cool password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PasswordSetComponent_Template_span_click_10_listener() {
              return ctx.onView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, PasswordSetComponent_div_12_Template, 3, 2, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function PasswordSetComponent_Template_button_click_13_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Set new password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.password.errors);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bhc3N3b3JkLXNldC9wYXNzd29yZC1zZXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PasswordSetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-password-set',
            templateUrl: './password-set.component.html',
            styleUrls: ['./password-set.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XDRp":
    /*!*********************************************************!*\
      !*** ./src/app/user/contact-us/contact-us.component.ts ***!
      \*********************************************************/

    /*! exports provided: ContactUsComponent */

    /***/
    function XDRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
        return ContactUsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "k9B/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/user", "Organization-setting"];
      };

      var _c1 = function _c1() {
        return ["/user", "Organization-member"];
      };

      var _c2 = function _c2() {
        return ["active"];
      };

      var _c3 = function _c3() {
        return ["/user", "Credit"];
      };

      var _c4 = function _c4() {
        return ["/user", "Organization-billing"];
      };

      var _c5 = function _c5() {
        return ["/help"];
      };

      var ContactUsComponent = /*#__PURE__*/function () {
        function ContactUsComponent() {
          _classCallCheck(this, ContactUsComponent);
        }

        _createClass(ContactUsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactUsComponent;
      }();

      ContactUsComponent.??fac = function ContactUsComponent_Factory(t) {
        return new (t || ContactUsComponent)();
      };

      ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContactUsComponent,
        selectors: [["app-contact-us"]],
        decls: 50,
        vars: 14,
        consts: [[1, "Dashboard"], [1, "SidenavBar"], [1, "active"], [3, "routerLink"], ["src", "assets/images/Sidenav-6.png"], ["src", "assets/images/Sidenav-7.png"], [3, "routerLinkActive"], ["src", "assets/images/price-tag.svg", 2, "filter", "brightness(0) invert(1)", "width", "28px", "height", "36px", "margin-left", "12px"], ["src", "assets/images/Sidenav-8.png"], [1, "WrapperArea"], [1, "WrapperBox"], [1, "BackButton", 3, "routerLink"], ["src", "assets/images/arrow.png"], [1, "Title"], [1, "SettingArea", "SettingAreaContact"], ["href", "mailto:help@onlineusertesting.com"], [1, "NeedFaq"]],
        template: function ContactUsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Credit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Billing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Contact Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Our UK Based Customer Service Team are on hand to help you Monday \u2013 Saturdays from 09:00 \u2013 17:30 If you require product information or help with an order. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " See below for all the ways you can get in touch with the Online UserTesting team. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Live Chat ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Use our live chat service for an instant response ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "help@onlineusertesting.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Need more information? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "FAQS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c5));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-us',
            templateUrl: './contact-us.component.html',
            styleUrls: ['./contact-us.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XY6P":
    /*!**************************************************************!*\
      !*** ./src/app/forgot-password/forgot-password.component.ts ***!
      \**************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function XY6P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ForgotPasswordComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/product"];
      };

      var _c2 = function _c2() {
        return ["/help"];
      };

      var _c3 = function _c3() {
        return ["/register"];
      };

      var ForgotPasswordComponent = /*#__PURE__*/function () {
        function ForgotPasswordComponent(route, service) {
          _classCallCheck(this, ForgotPasswordComponent);

          this.route = route;
          this.service = service;
          this.formInvalid = false;
          this.submitted = true;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            if (this.LoginForm.invalid) {
              this.formInvalid = true; // this.service.sweetAlert('fghjk')

              return;
            } else {
              this.formInvalid = false;
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email
              };
              this.service.postApi('web/forgotPassword', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  //  localStorage.setItem('userTesting', JSON.stringify(success.result));
                  //  localStorage.setItem("userTestingWebLog", 'yeppp')
                  //  this.route.navigate(['/user','verification'])
                  _this17.service.succ(success.message);
                } else {
                  _this17.service.err(success.message); // this.service.err(success.message)

                }
              }, function (error) {
                _this17.service.err("Something went wrong"); //this.service.err("Something went wrong")

              });
              this.service.showSpinner();
            }
          }
        }]);

        return ForgotPasswordComponent;
      }();

      ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
      };

      ForgotPasswordComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        decls: 42,
        vars: 10,
        consts: [[1, "Header", "Header-3"], [1, "navbar"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#Menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand", 3, "routerLink"], ["id", "Menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [3, "routerLink"], [1, "LoginArea"], [1, "LoginBox"], ["src", "assets/images/forgot.png"], [3, "formGroup"], [1, "form-group"], ["formControlName", "email", "type", "text", "placeholder", "Email address", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [3, "click"], [1, "text-danger"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Signup ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Forgot your password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Reset it now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ForgotPasswordComponent_div_39_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ForgotPasswordComponent_Template_button_click_40_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Send me a new password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("email").hasError("required") && ctx.LoginForm.get("email").dirty || ctx.formInvalid && !ctx.LoginForm.value.email);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./product/product.component */
      "LvIC");
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      "9lXE");
      /* harmony import */


      var _demos_demos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./demos/demos.component */
      "6Eq7");
      /* harmony import */


      var _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./customer/customer.component */
      "MwYd");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _get_paid_get_paid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./get-paid/get-paid.component */
      "/+4F");
      /* harmony import */


      var _help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./help/help.component */
      "i2qR");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "XY6P");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _news_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./news/news.component */
      "6XR0");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _password_set_password_set_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./password-set/password-set.component */
      "U+5A");
      /* harmony import */


      var _organization_login_organization_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./organization-login/organization-login.component */
      "CWLB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_provider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./app.provider */
      "FfXl");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "dEEo");
      /* harmony import */


      var _service_agreement_service_agreement_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./service-agreement/service-agreement.component */
      "Mt+8");
      /* harmony import */


      var _terms_terms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./terms/terms.component */
      "eIz4");
      /* harmony import */


      var _copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./copyrights/copyrights.component */
      "mnjV");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_app_provider__WEBPACK_IMPORTED_MODULE_26__["AppProvider"]],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
          progressAnimation: "decreasing",
          newestOnTop: true,
          maxOpened: 3,
          preventDuplicates: true,
          progressBar: true
        }), ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _demos_demos_component__WEBPACK_IMPORTED_MODULE_9__["DemosComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _get_paid_get_paid_component__WEBPACK_IMPORTED_MODULE_12__["GetPaidComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], _password_set_password_set_component__WEBPACK_IMPORTED_MODULE_19__["PasswordSetComponent"], _organization_login_organization_login_component__WEBPACK_IMPORTED_MODULE_20__["OrganizationLoginComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyPolicyComponent"], _service_agreement_service_agreement_component__WEBPACK_IMPORTED_MODULE_28__["ServiceAgreementComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_29__["TermsComponent"], _copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_30__["CopyrightsComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _demos_demos_component__WEBPACK_IMPORTED_MODULE_9__["DemosComponent"], _customer_customer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _get_paid_get_paid_component__WEBPACK_IMPORTED_MODULE_12__["GetPaidComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], _password_set_password_set_component__WEBPACK_IMPORTED_MODULE_19__["PasswordSetComponent"], _organization_login_organization_login_component__WEBPACK_IMPORTED_MODULE_20__["OrganizationLoginComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_27__["PrivacyPolicyComponent"], _service_agreement_service_agreement_component__WEBPACK_IMPORTED_MODULE_28__["ServiceAgreementComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_29__["TermsComponent"], _copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_30__["CopyrightsComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_23__["ToastrModule"].forRoot({
              progressAnimation: "decreasing",
              newestOnTop: true,
              maxOpened: 3,
              preventDuplicates: true,
              progressBar: true
            }), ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"]],
            providers: [_app_provider__WEBPACK_IMPORTED_MODULE_26__["AppProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aki3":
    /*!******************************************************!*\
      !*** ./src/app/services/sidebar-collapse.service.ts ***!
      \******************************************************/

    /*! exports provided: SidebarCollapseService */

    /***/
    function aki3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarCollapseService", function () {
        return SidebarCollapseService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarCollapseService = /*#__PURE__*/function () {
        function SidebarCollapseService() {
          _classCallCheck(this, SidebarCollapseService);

          this.sidenav = true;
        }

        _createClass(SidebarCollapseService, [{
          key: "toggleSidenav",
          value: function toggleSidenav() {
            this.sidenav = !this.sidenav;
          }
        }]);

        return SidebarCollapseService;
      }();

      SidebarCollapseService.??fac = function SidebarCollapseService_Factory(t) {
        return new (t || SidebarCollapseService)();
      };

      SidebarCollapseService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: SidebarCollapseService,
        factory: SidebarCollapseService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarCollapseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "dEEo":
    /*!************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
      \************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function dEEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent() {
          _classCallCheck(this, PrivacyPolicyComponent);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.??fac = function PrivacyPolicyComponent_Factory(t) {
        return new (t || PrivacyPolicyComponent)();
      };

      PrivacyPolicyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PrivacyPolicyComponent,
        selectors: [["app-privacy-policy"]],
        decls: 324,
        vars: 0,
        consts: [[1, "FAQArea"], [1, "FAQHead"], [1, "container"], [1, "FAQBody"], [1, "FAQBox"], [1, "TableList"], [1, "dragscroll"]],
        template: function PrivacyPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Privacy policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "This privacy policy applies between you, the User of this Website and\u202FOnline UserTesting, the owner and provider of this Website.\u202FOnline UserTesting\u202Ftakes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "This privacy policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at : https://www.onlineusertesting.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Please read this privacy policy carefully. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Definitions and interpretation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "1. In this privacy policy, the following definitions are used: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "collectively all information that you submit to\u202FOnline UserTesting\u202Fvia the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (\u202FCookies); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Data Protection Laws ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "GDPR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "the General Data Protection Regulation (EU) 2016/679; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Online UserTesting, we or us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Online UserTesting, a company incorporated in\u202FEngland and Wales\u202Fwith registered number\u202F11322458\u202Fwhose registered office is at\u202F20-22 Wenlock Road, England, N1 7GU ;\u202F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "UK and EU Cookie Law ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "User\u202For\u202Fyou ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "any third party that accesses the Website and is not either (i) employed by\u202FOnline UserTesting\u202Fand acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to\u202FOnline UserTesting\u202Fand accessing the Website in connection with the provision of such services; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Website ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "the website that you are currently using,\u202Fhttps://www.onlineusertesting.com and any sub-domains of this site unless expressly excluded by their own terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "2. In this privacy policy, unless the context requires a different interpretation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "a. the singular includes the plural and vice versa; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "b. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "c. a reference to a person includes firms, companies, government entities, trusts and partnerships; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "d. \"including\" is understood to mean \"including without limitation\"; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "e. reference to any statutory provision includes any modification or amendment of it; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "f. the headings and sub-headings do not form part of this privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Scope of this privacy policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "3. This privacy policy applies only to the actions of\u202FOnline UserTesting\u202Fand Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "4. For purposes of the applicable Data Protection Laws,\u202FOnline UserTesting\u202Fis the \"data controller\". This means that\u202FOnline UserTesting\u202Fdetermines the purposes for which, and the manner in which, your Data is processed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Data Collected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "5. We may collect the following Data, which includes personal Data, from you: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "a. name;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "b. date of birth;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "c. gender;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "d. job title;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "e. profession;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "f. contact Information such as email addresses and telephone numbers; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "g. demographic information such as postcode, preferences and interests; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "h. financial information such as credit / debit card numbers; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "i. IP address (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "j. web browser type and version (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "k. operating system (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "l. a list of URLs starting with a referring site, your activity on this Website, and the site you exit to (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "m. in each case, in accordance with this privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " How we collect Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "6. We collect Data in the following ways: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "a. data is given to us by you ; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "b. data is collected automatically. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Data that is given to us by you ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "7. Online UserTesting\u202Fwill collect your Data in a number of ways, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "a. when you contact us through the Website, by telephone, post, e-mail or through any other means; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "b. when you register with us and set up an account to receive our products/services; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "c. when you complete surveys that we use for research purposes (although you are not obliged to respond to them); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "d. when you enter a competition or promotion through a social media channel; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "e. when you elect to receive marketing communications from us;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Data that is collected automatically ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "8. To the extent that you access the Website, we will collect your Data automatically, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "a. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "b. we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed \"Cookies\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Our use of Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "9. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customise or update the Website;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "10. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed \"Your rights\" below). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "11. When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Who we share Data with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "11. We may share your Data with the following groups of people for the following reasons: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "a. any of our group companies or affiliates -\u202Fto ensure the proper administration of your website and business;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Keeping Data secure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "13. We will use technical and organisational measures to safeguard your Data, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "a. access to your account is controlled by a password and a user name that is unique to you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "b. we store your Data on secure servers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "c. payment details are encrypted using SSL technology (typically you will see a lock icon or green address bar (or both) in your browser when we use this technology.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "14. We are certified to ISO 27001. This family of standards helps us manage your Data and keep it secure. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "15. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address:\u202Fhello@onlineusertesting.com. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "16. If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Data retention");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "17. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "18. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Your rights ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "19. You have the following rights in relation to your Data: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "a. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Right to access\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is \"manifestly unfounded or excessive.\" Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "b. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Right to correct\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " the right to have your Data rectified if it is inaccurate or incomplete.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "c. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Right to erase\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " the right to request that we delete or remove your Data from our systems.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "d. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Right to restrict our use of your Data\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, " the right to \"block\" us from using your Data or limit the way in which we can use it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "e. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Right to data portability\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " the right to request that we move, copy or transfer your Data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "f. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Right to object\u202F- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "the right to object to our use of your Data including where we use it for our legitimate interests.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "20. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address:\u202Fhello@onlineusertesting.com.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "21. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "22. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Transfers outside the European Economic Area ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "23. Data which we collect from you may be stored and processed in and transferred to countries outside of the European Economic Area (EEA). For example, this could occur if our servers are located in a country outside the EEA or one of our service providers is situated in a country outside the EEA. We also share information with our group companies, some of which are located outside the EEA. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "24. We will only transfer Data outside the EEA where it is compliant with data protection legislation and the means of transfer provides adequate safeguards in relation to your data, eg by way of data transfer agreement, incorporating the current standard contractual clauses adopted by the European Commission, or by signing up to the EU-US Privacy Shield Framework, in the event that the organisation in receipt of the Data is based in the United States of America. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "25. To ensure that your Data receives an adequate level of protection, we have put in place appropriate safeguards and procedures with the third parties we share your Data with. This ensures your Data is treated by those third parties in a way that is consistent with the Data Protection Laws.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Links to other websites ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "26. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Changes of business ownership and control ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "27. Online UserTesting\u202Fmay, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of\u202FOnline UserTesting. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "28. We may also disclose Data to a prospective purchaser of our business or any part of it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "29. In the above instances, we will take steps with the aim of ensuring your privacy is protected.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "30. This Website may place and access certain Cookies on your computer. Online UserTesting\u202Fuses Cookies to improve your experience of using the Website and to improve our range of services. Online UserTesting\u202Fhas carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "31. All Cookies used by this Website are used in accordance with current UK and EU Cookie Law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "32. Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling\u202FOnline UserTesting\u202Fto provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "33. This Website may place the following Cookies: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Type of Cookie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Purpose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Strictly necessary cookies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "34. You can find a list of Cookies that we use in the Cookies Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "35. You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "36. You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "37. It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "38. For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "39. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "40. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "41. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "42. This Agreement will be governed by and interpreted according to the law of\u202FEngland and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the\u202FEnglish and Welsh courts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Changes to this privacy policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "43. Online UserTesting\u202Freserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " You may contact\u202FOnline UserTesting\u202Fby email at\u202Fhello@onlineusertesting.com.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Cookies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think that we have missed a cookie or there is any discrepancy, please let us know. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " Strictly necessary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "We use the following strictly necessary cookies: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Discription of Cookie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Purpose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "We use this session cookie to remember you and maintain your session whilst you are using our website ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrivacyPolicyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy-policy',
            templateUrl: './privacy-policy.component.html',
            styleUrls: ['./privacy-policy.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "eIz4":
    /*!******************************************!*\
      !*** ./src/app/terms/terms.component.ts ***!
      \******************************************/

    /*! exports provided: TermsComponent */

    /***/
    function eIz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent() {
          _classCallCheck(this, TermsComponent);
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsComponent;
      }();

      TermsComponent.??fac = function TermsComponent_Factory(t) {
        return new (t || TermsComponent)();
      };

      TermsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TermsComponent,
        selectors: [["app-terms"]],
        decls: 106,
        vars: 0,
        consts: [[1, "FAQArea"], [1, "FAQHead"], [1, "container"], [1, "FAQBody"], [1, "FAQBox"], [2, "margin", "40px 0 15px 0"]],
        template: function TermsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Terms of use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "aside", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Introduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and\u202FOnline UserTesting,\u202Fthe owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "In these terms and conditions,\u202FUser\u202For\u202FUsers\u202Fmeans any third party that accesses the Website and is not either (i) employed by Online UserTesting and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Online UserTesting and accessing the Website in connection with the provision of such services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "You must be at least 18 years of age to use this Website. By using the Website and agreeing to these terms and conditions, you represent and warrant that you are at least 18 years of age. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Intellectual property and acceptable use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "1. All Content included on the Website, unless uploaded by Users, is the property of\u202FOnline UserTesting , our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users. By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site without the owner's prior written permission ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "2. You may, for your own personal, non-commercial use only, do the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "a. retrieve, display and view the Content on a computer screen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the written permission of\u202FOnline UserTesting . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Prohibited use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "4. You may not use the Website for any of the following purposes: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "a. in any way which causes, or may cause, damage to the Website or interferes with any other person's use or enjoyment of the Website; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "b. in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable or in breach of any applicable law, regulation, governmental order; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "c. making, transmitting or storing electronic copies of Content protected by copyright without the permission of the owner. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Privacy Policy and Cookies Policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " 5. Use of the Website is also governed by our Privacy Policy and Cookies Policy, which are incorporated into these terms and conditions by this reference. To view the Privacy Policy and Cookies Policy, please click on the following:\u202Fhttps://www.onlineusertesting.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Availability of the Website and disclaimers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "6. Any online facilities, tools, services or information that\u202FOnline UserTesting makes available through the Website (the\u202FService) is provided \"as is\" and on an \"as available\" basis. We give no warranty that the Service will be free of defects and/or faults. To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality. Online UserTesting is under no obligation to update information on the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "7. Whilst\u202FOnline UserTesting uses reasonable endeavours to ensure that the Website is secure and free of errors, viruses and other malware, we give no warranty or guaranty in that regard and all Users take responsibility for their own security, that of their personal details and their computers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "8. Online UserTesting accepts no liability for any disruption or non-availability of the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "9. Online UserTesting reserves the right to alter, suspend or discontinue any part (or the whole of) the Website including, but not limited to, any products and/or services available. These terms and conditions shall continue to apply to any modified version of the Website unless it is expressly stated otherwise.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Limitation of liability ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "10. Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or your liabilities in any way that is not permitted under applicable law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "11. To the extent that the Website and Content are provided free of charge, we will not be liable to you for any loss or damage of any kind. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "12. We will not be liable to you in respect of any losses arising out of events beyond our reasonable control. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "13. To the maximum extent permitted by law, Online UserTesting accepts no liability for any of the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "a. any business losses, such as loss of profits, income, revenue, anticipated savings, business, contracts, goodwill or commercial opportunities; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "b. loss or corruption of any data, database or software; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "c. any special, indirect or consequential loss or damage.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "General ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "14. You may not transfer any of your rights under these terms and conditions to any other person. We may transfer our rights under these terms and conditions where we reasonably believe your rights will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "15. These terms and conditions may be varied by us from time to time. Such revised terms will apply to the Website from the date of publication. Users should check the terms and conditions regularly to ensure familiarity with the then current version. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "16. These terms and conditions together with the Privacy Policy and Cookies Policy contain the whole agreement between the parties relating to its subject matter and supersede all prior discussions, arrangements or agreements that might have taken place in relation to the terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "17. The\u202FContracts (Rights of Third Parties) Act 1999\u202Fshall not apply to these terms and conditions and no third party will have any right to enforce or rely on any provision of these terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "18. If any court or competent authority finds that any provision of these terms and conditions (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of these terms and conditions will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "19. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "20. This Agreement shall be governed by and interpreted according to the law of\u202FEngland and Wales\u202Fand all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the\u202FEnglish and Welsh\u202Fcourts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "\u202FOnline UserTesting details ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "21. Online UserTesting is a company incorporated in with registered number 11322458\u202Fwhose registered ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " address is\u202F20-22 Wenlock Road,\u202FLondon,\u202FN1 7GU and it operates ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " the Website\u202Fhttps://www.onlineusertesting.com\u202F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " You can contact\u202FOnline UserTesting by email on\u202Fhello@onlineusertesting.com. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TermsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-terms',
            templateUrl: './terms.component.html',
            styleUrls: ['./terms.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _c1 = function _c1() {
        return ["/get-paid"];
      };

      function HeaderComponent_ul_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Take Part In Research");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](3, _c1));
        }
      }

      function HeaderComponent_ul_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Take Part In Research");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_ul_34_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r2.onGoToPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Go To DashBoard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return [""];
      };

      var _c3 = function _c3() {
        return ["/product"];
      };

      var _c4 = function _c4() {
        return ["/pricing"];
      };

      var _c5 = function _c5() {
        return ["/demos"];
      };

      var _c6 = function _c6() {
        return ["/customer"];
      };

      var _c7 = function _c7() {
        return ["/help"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(route) {
          _classCallCheck(this, HeaderComponent);

          this.route = route;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginUserData = JSON.parse(localStorage.getItem('userTesting'));
            console.log(this.loginUserData);
          }
        }, {
          key: "onGoToPage",
          value: function onGoToPage() {
            if (this.loginUserData && this.loginUserData.type != 'observer') {
              this.route.navigate(['/user', 'project-list']);
            } else {
              this.route.navigate(['/user', 'recording-list']);
            }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 35,
        vars: 14,
        consts: [[1, "Header"], [1, "navbar"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#Menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "userHeadLogo"], [1, "navbar-brand", 3, "routerLink"], ["id", "Menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-left"], [3, "routerLink"], ["class", "nav navbar-nav navbar-right", 4, "ngIf"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "javascript:void(0);", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Demos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, HeaderComponent_ul_33_Template, 7, 4, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, HeaderComponent_ul_34_Template, 7, 2, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.loginUserData);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FooterComponent_div_89_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "We use cookies to improve your experience on our website. By clicking \u201CAccept All Cookies\u201D, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts. Sometimes we and/or our partners don\u2019t rely solely on your consent but rely on legitimate interest to process your data. Control how your data is used and view more info at any time via the Cookie Settings link in the Privacy Policy.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FooterComponent_div_89_Template_a_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r1.onAcceptOrder();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Accept Cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Reject Cookies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/product"];
      };

      var _c1 = function _c1() {
        return ["/demos"];
      };

      var _c2 = function _c2() {
        return ["/pricing"];
      };

      var _c3 = function _c3() {
        return ["/news"];
      };

      var _c4 = function _c4() {
        return ["/about"];
      };

      var _c5 = function _c5() {
        return ["/customer"];
      };

      var _c6 = function _c6() {
        return ["/help"];
      };

      var _c7 = function _c7() {
        return ["/service-agreement"];
      };

      var _c8 = function _c8() {
        return ["/terms"];
      };

      var _c9 = function _c9() {
        return ["/privacy-policy"];
      };

      var _c10 = function _c10() {
        return ["/copyrights"];
      };

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.acceptStatus = 'no';
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var acceptStatus = localStorage.getItem('userTestingWebCookies');
            this.acceptStatus = acceptStatus ? acceptStatus : 'no';
          }
        }, {
          key: "onAcceptOrder",
          value: function onAcceptOrder() {
            this.acceptStatus = 'yes';
            console.log(this.acceptStatus);
            localStorage.setItem("userTestingWebCookies", 'yes');
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 90,
        vars: 23,
        consts: [[1, "Footer"], [1, "container"], [1, "row"], [1, "col-sm-4"], [1, "Foot"], [1, "col-sm-2"], [3, "routerLink"], ["href", "javascript:void(0);"], ["src", "assets/images/b.png"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-twitter"], ["class", "Cookies", 4, "ngIf"], [1, "Cookies"], ["href", "javascript:void(0);", 3, "click"], ["href", "javascript:void(0);", 2, "color", "red", "margin-left", "20px"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Quick and easy unmoderated online UserTesting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Find out how customers use your website when browsing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " or buying products or services. Listen to their feedback and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " find out what\u2019s working and what isn\u2019t. Use our in-house ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " recruiters to access hand-picked UK based participants ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " or recruit and use your own respondents.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Copyrights 2019 \xA9 Online UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " All rights reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Online UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Demos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "What is new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "All About Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "About & contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Legal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Service agreement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Terms and conditions of use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Copyright notice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](89, FooterComponent_div_89_Template, 7, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](17, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](22, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.acceptStatus != "yes");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "i2qR":
    /*!****************************************!*\
      !*** ./src/app/help/help.component.ts ***!
      \****************************************/

    /*! exports provided: HelpComponent */

    /***/
    function i2qR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
        return HelpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var _c0 = function _c0() {
        return ["/get-paid"];
      };

      var HelpComponent = /*#__PURE__*/function () {
        function HelpComponent() {
          _classCallCheck(this, HelpComponent);
        }

        _createClass(HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpComponent;
      }();

      HelpComponent.??fac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)();
      };

      HelpComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HelpComponent,
        selectors: [["app-help"]],
        decls: 200,
        vars: 2,
        consts: [[1, "FAQArea"], [1, "FAQHead"], [1, "container"], [1, "FAQBody"], [1, "FAQBox"], ["src", "assets/images/tick.png", "alt", "", 1, "tickImg"], [1, "FAQUse"], [3, "routerLink"], [1, "fa", "fa-angle-right"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Frequently Asked Question");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "About UserTesting and User Research");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "What is Online UserTesting?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Online UserTesting lets you better understand how customers use your website when browsing or buying products and services. You can gain insights into what\u2019s working and what could be improved, so customers get the best possible experience - and stay customers for longer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Boost sales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Improve loyalty");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Beat competitor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Online UserTesting works via our easy-to-use software, which you can get started with in three steps:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Gather users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " We\u2019ll reach out to your existing customers or recruit new ones based on your target user profile. Or, use our software and manage outreach in-house");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Click and connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " Share a personalised link with users to begin the test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Get the results");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Receive a video link for each participant, showing users navigating the test and their feedback on the process");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Who is Online UserTesting for?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Online UserTesting can benefit businesses of all sizes and in all sectors and industries.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "What kind of tests can I run?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "In terms of job description, anyone who inputs into the customer experience process may be interested in Online UserTesting. This includes, e-commerce managers, UX designers, product managers and marketers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Our platform lets businesses conduct a variety of unmoderated studies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Survey questions and numeric rating scales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Competitive benchmarking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Identification of Net Promoter Score (NPS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "A/B testing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Competitor tests ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Accompanied Shops ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Product unboxing and setup");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "Light ethnographics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Online ordering & Click and Collect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Recruitment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Use our expert in-house team to recruit participants or, you can just use our software and recruit your own participants.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "How quickly will I receive results? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Some tests take an hour to turn around but response times vary. Tests can take longer if you require users to meet a very specific demographic spec.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "If our team is running your study, the typical turnaround time from your first contact to the final test is approximately two weeks. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "How many users should I include in a test?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "This depends on the type of test you want to run.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Five participants is typical for an examination of the user experience of a new product. Many researchers conduct tests at multiple points throughout the product development cycle as you can start testing a website when it is at wireframe stage. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "If you would like to conduct a more rigorous test and uncover trends and insights beyond the scope of basic usability, we recommend that you recruit five to eight participants, per audience segment. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Do you provide quantitative and qualitative results?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "In addition to capturing video and audio, you can include survey questions that require written responses. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "RESPONDENTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Can you recruit respondents from outside the UK?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Yes, we can recruit test participants from the UK, America and Australia.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Can I test my mobile app?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, "We are currently developing a mobile app. At the moment you can use our platform to test websites on laptops and desktops devices. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Testing a site that\u2019s only partially completed or requires a password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Save time by running user tests on prototypes and staging websites. When you write the instructions for your test you will need to tell the respondents that the website or app is only partially complete. If it requires a username and/or password, you will need to give these details to the respondents so that they can complete the test. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "Can I test a competitor\u2019s website or product? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "Yes, you can test any website. You can also run an AB test in which the user interacts with two different websites, yours and a competitor and provides feedback about each site. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "What if I want to watch the user buy a product during an online user-test? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "If you require the respondents to buy or a product or service, you will need to provide a gift code/method of payment. You will need to clearly explain this aspect of the test to the participants. Or let us know before the test so we can manage this process for you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](148, "Video feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Do the videos record audio and video?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Yes. Our screen recording software records both ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](157, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "The respondent\u2019s voice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](160, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "The respondent\u2019s computer screen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "The respondent\u2019s face ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "This means that you can note every action and comment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "How long are the videos?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "Videos are usually between 10 and 15 minutes. The length of the video will depend on how many tasks you ask the user to complete.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "Can I test customer experiences? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](177, "Yes, you can run a range of different customer experience tests from product unboxing to respondent\u2019s reactions to a competitors website.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "Contact Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Our UK Based Customer Service Team are on hand to help you Monday \u2013 Saturdays from 09:00 \u2013 17:30 If you require product information or help with an order. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "See below for all the ways you can get in touch with the Online UserTesting team. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "Live chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Use our live chat service for an instant response ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "help@onlineusertesting.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, "Would you like to take part in research?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Take Part In Research ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](198, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](199, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](196);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HelpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-help',
            templateUrl: './help.component.html',
            styleUrls: ['./help.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "k9B/":
    /*!*************************************************!*\
      !*** ./src/app/user/header/header.component.ts ***!
      \*************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function k9B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app.provider */
      "FfXl");
      /* harmony import */


      var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app.service */
      "F5nt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_sidebar_collapse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sidebar-collapse.service */
      "aki3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function HeaderComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_li_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r6.onGoToPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/user", "invite"];
      };

      function HeaderComponent_li_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["/user", "myaccount"];
      };

      function HeaderComponent_li_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " My Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["/user", "Organization-setting"];
      };

      function HeaderComponent_li_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Organization settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c2));
        }
      }

      var _c3 = function _c3() {
        return ["/user", "Organization-member"];
      };

      function HeaderComponent_li_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Members ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c3));
        }
      }

      var _c4 = function _c4() {
        return ["/user", "Organization-billing"];
      };

      function HeaderComponent_li_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Billing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return ["/help"];
      };

      var _c6 = function _c6() {
        return [""];
      };

      var _c7 = function _c7() {
        return ["/product"];
      };

      var _c8 = function _c8() {
        return ["/pricing"];
      };

      var _c9 = function _c9() {
        return ["/user", "Credit"];
      };

      var _c10 = function _c10() {
        return ["/news"];
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(appProvider, appService, route, activateRoute, sidebarcollapse) {
          _classCallCheck(this, HeaderComponent);

          this.appProvider = appProvider;
          this.appService = appService;
          this.route = route;
          this.activateRoute = activateRoute;
          this.sidebarcollapse = sidebarcollapse;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".Toggle").click(function () {
              $(".Header").addClass("HeaderPush");
              $(".SidenavArea").addClass("SidePush");
              $(".WrapperArea").css({
                "margin-left": "60px",
                "width": "calc(100% - 60px)"
              });
            });
            $(".CloseToggle").click(function () {
              $(".Header").removeClass("HeaderPush");
              $(".SidenavArea").removeClass("SidePush");
              $(".WrapperArea").css({
                "margin-left": "225px",
                "width": "calc(100% - 225px)"
              });
            });
            this.loginUserData = this.appProvider.current.adminData; // this.loginUserData = JSON.parse(localStorage.getItem('userTesting'))

            console.log(this.loginUserData);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarcollapse.toggleSidenav();
          }
        }, {
          key: "onGoToPage",
          value: function onGoToPage() {
            if (this.loginUserData && this.loginUserData.type != 'observer') {
              this.route.navigate(['/user', 'project-list']);
            } else {
              this.route.navigate(['/user', 'recording-list']);
            }
          }
        }, {
          key: "onLogOut",
          value: function onLogOut() {
            localStorage.removeItem('userTesting');
            this.route.navigate(['/login']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.??fac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_provider__WEBPACK_IMPORTED_MODULE_1__["AppProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_sidebar_collapse_service__WEBPACK_IMPORTED_MODULE_4__["SidebarCollapseService"]));
      };

      HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 95,
        vars: 29,
        consts: [[1, "Header", 3, "ngClass"], [1, "HeaderLeft"], [4, "ngIf"], [3, "routerLink"], [1, "dropdown"], ["href", "javascript:void(0);", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], ["src", "assets/images/horizontal.png"], [1, "dropdown-menu"], [1, "HeaderMiddle"], [1, "HeaderRight"], ["href", "javaScript:void(0)", 3, "routerLink"], ["src", "assets/images/price-tag.svg", 2, "filter", "brightness(0) invert(1)", "width", "28px"], ["src", "assets/images/horn.svg", 2, "filter", "brightness(0) invert(1)", "width", "28px"], [1, "Avater"], ["href", "javascript:void(0);"], [2, "padding-top", "2px"], ["href", "javascript:void(0)", 3, "click"], [1, "divider"], [1, "Owner"], [1, "hamburg_btn", 3, "ngClass", "click"], [1, "open"], ["id", "notification", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "ShareLink"], [1, "Small-Wrapper"], [1, "Title", 2, "margin-bottom", "20px"], [1, "NotificationArea"], [1, "list-group"], [1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start"], [1, "msg-right"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-1"], ["href", "javascript:void(0);", 3, "click"], ["src", "assets/images/User-Icon.png"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, HeaderComponent_li_4_Template, 3, 0, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "UserTesting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, HeaderComponent_li_37_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h5", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, HeaderComponent_li_51_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_a_click_53_listener() {
              return ctx.onLogOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, HeaderComponent_li_60_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, HeaderComponent_li_61_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Credit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, HeaderComponent_li_65_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_div_click_66_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h4", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Total credit value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " 1. Amita Sharma (6)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "2. Vishal Yadav (9)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h5", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "3. Inshad Ansari (4)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", !ctx.sidebarcollapse.sidenav ? "demo" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](22, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](23, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](24, _c8));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](25, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](26, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](27, _c10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.loginUserData == null ? null : ctx.loginUserData.fullName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.loginUserData == null ? null : ctx.loginUserData.orgDetails == null ? null : ctx.loginUserData.orgDetails.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.loginUserData == null ? null : ctx.loginUserData.fullName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.loginUserData == null ? null : ctx.loginUserData.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.loginUserData == null ? null : ctx.loginUserData.orgDetails == null ? null : ctx.loginUserData.orgDetails.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](28, _c9));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.loginUserData.emailVerify == "yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", !ctx.sidebarcollapse.sidenav ? "open" : "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".hamburg_btn[_ngcontent-%COMP%] {\r\n    width:25px;\r\n    \r\n    margin-left: 20px;\r\n    margin-top: 13px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 999;\r\n    float: right;\r\n    margin-right: 14px;\r\n}\r\n\r\n.hamburg_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width:100%;\r\n    height: 3px;\r\n    background-color: #fff;\r\n    display: block;\r\n    position: absolute;\r\n    transition:all 0.2s;\r\n}\r\n\r\n.hamburg_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    top: 7px;\r\n}\r\n\r\n.hamburg_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\r\n    top:14px;\r\n}\r\n\r\n.hamburg_btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\r\n    display:none;\r\n}\r\n\r\n.hamburg_btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n    transform: rotate(45deg);\r\n    top: 8px;\r\n}\r\n\r\n.hamburg_btn.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){\r\n    transform: rotate(-45deg);\r\n    top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFtYnVyZ19idG4ge1xyXG4gICAgd2lkdGg6MjVweDtcclxuICAgIC8qIGhlaWdodDogMzBweDsgKi9cclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxufVxyXG5cclxuLmhhbWJ1cmdfYnRuIHNwYW4ge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjphbGwgMC4ycztcclxufVxyXG5cclxuLmhhbWJ1cmdfYnRuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcblxyXG4uaGFtYnVyZ19idG4gc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgdG9wOjE0cHg7XHJcbn1cclxuXHJcbi5oYW1idXJnX2J0bi5vcGVuIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuLmhhbWJ1cmdfYnRuLm9wZW4gc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG5cclxuLmhhbWJ1cmdfYnRuLm9wZW4gc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdG9wOiA4cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _app_provider__WEBPACK_IMPORTED_MODULE_1__["AppProvider"]
          }, {
            type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: src_app_services_sidebar_collapse_service__WEBPACK_IMPORTED_MODULE_4__["SidebarCollapseService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mnjV":
    /*!****************************************************!*\
      !*** ./src/app/copyrights/copyrights.component.ts ***!
      \****************************************************/

    /*! exports provided: CopyrightsComponent */

    /***/
    function mnjV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CopyrightsComponent", function () {
        return CopyrightsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "fECr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../footer/footer.component */
      "fp1T");

      var CopyrightsComponent = /*#__PURE__*/function () {
        function CopyrightsComponent() {
          _classCallCheck(this, CopyrightsComponent);
        }

        _createClass(CopyrightsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CopyrightsComponent;
      }();

      CopyrightsComponent.??fac = function CopyrightsComponent_Factory(t) {
        return new (t || CopyrightsComponent)();
      };

      CopyrightsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CopyrightsComponent,
        selectors: [["app-copyrights"]],
        decls: 324,
        vars: 0,
        consts: [[1, "FAQArea"], [1, "FAQHead"], [1, "container"], [1, "FAQBody"], [1, "FAQBox"], [1, "TableList"], [1, "dragscroll"]],
        template: function CopyrightsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Copyright Notice ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "This privacy policy applies between you, the User of this Website and\u202FOnline UserTesting, the owner and provider of this Website.\u202FOnline UserTesting\u202Ftakes the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "This privacy policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at:\u202Fhttps://www.onlineusertesting.com/. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Please read this privacy policy carefully. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Definitions and interpretation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "1. In this privacy policy, the following definitions are used: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "collectively all information that you submit to\u202FOnline UserTesting\u202Fvia the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (\u202FCookies); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Data Protection Laws ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "any applicable law relating to the processing of personal Data, including but not limited to the Directive 96/46/EC (Data Protection Directive) or the GDPR, and any national implementing laws, regulations and secondary legislation, for as long as the GDPR is effective in the UK; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "GDPR");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "the General Data Protection Regulation (EU) 2016/679; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Online UserTesting, we or us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Online UserTesting, a company incorporated in\u202FEngland and Wales\u202Fwith registered number\u202F11322458\u202Fwhose registered office is at\u202F20-22 Wenlock Road, England, N1 7GU ;\u202F");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "UK and EU Cookie Law ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "User\u202For\u202Fyou ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "any third party that accesses the Website and is not either (i) employed by\u202FOnline UserTesting\u202Fand acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to\u202FOnline UserTesting\u202Fand accessing the Website in connection with the provision of such services; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Website ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "the website that you are currently using,\u202Fhttps://www.onlineusertesting.com/, and any sub-domains of this site unless expressly excluded by their own terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "2. In this privacy policy, unless the context requires a different interpretation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "a. the singular includes the plural and vice versa; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "b. references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "c. a reference to a person includes firms, companies, government entities, trusts and partnerships; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "d. \"including\" is understood to mean \"including without limitation\"; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "e. reference to any statutory provision includes any modification or amendment of it; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "f. the headings and sub-headings do not form part of this privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Scope of this privacy policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "3. This privacy policy applies only to the actions of\u202FOnline UserTesting\u202Fand Users with respect to this Website. It does not extend to any websites that can be accessed from this Website including, but not limited to, any links we may provide to social media websites. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "4. For purposes of the applicable Data Protection Laws,\u202FOnline UserTesting\u202Fis the \"data controller\". This means that\u202FOnline UserTesting\u202Fdetermines the purposes for which, and the manner in which, your Data is processed.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Data Collected");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "5. We may collect the following Data, which includes personal Data, from you: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "a. name;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "b. date of birth;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "c. gender;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "d. job title;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "e. profession;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "f. contact Information such as email addresses and telephone numbers; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "g. demographic information such as postcode, preferences and interests; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "h. financial information such as credit / debit card numbers; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "i. IP address (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "j. web browser type and version (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "k. operating system (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "l. a list of URLs starting with a referring site, your activity on this Website, and the site you exit to (automatically collected); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "m. in each case, in accordance with this privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " How we collect Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "6. We collect Data in the following ways: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "a. data is given to us by you ; and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "b. data is collected automatically. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Data that is given to us by you ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "7. Online UserTesting\u202Fwill collect your Data in a number of ways, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "a. when you contact us through the Website, by telephone, post, e-mail or through any other means; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "b. when you register with us and set up an account to receive our products/services; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "c. when you complete surveys that we use for research purposes (although you are not obliged to respond to them); ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "d. when you enter a competition or promotion through a social media channel; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "e. when you elect to receive marketing communications from us;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, " in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Data that is collected automatically ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](136, "8. To the extent that you access the Website, we will collect your Data automatically, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "a. we automatically collect some information about your visit to the Website. This information helps us to make improvements to Website content and navigation, and includes your IP address, the date, times and frequency with which you access the Website and the way you use and interact with its content. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](140, "b. we will collect your Data automatically via cookies, in line with the cookie settings on your browser. For more information about cookies, and how we use them on the Website, see the section below, headed \"Cookies\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "Our use of Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "9. Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our Website. Specifically, Data may be used by us for the following reasons: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "contact for market research purposes which may be done using email, telephone, fax or mail. Such information may be used to customise or update the Website;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "10. We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed \"Your rights\" below). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "11. When you register with us and set up an account to receive our services, the legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "Who we share Data with ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "11. We may share your Data with the following groups of people for the following reasons: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "a. any of our group companies or affiliates -\u202Fto ensure the proper administration of your website and business;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](161, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "in each case, in accordance with this privacy policy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](165, "Keeping Data secure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, "13. We will use technical and organisational measures to safeguard your Data, for example: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "a. access to your account is controlled by a password and a user name that is unique to you. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, "b. we store your Data on secure servers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "c. payment details are encrypted using SSL technology (typically you will see a lock icon or green address bar (or both) in your browser when we use this technology.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](174, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "14. We are certified to ISO 27001. This family of standards helps us manage your Data and keep it secure. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "15. Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address:\u202Fhello@onlineusertesting.com. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, "16. If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "Data retention");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](184, "17. Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "18. Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "Your rights ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "19. You have the following rights in relation to your Data: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, "a. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "Right to access\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](195, " the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is \"manifestly unfounded or excessive.\" Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "b. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](199, "Right to correct\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, " the right to have your Data rectified if it is inaccurate or incomplete.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](202, "c. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Right to erase\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, " the right to request that we delete or remove your Data from our systems.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "d. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](209, "Right to restrict our use of your Data\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, " the right to \"block\" us from using your Data or limit the way in which we can use it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "e. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](213, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](214, "Right to data portability\u202F-");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, " the right to request that we move, copy or transfer your Data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](217, "f. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Right to object\u202F- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](220, "the right to object to our use of your Data including where we use it for our legitimate interests.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](221, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "20. To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address:\u202Fhello@onlineusertesting.com.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "21. If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "22. It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Transfers outside the European Economic Area ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](231, "23. Data which we collect from you may be stored and processed in and transferred to countries outside of the European Economic Area (EEA). For example, this could occur if our servers are located in a country outside the EEA or one of our service providers is situated in a country outside the EEA. We also share information with our group companies, some of which are located outside the EEA. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](233, "24. We will only transfer Data outside the EEA where it is compliant with data protection legislation and the means of transfer provides adequate safeguards in relation to your data, eg by way of data transfer agreement, incorporating the current standard contractual clauses adopted by the European Commission, or by signing up to the EU-US Privacy Shield Framework, in the event that the organisation in receipt of the Data is based in the United States of America. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "25. To ensure that your Data receives an adequate level of protection, we have put in place appropriate safeguards and procedures with the third parties we share your Data with. This ensures your Data is treated by those third parties in a way that is consistent with the Data Protection Laws.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](237, "Links to other websites ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](238, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](239, "26. This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](241, "Changes of business ownership and control ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "27. Online UserTesting\u202Fmay, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of\u202FOnline UserTesting. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "28. We may also disclose Data to a prospective purchaser of our business or any part of it. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](247, "29. In the above instances, we will take steps with the aim of ensuring your privacy is protected.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "30. This Website may place and access certain Cookies on your computer. Online UserTesting\u202Fuses Cookies to improve your experience of using the Website and to improve our range of services. Online UserTesting\u202Fhas carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](253, "31. All Cookies used by this Website are used in accordance with current UK and EU Cookie Law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](254, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](255, "32. Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling\u202FOnline UserTesting\u202Fto provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "33. This Website may place the following Cookies: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](265, "Type of Cookie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "Purpose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Strictly necessary cookies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](275, "34. You can find a list of Cookies that we use in the Cookies Schedule. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](276, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](277, "35. You can choose to enable or disable Cookies in your internet browser. By default, most internet browsers accept Cookies but this can be changed. For further details, please consult the help menu in your internet browser. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "36. You can choose to delete Cookies at any time; however you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](281, "37. It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "38. For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](287, "39. You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](289, "40. If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](291, "41. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](292, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](293, "42. This Agreement will be governed by and interpreted according to the law of\u202FEngland and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the\u202FEnglish and Welsh courts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Changes to this privacy policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](297, "43. Online UserTesting\u202Freserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](298, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](299, " You may contact\u202FOnline UserTesting\u202Fby email at\u202Fhello@onlineusertesting.com.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](300, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](301, "Cookies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Below is a list of the cookies that we use. We have tried to ensure this is complete and up to date, but if you think that we have missed a cookie or there is any discrepancy, please let us know. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](305, " Strictly necessary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "We use the following strictly necessary cookies: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](309, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](311, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "Discription of Cookie ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](316, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](317, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](318, "Purpose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](319, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](320, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](322, "We use this session cookie to remember you and maintain your session whilst you are using our website ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](323, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcHlyaWdodHMvY29weXJpZ2h0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CopyrightsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-copyrights',
            templateUrl: './copyrights.component.html',
            styleUrls: ['./copyrights.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "rNcS":
    /*!*****************************************************************!*\
      !*** ./src/app/user/recording-view/recording-view.component.ts ***!
      \*****************************************************************/

    /*! exports provided: RecordingViewComponent */

    /***/
    function rNcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecordingViewComponent", function () {
        return RecordingViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RecordingViewComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecordingViewComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r3.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RecordingViewComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecordingViewComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r5.stop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function RecordingViewComponent_div_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecordingViewComponent_div_73_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r7.closeNotebox();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add a note on this moment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "textarea", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Add note");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var RecordingViewComponent = /*#__PURE__*/function () {
        function RecordingViewComponent() {
          _classCallCheck(this, RecordingViewComponent);

          this.notebox = false;
          this.inactive = true;
          this.active = false;
        }

        _createClass(RecordingViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.start();
            $('body').on('click', '.next', function () {
              var id = $('.content:visible').data('id');
              var nextId = $('.content:visible').data('id') + 1;
              $('[data-id="' + id + '"]').hide();
              $('[data-id="' + nextId + '"]').show();
              $('.prev_btn').prop('disabled', false);

              if (nextId == 9) {
                $(this).prop('disabled', true);
              }
            });
            $('body').on('click', '.prev_btn', function () {
              var id = $('.content:visible').data('id');
              var prevId = $('.content:visible').data('id') - 1;
              $('[data-id="' + id + '"]').hide();
              $('[data-id="' + prevId + '"]').show();
              $('.next').prop('disabled', false);

              if (prevId == 1) {
                $(this).prop('disabled', true);
              }
            });
          }
        }, {
          key: "showNotebox",
          value: function showNotebox() {
            this.notebox = true;
          }
        }, {
          key: "closeNotebox",
          value: function closeNotebox() {
            this.notebox = false;
          }
        }, {
          key: "timer",
          value: function timer() {
            var _this18 = this;

            if (this.active) {
              this.stopTime = new Date();
              setTimeout(function () {
                _this18.timer();
              }, 1000);
            }
          }
        }, {
          key: "start",
          value: function start() {
            this.startTime = new Date();
            this.stopTime = this.stopTime;
            this.active = true;
            this.inactive = true;
            this.timer();
          }
        }, {
          key: "stop",
          value: function stop() {
            this.stopTime = new Date();
            this.active = false;
            this.inactive = false;
          }
        }, {
          key: "display",
          get: function get() {
            return this.startTime && this.stopTime ? +this.stopTime - +this.startTime : 0;
          }
        }]);

        return RecordingViewComponent;
      }();

      RecordingViewComponent.??fac = function RecordingViewComponent_Factory(t) {
        return new (t || RecordingViewComponent)();
      };

      RecordingViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: RecordingViewComponent,
        selectors: [["app-recording-view"]],
        decls: 74,
        vars: 8,
        consts: [[1, "reocrder"], ["src", "https://www.nwolb.com/help.aspx?id=LI5", "title", "W3Schools Free Online Web Tutorials"], [1, "recorder_top"], [1, "steps"], [1, "timer"], ["class", "pause_btn", 3, "click", 4, "ngIf"], ["class", "pause_btn stop_btn", 3, "click", 4, "ngIf"], [1, "next"], [1, "next_step"], [1, "fa", "fa-play"], ["id", "content-1", "data-id", "1", 1, "recorder_body", "content", "d-flex"], ["id", "content-2", "data-id", "2", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-3", "data-id", "3", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-4", "data-id", "4", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-5", "data-id", "5", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-6", "data-id", "6", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-7", "data-id", "7", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-8", "data-id", "8", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], ["id", "content-9", "data-id", "9", 1, "recorder_body", "content", "d-flex", 2, "display", "none"], [1, "recorder_ftr", "d-flex"], [1, "prev_btn"], [1, "fa", "fa-angle-left"], [1, "addNots", 3, "click"], [1, "fa", "fa-plus"], [1, "close_btn"], [1, "fa", "fa-close"], ["class", "notes_box", 4, "ngIf"], [1, "pause_btn", 3, "click"], [1, "pause_btn", "stop_btn", 3, "click"], [1, "fa", "fa-pause"], [1, "notes_box"], [1, "note_body"], [1, "close", "closeBtn", 3, "click"], ["placeholder", "Type and hit enter to add"], [1, "button_box"], [1, "addNote_btns"]],
        template: function RecordingViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "iframe", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Steps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " 1 to 9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, RecordingViewComponent_button_9_Template, 2, 0, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, RecordingViewComponent_button_10_Template, 2, 0, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi quis, ab illo facilis illum adipisci, repellat quos, quasi omnis accusamus perferendis natus repellendus tempore fugiat sed porro. Repellendus, vel.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function RecordingViewComponent_Template_button_click_68_listener() {
              return ctx.showNotebox();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Add notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "i", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](73, RecordingViewComponent_div_73_Template, 11, 0, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.inactive);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind3"](13, 4, ctx.display, "mm:ss", "UTC"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.notebox);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: [".reocrder[_ngcontent-%COMP%] {\r\n    max-width:430px;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 40px;\r\n}\r\n\r\n.recorder_top[_ngcontent-%COMP%] {\r\n    display:flex;\r\n    align-items: stretch;\r\n}\r\n\r\n.steps[_ngcontent-%COMP%] {\r\n    background-color: #ccc;\r\n    color:#444;\r\n    font-size: 14px;\r\n    padding:3px 25px;\r\n    width: 20%;\r\n}\r\n\r\n.timer[_ngcontent-%COMP%] {\r\n    color:#fff;\r\n    background-color: #444;\r\n    width:55%;\r\n    font-size: 14px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:5px 15px;\r\n}\r\n\r\n.timer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-right:15px;\r\n}\r\n\r\n.next[_ngcontent-%COMP%] {\r\n    background-color: #3c853c;\r\n    color:#fff;\r\n    width:25%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    padding:5px 15px;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n}\r\n\r\n.next[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .pause_btn[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n    background-color: transparent;\r\n    height: 32px;\r\n    width: 40px;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 5px rgba(255, 255, 255,0.4);\r\n    border: none;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    outline:none!important;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.recorder_body[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 20px;\r\n    align-items: flex-start;\r\n}\r\n\r\n.recorder_body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color:#3c853c;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-right: 15px;\r\n}\r\n\r\n.recorder_ftr[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n}\r\n\r\n.recorder_ftr[_ngcontent-%COMP%]   .prev_btn[_ngcontent-%COMP%] {\r\n    background-color: #b0b0b0;\r\n    color:#fff;\r\n    border:none;\r\n    padding:5px 8px;\r\n    font-size: 16px;\r\n}\r\n\r\n.recorder_ftr[_ngcontent-%COMP%]   .addNots[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color:#3c853c;\r\n    font-size: 16px;\r\n    border:none;\r\n}\r\n\r\n.recorder_ftr[_ngcontent-%COMP%]   .addNots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #3c853c;\r\n    border-radius: 50%;\r\n    color:#fff;\r\n    line-height: 30px;\r\n}\r\n\r\n.close_btn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: -20px;\r\n    background-color:#b0b0b0;\r\n    border:none;\r\n    padding:5px;\r\n}\r\n\r\n.notes_box[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: 0 2px 5px rgba(0,0,0,0.2);\r\n    color: #000;\r\n    margin-top: 8px;\r\n}\r\n\r\n.notes_box[_ngcontent-%COMP%]   .note_body[_ngcontent-%COMP%] {\r\n    padding: 5px 8px;\r\n}\r\n\r\n.notes_box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\nwidth: 100%;\r\nheight: 50px;\r\nresize: none;\r\nborder:none;\r\noutline:none!important;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n    margin-top: 13px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.notes_box[_ngcontent-%COMP%]   .addNote_btns[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #3c853c;\r\n    padding:8px;\r\n    width: 100%;\r\n    color:#fff;\r\n    border:none;\r\n\r\n}\r\n\r\n.note_body[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%] {\r\n    color:#000;\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWNvcmRpbmctdmlldy9yZWNvcmRpbmctdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1EQUFtRDtJQUNuRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osWUFBWTtBQUNaLFdBQVc7QUFDWCxzQkFBc0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXOztBQUVmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVjb3JkaW5nLXZpZXcvcmVjb3JkaW5nLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZW9jcmRlciB7XHJcbiAgICBtYXgtd2lkdGg6NDMwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogNDBweDtcclxufVxyXG5cclxuLnJlY29yZGVyX3RvcCB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnN0ZXBzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBjb2xvcjojNDQ0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzozcHggMjVweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi50aW1lciB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICAgIHdpZHRoOjU1JTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzo1cHggMTVweDtcclxufVxyXG5cclxuXHJcbi50aW1lciBidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbn1cclxuXHJcbi5uZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzg1M2M7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgd2lkdGg6MjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzo1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5leHQgYnV0dG9uLC5wYXVzZV9idG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwwLjQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgb3V0bGluZTpub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVjb3JkZXJfYm9keSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5yZWNvcmRlcl9ib2R5IHNwYW4ge1xyXG4gICAgY29sb3I6IzNjODUzYztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVjb3JkZXJfZnRyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJlY29yZGVyX2Z0ciAucHJldl9idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwYjBiMDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6NXB4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlY29yZGVyX2Z0ciAuYWRkTm90cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiMzYzg1M2M7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuLnJlY29yZGVyX2Z0ciAuYWRkTm90cyBpIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjODUzYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNsb3NlX2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiMGIwYjA7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ubm90ZXNfYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5ub3Rlc19ib3ggLm5vdGVfYm9keSB7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG59XHJcblxyXG4ubm90ZXNfYm94IHRleHRhcmVhIHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogNTBweDtcclxucmVzaXplOiBub25lO1xyXG5ib3JkZXI6bm9uZTtcclxub3V0bGluZTpub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ub3Rlc19ib3ggLmFkZE5vdGVfYnRucyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzg1M2M7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjpub25lO1xyXG5cclxufVxyXG5cclxuLm5vdGVfYm9keSAuY2xvc2VCdG4ge1xyXG4gICAgY29sb3I6IzAwMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RecordingViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recording-view',
            templateUrl: './recording-view.component.html',
            styleUrls: ['./recording-view.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "v35m":
    /*!*****************************************************************************!*\
      !*** ./src/app/user/terms-and-conditions/terms-and-conditions.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TermsAndConditionsComponent */

    /***/
    function v35m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function () {
        return TermsAndConditionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "k9B/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/user", "Organization-setting"];
      };

      var _c1 = function _c1() {
        return ["/user", "Organization-member"];
      };

      var _c2 = function _c2() {
        return ["active"];
      };

      var _c3 = function _c3() {
        return ["/user", "Credit"];
      };

      var _c4 = function _c4() {
        return ["/user", "Organization-billing"];
      };

      var TermsAndConditionsComponent = /*#__PURE__*/function () {
        function TermsAndConditionsComponent() {
          _classCallCheck(this, TermsAndConditionsComponent);
        }

        _createClass(TermsAndConditionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsAndConditionsComponent;
      }();

      TermsAndConditionsComponent.??fac = function TermsAndConditionsComponent_Factory(t) {
        return new (t || TermsAndConditionsComponent)();
      };

      TermsAndConditionsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TermsAndConditionsComponent,
        selectors: [["app-terms-and-conditions"]],
        decls: 121,
        vars: 12,
        consts: [[1, "Dashboard"], [1, "SidenavBar"], [1, "active"], [3, "routerLink"], ["src", "assets/images/Sidenav-6.png"], ["src", "assets/images/Sidenav-7.png"], [3, "routerLinkActive"], ["src", "assets/images/price-tag.svg", 2, "filter", "brightness(0) invert(1)", "width", "28px", "height", "36px", "margin-left", "12px"], ["src", "assets/images/Sidenav-8.png"], [1, "WrapperArea"], [1, "WrapperBox"], [1, "BackButton", 3, "routerLink"], ["src", "assets/images/arrow.png"], [1, "Title"], [1, "SettingArea", "SettingAreaContact"]],
        template: function TermsAndConditionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Settings ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Members ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Credit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Billing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Terms And Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Terms and conditions of use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Introduction ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and\u202FOnline UserTesting,\u202Fthe owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "In these terms and conditions,\u202FUser\u202For\u202FUsers\u202Fmeans any third party that accesses the Website and is not either");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "(i) employed by Online UserTesting and acting in the course of their employment or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "(ii) engaged as a consultant or otherwise providing services to Online UserTesting and accessing the Website in connection with the provision of such services. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Intellectual property and acceptable use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "1. All Content included on the Website, unless uploaded by Users, is the property of\u202FOnline UserTesting , our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users. By continuing to use the Website you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the site without the owner's prior written permission ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "2. You may, for your own personal, non-commercial use only, do the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "a. retrieve, display and view the Content on a computer screen ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "3. You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without the written permission of\u202FOnline UserTesting . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Prohibited use ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "4. You may not use the Website for any of the following purposes: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "a. in any way which causes, or may cause, damage to the Website or interferes with any other person's use or enjoyment of the Website; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "b. in any way which is harmful, unlawful, illegal, abusive, harassing, threatening or otherwise objectionable or in breach of any applicable law, regulation, governmental order; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "c. making, transmitting or storing electronic copies of Content protected by copyright without the permission of the owner. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Privacy Policy and Cookies Policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "5. Use of the Website is also governed by our Privacy Policy and Cookies Policy, which are incorporated into these terms and conditions by this reference. To view the Privacy Policy and Cookies Policy, please click on the following:\u202Fhttps://www.onlineusertesting.com/\u202Fand\u202Fhttps://www.onlineusertesting.com/. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Availability of the Website and disclaimers ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "6. Any online facilities, tools, services or information that\u202FOnline UserTesting makes available through the Website (the\u202FService) is provided \"as is\" and on an \"as available\" basis. We give no warranty that the Service will be free of defects and/or faults. To the maximum extent permitted by the law, we provide no warranties (express or implied) of fitness for a particular purpose, accuracy of information, compatibility and satisfactory quality. Online UserTesting is under no obligation to update information on the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "7. Whilst\u202FOnline UserTesting uses reasonable endeavours to ensure that the Website is secure and free of errors, viruses and other malware, we give no warranty or guaranty in that regard and all Users take responsibility for their own security, that of their personal details and their computers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "8. Online UserTesting accepts no liability for any disruption or non-availability of the Website. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "9. Online UserTesting reserves the right to alter, suspend or discontinue any part (or the whole of) the Website including, but not limited to, any products and/or services available. These terms and conditions shall continue to apply to any modified version of the Website unless it is expressly stated otherwise. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Limitation of liability ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "10. Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from our or your negligence, as applicable; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; or (c) limit or exclude any of our or your liabilities in any way that is not permitted under applicable law. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "11. To the extent that the Website and Content are provided free of charge, we will not be liable to you for any loss or damage of any kind. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "12. We will not be liable to you in respect of any losses arising out of events beyond our reasonable control.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "13. To the maximum extent permitted by law, Online UserTesting accepts no liability for any of the following: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "a. any business losses, such as loss of profits, income, revenue, anticipated savings, business, contracts, goodwill or commercial opportunities; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "b. loss or corruption of any data, database or software; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "c. any special, indirect or consequential loss or damage. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "General");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "14. You may not transfer any of your rights under these terms and conditions to any other person. We may transfer our rights under these terms and conditions where we reasonably believe your rights will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "15. These terms and conditions may be varied by us from time to time. Such revised terms will apply to the Website from the date of publication. Users should check the terms and conditions regularly to ensure familiarity with the then current version. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "16. These terms and conditions together with the Privacy Policy and Cookies Policy contain the whole agreement between the parties relating to its subject matter and supersede all prior discussions, arrangements or agreements that might have taken place in relation to the terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "17. The\u202FContracts (Rights of Third Parties) Act 1999\u202Fshall not apply to these terms and conditions and no third party will have any right to enforce or rely on any provision of these terms and conditions. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "18. If any court or competent authority finds that any provision of these terms and conditions (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of these terms and conditions will not be affected. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "19. Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "20. This Agreement shall be governed by and interpreted according to the law of\u202FEngland and Wales\u202Fand all disputes arising under the Agreement (including non-contractual disputes or claims) shall be subject to the exclusive jurisdiction of the\u202FEnglish and Welsh\u202Fcourts. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Online UserTesting details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Online UserTesting is a company incorporated in with registered number 11322458\u202Fwhose registered address is");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "20-22 Wenlock Road,\u202FLondon,\u202FN1 7GU");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "and it operates the Website\u202Fhttps://www.onlineusertesting.com/. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "You can contact\u202FOnline UserTesting by email on\u202Fhello@onlineusertesting.com. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](9, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c0));
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TermsAndConditionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-terms-and-conditions',
            templateUrl: './terms-and-conditions.component.html',
            styleUrls: ['./terms-and-conditions.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product/product.component */
      "LvIC");
      /* harmony import */


      var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pricing/pricing.component */
      "9lXE");
      /* harmony import */


      var _demos_demos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./demos/demos.component */
      "6Eq7");
      /* harmony import */


      var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./customer/customer.component */
      "MwYd");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _get_paid_get_paid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./get-paid/get-paid.component */
      "/+4F");
      /* harmony import */


      var _help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./help/help.component */
      "i2qR");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./register/register.component */
      "1W4x");
      /* harmony import */


      var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./forgot-password/forgot-password.component */
      "XY6P");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./news/news.component */
      "6XR0");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _password_set_password_set_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./password-set/password-set.component */
      "U+5A");
      /* harmony import */


      var _organization_login_organization_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./organization-login/organization-login.component */
      "CWLB");
      /* harmony import */


      var _user_recording_view_recording_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./user/recording-view/recording-view.component */
      "rNcS");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "dEEo");
      /* harmony import */


      var _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./terms/terms.component */
      "eIz4");
      /* harmony import */


      var _service_agreement_service_agreement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./service-agreement/service-agreement.component */
      "Mt+8");
      /* harmony import */


      var _copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./copyrights/copyrights.component */
      "mnjV");
      /* harmony import */


      var _user_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./user/terms-and-conditions/terms-and-conditions.component */
      "v35m");
      /* harmony import */


      var _user_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./user/contact-us/contact-us.component */
      "XDRp");
      /* harmony import */


      var _user_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./user/about-us/about-us.component */
      "867t");

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'product',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
      }, {
        path: 'pricing',
        component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"]
      }, {
        path: 'demos',
        component: _demos_demos_component__WEBPACK_IMPORTED_MODULE_5__["DemosComponent"]
      }, {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'get-paid',
        component: _get_paid_get_paid_component__WEBPACK_IMPORTED_MODULE_8__["GetPaidComponent"]
      }, {
        path: 'help',
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
      }, {
        path: 'forgot',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
      }, {
        path: 'news',
        component: _news_news_component__WEBPACK_IMPORTED_MODULE_13__["NewsComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"]
      }, {
        path: 'password',
        component: _password_set_password_set_component__WEBPACK_IMPORTED_MODULE_15__["PasswordSetComponent"]
      }, {
        path: 'organizationlogin',
        component: _organization_login_organization_login_component__WEBPACK_IMPORTED_MODULE_16__["OrganizationLoginComponent"]
      }, {
        path: 'user/recording-view',
        component: _user_recording_view_recording_view_component__WEBPACK_IMPORTED_MODULE_17__["RecordingViewComponent"]
      }, {
        path: 'privacy-policy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyPolicyComponent"]
      }, {
        path: 'terms',
        component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"]
      }, {
        path: 'service-agreement',
        component: _service_agreement_service_agreement_component__WEBPACK_IMPORTED_MODULE_20__["ServiceAgreementComponent"]
      }, {
        path: 'copyrights',
        component: _copyrights_copyrights_component__WEBPACK_IMPORTED_MODULE_21__["CopyrightsComponent"]
      }, {
        path: 'terms-and-condition',
        component: _user_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_22__["TermsAndConditionsComponent"]
      }, {
        path: 'contact-us',
        component: _user_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"]
      }, {
        path: 'about-us',
        component: _user_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_24__["AboutUsComponent"]
      }, {
        path: 'user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | user-user-module */
          "user-user-module").then(__webpack_require__.bind(null,
          /*! ./user/user.module */
          "7UCR")).then(function (m) {
            return m.UserModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _app_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.provider */
      "FfXl");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function LoginComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function LoginComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " *Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [""];
      };

      var _c1 = function _c1() {
        return ["/product"];
      };

      var _c2 = function _c2() {
        return ["/help"];
      };

      var _c3 = function _c3() {
        return ["/register"];
      };

      var _c4 = function _c4() {
        return ["/forgot"];
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(route, service, appProvider) {
          _classCallCheck(this, LoginComponent);

          this.route = route;
          this.service = service;
          this.appProvider = appProvider;
          this.formInvalid = false;
          this.type = 'password';
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          }
        }, {
          key: "onView",
          value: function onView() {
            this.type = this.type == 'password' ? 'text' : 'password';
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this19 = this;

            if (this.LoginForm.invalid) {
              this.formInvalid = true; // this.service.sweetAlert('fghjk')

              return;
            } else {
              this.formInvalid = false;
              console.log(this.LoginForm.value);
              var apiData = {
                "email": this.LoginForm.value.email,
                "password": this.LoginForm.value.password
              };
              this.service.postApi('web/userLogin', apiData, 0).subscribe(function (success) {
                console.log(success);

                if (success.response == true) {
                  localStorage.setItem('userTesting', JSON.stringify(success.result));
                  localStorage.setItem('token', success.jwtToken);
                  localStorage.setItem("userTestingWebLog", 'yeppp');
                  _this19.appProvider.current.adminData = success.result;

                  if (success.result.type == 'observer') {
                    _this19.route.navigate(['/user', 'recording-list']);
                  } else if (success.result.type != 'owner') {
                    _this19.route.navigate(['/user', 'project-list']);
                  } else {
                    if (success.result.emailVerify == 'yes') {
                      _this19.route.navigate(['/user', 'project-list']);
                    } else {
                      _this19.route.navigate(['/user', 'verification']);
                    }
                  } //  this.service.sweetAlert('User Registration Successfull')

                } else {
                  _this19.service.err(success.message); // this.service.sweetAlert(success.message)
                  // this.service.err(success.message)

                }
              }, function (error) {
                _this19.service.err("Something went wrong"); // this.service.sweetAlert("Something went wrong")
                //this.service.err("Something went wrong")

              });
              this.service.showSpinner();
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_provider__WEBPACK_IMPORTED_MODULE_4__["AppProvider"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 55,
        vars: 16,
        consts: [[1, "Header", "Header-3"], [1, "navbar"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#Menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand", 3, "routerLink"], ["id", "Menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [3, "routerLink"], [1, "LoginArea"], [1, "LoginBox"], ["src", "assets/images/Login.png"], [3, "formGroup"], [1, "form-group"], ["formControlName", "email", "type", "text", "placeholder", "Email address", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "type"], [1, "Icon", 3, "click"], ["src", "assets/images/eye.png"], [1, "fltR", 3, "routerLink"], [1, "clear"], [3, "click"], [1, "text-danger"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " UserTesting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Support ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Signup ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "article");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Hey, good to see you again!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Sign in to get going");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, LoginComponent_div_39_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_span_click_42_listener() {
              return ctx.onView();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, LoginComponent_div_44_Template, 2, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "u");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Get pay per user");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Forgot password?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_53_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Signin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](13, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.LoginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("email").hasError("required") && ctx.LoginForm.get("email").dirty || ctx.formInvalid && !ctx.LoginForm.value.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("type", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.LoginForm.get("password").hasError("required") && ctx.LoginForm.get("password").dirty || ctx.formInvalid && !ctx.LoginForm.value.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](14, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c4));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
          }, {
            type: _app_provider__WEBPACK_IMPORTED_MODULE_4__["AppProvider"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map