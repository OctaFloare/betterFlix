import { promises as fs} from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { RegisterFormValues } from '@/app/components/types';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
    const newUser: RegisterFormValues = await request.json();

    const data  = await fs.readFile(filePath, 'utf-8');
    const users: RegisterFormValues[] = JSON.parse(data);

    const userExists = users.find(user => user.email === newUser.email);
    if(userExists){
        return NextResponse.json(
            {error: "Email already registerd"},
            {status: 400}
        )
    }

    users.push(newUser);

    await fs.writeFile(filePath, JSON.stringify(users, null, 2))
    return NextResponse.json(newUser, {status: 201});
}