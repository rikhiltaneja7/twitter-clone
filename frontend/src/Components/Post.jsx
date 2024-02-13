import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from "@chakra-ui/react";
import { BiLike, BiChat } from 'react-icons/bi';
import React from "react";

function Post({tweet}) {
  console.log(tweet);
  return (
    <div>
      <Card maxW="xxl">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">{tweet.user}</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
          {tweet.description}
          </Text>
        </CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Post;
