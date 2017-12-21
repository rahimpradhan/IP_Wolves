import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='rhodge',
    passwd='Karmaa12$',
    db='betaIPwolvesDB')
cursor = mydb.cursor()
deleterows = cursor.execute("delete from IPs order by id desc limit 95")

csv_data = csv.reader(file('finalFile.csv'))
for row in csv_data:

    cursor.execute('REPLACE INTO IPs(actionstat, \
          sourceIP, destinationPort )' \
          'VALUES("%s", "%s", "%s")',
          row)

#    deleterows



#close the connection to the database.
mydb.commit()
cursor.close()
print "Done"
