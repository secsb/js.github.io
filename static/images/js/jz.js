function test()
{
var num=document.getElementById("in").value;
var type=document.getElementById("title");
var tynum,to;
for(var i=0;i<type.length;i++)
{ 
if(type[i].selected)
tynum=parseInt(type[i].value);
}
switch(tynum)
{
case(1):to=parseInt(num).toString(2);break;
case(2):to=parseInt(num).toString(8);break;
case(3):to=parseInt(num).toString(16);break;
case(4):to=parseInt(num,2);break;
case(5):to=parseInt(num,8);break;
case(6):to=parseInt(num,16);break;
case(7):to=parseInt(num,2).toString(8);break; 
case(8):to=parseInt(num,8).toString(2);break; 
case(9):to=parseInt(num,2).toString(16);break; 
case(10):to=parseInt(num,16).toString(2);break; 
case(11):to=parseInt(num,8).toString(16);break; 
case(12):to=parseInt(num,16).toString(8);break; 
}
if(isNaN(to))
to="输入非法字符了哦" 
document.getElementById("out").value=to;

}