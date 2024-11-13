import { allBlogs } from "content-collections";
import { BlogCard } from "./atom/BlogCard";
import { Grid, GridItem } from "@yamada-ui/react"


export const Blogs = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="lg">
      {allBlogs.map((post) => (
          <GridItem key={post._meta.path} w="full" h="4xs" rounded="md" >
            <BlogCard title={post.title} summary={post.summary} year={post.year} day={post.day} month={post.month} url={post._meta.path} />
          </GridItem>
      ))}
    </Grid>
  );
}