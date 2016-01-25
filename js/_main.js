var doubleLabels = [

    "<i>1</i><span>Queen</span>",
    "<i>2</i><span>King</span>",
    "<i>3</i><span>King Kong</span>"

];

$("#double-label-slider")
    .slider({
        max: 3,
        min: 1,
        value: 2,
        animate: 400
    })
    .slider("pips", {
        rest: "label",
        labels: doubleLabels
});


$(function() {
  $('.select_circle').show();
  generatepin(300,100);
});

  $('.ipad_map_assembling').click(function(e) {
    cleanpin();

    var width =  $('.select_circle').width()/2;
    $('.select_circle').hide();
    var offset = $(this).offset();
    $('.select_circle').css({top:(e.pageY - offset.top-width), left: (e.pageX - offset.left-width)});
    $('.select_circle').show();
    generatepin((e.pageX - offset.left-width),(e.pageY - offset.top-width));
  })


// $(function() {
//
//
//    $( ".assembling_circle" ).draggable({
//      containment: "parent",
//      start: function() {
//         cleanpin();
//       },
//      stop: function() {
//         generatepin();
//       }
//     });
//  });

 function cleanpin(){
   $('.assembling_pin').each(function(){
     var duration = Math.floor(Math.random() * 400) + 400 ;
     $(this).transition({ opacity: 0, y:0,duration: duration})});

 }

 function generatepin(left,top){
   var pins="";

   var circley = $(".select_circle").position().top;
   var circlex = $(".select_circle").position().left;

     var width =  $('.select_circle').width();

     var halfwidth = width/2;

   var num = Math.floor(Math.random() * 15) + 15;
   for(var i=0;i<20; i++){
     var x=Math.floor(Math.random() * width) + 1 ;
     var y=Math.floor(Math.random() * width) + 1 ;
     var distance = Math.sqrt( (x-halfwidth)*(x-halfwidth) + (y-halfwidth)*(y-halfwidth));

     if(distance < (halfwidth-5)){
       console.log(distance);
       pins+="<div class='assembling_pin' style='position:absolute; top:"+(y-60+top)+"px;left:"+(x-10+left)+"px;'><img src='http://www.myiconfinder.com/uploads/iconsets/6096188ce806c80cf30dca727fe7c237.png'></div>";
     }

   }
   $('.assembling_pins').html(pins);
   $('.assembling_pin').each(function(){
     var duration = Math.floor(Math.random() * 800) + 500 ;
     $(this).transition({ opacity: 1, y:50,duration: duration, delay: 1300})});

 }

var startPos = 2;

$("#double-label-slider").on("slidestop", function(event, ui) {
      endPos = ui.value;

      if (startPos != endPos) {
          if(endPos==1){
            $('.campaignoptions_header_item').hide();
            $('.campaignoptions_header-1').show();

            $('.story_content_campaignoptions_item').hide();
            $('.story_content_campaignoptions_image-1').show();
          }else if(endPos==2){
            $('.campaignoptions_header_item').hide();
              $('.campaignoptions_header-2').show();

              $('.story_content_campaignoptions_item').hide();
              $('.story_content_campaignoptions_image-2').show();
          }else if(endPos==3){
            $('.campaignoptions_header_item').hide();
              $('.campaignoptions_header-3').show();

              $('.story_content_campaignoptions_item').hide();
              $('.story_content_campaignoptions_image-3').show();
          }
      }

      startPos = endPos;
  });
