
import csv
import MySQLdb

mydb = MySQLdb.connect(host='localhost',
    user='rhodge',
    passwd='Karmaa12$',
    db='betaIPwolvesDB')
cursor = mydb.cursor()
#delstatmt = "DELETE FROM IPsClone WHERE id = WHERE 'ID' BETWEEN 50 AND 100"

#number_of_rows = cursor.execute("SELECT COUNT(*) FROM IPsClone")

def howmany():
    number_of_rows = cursor.execute("SELECT * FROM IPsClone")
    print int(number_of_rows)
    print number_of_rows + 30

    if number_of_rows > 15:
        print "this is high"

howmany()


#csv_data = csv.reader(file('finalFile.csv'))
#for row in csv_data:
#print number_of_rows
#close the connection to the database.
mydb.commit()
cursor.close()
print "Done"

#db= MySQLdb.connect("localhost", "rhodge", "Karmaa12$", "betaIPwolvesDB")
