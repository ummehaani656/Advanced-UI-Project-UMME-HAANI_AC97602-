import{Component} from '@angular/core'
@Component({
    selector:'sources',
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
        height: 200px;
    }
    div.desc {
        padding: 15px;
        text-align: center;
        background-color:#5D3FD3;
        color:white;
        font-size:20px;
    }
    div.prgpage{
        width:1270px;
      height:700px;
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
    template:`<div class="prgpage"><div class="head"><h1 align="center">E-Sources</h1><br/></div>
    <div class="gallery">
      <a target="_blank" href="../assets/resource.jpg">
        <img src="../assets/resource.jpg" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc" ><a href="https://portalguard.rockford.edu/_layouts/PG/login.aspx?ReturnUrl=%2Fsso%2Fgo.ashx%3FSAMLRequest%3DjZJBb9swDIX%252FisC7Ldtx2lSIU2QNigXotqBxd9iNlunEmCx5otx1%252F35asgAtMBQ78z0%252B8iOXty%252BDEc%252FkuXe2gjzNQJDVru3toYKn%252Bj5ZwO1qyTiYUa2ncLSP9GMiDiL6LKtToYLJW%252BWQe1YWB2IVtNqvPz2oIs3U6F1w2hkQa2byIQbdOcvTQH5P%252FrnX9PT4UMExhJGVlMYdepu6kSyGI1lOLQX5J0YWEjVL7%252FT3zvk2pXaSBmU5ny9AbOJIfXSctri0Gp0PaA4TRvUbG7OTB5ciH19A3Duv6bRaBR0aJhDbTQVNl3c33bwtr%252Be6bIsSmzwvsrJpEG%252Buyi5y2jJPtLUc0IYKiqzIkzxLZlmdLdTsSs0W6XWWfwOx%252BwvgQ2%252FPWN%252Bj1ZxFrD7W9S7ZfdnXIL5ezhMFcD6GOoX7V1d4vy1e0MPqf0APFLDFgAmP%252FwS%252BlK%252BGuLzH55i63eyc6fUvsTbG%252FbzzhIHiW4FcnS1vn2j1Gw%253D%253D%26RelayState%3D%252Fsaml%252F2%252Fsso%252Frockford.edu%252Fo%252F71961718%252Fc%252Foafed%253FSAMLRequest%253DfZJPU8IwEMW%25252FSid3mqZVKBnKDMJBZlAZQQ9enDRdaMY2W7Opf769LeiAF87v5bf73mZCqq4aOWt9aR%25252FhvQXywVddWZIHIWOtsxIVGZJW1UDSa7mZ3a1kHEaycehRY8WCGRE4b9DO0VJbg9uA%25252BzAanh5XGSu9b0hyTqXJc6zAlyHkpLFE8qHGmm9OAhHynh%25252Fz9cNmy4JFt5CxqkefQBXujQ2xgU4owVJowfN%25252BXx7zHuBQv%25252B3QFSEULUc%25252BEuOhGImUa45qBwULlouMvcJVnECajnM1KsZxpEV6XUCyE2oYJyoXurMRtbC05JX1GYujWAxENEiibZTKZCiT0QsL1r8d3BhbGLu%25252FXFh%25252BNJG83W7Xg2PCZ3B0SNcZ2HTSx5CHwe7sEJex6q99Nu0rulD1hJ%25252Fxj8Maed8Bl4s1VkZ%25252FB7Oqws%25252B5A%25252BUhY4Lx6fHJ%25252Fy8y%25252FQE%25253D%2526RelayState%253Dhttps%25253A%25252F%25252Fshibboleth.ebscohost.com%25252FShibAgent.aspx%25253Fshib_returl%25253Dhttps%2525253a%2525252f%2525252fsearch.ebscohost.com%2525252fWebAuth%2525252flogin.aspx%2525253fauthtype%2525253dshib%25252526group%2525253dmain%25252526profile%2525253deds%25252526custid%2525253ds8876500%252526IdpId%25253D" style="color:white;">All Resources</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/lib.jpg">
        <img src="../assets/lib.jpg" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://www.prairiecat.info/library/169015" style="color:white;">Library Catelog</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/book.png">
        <img src="../assets/book.png" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://portalguard.rockford.edu/_layouts/PG/login.aspx?ReturnUrl=%2Fsso%2Fgo.ashx%3FSAMLRequest%3DjVLRbtswDPwVge%252B2bMeNXSFOkTUoFqDbgsbtQ98YmU6MyZInyl339%252FOSBWiBodgz73jk3S1uXnsjXshz52wFaZyAIKtd09lDBY%252F1XVTCzXLB2JtBrcZwtA%252F0YyQOYuJZVqdBBaO3yiF3rCz2xCpotVt9uVdZnKjBu%252BC0MyBWzOTDJHTrLI89%252BR35l07T48N9BccQBlZSGnfobOwGshiOZDm2FOQfGZlJ1Cy9099b55uYmlEalPnVVQliPZ3UTYzTF5dVg%252FMBzWHECf2OxuzkwcXIx1cQd85rOr1WQYuGCcRmXcH%252BusA2nadNOsvyfdkiFtjMdY55rou2nE8o5pE2lgPaUEGWZGmUJtEsqZNS5YXKruNiNnsGsf1rwKfOnm39yK39GcTqc11vo%252B23XQ3i6RLPBIBzGOok7t%252Bk8PFavFgPy%252F8xuqeADQaMePin4Qv55ohLPb5Oqpv11plO%252FxIrY9zPW08YaKoVyOWZ8r5Ey98%253D%26RelayState%3D%252Fsaml%252F2%252Fsso%252Frockford.edu%252Fo%252F71961718%252Fc%252Fproxy.openathens.net%253FSAMLRequest%253DjZLBbtswEER%25252FheBdIkXJokxYDtwYRQ2krRErPfRGUauYqEy6XCqN%25252F76qXQMJkAY9c3ZmuW8WN8%25252BHgTxBQOtdTbOUUwLO%25252BM66x5o%25252BNB%25252BTit4sF6gPw1Gtxrh39%25252FBzBIxkmnOozg81HYNTXqNF5fQBUEWjdqvPd0qkXB2Dj974gZIVIoQ4Bd16h%25252BMBwg7CkzXwcH9X032MR1SMDf7RunQaej6l%25252FghOxz04TB1E9ieMCaYNMil5m0uRJ3nfzpOibWVSaeiSTMg8l70poeooWU%25252BL2snh%25252FLfXAW9bI3oWvPnR%25252B9Cl0I3MM5nNy0xmFTPsraUo2axrqsuelyVk7cyIgrflXLdF32XQz2YVL3IxqRBH2DiM2sWaCi6yJONJzhteqUIqUaVSiu%25252BUbP9e64N1Fwbvnba9iFB9apptsv26ayj5dmU5CeiFnDqHhxfI3rfVV050eT3av3mAizae%25252FgvIgr3Y5lqqL1P8Zr31gzUnshoG%25252F%25252Bs2gI4wlZGy5WXkdfWWvwE%25253D%2526RelayState%253Dhttps%25253A%25252F%25252Fwww-worldcat-org.proxy.openathens.net%25252Fadvancedsearch" style="color:white;">World Cat</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/ftext.jpg">
        <img src="../assets/ftext.jpg" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://portalguard.rockford.edu/_layouts/PG/login.aspx?ReturnUrl=%2Fsso%2Fgo.ashx%3FSAMLRequest%3DjVLRbtswDPwVge%252B2bMeNXSFOkTUoFqDbgsbtQ98YmU6MyZInyl339%252FOSBWiBodgz73jk3S1uXnsjXshz52wFaZyAIKtd09lDBY%252F1XVTCzXLB2JtBrcZwtA%252F0YyQOYuJZVqdBBaO3yiF3rCz2xCpotVt9uVdZnKjBu%252BC0MyBWzOTDJHTrLI89%252BR35l07T48N9BccQBlZSGnfobOwGshiOZDm2FOQfGZlJ1Cy9099b55uYmlEalPnVVQliPZ3UTYzTF5dVg%252FMBzWHECf2OxuzkwcXIx1cQd85rOr1WQYuGCcRmXcH%252BusA2nadNOsvyfdkiFtjMdY55rou2nE8o5pE2lgPaUEGWZGmUJtEsqZNS5YXKruNiNnsGsf1rwKfOnm39yK39GcTqc11vo%252B23XQ3i6RLPBIBzGOok7t%252Bk8PFavFgPy%252F8xuqeADQaMePin4Qv55ohLPb5Oqpv11plO%252FxIrY9zPW08YaKoVyOWZ8r5Ey98%253D%26RelayState%3D%252Fsaml%252F2%252Fsso%252Frockford.edu%252Fo%252F71961718%252Fc%252Fproxy.openathens.net%253FSAMLRequest%253DjZLBbtswEER%25252FheBdIkXJokxYDtwYRQ2krRErPfRGUauYqEy6XCqN%25252F76qXQMJkAY9c3ZmuW8WN8%25252BHgTxBQOtdTbOUUwLO%25252BM66x5o%25252BNB%25252BTit4sF6gPw1Gtxrh39%25252FBzBIxkmnOozg81HYNTXqNF5fQBUEWjdqvPd0qkXB2Dj974gZIVIoQ4Bd16h%25252BMBwg7CkzXwcH9X032MR1SMDf7RunQaej6l%25252FghOxz04TB1E9ieMCaYNMil5m0uRJ3nfzpOibWVSaeiSTMg8l70poeooWU%25252BL2snh%25252FLfXAW9bI3oWvPnR%25252B9Cl0I3MM5nNy0xmFTPsraUo2axrqsuelyVk7cyIgrflXLdF32XQz2YVL3IxqRBH2DiM2sWaCi6yJONJzhteqUIqUaVSiu%25252BUbP9e64N1Fwbvnba9iFB9apptsv26ayj5dmU5CeiFnDqHhxfI3rfVV050eT3av3mAizae%25252FgvIgr3Y5lqqL1P8Zr31gzUnshoG%25252F%25252Bs2gI4wlZGy5WXkdfWWvwE%25253D%2526RelayState%253Dhttps%25253A%25252F%25252Fwww-worldcat-org.proxy.openathens.net%25252Fadvancedsearch" style="color:white;">Full Text Finder</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/db.jpg">
        <img src="../assets/db.jpg" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://www.rockford.edu/academics/library/resources/databasesa-z/" style="color:white;">DataBases A-Z</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/dissert.png">
        <img src="../assets/dissert.png" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://www.rockford.edu/academics/library/resources/dissertations/" style="color:white;">Dissertations</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/video.png">
        <img src="../assets/video.png" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://www.rockford.edu/academics/library/resources/video/" style="color:white;">Streaming Videos</a></div>
    </div>
    <div class="gallery">
      <a target="_blank" href="../assets/dbook.jpg">
        <img src="../assets/dbook.jpg" alt="CCT101" width="200" height="200" />
      </a>
      <div class="desc"><a href="https://archive.org/details/rockforduniversity?sort=-date" style="color:white;">Digitalized YearBooks</a></div>
    </div>`
})
export class SourcesComponent{

}