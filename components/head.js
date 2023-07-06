import React from "react";
import NextHead from "next/head";
import { Logo } from "@/utils/constants";

const defaultTitle = "Connectify";
const defaultOGTitle = "Connectify";
const defaultDescription = "Connectify: Experience Efficient Communication and Seamless Collaboration. Connect with ease using Connectify, a powerful chat application designed to streamline communication and enhance collaboration. Enjoy real-time messaging, file sharing, and organized threaded conversations. With Connectify's user-friendly interface and robust features, stay connected with colleagues, friends, or clients effortlessly. Ensure the security of your conversations with advanced encryption and customizable privacy settings. Take your communication to the next level with Connectify and unlock a new level of productivity and connectivity in your daily interactions.";
const defaultOGURL = "https://connectify-git.vercel.app/login";
const defaultOGImage = Logo;
const defaultAltText = "Connectify";
const OG_LOGO = Logo;
const CustomHead = (props) => {
  const { userName, username } = props;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      {props.metaTags && props.metaTags.length > 0 && (
        <meta name="keywords" content={props.metaTags.join(",")}></meta>
      )}
      <link rel="canonical" href={defaultOGURL} />
      <meta property="fb:app_id" content={"1344493016062063"} />
      <link href={Logo} rel="icon" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultOGTitle || defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:url" content={defaultOGURL} />
      <meta name="twitter:site" content={defaultOGURL} />
      <meta name="twitter:creator" content={defaultOGURL} />
      <meta name="twitter:image" content={defaultOGImage} />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content={props.language || "en"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultOGTitle || defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={defaultOGURL} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:image" content={OG_LOGO} />
      <meta property="og:image:secure_url" content={OG_LOGO} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content={defaultAltText} />

      {/* WhatsApp */}
      {/* <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:image" content={props.ogImage || props.graphUrl || props.facebookUrl || OG_LOGO} />
      <meta property="og:image:secure_url" content={props.ogImage || props.facebookUrl || props.graphUrl || OG_LOGO} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:alt" content={props.altText || defaultAltText} /> */}

      {/* WhatsApp */}
      {/* <meta property="og:whatsapp" content="true" />
      <meta property="og:whatsapp:country" content="+91" />
      <meta property="og:whatsapp:phone" content="+918908877800" /> */}
    </NextHead>
  )
}

export default CustomHead;
