import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {AboutComponent} from "./content/about.component";
import {WorkComponent} from "./content/work.component";
import {CvComponent} from "./content/cv.component";
import {WorkDetails} from "./content/work/workdetails.component";
import {CvNewComponent} from "./content/cvNew.component";

@Component({
    selector: 'my-app',
    template: `
        <header id="headerBg" class="skew" [style.padding]="showNavStyle()">
            <div class="skew-justify"> 
                <div class="container">
                    <div class="row header-info">
                        <div class="hidden-xs hidden-sm col-md-3 col-lg-2">
                            <a [routerLink]="['About']">
                                <div class="portrait">
                                    <img class="img-responsive img-circle" src="src/img/mmorland.png" alt="Markus Mørland - Profilbilde">
                                </div>
                            </a>
                        </div>
                        <!-- /.col [portrait] -->
                        
                        <div class="col-xs-9 col-sm-9 col-md-7 col-lg-8">
                            <div class="my-info">
                                <a class="no-line" [routerLink]="['About']">
                                    <h1>MARKUS MØRLAND</h1>
                                </a>
                                <ul>
                                    <li><a href="mailto:post@markusmorland.no">post@markusmorland.no</a></li>
                                    <li><a href="tel:+4790840628">+47 90840628</a></li>
                                    <li><a href="http://markusmorland.no">markusmorland.no</a></li>
                                    <li><a href="https://no.linkedin.com/in/markusmorland" target="_blank"><img class="img-responsive img-social" src="src/img/linkedin.png" alt="Linkedin icon">Linkedin</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- /.col [pers. info] -->
                        
                        <div class="col-xs-3 col-sm-3 col-md-2">
                            <button id="toggleNavBtn" type="button" (click)="showNav = !showNav">
                                <span class="sr-only">Toggle navigation</span>
                                <div id="iconBars" [class.icon-bar-rotate]="showNav">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </div>
                            </button>
                        </div>
                        <!-- /.col [navBtn] -->
                        
                        <nav>
                            <div class="container">
                                <ul class="row">
                                    <li class="col-sm-4"><a [routerLink]="['About']" (click)="showNav = !showNav">Om meg</a></li>
                                    <li class="col-sm-4"><a [routerLink]="['Work']" (click)="showNav = !showNav">Arbeid</a></li>
                                    <li class="col-sm-4"><a [routerLink]="['CvNew']" (click)="showNav = !showNav">CV</a></li>
                                </ul>
                            </div>
                        </nav>
                        <!-- /nav -->
                        
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
            </div>
            <!-- /.skew -->
		</header>
		
		<main>
		    <router-outlet></router-outlet>
		</main>
		`,
    // Add dependent directives
    directives: [AboutComponent, ROUTER_DIRECTIVES]
})

// Setup router config / hrefs
@RouteConfig([
    {path: '/ommeg', name: 'About', component: AboutComponent, useAsDefault: true},
    {path: '/arbeid', name: 'Work', component: WorkComponent},
    {path: '/cv', name: 'Cv', component: CvComponent},
    {path: '/cvNew', name: 'CvNew', component: CvNewComponent},
    {path: '/arbeid/:id', name: 'WorkDetails', component: WorkDetails}
])

export class AppComponent implements OnInit {
    // Hide nav as default. Show nav on nav-bar click
    showNav = false;


    constructor(private _router:Router){}

    // Display navigation on click - Different size on css-padding depending on screen width
    showNavStyle() {
        if (this.showNav) {
            if (window.innerWidth < 767) {
                return "345px 0 0";
            } else {
                return "172px 0 0";
            }

        } else {
            return "100px 0 0";
        }
    }

    ngOnInit():any {
        // Add scroll to top of page when route is changed
        this._router.subscribe(() => {
            window.scrollTo(0,0);
        })
    }
}