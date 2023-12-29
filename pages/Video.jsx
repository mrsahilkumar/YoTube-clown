import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: black;
  font-weight: 500;
  color: white;
  border: none;
  width: 90px; /* Adjust width */
  height: 50px; /* Adjust height */
  border-radius:50%;
  padding: 5px 5px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/9iIX4PBplAY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Sanju: KAR HAR MAIDAAN FATEH Full Video Song | Ranbir Kapoor | Rajkumar Hirani</Title>
        <Details>
          <Channel>
            <ChannelInfo>

              <Image src="https://yt3.googleusercontent.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj" />
              <ChannelDetail>
                <ChannelName>T-Series</ChannelName>
                <ChannelCounter>256M subscribers </ChannelCounter>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE </Subscribe>
          </Channel>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 1.6M
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>

            <ChannelDetail>
              <Info>189M views  5 years ago</Info>


              <Description>


                Presenting “Kar Har Maidaan Fateh” Full Video Song, a song about hope and courage. Based on the life of Bollywood star Sanjay Dutt, and directed by Rajkumar Hirani,  A Vinod Chopra Films and Rajkumar Hirani Films production, presented by Fox Star Studios, the movie stars Ranbir Kapoor, Paresh Rawal and Manisha Koirala in the lead.
                ♪ Available on ♪
                Set as Caller Tune:
                Set "Kar Har Maidaan Fateh" as your caller tune - sms SANJU6 To 54646
                Set "Kar Har Maidaan Fateh - Pighalade Janjire" as your caller tune - ssms SANJU7 To 54646
                Set "Kar Har Maidaan Fateh - Ghayal Parinda" as your caller tune -  sms SANJU8 To 54646
                Set "Kar Har Maidaan Fateh - In Gardishon Ke Baadal" as your caller tune -sms SANJU9 To 54646
                Set "Kar Har Maidaan Fateh - Teri Koshishen" as your caller tune - sms SANJU10 To 54646
                ________________________________________
                Song: Kar Har Maidaan Fateh
                Singers: Sukhwinder Singh & Shreya Ghoshal
                Music: Vikram Montrose
                Lyrics: Shekhar Astitwa
                Song Programmed by: Vikram Montrose
                Additional Programming: Bibhuti Gogoi
                Sound Design: Utpal Das
                Live Percussions: Pratap Rath
                Live Guitars: Ishaan Das
                Drums: Zorran Mendonsa
                Violins: Kailash Patra
                Vocals & Live recorded by: Kittu Myakal
                Asst. Recording Engineer: Urmila Sutar
                Recording Studio: Soundideaz Studio
                Mixed by: Steve Fitzmaurice
                ________________________________________
                Operator Codes:
                1.Kar Har Maidaan Fateh
                Vodafone Subscribers Dial 53710503587
                Airtel Subscribers Dial 5432116540375
                Idea Subscribers Dial 5678910503587
                Tata DoCoMo Subscribers dial 54321110503587
                BSNL (South / East) Subscribers sms BT 10503587 To 56700
                BSNL (North / West) Subscribers sms BT 7111978 To 56700
                Virgin Subscribers sms TT 10503587 To 58475
                MTNL Subscribers sms PT 10503587 To 56789

                2.Kar Har Maidaan Fateh - Pighalade Janjire
                Vodafone Subscribers Dial 53710503607
                Airtel Subscribers Dial 5432116540014
                Idea Subscribers Dial 5678910503607
                Tata DoCoMo Subscribers dial 54321110503607
                BSNL (South / East) Subscribers sms BT 10503607 To 56700
                BSNL (North / West) Subscribers sms BT 7111979 To 56700
                Virgin Subscribers sms TT 10503607 To 58475
                MTNL Subscribers sms PT 10503607 To 56789

                3.Kar Har Maidaan Fateh - Ghayal Parinda
                Vodafone Subscribers Dial 53710503589
                Airtel Subscribers Dial 5432116538633
                Idea Subscribers Dial 5678910503589
                Tata DoCoMo Subscribers dial 54321110503589
                BSNL (South / East) Subscribers sms BT 10503589 To 56700
                BSNL (North / West) Subscribers sms BT 7111980 To 56700
                Virgin Subscribers sms TT 10503589 To 58475
                MTNL Subscribers sms PT 10503589 To 56789

                4.Kar Har Maidaan Fateh - In Gardishon Ke Baadal
                Vodafone Subscribers Dial 53710503596
                Airtel Subscribers Dial 5432116540361
                Idea Subscribers Dial 5678910503596
                Tata DoCoMo Subscribers dial 54321110503596
                BSNL (South / East) Subscribers sms BT 10503596 To 56700
                BSNL (North / West) Subscribers sms BT 7111981 To 56700
                Virgin Subscribers sms TT 10503596 To 58475
                MTNL Subscribers sms PT 10503596 To 56789

                5.Kar Har Maidaan Fateh - Teri Koshishen
                Vodafone Subscribers Dial 53710503576
                Airtel Subscribers Dial 5432116540395
                Idea Subscribers Dial 5678910503576
                Tata DoCoMo Subscribers dial 54321110503576
                BSNL (South / East) Subscribers sms BT 10503576 To 56700
                BSNL (North / West) Subscribers sms BT 7111982 To 56700
                Virgin Subscribers sms TT 10503576 To 58475
                MTNL Subscribers sms PT 10503576 To 56789
              </Description>
            </ChannelDetail>
          </ChannelInfo>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
