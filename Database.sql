CREATE DATABASE college_event;
USE college_event;
create table admins_info (
	id int auto_increment primary key,
    name varchar(100),
    ph_no int(10),
    password varchar(15),
    email varchar(10)
);
ALTER TABLE admins_info
ADD COLUMN email varchar(20);

create table event_info(
	event_id int auto_increment primary key,
    event_name varchar(15),
    event_description varchar(1000),
    event_fees int(4)
);
create table registered_students(
	stud_it int auto_increment primary key,
	first_name varchar(10),
    last_name varchar(10),
    student_email varchar(10),
    phone_no varchar(10),
    transaction_status varchar(3),
    reg_event varchar(15)
    
    
)
