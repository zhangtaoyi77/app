"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = express_1["default"]();
app.use(body_parser_1["default"].json());
var Course = /** @class */ (function () {
    function Course(id, courseName, images, task, person) {
        this.id = id;
        this.courseName = courseName;
        this.images = images;
        this.task = task;
        this.person = person;
    }
    return Course;
}());
exports.Course = Course;
var courses = [
    new Course(1, '2016级javascript', "http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130", 10, 90),
    new Course(2, '2016级混合应用', "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130", 23, 100),
    new Course(3, '2016级测试', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 15, 97),
    new Course(4, '2016级计算机导论', "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130", 30, 99),
    new Course(5, '2016级HTML5', "http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130", 35, 88),
    new Course(6, '2017级测试', "http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130", 25, 86),
    new Course(7, '2018级信息素养实践', "http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130", 17, 98),
    new Course(8, '2016级操作系统', "http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130", 28, 95),
    new Course(9, '2017级网络原理', "http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130", 35, 88),
    new Course(10, '2017级C语言', "(http://usercontent.edu2act.cn/media/team/18-03-05/5AmFY6EtdvJUXsJKVAPXqK.jpg?imageView2/1/w/230/h/130", 35, 88),
    new Course(11, '2017级计算机导论', "http://usercontent.edu2act.cn/media/team/17-10-19/25jkon9fLemyViTidcDHDW.jpg?imageView2/1/w/230/h/130", 35, 88),
    new Course(12, '2015级软件工程过程', "http://usercontent.edu2act.cn/media/team/17-09-15/PqCSwDGa5A7WetVb5LDe6m.jpg?imageView2/1/w/230/h/130", 35, 88),
];
// app.get('/api',(req,res)=>{
//     res.json(courses);
// });
app.get('/api/courses', function (req, res) {
    res.json(courses);
});
app.get('/api/courses/:id', function (req, res) {
    res.json(courses.find(function (ele) { return ele.id == req.params.id; }));
});
app.post('/api', function (req, res) {
    console.log(req.body);
    res.json(courses);
});
app.listen(8000);
