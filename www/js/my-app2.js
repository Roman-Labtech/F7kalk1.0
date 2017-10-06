// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});
// Export selectors engine
var $$ = Dom7;

// Add view

var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
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
    $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });
    $$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    }); 		
    $$('.panel-close').on('click', function (e) {
        myApp.closePanel();
    });
 
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
function ClearСlock() 
{ 
	clearTimeout(clocktimer); 
	h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;
	readout='00:00:00'; 
	document.MyForm.stopwatch.value=readout; 
	
} 

function ClearСlock2() 
{ 
	//clearTimeout(clocktimer); 
	//h=1;m=1;tm=1;s=0;ts=0;ms=0; 
	//init=0;
	readout='00:00:00'; 
	document.MyForm2.stopwatch2.value=readout; 
	
} 
//функция для старта секундомера
     var timerbig,timebig2,timebig3;

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
	/*readout = +dh + ':' + dm + ':' + ds + ':' + ms;*/
    readout = dm + ':' + ds + ':' + ms;

	if (variant==1){
	document.MyForm.stopwatch.value = readout;
	timebig1=ds + '.' + ms;	}
	else if (variant==2){
	document.MyForm2.stopwatch2.value = readout;
	timebig2=ds + '.' + ms;}
	else if (variant==3){
	document.MyForm3.stopwatch3.value = readout;
	timebig3=ds + '.' + ms;};

  
 /*  if(document.getElementsByName('my-radio')[1].checked="true")
         {
        var xx = Number.parseInt(ds);
    xx=xx*2;
    document.MyForm.stopwatch2x.value = xx;
    xx=0; 
         };
    */
    
	clocktimer = setTimeout("StartTIME()",1); 
    //timerbig=dm+ds

function clear_all(){	


}
 
	
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
var variant;
function StartStop1() { 

	if (init==0)
	{ 	
		ClearСlock();
		dateObj = new Date(); 
		variant=1;
		StartTIME(); 
		init=1; 
      
	} 
	else { 
		timebig1=Number(timebig1);
		//alert(timebig);
		clearTimeout(clocktimer);
		init=0;  
		variant=0;
		/*Процедура проверки положения селектора и расчета Времени*/
       // check();
     
          
	} 
};

function StartStop2() { 

	if (init==0)
	{ 	
		ClearСlock();
		dateObj = new Date(); 
		variant=2;
		StartTIME(); 
		init=1; 
      
	} 
	else { 
		timebig2=Number(timebig2);
	//	alert(timebig2);
		clearTimeout(clocktimer);
		init=0;  
		variant=0;
		/*Процедура проверки положения селектора и расчета Времени*/
       // check();
     
          
	} 
};
function StartStop3() { 

	if (init==0)
	{ 	
		ClearСlock();
		dateObj = new Date(); 
		variant=3;
		StartTIME(); 
		init=1; 
	} 
	else { 
		timebig3=Number(timebig3);
	//	alert(timebig3);
		clearTimeout(clocktimer);
		init=0;  
		variant=0;
		/*Процедура проверки положения селектора и расчета Времени*/
        //check();
     
          
	} 
};

function middle(){
	
//timebig=((timebig+timebig2+timebig3)/3);		
document.middlesumm1.middlesumm1x.value=timebig1;	
document.middlesumm2.middlesumm2x.value=timebig2;	
document.middlesumm3.middlesumm3x.value=timebig3;
var xx;
xx=(timebig1+timebig2+timebig3)/3;
	
document.Formmiddle.middlepole.value=xx.toFixed(3)+' cek';
	
}
               
function check()
 {  
     var variant=document.getElementsByName('my-radio');
     if (variant[0].checked==true){

     /*2mm soplo*/ 
		
    var val;
    val = Number.parseInt(ds);
    var valsumm;   
           if(val>13){    
 	valsumm=(Math.pow(10,(-7)))*(4.2520009)*(Math.pow(val,3)); 
    valsumm=valsumm+(Math.pow(10,(-4)))*(4.280918)*(Math.pow(val,2))*(-1);
	valsumm=valsumm+val*(0.5686503); 	 
	valsumm=valsumm-33.6068923;
	document.MyForm.resultpole.value=Math.round(valsumm); }	 
   // document.MyForm.stopwatch4x.value=valsumm; 
		             else{
    myApp.alert('Слишком малое значение времени. Повторите измерение.', '-Ошибка-');
    ClearСlock();
	//dateObj = new Date();           
     };
	main=valsumm; 
     }
	 /*4mm soplo*/
         if (variant[1].checked==true){
	     var val;
     val = Number.parseInt(ds);
     var valsumm;  
                 if(val>13){    
 	valsumm=(Math.pow(10,(-4)))*(2.1203522)*(Math.pow(val,2)); 
    valsumm=valsumm+(Math.pow(10,(-6)))*(1.112638)*(Math.pow(val,3))*(-1);
	valsumm=valsumm+val*(4.7393057); 	 
	valsumm=valsumm-43.5523435;
	document.MyForm.resultpole.value=Math.round(valsumm); 	}    
  //  document.MyForm.stopwatch4x.value=valsumm; 
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
               if(val>13){    
 	valsumm=(Math.pow(10,(-5)))*(9.1782117)*(Math.pow(val,3)); 
    valsumm=valsumm+(0.0184844)*(Math.pow(val,2))*(-1);
	valsumm=valsumm+val*(21.498038); 	 
	valsumm=valsumm-76.4323174;
     	document.MyForm.resultpole.value=Math.round(valsumm);} 	
                      else{
    myApp.alert('Слишком малое значение времени. Повторите измерение.', '-Ошибка-');
    ClearСlock();
	//dateObj = new Date();           
     };
   
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
   // document.MyForm.stopwatch3x.value = yy; 
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
function  ClosePanel_left1(){
	myApp.closePanel(left, true);
}

var resultx=1;




document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown(e) {
   e.preventDefault();
};


