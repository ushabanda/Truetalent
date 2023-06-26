from flask import Flask, jsonify
from flask_cors import CORS
# import mysql.connector

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

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
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
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


@app.route("/post_data", methods=['POST'])
def post_function():
    print("data added successfully")
    return {"msg": "Data Added Successfully"}


@app.route("/put_data", methods=['PUT'])
def put_function():
    return {"msg": "Data updated Successfully"}


@app.route("/delete_data", methods=['DELETE'])
def delete_function():
    return {"msg": "Data Deleted Successfully"}


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=8001)
