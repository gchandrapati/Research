import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilitiesserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilitiesserviceProvider {
  
  suggesteddrugdata: any;
  drugdetails:any;
  alternativedrugs: any;
  addressdetails:any;

  constructor(public http: HttpClient) {
    console.log('Hello UtilitiesserviceProvider Provider');
    this.suggesteddrugdata = null;
    this.drugdetails = null;
    this.alternativedrugs=null;
  }

  getSuggestedDrugs(searchParam: string){
    // console.log("Drugs here..")
      this.suggesteddrugdata=null;
        if (this.suggesteddrugdata) {
          return Promise.resolve(this.suggesteddrugdata);
        }
    
     // API CALL START
        return new Promise(resolve => {
            var url = "";
            url = `https://nnuggsvyzb.execute-api.us-west-2.amazonaws.com/Utilities/drugs?drugname=${searchParam}`;
          //'https://nnuggsvyzb.execute-api.us-west-2.amazonaws.com/Utilities/drugs?drugname=${searchParam}';
            console.log(url);

  

            this.http.get(url)
               // .map(res => res.json())
                .subscribe(data => {
                  resolve(data);
                  console.log(data);
                  this.suggesteddrugdata = data;
                  console.log(this.suggesteddrugdata);
                  resolve(this.suggesteddrugdata);
                },
                  err=>{
                        console.log("Error occurred while retrieving suggested drug details:" + err);
                        resolve(new Error(err || " - Service Error"));
                });
            });    
        //  API CALL END 
    }

}
