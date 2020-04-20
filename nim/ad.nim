import math

proc nim_ad_sub(n: int64): int64 {.exportc.} = 

    if n == 0:
        raise newException(Exception, "Arithmetic Derivative of 0 is Undefined")

    var tmp: int64 = n
    while tmp != 1:
        if tmp mod 2 == 0:
            tmp = tmp div 2
            result += int64(n div 2)
        else:
            block trial:
                for i in countup(3.int64, int64(sqrt(float(tmp))), 2.int64):
                    if tmp mod i == 0:
                        result += int64(n div i)
                        tmp = tmp div i
                        break trial

            result += int64(n div tmp)
            tmp = 1
        