myApp.controller('AlphabetController', ['AppService', function(AppService) {
    const self = this;
    
    self.sayMsg = function(msg){
        AppService.sayMsg(msg);
    }
    
}]);