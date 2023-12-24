class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <header id="header" class="sticky-top">   
    <!-- Navbar -->
<nav style="box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);" class="primary-menu navbar navbar-expand-lg navbar-dropdown-dark">

<div class="container-fluid">
 <!-- Sidebar Toggler -->
<button id="sidebarCollapse" class="navbar-toggler d-block d-md-none" type="button"><span></span><span class="w-75"></span><span class="w-50"></span></button>


   <!-- Logo --> 
   <a class="logo ml-md-3" href="../" title="SWCC Brand Identity">
    
<svg xmlns="http://www.w3.org/2000/svg" width="50.982" height="50" viewBox="0 0 84.982 84.982">
<g id="Group_46132" data-name="Group 46132" transform="translate(-1797.018 -33)">
  <g id="Group_39739" data-name="Group 39739" transform="translate(1797.018 33)">
    <path id="Path_40000" data-name="Path 40000" d="M17,0H67.986a17,17,0,0,1,17,17V67.986a17,17,0,0,1-17,17H17a17,17,0,0,1-17-17V17A17,17,0,0,1,17,0Z" fill="#06c"/>
    <g id="drop" transform="translate(26.215 21.246)">
      <g id="Group_4013" data-name="Group 4013" transform="translate(17.908 7.138)">
        <g id="Group_4012" data-name="Group 4012" transform="translate(0)">
          <path id="Path_5360" data-name="Path 5360" d="M288.878,94.756l-.064-.087-.013-.025-5.819-8.638-5.819,8.638-.012.024-.065.088a7.322,7.322,0,1,0,11.791,0Z" transform="translate(-275.66 -86.006)" fill="#fff"/>
        </g>
      </g>
      <g id="Group_4015" data-name="Group 4015">
        <g id="Group_4014" data-name="Group 4014">
          <path id="Path_5361" data-name="Path 5361" d="M85.106,30.049a9.818,9.818,0,0,1-7.921-15.618l3.825-5.678L75.113,0,62.827,18.237A15.238,15.238,0,1,0,90.294,28.562,9.757,9.757,0,0,1,85.106,30.049Z" transform="translate(-59.875)" fill="#fff"/>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>

   </a> 
   <span class="text-2 ml-2"><b>نظام</b> <br>إمداد</span> 
       <!-- Logo End -->
       
   <!-- Navbar Toggler -->
   <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#header-nav"><span></span><span></span><span></span></button>



   <div id="header-nav" class="collapse navbar-collapse justify-content-end" >


   <link href="../assets/fonts/bundle.css" media="screen" rel="stylesheet" type="text/css">
    

   <div  class="yw-icon-search" id="t1">
     <div class="row">
         <div class="col-16 mb-10 mb-lg-0">
         <!-- 
           <form id="f1" name="f1" action="javascript:void()" onsubmit="if(this.t1.value!=null &amp;&amp; this.t1.value!='')  
                parent.findString(this.t1.value);return false;">
             <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon w-100" data-mdc-auto-init="MDCTextField" style="border: 5px;">
                 <i class="material-icons mdc-text-field__icon">search</i>
                 <input type="text" name="t1" id="t1" class="mdc-text-field__input" id="t1">
                 
               <div style"border-radius: 20px" class="mdc-notched-outline">
                     <div class="mdc-notched-outline__leading"></div>
                     <div class="mdc-notched-outline__notch">
                         <label class="mdc-floating-label" for="t1">
                           بحث  </label>
                     </div>
                     <div class="mdc-notched-outline__trailing"></div>
                 </div>
             </div>
           </form>
           -->
         </div>
   
           </div>
   
   
           </div>
           </div>






       
   <div id="header-nav" class="collapse navbar-collapse justify-content-end" >

   

         <ul class="navbar-nav">
           <li><a href="../">
           الرجوع الى النظام
         
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/></svg>

           
           
           
           </a></li>

           </li>
         </ul>
       </div>
       




</div>

</nav>
<!-- Navbar End --> 
</header>
    `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <!-- Footer
    ============================ -->
    <footer id="footer" class="section bg-dark footer-text-light">
      <div class="container">

        <p class="text-center">Copyright &copy; 2023 <a href="https://www.swcc.gov.sa/">SWCC</a> User Guide. All Rights Reserved.</p>
        <p class="text-2 text-center mb-0">Design by <a class="btn-link" target="_blank" href="#">SWCC ART Team</a>.</p>
   
      </div>
    </footer>
    <!-- Footer end -->


    `;
  }
}

customElements.define("my-footer", MyFooter);

class Homefooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
    <!-- Footer
    ============================ -->
    <footer id="footer" class="bg-dark footer-text-light ml-0 py-5">
      <div class="container">

        <p class="text-center">Copyright &copy; 2023 <a href="https://www.swcc.gov.sa/">SWCC</a> User guide. All Rights Reserved.</p>
        <p class="text-2 text-center mb-0">Design by <a class="btn-link" target="_blank" href="#">SWCC ART Team</a>.</p>
   
      </div>
    </footer>
    <!-- Footer end -->


    `;
  }
}

customElements.define("my-homefooter", Homefooter);
