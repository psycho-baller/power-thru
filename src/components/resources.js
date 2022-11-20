import "./info.css";
import { Flex, Box, Spacer, Stack } from "@chakra-ui/react";
import books from "../data/books";
import videos from "../data/videos";

export default function Resources() {
  return (
    <section id="resources" className="resources h-screen">
      <h1 className="text-4xl font-bold">Resources</h1>

      <Flex>
        <Spacer />

        <Box>
          <h2 className="text-2xl font-bold text-center">Books</h2>
          <Stack>
            {books.map((book) => (
              <Box className="items-center justify-center flex">
                <a href={book.amazon}>
                  {/* <div className=" items-center justify-center"> */}
                    <img className="h-20 p-0 mr-2" src={book.cover} />
                  {/* </div> */}
                </a>
                {book.title}
              </Box>
            ))}
          </Stack>
        </Box>
        {/* <Spacer />
        <Box>
          <h2 className="text-2xl font-bold text-center">Videos</h2>
          <Stack>
            {videos.map((video) => (
              <Box className="items-center justify-center flex">
                <a href={video.link}>
                  <div className=" items-center justify-center">
                    {video.title}
                  </div>
                </a>
              </Box>
            ))}
          </Stack>
        </Box> */}
        <Spacer />
      </Flex>
    </section>
  );
}
