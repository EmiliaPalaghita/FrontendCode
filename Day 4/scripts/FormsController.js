/**
 * Created by Emilia.Palaghita on 6/30/2017.
 */
angular.module('hrApp').controller('FormsController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.name = "";
    $scope.submit = function() {
        if($scope.name.localeCompare("") !== 0) {
            alert("Submitted succesfully!");
            $scope.name = "";
        }
    }
}
]);