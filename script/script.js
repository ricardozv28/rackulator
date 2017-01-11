$(document).ready(function(){

	var number = "";
  var totaldiv = $("#total");
  totaldiv.text("0");

  var weights = [45,35,25,15,10,5,2.5,2,1.25,1,0.5];
  var bar_weight = 45;


  function numtoString(num){
    switch(num) {
      case 45:
        return "red lighten-3";
        break;
      case 35:
        return "purple lighten-3";
        break;
      case 25:
        return "indigo lighten-3";
         break;
      case 15:
        return "blue lighten-3";
        break;
      case 10:
        return "light-blue lighten-3";
        break;
      case 5:
        return "teal lighten-3";
        break;
      case 2:
        return "green lighten-3";
        break;
      case 2.5:
        return "lime lighten-3";
        break;
      case 1.25:
        return "yellow lighten-3";
        break;
      case 1:
        return "orange lighten-3";
        break;
      case 0.5:
        return "brown lighten-3";
        break;
    }
  }
  
  $("#numbers > a").not("#reset,#run").click(function(){
    number += $(this).text();
    totaldiv.text(number);
    var list = $('#result');
    list.empty();
  });

  $("#reset").click(function(){
		number = "";
		totaldiv.text("0");
    var list = $('#result');
    list.empty();
  });

  $('#run').on('click', function() {
    var totalInt = parseInt($('#total').text());
    racking(totalInt,bar_weight,weights);
    number = "";
  })

  function racking(weight, bar_weight, weights) {
    var toRack = [];
    var left = weight - bar_weight;
    var index = 0;

    if(weight <=44){
      Materialize.toast('Do you even lift, bro?', 4000)
    }else if(weight >500){
      Materialize.toast("CALM DOWN DUDE!", 4000)
    }else{
      while (left > 0) {
        // find largest possible weight to add
        var found = false;
        for(var i=0; i<weights.length; i++) {
          var amt = weights[i]*2;
          if ( amt <= left ) {
            left -= amt;
            toRack[index] = weights[i];
            index++;
            found = true;
            break;
          }
        }
        if (!found) {
          toRack = []
          Materialize.toast('Wait try less weight, dude', 4000)
          break;
        }
      }
    } return display()

    function display(){
      var ult = toRack.length;
      for( var i=0; i < ult; i++){
        var list = $('#result');
        var last = parseInt($('#result li:last-child').text());
        list.append("<li class=" + numtoString(toRack[i]) + ">" + toRack[i] +"</li>");
      }
    }
  }
});