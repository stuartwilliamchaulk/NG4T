
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class GetDataService {

    private intervalId;
    private currentRecord: number = 1;

    constructor(private http: Http) { }

    public stopService(){
        clearInterval(this.intervalId);
        this.currentRecord = 1;
    }

    public startService(){
        this.intervalId =  setInterval(() => {
            this.http.get('https://jsonplaceholder.typicode.com/posts/'
            + this.currentRecord).subscribe((result) => {
                console.log(result.text());
                this.currentRecord++;
                if (this.currentRecord > 100){ this.currentRecord = 1; }
            });
        }, 1000);
    }

}
