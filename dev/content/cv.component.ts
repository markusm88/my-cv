import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {WorkService} from "./work/work.service";

@Component({
    selector: "cv",
    template: `
        <!-- UTDANNING -->
        <div class="cv-content-box skew">
            <div class="skew-justify">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1">
                            <div class="rotate left-breadcrumb lb-small">
                                    <h2>Utdanning</h2>
                            </div>
                        </div>
                        
                        <div class="col-sm-12 col-md-7 col-md-offset-1">
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black"><a href="https://www.westerdals.no/studieprogram/interaktivt-design/" target="_blank">Westerdals Oslo School of Arts, Communication and Technology (NITH)</a></h3></div>
                                <div class="col-xs-3"><h3 class="pull-right"><br>2013-2016</h3></div>
                                <hr class="dotted">
                                
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-sm-6"><h4>Bachelor Interaksjonsdesign</h4></div>
                                        <div class="col-sm-6"><button class="btn btn-mm" (click)="subjectA = !subjectA">
                                            <div *ngIf="!subjectA">Se alle fagene <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
                                            <div *ngIf="subjectA">Lukk <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
                                        </button></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div *ngIf="subjectA" class="row">
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Databaser 1</li>
                                            <li>Programmering 1</li>
                                            <li>Programmering 1</li>
                                            <li>Kreativt Webprosjekt</li>
                                            <li>Programmering 2</li>
                                            <li>Iterativt webprosjekt</li>
                                            <li>Informasjonssikkerhet </li>
                                            <li>Webutvikling 1</li>
                                            <li>Content Management Systems</li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <ul>
                                            <li>Interaksjonsdesign 1</li>
                                            <li>Animasjon</li>
                                            <li>Interaksjonsdesign 2</li>
                                            <li>Prosjekt software engineering</li>
                                            <li>Designlab</li>
                                            <li>Webutvikling 2</li>
                                            <li>Web 2.0 og Ajax</li>
                                            <li>Interaksjonsdesign 3</li>
                                            <li>Forbrukerpsykologi</li>
                                        </ul>
                                    </div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black"><a href="http://kristiania.no/studie/grafisk-design-fagskole" target="_blank">Høyskolen Kristiania (Tidl. Norges Kreative Fagskole)</a></h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2010-2012</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Grafisk Design</h4></div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Universitetet i Agder</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2008-2009</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Ingeniør Forkurs</h4></div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Stømsbu Skole</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2006-2007</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Medier og Kommunikasjon</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /UTDANNING -->
        
        <!-- ERFARING -->
        <div class="cv-content-box skew">
            <div class="skew-justify">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1">
                            <div class="rotate left-breadcrumb lb-small">
                                    <h2>Erfaring</h2>
                            </div>
                        </div>
                        
                        <div class="col-sm-12 col-md-7 col-md-offset-1">
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black"><a href="http://www.creuna.no/" target="_blank">Bachelorprosjekt for Creuna</a></h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2015-2016</h3></div>
                                <hr class="dotted">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-sm-6"><h4>Interaksjonsdesign/UX, Konseptutvikling</h4></div>
                                        <div class="col-sm-6"><button class="btn btn-mm" (click)="workA = !workA">
                                            <div *ngIf="!workA">Se mer <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
                                            <div *ngIf="workA">Lukk <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
                                        </button></div>
                                    </div>
                                </div>
                                
                                <div *ngIf="workA === true" class="col-md-12">
                                    <p>Dette var hovedprosjektet for min bachlorutdanning.
                                    Over en periode på fem måneder utviklet jeg og min gruppe, bestående av 5 medlemmer, en billettapplikasjon til iOS og Android.
                                    Arbeidsgiveren var <a href="http://www.creuna.no/" target="_blank">Creuna</a>.</p>
                                    <p>Vår leveranse gav god tilbakemelding fra arbeidsgiver, og nådde topp resultat av skolen.</p>
                                    <p>Mine ansvarsområdet: Konseptutvikling, UX/UI, Prosjektstyring</p>
                                </div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Skoleprosjekt for Gyldendal</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2014-2015</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Interaksjonsdesign/UX, Utvikling (HTML/CSS/ANGULARJS)</h4></div>
                                <div class="col-sm-6"><button class="btn btn-mm" (click)="workB = !workB">
                                    <div *ngIf="!workB">Se mer <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
                                    <div *ngIf="workB">Lukk <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></div>
                                </button></div>
                                
                                <div *ngIf="workB === true" class="col-md-12">
                                    <p>Dette var en semesteroppgaver som gikk ut på å utvikle en digital læringsplattform med Gyldendal som oppdragsgiver.Læringsplattformen var rettet mot barneskoleelever (1-7 klasse) og lærere.</p>
                                    <p>Mitt hovedansvar var den visuelle utformingen og front-end (HTML / CSS / AngularJS).</p>
                                    <div class="btn btn-mm-white" (click)="showDetails(2)">Se løsningen her</div>
                                </div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Mørland Design</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2012-dd</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Freelance: UX-design, Utvikling, Grafisk design</h4></div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Sparebanken Sør</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2012-2013</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Kundesupport: IT-support og nettbank sikkerhet</h4></div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Sørlandet Sykehus, Serviceavdeling</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2010-2011</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Deltid: Vedlikehold av sykehusets fritidsområder</h4></div>
                            </div>
                            
                            <div class="row cv-row">
                                <div class="col-xs-9"><h3 class="black">Agderposten Trykkeri</h3></div>
                                <div class="col-xs-3"><h3 class="pull-right">2009</h3></div>
                                <hr class="dotted">
                                <div class="col-sm-6"><h4>Avistrykking, -klipping og -pakking</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /ERFARING -->
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [WorkService]
})

export class CvComponent {
    public subjectBtnTxt = "Se alle fagene";
    public workBtnTxt = "Mer info";
    public btnIcon = "glyphicon-chevron-down";

    public show = false;

    onClick (x) {
        console.log(x.target.className);
    }

    constructor(private _router:Router, private _routeParams:RouteParams, private _workService:WorkService) {
    }

    showDetails(workId) {
        this._router.navigate(['WorkDetails', {id: workId}])
    }

    // onClick() {
    //     console.log(this);
    //     this.showSubject = !this.showSubject;
    //     if(this.showSubject == false) {
    //         this.subjectBtnTxt = "Se alle fagene";
    //         this.changeIcon = "glyphicon-chevron-down";
    //     }else {
    //         this.subjectBtnTxt = "Lukk";
    //         this.changeIcon = "glyphicon-chevron-up";
    //     }
    // }
}

