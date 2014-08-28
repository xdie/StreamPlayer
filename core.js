
/* Propiedades de soundmanager  */ 
/* DEV */
// Modo debugging con false tambien desactivamos la caja de texto del mismo
soundManager.debugMode = true; 
soundManager.consoleOnly = false;
soundManager.stream = true;
soundManager.preferFlash = true;
soundManager.noSWFCache = true;
soundManager.useFlashBlock = true
soundManager.useFastPolling = true;
soundManager.useHighPerformance = true;
soundManager.debugFlash = false;
soundManager.multiShot = false;

/* Configuracion Estatica */ 
soundManager.url = 'swf/';
soundManager.flashVersion = 9;



// Manejamos el boton play/pause // radio es el el id definido mas abajo, cada id representa una radio
function playPause(radio) {

var playpauseimg = document.getElementById("playpauseimg");
var btstatus = playpauseimg.getAttribute("class");

      if (btstatus == "glyphicon glyphicon-pause" ) {
        playpauseimg.setAttribute("class", "glyphicon glyphicon-play");
        soundManager.stop(radio);
      } else {
        playpauseimg.setAttribute("class", "glyphicon glyphicon-pause");
        soundManager.play(radio);
   
      }

}
// Manejamos el boton Mute

function Mute() {

var muteimg = document.getElementById("muteimg");
var btstatus = muteimg.getAttribute("class");


      if (btstatus == "glyphicon glyphicon-volume-up" ) {
        muteimg.setAttribute("class", "glyphicon glyphicon-volume-off");
        soundManager.masterVolume(0);
       
      } else {
        muteimg.setAttribute("class", "glyphicon glyphicon-volume-up");
        soundManager.masterVolume(70);
      }

}			


function setVolume() {
  // Setear el volumen
    var volume = document.getElementById("volume");
    soundManager.masterVolume(volume.value);
    //console.log(volume.value);
}

 var mySMSound = soundManager.getSoundById('metro');
     

// Aca definimos las Radios con un id y su configuracion dependiendo su tipo DE STREAMING
    soundManager.setup({
   

    onready: function() {
       //var mySMSound = soundManager.getSoundById('mitre');
       
      soundManager.createSound({
        
        id: 'mitre',
       // serverURL: '',
        url: 'http://buecrplb01.cienradios.com.ar/Mitre790.aac?type=.flv',
        //url: 'http://wmserver3.aginet.com.ar:13574/;stream/1',
        debugMode: true
         
         });
      
      soundManager.createSound({
        
        id: 'radio10',
       // serverURL: '',
        serverURL: 'rtmp://live2.stweb.tv:1935/radio10/',
        url: 'live',
        debugMode: true
        
  
        });
         
      soundManager.createSound({
        
        id: 'los40',
       // serverURL: '',
        url: 'http://5133.live.streamtheworld.com:80/LOS40_ARGENTINA_SC',
        debugMode: true

        });
      
      soundManager.createSound({
        
        id: 'la100',
       // serverURL: '',
        url: 'http://buecrplb01.cienradios.com.ar/la100.aac?type=.flv',
        debugMode: true
     
         });
      
      soundManager.createSound({
        
        id: 'metro',
       // serverURL: '',
        url: 'http://65.60.52.122:8615/metro.mp3',
        debugMode: true
     
         });
      
      soundManager.createSound({
        
        id: 'popradio',
       // serverURL: '',
        serverURL: 'rtmp://popradio.stweb.tv:1935/popradio/',
        url: 'live',
        debugMode: true
  
        });
      
      soundManager.createSound({
        
        id: 'tkm',
       // serverURL: '',
        serverURL: 'rtmp://tkm.stweb.tv:1935/tkm/',
        url: 'live',
        debugMode: true
  
        });
      
      soundManager.createSound({
        
        id: 'vale',
       // serverURL: '',
        serverURL: 'rtmp://vale.stweb.tv:1935/vale/',
        url: 'live',
        autoLoad: true,
        debugMode: true
  
        });
      
      soundManager.createSound({
      
        id: 'continental',
       // serverURL: '',
        url: 'http://1351.live.streamtheworld.com:80/CONTINENTAL_SC',
        debugMode: true
  
        });
      
       soundManager.createSound({
      
        id: 'radio1',
       // serverURL: '',
        url: 'http://72.29.85.108:8231/stream?type=.flv',
        debugMode: true
  
        });
       soundManager.createSound({
      
        id: 'radio2',
       // serverURL: '',
        url: 'http://190.93.41.38:8020/;',
        debugMode: true
  
        });
       //
       soundManager.createSound({
      
        id: 'am570',
       // serverURL: '',
        url: 'http://am570.prodera.com.ar:8000/;',
        debugMode: true
  
        });
        soundManager.createSound({
      
        id: 'fm979',
       // serverURL: '',
        url: 'http://buecrplb01.cienradios.com.ar/fm979.mp3',
        debugMode: true
  
      });
 
    },

    ontimeout: function() {
        
      alert("Error tiempo de espera superado!");
      window.location.reload();
    }

});
 