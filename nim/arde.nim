proc arde_sub(n: int64): int64 {.exportc.} = 

    if n <= 0:
        raise newException(Exception, "Input a positive integer")

    var tmp: int64 = n
    block division:
        while tmp mod 2 == 0:
            result += int64(n div 2)
            tmp = tmp div 2
            if tmp == 1:
                break division
        for i in countup(3.int64, tmp.int64, 2):
            while tmp mod i == 0:
                result += int64(n div i)
                tmp = tmp div i
                if tmp == 1:
                    break division