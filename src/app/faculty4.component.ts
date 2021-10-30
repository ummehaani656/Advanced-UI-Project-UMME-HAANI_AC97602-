import { Component } from "@angular/core";
@Component({
    selector:'faculty4',
    styles:[`
    .details{
        padding-left:450px;
        line-height:200%;
        font-size:25px;

    }
    img{
        position:absolute;
        border:60px solid white;
    
    }
    div.prgpage{
        width:1270px;
      height:500px;
      background-color: white;
      border-radius: 12px;
      margin-left: 40px;
      margin-right: 10px;
    }`],
    template:`
    <div class="prgpage">
    <img src="../assets/faculty4.jpg" width=300 height=300 align="left" border="1" />
    <div class="details">
    <h1 align="center">Nagasuma Chandra</h1>
    <b>Ph.D.: </b> University of Bristol, UK<br>

   <b>Post-doctoral research:</b>
   Indian Institute of Science, Bangalore<br>

  <b>  Year of Joining:</b> 2011<br>
  <b>Experience :</b> 9 Years <br>
   <b>Email: </b>chandra@iisc.ac.in<br>
    </div></div>`
})
export class Faculty4Component{

}