

/* Create a table called DIVISIONS */
CREATE TABLE DIVISIONS(Id integer PRIMARY KEY, DivisionName text);

/* Create few records in this table */
INSERT INTO DIVISIONS VALUES(1,'Managment');
INSERT INTO DIVISIONS VALUES(2,'Sales');
INSERT INTO DIVISIONS VALUES(3,'HumanResource');
INSERT INTO DIVISIONS VALUES(4,'Development');
INSERT INTO DIVISIONS VALUES(5,'Engineering');


/* Display all the records from the table */
-- SELECT * FROM DIVISIONS;


/*------------------------------------------------------------------/

/* Create a table called NAMES */
CREATE TABLE NAMES(Id integer PRIMARY KEY, Name text, DivisionID integer, ManagerID interger, Salary interger,FOREIGN KEY (DivisionID)REFERENCES DIVISIONS(Id),FOREIGN KEY (ManagerID)REFERENCES MANAGER(Id));

/* Create few records in this table */
INSERT INTO NAMES VALUES(1,'Tom',1,4,180);
INSERT INTO NAMES VALUES(2,'Lucy',2,5,280);
INSERT INTO NAMES VALUES(3,'Frank',3,1,480);
INSERT INTO NAMES VALUES(4,'Jane',5,8,380);
INSERT INTO NAMES VALUES(5,'Robert',4,6,880);
INSERT INTO NAMES VALUES(6,'Lu',2,5,1180);
INSERT INTO NAMES VALUES(7,'ank',3,1,1580);
INSERT INTO NAMES VALUES(8,'Jae',5,2,1590);
INSERT INTO NAMES VALUES(9,'Lud',2,5,590);
INSERT INTO NAMES VALUES(10,'Frak',3,1,6980);
INSERT INTO NAMES VALUES(11,'Aane',5,9,210);

/* Display all the records from the table */
SELECT E.Name,DIVISIONS.DivisionName,(SELECT MGR.Name FROM NAMES MGR WHERE MGR.Id=E.ManagerID) AS Manager,E.Salary FROM NAMES E INNER JOIN DIVISIONS ON E.DivisionID=DIVISIONS.Id ORDER BY Salary DESC LIMIT 1 OFFSET 2;

