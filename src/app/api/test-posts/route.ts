import { NextResponse } from 'next/server';
import { getAllPosts } from '@/data/posts';
import { PostRegistry } from '@/components/blog/PostWrapper';

export async function GET() {
  const posts = getAllPosts();
  
  return NextResponse.json({
    registryCount: Object.keys(PostRegistry).length,
    registryKeys: Object.keys(PostRegistry),
    postsCount: posts.length,
    posts: posts.map(p => ({ slug: p.slug, title: p.title }))
  });
}
