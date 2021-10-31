import bcrypt from 'bcryptjs';

const users = [
    {
        name:'admin',
        email:'lstudys@163.com',
        password:bcrypt.hashSync('lyh',10),
        isAdmin:true
    },
    {
        name:'lstudys',
        email:'1925060001@henu.edu.cn',
        password:bcrypt.hashSync('lyh',10),
        isAdmin:false
    },
    {
        name:'lxx',
        email:'192506001@henu.edu.cn',
        password:bcrypt.hashSync('lyh',10),
        isAdmin:false
    },
];

export default users;