import { Component } from "@angular/core";
import { LocalStorageService } from "./local-storage.service";
@Component({
 selector:'',
 styles:[
     `.subpage{
        width:1270px;
        height:550px;
        background-color: white;
        border-radius: 12px;
        margin-left: 40px;
        margin-right: 10px;
        
    }
    .bluepara{
        background-color:#006994 ;
        width:850px;
        height: 100px;
        border: 5px solid white;
  
    }
    .camera{
      width:850px; 
      height:100px;
      background-color: #add8e6;
      border-right:  50px solid #006994 ;
      border-left: 50px solid #006994 ;
  
    }
    .camera img{
        margin-left:5px;
    }
    .para p {
        color: black;
        font-size: 12px;
        margin-top:-15px;
    }
    .para {
      margin-top: -120px;
      margin-left:220px;
      margin-right: -10px;
      width:850px;
  }
  h3{
      border-left: 10px solid white;
      margin-top:0px;
  }
  .p2{
      border: 10px solid white;
      color:black;
      font-size:13px;
  
  }
  .p1{
      border: 10px solid white;
  color:blue;
  font-size:13px;
  }
  h2{
      font-size: 20px;
  }
  .middle{
      background-color:#aec6cf ;
      width:500px;
      height:445px;
      margin-left:455px;
      margin-top: -423px;
  }
  h4{
      color: #446ccf;
      font-family: serif;
      padding-top: 10px;
      padding-left: 5px;
  }
  .p3{
      font-family: Arial, Helvetica, sans-serif;
      padding-left: 5px;
      font-size: 12px;
      margin-top: -10px;
      color: black;
  }
  .img2{
      margin-top:-110px;
      padding-right: 10px;
  }
  .p4{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      margin-left: 210px;
      margin-top: -10px;
      color: black;
      width:55%;
  }
  .inner_middle{
      background-color: #add8e6;
      width:500px;
      height:130px;
     
  }
  .img3{
      margin-top:-110px;
      margin-left: 5px;
  }
  .p5 {
      color:#484848;
      margin-left:50px;
      width:80%;
      font-weight: lighter;
      font-size: 20px;
      margin-top:15px;
  }
  .img4 img{
      margin-left:5px;
      margin-top:-8px;
  }
  .white_block {
    width: 430px;
    height:70px;
    background-color: white;
    border-radius: 10px ;
    margin-right:40px;
    border: 3px solid #5F9EA0;
    
  }
  .white_block p{
      font-size:13px;
    color:black;
    width:95%;
    margin-left: 5px;
    margin-top:0px;
    
  }
   .b_form{
      color: white;
      width: 300px;
      height: 170px;
      background-color: black;
      align-content: center;
      position: absolute;
      top: 110px;
      right: 35px;
       font-size: 18px;
  
  }
  .b_form form {
      margin-left:10px;
      
  }
  .b_form input[type=text]
  {
      margin-left:40px;
  }
  .b_form p{
      font-size: 15px;
      width:100%;
  }
  .b_form input[type=button]{
      position: absolute;
      margin-left:180px;
      border-radius: 15px;
      margin-top: -35px;
      width:25%;
      height: 15%;
  }
  .folder a{
      background-color:#ADD8E6;
    color: blue;
    padding: 15px 50px;
    text-decoration: none;
    display: inline-block;
    border: 2px solid #5F9EA0;
    border-radius: 5px;
    margin-left:-50px;
    margin-top:40px;
    
  }
  .folder img{
      border-radius:10px;
    margin-left:20px;
      -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
  }`
 ],
 template:`
 <div class="subpage">
<div class="bluepara">
  <div class="camera">
  <img src='../assets/camera.png' height=95 width=200 border="1" />
  <div class="para"><h2>11/03/2011-Launching the MFA in Film Making</h2>
  <p>New York Film Academy (NYFA) is one of the premiere visual and performing arts colleges in the world. Since 1992, NYFA has been dedicated to providing cutting-edge, 
    hands-on education and training exclusively to aspiring artists.
    An accredited visual & performing arts college,
     NYFA's programs are taught by current working industry professionals 
     using state-of-the-art equipment. The college brings together
      educators from the world’s leading educational institutions
       and entertainment industry.</p>
</div>
</div>
</div>
<div >
  <h3>Welcome {{ getPerson() }} !</h3>
  <p class="p1">If you’re looking to build transferrable skills at university, 
    pursuing <br/> work experience can help?</p>
  <p class="p1"> with the chance to raise some much-needed funds while studying.
  <br/>This could be by working part-time, volunteering or interning.</p>
  <p class="p2">Horizon University Has a Solution for You.
    <br/><br/>Having this responsibility helps develop interpersonal and time-
    <br/>management skills and it could be a great way to gain relevant experience 
    <br/>for your desired career.Extra-curricular hobbies and university societies 
    <br/>can help students gain transferrable skills and really help students’ 
  <br/>CVs to stand out.</p>
  <div class="folder">
  <img src="../assets/folder1.png" height=40 width=70 />
    <a routerLink='./programs' >Click Here For Detailed course Information</a></div>
  <div  class="middle" align="right" >
    <h4 align="left">Campus Study</h4> 
    <p class="p3" align="left">Campus Study is a perfect for gaining your
       knowledge online. It’s not just a portal, but
        learning management system that provides great features to make
       learning and teaching online easier for everyone.</p>
       <div class="img2">
     <img src="../assets/campus.jpg" height=120 width=230 border="1"></div>
   <div class="inner_middle">
   <h4 align="center">Online Study</h4>
   <p class="p4" align="left">Get unlimited access to 6,000+ of Udemy’s top courses for your team.
      Learn and improve skills across business, tech, design, and more.
      Learners around the world are launching new careers, advancing in 
      their fields, and enriching their lives.</p>
      <div class="img3" align="left">
      <img src="../assets/onlinestudy.jpg" height=100 width=200 border="1"></div>
   </div>
   <div class="img4">
    <img src="../assets/secondlife.png" height=40 width=100 align="left">
    <p class="p5">Experience The New Virtual Campus</p></div>
    <div class="white_block">
      <p align="left">Horizons University is accredited by Accreditation Service for 
        International Schools, Colleges and Universities (ASIC). 
        The University has earned Premier status with ASIC for its 
        commendable areas of operation.</p>
    </div>
 </div>
  </div>
</div>
<div class="b_form" >
  <h2 align="center">Online Learning Portal</h2>
  <form>
  <label for="user1">User:</label><input type="text" [(ngModel)]="username" name="user" id="user" /><br/><br/>
  Password :<input type="password" name="password" id="password" /><br/>
   <p class="p6">forgot your details?</p>
   <input type='button' name='btnSubmit' id='btnSubmit' value='login' (click)="addPerson()" />
   </form>
  </div>`
})
export class HomeComponent{
  constructor(public localStorageService: LocalStorageService) {}
    public username: string = '';
    public get : any;
    data:any;
  
    public person = {username: this.username};
    public addPerson(){
    this.person.username = this.username;
    this.localStorageService.setItem("mystorage",  this.username)
    this.get=this.getPerson();
    //alert(this.get);
  }
      public getPerson(){
          this.data = this.localStorageService.getItem("mystorage");
          return this.data;
      }

}