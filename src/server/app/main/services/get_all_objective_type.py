from app.main import db
from app.main.models.objective_type import ObjectiveType
from flask import jsonify
import json


def get_all_objective_type():
    """[summary]    

    Returns:
        [type]: [description]
    """
    all_objective_type = db.session.query(ObjectiveType).all()
    db.session.commit()
    items = list()
    for i in all_objective_type:
        items.append({"objective_type_id": i.objective_type_id,
                      "objective_type": i.objective_type})
    response_object = jsonify({"data": items})
    return response_object, 200