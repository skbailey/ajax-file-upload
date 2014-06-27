jQuery(function($){

  var form = $('form');
  var fileInput = form.find("#file")[0];
  form.submit(function(evt){

    var file = fileInput.files[0];
    var formData = new FormData();
    console.log('file', file)
    formData.append('file', file)

    $.ajax({
      url: '/photos',
      data: formData,
      processData: false,
      contentType: false,
      type: 'POST'
    })
      .done(function(){
        console.log("Successfully submitted form data");
      })
      .fail(function(){
        $.error("Couldn't submit form data")
      });
    
    return false;
  });
});