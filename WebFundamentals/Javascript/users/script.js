$(document).ready(function(){
    $('form').submit(function(){
        var str = $('form').serializeArray();
        var vals = [];
        var newRow = "";
        for(var i = 0; i < str.length; i++){
            vals = Object.values(str[i]);
            // console.log(val[0]);
            if(vals[1] == "") {
                alert("Please fill out all fields.");
                return false;
            }
            newRow = '<td>' + vals[1] + '</td>'
            $('#targetRow').append(newRow);;
        }
        
        return false;
    });
});