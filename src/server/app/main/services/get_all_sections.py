from app.main import db
from app.main.models.section import Section
from app.main.models.batch import Batch
from flask import jsonify


def get_all_sections(data):
    """[summary]

    Returns:
        [type]: [description]
    """
    batch_id = data['batch_id']
    query = db.session.query(Section, Batch).join(
        Batch, Section.batch_id == Batch.batch_id).filter_by(batch_id=batch_id)
    items = []
    for i in query:
        items.append({"section_id": i.Section.section_id,
                      "batch_name": i.Batch.batch_name, "section_name": i.Section.section_name})
    response_object = jsonify({"data": items})
    return response_object, 200