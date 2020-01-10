from app.main import db
from app.main.models.objective_type import ObjectiveType
from flask import jsonify

def delete_objective_type(data):
    """method to delete a question set in the test in model ObjectiveType
    Args:
        data (dict): data which needs to be deleted in objective_type table
        using ObjectiveType model
    Returns:
        dict, int: response object containing appropriate response based on the response from saved changes,
        http response code specifying the success of updating data into table.
    """
    objective_type = ObjectiveType.query.get(int(data["objective_type_id"]))
    db.session.delete(objective_type)
    db.session.commit()
    response_object = jsonify({"response": "successfully deleted"})
    return response_object, 200
