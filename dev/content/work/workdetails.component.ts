import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {WorkService} from "./work.service";
import {Work} from "./work";
import {TruncatePipe} from "../../pipes/truncate";

@Component({
    selector: "workdetails",
    template: `
            <div class="container bottom-space">
            
                <!--row-->
                <div class="work-row row">
                    <div class="col-md-1">
                        <div class="rotate left-breadcrumb lb-small">
                                <h2>{{work.breadcrumb}}</h2>
                        </div>
                    </div>
                    <!-- ./col-md-1 -->
                    
                    <div class="col-md-9 col-lg-8 col-md-offset-1 col-lg-offset-0 clr-space">
                        <!-- work-nav -->
                        <div class="work-nav">
                            <div class="skew">
                                <div class="btn-group work-nav-btns" role="group">
                                    <button class="btn btn-work" (click)="showDetails(workId = urlId - 1)" *ngIf="urlId > 1"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                                    <button class="btn btn-work" [routerLink]="['/Work']"><span class="glyphicon glyphicon-th" aria-hidden="true"></span></button>
                                    <button class="btn btn-work" (click)="showDetails(workId = urlId + 1)" *ngIf="urlId < 6"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                                </div>
                            </div>
                        </div>
                        <!-- /work-nav -->
                    
                        <!-- work-info -->
                        <div class="content-box skew">
                            <div class="skew-justify">
                                <div class="work-details-info">
                                    <h1 [innerHTML]="work.title"></h1>
                                    <h3 [innerHTML]="work.subtitle"></h3>
                                    <div [innerHTML]="work.desc"></div>
    
                                </div>
                            </div>
                        </div>
                        <!-- /work-info -->
                    </div>
                    <!-- /.col [work-info-wrapper] -->
                    
                    <!-- work-content -->
                     <div class="col-md-9 col-lg-10 col-md-offset-3 col-lg-offset-2 work-img clr-space">
                        <div class="content-box skew"><div class="skew-justify">
                            <div class="img-details" *ngFor="#img of work.img">
                                <h1 [innerHTML]="img.imgTitle"></h1>
                                <h3 [innerHTML]="img.imgDesc"></h3>
                                <img class="img-responsive" src="{{img.imgUrl}}" alt="">
                                
                            </div>
                        </div></div>
                    </div>
                    <!-- /.col [work-content] -->
                </div>
                <!--/row-->                                                              
                
            </div><!--/cont-->
            
            <!-- work-nav -->
            <div class="container bottom-space">
                <div class="row work-nav">
                    <div class="skew">
                        <div class="btn-group work-nav-btns" role="group">
                            <button class="btn btn-work" (click)="showDetails(workId = urlId - 1)" *ngIf="urlId > 1"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                            <button class="btn btn-work" [routerLink]="['/Work']"><span class="glyphicon glyphicon-th" aria-hidden="true"></span></button>
                            <button class="btn btn-work" (click)="showDetails(workId = urlId + 1)" *ngIf="urlId < 6"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                        </div>
                    </div>
                </div>  
            </div>
            <!-- /work-nav -->
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WorkService],
    pipes: [TruncatePipe]
})

export class WorkDetails implements OnInit {
    public urlId = null;
    public work = {};


    constructor(private _router:Router, private _routeParams:RouteParams, private _workService:WorkService) {
    }

    showDetails(workId) {
        this._router.navigate(['WorkDetails', {id: workId}])
    }


    getWork() {
        // Promise handling with ES5 - Example only
        // 'this'-keyword will use inner environment
        // this._workService.getWork().then(function(data){
        //     for(var i = 0; i < data.length; i++) {
        //         if(data[i].id == 1) {
        //             this.work = data[i];
        //         }
        //     }
        // });

        // Promise handling with ES6
        // Get work details from passed urlId
        this._workService.getWork().then(work => {
            for (var details of work) {
                if (details.id == this.urlId) {
                    this.work = details;
                }
            }
        });
    };

    /* Initialize get route parameters from passed urlId */
    ngOnInit():any {
        this.urlId = this._routeParams.get('id');
        this.getWork();
    }
}

