import { allContents } from "content-collections";
import { ContentCard } from "./atom/ContentCard";
import { Grid, GridItem } from "@yamada-ui/react"


export const Contents = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="lg">
      {allContents.map((post) => (
          <GridItem key={post._meta.path} w="full" h="4xs" rounded="md" >
            <ContentCard title={post.title} summary={post.summary} year={post.year} day={post.day} month={post.month} url={post._meta.path} />
          </GridItem>
      ))}
    </Grid>
  );
}