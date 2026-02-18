<?php
    $number = 55;
    $number2 = 10;

    if(is_numeric($number) && is_numeric($number2)){
        $result = $number + $number2;
        echo "The result of adding $number and $number2 is: $result";
    } else {
        echo "Both values must be numeric.";
    }
?>