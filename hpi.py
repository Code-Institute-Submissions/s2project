from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
import os


app = Flask(__name__)

MONGO_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017')
DBS_NAME = os.getenv('MONGO_DB_NAME', 'project2')
COLLECTION_NAME = 'hpi'


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/graphs")
def charts():
    return render_template("graphs.html")

@app.route("/project4/hpi")
def project4_hpi():
    """
    A Flask view to serve the project data from
    MongoDB in JSON format.
    """

    # A constant that defines the record fields that we wish to retrieve.
    FIELDS = {
        '_id': False, 'Country': True, 'CountryCode': True, 'Life Expectancy': True,
        'Well-being(0-10)': True, 'Happy Life Years': True,
        'Footprint(gha/capita)': True, 'Happy Planet Index': True,
        'Population': True, 'GDP/capita': True,
        'Governance Rank(1 - highest gov)': True
    }

    # Open a connection to MongoDB using a with statement such that the
    # connection will be closed as soon as we exit the with statement
    with MongoClient(MONGO_URI) as conn:
        # Define which collection we wish to access
        collection = conn[DBS_NAME][COLLECTION_NAME]
        # Retrieve a result set only with the fields defined in FIELDS
        # and limit the the results to 55000
        projects = collection.find(projection=FIELDS, limit=55000)
        # Convert projects to a list in a JSON object and return the JSON data
        return json.dumps(list(projects))

if __name__ == "__main__":
    app.run(debug=True)