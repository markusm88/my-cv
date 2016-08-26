System.register(["angular2/core", "./work-data"], function(exports_1, context_1) {
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
    var core_1, work_data_1;
    var WorkService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (work_data_1_1) {
                work_data_1 = work_data_1_1;
            }],
        execute: function() {
            WorkService = (function () {
                function WorkService() {
                }
                WorkService.prototype.getWork = function () {
                    return Promise.resolve(work_data_1.WORK);
                };
                WorkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WorkService);
                return WorkService;
            }());
            exports_1("WorkService", WorkService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQvd29yay93b3JrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQTtnQkFJQSxDQUFDO2dCQUhHLDZCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQUksQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUpMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQUtiLGtCQUFDO1lBQUQsQ0FKQSxBQUlDLElBQUE7WUFKRCxxQ0FJQyxDQUFBIiwiZmlsZSI6ImNvbnRlbnQvd29yay93b3JrLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1dPUkt9IGZyb20gXCIuL3dvcmstZGF0YVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29ya1NlcnZpY2Uge1xuICAgIGdldFdvcmsoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoV09SSyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
