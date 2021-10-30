import { Component } from "@angular/core";
@Component({
    selector:'news',
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
    }
    div.prgpage{
        width:1270px;
      height:1200px;
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
    .gallery p{
        color:blue;
      font-size:12px;
      width:100%;
    }
    h2{
        font-size:30px;
        color:#34568B;
        border:10px solid white;
    }
    
    `],
    template:`
    <div class="prgpage">
    <div class="head"><h1 align="center">NewsTeller</h1><br/></div>
    <h2 align="center">LATEST NEWS HEADLINES</h2>
    <div class="gallery">
      <a target="_blank" href="../assets/vax_protest.jpg">
        <img src="../assets/vax_protest.jpg" alt="Database" width="300" height="200" />
      </a>
      <a href="https://www.timeshighereducation.com/news/biden-struggles-force-vaccine-mandates-campuses">
      Biden struggles to force Vaccine mandates on campuses</a><br/>
      <p>By Paul Basken   28 Octber, 2021</p>
      </div>
      <div class="gallery">
      <a target="_blank" href="../assets/tech.jpg">
        <img src="../assets/tech.jpg" alt="Html" width="300" height="200" />
      </a>
      <a href="https://www.timeshighereducation.com/campus/how-can-we-support-innovation-teaching-practices-within-universities">
      How can we support innovation in teaching practices within universities? </a><br/>
      <p> By John Blank  27 October, 2021</p>
      </div>
      <div class="gallery">
      <a target="_blank" href="../assets/Onlinecourse.jpg">
        <img src="../assets/Onlinecourse.jpg" alt="Database" width="300" height="200" />
      </a>
      <a href="https://www.timeshighereducation.com/campus/ive-successfully-climbed-academic-career-ladder-now-what">
      I’ve successfully climbed the academic career ladder − now what?</a><br/>
      <p>By Raveena Shri Krishna    27 Octber, 2021</p>
      </div>
      <div class="gallery">
      <a target="_blank" href="../prg.jpg">
        <img src="../assets/prg.jpg" alt="Database" width="350" height="200" />
      </a>
      <a href="https://www.timeshighereducation.com/campus/fostering-interdisciplinary-learning-largescale-doctoral-programmes">
      Fostering interdisciplinary learning in large-scale doctoral programmes</a><br/>
      <p>By RamaKrishna Sagar Reddy   27 Octber, 2021</p>
      </div><br/>
      <h2 align="center">UPCOMING EVENTS</h2>
      <div class="gallery">
      <a target="_blank" href="../event1.jpg">
        <img src="../assets/event1.jpg" alt="Database" width="300" height="200" />
      </a>
      <a href="https://www.meraevents.com/event/facts-Educational-Academy-For-Aspiring-Students">
      FACTS Educational Academy for Aspiring Students</a><br/>
      <p>Monday, 1st Nov 2021 - Wednesday, 19th Jan 2022 | 07:00 PM to 08:00 PM IST</p>
      <p align="center">VIRTUAL EVENT</p>
      </div>
      <div class="gallery">
      <a target="_blank" href="../event2.jpg">
        <img src="../assets/event2.jpg" alt="Database" width="300" height="200" />
        </a>
      <a href="https://www.meraevents.com/event/techfest-world-mun">
      Techfest World Model United Nations</a><br/>
      <p>Saturday, 18th Dec 2021 - Sunday, 19th Dec 2021 | 08:00 AM to 07:00 PM IST</p>
      <p align="center">AZEEZ SAIT AUDITORIUM</p>
      </div>
      
      <div class="gallery">
      <a target="_blank" href="../event3.png">
        <img src="../assets/event3.png" alt="Database" width="300" height="200" />
        </a>
      <a href="https://www.meraevents.com/event/iit-bombay-abhyuday-action-plan-competition">
      IIT Bombay Abhyuday Action Plan Competition</a><br/>
      <p> Sunday, 4th Nov 2021 - Thursday, 11th Nov 2021 | 03:45 PM to 11:45 PM IST</p>
      <p align="center">VIRTUAL EVENT</p>
      </div>
      <div class="gallery">
      <a target="_blank" href="../event4.png">
        <img src="../assets/event4.png" alt="Database" width="300" height="200" />
        </a>
      <a href="https://www.meraevents.com/event/dm21">
      DreaMerger 2021</a><br/>
      <p>Friday, 24th Sep 2021 - Sunday, 7th Nov 2021 | 12:00 AM to 11:00 PM IST</p>
      <p align="center">VIRTUAL EVENT</p>
      </div>
      </div>`
})
export class NewsComponent{

}