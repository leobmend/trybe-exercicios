-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
SELECT DATEDIFF('2030-01-20', NOW());

-- Monte uma query exiba a diferença de horas entre '15:25:45' e '11:00:00' .
SELECT HOUR(TIMEDIFF('15:25:45', '11:29:00'));
