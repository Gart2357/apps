import {nim_ad_sub} from './nim_ad_sub'

function nim_ad()
{
    var n = parseInt(document.forms.ad_form.textbox.value);
    if (!n || n < 1){
        alert('正整数のみ対応しています');
        return;
    }
    
    if (n == 57){
        alert(n + '\'=' + nim_ad_sub(n) + '\nただし結果は正確でない可能性があります。');
    }else{
        alert(n + '\'=' + nim_ad_sub(n));
    }
}