import { User } from './models/User';

const user = new User({ name: 'Koreno', age: 18 });

user.save();
