// Initialize your app
var myApp = new Framework7({
    pushState: true,
    cache:false
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-3', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

document.addEventListener("deviceready", onDeviceReady, false); 
function onDeviceReady() { 
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.getElementById("openBrowser").addEventListener("click", openBrowser);
    document.getElementById("QRalert").addEventListener("click", dialogAlert);
    console.log(navigator.notification);
} 
function onBackKeyDown() { mainView.router.back(); }



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

//объявляем переменные
var main;	 
var base = 60; 
var clocktimer,dateObj,dh,dm,ds,ms; 
var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
//функция для очистки поля
function ClearСlock() { 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;
	readout='00:00.00'; 
	document.MyForm.stopwatch.value=readout; 
    document.MyForm.resultpole.value="";
} 
//функция для старта секундомера
     var timerbig
function StartTIME() { 
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
	if (t>999) { s++; } 
	if (s>=(m*base)) { 
		ts=0; 
		m++; 
	} else { 
		ts=parseInt((ms/100)+s); 
		if(ts>=base) { ts=ts-((m-1)*base); } 
	} 
	if (m>(h*base)) { 
		tm=1; 
		h++; 
	} else { 
		tm=parseInt((ms/100)+m); 
		if(tm>=base) { tm=tm-((h-1)*base); } 
	} 
	ms = Math.round(t/10); 
	if (ms>99) {ms=0;} 
	if (ms==0) {ms='00';} 
	if (ms>0&&ms<=9) { ms = '0'+ms; } 
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
	dm=tm-1; 
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
	dh=h-1; 
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
	/*readout = +dh + ':' + dm + ':' + ds + '.' + ms;*/
    readout = dm + ':' + ds + ':' + ms;
	document.MyForm.stopwatch.value = readout;
   
  
 /*  if(document.getElementsByName('my-radio')[1].checked="true")
         {
        var xx = Number.parseInt(ds);
    xx=xx*2;
    document.MyForm.stopwatch2x.value = xx;
    xx=0; 
         };
    */
    
	clocktimer = setTimeout("StartTIME()",1); 
    timerbig=(dm*60)+(ds)
     document.MyForm.stopwatch3x.value=timerbig;
    
    
} 
//Функция запуска и остановки
function StartStop() { 

	if (init==0)
	{ 	
		ClearСlock();
		dateObj = new Date(); 
	
		StartTIME(); 
		init=1; 
      
	} 
	else { 
		clearTimeout(clocktimer);
		init=0;  
		
		/*Процедура проверки положения селектора и расчета Времени*/
        check();
     
          
	} 
};
               
function check()
 {  
     var variant=document.getElementsByName('my-radio');
     if (variant[0].checked==true){

     /*2mm soplo*/ 
		
    var val;
    val = Number.parseInt(ds);
    var valsumm;     
 	valsumm=(Math.pow(10,(-7)))*(4.2520009)*(Math.pow(val,3)); 
    valsumm=valsumm+(Math.pow(10,(-4)))*(4.280918)*(Math.pow(val,2))*(-1);
	valsumm=valsumm+val*(0.5686503); 	 
	valsumm=valsumm-33.6068923;
	document.MyForm.resultpole.value=Math.round(valsumm); 	 
   // document.MyForm.stopwatch4x.value=valsumm; 
		 
	main=valsumm; 
     }
	 /*4mm soplo*/
         if (variant[1].checked==true){
	     var val;
     val = Number.parseInt(ds);
     var valsumm;     
 	valsumm=(Math.pow(10,(-4)))*(2.1203522)*(Math.pow(val,2)); 
    valsumm=valsumm+(Math.pow(10,(-6)))*(1.112638)*(Math.pow(val,3))*(-1);
	valsumm=valsumm+val*(4.7393057); 	 
	valsumm=valsumm-43.5523435;
	document.MyForm.resultpole.value=Math.round(valsumm); 	    
  //  document.MyForm.stopwatch4x.value=valsumm; 
	alert(val);		 
	main=valsumm; 
		 
          }
	 /*6mm soplo*/
         if (variant[2].checked==true){
    	     var val;
     val = Number.parseInt(ds);
    var valsumm;     
 	valsumm=(Math.pow(10,(-5)))*(9.1782117)*(Math.pow(val,3)); 
    valsumm=valsumm+(0.0184844)*(Math.pow(val,2))*(-1);
	valsumm=valsumm+val*(21.498038); 	 
	valsumm=valsumm-76.4323174;
 	document.MyForm.resultpole.value=Math.round(valsumm); 	   
   // document.MyForm.stopwatch4x.value=valsumm; 
		 
	main=valsumm; 		 
          }
     
   (9.1782117*10^(-5))*x^3-0.0184844*x^2+21.498038*x-76.4323174
     (9.1782117*10^(-5))*x^3-0.0184844*x^2+21.498038*x-76.4323174
}; 

function ChangeList(){
	main=Math.round(main);
	alert(main);
	document.FormSecond.resultpole.value=main;		
	 };     
function change1(){
    var xx = Number.parseInt(ds);
    xx=xx*2;
    document.MyForm.stopwatch2x.value = xx;
    xx=0;    
};                   
function change2(){
    var yy = Number.parseInt(ds);
    yy=yy*4;
    document.MyForm.stopwatch3x.value = yy; 
    yy=0;
};   
function change3(){
    var zz = Number.parseInt(ds);
    zz=zz*6;
    document.FormSecond.stopwatch4x.value = zz; 
    zz=0;    
}; 
function message1(){
	alert("Как дела?");
};


var resultx =1;

function countPow(n) {
      for(var i=1; i<=5; i++) {
        resultx*=n;
        alert("В " + i +"-ой степени результат равен: "+ resultx);
      }
}



function phonecall()
{
    window.plugins.CallNumber.callNumber(onSuccess, onError,88313367613, true);
}

function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}

function ClosePanel_left(){
$$('.panel-close').on('click', function (e) {
        myApp.closePanel(animated);
    });    
  
}


function buttonweb(){
  document.getElementById("openBrowser").addEventListener("click", openBrowser);  
}

document.getElementById("openBrowser").addEventListener("click", openBrowser);

function openBrowser() {
   var url = 'http://lab-shop.ru';
   var target = '_blank';
   var options = "location = yes"
   var ref = cordova.InAppBrowser.open(url, target, options);
   
   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loadloaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}






 // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alert
    //
 