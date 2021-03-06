hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            getAllJobs: function () {
                return $http.get(CommonResourcesFactory.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return [];
                    });
            },
            getManagers: function () {
                return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                    .success(function (data) {
                        var managers = [];
                        for (var employee in data) {
                            if (data[employee].managerId != null) {
                                var bool = true;
                                for (var manager in managers) {
                                    if (managers[manager].managerId.employeeId === data[employee].managerId.employeeId) {
                                        bool = false;
                                    }
                                }
                                if (bool) {
                                    managers.push(data[employee]);
                                }
                            }
                        }
                    })
                    .error(function (err) {
                        return [];
                    });
            },
            getDepartments: function () {
                return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return [];
                    });
            }
        }
    }]
);