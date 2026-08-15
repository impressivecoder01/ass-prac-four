import bcrypt from "bcryptjs"
import prisma from "../../src/lib/prisma";
import { email } from "zod";
import { Role } from "../generated/prisma/enums";

async function main() {
    const password = await bcrypt.hash('password123', 10);

    const [owner1,owner2,owner3,owner4,owner5] = await Promise.all([
        prisma.user.create({
            data: {
            name:"sp",
            email:"sp@gmail.com",
            password,
            role: Role.PROVIDER,
        }
        }),
        prisma.user.create({
            data: {
            name:"sp2",
            email:"sp2@gmail.com",
            password,
            role: Role.PROVIDER,
        }
        }),
        prisma.user.create({
            data: {
            name:"sp3",
            email:"sp3@gmail.com",
            password,
            role: Role.CUSTOMER,
        }
        }),
        prisma.user.create({
            data: {
            name:"sp4",
            email:"sp4@gmail.com",
            password,
            role: Role.CUSTOMER,
        }
        }),
        prisma.user.create({
            data: {
            name:"sp5",
            email:"sp5@gmail.com",
            password,
            role: Role.ADMIN,
        }
        }),

    ])
    
}

main().then(process.exit(0))