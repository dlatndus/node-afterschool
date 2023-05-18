-- db생성
create database mirimdb;
use mirimdb;

drop table if exists todotbl;

-- table 생성 (todotbl)
create table todotbl(
	id int auto_increment primary key,
    contents varchar(20),
    yesno varchar(3));
    
    insert into todotbl values(null, '영화보기', 'no');
    insert into todotbl values(null, '자기', 'no');
    insert into todotbl values(null, '놀기', 'no');
    insert into todotbl values(null, '게임하기', 'no');
    
select * from todotbl;

-- mysql v5필요없고 v8일때 꼭 필요함 웹에서 쓸라고 하는듯
alter user 'root'@'localhost' identified with mysql_native_password by '1234';
    