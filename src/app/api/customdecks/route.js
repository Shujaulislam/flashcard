import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const customDecks = await prisma.deck.findMany({
      where: {
        type: 'CUSTOM',
      },
      include: {
        cards: true,
      },
    });

    return new Response(JSON.stringify(customDecks), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching custom decks:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch custom decks' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
