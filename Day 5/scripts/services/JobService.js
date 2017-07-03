/**
 * Created by Emilia.Palaghita on 7/3/2017.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactory.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": "AD_PRES",
                            "jobTitle": "President",
                            "maxSalary": 40000,
                            "minSalary": 20000
                        };
                    });
            }
        }
    }]
);