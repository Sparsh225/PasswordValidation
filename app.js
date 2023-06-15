var check=function(){
    if(document.getElementById('password').value==document.getElementById('checkpassword').value){
        document.getElementById('alertpassword').style.color='#8CC63E';
        document.getElementById('alertpassword').innerHTML='<span><i class ="fas fa-check-circle"></i> Match !</span>';
    }else{
        document.getElementById('alertpassword').style.color='#EE2B39';
        document.getElementById('alertpassword').innerHTML='<span><i class ="fas fa-exclamation-triangle"></i>Not Matching </span>';
    }
}