## **Teacher**

#### Register

POST URL- `/teachers/register`

PARAMS

```json
{
    "action": "register_new_teacher",
    "teacher_name": "STRING",
	"teacher_email": "STRING",
	"teacher_mobile": "INTEGER",
	"teacher_password": "STRING",
    "teacher_gender": "STRING",
    "department": "STRING",
    "centre_location": "STRING",
    "teacher_profile_pic": "STRING"
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Registration Successful"
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Login**

POST URL - `/teachers/login`

PARAMS

```json
{
    "action": "login_to_teacher",
	"teacher_email": "STRING",
    "teacher_password": "STRING"
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
  "comment": "Login Successful",
  "token": "<token>"
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Get Student Details**

GET URL - `/teachers/get_teacher_details`

```json
{
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer <token>",
    ...
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Get Teacher Details Successfully",
    "data": {
        "teacher_id": "INTEGER",
        "teacher_name": "STRING",
        "teacher_email": "STRING",
        ...
    }
}
```

Failure(Status Code - `` )

```json
{
  "comment": 
}
```



#### Add Profile Picture

POST URL - `/teachers/add_profile_pic`

PARAMS

```json
{
    "action": "add_profile_pic",
    "teacher_id": "INTEGER",
    "teacher_profile_pic": "STRING"
}
```

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Add Profile Pic Successfully"
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Create Quiz**

POST URL - `/teacher/create_quiz`

PARAMS

```json
{
    "action": "create_a_quiz",
    "teacher_id": "INTEGER",
    "quiz_name": "STRING",
    "test_type_id": "INTEGER",
    "student_section_id": "INTEGER",
    "student_batch_id": "INTEGER",
    "time_for_full_test": "INTEGER",
    "publish_test": "BOOLEAN"
}
```

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Quiz Added Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Add Question** to Objective Quiz

POST URL - `/teachers/add_question_objective`

PARAMS

```json
{
    "action": "add_question_objective",
    "teacher_id": "INTEGER",
    "quiz_test_id": "INTEGER",
    "objective_question_type_id": "INTEGER",
    "question": "STRING",
    "option_1": "STRING",  
    "option_2": "STRING",
    "option_3": "STRING",
    "option_4": "STRING",
    "answer": "STRING",
    "marks": "INTEGER",
    "time_per_question": "INTEGER"  
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Question Added Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Add Question** to Subjective Quiz

POST URL - `/teachers/add_question_subjective`

PARAMS

```json
{
    "action": "add_question_subjective",
    "teacher_id": "INTEGER",
    "quiz_test_id": "INTEGER",
    "question": "STRING",
    "answer": "STRING",
    "marks": "INTEGER",
    "time_per_question": "INTEGER"  
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Question Added Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Publish the Quiz**

POST URL - `/teachers/publish_quiz`

PARAMS

```json
{
    "action": "publish_the_quiz",
    "quiz_test_id" : "INTEGER",
    "publish_test":"BOOLEAN",
    "teacher_id": "INTEGER"
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Publish Quiz Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### Unpublish the Quiz

POST URL - `/teachers/publish_quiz`

PARAMS

```json
{
    "action": "unpublish_the_quiz",
    "quiz_test_id" : "INTEGER",
    "publish_test":"BOOLEAN",
    "teacher_id": "INTEGER"
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Unpublish Quiz Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### Delete the Quiz

DELETE URL - `/teachers/delete_quiz`

PARAMS

```json
{
    "action": "delete_the_quiz",
    "quiz_test_id" : "INTEGER",
    "teacher_id": "INTEGER"
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Delete Quiz Successfully"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```

