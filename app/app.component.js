System.register(['angular2/core', "angular2/router", "./content/about.component", "./content/work.component", "./content/cv.component", "./content/work/workdetails.component", "./content/cvNew.component"], function(exports_1, context_1) {
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
    var core_1, router_1, about_component_1, work_component_1, cv_component_1, workdetails_component_1, cvNew_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (work_component_1_1) {
                work_component_1 = work_component_1_1;
            },
            function (cv_component_1_1) {
                cv_component_1 = cv_component_1_1;
            },
            function (workdetails_component_1_1) {
                workdetails_component_1 = workdetails_component_1_1;
            },
            function (cvNew_component_1_1) {
                cvNew_component_1 = cvNew_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    // Hide nav as default. Show nav on nav-bar click
                    this.showNav = false;
                }
                // Display navigation on click - Different size on css-padding depending on screen width
                AppComponent.prototype.showNavStyle = function () {
                    if (this.showNav) {
                        if (window.innerWidth < 767) {
                            return "345px 0 0";
                        }
                        else {
                            return "172px 0 0";
                        }
                    }
                    else {
                        return "100px 0 0";
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    // Add scroll to top of page when route is changed
                    this._router.subscribe(function () {
                        window.scrollTo(0, 0);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header id=\"headerBg\" class=\"skew\" [style.padding]=\"showNavStyle()\">\n            <div class=\"skew-justify\"> \n                <div class=\"container\">\n                    <div class=\"row header-info\">\n                        <div class=\"hidden-xs hidden-sm col-md-3 col-lg-2\">\n                            <a [routerLink]=\"['About']\">\n                                <div class=\"portrait\">\n                                    <img class=\"img-responsive img-circle\" src=\"src/img/mmorland.png\" alt=\"Markus M\u00F8rland - Profilbilde\">\n                                </div>\n                            </a>\n                        </div>\n                        <!-- /.col [portrait] -->\n                        \n                        <div class=\"col-xs-9 col-sm-9 col-md-7 col-lg-8\">\n                            <div class=\"my-info\">\n                                <a class=\"no-line\" [routerLink]=\"['About']\">\n                                    <h1>MARKUS M\u00D8RLAND</h1>\n                                </a>\n                                <ul>\n                                    <li><a href=\"mailto:post@markusmorland.no\">post@markusmorland.no</a></li>\n                                    <li><a href=\"tel:+4790840628\">+47 90840628</a></li>\n                                    <li><a href=\"http://markusmorland.no\">markusmorland.no</a></li>\n                                    <li><a href=\"https://no.linkedin.com/in/markusmorland\" target=\"_blank\"><img class=\"img-responsive img-social\" src=\"src/img/linkedin.png\" alt=\"Linkedin icon\">Linkedin</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <!-- /.col [pers. info] -->\n                        \n                        <div class=\"col-xs-3 col-sm-3 col-md-2\">\n                            <button id=\"toggleNavBtn\" type=\"button\" (click)=\"showNav = !showNav\">\n                                <span class=\"sr-only\">Toggle navigation</span>\n                                <div id=\"iconBars\" [class.icon-bar-rotate]=\"showNav\">\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                    <span class=\"icon-bar\"></span>\n                                </div>\n                            </button>\n                        </div>\n                        <!-- /.col [navBtn] -->\n                        \n                        <nav>\n                            <div class=\"container\">\n                                <ul class=\"row\">\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['About']\" (click)=\"showNav = !showNav\">Om meg</a></li>\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['Work']\" (click)=\"showNav = !showNav\">Arbeid</a></li>\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['CvNew']\" (click)=\"showNav = !showNav\">CV</a></li>\n                                </ul>\n                            </div>\n                        </nav>\n                        <!-- /nav -->\n                        \n                    </div>\n                    <!-- /.row -->\n                </div>\n                <!-- /.container -->\n            </div>\n            <!-- /.skew -->\n\t\t</header>\n\t\t\n\t\t<main>\n\t\t    <router-outlet></router-outlet>\n\t\t</main>\n\t\t",
                        // Add dependent directives
                        directives: [about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/ommeg', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true },
                        { path: '/arbeid', name: 'Work', component: work_component_1.WorkComponent },
                        { path: '/cv', name: 'Cv', component: cv_component_1.CvComponent },
                        { path: '/cvNew', name: 'CvNew', component: cvNew_component_1.CvNewComponent },
                        { path: '/arbeid/:id', name: 'WorkDetails', component: workdetails_component_1.WorkDetails }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1RkE7Z0JBS0ksc0JBQW9CLE9BQWM7b0JBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFKbEMsaURBQWlEO29CQUNqRCxZQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUdvQixDQUFDO2dCQUVyQyx3RkFBd0Y7Z0JBQ3hGLG1DQUFZLEdBQVo7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUN2QixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0JBQ3ZCLENBQUM7b0JBRUwsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsV0FBVyxDQUFDO29CQUN2QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDSSxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkF6R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDg5R0ErRFg7d0JBQ0MsMkJBQTJCO3dCQUMzQixVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDBCQUFpQixDQUFDO3FCQUNsRCxDQUFDO29CQUdELG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDOUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7d0JBQ3pELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSwwQkFBVyxFQUFDO3dCQUNqRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQzt3QkFDMUQsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLG1DQUFXLEVBQUM7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQTZCRixtQkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQsdUNBMkJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC9hYm91dC5jb21wb25lbnRcIjtcbmltcG9ydCB7V29ya0NvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC93b3JrLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDdkNvbXBvbmVudH0gZnJvbSBcIi4vY29udGVudC9jdi5jb21wb25lbnRcIjtcbmltcG9ydCB7V29ya0RldGFpbHN9IGZyb20gXCIuL2NvbnRlbnQvd29yay93b3JrZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7Q3ZOZXdDb21wb25lbnR9IGZyb20gXCIuL2NvbnRlbnQvY3ZOZXcuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aGVhZGVyIGlkPVwiaGVhZGVyQmdcIiBjbGFzcz1cInNrZXdcIiBbc3R5bGUucGFkZGluZ109XCJzaG93TmF2U3R5bGUoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNrZXctanVzdGlmeVwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaGVhZGVyLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4teHMgaGlkZGVuLXNtIGNvbC1tZC0zIGNvbC1sZy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydBYm91dCddXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0cmFpdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIiBzcmM9XCJzcmMvaW1nL21tb3JsYW5kLnBuZ1wiIGFsdD1cIk1hcmt1cyBNw7hybGFuZCAtIFByb2ZpbGJpbGRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCBbcG9ydHJhaXRdIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTkgY29sLXNtLTkgY29sLW1kLTcgY29sLWxnLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5vLWxpbmVcIiBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NQVJLVVMgTcOYUkxBTkQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwibWFpbHRvOnBvc3RAbWFya3VzbW9ybGFuZC5ub1wiPnBvc3RAbWFya3VzbW9ybGFuZC5ubzwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJ0ZWw6KzQ3OTA4NDA2MjhcIj4rNDcgOTA4NDA2Mjg8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cDovL21hcmt1c21vcmxhbmQubm9cIj5tYXJrdXNtb3JsYW5kLm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vbm8ubGlua2VkaW4uY29tL2luL21hcmt1c21vcmxhbmRcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLXNvY2lhbFwiIHNyYz1cInNyYy9pbWcvbGlua2VkaW4ucG5nXCIgYWx0PVwiTGlua2VkaW4gaWNvblwiPkxpbmtlZGluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgW3BlcnMuIGluZm9dIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTMgY29sLXNtLTMgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidG9nZ2xlTmF2QnRuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93TmF2ID0gIXNob3dOYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpY29uQmFyc1wiIFtjbGFzcy5pY29uLWJhci1yb3RhdGVdPVwic2hvd05hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvLmNvbCBbbmF2QnRuXSAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sLXNtLTRcIj48YSBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIiAoY2xpY2spPVwic2hvd05hdiA9ICFzaG93TmF2XCI+T20gbWVnPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb2wtc20tNFwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnV29yayddXCIgKGNsaWNrKT1cInNob3dOYXYgPSAhc2hvd05hdlwiPkFyYmVpZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sLXNtLTRcIj48YSBbcm91dGVyTGlua109XCJbJ0N2TmV3J11cIiAoY2xpY2spPVwic2hvd05hdiA9ICFzaG93TmF2XCI+Q1Y8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAvbmF2IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8ucm93IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gLy5jb250YWluZXIgLS0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS0gLy5za2V3IC0tPlxuXHRcdDwvaGVhZGVyPlxuXHRcdFxuXHRcdDxtYWluPlxuXHRcdCAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdFx0PC9tYWluPlxuXHRcdGAsXG4gICAgLy8gQWRkIGRlcGVuZGVudCBkaXJlY3RpdmVzXG4gICAgZGlyZWN0aXZlczogW0Fib3V0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbi8vIFNldHVwIHJvdXRlciBjb25maWcgLyBocmVmc1xuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9vbW1lZycsIG5hbWU6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvYXJiZWlkJywgbmFtZTogJ1dvcmsnLCBjb21wb25lbnQ6IFdvcmtDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2N2JywgbmFtZTogJ0N2JywgY29tcG9uZW50OiBDdkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvY3ZOZXcnLCBuYW1lOiAnQ3ZOZXcnLCBjb21wb25lbnQ6IEN2TmV3Q29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9hcmJlaWQvOmlkJywgbmFtZTogJ1dvcmtEZXRhaWxzJywgY29tcG9uZW50OiBXb3JrRGV0YWlsc31cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIEhpZGUgbmF2IGFzIGRlZmF1bHQuIFNob3cgbmF2IG9uIG5hdi1iYXIgY2xpY2tcbiAgICBzaG93TmF2ID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpe31cblxuICAgIC8vIERpc3BsYXkgbmF2aWdhdGlvbiBvbiBjbGljayAtIERpZmZlcmVudCBzaXplIG9uIGNzcy1wYWRkaW5nIGRlcGVuZGluZyBvbiBzY3JlZW4gd2lkdGhcbiAgICBzaG93TmF2U3R5bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3dOYXYpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2Nykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjM0NXB4IDAgMFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxNzJweCAwIDBcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMTAwcHggMCAwXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIC8vIEFkZCBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugd2hlbiByb3V0ZSBpcyBjaGFuZ2VkXG4gICAgICAgIHRoaXMuX3JvdXRlci5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsMCk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
