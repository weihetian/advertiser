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
