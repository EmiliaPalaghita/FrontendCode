/**
 * Created by Emilia.Palaghita on 6/30/2017.
 */
angular.module('hrApp').controller('ColorsController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.selectedColor;
    $scope.selected;
    $scope.input1;
    $scope.input2;

    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text": "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text": "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.changeColor = function() {
        $scope.selectedColor = $scope.selected.class;
        console.log($scope.selected);
        console.log($scope.selectedColor);
    };
}
]);