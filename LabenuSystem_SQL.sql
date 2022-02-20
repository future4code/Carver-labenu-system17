CREATE TABLE labesystem_class(
id VARCHAR(255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL,
module INT DEFAULT 0
);

CREATE TABLE labesystem_student(
id VARCHAR(255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
birth_date DATE NOT NULL,
class_id VARCHAR(255) NOT NULL,
FOREIGN KEY (class_id) REFERENCES labesystem_class(id)
);

CREATE TABLE labesystem_professor(
id VARCHAR(255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
birth_date DATE NOT NULL,
class_id VARCHAR(255) NOT NULL,
FOREIGN KEY (class_id) REFERENCES labesystem_class(id)
);

CREATE TABLE labesystem_hobby(
id VARCHAR(255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE labesystem_student_hobby(
id VARCHAR(255) PRIMARY KEY,
student_id  VARCHAR(255) NOT NULL,
FOREIGN KEY (student_id) REFERENCES labesystem_student(id),
hobby_id  VARCHAR(255) NOT NULL,
FOREIGN KEY (hobby_id ) REFERENCES labesystem_hobby(id)
);

CREATE TABLE labesystem_speciality(
id VARCHAR(255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE labesystem_professor_speciality(
id VARCHAR(255) PRIMARY KEY,
professor_id  VARCHAR(255) NOT NULL,
FOREIGN KEY (professor_id) REFERENCES labesystem_professor(id),
speciality_id  VARCHAR(255) NOT NULL,
FOREIGN KEY (speciality_id) REFERENCES labesystem_speciality(id)
);




