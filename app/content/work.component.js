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
                    // Es5
                    // this._workService.getWork().then(function (data) {
                    //     console.log(data);
                    //
                    // });
                };
                // Fix title display on tablet screen.
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
                        template: "\n        <div class=\"container\" *ngIf=\"moveTitle\">\n            <div class=\"row\">\n                <div class=\"col-md-12 rotate left-breadcrumb lb-big\">\n                        <h2>Arbeid</h2>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"container bottom-space\" (window:resize)=\"onResize($event)\">\n        <div class=\"col-sm-6 col-md-12 col-special\" *ngFor=\"#detail of work\">\n            <div class=\"work-row row\">\n                <div class=\"col-md-1\">\n                    <div class=\"rotate left-breadcrumb lb-big\" *ngIf=\"detail.id === 1 && !moveTitle\">\n                            <h2>Arbeid</h2>\n                    </div>                    \n                </div>\n                \n                <div class=\"{{detail.boxClass}} work-info hover-box clr-space\" (click)=\"showDetails(detail.id)\">\n                    <div class=\"content-box skew\">\n                        <div class=\"skew-justify\">\n                            <div class=\"work-info\">\n                                <h1>{{detail.title}}</h1>\n                                <h3>{{detail.subtitle}}</h3>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"{{detail.imgClass}} work-img hover-box clr-space\" (click)=\"showDetails(detail.id)\">\n                    <div class=\"content-box content-box-img skew\">\n                        <div class=\"skew-justify\">\n                            \n                            <img class=\"img-responsive\" src=\"{{detail.img[0].imgUrl}}\" alt=\"Arbeid Thumbnail\">\n                            <!--<div class=\"bg-img\" style=\"background-image: url('{{detail.img[0].imgUrl}}')\"></div>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n           </div> \n        </div>\n        ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvd29yay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1REE7Z0JBSUksdUJBQW9CLE9BQWMsRUFBVSxZQUF3QixFQUFVLFlBQXdCO29CQUFsRixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUYvRixjQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUd6QixDQUFDO2dCQUVELDBEQUEwRDtnQkFDMUQsK0JBQU8sR0FBUDtvQkFBQSxpQkFVQztvQkFURyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBVyxJQUFLLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUMsQ0FBQztvQkFDcEUsTUFBTTtvQkFDTixxREFBcUQ7b0JBQ3JELHlCQUF5QjtvQkFDekIsRUFBRTtvQkFDRixNQUFNO2dCQUdWLENBQUM7Z0JBR0Qsc0NBQXNDO2dCQUN0Qyw0Q0FBNEM7Z0JBQzVDLGdDQUFRLEdBQVIsVUFBUyxLQUFLO29CQUNWLElBQUksRUFBRSxDQUFDO29CQUNQLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1IsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUNqQyxDQUFDO29CQUFDLElBQUk7d0JBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7b0JBRTlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUMxQixDQUFDO29CQUFDLElBQUk7d0JBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLENBQUM7Z0JBRUQsMENBQTBDO2dCQUMxQyxtQ0FBVyxHQUFYLFVBQVksTUFBTTtvQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hELENBQUM7Z0JBRUQsMkNBQTJDO2dCQUMzQyxnQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixDQUFDO2dCQTdGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsczdEQTBDTDt3QkFDTCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFFM0IsQ0FBQzs7aUNBQUE7Z0JBK0NGLG9CQUFDO1lBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtZQTdDRCx5Q0E2Q0MsQ0FBQSIsImZpbGUiOiJjb250ZW50L3dvcmsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlUGFyYW1zfSBmcm9tIFwiYW5ndWxhcjIvcm91dGVyXCI7XG5pbXBvcnQge1dvcmtTZXJ2aWNlfSBmcm9tIFwiLi93b3JrL3dvcmsuc2VydmljZVwiO1xuaW1wb3J0IHtXb3JrfSBmcm9tIFwiLi93b3JrL3dvcmtcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwid29ya1wiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiAqbmdJZj1cIm1vdmVUaXRsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcm90YXRlIGxlZnQtYnJlYWRjcnVtYiBsYi1iaWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BcmJlaWQ8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBib3R0b20tc3BhY2VcIiAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgkZXZlbnQpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtbWQtMTIgY29sLXNwZWNpYWxcIiAqbmdGb3I9XCIjZGV0YWlsIG9mIHdvcmtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3JrLXJvdyByb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdGF0ZSBsZWZ0LWJyZWFkY3J1bWIgbGItYmlnXCIgKm5nSWY9XCJkZXRhaWwuaWQgPT09IDEgJiYgIW1vdmVUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BcmJlaWQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2RldGFpbC5ib3hDbGFzc319IHdvcmstaW5mbyBob3Zlci1ib3ggY2xyLXNwYWNlXCIgKGNsaWNrKT1cInNob3dEZXRhaWxzKGRldGFpbC5pZClcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm94IHNrZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid29yay1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57e2RldGFpbC50aXRsZX19PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt7ZGV0YWlsLnN1YnRpdGxlfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2RldGFpbC5pbWdDbGFzc319IHdvcmstaW1nIGhvdmVyLWJveCBjbHItc3BhY2VcIiAoY2xpY2spPVwic2hvd0RldGFpbHMoZGV0YWlsLmlkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3ggY29udGVudC1ib3gtaW1nIHNrZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2V3LWp1c3RpZnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e2RldGFpbC5pbWdbMF0uaW1nVXJsfX1cIiBhbHQ9XCJBcmJlaWQgVGh1bWJuYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJiZy1pbWdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgne3tkZXRhaWwuaW1nWzBdLmltZ1VybH19JylcIj48L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICBwcm92aWRlcnM6IFtXb3JrU2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyB3b3JrOldvcmtbXTtcbiAgICBwdWJsaWMgbW92ZVRpdGxlID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF9yb3V0ZVBhcmFtczpSb3V0ZVBhcmFtcywgcHJpdmF0ZSBfd29ya1NlcnZpY2U6V29ya1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICAvLyBHZXQgd29yayBkZXRhaWxzIGZyb20gd29yayBzZXJ2aWNlLCBhc3NpZ24gdG8gdGhpcy53b3JrXG4gICAgZ2V0V29yaygpIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwcyB3L0VTNlxuICAgICAgICB0aGlzLl93b3JrU2VydmljZS5nZXRXb3JrKCkudGhlbigod29yazpXb3JrW10pID0+IHRoaXMud29yayA9IHdvcmspO1xuICAgICAgICAvLyBFczVcbiAgICAgICAgLy8gdGhpcy5fd29ya1NlcnZpY2UuZ2V0V29yaygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvL1xuICAgICAgICAvLyB9KTtcblxuXG4gICAgfVxuXG5cbiAgICAvLyBGaXggdGl0bGUgZGlzcGxheSBvbiB0YWJsZXQgc2NyZWVuLlxuICAgIC8vIEFkZCBjb250YWluZXIgdG8gdGl0bGUgc28gd29yayB3aWxsIGFsaWduXG4gICAgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgdmFyIHd3O1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHd3ID0gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB3dyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3dyA+IDc2NyAmJiB3dyA8IDk5MSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVGl0bGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgdGhpcy5tb3ZlVGl0bGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCByb3V0ZXMgZm9yIHdvcmstZGV0YWlscy5jb21wb25lbnRcbiAgICBzaG93RGV0YWlscyh3b3JrSWQpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnV29ya0RldGFpbHMnLCB7aWQ6IHdvcmtJZH1dKVxuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgd29yayBzZXJ2aWNlIGFuZCByZXNpemUgZXZlbnRcbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMuZ2V0V29yaygpO1xuICAgICAgICB0aGlzLm9uUmVzaXplKGV2ZW50KTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
