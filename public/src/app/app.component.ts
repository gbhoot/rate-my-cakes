import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'public';
    getHideCakesBtn = "SHOW ALL CAKES";
    addNmCakesBtn = "ADD NEW CAKE";
    cakes = [];
    showAll: boolean = false;
    showInd: boolean = false;
    showNew: boolean = false;
    showRev: boolean = false;
    cidShown: string = "";
    cidReview: string = "";
    cakeNew = {};
    cakeShow = {};
    reviewNew = {};
    constructor(private _httpService: HttpService){}
    
    ngOnInit() { }

    getBtnPressed() {
        if (this.showAll) {
            this.showAll = false;
            this.showInd = false;
            this.getHideCakesBtn = "GET ALL CAKES";
        } else {
            this.getAllCakes();
            this.showAll = true;
            this.getHideCakesBtn = "HIDE ALL CAKES";
        }
    };

    newCakeBtnPressed(): void {
        if (this.showNew) {
            this.showNew = false;
            this.cakeNew = {};
            this.addNmCakesBtn = "ADD NEW CAKES";
        } else {
            this.showNew = true;
            this.addNmCakesBtn = "NEVERMIND";
        }
    };
    
    getAllCakes() {
        let observable = this._httpService.getCakes();
        observable.subscribe(data => {
            console.log(data);
            this.cakes = data['cakes'];
        });    
    };

    getOneCake(cid: string) {
        let observable = this._httpService.getOneCake(cid);
        observable.subscribe(data => {
            console.log(data);
            this.cakeShow = data['cake'][0];
            let reviews = this.cakeShow['reviews'];
            let sum = 0;
            for (var i=0; i<reviews.length; i++) {
                sum += reviews[i].rating
            };
            this.cakeShow['avg'] = (sum / reviews.length);
            this.showInd = true;
        });
    };

    createCakeBtnPressed(): void {
        let observable = this._httpService.createCake(this.cakeNew);
        observable.subscribe(data => {
            this.showAll = true;
            this.newCakeBtnPressed();
            this.getAllCakes();
        });
    };

    addReviewFor(cid: string): void {
        this.cidReview = cid;
    }

    addCakeReviewBtnPressed(cid: string): void {
        console.log(this.cakeNew);
        let observable = this._httpService.createCake(this.cakeNew);
        observable.subscribe(data => {
            this.showAll = true;
            this.newCakeBtnPressed();
            this.getAllCakes();
        });    
    };    
}
