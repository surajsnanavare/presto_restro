var settings = {
    "url": "http://www.shettysroyaltreat.com/store/api/products/?display=[id,price,name]&output_format=JSON",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic QUY1NjZGN0ZVQUQ5Q0ZWTkxIWkNGRFJWRks0RlRKNkU6"
    },
  };
  
$.ajax(settings).done(function (response) {
console.log(response);
});