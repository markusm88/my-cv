System.register(['angular2/core', "angular2/router", "./content/about.component"], function(exports_1, context_1) {
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
    var core_1, router_1, about_component_1;
    var HeaderComponent;
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
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: "app-header",
                        template: "\n        <header>\n            <h1>Header</h1>\n            <nav>\n                <a [routerLink]=\"['About']\">Om meg</a>\n                <a [routerLink]=\"['Work']\">ProsjekterArbeid</a>\n                <a [routerLink]=\"['Cv']\">CV</a>\n            </nav>\n        </header>\n        ",
                        directives: [about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/ommeg', name: 'About', component: about_component_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF2QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUNKLHFTQVNDO3dCQUVMLFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQWlCLENBQUM7cUJBQ2xELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtxQkFDOUQsQ0FBQzs7bUNBQUE7Z0JBSUYsc0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELDZDQUVDLENBQUEiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tIFwiLi9jb250ZW50L2Fib3V0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaGVhZGVyXCIsXG4gICAgdGVtcGxhdGU6XG4gICAgICAgIGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxoMT5IZWFkZXI8L2gxPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJ0Fib3V0J11cIj5PbSBtZWc8L2E+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWydXb3JrJ11cIj5Qcm9zamVrdGVyQXJiZWlkPC9hPlxuICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnQ3YnXVwiPkNWPC9hPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICBgXG4gICAgLFxuICAgIGRpcmVjdGl2ZXM6IFtBYm91dENvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL29tbWVnJywgbmFtZTogJ0Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
