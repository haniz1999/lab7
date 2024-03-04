// app.js
var app = angular.module("myApp", []);

app.controller("MainController", function ($scope, $http) {
  $scope.thumbnails = [];
  $scope.fullSizeImage = null;

  // Fetch thumbnails with specific dimensions
  $http
    .get("https://picsum.photos/v2/list?limit=20")
    .then(function (response) {
      response.data.forEach(function (item) {
        var thumbnailUrl = `https://picsum.photos/id/${item.id}/50/50`;
        item.thumbnail_url = thumbnailUrl;
      });
      $scope.thumbnails = response.data;
    })
    .catch(function (error) {
      console.error("Error fetching thumbnails:", error);
    });

  // Function to show full-size image
  $scope.showFullSize = function (image) {
    $scope.fullSizeImage = {
      id: image.id,
      url: `https://picsum.photos/id/${image.id}/350/350`,
    };
  };
});
