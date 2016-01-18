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
