import math

proc arde_sub(n: int64): int64 {.exportc.} = 

    if n <= 0:
        raise newException(Exception, "Input a positive integer")

    var tmp: int64 = n
    block trial:
        for i in 2.int64..tmp.float.sqrt.int64:
            while tmp mod i == 0:
                result += int64(n div i)
                tmp = tmp div i
                if tmp == 1:
                    break trial
        