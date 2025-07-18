import { promises as fs} from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { RegisterFormValues, LoginFormValues } from '@/app/components/types';

const filePath = path.join(process.cwd(), 'data', 'users.json');

export async function POST(request: Request) {
    const loginData: LoginFormValues = await request.json();

    const data = await fs.readFile(filePath, 'utf-8');
    const users: RegisterFormValues[] = JSON.parse(data);

    const user = users.find(u => u.email === loginData.email);

    if(!user){
        return NextResponse.json(
            {error: "User not found"},
            {status: 404}
        )
    }

    if(user.password !== loginData.password){
        return NextResponse.json(
            {error: "Invalid password"},
            {status: 401}
        )
    }

    return NextResponse.json(user, {status: 200});
}