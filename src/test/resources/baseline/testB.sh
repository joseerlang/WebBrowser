#!/bin/bash
i="0"

while [ $i -lt 3 ]
do
ab -n 10 -c 2 -g graphTest1-$i.dat 'http://localhost:8080/solr/select/?q=*&version=2.2&start=0&rows=20&indent=on' 1>>resultadosB.dat
cut -f2-10 graphTest1-$i.dat >>graphTestB.dat
rm -rf graphTest1-$i.dat
i=$[$i+1]
done

