System.register(['angular2/core', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: "about",
                        template: "\n        <div class=\"container bottom-space\">\n            <div class=\"row\">\n                <div class=\"col-md-1\">\n                    <div class=\"left-breadcrumb lb-big\">\n                            <h2>Om meg</h2>\n                    </div>\n                </div>\n                \n                <div class=\"col-sm-9 col-md-6 col-lg-5 col-md-offset-2 col-lg-offset-1 clr-space\">\n                    <div class=\"content-box skew\">\n                        <div class=\"skew-justify\">\n                            <h1>Hei!</h1>\n                            <p>Jeg heter Markus M\u00F8rland, og er 27 \u00E5r.</p>\n                            <p>Nylig utdannet ved Westerdals Oslo ACT (Tidligere NITH), men en Bachelorgrad i Interaktivt Design. </p>\n                            <p>Ved siden av studiene driver jeg mitt eget firma <a href=\"http://morlanddesign.no\"> M\u00F8rland Design </a>.\n                            Her driver jeg med varierte prosjekt, hovedsaklig utvikling av nettsider.</p>\n                             <p>Gjennom min tid p\u00E5 Westerdals, og oppdrag fra mitt firma, har jeg opparbeidet meg variert kompestanse innen UI/UX design og teknikker, samt front-end utvikling.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- /.row [About-textbox] -->\n            \n            <div class=\"row\">\n                <a [routerLink]=\"['/Work']\">\n                    <div class=\"col-xs-11 col-sm-7 col-md-4 col-md-offset-7 col-lg-offset-6 about-box hover-box clr-space\">\n                        <div class=\"content-box skew\">\n                            <div class=\"skew-justify\">\n                            <div class=\"row\">\n                                    <div class=\"col-xs-7 col-sm-10 col-lg-8\">\n                                        <h1>Arbeid</h1>\n                                    </div>\n                                    <div class=\"col-xs-5 col-sm-2 col-lg-4\">\n                                        <div id=\"arrowBtn\">\n                                            <div id=\"iconBars\">\n                                                <span class=\"icon-bar arrow\"></span>\n                                                <span class=\"icon-bar arrow\"></span>\n                                                <span class=\"icon-bar arrow\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div style=\"height: 50px\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <!-- /.row [Work-link] -->\n            \n            <div class=\"row\">\n                <a [routerLink]=\"['/Cv']\">\n                    <div class=\"col-xs-9 col-sm-5 col-md-3 col-md-offset-5 col-lg-offset-4 about-box hover-box clr-space\">\n                        <div class=\"content-box skew\">\n                            <div class=\"skew-justify\">\n                                <div class=\"row\">\n                                    <div class=\"col-xs-9 col-lg-7\">\n                                        <h1>CV</h1>\n                                    </div>\n                                    <div class=\"col-xs-3 col-lg-5\">\n                                        <div id=\"arrowBtn\">\n                                            <div id=\"iconBars\">\n                                                <span class=\"icon-bar arrow\"></span>\n                                                <span class=\"icon-bar arrow\"></span>\n                                                <span class=\"icon-bar arrow\"></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n            <!-- /.row [CV-link] -->\n        </div>\n        <!-- /.container -->\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBeUZBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdEZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSw4cklBOEVMO3dCQUNMLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztrQ0FBQTtnQkFJRixxQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsMkNBRUMsQ0FBQSIsImZpbGUiOiJjb250ZW50L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1dvcmtDb21wb25lbnR9IGZyb20gXCIuL3dvcmsuY29tcG9uZW50XCI7XG5pbXBvcnQge0N2Q29tcG9uZW50fSBmcm9tIFwiLi9jdi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYWJvdXRcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGJvdHRvbS1zcGFjZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1icmVhZGNydW1iIGxiLWJpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5PbSBtZWc8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTkgY29sLW1kLTYgY29sLWxnLTUgY29sLW1kLW9mZnNldC0yIGNvbC1sZy1vZmZzZXQtMSBjbHItc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm94IHNrZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+SGVpITwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SmVnIGhldGVyIE1hcmt1cyBNw7hybGFuZCwgb2cgZXIgMjcgw6VyLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OeWxpZyB1dGRhbm5ldCB2ZWQgV2VzdGVyZGFscyBPc2xvIEFDVCAoVGlkbGlnZXJlIE5JVEgpLCBtZW4gZW4gQmFjaGVsb3JncmFkIGkgSW50ZXJha3RpdnQgRGVzaWduLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmVkIHNpZGVuIGF2IHN0dWRpZW5lIGRyaXZlciBqZWcgbWl0dCBlZ2V0IGZpcm1hIDxhIGhyZWY9XCJodHRwOi8vbW9ybGFuZGRlc2lnbi5ub1wiPiBNw7hybGFuZCBEZXNpZ24gPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXIgZHJpdmVyIGplZyBtZWQgdmFyaWVydGUgcHJvc2pla3QsIGhvdmVkc2FrbGlnIHV0dmlrbGluZyBhdiBuZXR0c2lkZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HamVubm9tIG1pbiB0aWQgcMOlIFdlc3RlcmRhbHMsIG9nIG9wcGRyYWcgZnJhIG1pdHQgZmlybWEsIGhhciBqZWcgb3BwYXJiZWlkZXQgbWVnIHZhcmllcnQga29tcGVzdGFuc2UgaW5uZW4gVUkvVVggZGVzaWduIG9nIHRla25pa2tlciwgc2FtdCBmcm9udC1lbmQgdXR2aWtsaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLnJvdyBbQWJvdXQtdGV4dGJveF0gLS0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9Xb3JrJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMSBjb2wtc20tNyBjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTcgY29sLWxnLW9mZnNldC02IGFib3V0LWJveCBob3Zlci1ib3ggY2xyLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3ggc2tld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTcgY29sLXNtLTEwIGNvbC1sZy04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkFyYmVpZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNSBjb2wtc20tMiBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhcnJvd0J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaWNvbkJhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXIgYXJyb3dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyIGFycm93XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhciBhcnJvd1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDUwcHhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy5yb3cgW1dvcmstbGlua10gLS0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9DdiddXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtOSBjb2wtc20tNSBjb2wtbWQtMyBjb2wtbWQtb2Zmc2V0LTUgY29sLWxnLW9mZnNldC00IGFib3V0LWJveCBob3Zlci1ib3ggY2xyLXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3ggc2tld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy05IGNvbC1sZy03XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkNWPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0zIGNvbC1sZy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImFycm93QnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpY29uQmFyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhciBhcnJvd1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXIgYXJyb3dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyIGFycm93XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy5yb3cgW0NWLWxpbmtdIC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSAvLmNvbnRhaW5lciAtLT5cbiAgICAgICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
