import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
   /*handleChangeEvent(event){
        this.template.querySelector('c-child-Comp').changeMessage(event.target.value);
    } */

    handleChangeEvent(){
       console.log(this.template.querySelectorAll("lightning-layout-item"));
    }

}