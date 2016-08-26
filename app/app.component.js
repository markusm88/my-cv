System.register(['angular2/core', "angular2/router", "./content/about.component", "./content/work.component", "./content/cv.component", "./content/work/workdetails.component"], function(exports_1, context_1) {
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
    var core_1, router_1, about_component_1, work_component_1, cv_component_1, workdetails_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router) {
                    this._router = _router;
                    // Hide nav as default. Show nav on nav-bar click
                    this.showNav = false;
                }
                // Display navigation on click - Different size depending on screen width
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
                        template: "\n        <section id=\"headerBg\" class=\"skew\" [style.padding]=\"showNavStyle()\">\n            <div class=\"skew-justify\"> \n                <header class=\"container\">\n                    <div class=\"row header-info\">\n                        <div class=\"hidden-xs hidden-sm col-md-3 col-lg-2\">\n                            <a [routerLink]=\"['About']\">\n                                <div class=\"portrait\">\n                                    <img class=\"img-responsive img-circle\" src=\"src/img/mmorland.png\" alt=\"Markus M\u00F8rland - Profilbilde\">\n                                </div>\n                            </a>\n                        </div>\n                        \n                        <div class=\"col-xs-9 col-sm-9 col-md-7 col-lg-8\">\n                            <div class=\"my-info\">\n                                <a class=\"no-line\" [routerLink]=\"['About']\">\n                                    <h1>MARKUS M\u00D8RLAND</h1>\n                                </a>\n                                <ul>\n                                    <li><a href=\"mailto:post@markusmorland.no\">post@markusmorland.no</a></li>\n                                    <li><a href=\"tel:+4790840628\">+47 90840628</a></li>\n                                    <li><a href=\"http://markusmorland.no\">markusmorland.no</a></li>\n                                    <li><a href=\"https://no.linkedin.com/in/markusmorland\" target=\"_blank\"><img class=\"img-responsive img-social\" src=\"src/img/linkedin.png\" alt=\"Linkedin icon\">Linkedin</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-xs-3 col-sm-3 col-md-2\">\n                        <button id=\"toggleNavBtn\" type=\"button\" (click)=\"showNav = !showNav\">\n                            <span class=\"sr-only\">Toggle navigation</span>\n                            <div id=\"iconBars\" [class.icon-bar-rotate]=\"showNav\">\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                                <span class=\"icon-bar\"></span>\n                            </div>\n                        </button>\n                        </div>\n                        \n                        <nav>\n                            <div class=\"container\">\n                                <ul class=\"row\">\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['About']\" (click)=\"showNav = !showNav\">Om meg</a></li>\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['Work']\" (click)=\"showNav = !showNav\">Arbeid</a></li>\n                                    <li class=\"col-sm-4\"><a [routerLink]=\"['Cv']\" (click)=\"showNav = !showNav\">CV</a></li>\n                                </ul>\n                            </div>\n                        </nav>\n                        \n                    </div>\n                </header>\n            </div>\n\t\t</section>\n\t\t\n\t\t<main>\n\t\t    <router-outlet></router-outlet>\n\t\t</main>\n\t\t",
                        // Add dependent directives
                        directives: [about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/ommeg', name: 'About', component: about_component_1.AboutComponent, useAsDefault: true },
                        { path: '/arbeid', name: 'Work', component: work_component_1.WorkComponent },
                        { path: '/cv', name: 'Cv', component: cv_component_1.CvComponent },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4RUE7Z0JBS0ksc0JBQW9CLE9BQWM7b0JBQWQsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFKbEMsaURBQWlEO29CQUNqRCxZQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUdvQixDQUFDO2dCQUVyQyx5RUFBeUU7Z0JBQ3pFLG1DQUFZLEdBQVo7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUN2QixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0JBQ3ZCLENBQUM7b0JBRUwsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUMsV0FBVyxDQUFDO29CQUN2QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFDSSxrREFBa0Q7b0JBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFqR0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDRwR0F3RFg7d0JBQ0MsMkJBQTJCO3dCQUMzQixVQUFVLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLDBCQUFpQixDQUFDO3FCQUNsRCxDQUFDO29CQUdELG9CQUFXLENBQUM7d0JBQ1QsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDOUUsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUM7d0JBQ3pELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSwwQkFBVyxFQUFDO3dCQUNqRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsbUNBQVcsRUFBQztxQkFDckUsQ0FBQzs7Z0NBQUE7Z0JBNkJGLG1CQUFDO1lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtZQTNCRCx1Q0EyQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250ZW50L2Fib3V0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JrQ29tcG9uZW50fSBmcm9tIFwiLi9jb250ZW50L3dvcmsuY29tcG9uZW50XCI7XG5pbXBvcnQge0N2Q29tcG9uZW50fSBmcm9tIFwiLi9jb250ZW50L2N2LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtXb3JrRGV0YWlsc30gZnJvbSBcIi4vY29udGVudC93b3JrL3dvcmtkZXRhaWxzLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZWFkZXJCZ1wiIGNsYXNzPVwic2tld1wiIFtzdHlsZS5wYWRkaW5nXT1cInNob3dOYXZTdHlsZSgpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tldy1qdXN0aWZ5XCI+IFxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBoZWFkZXItaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbi14cyBoaWRkZW4tc20gY29sLW1kLTMgY29sLWxnLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRyYWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiIHNyYz1cInNyYy9pbWcvbW1vcmxhbmQucG5nXCIgYWx0PVwiTWFya3VzIE3DuHJsYW5kIC0gUHJvZmlsYmlsZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtOSBjb2wtc20tOSBjb2wtbWQtNyBjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibm8tbGluZVwiIFtyb3V0ZXJMaW5rXT1cIlsnQWJvdXQnXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPk1BUktVUyBNw5hSTEFORDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJtYWlsdG86cG9zdEBtYXJrdXNtb3JsYW5kLm5vXCI+cG9zdEBtYXJrdXNtb3JsYW5kLm5vPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cInRlbDorNDc5MDg0MDYyOFwiPis0NyA5MDg0MDYyODwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwOi8vbWFya3VzbW9ybGFuZC5ub1wiPm1hcmt1c21vcmxhbmQubm88L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9uby5saW5rZWRpbi5jb20vaW4vbWFya3VzbW9ybGFuZFwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctc29jaWFsXCIgc3JjPVwic3JjL2ltZy9saW5rZWRpbi5wbmdcIiBhbHQ9XCJMaW5rZWRpbiBpY29uXCI+TGlua2VkaW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTMgY29sLXNtLTMgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0b2dnbGVOYXZCdG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dOYXYgPSAhc2hvd05hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpY29uQmFyc1wiIFtjbGFzcy5pY29uLWJhci1yb3RhdGVdPVwic2hvd05hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sLXNtLTRcIj48YSBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIiAoY2xpY2spPVwic2hvd05hdiA9ICFzaG93TmF2XCI+T20gbWVnPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjb2wtc20tNFwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnV29yayddXCIgKGNsaWNrKT1cInNob3dOYXYgPSAhc2hvd05hdlwiPkFyYmVpZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY29sLXNtLTRcIj48YSBbcm91dGVyTGlua109XCJbJ0N2J11cIiAoY2xpY2spPVwic2hvd05hdiA9ICFzaG93TmF2XCI+Q1Y8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdFxuXHRcdDxtYWluPlxuXHRcdCAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG5cdFx0PC9tYWluPlxuXHRcdGAsXG4gICAgLy8gQWRkIGRlcGVuZGVudCBkaXJlY3RpdmVzXG4gICAgZGlyZWN0aXZlczogW0Fib3V0Q29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbi8vIFNldHVwIHJvdXRlciBjb25maWcgLyBocmVmc1xuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy9vbW1lZycsIG5hbWU6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvYXJiZWlkJywgbmFtZTogJ1dvcmsnLCBjb21wb25lbnQ6IFdvcmtDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2N2JywgbmFtZTogJ0N2JywgY29tcG9uZW50OiBDdkNvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvYXJiZWlkLzppZCcsIG5hbWU6ICdXb3JrRGV0YWlscycsIGNvbXBvbmVudDogV29ya0RldGFpbHN9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAvLyBIaWRlIG5hdiBhcyBkZWZhdWx0LiBTaG93IG5hdiBvbiBuYXYtYmFyIGNsaWNrXG4gICAgc2hvd05hdiA9IGZhbHNlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXt9XG5cbiAgICAvLyBEaXNwbGF5IG5hdmlnYXRpb24gb24gY2xpY2sgLSBEaWZmZXJlbnQgc2l6ZSBkZXBlbmRpbmcgb24gc2NyZWVuIHdpZHRoXG4gICAgc2hvd05hdlN0eWxlKCkge1xuICAgICAgICBpZiAodGhpcy5zaG93TmF2KSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIzNDVweCAwIDBcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMTcycHggMCAwXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIjEwMHB4IDAgMFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICAvLyBBZGQgc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHdoZW4gcm91dGUgaXMgY2hhbmdlZFxuICAgICAgICB0aGlzLl9yb3V0ZXIuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLDApO1xuICAgICAgICB9KVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
