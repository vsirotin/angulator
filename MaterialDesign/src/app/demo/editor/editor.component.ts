import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public myText 

  constructor() { }

  ngOnInit(): void {
    document.querySelector('html').addEventListener('mouseup', function (e) {
      console.log("html mouseup");
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("mouseup", true, true);
    //  document.getElementById('texa').dispatchEvent(evt);
  });
  }


doChange(event: InputEvent){
  
  console.log("Changes: data=" + event.data + " " + event.inputType + " " + this.getPos(document.activeElement))
}
  public myFunction() {
    console.log("SElection=" +  this.getText(document.activeElement));
  }

  public getPos(elem) {
    if(elem.tagName === "TEXTAREA" ||
       (elem.tagName === "INPUT" && elem.type === "text")) {
        return elem.selectionStart;
    }
    return null;
}
  
  public getText(elem) {
    console.log("In getText elem=", elem)
      if(elem.tagName === "TEXTAREA" ||
         (elem.tagName === "INPUT" && elem.type === "text")) {
          return elem.value.substring(elem.selectionStart,
                                      elem.selectionEnd);
      }
      return null;
  }



  public checkMe() {
    console.log("checkMe called");
    if (window.getSelection) {
        var sel  = window.getSelection()
        console.log("Selected in window " + sel);
    } 
    if (document.getSelection) {
      var sel  = window.getSelection()
      console.log("Selected in document " + sel);
    } 

    
  }
}
