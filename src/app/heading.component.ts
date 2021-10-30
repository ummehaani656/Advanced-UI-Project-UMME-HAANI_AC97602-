import { Component } from "@angular/core";
@Component({
    selector:'head',
    /*styles : [`.heading {
        text-align:right;
        padding-right:20px;
        color:
    }`] ,*/
    template:`<div>
    <p class="heading">{{head.line}}</p>
    </div>`
})
export class HeadingComponent{
    head= {
        "line" :"Education For Everyone EveryWhere"
    }
}