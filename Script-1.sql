CREATE SCHEMA public AUTHORIZATION postgres;

CREATE SCHEMA prac1 AUTHORIZATION demo;

drop schema prac1;


create table employee_info (id varchar(20), emp_name varchar(20),  emp_mobileNo varchar(20));

drop table employee_info;

insert into employee_info values('2345','amol'),('4567','rupali'),('5678','aaru');

select * from employee_info;


insert into employee_info values('5643','atul'),('9076','ashwini'),('3214','akshay');

update employee_info 
set id = int

ALTER TABLE employee_info 
ALTER COLUMN id TYPE INT
USING id::integer;

alter table employee_info 
add column address varchar;

alter table employee_info 
drop column address;

alter table employee_info 
add column college_name varchar;

alter table employee_info 
drop column college_name;

delete from employee_info where id = 3214;



create table student(
stud_name text primary key,
marks integer,
roll_no integer,
address text
);

select * from student;

alter table student 
drop constraint student_pkey;


insert into student values('amol','20','1'),('rupali','19','2');