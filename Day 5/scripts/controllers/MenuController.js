hrApp.controller('MenuController', ['$scope', 'EmployeeActionsService', 'jobActionService', function ($scope, EmployeeActionsService, jobActionService) {
    /*
    $scope.employeeActionList = [{
        url:'#/employeeslist',
        label:'Employee List'
    }];
    */

    $scope.employeeActionList = EmployeeActionsService;
    $scope.jobActionList = jobActionService;
    $scope.currentDate = new Date();
}]);
