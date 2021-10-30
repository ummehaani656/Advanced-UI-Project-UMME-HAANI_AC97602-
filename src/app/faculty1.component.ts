import { Component } from "@angular/core";
@Component({
    selector:'faculty1',
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
    <img src="../assets/faculty1.jpg" width=300 height=300 align="left" border="1" />
    <div class="details">
    <h1 align="center">P. N. Rangarajan</h1>
    <b>Ph.D.: </b> Indian Institute of Science, Bangalore, India<br>

   <b>Post-doctoral research:</b>

  Salk Institute, San Diego, California, USA<br>

  <b>  Year of Joining:</b> 1993<br>
  <b>Experience :</b> 25 Years <br>
   <b>Email: </b>pnr@iisc.ac.in<br>
    </div></div>`
})
export class Faculty1Component{

}