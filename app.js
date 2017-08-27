var HeadName = document.getElementById("headName").innerHTML;
function Self(HeadName,Occupation,Add,Mail,Mob,Web){
    this.HeadName = HeadName;
    this.Occupation = Occupation;
    this.Add = Add;
    this.Mail = Mail;
    this.Mob = Mob;
    this.Web = Web;
}
var Name1 = new Self("Abdul Wahab","Graphic Designer","Flat no. D-75 AL-AZAM Karachi","waahab35@gmail.com",03342665897,"www.waazisol.com");
document.getElementById("headName").innerHTML = Name1.HeadName;
document.getElementById("occupation").innerHTML = Name1.Occupation;
document.getElementById("add").innerHTML = Name1.Add;
document.getElementById("mail").innerHTML = Name1.Mail;
document.getElementById("mob").innerHTML = Name1.Mob;
document.getElementById("web").innerHTML = Name1.Web;

function Qual(LatQualYear,LatQualAcad,LatQual,prevQualYear,prevQualAcad,prevQual){
    this.LatQualYear = LatQualYear;
    this.LatQualAcad = LatQualAcad;
    this.LatQual = LatQual;
    this.prevQualYear = prevQualYear;
    this.prevQualAcad = prevQualAcad;
    this.prevQual = prevQual;
}

var Qual1 = new Qual("2017","UBIT,Karachi University","Bachelors in Software Engineering",2014,"F.G. Science Degree College","Intermediate");
document.getElementById("latestQualYear").innerHTML = Qual1.LatQualYear;
document.getElementById("latestQualAcad").innerHTML = Qual1.LatQualAcad;
document.getElementById("latestQual").innerHTML = Qual1.LatQual;
document.getElementById("prevQualYear").innerHTML = Qual1.prevQualYear;
document.getElementById("prevQualAcad").innerHTML = Qual1.prevQualAcad;
document.getElementById("prevQual").innerHTML = Qual1.prevQual;

function Exp(LatExpYear,LatExpComp,LatExpPost,prevExpYear,prevExpComp,prevExpPost){
    this.LatExpYear = LatExpYear;
    this.LatExpComp = LatExpComp;
    this.LatExpPost = LatExpPost;
    this.prevExpYear = prevExpYear;
    this.prevExpComp = prevExpComp;
    this.prevExpPost = prevExpPost;
}

var Exp1 = new Exp("March 2015 - Continue","WaaziSol,Karachi","Senior Graphic Designer","May 2012 - April 2015","Inventive ARM,Karachi","Junior Graphic Designer")
document.getElementById("latestExpYear").innerHTML = Exp1.LatExpYear;
document.getElementById("latestExpComp").innerHTML = Exp1.LatExpComp
document.getElementById("latestExpPost").innerHTML = Exp1.LatExpPost;
document.getElementById("prevExpYear").innerHTML = Exp1.prevExpYear;
document.getElementById("prevExpComp").innerHTML = Exp1.prevExpComp;
document.getElementById("prevExpPost").innerHTML = Exp1.prevExpPost;


