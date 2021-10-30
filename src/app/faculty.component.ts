import { Component } from "@angular/core";
@Component({
    selector:'faculty',
    styles:[`
    div.gallery {
        margin-left: 20px;
        border: 1px solid #ccc;
        float: left;
        width: 290px;
    }
    
    div.gallery:hover {
        border: 1px solid #777;
    }
    
    div.gallery img {
        width: 100%;
        height: 300px;
    }
    div.desc {
        padding: 15px;
        text-align: center;
        background-color:#5B5EA6;
        color:white;
        font-size:20px;
    }
    div.prgpage{
        width:1270px;
      height:500px;
      background-color: white;
      border-radius: 12px;
      margin-left: 40px;
      margin-right: 10px;
    }
    .head{
        width:1230px;
        height:80px;
        background-color:black;
        border-radius:10px;
        border:20px solid white;
        color:white;
    }`],
    template:`
    <div class="prgpage"><div class="head"><h1 align="center">Professors</h1><br/></div>
    <div class="gallery">
      <a target="_blank" href="../assets/faculty1.jpg">
        <img src="../assets/faculty1.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc" ><a href="http://localhost:4200/faculty1" style="color:white;">P.N Rangarajan</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/faculty2.jpg">
        <img src="../assets/faculty2.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc"><a href="http://localhost:4200/faculty2" style="color:white;">Utpal S. Tatu</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/faculty3.jpg">
        <img src="../assets/faculty3.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc"><a href="http://localhost:4200/faculty3" style="color:white;">Dipankar Nandi</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/faculty4.jpg">
        <img src="../assets/faculty4.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc"><a href="http://localhost:4200/faculty4" style="color:white;">Nagasuma Chandra</a></div>
    </div>
    </div>`
})
export class FacultyComponent{

}