import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {WorkService} from "./work/work.service";
import {Work} from "./work/work";

@Component({
    selector: "work",
    template: `
        <div class="container" *ngIf="moveTitle">
            <div class="row">
                <div class="col-md-12 rotate left-breadcrumb lb-big">
                        <h2>Arbeid</h2>
                </div>
            </div>
        </div>
        <!-- /.container [title] -->
        
        <div class="container bottom-space" (window:resize)="onResize($event)">
            <div class="col-sm-6 col-md-12 col-special" *ngFor="#detail of work">
                <div class="work-row row">
                    <div class="col-md-1">
                        <div class="rotate left-breadcrumb lb-big" *ngIf="detail.id === 1 && !moveTitle">
                                <h2>Arbeid</h2>
                        </div>                    
                    </div>
                    <!-- /.col [title on mobile] -->
                    
                    <div class="{{detail.boxClass}} work-info hover-box clr-space" (click)="showDetails(detail.id)">
                        <div class="content-box skew">
                            <div class="skew-justify">
                                <div class="work-info">
                                    <h1>{{detail.title}}</h1>
                                    <h3>{{detail.subtitle}}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.work-link-content -->
                    
                    <div class="{{detail.imgClass}} work-img hover-box clr-space" (click)="showDetails(detail.id)">
                        <div class="content-box content-box-img skew">
                            <div class="skew-justify">
                                <img class="img-responsive" src="{{detail.img[0].imgUrl}}" alt="Arbeid Thumbnail">
                            </div>
                        </div>
                    </div>
                    <!-- /.work-link-img -->
                </div>
                <!-- /.row-->
           </div> 
           <!-- /.col [work loop] -->
        </div>
        <!-- /.container [work-link] -->
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WorkService]

})

export class WorkComponent implements OnInit {
    public work:Work[];
    public moveTitle = false;

    constructor(private _router:Router, private _routeParams:RouteParams, private _workService:WorkService) {
    }

    // Get work details from work service, assign to this.work
    getWork() {
        // TypeScrips w/ES6
        this._workService.getWork().then((work:Work[]) => this.work = work);
    }


    // Fix title display on tablets.
    // Add container to title so work will align
    onResize(event) {
        var ww;
        if (event) {
            ww = event.target.innerWidth;
        } else ww = window.innerWidth;

        if (ww > 767 && ww < 991) {
            this.moveTitle = true;
        } else this.moveTitle = false;
    }

    // Setup routes for work-details.component
    showDetails(workId) {
        this._router.navigate(['WorkDetails', {id: workId}])
    }

    // Initialize work service and resize event
    ngOnInit():any {
        this.getWork();
        this.onResize(event);
    }

}

