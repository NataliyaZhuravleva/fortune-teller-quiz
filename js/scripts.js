// Business Logic






// User Interface
$(document).ready(function () {
  $("form#fortune-quiz").submit(function (event) {
    event.preventDefault();


    const unluckyEvents = [];
    let unluckyCounter = 0;
    $("input:checkbox[name=unlucky-events]:checked").each(function () {
      unluckyEvents.push($(this).val());
      unluckyCounter++;
    });


    const luckyEvents = [];
    let luckyCounter = 0;
    $("input:checkbox[name=lucky-events]:checked").each(function () {
      luckyEvents.push($(this).val());
      luckyCounter++;
    });
    // if we don't have checked{

    let counter = 0;
    if (luckyCounter > 0 && unluckyCounter > 0 && counter === 0) {

      $("#empty").hide();
      $("#unfortune-response").hide();
      $("#fortune-response").hide();
      $("#neutral-response").hide();

      if (unluckyCounter > luckyCounter) {
        counter++;
        $("#unfortune-response").show();
        $("#unfortune-response").text("You will have many troubles this week. Make sure to carry an umbrella when you go outside.")
      } else if (luckyCounter > unluckyCounter) {
        counter++;
        $("#fortune-response").show();
        $("#fortune-response").text("You will have great fortune in the coming weeks. Place large bets and you will win.")
      } else if (luckyCounter === unluckyCounter) {
        counter++;
        $("#neutral-response").show();
        $("#neutral-response").text("You are doing alright. Just keep swimming.")
      }

    } else $("#empty").show();
  });
});