var AntymDocumentController = angular.module("documentApp", []);

AntymDocumentController.controller("documentController", function($scope) {
    //Project info  
    $scope.project = {};
    $scope.project.proposalDate = "11-02-2014";
    $scope.project.companyPOC = "Matt McGivney";
    $scope.project.estimate = "700";
    $scope.project.startDate = "11/09/2014";
    $scope.project.lengthDays = "10";    

    //Client info
    $scope.client = {};
    $scope.client.name = "John Doe";
    $scope.client.address = "1234 Main St.";

    //Company Info
    $scope.company = {};
    $scope.company.logoURI = "";
    $scope.company.name = "Antym LLC";
    $scope.company.address = "123 Main St.";
    $scope.company.hourlyRateDollars = "100";
  });
