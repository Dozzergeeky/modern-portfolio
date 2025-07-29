import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), 'articles');

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Posts directory does not exist: ${postsDirectory}`);
    return [];
  }
  
  try {
    return fs.readdirSync(postsDirectory)
      .filter((name) => {
        // Only include .md files, exclude backup files, temp files, and hidden files
        return name.endsWith('.md') && 
               !name.includes('.backup') && 
               !name.includes('.tmp') &&
               !name.startsWith('.') && 
               !name.includes('~') &&
               !name.endsWith('.bak');
      })
      .map((name) => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error(`Error reading posts directory: ${error.message}`);
    return [];
  }
}

export function getPostBySlug(slug, fields = []) {
  if (!slug) {
    console.warn('getPostBySlug called with empty slug');
    return null;
  }

  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  
  // Check if file exists before trying to read it
  if (!fs.existsSync(fullPath)) {
    console.warn(`Post file not found: ${fullPath}`);
    return null;
  }
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate that we have required frontmatter
    if (!data.title) {
      console.warn(`Post ${slug} missing required title in frontmatter`);
    }

    const post = {
      slug: realSlug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      image: data.image || '',
      tags: data.tags || [],
      skip: data.skip || false,
      content,
      ...data
    };

    // If fields are specified, return only those fields
    if (fields.length > 0) {
      const filteredPost = {};
      fields.forEach(field => {
        if (post[field] !== undefined) {
          filteredPost[field] = post[field];
        }
      });
      return filteredPost;
    }

    return post;
  } catch (error) {
    console.error(`Error reading post file ${fullPath}:`, error.message);
    return null;
  }
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  
  if (slugs.length === 0) {
    console.warn('No posts found in articles directory');
    return [];
  }
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter(Boolean) // Remove any null results
    .sort((post1, post2) => {
      // Sort by date, newest first
      if (post1.date && post2.date) {
        return new Date(post2.date) - new Date(post1.date);
      }
      return 0;
    });
  
  console.log(`Loaded ${posts.length} posts successfully`);
  return posts;
}

// Helper function to get post count
export function getPostCount() {
  return getPostSlugs().length;
}

// Helper function to get posts by tag
export function getPostsByTag(tag) {
  return getAllPosts().filter(post => 
    post.meta.tags && post.meta.tags.includes(tag)
  );
}
