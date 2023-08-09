import { NextResponse } from 'next/server'
import { groq } from 'next-sanity';
import { client } from '../../../sanity/lib/client'
// import skills from '../../../typings'

const ExecuteQuery = async () => {
  const query = groq`
    *[_type == "skills"]
  `;

  const skills = await client.fetch({query});

  return skills;
};

export async function GET(request: Request) {
  const skills = await ExecuteQuery();
  return NextResponse.json(skills)
}