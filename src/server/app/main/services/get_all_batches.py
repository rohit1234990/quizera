from app.main import db
from app.main.models.batch import Batch
from flask import jsonify
import json


def get_all_batches():
    """method to get all the batch list to the model Batch
    Args:
        data (dict): data which will be fetched from the batch table
                    using Batch model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    all_batch = db.session.query(Batch).all()
    db.session.commit()
    items = list()
    for i in all_batch:
        items.append({"batch_id": i.batch_id, "batch_name": i.batch_name})
    response_object = jsonify({"data": items})
    return response_object, 200