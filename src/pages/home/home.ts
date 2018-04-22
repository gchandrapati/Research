import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {ChangeDetectorRef} from '@angular/core';
import {AddDrugPage} from '../add-drug/add-drug';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  matches : string[];
  isRecording = false ;
  bgcolor: string = 'white';
  addDrug=AddDrugPage;
  constructor(public navCtrl: NavController, private SpeechRecognition:SpeechRecognition, private cd: ChangeDetectorRef) {


  }

  getPermission()
  {
    this.SpeechRecognition.hasPermission()
      .then ((haspermission: boolean) => {
        if (!haspermission){
          this.SpeechRecognition.requestPermission();
        }  
      });
      
  }


  startListening (){
console.log("kartik");

  let options = {
    language : 'en-US'
  }

  this.SpeechRecognition.startListening().subscribe(matches => {
    this.matches = matches;
    this.cd.detectChanges();
    for(var i = 0;i < this.matches.length;i++ )
    {
      if(this.matches[i].startsWith("add drug"))
      {
        this.navCtrl.push(AddDrugPage);
      }
    }
  });

  this.isRecording = true;
  
  
 
}
stopListening(){
  this.SpeechRecognition.stopListening().then( () => {
    this.isRecording = false;
    
    
});




}

}

