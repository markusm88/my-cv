System.register(["angular2/core", "./cv-data"], function(exports_1, context_1) {
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
    var core_1, cv_data_1;
    var CvService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cv_data_1_1) {
                cv_data_1 = cv_data_1_1;
            }],
        execute: function() {
            CvService = (function () {
                function CvService() {
                }
                CvService.prototype.getCVInfo = function () {
                    return Promise.resolve(cv_data_1.CV);
                };
                CvService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CvService);
                return CvService;
            }());
            exports_1("CvService", CvService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvY3YvY3Ytc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcsNkJBQVMsR0FBVDtvQkFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFFLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFMTDtvQkFBQyxpQkFBVSxFQUFFOzs2QkFBQTtnQkFNYixnQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsaUNBSUMsQ0FBQSIsImZpbGUiOiJjb250ZW50L2N2L2N2LXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NWfSBmcm9tIFwiLi9jdi1kYXRhXCI7XG5cbkBJbmplY3RhYmxlKClcbi8vIEluamVjdGFibGUgdGVsbCBvdGhlciBjb21wb250ZW5zIGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlXG5leHBvcnQgY2xhc3MgQ3ZTZXJ2aWNlIHtcbiAgICBnZXRDVkluZm8oKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQ1YpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
