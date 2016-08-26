import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {WorkComponent} from "./work.component";
import {CvComponent} from "./cv.component";

@Component({
    selector: "about",
    template: `
        <div class="container bottom-space">
            <div class="row">
                <div class="col-md-1">
                    <div class="left-breadcrumb lb-big">
                            <h2>Om meg</h2>
                    </div>
                </div>
                
                <div class="col-sm-9 col-md-6 col-lg-5 col-md-offset-2 col-lg-offset-1 clr-space">
                    <div class="content-box skew">
                        <div class="skew-justify">
                            <h1>Hei!</h1>
                            <p>Jeg heter Markus Mørland, og er 27 år.</p>
                            <p>Nylig utdannet ved Westerdals Oslo ACT (Tidligere NITH), men en Bachelorgrad i Interaktivt Design. </p>
                            <p>Ved siden av studiene driver jeg mitt eget firma <a href="http://morlanddesign.no"> Mørland Design </a>.
                            Her driver jeg med varierte prosjekt, hovedsaklig utvikling av nettsider.</p>
                             
                             <p>Gjennom min tid på Westerdals, og oppdrag fra mitt firma, har jeg opparbeidet meg variert kompestanse innen UI/UX design og teknikker, samt front-end utvikling.</p>
                            
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <a [routerLink]="['/Work']">
                    <div class="col-xs-11 col-sm-7 col-md-4 col-md-offset-7 col-lg-offset-6 about-box hover-box clr-space">
                        <div class="content-box skew">
                            <div class="skew-justify">
                            <div class="row">
                                    <div class="col-xs-7 col-sm-10 col-lg-8">
                                        <h1>Arbeid</h1>
                                    </div>
                                    <div class="col-xs-5 col-sm-2 col-lg-4">
                                        <div id="arrowBtn">
                                            <div id="iconBars">
                                                <span class="icon-bar arrow"></span>
                                                <span class="icon-bar arrow"></span>
                                                <span class="icon-bar arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="height: 50px"></div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            
            <div class="row">
                <a [routerLink]="['/Cv']">
                    <div class="col-xs-9 col-sm-5 col-md-3 col-md-offset-5 col-lg-offset-4 about-box hover-box clr-space">
                        <div class="content-box skew">
                            <div class="skew-justify">
                                <div class="row">
                                    <div class="col-xs-9 col-lg-7">
                                        <h1>CV</h1>
                                    </div>
                                    <div class="col-xs-3 col-lg-5">
                                        <div id="arrowBtn">
                                            <div id="iconBars">
                                                <span class="icon-bar arrow"></span>
                                                <span class="icon-bar arrow"></span>
                                                <span class="icon-bar arrow"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="height: 0px"></div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES]
})

export class AboutComponent {

}