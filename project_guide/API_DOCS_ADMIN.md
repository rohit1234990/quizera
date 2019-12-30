## **Admin**

#### **Register**

POST URL- `/admin/register`

PARAMS

```json
{
    "action": "register_new_admin",
    "admin_name": "STRING",
	"admin_email": "STRING",
	"admin_mobile": "INTEGER",
	"admin_password": "STRING",
    "admin_profile_pic": "STRING"
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



#### Login

POST URL - `/admin/login`

PARAMS	

```json
{
    "action": "login_to_admin",
	"admin_email": "STRING",
    "admin_password": "STRING"
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



#### Get Admin Details

GET URL - `/admin/get_admin_details`

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
    "comment": "Get Admin Details Successfully",
    "data": {
        "admin_id": "INTEGER",
        "admin_name": "STRING",
        "admin_email": "STRING",
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



#### **Add Batch**/Class

POST URL - `/admin/add_batch`

PARAMS

```json
{
    "action": "add_new_batch",
    "batch_name": "STRING"   
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Added Successfully"
}
```

Failure (Status Code -``)

```json
{
  "comment": 
}
```



#### Delete Batch/Class

DELETE URL - `/admin/delete_batch`

PARAMS

```json
{
    "action": "delete_a_batch",
    "batch_id": "INTEGER"
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Delete Successfully"
}
```

Failure(Status Code - ``)

```json
{
  "comment": 
}
```



#### Add Section

POST URL -`/admin/add_section`

PARAMS

```json
{
    "action": "add_new_section",
    "section_name": "STRING",
    "batch_id": "INTEGER"
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment":"Added Successfully"
}
```

Failure (Status Code -``)

```json
{
  "comment": 
}
```



#### **Delete Section**

DELETE URL - `/admin/delete_section`

PARAMS

```json
{
    "action": "delete a section",
    "section_id": "INTEGER"
}
```

Success (Status Code - `200`)

```json
{
    "comment": "Delete section Successfully"
}
```

Failure (Status Code - ``)

```json
{
  "comment": 
}
```



#### Add a Student to Section

POST URL - `/admin/add_to_section`

PARAMS 

```json
{
    "action": "add_student_to_section",
    "student_id": "INTEGER",
	"section_id": "INTEGER",
    "admin_id": "INTEGER"
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Added Successfully"
}
```

Failure (Status Code: ``)

```json
{
  "comment": 
}
```



#### Remove Student From Section

PUT URL - `/admin/remove_from_section`

PARAMS

```json
{
    "action": "remove_student_from_section",
	"student_id": "INTEGER"
}
```

RESPONSE

Success (Status Code: `200`)

```json
{
    "comment": "Remove Successfully"
}
```

Failure (Status Code: ``)

```json
{
    "comment": 
}
```



#### Add Test Type

POST URL -`/admin/add_test_type`

PARAMS

```json
{
    "action": "add_test_type",
    "test_type": "STRING"
}
```

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Added Successfully"
}
```

Failure (Status Code - ``)

```json
{
    "comment": 
}
```



#### Get Batches

GET URL - `/admin/all_batches`

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Get All Batches Details Successfully",
	"data": [{
        "batch_id": "INTEGER",
        "batch_name": "STRING"
        },
       {},{},...
      ]
}
```

Failure (Status Code: `` )

```json
{
    "comment": 
}
```



#### Get Sections

GET URL - `/admin/all_sections`

RESPONSE

Success (Status Code - `200`)

```json
{
    "comment": "Get All Sections Details Successfully",
	"data": [{
        "section_id": "INTEGER",
        "section_name": "STRING"
        },
       {},{},...
      ]
}
```

Failure(Status Code: ``)

```json
{
    "comment": 
}
```



#### Get Users

GET URL - `/admin/all_students`

Success (Status Code - `200`)

```json
{
    "comment": "Get All Users Details Successfully",
	"data": [{
        "student_id": "INTEGER",
        "student_name": "STRING",
        "student_email": "STRING",
        "student_profile_pic": "STRING",
        "batch_id": "INTEGER",
        "section_id": "INTEGER",
        "gender": "STRING",
        "mobile": "INTEGER",
        "password_hash": "STRING",
        "password_salt": "STRING",
        "batch_name": "STRING"
        },
       {},{} ...
      ]
}
```

Failure(Status Code:``)

```json
{
    "comment":
}
```
