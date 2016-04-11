(function(){
    'use strict';
    
    /*global angular*/
    angular.module('app').controller('ConsumidorListController', ConsumidorListController);

    ConsumidorListController.$inject = ['$scope','$timeout', '$rootScope', '$location', '$http'];

    function ConsumidorListController($scope, $timeout, $rootScope, $location, $http){
        var vm = this;
        vm.edit = edit;
        vm.resetPassword = resetPassword;
        vm.sort = sort;

        activate();
        ////////////////////////////////////

        function edit(consumidor){
            $location.path('/consumidores/edit/' + consumidor.UnidadeConsumidora);
        }

        function resetPassword(consumidor){
            if (confirm('Tem certeza que deseja redefinir a senha do consumidor ' + consumidor.UnidadeConsumidora + '?')) {
                /*global toastr*/
                toastr.success('Operação efetuada com sucesso!');
            }
        }
        
        function sort(orderBy){
            vm.orderBy = orderBy;
            vm.reverse = !vm.reverse;
        }
        
        function activate(){
            vm.orderBy = 'UnidadeConsumidora';
            vm.reverse = true;
            
            $http.get($rootScope.baseURL + 'consumidor').success(function (data) {
                vm.consumidores = data;
            });
        }
    }
})();