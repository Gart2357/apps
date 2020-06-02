function arde()
{
    var n = parseInt(document.forms.arde_form.textbox.value);
    if (!n || n < 1){
        alert('正整数のみ対応しています');
        return;
    }
    
    if (n == 57){
        alert(n + '\'=' + arde_sub(n) + '\nただし結果は正確でない可能性があります。');
    }else{
        alert(n + '\'=' + arde_sub(n));
    }
}