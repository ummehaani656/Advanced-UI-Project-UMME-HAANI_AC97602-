import { Component } from "@angular/core";
@Component({
    selector:'faculty2',
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
    <img src="../assets/faculty2.jpg" width=300 height=300 align="left" border="1" />
    <div class="details">
    <h1 align="center">Utpal S. Tatu</h1>
    <b>Ph.D.: </b> Indian Institute of Science, Bangalore, India<br>

   <b>Post-doctoral research:</b>

   Yale University, New Haven, CT 06520, USA<br>

  <b>  Year of Joining:</b> 1997<br>
  <b>Experience :</b> 20 Years <br>
   <b>Email: </b>tatu@iisc.ac.in<br>
    </div></div>`
})
export class Faculty2Component{

}