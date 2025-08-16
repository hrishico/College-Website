CREATE DATABASE IF NOT EXISTS college_event;
USE college_event;

create table admins_info (
    id int auto_increment primary key,
    name varchar(100),
    ph_no varchar(10),
    password varchar(15),
    email varchar(50)
);
ALTER TABLE admins_info
ADD CONSTRAINT unique_name UNIQUE (name),
ADD CONSTRAINT unique_email UNIQUE (email);
ALTER TABLE admins_info
MODIFY name VARCHAR(100) NOT NULL,
MODIFY email VARCHAR(50) NOT NULL;

CREATE TABLE event_info (
    event_id int auto_increment primary key,
    event_name varchar(50),
    event_description varchar(1000),
    event_fees int(4)
);

CREATE TABLE registered_students (
    stud_id int auto_increment primary key,
    first_name varchar(20),
    last_name varchar(20),
    student_email varchar(50),
    phone_no varchar(10),
    transaction_status varchar(10),
    reg_event varchar(50)
);

ALTER TABLE registered_students
MODIFY student_email VARCHAR(50) NOT NULL,
MODIFY phone_no VARCHAR(10) NOT NULL,
ADD CONSTRAINT unique_student_email UNIQUE (student_email),
ADD CONSTRAINT unique_phone_no UNIQUE (phone_no);


INSERT INTO admins_info (name, ph_no, password, email)
VALUES ('Sarvesh Navale', '9763772464', 'password#123', 'sarveshnavale@gmail.com'),
('Sarvesh Morgoankar', '9828742212', 'password#123', 'sarveshmorgoankar@gmail.com'),
('Shreyash Khot', '9818742212', 'password#123', 'shreyashkhot@gmail.com'),
('Sidhesh Mohite', '9818742212', 'password#123', 'sm@gmail.com'),
('Hrishikesh Patil', '9896442212', 'password#123', 'hrishi@gmail.com');

ALTER TABLE registered_students
ADD COLUMN reg_category VARCHAR(50) AFTER reg_event;

ALTER TABLE registered_students
DROP COLUMN reg_category;

select * from admins_info;

/*error might occur in below line because iam directly using truncate here*/
/* if error related to index out of bound, restart the  device (for truncate)*/

truncate table college_event.registered_students;
