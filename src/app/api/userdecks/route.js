import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET(request) {
  const { userId } = getAuth(request);

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const decks = await prisma.deck.findMany({
    where: {
      userId: userId,
    },
    include: {
      cards: true,
    },
  });

  return new Response(JSON.stringify(decks), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const { userId } = getAuth(request);

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { title, cards } = await request.json();

  const deck = await prisma.deck.create({
    data: {
      title,
      userId,
      cards: {
        create: cards.map(card => ({
          front: card.front,
          back: card.back,
        })),
      },
    },
  });

  return new Response(JSON.stringify(deck), {
    headers: { 'Content-Type': 'application/json' },
  });
}
