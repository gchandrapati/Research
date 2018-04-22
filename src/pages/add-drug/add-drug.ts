import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {ChangeDetectorRef} from '@angular/core';
import { AlertController } from 'ionic-angular';
import { UtilitiesserviceProvider } from '../../providers/utilitiesservice/utilitiesservice';

/**
 * Generated class for the AddDrugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-drug',
  templateUrl: 'add-drug.html',
})
export class AddDrugPage {
  matches : string[];
  drugNameStr : string;
  vwsearchresults: any;
  searchcount = -1;
  showlist : boolean =false;
  queryText:string = "";

  constructor(public navCtrl: NavController, 
             private alertCtrl: AlertController,
             public navParams: NavParams,
             private SpeechRecognition:SpeechRecognition, 
             private cd: ChangeDetectorRef,
             private utilservice:UtilitiesserviceProvider) {

              console.log("constructor !!");
              this.showlist = false;
  }

  listenDrug (){
    console.log("listening for drug name");
    
      let options = {
        language : 'en-US'
      }
    
      this.SpeechRecognition.startListening().subscribe(matches => {
        this.matches = matches;
        this.showlist = true;
        //this.cd.detectChanges();

       });
    
     // this.isRecording = true;
      
      
     
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDrugPage');
  }

  itemSelected(match){
    this.showlist = false;
    this.queryText = match;
    let alert = this.alertCtrl.create({
      title: 'Select a Drug',
      subTitle: 'selected item is:' + match,
      buttons: ['Ok']
    });
    alert.present();

    /*
    let alert = this.alertCtrl.create({
      title: 'Select a Drug',
      subTitle: 'selected item is:' + match,
      buttons: ['Ok']
    });
    alert.present();

    this.utilservice.getSuggestedDrugs(match)

    this.utilservice.getSuggestedDrugs(match).then((data) => {

      if(data!=null){
        this.vwsearchresults = data;
        this.utilservice.suggesteddrugdata = null;
        this.searchcount = this.vwsearchresults.length;
      }*/
    }    
}