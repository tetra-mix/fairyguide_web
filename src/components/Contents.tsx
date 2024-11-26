import { Flex, Grid, GridItem } from "@yamada-ui/react";
import { allContents } from "content-collections";

import { ContentCard } from "./curricular/ContentCard";

export const Contents = () => {
  return (
    <Flex
      w="full"
      h={{ base: 800, sm: "auto" }}
      flexFlow={{ base: "row wrap", sm: "column" }}
      justifyContent={"center"}
      gap={{ base: 8, sm: 2 }}
    >
      {allContents.map((post: any) => (
        <ContentCard
          key={post._meta.url}
          image={post.image}
          content={post.content}
          title={post.title}
          summary={post.summary}
          year={post.year}
          day={post.day}
          month={post.month}
          url={post._meta.path}
        />
      ))}
    </Flex>
  );
};
