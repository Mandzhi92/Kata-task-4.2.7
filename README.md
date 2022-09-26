https://mandzhi92.github.io/Kata-task-4.2.7/

__________________________________________________________________________

<---------------------------------------------------->
KATA-TASK 4.3.9<------------------------------------------------------------------------>

запрос регистрации: {
                      "user": {
                        "username": "Mihael",
                        "email": "pma@mail.ru",
                        "password": "1234"
                      }
                    }

ответ {
          "user": {
              "username": "mihael",
              "email": "pma@mail.ru",
              "token":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzFhMTFmM2NmNzA1MWIwMDgyYTg2YiIsInVzZXJuYW1lIjoibWloYWVsIiwiZXhwIjoxNjY5MzgwODk1LCJpYXQiOjE2NjQxOTY4OTV9.ZTLroZwUlCQehkZQwbfeFQ59Bs7xPVIuu_B3fd3I5lA"
          }
      }
__________________________________________________________________________    
    
запрос аутентификации: {
  "user": {
    "email": "pma@mail.ru",
    "password": "1234"
  }
}

ответ: {
    "user": {
        "username": "mihael",
        "email": "pma@mail.ru",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzFhMTFmM2NmNzA1MWIwMDgyYTg2YiIsInVzZXJuYW1lIjoibWloYWVsIiwiZXhwIjoxNjY5Mzg1MTAxLCJpYXQiOjE2NjQyMDExMDF9.ECsLiuoiBRtSJUP_jLUnAh8qHDIKJW9siLA9fH3xj_A"
    }
}
___________________________________________________________________________
Запрос Get current user:
curl --location --request GET 'https://blog.kata.academy/api/user' \
--header 'Authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzFhMTFmM2NmNzA1MWIwMDgyYTg2YiIsInVzZXJuYW1lIjoibWloYWVsIiwiZXhwIjoxNjY5Mzg1MTAxLCJpYXQiOjE2NjQyMDExMDF9.ECsLiuoiBRtSJUP_jLUnAh8qHDIKJW9siLA9fH3xj_A' \
--data-raw ''

Ответ Get current user:
{
    "user": {
        "username": "mihael",
        "email": "pma@mail.ru",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzFhMTFmM2NmNzA1MWIwMDgyYTg2YiIsInVzZXJuYW1lIjoibWloYWVsIiwiZXhwIjoxNjY5Mzg1MzA1LCJpYXQiOjE2NjQyMDEzMDV9.I-FS1jMYPfAoQT9HTgehg95z98F0cUWasbW6neobPBc"
    }
}
