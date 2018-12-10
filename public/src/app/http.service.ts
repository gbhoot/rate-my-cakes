import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private _http: HttpClient) { }

    getCakes() {
        return this._http.get('/cakes');
    };

    getOneCake(cid: string) {
        return this._http.get('/cakes/'+ cid);
    };

    createCake(cakeD: any) {
        return this._http.post('/cakes', cakeD);
    };

    createReview(reviewD: any, cid: string) {
        return this._http.post('/cakes/'+ cid, reviewD);
    };
}
