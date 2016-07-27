app.controller('cartController', ['cart','data',cartController])

function cartController(cart,data){
  var c = this;
  c.cart = cart;
  c.data = data;

  console.log(c.cart);

  c.total = c.cart.items.map(function(item){
    return c.data.get(item._id).price*item.amt
  }).reduce(function(total,subtotal){
    return total + subtotal;
  },0)

  c.edit = {};

  c.save = function(_id){

    c.edit[_id] = !c.edit[_id];

    c.total = c.cart.items.map(function(item){
      return c.data.get(item._id).price*item.amt
    }).reduce(function(total,subtotal){
      return total + subtotal;
    },0)
  }
}
