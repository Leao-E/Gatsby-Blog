import React from "react";
import Layout from "../components/Layout";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
const PostContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const ImageMock = styled.div`
  height: 150px; 
  width: 100%;
  margin-bottom: 5px;
  border-radius: 8px;
  background-color: grey;
`
const Title = styled.span`
  font-size: 1.5rem;
  line-height: 1.3rem;
  align-self: flex-start;  
`
const Description = styled.span`
  font-size: 0.7rem;
`
function PostMock (){
  return(
    <PostContainer>
      <ImageMock />
      <Title>Title</Title>
      <Description>Description</Description>
    </PostContainer>        
  );
}

export default function Home() {
  return (
    <Layout>
      <PostMock />
    </Layout>
  );
}