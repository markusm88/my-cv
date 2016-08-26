import {Component, OnInit} from "angular2/core";
import {CvService} from "./cv/cv-service";
import {Cv} from "./cv/cv";

@Component({
    selector: 'cvNew',
    template: `        
         <!-- Start loop CV-INFO -->
        <div class="cv-content-box skew" *ngFor="#cvtype of cvInfo">
            <div class="skew-justify">
                <div class="container">
                    <div class="row">
                        <!--col-1 [title] -->
                        <div class="col-md-1">
                            <div class="rotate left-breadcrumb lb-small">
                                    <h2>{{cvtype.type}}</h2>
                            </div>
                        </div>
                        <!--/col-1 [title] -->
                        
                        
                        <!--col-sm-12 col-md-7-->
                        <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-offset-1">
                            <!-- CV-Content loop -->
                            <template ngFor #content [ngForOf]="cvtype.typeCont" #in="index">
                            <div class="row cv-row">
                                <div class="col-xs-9">
                                    <h3 class="black">
                                        <a *ngIf="content.href" href="{{content.href}}" target="_blank">{{content.title}}</a>
                                        <span *ngIf="!content.href">{{content.title}}</span>
                                    </h3>
                                </div>
                                <div class="col-xs-3"><h3 class="pull-right">{{content.year}}</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-8"><h4>{{content.subtitle}}</h4></div>
                                <!-- /.col [Infotext] -->
                                
                                <div class="col-md-4" *ngIf="content.info">
                                    <div class="row">
                                        <button class="btn btn-mm" (click)="showMoreBtn(content.id)">
                                            <div *ngIf="showMore !== content.id">Se mer <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
                                            <div *ngIf="showMore === content.id">Lukk <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.col-4 [showBtns] -->
                                
                                <!-- Content.info - less then 2 items -->
                                <div class="col-md-12" *ngIf="showMore === content.id && content.info && content.info.length < 2" >
                                    <p *ngFor="#moreinfo of content.info">{{moreinfo.infotext}}</p>
                                </div>
                                
                                <!-- Content.info - more then 2 items -->
                                <div class="col-md-12" *ngIf="showMore === content.id && content.info && content.info.length > 2" >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <ul>
                                                <template ngFor #moreinfo [ngForOf]="content.info" #i="index">
                                                    <li *ngIf="i < 9">{{moreinfo.infotext}}</li> 
                                                </template>
                                            </ul>
                                        </div>
                                        <!-- /.col-6 -->
                                        <div class="col-md-6">
                                            <ul>
                                                <template ngFor #moreinfo [ngForOf]="content.info" #i="index">
                                                    <li *ngIf="i > 8">{{moreinfo.infotext}}</li> 
                                                </template>
                                            </ul>
                                        </div>
                                        <!-- /.col-6 -->
                                    </div>
                                    <!-- /.row -->
                                </div>
                                <!-- /.col-12 [Content.info] -->
                                
                            </div>
                            <!-- /row -->
                            </template>
                            <!-- CV-Content loop -->
                        </div>
                        <!--col-sm-12 col-md-7-->
                    </div>
                    <!--/row-->
                </div>
                <!-- /container -->
            </div>
            <!-- /skew-justify -->
        </div>
        <!-- END loop CV-INFO -->
    `,
    providers: [CvService]
})


export class CvNewComponent implements OnInit{
    public cvInfo: Cv[];
    private showMore;

    //Inject CvService, add to a private variable in a constructor. After we define providers
    constructor(private _cvService: CvService) {}

    getCvInfo() {
        // Promise handler
        this._cvService.getCVInfo().then((data:Cv[]) => this.cvInfo = data);
    }

    // Set 'showMore' based on id of current element clicked, and show curr content.
    showMoreBtn(i){
        this.showMore === i ? this.showMore = null : this.showMore = i;
    }

    ngOnInit():any {
        this.getCvInfo();

    }
}