import bcrypt from "bcryptjs"
import prisma from "../../src/lib/prisma";
import { email } from "zod";
import { BookingStatus, PaymentStatus, Role } from "../generated/prisma/enums";
import { randomUUID } from "crypto";

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
        ownerId : owner1.id
        // location: "dhaka"
    },
    {
        brand: "yoyo2",
        model: "latest2023",
        ownerId : owner1.id,
        dailyRate: 1200,
        // location: "dhaka"
    },
    {
        brand: "samsung",
        model: "galaxy-s26",
        ownerId : owner2.id,
        
        dailyRate: 1500,
        // location: "dhaka"
    },
    {
        brand: "apple",
        model: "iphone-17",
        ownerId : owner2.id,
        dailyRate: 2000,
        // location: "dhaka"
    },
    {
        brand: "sony",
        model: "alpha-a7iv",
        ownerId : owner3.id,
        dailyRate: 2500,
        // location: "dhaka"
    },
    {
        brand: "canon",
        model: "eos-r6",
        ownerId : owner3.id,
        dailyRate: 2200,
        // location: "dhaka"
    },
    {
        brand: "nikon",
        model: "z6-iii",
        ownerId : owner4.id,
        dailyRate: 2300,
        // location: "dhaka"
    },
    {
        brand: "dji",
        model: "mini-4-pro",
        ownerId : owner5.id,
        dailyRate: 1800,
        // location: "dhaka"
    },
    {
        brand: "gopro",
        model: "hero13-black",
        ownerId : owner5.id,
        dailyRate: 1400,
        // location: "dhaka"
    },
    {
        brand: "lenovo",
        model: "thinkpad-x1",
        ownerId : owner2.id,
        dailyRate: 1600,
        // location: "dhaka"
    },
    {
        brand: "asus",
        model: "rog-strix-g16",
        ownerId : owner2.id,
        dailyRate: 1900,
        // location: "dhaka"
    },
    {
        brand: "logitech",
        model: "mx-master-4",
        ownerId : owner2.id,
        dailyRate: 500,
        // location: "dhaka"
    }
];

const gears = []

for(const geardata of gearsToCreate){
    const gear = await prisma.gears.create({ data: geardata})
    gears.push(gear)
}


console.log(`added ${gears.length} cars`);

const bookingsToCreate = [
    {
        gear: gears[0],
        renterId: owner4.id,
        startDate: new Date("2026-08-11"),
        endDate: new Date("2026-08-12"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[1],
        renterId: owner3.id,
        startDate: new Date("2026-08-13"),
        endDate: new Date("2026-08-15"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[2],
        renterId: owner2.id,
        startDate: new Date("2026-08-10"),
        endDate: new Date("2026-08-12"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[3],
        renterId: owner4.id,
        startDate: new Date("2026-08-16"),
        endDate: new Date("2026-08-18"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[4],
        renterId: owner1.id,
        startDate: new Date("2026-08-17"),
        endDate: new Date("2026-08-20"),
        bookingStatus: BookingStatus.PENDING,
        paymentStatus: PaymentStatus.PENDING,
    },
    {
        gear: gears[5],
        renterId: owner3.id,
        startDate: new Date("2026-08-05"),
        endDate: new Date("2026-08-07"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[6],
        renterId: owner2.id,
        startDate: new Date("2026-08-19"),
        endDate: new Date("2026-08-21"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[7],
        renterId: owner4.id,
        startDate: new Date("2026-08-22"),
        endDate: new Date("2026-08-24"),
        bookingStatus: BookingStatus.PENDING,
        paymentStatus: PaymentStatus.PENDING,
    },
    {
        gear: gears[8],
        renterId: owner1.id,
        startDate: new Date("2026-08-08"),
        endDate: new Date("2026-08-09"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[9],
        renterId: owner3.id,
        startDate: new Date("2026-08-25"),
        endDate: new Date("2026-08-27"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[10],
        renterId: owner2.id,
        startDate: new Date("2026-08-14"),
        endDate: new Date("2026-08-16"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
    {
        gear: gears[11],
        renterId: owner4.id,
        startDate: new Date("2026-08-28"),
        endDate: new Date("2026-08-30"),
        bookingStatus: BookingStatus.CONFIRMED,
        paymentStatus: PaymentStatus.CONFIRMED,
    },
];

for (const b of bookingsToCreate){
    if(b.gear){
        const totalPrice = 10*b.gear.dailyRate 
        const booking = await prisma.booking.create({
            data: {
                gearId: b.gear.id,
                renterId: b.renterId,
                startDate: b.startDate,
                endDate: b.endDate,
                totalPrice,
                status: b.bookingStatus
            }
        })

        if(b.paymentStatus !== 'PENDING'){
            await prisma.payment.create({
            data: {
                bookingId: booking.id,
                amount: totalPrice,
                status: b.paymentStatus,
                transactionId: randomUUID()
            }
        })
        }
    }
}
}

main().then(process.exit(0))