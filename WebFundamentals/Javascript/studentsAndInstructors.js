function studentsAndInstructors(listOfNames) {
    for (var i = 0; i < listOfNames.length; i++) {
        console.log(listOfNames[i].first_name + " " + listOfNames[i].last_name);
    }
}



var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

studentsAndInstructors(students);