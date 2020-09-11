
window.onload = function() {

    this.console.log("js loaded")

     var getStatusCodeVar = document.getElementById('getStatusCode') || "nullObj";
     getStatusCodeVar.onclick= function(){
         getStatusCode();
     }

     var setLatencyVar = document.getElementById('setLatency') || "nullObj";
     setLatencyVar.onclick= function(){
         setLatency();
     }

     function getStatusCode(){
         var serverAddressInputVar = document.getElementById('serverAddressInput').value;
         var getstatuscodeInputVar = document.getElementById('getstatuscodeInput').value;
         window.location = `/ui/status/${serverAddressInputVar}/${getstatuscodeInputVar}`;
     }
     
     function setLatency(){
        var serverAddressInputVar = document.getElementById('serverAddressInput').value;
        var setlatencyInputVar = document.getElementById('setlatencyInput').value;
        window.location = `/ui/latency/${serverAddressInputVar}/${setlatencyInputVar}`;
    }





}
