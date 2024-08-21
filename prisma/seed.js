const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const decks = [
        {
            title: "abcd",
            cards: [
                { front: "What is a microcontroller?", back: "A microcontroller is a compact integrated circuit designed to govern specific operations in an embedded system, often including a processor, memory, and input/output peripherals." },
                { front: "What is an IoT protocol?", back: "IoT protocols are communication standards used in the Internet of Things to enable devices to exchange data and interact with each other, such as MQTT, CoAP, and HTTP." },
                { front: "What is the role of sensors in IoT?", back: "Sensors in IoT collect data from the physical environment, such as temperature, humidity, or motion, and send this information to other devices or systems for processing and analysis." },
                { front: "What is MQTT?", back: "MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol designed for efficient data exchange in IoT applications, especially in low-bandwidth and high-latency environments." },
                { front: "What is CoAP?", back: "CoAP (Constrained Application Protocol) is a protocol designed for simple and constrained devices in IoT, enabling communication over UDP and optimizing resource usage." }
            ]
        }

    ];

    for (const deck of decks) {
        await prisma.deck.create({
            data: {
                title: deck.title,
                cards: {
                    create: deck.cards.map(card => ({
                        front: card.front,
                        back: card.back,
                    })),
                },
            },
        });
    }
    console.log('Decks and cards have been inserted.');
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
