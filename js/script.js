//On page load, the cursor appears in the "Name" field, ready for a user to type
$("#name").focus()

//"Your job role" text field appears when user selects "Other" from the Job Role menu
$("#other-role").hide()
$("#title").on('click' , function(event){
    if(event.target.value === "other"){
        
    $("#other-role").show();

    }else{
        $("#other-role").hide()
    }
});

//Until a theme is selected from the “Design” menu, no color options appear in the
//“Color” drop down and the “Color” field reads “Please select a T-shirt theme”

$("#design").change(function(event){
    if($(event).val() === "js puns"){





    };
    if($(event).val() === "heart js "){


    };

});


//When a new theme is selected from the "Design" menu, the "Color" field and drop
//down menu is updated
$("").select(function(){
    $("").change();
});


//User cannot select two activities that are at the same time

//Validate required fields and provide error indications for invalid fields upon form
//submission