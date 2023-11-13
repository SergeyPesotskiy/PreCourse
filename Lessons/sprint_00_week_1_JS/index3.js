let student = {
    info: {
        firstName: 'Ivan',
        lastName: 'Ivanov'
    }, address: {
        country: 'France',
        city: 'Paris',
    }
};

document.write('<b>firstName: </b>', student.info.firstName);
document.write('<br>');
document.write('<b>lastName: </b>', student.info.lastName);
document.write('<hr>');
document.write('<b>country: </b>', student.address.country, '<b>  city: </b>', student.address.city);
student.info.firstName = 'Petro';
document.write('<br>', '<hr>');
// document.write('<hr>');
document.write('<b>New firstName: </b>', student.info.firstName);
