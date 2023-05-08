const students = [
    {
        'id': 1,
        'name': "Sahil Sharma",
        'game' : ['Cricket', 'Football','Hockey'],
        'selected' : false
    },
    {
        'id': 2,
        'name': "Virat Kohli",
        'game' : ['Cricket', 'Football','Hockey'],
        'selected' : false
    },
    {
        'id': 3,
        'name': "Sachin Tendulkar",
        'game' : ['Cricket', 'Football','Hockey'],
        'selected' : false
    },
    {
        'id': 4,
        'name': "Rahul Dravid",
        'game' : ['Cricket', 'Kabaddi'],
        'selected' : false
    },
    {
        'id': 5,
        'name': "Hardik Pandey",
        'game' : ['Hockey','Kabaddi'],
        'selected' : false
    },
    {
        'id': 6,
        'name': "Yuvraj Singh",
        'game' : ['Football'],
        'selected' : false
    },
    {
        'id': 7,
        'name': "Sourav Ganguli",
        'game' : ['Hockey'],
        'selected' : false
    },
    {
        'id': 8,
        'name': "Ajinkya Rahane",
        'game' : ['Football','Hockey'],
        'selected' : false
    },
    {
        'id': 9,
        'name': "Rohit Sharma",
        'game' : ['Cricket'],
        'selected' : false
    },
    {
        'id': 10,
        'name': "Ms Dhoni",
        'game' : ['Cricket','Hockey'],
        'selected' : false
    },
    {
        'id': 11,
        'name': "R C Ashwin",
        'game' : ['Cricket', 'Football','Hockey','Kabaddi', 'Vollyball'],
        'selected' : false
    }
]

export default{
    getStudents(){
        return students;
    }
}