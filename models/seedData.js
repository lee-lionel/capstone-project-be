const User = require('./user.models'); // assuming your model is in a file called User.model.js

const tutors = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    phoneNumber: '12345678',
    role: 'tutor',
    experience: 5,
    subjects: ['English', 'Mathematics'],
    levels: ['Pri 3', 'Pri 4'],
    location: 'Central',
    showProfile: true,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    password: 'password123',
    phoneNumber: '87654321',
    role: 'tutor',
    experience: 3,
    subjects: ['Science', 'Chinese'],
    levels: ['Pri 1', 'Pri 2'],
    location: 'North',
    showProfile: true,
  },
  {
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    password: 'password123',
    phoneNumber: '90123456',
    role: 'tutor',
    experience: 7,
    subjects: ['Mathematics', 'Physics'],
    levels: ['Sec 1', 'Sec 2'],
    location: 'East',
    showProfile: true,
  },
  {
    name: 'Alice Brown',
    email: 'alicebrown@example.com',
    password: 'password123',
    phoneNumber: '34567890',
    role: 'tutor',
    experience: 2,
    subjects: ['English', 'History'],
    levels: ['Pri 5', 'Pri 6'],
    location: 'West',
    showProfile: true,
  },
  {
    name: 'Mike Davis',
    email: 'mikedavis@example.com',
    password: 'password123',
    phoneNumber: '56789012',
    role: 'tutor',
    experience: 4,
    subjects: ['Science', 'Biology'],
    levels: ['Sec 3', 'Sec 4'],
    location: 'North-East',
    showProfile: true,
  },
  {
    name: 'Emily Chen',
    email: 'emilychen@example.com',
    password: 'password123',
    phoneNumber: '78901234',
    role: 'tutor',
    experience: 6,
    subjects: ['Mathematics', 'Chemistry'],
    levels: ['Pri 2', 'Pri 3'],
    location: 'Central',
    showProfile: true,
  },
  {
    name: 'David Lee',
    email: 'davidlee@example.com',
    password: 'password123',
    phoneNumber: '23456789',
    role: 'tutor',
    experience: 8,
    subjects: ['English', 'Geography'],
    levels: ['Sec 1', 'Sec 2'],
    location: 'East',
    showProfile: true,
  },
  {
    name: 'Sarah Taylor',
    email: 'sarahtaylor@example.com',
    password: 'password123',
    phoneNumber: '45678901',
    role: 'tutor',
    experience: 1,
    subjects: ['Science', 'Principle of Accounts'],
    levels: ['Pri 4', 'Pri 5'],
    location: 'West',
    showProfile: true,
  },
  {
    name: 'Kevin White',
    email: 'kevinwhite@example.com',
    password: 'password123',
    phoneNumber: '67890123',
    role: 'tutor',
    experience: 9,
    subjects: ['Mathematics', 'Physics'],
    levels: ['Sec 3', 'Sec 4'],
    location: 'North-East',
    showProfile: true,
  },
  {
    name: 'Lisa Nguyen',
    email: 'lisanguyen@example.com',
    password: 'password123',
    phoneNumber: '89012345',
    role: 'tutor',
    experience: 10,
    subjects: ['English', 'History'],
    levels: ['Pri 1', 'Pri 2'],
    location: 'Central',
    showProfile: true,
  },
];

async function seedTutors() {
  try {
   //await User.deleteMany({}); // clear the collection
    await User.insertMany(tutors);
    console.log('Tutors seeded successfully!');
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
    seedTutors
}

