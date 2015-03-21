var app = angular.module("app", ["ngResource", "ngRoute"]);

app.run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});

app.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/$resource/list-of-books', {
    templateUrl: 'book/books_resource.html',
    controller: 'BooksResourceController'
  });

  $routeProvider.when('/$http/list-of-books', {
    templateUrl: 'book/books_http.html',
    controller: 'BooksHttpController',
    resolve: {
      books: function(BookService) {
        return BookService.getBooks();
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
