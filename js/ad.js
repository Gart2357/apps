function ad()
{
    var n = parseInt(document.forms.ad_form.textbox.value);
    if (!n || n < 1){
        alert('正整数のみ対応しています');
        return;
    }
    
    var is_prime = new Array(n+1).fill(1);
    is_prime[0] = is_prime[1] = 0;
    for (var i = 2; i <= Math.sqrt(n); i++){
        if (is_prime[i]){
            for (var j = i * 2; j <= n; j += i){
                is_prime[j] = 0;
            }
        }
    }
    
    var nn = n;
    var fct = {};
    for (var i = 2; i <= n; i++){
        if (!is_prime[i] || nn % i){
            continue;
        }

        fct[i] = 0;
        while (!(nn % i)){
            nn /= i;
            fct[i]++;
        }
    }

    var fcts = n + '=';
    var d = 0;
    Object.keys(fct).forEach(function(base){
        var exp = this[base];
        d += n / base * exp;
        if (exp == 1){
            fcts += base + ' × ';
        }else{
            fcts += base + '^' + exp + ' × '
        }
    }, fct);

    if (n == 57){
        alert(fcts.slice(0, -2) + '\n' + n + '\'=' + d + '\nただし結果は正確でない可能性があります。');
    }else{
        alert(fcts.slice(0, -2) + '\n' + n + '\'=' + d);
    }
}