import { skills } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export interface HanderProps {
  req: NextApiRequest,
  res: NextApiResponse<skills|skills[]>,
}

const prisma = new PrismaClient();

const Handler = async (
  req: NextApiRequest,
  res: NextApiResponse<skills|skills[]>,
) => {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      const fetchSkills = await prisma.skills.findMany({
        orderBy: [
          { xorder: 'asc' },
          { id: 'asc' }
        ]
      });
      res.status(200).json(fetchSkills);
      break;
    case 'POST':
      const createSkill = await prisma.skills.create({
        data: {
        }
      });
      res.status(200).json(createSkill);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default Handler;