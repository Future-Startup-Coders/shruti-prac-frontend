let students = {
    1 : {
        rollno :  1,
        name : 'hii',
        dob : '22/09/2001',
        mobile : '99803904939',
        mail : 'qwert@gmail.com'
    },
    2 : {
        rollno :  2,
        name : 'hey',
        dob : '22/09/2002',
        mobile : '99803904939',
        mail : 'qwert@gmail.com'
    },
    3 : {
        rollno :  3,
        name : 'jay',
        dob : '22/09/2003',
        mobile : '99803904939',
        mail : 'qwert@gmail.com'
    },
    4 : {
        rollno :  4,
        name : 'dee',
        dob : '22/09/2002',
        mobile : '99803904939',
        mail : 'qwert@gmail.com'
    },
}
for(key in students){
    console.log(students[key].name,students[key].rollno,students[key].dob)
}
