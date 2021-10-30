import { Component } from "@angular/core";
@Component({
    selector:'faculty3',
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
    <img src="../assets/faculty3.jpg" width=300 height=300 align="left" border="1" />
    <div class="details">
    <h1 align="center">Dipankar Nandi</h1>
    <b>Ph.D.: </b> University of California, Berkeley, California, USA<br>

   <b>Post-doctoral research:</b>
   University of Cincinnati, Ohio, USA<br>

  <b>  Year of Joining:</b> 2000<br>
  <b>Experience :</b> 20 Years <br>
   <b>Email: </b>nandi@iisc.ac.in<br>
    </div></div>`
})
export class Faculty3Component{

}