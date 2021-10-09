$(document).ready(function(){
    $(".dot").click(function(){
        let $this = $(this);
        let $parent = $this.closest(".dotContainer");
        let $grandParent = $this.closest(".card");
        let $greatAunt = $grandParent.find(".textContainer");
        var color = $this.data("color");
        var height = $grandParent.height();
        var width = $grandParent.width();
        var elPosition = $this.position();

        $parent.find(".dot").not($this).hide("slide");

        $this.css({top: elPosition.top, position: "absolute"})
        .animate({
            top: (height/2) - ($this.height()/2),
            left: (width/2) - ($this.width()/2)
        }, function(){
            $this.animate({
                top : -450,
                left: -450,
                "height" : 1000,
                "width" : 1000,
            }, function(){
                $grandParent.attr("data-color", color);
                $greatAunt.text("Card color: " + color);
                $this.hide();
                $parent.siblings(".closeContainer").show();

            });
        });

    });

    $(".close").click(function(){
        let $this = $(this);
        let $parent = $this.closest(".card");
        let $aunt = $parent.find(".textContainer");
        $parent.find(".dot").attr("style", "");
        $parent.attr("data-color", "white");
        $parent.find(".dotContainer").find(".dot").show("slide");
        $aunt.text("Card color: white");
        $parent.find(".closeContainer").hide();
    });
});