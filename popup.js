document.addEventListener('DOMContentLoaded', function () {
    $.get( "http://dict.cc", function( data ) {
        var $toProcess = $(data);
        $toProcess.find('#lpddbsf option').each(function(index, item){
            $('#languageSelect').append(item);
        });
    });

    $('#translate').click(function(){
        var lang = $("#languageSelect").val();
        var langArr = lang.split('-');
        var word = $('#translateWord').val();
        console.log(lang, word);
        if(lang && lang != '' && word && word != '') {
            var loweredLang = lang.toLowerCase().replace('-', '');
            $.get( "http://"+ loweredLang +".dict.cc/?s="+word, function( data ) {
                var $toProcess = $(data);
                $toProcess.find('#tr1 .td7nl').each(function(index, item){
                    $('#outgoingLang').html(langArr[0]);
                    $('#goalLang').html(langArr[1]);
                    $('#translatedRow').append(item);
                });
                $('#translated').show(0);
            });
        }
    });
});