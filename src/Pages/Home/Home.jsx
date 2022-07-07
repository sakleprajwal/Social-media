import { Box, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../../Components/BottomNav/BottomNav";
import PostCard from "../../Components/PostCard/PostCard";
import SideNav from "../../Components/SideNav/SideNav";
import TopBar from "../../Components/TopBar/TopBar";
import { getAllPosts } from "../../Redux/AsyncThunk/PostService/PostService";
import { getAllUsers } from "../../Redux/AsyncThunk/UserService/UserService";

const Home = () => {
  const [smallerDevice] = useMediaQuery("(max-width: 900px)");
  const dispatch = useDispatch();
  // const { greetingSubHeaderFeed, greetingDescriptionFeed } = fallbackData;
  const postList = useSelector((state) => state.posts);
  // console.log(postList)
  // const [olderFirst, setOlderFirst] = useState(false);

  useEffect(() => {
    
    dispatch(getAllUsers());
    // if (postList.length === 0) {
      dispatch(getAllPosts());
    // }
  }, []);
  
  return (
    <Box display="flex" gap="12" color="white">
      {smallerDevice ? <BottomNav /> : <SideNav />}
      <VStack
        minH="100vh"
        flex="2"
        gap="4"
        align="stretch"
        p={`${smallerDevice ? "1rem 1rem 6rem 1rem" : "1rem 0"}`}
      >
        <TopBar />
        <Box>
          <Stack
            align="stretch"
            spacing="6"
            borderRadius="1rem"
            // direction={olderFirst ? "column" : "column-reverse"}
          >
            {postList?.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })}
          </Stack>
          </Box>
      </VStack>
    </Box>
  );
  };

  export default Home;