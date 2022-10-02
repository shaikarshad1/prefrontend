import { Component } from "@angular/core";

@Component({
    selector:"app-innerapp",
    template:`<table><tr><td [rowSpan]="2">span 2yyy rows</td></tr>
    </table><button disabled="ism">iiii</button>`,
    styleUrls:["./innerapp.component.css"]
})
export class InnerApp{
    ism=true;

}