import json, copy
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_cors import cross_origin
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="Google@123",
  database="truetalentdb"
)
mycursor = mydb.cursor()

# print(mydb)


def mysql_get_all():
    mycursor.execute("SELECT * FROM truetalentdb.winners") 

    myresult = mycursor.fetchall()

    # column_names = [i[0] for i in mycursor.description] # Get the column names

    # dict_results = [dict(zip(column_names, row)) for row in myresult]  # Convert results to a dictionary

    print("\n\n =======  mysql_get_all  ========\n\n")
    for record in myresult:
        print(record)
    print("\n\n =================\n")

    return myresult

# def candidate_get():
#     mycursor.execute('SELECT * FROM truetalentdb.candidate')
#     getresult = mycursor.fetchall()
#     print(candidate_get)
    
#     return getresult

def mysql_insert(db, query_value):
    mycursor.execute(
        f"INSERT INTO truetalentdb.{db} VALUES {query_value}")
        # " INSERT INTO truetalentdb.winners VALUES (9,'Weekly','2023-04-20','2023-04-27','Ravi Shankar Sharma','-','Bangalore','2023-04-20')")
    mydb.commit()
    return mycursor.rowcount


# mysql_insert()

# def candidate_insert():
#     mycursor.execute(
#         'INSERT INTO truetalentdb.candidate VALUES (1,"Usha","banda","usha44hsm@gmail.com","usha@1234","usha@1234","123456")')
#     mydb.commit()
#     return mycursor.rowcount

def submit_form():
    # Extract form data from request
   user_data = request.get_json()
   name = user_data['name']
   email = user_data['email']

   sql = "INSERT INTO truetalentdb.candidate (name, email) VALUES (%s, %s)"
   values = (name, email)
   mycursor.execute(sql, values)
   mydb.commit()

   return 'Form submitted successfully'

def mysql_update():
    mycursor.execute(
        " UPDATE truetalentdb.winners SET Name = 'Darshan' WHERE ID = '2' ")
    mydb.commit()
    return mycursor.rowcount


def mysql_delete():
    mycursor.execute(" DELETE FROM truetalentdb.candidate WHERE ID = '1' ")
    mydb.commit()
    return mycursor.rowcount


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# @app.route('/get-data', methods=['GET'])
# def get_table_data():
#     # To Connect to the MySQL database
#     connection = mysql.connector.connect(
#         host='localhost:3306',
#         user='root',
#         password='Google@123',
#         database='truetalentdb'
#     )

#     # Create a cursor to execute queries
#     cursor = connection.cursor()

#     # Execute a select query to fetch data from the table
#     cursor.execute('SELECT * FROM winners')

#     # Fetch all rows from the result set
#     rows = cursor.fetchall()

#     # Convert the data to a list of dictionaries
#     data = []
#     for row in rows:
#         data.append({
#             '#': row[0],
#             'startdate': row[1],
#             'enddate': row[0],
#             'name': row[0],
#             'email': row[0],
#             'location': row[0],
#             'registration': row[0]
#         })

#     # Close the cursor and the connection
#     cursor.close()
#     connection.close()

#     return jsonify(data)


@app.route("/")
def namaste_world():
    return "<p>Namaste, World!</p>"


@app.route("/get_data", methods=['GET'])
# # @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_data():
    data = {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
                {
                    "batter":
                    [
                        {"id": "1001", "type": "Regular"},
                        {"id": "1002", "type": "Chocolate"},
                        {"id": "1003", "type": "Blueberry"},
                        {"id": "1004", "type": "Devil's Food"}
                    ]
                },
        "topping":
        [
                        {"id": "5001", "type": "None"},
                        {"id": "5002", "type": "Glazed"},
                        {"id": "5005", "type": "Sugar"},
                        {"id": "5007", "type": "Powdered Sugar"},
                        {"id": "5006", "type": "Chocolate with Sprinkles"},
                        {"id": "5003", "type": "Chocolate"},
                        {"id": "5004", "type": "Maple"}
                ],
        "extra":
        [
                        {"id": "5001", "type": "None"},
                        {"id": "5002", "type": "Glazed"},
                        {"id": "5005", "type": "Sugar"},
                        {"id": "5007", "type": "Powdered Sugar"},
                        {"id": "5006", "type": "Chocolate with Sprinkles"},
                        {"id": "5003", "type": "Chocolate"},
                        {"id": "5004", "type": "Maple"}
                ]
    }
    # return { "msg" : "Hi Usha" }
    return data


def convert_list_dict(lst):
   res_dict = {}
   data = []
   for i in range(len(lst)):
       res_dict['id'] = lst[i][0]
       res_dict['category'] = lst[i][1]
       res_dict['start_date'] = lst[i][2].strftime("%d-%b-%Y")
       res_dict['end_date'] = lst[i][3].strftime("%d-%b-%Y")
       res_dict['name'] = lst[i][4] 
       res_dict['email'] = lst[i][5]
       res_dict['location'] = lst[i][6]
       res_dict['registration_date'] = lst[i][7].strftime("%d-%b-%Y")

       data.append(copy.deepcopy(res_dict))
   return data

@app.route("/users", methods=['GET'])
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_sql_data():
    result = mysql_get_all()
    output = convert_list_dict(result)
    return jsonify(output)


@app.route("/post_data", methods=['POST'])
@cross_origin()
def post_function():
    print("\n\n ======== request.data =======",request.get_json())
    print("\n\n ======== request.form =======",request.form.get('language'))
    # value_data = "(3,'Manu','B','manu.b@gmail.com','manu@1234','123456')"
    # if mysql_insert('candidate', value_data):
    #     print("\n\n ===== Data added successfully  ======\n\n")
    return {"msg": "Data Added Successfully"}
    # else:
    #     return {"msg": "An error occured while inserting new record."}


@app.route("/put_data", methods=['PUT'])
@cross_origin()
def put_function():
    if mysql_update():
        print("\n\n ===== Data updated successfully  ======\n\n")
        return {"msg": "Data updated Successfully"}
    else:
        return {"msg": "An error occured while updating  record."}


@app.route("/delete_data", methods=['DELETE'])
@cross_origin()
def delete_function():
 if mysql_delete():
        print("\n\n ===== Data deleted successfully  ======\n\n")
        return {"msg": "Data deleted Successfully"}
 else:
        return {"msg": "An error occured while deleting  record."}

@app.route("/submit-form", methods=['POST'])
@cross_origin(supports_credentials=True)
def submit_form_route():
    result = submit_form()
    response= jsonify({"msg":result})
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    response.headers.add("Access-Control-Allow-Credentials", "true")
    return jsonify({"msg": result})


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8001)
