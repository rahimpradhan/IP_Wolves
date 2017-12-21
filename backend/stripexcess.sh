#!/bin/bash

#Copy filterlog matching interface em0 to new dir with new name
grep "em0" /var/log/client_logs/192.168.50.1/filterlog.log > /home/rhodge/groupProject/currentfilter.csv
echo "Creating new csv file from current traffic logs"
sleep 2s

#Pull first 100 lines of csv file from file
tail -n 100 currentfilter.csv > precolumn100.csv
echo "Retrieving most recent 100 logs from file"
sleep 1s

#Run python script
python removeColumns.py
echo "Running file modification script for import into SQL"
sleep 1s

#Run python script
echo "Importing logs into SQL | Deleting previous 95 logs from DB"
python DBload.py

sleep 2s

if [ ! -f finalFile.csv ]
then
  echo "File does not exist. Skipping..."
else
  rm finalFile.csv columnsRemoved.csv precolumn100.csv
  echo "Extraneous files deleted"
fi

#rm finalFile.csv

#view number of lines in csv
#wc -l strip100.csv
