hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.jobs = [];
        $scope.departments = [];
        $scope.managers = [];

        EmployeeService.getAllJobs().then(function (res) {
            $scope.jobs = res.data;
        }, function (err) {
            console.log("Error at getAllJobs: " + err);
        });

        EmployeeService.getDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at getDepartments: " + err);
            });


        EmployeeService.getManagers()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at getManagers: " + err);
            });
        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };



        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);