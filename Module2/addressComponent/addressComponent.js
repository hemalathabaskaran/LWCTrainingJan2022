import { LightningElement } from 'lwc';

export default class AddressComponent extends LightningElement {
var1
var2
var3
var4
choice
    doOperation(Event){
        this.choice = event.target.checked;{

        var inp=this.template.querySelectorAll("lightning-input");{

            inp.foreach(function(element){
                
                 if(element.name ==='txt1'){
                                    this.var1=element.value;
                        }
                                     else if(element.name ==='txt2'){
                                      this.var2=element.value;
                                          }
                else if(element.name ==='txt3'){
                            this.var3=element.value;
                                            }
                                 else if(element.name ==='txt4'){
                                            this.var4=element.value;
                                            }},this);

                                         
                                         
          
                                              this.var1
                                              this.var2
                                              this.var3
                                              this.var4
                                          
                     }
            }
        }
 }
                                        