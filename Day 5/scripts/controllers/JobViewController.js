/**
 * Created by Emilia.Palaghita on 7/3/2017.
 */
hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobService',
    function ($scope, $http, $routeParams, $location, JobService) {

        /*
         $scope.employee = {
         "jobId": "AD_PRES",
         "jobTitle": "President",
         "maxSalary": 40000,
         "minSalary": 20000
         };
         */

        // Handle a promise
        JobService.findById($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at jobs/findOne: " + err);
            });

        $scope.backJobList = function () {
            $location.url('/jobList');
        }
    }]);