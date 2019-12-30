## **Student**

#### Register

POST URL- `/students/register`

PARAMS

```json
{
    "action": "register_new_student",
    "student_name": "STRING",
	"student_email": "STRING",
	"student_mobile": "INTEGER",
	"student_password": "STRING",
    "student_gender": "STRING",
    "batch_id": "INTEGER",
    "section_id":"INTEGER",
    "student_profile_pic": "STRING"
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

POST URL - `/students/login`

PARAMS

```json
{
    "action": "login_to_student",
	"student_email": "STRING",
    "student_password": "STRING"
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

GET URL - `/students/get_student_details`

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
    "comment": "Get Student Details Successfully",
    "data": {
        "student_id": "INTEGER",
        "student_name": "STRING",
        "student_email": "STRING",
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

POST URL - `/students/add_profile_pic`

PARAMS

```json
{
    "action": "add_profile_pic",
    "student_id": "INTEGER",
    "student_profile_pic": "STRING"
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



#### **Get all Quiz Available**

POST URL - `/students/get_available_quiz`

PARAMS

```json
{
    "action": "get_available_quiz",
    "student_batch_id": "INTEGER",
    "student_section_id": "INTEGER",
    "quiz_test_id": "INTEGER",
    "publish_test": "BOOLEAN"
}
```

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Get all quiz successfully",
    "data":[{
        	"test_id": "INTEGER",
        	"test_name": "STRING",
        	"test_type_id": "INTEGER",
            "student_batch_id": "INTEGER",
            "student_section_id": "INTEGER",
            "quiz_test_id": "INTEGER",
            "publish_test": "BOOLEAN"
    },
    {},{},...
    ]
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Response to Objective Question**

POST URL - `/students/response_to_objective`

PARAMS

```json
{
    "action": "response_to_objective_question",
    "student_id": "INTEGER",
    "question_id": "INTEGER",
    "response": "STRING",
    "result": "STRING",
    "quiz_test_id": "INTEGER"
}
```

​	

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Response Added"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### Response to Subjective Question

POST URL - `/students/reponse_to_subjective`

PARAMS 

```json
{
    "action": "response_to_subjective_question",
    "student_id": "INTEGER",
    "question_id": "INTEGER",
    "response": "STRING",
    "quiz_test_id": "INTEGER"
}
```

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Response Added"   
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Get Profile**

GET URL -`/students/profile/<student_id>`

Success (Status Code - `200`)

```json
{
    "comment": "Get Profile Details Successfully",
	"data": {
        "student_id": "INTEGER",
        "student_name": "STRING",
        "student_email": "STRING",
		...
    }
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### **Get Particular Quiz Test Details**

GET URL -`/students/quiz_details/<quiz_test_id>`

RESPONSE 

Success (Status Code - `200`)

```json
{
    "comment": "Get Quiz Details Successfully",
	"data": [{
        "student_id": "INTEGER",
        "submission_id": "INTEGER",
        "quiz_test_id" : "INTEGER",
        "quiz_test_name": "STRING",
        "question_id" : "INTEGER",
        "response": "STRING",
        "result": "STRING"
    	},
    {},{} ...
   ]
}
```



Failure (Status Code - ``)

```json
{
  "comment": 
}
```



