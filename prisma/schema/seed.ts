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
    console.log('create ');

    const gearsToCreate = [
    {
        brand: "yoyo",
        model: "latest2026",
        dailyRate: 1200,
        // location: "dhaka"
    },
    {
        brand: "yoyo2",
        model: "latest2023",
        dailyRate: 1200,
        // location: "dhaka"
    },
    {
        brand: "samsung",
        model: "galaxy-s26",
        dailyRate: 1500,
        // location: "dhaka"
    },
    {
        brand: "apple",
        model: "iphone-17",
        dailyRate: 2000,
        // location: "dhaka"
    },
    {
        brand: "sony",
        model: "alpha-a7iv",
        dailyRate: 2500,
        // location: "dhaka"
    },
    {
        brand: "canon",
        model: "eos-r6",
        dailyRate: 2200,
        // location: "dhaka"
    },
    {
        brand: "nikon",
        model: "z6-iii",
        dailyRate: 2300,
        // location: "dhaka"
    },
    {
        brand: "dji",
        model: "mini-4-pro",
        dailyRate: 1800,
        // location: "dhaka"
    },
    {
        brand: "gopro",
        model: "hero13-black",
        dailyRate: 1400,
        // location: "dhaka"
    },
    {
        brand: "lenovo",
        model: "thinkpad-x1",
        dailyRate: 1600,
        // location: "dhaka"
    },
    {
        brand: "asus",
        model: "rog-strix-g16",
        dailyRate: 1900,
        // location: "dhaka"
    },
    {
        brand: "logitech",
        model: "mx-master-4",
        dailyRate: 500,
        // location: "dhaka"
    }
];
}

main().then(process.exit(0))