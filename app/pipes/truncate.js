System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TruncatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TruncatePipe = (function () {
                function TruncatePipe() {
                }
                TruncatePipe.prototype.transform = function (value, args) {
                    var limit = args.length > 0 ? parseInt(args[0], 10) : 10;
                    var trail = args.length > 1 ? args[1] : '...';
                    return value.length > limit ? value.substring(0, limit) + trail : value;
                };
                TruncatePipe = __decorate([
                    core_1.Pipe({
                        name: 'truncate'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TruncatePipe);
                return TruncatePipe;
            }());
            exports_1("TruncatePipe", TruncatePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzL3RydW5jYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFORyxnQ0FBUyxHQUFULFVBQVUsS0FBWSxFQUFFLElBQWE7b0JBQ2pDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUN6RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUU5QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDNUUsQ0FBQztnQkFWTDtvQkFBQyxXQUFJLENBQUM7d0JBQ0YsSUFBSSxFQUFFLFVBQVU7cUJBQ25CLENBQUM7O2dDQUFBO2dCQVNGLG1CQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCx1Q0FPQyxDQUFBIiwiZmlsZSI6InBpcGVzL3RydW5jYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ3RydW5jYXRlJ1xufSlcblxuZXhwb3J0IGNsYXNzIFRydW5jYXRlUGlwZSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOnN0cmluZywgYXJnczpzdHJpbmdbXSk6c3RyaW5nIHtcbiAgICAgICAgbGV0IGxpbWl0ID0gYXJncy5sZW5ndGggPiAwID8gcGFyc2VJbnQoYXJnc1swXSwgMTApIDogMTA7XG4gICAgICAgIGxldCB0cmFpbCA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbMV0gOiAnLi4uJztcblxuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gbGltaXQgPyB2YWx1ZS5zdWJzdHJpbmcoMCwgbGltaXQpICsgdHJhaWwgOiB2YWx1ZTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
