type user = 
{
    id: number;
    name: {
        firstName : string;
        lastName: string
    },
    gender: 'Male'|'Female'
} 

const user1 : user = {
    id: 111,
    name: {
        firstName: 'Asad',
        lastName: 'Zaman'
        
    }
    gender: 'Male'
}

const user2 = {
    name: {
        firstName: 'Asad',
        lastName: 33
    }
}
