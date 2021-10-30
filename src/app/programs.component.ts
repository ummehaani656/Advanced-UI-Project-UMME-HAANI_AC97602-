import { Component } from "@angular/core";
@Component({
    selector:'programs',
    styles:[`div.gallery {
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
    }
    div.prgpage{
        width:1270px;
      height:1150px;
      background-color: white;
      border-radius: 12px;
      margin-left: 40px;
      margin-right: 10px;
    }
    h1{
        font-family:Serif;
      font-size:50px;
      color:white;
      margin-top:10px;
    }
    .head{
        width:1230px;
        height:80px;
        background-color:black;
        border-radius:10px;
        border:20px solid white;
    }
    
    h2{
        font-size:30px;
        color:#34568B;
    }
    `],
    template:`
    <div class="prgpage">
    <div class="head"><h1 align="center">Courses Offered</h1></div>
    <div>
    <h2 align="center">Offline Courses in Campus</h2><br/>
    <div class="gallery">
      <a target="_blank" href="../assets/a.jpg">
        <img src="../assets/a.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc">Introduction to information Technology<br/>Start Date:November 2,2021
      <br/>Course fee :{{4000 |currency:'INR':'symbol'}}</div>
    </div>
    
    
    <div class="gallery">
      <a target="_blank" href="../assets/b.jpg">
        <img src="../assets/b.jpg" alt="Html" width="300" height="200" />
      </a>
      <div class="desc">Basic Introduction to HTML,CSS<br/>Start Date:November 10,2021
      <br/>Course fee :{{3000 |currency:'INR':'symbol'}}</div>
    </div>
    
    <div class="gallery">
      <a target="_blank" href="../assets/c.jpg">
        <img src="../assets/c.jpg" alt="Database" width="300" height="200" />
      </a>
      <div class="desc">Database Management System <br/>Start Date:November 4,2021
      <br/>Course fee :{{3000 |currency:'INR':'symbol'}}</div>
    </div>
    
    <div class="gallery">
      <a target="_blank" href="../assets/d.jpg">
        <img src="../assets/d.jpg" alt="Database" width="300" height="200" />
      </a>
      <div class="desc">Mathematics for Computer Science <br/>Start Date:November 15,2021
      <br/>Course fee :{{5000 |currency:'INR':'symbol'}}</div>
    </div>
    </div>
    <br/><br/>
    <h2 align="center"class="online">Online Courses</h2><br/>
    <div class="gallery">
      <a target="_blank" href="../assets/a.jpg">
        <img src="../assets/a.jpg" alt="CCT101" width="300" height="200" />
      </a>
      <div class="desc">Introduction to information Technology <br/>Start Date:November 2,2021
      <br/>Course fee :{{6000 | currency:'INR':'symbol'}}</div>
    </div>
    
    
    <div class="gallery">
      <a target="_blank" href="../assets/b.jpg">
        <img src="../assets/b.jpg" alt="Html" width="300" height="200" />
      </a>
      <div class="desc">Basic Introduction to HTML, CSS <br/>Start Date:November 10,2021
      <br/>Course fee :{{5000 |currency:'INR':'symbol'}}</div>
    </div>
    
    <div class="gallery">
      <a target="_blank" href="../assets/c.jpg">
        <img src="../assets/c.jpg" alt="Database" width="300" height="200" />
      </a>
      <div class="desc">Database Management System <br/>Start Date:November 4,2021
      <br/>Course fee :{{5000 |currency:'INR':'symbol'}}</div>
    </div>
    
    <div class="gallery">
      <a target="_blank" href="../assets/d.jpg">
        <img src="../assets/d.jpg" alt="Database" width="300" height="200" />
      </a>
      <div class="desc">Mathematics for Computer Science <br/>Start Date:November 15,2021
      <br/>Course fee :{{7000 |currency:'INR':'symbol'}}</div>
    </div>
    <div id="fix"></div>
    
    </div>`
})
export class ProgramComponent{

}