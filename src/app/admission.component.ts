import { Component } from '@angular/core';
import{LocalStorageService} from'./local-storage.service';
@Component({
    selector:'admission',
    styles:[`
    .container {
        padding: 16px;
        background-color: white;
        padding-left: 35%;
        line-height:150%;
         }
         
         /* Full-width input fields */
    input[type=text], input[type=password] {
   width: 50%;
   padding: 10px;
   margin: 5px 0 10px 0;
   display: inline-block;
   border: 2px solid lightgrey;
   background: white;
   
 }
 
 input[type=text]:focus, input[type=password]:focus {
   background-color: #ddd;
   outline: lightgrey;
 }
   /* Set a style for the submit button */
 .registerbtn {
   background-color: blue;
   color: white;
   padding: 10px 10px;
   margin: 8px 0;
   border: none;
   cursor: pointer;
   width: 50%;
   opacity: 0.9;
   margin-left:10px;
 }
 .registerbtn:hover {
   opacity: 1;
 }
    div.prgpage{
        width:1270px;
      height:700px;
      background-color: white;
      border-radius: 12px;
      margin-left: 40px;
      margin-right: 10px;
    }  
    .registerbtn:hover {  
      opacity: 1;
      background-color:blue;}
      .head{
        width:1230px;
        height:80px;
        background-color:black;
        border-radius:10px;
        border:20px solid white;
        color:white;
    }  
    `],
    template:`<div class="prgpage">
    <div class="head"><h1 align="center">Admission Form</h1></div>
    <div class="row" style="text-align: center;">Welcome {{getPerson()}} !</div>
    <form>
    <div class="container">
        <label     for="txtFname"><b>First Name</b></label>
        <br>
        <input type="text" [(ngModel)]="txtFname" placeholder="Enter First Name" name="txtFname" id="txtFname" required>
        <br>
        <label     for="txtLname"><b>Last Name</b></label>
        <br>
        <input type="text" [(ngModel)]="txtLname" placeholder="Enter Last Name" name="txtLname" id="txtLname" required>
        <br>
        <label   for="pwd"><b>Password</b></label>
        <br>
        <input type="password"   placeholder="Enter Password" name="pwd" id="ps">
        <br>
        <label    for="email"><b>Email Address</b></label>
        <br>
        <input type="email"  placeholder="Enter Email Address" name="email" id="mail">
        <br>
        <label  for="city"><b>City</b></label>
        <br>
        <input type="text"   placeholder="Enter City" name="city" id="c">
        <br>
        <label  for="mobile.no"><b>Mobile No.</b></label>
        <br>
        <input  type="text"  placeholder="Enter Mobile Number" name="mobile.no" id="mobile">
        <br>  
<label>   
Course Type :  
</label>   
  
<select>  
<option value="online">Online</option>  
<option value="offline">Offline</option>  
</select> <br>
<label>   
Course :  
</label> 
<select>  
<option value="I">Information Technology</option>  
<option value="c">HTML,CSS</option>  
<option value="DBMS">DBMS</option>  
<option value="MCS">Maths for CS</option>  
</select> <br> 
        <button type="submit"  class="registerbtn"  (click)="addPerson()"><strong>Register</strong></button>
        </div>
        </form>`
})export class AdmissionComponent{
    constructor(public localStorageService: LocalStorageService) {}
    public txtFname: string = '';
    public txtLname: string = '';
    public get : any;
    data:any;
  
    public person = {txtFname: this.txtFname, txtLname: this.txtLname};
    public addPerson(){
    this.person.txtFname = this.txtFname
    this.person.txtLname = this.txtLname;
    this.localStorageService.setItem("mystorage",  this.txtFname)
    this.get=this.getPerson();
    //alert(this.get);
  }
      public getPerson(){
          this.data = this.localStorageService.getItem("mystorage");
          return this.data;
      }

}