// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true;
        domCache: true;
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
var clocktimer,dateObj,dh,dm,ds=0,ms; 

var readout=''; 
var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
//функция для очистки поля
function ClearСlock() { 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;
	readout1='00:00.00'; 
	document.MyForm.stopwatch.value=readout1; 
} 
//функция для старта секундомера

     
function StartTIME() { 
    
    var timerbig;
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
    readout = dm + ':' + ds + '.' + ms;
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
function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
    alert(vol);
    document.document.MyForm.slidertemp.value=50; 
    var volvol;
    volvol=vol;
    document.MyForm.temptemp.value=volvol;
}

//Функция температуры
function temper(){
      var vtemp=document.getElementsByName('temp');
    alert(vtemp);
    if (vtemp==23){
        
        alert("23");
    };
      document.myform1.slidertemp.value=vtemp; 
}

function StartStop() { 

	if (init==0)
	{ 	     
		dateObj = new Date(); 
        init=1; 
		StartTIME(); 
    } 
	else{ 
        if (ds>0){
            
              check();
		clearTimeout(clocktimer);
        }
        else{
            alert("444");
        };
      
		/*Процедура проверки положения селектора и расчета Времени*/ 
	} 
};




function check()
 {  
     var variant=document.getElementsByName('my-radio');
     if (variant[0].checked==true)
     {
     /*2mm soplo*/ 
    var val;
    val = Number.parseInt(ds);
    val=val*10;     
    var valsumm;     
 	valsumm=(Math.pow(10,(-7)))*(4.2520009)*(Math.pow(val,3)); 
    valsumm=valsumm+(Math.pow(10,(-4)))*(4.280918)*(Math.pow(val,2))*(-1);
	valsumm=valsumm+val*(0.5686503); 	 
	valsumm=valsumm-33.6068923;  
     if(val>75)
    {    
	document.MyForm.resultpole.value=Math.round(valsumm); 	 
    document.MyForm.stopwatch4x.value=val; 
	document.MyForm.stopwatch2x.value=1;
    document.MyForm.stopwatch.value=val;   
        
    }
          else{
         myApp.alert('Слишком малое значение времени. Повторите измерение.', '-Ошибка-');
         
        ClearСlock();
		dateObj = new Date();       
     };
	main=valsumm; 
     }
	 /*4mm soplo*/
         if (variant[1].checked==true){
   	
	     var val;
     val = Number.parseInt(ds);
        val=val*10;     
     var valsumm;     
 	valsumm=(Math.pow(10,(-4)))*(2.1203522)*(Math.pow(val,2)); 
    valsumm=valsumm+(Math.pow(10,(-6)))*(1.112638)*(Math.pow(val,3))*(-1);
	valsumm=valsumm+val*(4.7393057); 	 
	valsumm=valsumm-43.5523435;
          if(val>13){     
	document.MyForm.resultpole.value=Math.round(valsumm); 	    
    document.MyForm.stopwatch4x.value=init; 
	document.MyForm.stopwatch2x.value="2"; 
    document.MyForm.stopwatch.value=val;  
    init=0;          
    alert("555");
          }
              
             else{
    myApp.alert('Слишком малое значение времени. Повторите измерение.', '-Ошибка-');
    ClearСlock();
	//dateObj = new Date();           
     };
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
             if(val>10){
 	document.MyForm.resultpole.value=Math.round(valsumm); 
    document.MyForm.stopwatch4x.value=valsumm; 
	document.MyForm.stopwatch2x.value=init; 		 
	main=valsumm; }
     else{
         myApp.alert('Слишком малое значение времени. Повторите измерение.', '-Ошибка-');
         ClearСlock();
		dateObj = new Date(); 
     }
          }
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


document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
   e.preventDefault();
   alert('Back Button is Pressed!');
};


function phonecall()
{
    window.plugins.CallNumber.callNumber(onSuccess, onError,88313367613, true);
}