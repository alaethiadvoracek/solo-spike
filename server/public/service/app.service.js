myApp.service('AppService',['$http', function($http) {
    console.log('inside service');
        const self = this;

    self.sayMsg = function(){
        let msg = new SpeechSynthesisUtterance("Hello fomalhaut");
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[25]; // Note: voices are unpredictable at the moment, still experimental tech. 7 is the clearest male, 17 the clearest female, 25 is good
        msg.voiceURI = 'native';
        msg.volume = 2; // 0 to 1
        msg.rate = .8; // 0.1 to 10
        msg.pitch = 1; //0 to 2      
        msg.lang = 'en-US';
             window.speechSynthesis.speak(msg);
     }//end message function  
}]);//end service 