import { Component } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";

@Component({
    selector:'contact',
    styles:[
        `iframe {
            float: right;
            padding-right:30px;
            padding-top:100px;
          }
          .b_form input[type=button]{
            position: absolute;
            margin-left:10px;
            border-radius: 15px;
            margin-top: 0px;
            width:10%;
            height: 5%;
        }
        .b_form input[type=text]
  {
      margin-left:40px;
      border-radius:5px;
      width:20%;
    height: 10%;
  }
  .subpage{
    width:1270px;
    height:500px;
    background-color: #92A8D1;
    border-radius: 12px;
    margin-left: 40px;
    margin-right: 10px;
    
}
.head{
    width:1230px;
    height:80px;
    background-color:black;
    border-radius:5px;
    border:10px solid #92A8D1;
    margin-left:10px;
    margin-top:50px;
    font-size:25px;
    color:white;   
}`
    ],
    template:`
    <div class="subpage">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.433992296274!2d-89.02055718517106!3d42.26925834882473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8808bf2ad6e11133%3A0x5833f494168d3860!2sRockford%20University!5e0!3m2!1sen!2sin!4v1635513135343!5m2!1sen!2sin" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe> 
    <div class=head>
    <h3 align="center" >Contact Details</h3></div>
    <p style="color: white;padding-left:20px;font-size:20px;">Welcome {{ getPerson() }} ! to RockFord</p>
    <h3 style="font-size:20px;color:white;padding-left:20px;">Address : Rockford University,<br>
    5050 E. State Street,<br>
    Rockford, IL 61108<br></h3>
    <pre>
    Phone : 815-226-4000<br>
    Email :  info@rockforduniversity.com<br>
    For More info Visit: <a href="https://www.rockford.edu/">Here</a><br>
    </pre>
    <br>
<br>
<strong style="padding-left:20px;font-size:20px">If you are student please enter your student number:</strong><br><br>
<div class="b_form">
<input type="text" id="numb" placeholder="Enter StudentID">

<input type="button" value="Submit" />

<p id="demo"></p>
</div>
<hr>
</div>
`
})
export class ContactComponent{
  constructor (public localStorageService:LocalStorageService) {}
   public get:any;
   public data:any;

    public getPerson(){
        return this.localStorageService.getItem('mystorage');
        }
}