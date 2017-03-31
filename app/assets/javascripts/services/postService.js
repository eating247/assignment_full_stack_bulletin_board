bulletin.factory("postService", 
  ["Restangular", 
  function(Restangular) {

    var postService = {};
    var _posts = Restangular.all('posts').getList().$object;
    var _comments = Restangular.all('comments').getList().$object;

    postService.posts = function() {
      return _posts;
    }

    postService.comments = function() {
      // console.log(Restangular.all('comments').getList().$object);
      return _comments;
    }


    return postService;

}])