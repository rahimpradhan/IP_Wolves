
import csv, os, pandas as pd



templateFile = open('finalFile.csv', 'w')
OutputWriter = csv.writer(templateFile)

templateFile.close()


secLogs = open('precolumn100.csv')
secData = list(secLogs)
logReader = csv.reader(secData)

outputFile = open('columnsRemoved.csv', 'w')
secondOutputWriter = csv.writer(outputFile)

for r in logReader:
    rows = [r[6], r[18], r[21]]
    if r[4] =="em0":
        secondOutputWriter.writerow(rows)


outputFile.close()

modLogs = open('columnsRemoved.csv')
finalReader = csv.reader(modLogs)

finalOutputFile = open('finalFile.csv', 'a')
finalOutputWriter = csv.writer(finalOutputFile)

for r in finalReader:
    finalOutputWriter.writerow(r)

outputFile.close()
secLogs.close()
finalOutputFile.close()
