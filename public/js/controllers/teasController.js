app.controller('teasController',['$http','data','cart',teasController]);

function teasController($http,data,cart){
  var tea = this;

  tea.data = data;
  tea.cart = cart;

  tea.add = function(entry){
    cart.addItem(entry._id, tea[entry._id] || 1)
  }

  console.log(data.categories);

}
