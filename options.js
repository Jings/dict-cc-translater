document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get("specifiedFile", function(data) {
      $('#specifiedfile').val((data.specifiedFile));
    });

    var saveoptions = document.getElementById('saveoptions');
    saveoptions.addEventListener('click', function() {
        var port = $("#specifiedfile").val();
        if(port){
            chrome.storage.sync.set({'specifiedFile': port});
            $("#success").html("Settings saved!");
        }
    });
});
