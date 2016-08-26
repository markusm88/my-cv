System.register(['angular2/core', "angular2/router", "./work/work.service"], function(exports_1, context_1) {
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
    var core_1, router_1, work_service_1;
    var WorkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (work_service_1_1) {
                work_service_1 = work_service_1_1;
            }],
        execute: function() {
            WorkComponent = (function () {
                function WorkComponent(_router, _routeParams, _workService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._workService = _workService;
                    this.moveTitle = false;
                }
                // Get work details from work service, assign to this.work
                WorkComponent.prototype.getWork = function () {
                    var _this = this;
                    // TypeScrips w/ES6
                    this._workService.getWork().then(function (work) { return _this.work = work; });
                };
                // Fix title display on tablets.
                // Add container to title so work will align
                WorkComponent.prototype.onResize = function (event) {
                    var ww;
                    if (event) {
                        ww = event.target.innerWidth;
                    }
                    else
                        ww = window.innerWidth;
                    if (ww > 767 && ww < 991) {
                        this.moveTitle = true;
                    }
                    else
                        this.moveTitle = false;
                };
                // Setup routes for work-details.component
                WorkComponent.prototype.showDetails = function (workId) {
                    this._router.navigate(['WorkDetails', { id: workId }]);
                };
                // Initialize work service and resize event
                WorkComponent.prototype.ngOnInit = function () {
                    this.getWork();
                    this.onResize(event);
                };
                WorkComponent = __decorate([
                    core_1.Component({
                        selector: "work",
                        template: "\n        <div class=\"container\" *ngIf=\"moveTitle\">\n            <div class=\"row\">\n                <div class=\"col-md-12 rotate left-breadcrumb lb-big\">\n                        <h2>Arbeid</h2>\n                </div>\n            </div>\n        </div>\n        <!-- /.container [title] -->\n        \n        <div class=\"container bottom-space\" (window:resize)=\"onResize($event)\">\n            <div class=\"col-sm-6 col-md-12 col-special\" *ngFor=\"#detail of work\">\n                <div class=\"work-row row\">\n                    <div class=\"col-md-1\">\n                        <div class=\"rotate left-breadcrumb lb-big\" *ngIf=\"detail.id === 1 && !moveTitle\">\n                                <h2>Arbeid</h2>\n                        </div>                    \n                    </div>\n                    <!-- /.col [title on mobile] -->\n                    \n                    <div class=\"{{detail.boxClass}} work-info hover-box clr-space\" (click)=\"showDetails(detail.id)\">\n                        <div class=\"content-box skew\">\n                            <div class=\"skew-justify\">\n                                <div class=\"work-info\">\n                                    <h1>{{detail.title}}</h1>\n                                    <h3>{{detail.subtitle}}</h3>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.work-link-content -->\n                    \n                    <div class=\"{{detail.imgClass}} work-img hover-box clr-space\" (click)=\"showDetails(detail.id)\">\n                        <div class=\"content-box content-box-img skew\">\n                            <div class=\"skew-justify\">\n                                <img class=\"img-responsive\" src=\"{{detail.img[0].imgUrl}}\" alt=\"Arbeid Thumbnail\">\n                            </div>\n                        </div>\n                    </div>\n                    <!-- /.work-link-img -->\n                </div>\n                <!-- /.row-->\n           </div> \n           <!-- /.col [work loop] -->\n        </div>\n        <!-- /.container [work-link] -->\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [work_service_1.WorkService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, work_service_1.WorkService])
                ], WorkComponent);
                return WorkComponent;
            }());
            exports_1("WorkComponent", WorkComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvd29yay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyREE7Z0JBSUksdUJBQW9CLE9BQWMsRUFBVSxZQUF3QixFQUFVLFlBQXdCO29CQUFsRixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUYvRixjQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUd6QixDQUFDO2dCQUVELDBEQUEwRDtnQkFDMUQsK0JBQU8sR0FBUDtvQkFBQSxpQkFHQztvQkFGRyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztnQkFHRCxnQ0FBZ0M7Z0JBQ2hDLDRDQUE0QztnQkFDNUMsZ0NBQVEsR0FBUixVQUFTLEtBQUs7b0JBQ1YsSUFBSSxFQUFFLENBQUM7b0JBQ1AsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDUixFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBQ2pDLENBQUM7b0JBQUMsSUFBSTt3QkFBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFFOUIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUM7b0JBQUMsSUFBSTt3QkFBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEMsQ0FBQztnQkFFRCwwQ0FBMEM7Z0JBQzFDLG1DQUFXLEdBQVgsVUFBWSxNQUFNO29CQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQTtnQkFDeEQsQ0FBQztnQkFFRCwyQ0FBMkM7Z0JBQzNDLGdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pCLENBQUM7Z0JBMUZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFFBQVEsRUFBRSxpckVBOENMO3dCQUNMLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUUzQixDQUFDOztpQ0FBQTtnQkF3Q0Ysb0JBQUM7WUFBRCxDQXRDQSxBQXNDQyxJQUFBO1lBdENELHlDQXNDQyxDQUFBIiwiZmlsZSI6ImNvbnRlbnQvd29yay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVQYXJhbXN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7V29ya1NlcnZpY2V9IGZyb20gXCIuL3dvcmsvd29yay5zZXJ2aWNlXCI7XG5pbXBvcnQge1dvcmt9IGZyb20gXCIuL3dvcmsvd29ya1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJ3b3JrXCIsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiICpuZ0lmPVwibW92ZVRpdGxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiByb3RhdGUgbGVmdC1icmVhZGNydW1iIGxiLWJpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFyYmVpZDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gLy5jb250YWluZXIgW3RpdGxlXSAtLT5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgYm90dG9tLXNwYWNlXCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoJGV2ZW50KVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1tZC0xMiBjb2wtc3BlY2lhbFwiICpuZ0Zvcj1cIiNkZXRhaWwgb2Ygd29ya1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JrLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm90YXRlIGxlZnQtYnJlYWRjcnVtYiBsYi1iaWdcIiAqbmdJZj1cImRldGFpbC5pZCA9PT0gMSAmJiAhbW92ZVRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BcmJlaWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gLy5jb2wgW3RpdGxlIG9uIG1vYmlsZV0gLS0+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3tkZXRhaWwuYm94Q2xhc3N9fSB3b3JrLWluZm8gaG92ZXItYm94IGNsci1zcGFjZVwiIChjbGljayk9XCJzaG93RGV0YWlscyhkZXRhaWwuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3ggc2tld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmstaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt7ZGV0YWlsLnRpdGxlfX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7ZGV0YWlsLnN1YnRpdGxlfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLndvcmstbGluay1jb250ZW50IC0tPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7ZGV0YWlsLmltZ0NsYXNzfX0gd29yay1pbWcgaG92ZXItYm94IGNsci1zcGFjZVwiIChjbGljayk9XCJzaG93RGV0YWlscyhkZXRhaWwuaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3ggY29udGVudC1ib3gtaW1nIHNrZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tldy1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7ZGV0YWlsLmltZ1swXS5pbWdVcmx9fVwiIGFsdD1cIkFyYmVpZCBUaHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSAvLndvcmstbGluay1pbWcgLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSAvLnJvdy0tPlxuICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgIDwhLS0gLy5jb2wgW3dvcmsgbG9vcF0gLS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIC8uY29udGFpbmVyIFt3b3JrLWxpbmtdIC0tPlxuICAgICAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbV29ya1NlcnZpY2VdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3JrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgd29yazpXb3JrW107XG4gICAgcHVibGljIG1vdmVUaXRsZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbXM6Um91dGVQYXJhbXMsIHByaXZhdGUgX3dvcmtTZXJ2aWNlOldvcmtTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgLy8gR2V0IHdvcmsgZGV0YWlscyBmcm9tIHdvcmsgc2VydmljZSwgYXNzaWduIHRvIHRoaXMud29ya1xuICAgIGdldFdvcmsoKSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHMgdy9FUzZcbiAgICAgICAgdGhpcy5fd29ya1NlcnZpY2UuZ2V0V29yaygpLnRoZW4oKHdvcms6V29ya1tdKSA9PiB0aGlzLndvcmsgPSB3b3JrKTtcbiAgICB9XG5cblxuICAgIC8vIEZpeCB0aXRsZSBkaXNwbGF5IG9uIHRhYmxldHMuXG4gICAgLy8gQWRkIGNvbnRhaW5lciB0byB0aXRsZSBzbyB3b3JrIHdpbGwgYWxpZ25cbiAgICBvblJlc2l6ZShldmVudCkge1xuICAgICAgICB2YXIgd3c7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgd3cgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHd3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHd3ID4gNzY3ICYmIHd3IDwgOTkxKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVUaXRsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB0aGlzLm1vdmVUaXRsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldHVwIHJvdXRlcyBmb3Igd29yay1kZXRhaWxzLmNvbXBvbmVudFxuICAgIHNob3dEZXRhaWxzKHdvcmtJZCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydXb3JrRGV0YWlscycsIHtpZDogd29ya0lkfV0pXG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB3b3JrIHNlcnZpY2UgYW5kIHJlc2l6ZSBldmVudFxuICAgIG5nT25Jbml0KCk6YW55IHtcbiAgICAgICAgdGhpcy5nZXRXb3JrKCk7XG4gICAgICAgIHRoaXMub25SZXNpemUoZXZlbnQpO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
