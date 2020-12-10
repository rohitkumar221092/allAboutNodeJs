var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "yourpassword"
    database: "student"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    getTableData();
  });

  function getTableData(){
    //var sql = "update employee set salary = 1111 where id =2";
    //var sql = 'CALL GetCustomers(1)';
    //var sql = 'select * from employee';
    var sql = `call GetCustomers(1,@out);select @out as outv;`;
    //var sql = 'select parent.name, city.name as city from parent inner join city on parent.cityid = city.id ';
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });  
  }