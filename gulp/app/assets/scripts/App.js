import $ from "jquery";
import moment from "moment";

$("#btn").click(()=>{
  alert("Here we go");
  console.log("here we go")
  console.log("here we go")
});

var datetime = null,
        date = null,
        time= null;

var update = ()=> {
    date = moment(new Date())
    datetime.html(date.format('ddd,  Do MMM YYYY'));
    time.html(date.format('h:mm:ss'));
};

$(document).ready(()=>{
    datetime = $('#datetime')
    time=$("#time")
    update();
    setInterval(update, 1000);
});
$(".tab-2").click(()=>{
  alert("You don't have premission")
});
// Switch button
$(".operation-btn").click(function(){
  var $this= $(this);
  if($this.hasClass("switch")){
    $this.removeClass("switch");
    $this.text("Stop");
  }else{
    $this.addClass("switch");
    $this.text("Run");
  }
});
// DROPDOWN button
$(".down-arrow").click(()=>{
 $(".login-option").slideToggle();
});
// Table
$("tbody tr:first-child td").css(
  {
    'backgroundColor': ' #f2ffe5',
    'color': '#009245'
  }
);
$("td:nth-child(1),td:nth-child(2)").css(
  {
    'backgroundColor': ' #111111',
    'color': '#fff'
  }
);
$("th:nth-child(1),th:nth-child(2)").css(
  {
    'backgroundColor': ' #000',
    'color': '#fff'
  }
);
$("tbody tr:first-child td").css(
  {
    'color': '#009245'
  }
);
$("td:nth-child(1)").css(
  {
    'textAlign': 'left',
    "padding-left" : "25px"
  }
);
 // Table Show hide
$(document).load($(window).bind("resize", checkPosition));
function checkPosition()
{
    if($(window).width() < 1020)
    {
        $(".history").hide();
    } else {
        $(".history").show();
    }
}
