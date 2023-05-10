import React from "react";
import { Grid } from "@mui/material";
import WidgetCards from "./WidgetCards";

import github_logo from "../assets/logos/github.png";
import gmail_logo from "../assets/logos/gmail.png";
import nameTag_logo from "../assets/logos/nameTag.png";
import classroom_logo from "../assets/logos/classroom.png";
import telegram_logo from "../assets/logos/telegram.png";
import instagram_logo from "../assets/logos/instagram.png";
import youtube_logo from "../assets/logos/youtube.png";
import netflix_logo from "../assets/logos/netflix.png";
import play_logo from "../assets/logos/play.png";
import clapper_logo from "../assets/logos/clapper.png";

const LogoArr = [
  {
    id: 0,
    name: "Github",
    logo: github_logo,
    url: "https://github.com/",
  },
  {
    id: 1,
    name: "Gmail",
    logo: gmail_logo,
    url: "https://mail.google.com/",
  },
  {
    id: 2,
    name: "SAP",
    logo: nameTag_logo,
    url: "https://kiitportal.kiituniversity.net/irj/portal/",
  },
  {
    id: 3,
    name: "Classroom",
    logo: classroom_logo,
    url: "https://classroom.google.com/u/3/?pli=1",
  },
  {
    id: 4,
    name: "Telegram",
    logo: telegram_logo,
    url: "https://web.telegram.org/",
  },
  {
    id: 5,
    name: "Instagram",
    logo: instagram_logo,
    url: "https://www.instagram.com/",
  },
  {
    id: 6,
    name: "Youtube",
    logo: youtube_logo,
    url: "https://www.youtube.com/",
  },
  {
    id: 7,
    name: "9Anime",
    logo: netflix_logo,
    url: "https://9animetv.to/home",
  },
  {
    id: 8,
    name: "Hentaimama",
    logo: play_logo,
    url: "https://hentaimama.io/",
  },
  {
    id: 9,
    name: "Movies",
    logo: clapper_logo,
    url: "https://hdtoday.tv/home",
  },
];

const WidgetContainer = () => {
  return (
    <Grid
      position="relative"
      paddingLeft="1rem"
      paddingRight="1rem"
      gap="1rem"
      container
      direction="column"
      justifyContent="space-between"
      width="50%"
    >
      <Grid item container gap="1rem" justifyContent="space-between">
        {LogoArr.slice(0, 5).map((logo) => (
          <Grid item key={logo.id}>
            <WidgetCards
              title={logo.name}
              imageURL={logo.logo}
              url={logo.url}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item container gap="1rem" justifyContent="space-between">
        {LogoArr.slice(5).map((logo) => (
          <Grid item key={logo.id}>
            <WidgetCards
              title={logo.name}
              imageURL={logo.logo}
              url={logo.url}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WidgetContainer;
